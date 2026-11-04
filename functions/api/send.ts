interface Env {
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  CONTACT_NOTIFICATION_EMAIL?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle OPTIONS preflight requests
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};

// Handle POST request to /api/send
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  try {
    const raw = await request.text();
    let body: any = {};
    try {
      body = JSON.parse(raw || '{}');
    } catch {
      return new Response(
        JSON.stringify({ error: 'Malformed JSON payload' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required fields.' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address provided.' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_your_api_key_here' || apiKey.startsWith('re_your_')) {
      return new Response(
        JSON.stringify({
          success: true,
          simulated: true,
          id: 'sim_' + Date.now(),
          message: 'Dispatch received in test mode. Set valid RESEND_API_KEY in Cloudflare environment variables for live transmission.',
        }),
        { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // Live send via Resend REST API (Universal standard Fetch on Cloudflare Edge)
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM || 'onboarding@resend.dev',
        to: env.CONTACT_NOTIFICATION_EMAIL || 'mythreie.dumpati@gmail.com',
        reply_to: email,
        subject: `New Archival Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; padding: 24px; border: 2px solid #141210; background: #faf9f5; color: #141210;">
            <h2 style="color: #8C3833; border-bottom: 2px solid #141210; padding-bottom: 8px; margin-top: 0; text-transform: uppercase;">The Daily Chronicle // Archival Dispatch</h2>
            <p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p>
            <hr style="border: none; border-top: 1px solid #141210; margin: 16px 0;" />
            <p style="white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message}</p>
          </div>
        `,
      }),
    });

    const data: any = await resendRes.json();

    if (!resendRes.ok) {
      return new Response(
        JSON.stringify({ error: data?.message || 'Failed to dispatch transmission via Resend.' }),
        { status: resendRes.status, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || 'Internal server error on Cloudflare Edge' }),
      { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    );
  }
};

