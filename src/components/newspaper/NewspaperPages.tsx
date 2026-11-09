import React from 'react';
import {
  ExternalLink,
  Download,
  Send,
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { NewspaperStamp } from './elements/NewspaperStamp';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';

// =========================================================================
// PAGE 01: THE OFFICIAL FRONT COVER (Exact reference from user upload)
// =========================================================================
export const Page01Cover: React.FC<{ onOpenNewspaper?: () => void }> = ({ onOpenNewspaper }) => {
  return (
    <div
      onClick={onOpenNewspaper}
      className="w-full h-full relative overflow-hidden cursor-pointer select-none bg-[#f2f1ec] group flex items-center justify-center"
      role="button"
      tabIndex={0}
      aria-label="The Daily Chronicle - Notes on a Life. Click to open archive."
    >
      {/* Exact Cover Graphic fitting strict A4 page */}
      <img
        src="/daily_chronicle_cover.jpg"
        alt="The Daily Chronicle - Notes on a Life"
        className="w-full h-full object-cover pointer-events-none select-none block"
        loading="eager"
      />

      {/* Tactile Click Target over the Button Area */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onOpenNewspaper?.();
        }}
        className="absolute bottom-[4.5%] left-1/2 -translate-x-1/2 w-[52%] h-[5%] cursor-pointer group-hover:brightness-125 transition-all"
        title="Click to Open Archive"
      />

      {/* Hover Highlight Ring */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#141210]/20 pointer-events-none transition-colors" />

      <div className="sr-only">
        <h1>THE DAILY CHRONICLE - VOL 01. 2026</h1>
        <h2>NOTES ON A LIFE</h2>
        <p>A collection of work, thoughts, and curiosities. An ongoing chapter.</p>
        <p>Portfolio of {RESUME_DATA.personal.name}, Cybersecurity Researcher and Engineer.</p>
      </div>
    </div>
  );
};

// =========================================================================
// UNIVERSAL PAGE TOP HEADER (Name on top of every page)
// =========================================================================
export const NewspaperPageHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between font-garamond text-[9.5px] sm:text-[10px] md:text-[10.5px] tracking-[0.22em] sm:tracking-[0.25em] text-[#111111] uppercase pb-1 mb-2 sm:mb-2.5 border-b border-[#111111] select-none shrink-0 font-bold">
      <span>MYTHREIE DUMPATI</span>
      <span>PORTFOLIO</span>
    </div>
  );
};

// =========================================================================
// PAGE 02: CONTENTS (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page02Contents: React.FC<{ onNavigateToSpread?: (spread: number) => void }> = ({
  onNavigateToSpread,
}) => {
  const contentsList = [
    {
      num: '01',
      title: 'Education',
      desc: 'My academic journey and qualifications',
      page: 3,
    },
    {
      num: '02',
      title: 'Professional Experience',
      desc: 'Practical experience across industry and public service',
      page: 4,
    },
    {
      num: '03',
      title: 'Projects',
      desc: 'Technical solutions built through research and development',
      page: 5,
    },
    {
      num: '04',
      title: 'Publications',
      desc: 'Research contributions in cybersecurity and related fields',
      page: 6,
    },
    {
      num: '05',
      title: 'Skills',
      desc: 'Technical competencies, tools, and frameworks',
      page: 7,
    },
    {
      num: '06',
      title: 'Volunteering & Certifications',
      desc: 'Leadership initiatives, community impact, and recognized credentials',
      page: 8,
    },
    {
      num: '07',
      title: 'Languages & Contact',
      desc: 'Linguistic proficiencies and communication dispatch',
      page: 9,
    },
  ];

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <NewspaperPageHeader />

          {/* Title and Subtitle */}
          <div className="mt-0.5 sm:mt-1 mb-2 shrink-0">
            <h2 className="font-garamond font-black text-2xl sm:text-3xl md:text-[34px] uppercase tracking-[0.02em] text-[#111111] leading-none">
              CONTENTS
            </h2>
            <p className="font-garamond italic text-xs sm:text-sm md:text-[14px] text-[#222222] mt-1 sm:mt-1.5 leading-snug">
              A record of academic work, research, and experience.
            </p>
            <div className="w-full border-b-[1.5px] border-[#111111] mt-2 sm:mt-2.5" />
          </div>
        </div>

        {/* The 7 Numbered Sections: spaced to gracefully utilize the vertical canvas */}
        <div className="flex-1 flex flex-col justify-between py-1.5 sm:py-2.5 md:py-3">
          {contentsList.map((item) => (
            <div
              key={item.num}
              onClick={() => onNavigateToSpread?.(item.page)}
              className="group cursor-pointer transition-transform duration-150 py-1 sm:py-1.5 px-0.5 rounded-xs hover:translate-x-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigateToSpread?.(item.page);
                }
              }}
            >
              {/* Title & Page Number */}
              <div className="flex items-baseline justify-between">
                <h3 className="font-garamond font-bold text-sm sm:text-base md:text-[16px] text-[#111111] leading-tight">
                  <span className="inline-block w-7 sm:w-8">{item.num}.</span>
                  <span>{item.title}</span>
                </h3>
                <span className="font-garamond font-bold text-xs sm:text-sm md:text-[14.5px] text-[#111111] tabular-nums ml-2">
                  0{item.page}
                </span>
              </div>
              {/* Description */}
              <p className="font-garamond text-[10.5px] sm:text-[11.5px] md:text-xs text-[#2c2825] pl-7 sm:pl-8 mt-0.5 leading-snug">
                {item.desc}
              </p>
              {/* Line in between is strictly AFTER the content, not in between */}
              <div className="w-full border-b border-dotted border-[#111111]/25 mt-1 sm:mt-1.5" />
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // CONTENTS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 02</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 03: 01. EDUCATION (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page03Education: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'ICSE — Secondary Education',
      institution: 'Living Vikasa Vidya Vanam',
      score: '81.4%',
      image: '/education_school.jpg',
      alt: 'Living Vikasa Vidya Vanam Campus',
    },
    {
      year: '2023',
      title: 'Diploma in Automobile Engineering',
      institution: 'Masab Tank Government Polytechnic College',
      score: '8.8/10',
      image: '/education_masab_tank.jpg',
      alt: 'Masab Tank Government Polytechnic College Building',
    },
    {
      year: '2026',
      title: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Keshav Memorial Engineering College',
      score: '8.36/10',
      image: '/education_kmec.jpg',
      alt: 'Keshav Memorial Engineering College Campus',
    },
  ];

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      {/* Universal Top Header Bar (Name on top of page) */}
      <NewspaperPageHeader />

      {/* Heading matching reference image with EB Garamond */}
      <div className="mb-1 sm:mb-2 shrink-0">
        <div className="flex items-baseline justify-between">
          <h2 className="font-garamond font-bold text-2xl sm:text-3xl md:text-[32px] text-[#111111] tracking-[0.01em] leading-tight">
            01. Education
          </h2>
          <span className="font-garamond font-bold text-lg sm:text-xl md:text-[22px] text-[#111111] tabular-nums">
            03
          </span>
        </div>
        <div className="w-full border-b border-dotted border-[#111111]/40 mt-1 mb-1 sm:mb-1.5" />
        <p className="font-garamond text-xs sm:text-sm text-[#222222]">
          My academic journey and qualifications
        </p>
      </div>

      {/* 3-Row Education Timeline Grid utilizing the full vertical space */}
      <div className="flex-1 grid grid-cols-[1fr_24px_1.15fr] sm:grid-cols-[1fr_30px_1.15fr] grid-rows-3 gap-x-2.5 sm:gap-x-4 py-2 sm:py-3 relative items-center">
        {/* Single Unbroken Continuous Vertical Timeline Spine spanning all 3 rows */}
        <div
          className="col-start-2 row-start-1 row-end-4 relative h-full flex justify-center pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="w-[2.5px] bg-[#111111] absolute top-[8px] bottom-[8px] left-1/2 -translate-x-1/2" />
        </div>

        {milestones.map((item, index) => {
          const rowClass = index === 0 ? 'row-start-1' : index === 1 ? 'row-start-2' : 'row-start-3';

          return (
            <React.Fragment key={index}>
              {/* Left Column: Campus Photograph (Strictly aligned to dot top, uniform aspect ratio & equal spatial gaps) */}
              <div
                className={`col-start-1 ${rowClass} self-center w-full aspect-[4/3] max-h-[95px] sm:max-h-[120px] md:max-h-[135px] bg-[#ebe7dc] overflow-hidden shadow-xs border border-[#111111]/20`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale contrast-110 block"
                  loading="eager"
                />
              </div>

              {/* Center Timeline Node Dot (Aligned exactly to Image Top and Year) */}
              <div className={`col-start-2 ${rowClass} self-center flex justify-center items-center z-10 pointer-events-none`}>
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#111111] shrink-0" />
              </div>

              {/* Right Column: Educational Ledger */}
              <div className={`col-start-3 ${rowClass} self-center flex flex-col justify-center`}>
                <span className="font-garamond text-xs sm:text-sm text-[#111111] font-normal leading-none mb-1 block">
                  {item.year}
                </span>
                <h3 className="font-garamond font-bold text-xs sm:text-[14px] md:text-[15.5px] text-[#111111] leading-snug">
                  {item.title}
                </h3>
                <p className="font-garamond text-[10.5px] sm:text-xs text-[#2c2825] mt-0.5 leading-snug">
                  {item.institution}
                </p>
                <span className="font-garamond font-bold text-xs sm:text-sm text-[#111111] mt-1 block">
                  {item.score}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 01. EDUCATION</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 03</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 04: 02. PROFESSIONAL EXPERIENCE (Internships Broadside)
// =========================================================================
export const Page04Experience: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Master Heading: professional Experience / Internships (enlarged, centered, and placed a bit down from the top) */}
        <div className="flex flex-col items-center justify-center mt-3 sm:mt-4 md:mt-5 mb-2 sm:mb-2.5 text-center shrink-0">
          <img
            src="/internships_title_vector@2x.png"
            alt="professional Experience — Internships"
            className="w-[230px] sm:w-[265px] md:w-[295px] max-w-full h-auto object-contain block pointer-events-none drop-shadow-xs mx-auto"
          />
          <div className="sr-only">
            <h2>professional Experience</h2>
            <h3>Internships</h3>
          </div>
        </div>

        {/* Two-Column Symmetrical Layout (content restored to natural position) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-7 items-start mt-2 sm:mt-2.5">
          {/* Column 1: Teleparadigm Networks Ltd. */}
          <div className="flex flex-col">
            {/* Date Tag */}
            <div className="h-[20px] flex items-center justify-center font-garamond text-[10.5px] sm:text-xs text-[#222222] font-medium tracking-wide text-center mb-1 shrink-0">
              Sept – Nov 2025
            </div>

            {/* Sleek Picture Frame with Thin Internal Border */}
            <div className="w-full max-w-[135px] sm:max-w-[155px] md:max-w-[170px] mx-auto aspect-square bg-white border-[1.5px] border-[#181818] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22)] overflow-hidden flex items-center justify-center p-0.5 shrink-0">
              <img
                src="/internship_teleparadigm.png"
                alt="Teleparadigm Networks Ltd. Internship Artwork"
                className="w-full h-full object-contain block pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Title */}
            <h4 className="font-garamond font-bold text-xs sm:text-[13.5px] md:text-[14.5px] text-[#111111] leading-tight mt-1.5 mb-1 min-h-[32px] sm:min-h-[36px] flex flex-col justify-start">
              <span>Teleparadigm</span>
              <span>Networks Ltd.</span>
            </h4>

            {/* Description */}
            <p className="font-garamond text-[9.5px] sm:text-[10.5px] md:text-[11px] text-[#222222] leading-relaxed text-justify sm:text-left">
              Developed a secure, decentralized file-sharing platform with role-based access controls to protect sensitive user data from unauthorized access. Implemented distributed storage methods and dynamic permission controls across network nodes, maintaining high data privacy while removing single points of failure.
            </p>
          </div>

          {/* Column 2: Women Safety Wing, Telangana Police */}
          <div className="flex flex-col">
            {/* Date Tag */}
            <div className="h-[20px] flex items-center justify-center font-garamond text-[10.5px] sm:text-xs text-[#222222] font-medium tracking-wide text-center mb-1 shrink-0">
              Dec 2024 – Jan 2025
            </div>

            {/* Sleek Picture Frame with Thin Internal Border (Image occupies full space without excessive whitespace) */}
            <div className="w-full max-w-[135px] sm:max-w-[155px] md:max-w-[170px] mx-auto aspect-square bg-white border-[1.5px] border-[#181818] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22)] overflow-hidden flex items-center justify-center p-0.5 shrink-0">
              <img
                src="/internship_telangana_police.png"
                alt="Women Safety Wing, Telangana Police Internship Artwork"
                className="w-full h-full object-contain block pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Title */}
            <h4 className="font-garamond font-bold text-xs sm:text-[13.5px] md:text-[14.5px] text-[#111111] leading-tight mt-1.5 mb-1 min-h-[32px] sm:min-h-[36px] flex flex-col justify-start">
              <span>Women Safety Wing,</span>
              <span>Telangana Police</span>
            </h4>

            {/* Description */}
            <p className="font-garamond text-[9.5px] sm:text-[10.5px] md:text-[11px] text-[#222222] leading-relaxed text-justify sm:text-left">
              Supported key public safety initiatives at the Women Safety Wing&apos;s Bharosa Module by designing high-impact visual campaigns—including T-Safe metro ads reaching 500,000+ citizens—and analysing operational data across 26 centres to boost reporting efficiency, while managing critical government workflows like Daily Situation Reports and Operation Smile 11.
            </p>
          </div>
        </div>
      </div>

      {/* Broadside Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 02. PROFESSIONAL EXPERIENCE</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 04</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 05: 03. PROJECTS (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page05Projects: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Master Heading: Projects / Curiosity, translated into code. */}
        <div className="text-center mt-0.5 sm:mt-1 mb-2.5 sm:mb-3 shrink-0">
          <h2 className="font-garamond font-black text-2xl sm:text-3xl md:text-[34px] text-[#111111] tracking-[0.01em] leading-none">
            Projects
          </h2>
          <p className="font-garamond italic text-xs sm:text-sm md:text-[14px] text-[#222222] mt-1 sm:mt-1.5">
            Curiosity, translated into code.
          </p>
        </div>

        {/* 3 Projects distributed with clean, natural editorial gaps */}
        <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mt-1.5 sm:mt-2">
          {/* 1. SecureShare (Left Vertical Accent Bar) */}
          <div className="border-l-[3.5px] sm:border-l-[4px] border-[#111111] pl-3 sm:pl-4 py-0.5">
            <h3 className="font-garamond font-bold text-xs sm:text-[13.5px] md:text-[14.5px] text-[#111111] leading-snug mb-1">
              SecureShare | Decentralized Secure File Sharing and Communication Platform
            </h3>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-[#222222] leading-relaxed text-justify sm:text-left">
              Developed a secure communication platform using Flutter and FastAPI, integrating IPFS-based file storage and blockchain-backed integrity verification. Implemented real-time WebSocket messaging, JWT authentication, role-based access control, administrative auditing, screenshot prevention and self-destructing file transfers to enhance data security and privacy.
            </p>
            <div className="mt-1 sm:mt-1.5">
              <a
                href="https://github.com/mythreie-dumpati/SecureShare"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#111111] hover:underline font-medium inline-block"
              >
                Link: https://github.com/mythreie-dumpati/SecureShare
              </a>
            </div>
          </div>

          {/* 2. Question Paper Automation Tool (QPAT) (Right Vertical Accent Bar) */}
          <div className="border-r-[3.5px] sm:border-r-[4px] border-[#111111] pr-3 sm:pr-4 py-0.5 text-right">
            <h3 className="font-garamond font-bold text-xs sm:text-[13.5px] md:text-[14.5px] text-[#111111] leading-snug mb-1">
              Question Paper Automation Tool (QPAT) | Automated Academic Assessment System
            </h3>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-[#222222] leading-relaxed text-right">
              Developed a full-stack assessment automation platform using FastAPI and Flutter. Integrated NLP-based question validation, automated parsing, Course Outcome mapping and Bloom&apos;s Taxonomy classification to generate balanced question papers, with secure, password-protected PDF exports.
            </p>
            <div className="mt-1 sm:mt-1.5">
              <a
                href="https://github.com/mythreie-dumpati/Question-Paper-Automation-Tool"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#111111] hover:underline font-medium inline-block"
              >
                Link: https://github.com/mythreie-dumpati/Question-Paper-Automation-Tool
              </a>
            </div>
          </div>

          {/* 3. Social Media Investigative Assistant (SMIA) (Left Vertical Accent Bar) */}
          <div className="border-l-[3.5px] sm:border-l-[4px] border-[#111111] pl-3 sm:pl-4 py-0.5">
            <h3 className="font-garamond font-bold text-xs sm:text-[13.5px] md:text-[14.5px] text-[#111111] leading-snug mb-1">
              Social Media Investigative Assistant (SMIA) | Digital Forensic Documentation Tool
            </h3>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-[#222222] leading-relaxed text-justify sm:text-left">
              Developed a Flutter-based digital forensics tool for structured case management and secure evidence collection. Implemented timestamped screenshot capture, automated forensic report generation and hybrid local/cloud storage to maintain evidence integrity, traceability and compliance.
            </p>
            <div className="mt-1 sm:mt-1.5">
              <a
                href="https://github.com/mythreie-dumpati/social-media-investigative-assistant-for-law-enforcement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#111111] hover:underline font-medium inline-block"
              >
                Link: https://github.com/mythreie-dumpati/social-media-investigative-assistant-for-law-enforc ement
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 03. PROJECTS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 05</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 06: 04. PUBLICATIONS
// =========================================================================
export const Page06Publications: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <NewspaperPageHeader />

          {/* Master Heading: Publications / Research, written and shared. */}
          <div className="text-center mt-1 sm:mt-1.5 mb-2 sm:mb-3 shrink-0">
            <h2 className="font-garamond font-black text-2xl sm:text-3xl md:text-[36px] text-[#111111] tracking-[0.01em] leading-none">
              Publications
            </h2>
            <p className="font-garamond italic text-xs sm:text-sm md:text-[15px] text-[#222222] mt-1 sm:mt-1.5 leading-snug">
              Research, written and shared.
            </p>
          </div>
        </div>

        {/* 3 Dark Rounded Cards matching Reference Image */}
        <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-3.5 my-1 sm:my-2">
          {/* Top Row: Two Equal Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Card 1: Decentralized Secure File Sharing */}
            <div className="bg-black text-white rounded-3xl p-3.5 sm:p-4 md:p-5 flex flex-col justify-between shadow-md">
              <div className="flex justify-between items-baseline gap-1.5">
                <h3 className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white leading-tight">
                  An Intelligent Decentralized Secure File Sharing System with Privacy-Preserving Access Control
                </h3>
                <span className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white shrink-0 ml-1">
                  2026
                </span>
              </div>

              <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-white/95 text-center my-auto leading-relaxed px-1">
                A decentralised file-sharing system integrating Blockchain, IPFS, Shamir’s Secret Sharing and Isolation Forest-based anomaly detection.
              </p>

              <div>
                <div className="text-center font-sans text-[8.5px] sm:text-[9.5px] text-white/90 space-y-0.5">
                  <div>Journal Name: ICSSEECC -2026</div>
                  <div>Publisher: IEEE Xplor</div>
                </div>

                <div className="mt-3 sm:mt-3.5 flex justify-center">
                  <a
                    href="https://ieeexplore.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-full px-5 sm:px-6 py-1.5 text-[10.5px] sm:text-xs font-sans font-medium hover:bg-neutral-200 transition-colors inline-block text-center shadow-xs"
                  >
                    click to read
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Instagram Profile Forensics */}
            <div className="bg-black text-white rounded-3xl p-3.5 sm:p-4 md:p-5 flex flex-col justify-between shadow-md">
              <div className="flex justify-between items-baseline gap-1.5">
                <h3 className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white leading-tight">
                  A Web-Based Automation Framework for Instagram Profile Forensics
                </h3>
                <span className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white shrink-0 ml-1">
                  2025
                </span>
              </div>

              <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-white/95 text-center my-auto leading-relaxed px-1">
                Developed a FastAPI–Flutter digital forensics tool automating evidence acquisition, SHA-256 hashing, timestamp validation and tamper-evident PDF report generation.
              </p>

              <div>
                <div className="text-center font-sans text-[8.5px] sm:text-[9.5px] text-white/90 space-y-0.5">
                  <div>Journal Name: ICCIC - 2025</div>
                  <div>Publisher: IJRDET</div>
                </div>

                <div className="mt-3 sm:mt-3.5 flex justify-center">
                  <a
                    href="https://ijrdet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-full px-5 sm:px-6 py-1.5 text-[10.5px] sm:text-xs font-sans font-medium hover:bg-neutral-200 transition-colors inline-block text-center shadow-xs"
                  >
                    click to read
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Full-Width Card */}
          <div className="bg-black text-white rounded-3xl p-3.5 sm:p-4 md:p-5 shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-baseline gap-2">
              <h3 className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white leading-tight">
                Quantifying the Security-Utility-Latency Frontier: An Empirical Benchmark of Small and Medium Language Models Under Adversarial Injection
              </h3>
              <span className="font-sans font-bold text-xs sm:text-[13px] md:text-[13.5px] text-white shrink-0 ml-1">
                2026
              </span>
            </div>

            <p className="font-sans text-[9px] sm:text-[10px] md:text-[10.5px] text-white/95 text-center my-2 sm:my-2.5 leading-relaxed max-w-xl mx-auto">
              Evaluated five open-weight language models against jailbreak and prompt-injection attacks, analysing trade-offs between robustness, over-refusal and latency.
            </p>

            <div className="mt-2 flex items-center justify-between">
              <div className="font-sans text-[8.5px] sm:text-[9.5px] text-white/90 space-y-0.5">
                <div>Journal Name: ISDDC - 2026</div>
                <div>Publisher: IEEE Xplore</div>
              </div>
              <div className="bg-white text-black rounded-full px-4 sm:px-5 py-1 text-[9.5px] sm:text-[10.5px] font-sans font-medium text-center leading-tight shadow-xs shrink-0">
                <div>To appear in</div>
                <div>IEEE Xplore</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 04. PUBLICATIONS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 06</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 07: 05. SKILLS (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page07Skills: React.FC = () => {
  const skillsList = [
    {
      num: 1,
      title: 'Cybersecurity & Forensics',
      items: 'Vulnerability Assessment | Network Scanning & Analysis | Mobile & Digital Forensics',
    },
    {
      num: 2,
      title: 'Security & Forensic Tools',
      items: 'Burp Suite | Wireshark | Nmap/Zenmap | Metasploit | Kali Linux',
    },
    {
      num: 3,
      title: 'Programming Languages:',
      items: 'Python | Java | JavaScript | CSS | Dart | C | HTML | SQL | Bash & Shell Scripting',
    },
    {
      num: 4,
      title: 'Backend & Web Technologies',
      items: 'FastAPI | WebSockets | JWT Authentication | Role-Based Access Control (RBAC)',
    },
    {
      num: 5,
      title: 'Mobile & App Development',
      items: 'Flutter | Firebase',
    },
    {
      num: 6,
      title: 'Distributed Systems',
      items: 'Blockchain | P2P Protocols | InterPlanetary File System (IPFS)',
    },
    {
      num: 7,
      title: 'AI & Applied Data',
      items: 'Natural Language Processing | Semantic Similarity | Text Classification | Scikit-learn/Spacy',
    },
    {
      num: 8,
      title: 'Tools',
      items: 'Docker | Git/GitHub | Linux (Parrot, Kali, Fedora) | Android Studio | VS Code | Jupyter Notebook',
    },
    {
      num: 9,
      title: 'Soft Skills',
      items: 'Team Leadership | Problem Solving | communication | Project Management | Technical Writing & Presentation',
    },
  ];

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <NewspaperPageHeader />

          {/* Master Heading with Thick Left Vertical Bar */}
          <div className="flex items-center gap-2.5 sm:gap-3 mt-1 sm:mt-1.5 mb-2 sm:mb-2.5 shrink-0">
            <div className="w-[3px] sm:w-[3.5px] h-7 sm:h-8 md:h-9 bg-[#111111]" />
            <h2 className="font-garamond font-bold text-2xl sm:text-3xl md:text-[34px] text-[#111111] leading-none">
              Skills
            </h2>
          </div>
        </div>

        {/* 9 Numbered Skill Categories: calibrated vertical flex distribution */}
        <div className="flex-1 flex flex-col justify-between py-0.5 sm:py-1">
          {skillsList.map((category) => (
            <div key={category.num} className="py-0.5">
              <h3 className="font-garamond font-bold text-xs sm:text-[13px] md:text-[14px] text-[#111111] leading-snug">
                <span className="inline-block w-4 sm:w-5">{category.num}.</span>
                <span>{category.title}</span>
              </h3>
              <p className="font-garamond italic text-[10px] sm:text-[11px] md:text-[11.5px] text-[#222222] pl-4 sm:pl-5 mt-0.5 leading-snug">
                {category.items}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 05. SKILLS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 07</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 08: 06. VOLUNTEERING & CERTIFICATIONS (Exact reproduction of reference image)
// =========================================================================
export const Page08Certifications: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div className="flex-1 flex flex-col">
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* TOP HALF: VOLUNTEERING */}
        <div className="mt-1 sm:mt-1.5">
          <h2 className="font-garamond font-bold text-2xl sm:text-[26px] md:text-[28px] text-[#111111] leading-none mb-1">
            Volunteering
          </h2>
          <div className="w-full border-b-[1.5px] border-[#9e9e9e] mb-3 sm:mb-3.5" />

          <div className="space-y-3 sm:space-y-3.5">
            {/* 1. CSI KMEC */}
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-[82px] sm:w-[94px] md:w-[102px] shrink-0 font-sans text-[9.5px] sm:text-[10.5px] md:text-[11px] text-[#111111] leading-tight select-none">
                <div>[ 15/06/2023 -</div>
                <div className="pl-1.5 sm:pl-2">25/06/2026 ]</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-garamond font-bold text-xs sm:text-[13px] md:text-[13.5px] text-[#111111] leading-tight">
                  <div>Social Media Team – Computer Society of India</div>
                  <div>(CSI) KMEC</div>
                </h3>
                <p className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#222222] mt-1 leading-snug">
                  Led multi-platform digital marketing initiatives and content creation to actively promote tech symposiums, hackathons, and skill-building workshops to the student body.
                </p>
              </div>
            </div>

            {/* 2. Event Organizer */}
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-[82px] sm:w-[94px] md:w-[102px] shrink-0 font-sans text-[9.5px] sm:text-[10.5px] md:text-[11px] text-[#111111] leading-tight select-none">
                <div>[ 09/11/2023 -</div>
                <div className="pl-1.5 sm:pl-2">15/02/2026 ]</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-garamond font-bold text-xs sm:text-[13px] md:text-[13.5px] text-[#111111] leading-tight">
                  Event Organizer for College
                </h3>
                <p className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#222222] mt-1 leading-snug">
                  Coordinated logistics, scheduling, and cross-functional teams for flagship technical and cultural college festivals, driving high student participation and ensuring seamless event execution.
                </p>
              </div>
            </div>

            {/* 3. Student Body President */}
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-[82px] sm:w-[94px] md:w-[102px] shrink-0 font-sans text-[9.5px] sm:text-[10.5px] md:text-[11px] text-[#111111] leading-tight select-none">
                <div>[ 10/07/2018 -</div>
                <div className="pl-1.5 sm:pl-2">15/03/2019 ]</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-garamond font-bold text-xs sm:text-[13px] md:text-[13.5px] text-[#111111] leading-tight">
                  Student Body President at School
                </h3>
                <p className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#222222] mt-1 leading-snug">
                  Represented the student body to institutional leadership, spearheading campus-wide initiatives, policy improvements, and major events.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM HALF: CERTIFICATIONS (Centered 2x2 Black Cards matching exact reference image) */}
        <div className="mt-3.5 sm:mt-4 md:mt-5">
          <h2 className="font-garamond font-bold text-2xl sm:text-[26px] md:text-[28px] text-[#111111] leading-none mb-1">
            Certifications
          </h2>
          <div className="w-full border-b-[1.5px] border-[#9e9e9e] mb-3 sm:mb-3.5" />

          {/* Centered 2x2 grid (78% span, max-w-[325px], mx-auto) */}
          <div className="w-[78%] max-w-[325px] mx-auto grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-3.5">
            {/* 1. Cyber Crime and Cyber Forensics Course 87% */}
            <div className="bg-black text-white p-2.5 sm:p-3 rounded-none flex flex-col justify-between shadow-xs aspect-[1.8/1] min-h-[58px] sm:min-h-[64px]">
              <div className="font-sans font-bold text-[9.5px] sm:text-[10.5px] md:text-[11px] text-white leading-tight">
                <div>Cyber Crime and</div>
                <div>Cyber Forensics</div>
              </div>
              <div className="flex justify-between items-baseline font-sans font-bold text-[9.5px] sm:text-[10.5px] md:text-[11px] text-white mt-1">
                <span>Course</span>
                <span className="text-[11px] sm:text-[12px] md:text-[12.5px]">87%</span>
              </div>
            </div>

            {/* 2. Ethical Hacking Awareness Workshop */}
            <div className="bg-black text-white p-2.5 sm:p-3 rounded-none flex flex-col justify-center items-center text-center shadow-xs aspect-[1.8/1] min-h-[58px] sm:min-h-[64px]">
              <div className="font-sans font-bold text-[9.5px] sm:text-[10.5px] md:text-[11px] text-white leading-tight">
                <div>Ethical Hacking</div>
                <div>Awareness</div>
                <div>Workshop</div>
              </div>
            </div>

            {/* 3. Machine and Deep Learning Techniques Webinar */}
            <div className="bg-black text-white p-2.5 sm:p-3 rounded-none flex flex-col justify-center items-center text-center shadow-xs aspect-[1.8/1] min-h-[58px] sm:min-h-[64px]">
              <div className="font-sans font-bold text-[9.5px] sm:text-[10.5px] md:text-[11px] text-white leading-tight">
                <div>Machine and Deep</div>
                <div>Learning Techniques</div>
                <div>Webinar</div>
              </div>
            </div>

            {/* 4. Cybersecurity with Ethical Hacking Workshop */}
            <div className="bg-black text-white p-2.5 sm:p-3 rounded-none flex flex-col justify-center items-center text-center shadow-xs aspect-[1.8/1] min-h-[58px] sm:min-h-[64px]">
              <div className="font-sans font-bold text-[9.5px] sm:text-[10.5px] md:text-[11px] text-white leading-tight">
                <div>Cybersecurity with</div>
                <div>Ethical Hacking</div>
                <div>Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 06. VOLUNTEERING &amp; CERTIFICATIONS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 08</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 09: 07. LANGUAGES & CONTACT (Exact reproduction of reference image)
// =========================================================================
export const Page09LanguagesContact: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch transmission.');
      }
      setStatus('sent');
      setFeedbackMsg('Message sent successfully!');
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('idle');
      }, 5000);
    } catch (err: any) {
      setStatus('error');
      setFeedbackMsg(err.message || 'Direct email: mythreie.dumpati@gmail.com');
    }
  };

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <NewspaperPageHeader />

          {/* Master Heading: Languages */}
          <div className="mt-0.5 sm:mt-1 mb-2 sm:mb-3 shrink-0">
            <h2 className="font-garamond font-bold text-2xl sm:text-3xl md:text-[34px] text-[#111111] leading-none">
              Languages
            </h2>
          </div>

          {/* Two Solid Black Circles: Telugu & English */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 pl-1 sm:pl-2 mt-2 sm:mt-3">
            {/* Telugu Circle (Larger) */}
            <div className="w-[120px] h-[120px] sm:w-[138px] sm:h-[138px] md:w-[152px] md:h-[152px] rounded-full bg-black text-white flex flex-col items-center justify-center text-center shrink-0 shadow-md">
              <span className="font-sans font-bold text-sm sm:text-base md:text-[17px] text-white leading-tight">
                Telugu
              </span>
              <span className="font-garamond italic text-[11px] sm:text-xs md:text-[12.5px] text-white/90 mt-0.5">
                Mother tongue
              </span>
            </div>

            {/* English Circle (Offset slightly) */}
            <div className="w-[105px] h-[105px] sm:w-[118px] sm:h-[118px] md:w-[130px] md:h-[130px] rounded-full bg-black text-white flex flex-col items-center justify-center text-center shrink-0 shadow-md translate-y-1.5 sm:translate-y-2">
              <span className="font-sans font-bold text-sm sm:text-base md:text-[17px] text-white leading-tight">
                English
              </span>
              <span className="font-garamond italic text-[11px] sm:text-xs md:text-[12.5px] text-white/90 mt-0.5">
                Band: C1
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Giant Black Dome Contact Portal */}
        <div className="relative mt-auto -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-7 -mb-4 sm:-mb-5 md:-mb-6 lg:-mb-7 bg-black text-white pt-6 sm:pt-8 md:pt-9 pb-3 sm:pb-4 px-6 sm:px-8 md:px-10 rounded-t-[50%_32%] overflow-hidden flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-[270px] sm:max-w-[300px] md:max-w-[320px] flex flex-col">
            {/* Fullname */}
            <div className="w-full mb-2.5 sm:mb-3">
              <label className="font-garamond font-bold text-xs sm:text-[13px] md:text-[14px] text-white block mb-0.5">
                Fullname
              </label>
              <div className="border-b-[1.5px] border-white pb-0.5">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-white font-garamond text-xs sm:text-[13px] focus:outline-hidden"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="w-full mb-3 sm:mb-3.5">
              <label className="font-garamond font-bold text-xs sm:text-[13px] md:text-[14px] text-white block mb-0.5">
                E-mail
              </label>
              <div className="border-b-[1.5px] border-white pb-0.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white font-garamond text-xs sm:text-[13px] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Message Box */}
            <div className="w-full bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 relative shadow-lg">
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full bg-transparent text-[#111111] font-garamond placeholder-[#111111] text-xs sm:text-[13px] focus:outline-hidden resize-none leading-relaxed pr-8"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute bottom-2 right-2 bg-black hover:bg-neutral-800 disabled:opacity-40 text-white rounded-full p-1.5 transition-colors cursor-pointer flex items-center justify-center shadow-xs"
                title="Send Message"
                aria-label="Send Message"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>

            {/* Feedback Message */}
            {status === 'sent' && (
              <div className="text-[10px] font-mono-tech text-[#a3e635] mt-1 text-center font-bold">
                ✓ Message dispatched successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="text-[9.5px] font-mono-tech text-[#f87171] mt-1 text-center">
                {feedbackMsg}
              </div>
            )}
          </form>

          {/* Page Footer inside black dome */}
          <div className="w-full max-w-[270px] sm:max-w-[300px] md:max-w-[320px] pt-2 mt-2.5 border-t border-white/20 flex justify-between items-center text-[8.5px] sm:text-[9px] font-mono-tech text-white/70 shrink-0">
            <span>MYTHREIE DUMPATI // 07. LANGUAGES &amp; CONTACT</span>
            <span className="font-typewriter font-bold text-white">PAGE 09</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Backwards-compatibility alias for Spread 09
export const Page09Activities: React.FC = () => {
  return <Page09LanguagesContact />;
};

// =========================================================================
// PAGE 10: ARCHIVAL TELEGRAPH TRANSMISSION (CONTACT)
// =========================================================================
export const Page10Dispatch: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch transmission.');
      }
      setStatus('sent');
      setFeedbackMsg(data.id ? `TRANSMISSION ID: ${data.id}` : 'Logged into chief investigator ledger.');
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('idle');
      }, 5000);
    } catch (err: any) {
      setStatus('error');
      setFeedbackMsg(err.message || 'Dispatch failed. Direct telegraph: mythreie.dumpati@gmail.com');
    }
  };

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Heading matching Contents font */}
        <div className="border-b-2 border-[#141210] pb-1.5 mb-2.5 flex justify-between items-start shrink-0">
          <div>
            <span className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8C3833] font-bold block">
              COMMUNICATION TERMINAL // SECTION 08
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              ENCRYPTED TELEGRAPH DISPATCH
            </h3>
          </div>
          <NewspaperStamp text="DISPATCH" variant="crimson" rotation={-1} />
        </div>

        {/* Form Box */}
        <div className="p-2.5 sm:p-3 bg-[#eae8e2]/80 border-2 border-[#141210]">
          <div className="flex items-center gap-1.5 border-b border-[#141210] pb-1 mb-1.5 font-mono-tech text-[9.5px] uppercase font-bold text-[#141210]">
            <Send className="w-3 h-3 text-[#8C3833]" />
            <span>TRANSMIT DISPATCH MESSAGE (RESEND VERIFIED)</span>
          </div>

          {status === 'sent' ? (
            <div className="p-3 text-center bg-[#141210] text-[#f5f0e1] font-mono-tech text-xs">
              <span className="text-[#d9c49f] font-bold block mb-1">★ DISPATCH TRANSMITTED ★</span>
              <span>Your message has been received by the investigator.</span>
              {feedbackMsg && <span className="block mt-1 text-[9.5px] text-[#cfc5b0]">{feedbackMsg}</span>}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-1.5 font-mono-tech text-[9.5px]">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5a554e] font-bold mb-0.5">SENDER NAME:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Inspector / Colleague"
                    className="w-full p-1 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[#5a554e] font-bold mb-0.5">RETURN TELEGRAPH (EMAIL):</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="station@agency.org"
                    className="w-full p-1 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5a554e] font-bold mb-0.5">DISPATCH INQUIRY:</label>
                <textarea
                  required
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquiry regarding forensic research, collaborations, or engineering..."
                  className="w-full p-1 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-1 bg-[#8C3833]/10 border border-[#8C3833] text-[#8C3833] text-[9px]">
                  {feedbackMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-1.5 bg-[#141210] hover:bg-[#2c2825] disabled:opacity-50 text-[#f5f0e1] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>{status === 'loading' ? 'TRANSMITTING VIA RESEND...' : 'TRANSMIT DISPATCH →'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Direct Contacts */}
        <div className="p-2 sm:p-2.5 bg-[#eae8e2]/60 border border-[#141210] font-mono-tech text-[9px] space-y-0.5 mt-2">
          <div className="flex justify-between">
            <span className="text-[#5a554e]">TELEGRAPH:</span>
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="font-bold underline">{RESUME_DATA.personal.email}</a>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5a554e]">STATION:</span>
            <span>{RESUME_DATA.personal.location}</span>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // DISPATCH TERMINAL</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 10</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 11: OFFICIAL RECORD DOWNLOAD & EDITORIAL COLOPHON
// =========================================================================
export const Page11Colophon: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Heading matching Contents font */}
        <div className="border-b-2 border-[#141210] pb-1.5 mb-2.5 flex justify-between items-start shrink-0">
          <div>
            <span className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8C3833] font-bold block">
              OFFICIAL ARCHIVE // COLOPHON
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              VERIFIED RECORD &amp; COLOPHON
            </h3>
          </div>
          <NewspaperStamp text="RECORD" variant="olive" rotation={1} />
        </div>

        {/* PDF Download Box */}
        <div className="p-2.5 sm:p-3 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] flex items-center justify-between mb-2">
          <div>
            <div className="font-garamond text-[12px] sm:text-[13px] uppercase font-bold text-[#d9c49f]">
              OFFICIAL VERIFIED RESUME RECORD
            </div>
            <div className="font-newsreader text-[11px] italic text-[#cfc5b0] mt-0.5">
              Full cryptographic curriculum ledger (MYTHREIE_DUMPATI.pdf)
            </div>
          </div>
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            className="px-2.5 py-1.5 bg-[#8C3833] hover:bg-[#a6423c] text-white font-mono-tech text-[10px] sm:text-[11px] uppercase font-bold tracking-wider inline-flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Download className="w-3 h-3" />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>

        {/* Social Dispatches */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <a
            href={RESUME_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 bg-[#eae8e2]/70 border border-[#141210] flex items-center justify-between hover:bg-[#141210] hover:text-[#f5f0e1] transition-all font-mono-tech text-[9.5px] font-bold"
          >
            <div className="flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 bg-[#eae8e2]/70 border border-[#141210] flex items-center justify-between hover:bg-[#141210] hover:text-[#f5f0e1] transition-all font-mono-tech text-[9.5px] font-bold"
          >
            <div className="flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Editorial Colophon */}
        <div className="p-2.5 sm:p-3 bg-[#eae8e2]/50 border border-[#141210] font-newsreader text-[10.5px] sm:text-[11.5px] text-[#3a352f] leading-relaxed text-center">
          <div className="font-garamond font-bold uppercase tracking-wider text-[#141210] text-[12px] mb-0.5">
            THE CHRONICLE ARCHIVE COLOPHON
          </div>
          <p className="italic">
            Typeset in classic Didone, IM Fell English, and IBM Plex Mono. Authored and maintained by Mythreie Dumpati. Hyderabad, Telangana • India.
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // EDITORIAL COLOPHON</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 11</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 12: ARCHIVAL DIRECTORY & MASTER INDEX SUMMARY
// =========================================================================
export const Page12ClosingBroadside: React.FC<{ onNavigateToSpread?: (spread: number) => void }> = ({
  onNavigateToSpread,
}) => {
  const archives = [
    { num: '01', title: 'ACADEMIC LEDGER', desc: 'KMEC CSE (8.36), Diploma (8.8), ICSE (81.4%)', spread: 3 },
    { num: '02', title: 'PUBLIC SAFETY & INDUSTRY', desc: 'Telangana Police Bharosa Module, Teleparadigm', spread: 3 },
    { num: '03', title: 'ENGINEERING ARTIFACTS', desc: 'SecureShare, QPAT Classifier, SMIA, Interlock', spread: 4 },
    { num: '04', title: 'SCHOLARLY MONOGRAPHS', desc: '3 IEEE & IJRDET Papers with Pareto Benchmarks', spread: 4 },
    { num: '05', title: 'TECHNICAL ARSENAL', desc: 'Cybersecurity, Reverse Eng., Python, ML & Cryptography', spread: 5 },
    { num: '06', title: 'RECOGNIZED CREDENTIALS', desc: 'NLU Odisha 87% Distinction, CCNAv7, IBM Analyst', spread: 5 },
    { num: '07', title: 'INSTITUTIONAL GOVERNANCE', desc: 'Student Body President, Cultural Head, Carnatic Vocalist', spread: 6 },
  ];

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Heading matching Contents font */}
        <div className="border-b-2 border-[#141210] pb-1.5 mb-2.5 flex justify-between items-start shrink-0">
          <div>
            <span className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8C3833] font-bold block">
              FINAL REGISTER // VOLUME 01
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              ARCHIVAL DIRECTORY &amp; CLOSING
            </h3>
          </div>
          <NewspaperStamp text="CLASSIFIED" variant="crimson" rotation={-2} />
        </div>

        {/* Archival Table */}
        <div className="border-2 border-[#141210] p-2 bg-[#eae8e2]/70 mb-2 space-y-1">
          <div className="font-mono-tech text-[9px] uppercase font-bold text-[#141210] border-b border-[#141210] pb-0.5 flex justify-between">
            <span>MASTER DOSSIER DIRECTORY</span>
            <span>HYDERABAD ARCHIVE</span>
          </div>
          <div className="space-y-1 font-mono-tech text-[9px]">
            {archives.map((a) => (
              <div
                key={a.num}
                onClick={() => onNavigateToSpread?.(a.spread)}
                className="flex items-start justify-between p-0.5 hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors cursor-pointer group"
              >
                <div>
                  <span className="font-bold text-[#141210] group-hover:text-[#d9c49f] mr-1.5">[{a.num}]</span>
                  <span className="font-bold">{a.title}</span>
                  <p className="text-[8px] text-[#5a554e] group-hover:text-[#cfc5b0]">{a.desc}</p>
                </div>
                <span className="text-[8px] uppercase tracking-wider underline">SPREAD 0{a.spread}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clearance and Seal */}
        <div className="p-2 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] flex items-center justify-between">
          <div>
            <span className="font-mono-tech text-[8px] uppercase tracking-widest text-[#d9c49f] block">
              RESEARCH SECURITY CLEARANCE
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-wider">
              AUTHORIZATION LEVEL 4 // ARCHIVE COMPLETE
            </span>
          </div>
          <NewspaperStamp text="VERIFIED" variant="olive" rotation={1} />
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // CLOSING BROADSIDE</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 12</span>
      </div>
    </div>
  );
};

// =========================================================================
// UNIVERSAL PAGE RENDERER
// =========================================================================
export const renderNewspaperPage = (
  pageNum: number,
  callbacks?: {
    onOpenNewspaper?: () => void;
    onNavigateToSpread?: (spread: number) => void;
  }
) => {
  switch (pageNum) {
    case 1:
      return <Page01Cover onOpenNewspaper={callbacks?.onOpenNewspaper} />;
    case 2:
      return <Page02Contents onNavigateToSpread={callbacks?.onNavigateToSpread} />;
    case 3:
      return <Page03Education />;
    case 4:
      return <Page04Experience />;
    case 5:
      return <Page05Projects />;
    case 6:
      return <Page06Publications />;
    case 7:
      return <Page07Skills />;
    case 8:
      return <Page08Certifications />;
    case 9:
      return <Page09Activities />;
    case 10:
      return <Page10Dispatch />;
    case 11:
      return <Page11Colophon />;
    case 12:
      return <Page12ClosingBroadside onNavigateToSpread={callbacks?.onNavigateToSpread} />;
    default:
      return <Page01Cover onOpenNewspaper={callbacks?.onOpenNewspaper} />;
  }
};
