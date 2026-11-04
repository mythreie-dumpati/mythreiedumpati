import React from 'react';
import {
  ExternalLink,
  CheckCircle,
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
      desc: 'Technical competencies and tools',
      page: 7,
    },
    {
      num: '06',
      title: 'Certifications',
      desc: 'Professional training and recognized credentials',
      page: 8,
    },
    {
      num: '07',
      title: 'Activities and Societies',
      desc: 'Leadership, campus involvement, and extracurricular pursuits',
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
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Universal Top Header Bar */}
          <NewspaperPageHeader />

          {/* Master Heading: professional Experience / Internships */}
          <div className="flex flex-col items-center justify-center mt-1 sm:mt-2 md:mt-3 mb-2 sm:mb-3 text-center shrink-0">
            <img
              src="/internships_title_vector@2x.png"
              alt="professional Experience — Internships"
              className="w-[200px] sm:w-[230px] md:w-[250px] max-w-full h-auto object-contain block pointer-events-none drop-shadow-xs"
            />
            <div className="sr-only">
              <h2>professional Experience</h2>
              <h3>Internships</h3>
            </div>
          </div>
        </div>

        {/* Two-Column Symmetrical Layout brought down to fill canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-7 items-start my-auto pb-2 sm:pb-3">
          {/* Column 1: Teleparadigm Networks Ltd. */}
          <div className="flex flex-col">
            {/* Date Tag */}
            <div className="h-[22px] flex items-center justify-center font-garamond text-xs sm:text-[13px] md:text-[13.5px] text-[#222222] font-medium tracking-wide text-center mb-1.5 shrink-0">
              Sept – Nov 2025
            </div>

            {/* Sleek Picture Frame with Thin Internal Border */}
            <div className="w-full max-w-[150px] sm:max-w-[170px] md:max-w-[185px] mx-auto aspect-square bg-white border-[1.5px] border-[#181818] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22)] overflow-hidden flex items-center justify-center p-0.5 shrink-0">
              <img
                src="/internship_teleparadigm.png"
                alt="Teleparadigm Networks Ltd. Internship Artwork"
                className="w-full h-full object-contain block pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Title */}
            <h4 className="font-garamond font-bold text-sm sm:text-[15px] md:text-[16px] text-[#111111] leading-tight mt-2.5 mb-1.5 min-h-[34px] sm:min-h-[38px] flex flex-col justify-start">
              <span>Teleparadigm</span>
              <span>Networks Ltd.</span>
            </h4>

            {/* Description */}
            <p className="font-garamond text-[10px] sm:text-[11px] md:text-[11.5px] text-[#222222] leading-relaxed text-justify sm:text-left">
              Developed a secure, decentralized file-sharing platform with role-based access controls to protect sensitive user data from unauthorized access. Implemented distributed storage methods and dynamic permission controls across network nodes, maintaining high data privacy while removing single points of failure.
            </p>
          </div>

          {/* Column 2: Women Safety Wing, Telangana Police */}
          <div className="flex flex-col">
            {/* Date Tag */}
            <div className="h-[22px] flex items-center justify-center font-garamond text-xs sm:text-[13px] md:text-[13.5px] text-[#222222] font-medium tracking-wide text-center mb-1.5 shrink-0">
              Dec 2024 – Jan 2025
            </div>

            {/* Sleek Picture Frame with Thin Internal Border (Image occupies full space without excessive whitespace) */}
            <div className="w-full max-w-[150px] sm:max-w-[170px] md:max-w-[185px] mx-auto aspect-square bg-white border-[1.5px] border-[#181818] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.22)] overflow-hidden flex items-center justify-center p-0.5 shrink-0">
              <img
                src="/internship_telangana_police.png"
                alt="Women Safety Wing, Telangana Police Internship Artwork"
                className="w-full h-full object-contain block pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Title */}
            <h4 className="font-garamond font-bold text-sm sm:text-[15px] md:text-[16px] text-[#111111] leading-tight mt-2.5 mb-1.5 min-h-[34px] sm:min-h-[38px] flex flex-col justify-start">
              <span>Women Safety Wing,</span>
              <span>Telangana Police</span>
            </h4>

            {/* Description */}
            <p className="font-garamond text-[10px] sm:text-[11px] md:text-[11.5px] text-[#222222] leading-relaxed text-justify sm:text-left">
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
// PAGE 07: 05. SKILLS
// =========================================================================
export const Page07Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Cybersecurity & Forensics', items: RESUME_DATA.skills.cybersecurityAndForensics },
    { title: 'Security Tools', items: RESUME_DATA.skills.securityTools },
    { title: 'Programming Languages', items: RESUME_DATA.skills.programmingLanguages },
    { title: 'Distributed Systems & Web', items: [...RESUME_DATA.skills.distributedSystems, ...RESUME_DATA.skills.backendAndWeb] },
    { title: 'AI & Applied Analytics', items: RESUME_DATA.skills.aiAndAppliedData },
    { title: 'Environments & Tools', items: RESUME_DATA.skills.environmentsAndTools },
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
              SECTION 05 // TECHNICAL COMPETENCIES
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              SKILLS &amp; ARTIFACTS
            </h3>
          </div>
          <NewspaperStamp text="VERIFIED" variant="olive" rotation={-2} />
        </div>

        {/* 6 Skill Categories */}
        <div className="space-y-1.5 sm:space-y-2 mt-2">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-1.5 sm:p-2 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="font-mono-tech text-[9px] font-bold uppercase tracking-wider text-[#141210] border-b border-[#141210]/20 pb-0.5 mb-1 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[#8C3833] text-[7.5px]">[{category.items.length} ITEMS]</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-1.5 py-0.2 font-mono-tech text-[8px] sm:text-[8.5px] bg-[#f4f3ef] border border-[#141210]/40 text-[#141210] font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
// PAGE 08: 06. CERTIFICATIONS
// =========================================================================
export const Page08Certifications: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Heading matching Contents font */}
        <div className="border-b-2 border-[#141210] pb-1.5 mb-2.5 flex justify-between items-start shrink-0">
          <div>
            <span className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8C3833] font-bold block">
              SECTION 06 // PROFESSIONAL CREDENTIALS
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              CERTIFICATIONS &amp; ACCREDITATIONS
            </h3>
          </div>
          <NewspaperStamp text="AUDITED" variant="crimson" rotation={1} />
        </div>

        {/* Certifications and Callout */}
        <div className="space-y-1.5 sm:space-y-2 mt-2">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div key={idx} className="p-2 sm:p-2.5 bg-[#eae8e2]/70 border border-[#141210]">
              <div className="flex items-start justify-between gap-2 border-b border-[#141210]/20 pb-1 mb-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#8C3833] flex-shrink-0" />
                  <h4 className="font-garamond font-bold text-xs sm:text-[13px] md:text-[13.5px] text-[#141210] leading-tight">
                    {cert.title}
                  </h4>
                </div>
                {cert.score && (
                  <span className="font-mono-tech text-[8px] sm:text-[8.5px] bg-[#8C3833] text-white px-1.5 py-0.2 font-bold flex-shrink-0">
                    {cert.score}
                  </span>
                )}
              </div>
              <div className="flex justify-between font-mono-tech text-[8.5px] sm:text-[9px] text-[#5a554e]">
                <span>ISSUER: {cert.issuer}</span>
                <span>DATE: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* NLU Odisha Special Callout */}
        <div className="mt-2.5 p-2 sm:p-2.5 bg-[#eae8e2]/90 border-2 border-[#141210]">
          <div className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase font-bold text-[#8C3833]">
            SPECIAL LEGAL &amp; FORENSIC DISTINCTION
          </div>
          <div className="font-serif-vintage text-[10.5px] sm:text-xs text-[#2a2521] mt-0.5 leading-snug">
            National Law University Odisha (NLUO) Post Graduate Diploma in Cyber Law and Digital Forensics, completed with an exceptional 87% Distinction grade.
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 06. CERTIFICATIONS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 08</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 09: 07. ACTIVITIES AND SOCIETIES
// =========================================================================
export const Page09Activities: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full overflow-hidden relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Heading matching Contents font */}
        <div className="border-b-2 border-[#141210] pb-1.5 mb-2.5 flex justify-between items-start shrink-0">
          <div>
            <span className="font-mono-tech text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8C3833] font-bold block">
              SECTION 07 // CAMPUS &amp; COMMUNITY
            </span>
            <h3 className="font-garamond font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-[#111111]">
              ACTIVITIES AND SOCIETIES
            </h3>
          </div>
          <NewspaperStamp text="LEADERSHIP" variant="olive" rotation={1} />
        </div>

        {/* Presidency Highlight */}
        <div className="p-2.5 sm:p-3 bg-[#eae8e2]/80 border-2 border-[#141210] mb-2 sm:mb-2.5">
          <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-1">
            <div>
              <span className="font-mono-tech text-[8px] text-[#8C3833] uppercase font-bold tracking-widest block">
                ELECTED CHAIR OF THE GENERAL STUDENT BODY
              </span>
              <h4 className="font-garamond font-bold text-sm sm:text-base text-[#141210]">
                President, Student Council
              </h4>
            </div>
            <span className="font-mono-tech text-[8.5px] bg-[#141210] text-[#f5f0e1] px-1.5 py-0.5 font-bold">
              2025 – 2026
            </span>
          </div>
          <div className="font-typewriter text-[10px] text-[#4b4e39] font-bold mb-0.5">
            Keshav Memorial Engineering College • Hyderabad
          </div>
          <p className="font-newsreader text-[10px] sm:text-[10.5px] text-[#2a2521] leading-snug">
            Represented 1,200+ undergraduate engineering scholars across academic boards, institutional safety audits, campus infrastructure expansion, and national collegiate hackathon delegations.
          </p>
        </div>

        {/* Activities List */}
        <div className="space-y-1.5 sm:space-y-2">
          {RESUME_DATA.activitiesAndSocieties.map((activity, idx) => (
            <div key={idx} className="p-2 sm:p-2.5 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="flex items-center justify-between border-b border-[#141210]/20 pb-0.5 mb-0.5">
                <span className="font-garamond text-xs sm:text-[13.5px] font-bold text-[#141210]">{activity.role}</span>
                <span className="font-mono-tech text-[8px] sm:text-[8.5px] text-[#8C3833] font-bold">{activity.organization}</span>
              </div>
              <p className="font-newsreader text-[10px] sm:text-[10.5px] text-[#2a2521] mt-0.5 leading-snug">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9px] sm:text-[9.5px] font-mono-tech text-[#5a554e] shrink-0">
        <span>MYTHREIE DUMPATI // 07. ACTIVITIES AND SOCIETIES</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 09</span>
      </div>
    </div>
  );
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
