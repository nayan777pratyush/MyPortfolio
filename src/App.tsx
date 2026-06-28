import React, { useState, useEffect, useRef } from 'react';
import RobotOverlay from "./components/Robot/RobotOverlay";

// ==========================================
// CONSTANTS & ASSETS
// ==========================================
const PORTAL_BG     = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779707217/image_1_vdzwae.png";
const CURTAIN_LEFT  = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706559/curtain_left_znkmva.png";
const CURTAIN_RIGHT = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706564/curtain_right_paeyym.png";
const WORLD_BG      = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706392/image_2_gkcdlx.png";
const BOTTOM_CLOUDS = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706555/bottom_clouds_xskut6.png";

import quick1 from "./assets/Quickai1.png";
import quick2 from "./assets/Quickai2.png";
import quick3 from "./assets/Quickai3.png";
import quick4 from "./assets/Quickai4.png";

import auth1 from "./assets/MERN-Auth.png";
import auth2 from "./assets/MERN-Auth-2.png";
import auth3 from "./assets/MERN-Auth-3.png";

import uber1 from "./assets/Uber-Clone-1.png";
import uber2 from "./assets/Uber-Clone-2.png";
import uber3 from "./assets/Uber-Clone-3.png";
import uber4 from "./assets/Uber-Clone-4.png";
import uber5 from "./assets/Uber-Clone-5.png";
import uber6 from "./assets/Uber-Clone-6.png";
import uber7 from "./assets/Uber-Clone-7.png";

import lms1 from "./assets/LMS-1.png";
import lms2 from "./assets/LMS-2.png";
import lms3 from "./assets/LMS-3.png";

import meet1 from "./assets/MeetflowAI-1.png";
import meet2 from "./assets/MeetflowAI-2.png";
import meet3 from "./assets/MeetflowAI-3.png";
import meet4 from "./assets/MeetflowAI-4.png";

const CARD_IMAGES = [
  quick1,
  quick2,
  quick3,
  quick4,

  auth1,
  auth2,
  auth3,

  uber1,
  uber2,
  uber3,
  uber4,
  uber5,
  uber6,
  uber7,

  lms1,
  lms2,
  lms3,

  meet1,
  meet2,
  meet3,
  meet4,
];

interface CardData {
  title: string;
  desc: string;
  color: string;
  tag: string;
  link: string;
}

const SCENE2_CARDS: CardData[] = [
  { title: 'QuickAI',       desc: 'AI-powered content generation & study assistant platform',   color: '#e8dff5', tag: 'AI SaaS',        link: 'https://quick-ai-two-swart.vercel.app/' },
  { title: 'PratyushLMS',   desc: 'Full-featured learning management system with analytics',    color: '#dcedc2', tag: 'LMS',            link: 'https://github.com/nayan777pratyush/PratyushLMS.' },
  { title: 'MERN-Auth',     desc: 'JWT-based auth with OTP verification & role-based access',   color: '#f3cdd6', tag: 'Auth System',    link: 'https://github.com/nayan777pratyush/MERN-Auth' },
  { title: 'Uber Clone',    desc: 'Real-time ride-hailing with Google Maps & live tracking',    color: '#c3e3f4', tag: 'Full Stack',     link: 'https://github.com/nayan777pratyush/Uber-Clone' },
  { title: 'MeetFlow AI',   desc: 'AI video conferencing with summaries & action extraction',   color: '#f0e4c0', tag: 'AI Platform',   link: 'https://github.com/nayan777pratyush/MeetFlow-AI' },
  { title: 'QuickAI',       desc: 'Scalable backend handling 500+ AI requests per day',         color: '#e8dff5', tag: 'Backend',       link: 'https://quick-ai-two-swart.vercel.app/' },
  { title: 'MERN-Auth',     desc: 'Reduced unauthorized access by ~90% via layered security',  color: '#f3cdd6', tag: 'Security',      link: 'https://github.com/nayan777pratyush/MERN-Auth' },
  { title: 'Uber Clone',    desc: 'Role-based flows for riders and drivers with live updates',  color: '#c3e3f4', tag: 'Real-time',     link: 'https://github.com/nayan777pratyush/Uber-Clone' },
  { title: 'MeetFlow AI',   desc: 'WebRTC conferencing with AI-driven post-meeting analytics', color: '#dcedc2', tag: 'WebRTC',        link: 'https://github.com/nayan777pratyush/MeetFlow-AI' },
];

interface ProjectData {
  tag: string;
  name: string;
  nameEm: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  features: string[];
  tags: string[];
  github: string;
  live: string | null;
  previewImg: string;
  previewImages: string[];
}

const PROJECTS: ProjectData[] = [
  {
    tag: 'AI SaaS Platform',
    name: 'Quick', nameEm: 'AI',
    shortDesc: 'AI-driven content generation, study assistant, and document analysis.',
    longDesc: 'QuickAI is an AI-powered SaaS platform that helps users generate high-quality content, summarize documents, and get intelligent study assistance in real time.',
    bullets: [
      'AI-driven content generation — articles, blogs, images, and GIFs — with background removal and automated document analysis.',
      'Advanced Study Assistant with multi-source ingestion: YouTube, web links, PDFs, and DOCX, powered by real-time AI chatbot.',
      'Scalable backend architected to handle 500+ AI requests per day with optimized API throughput.',
    ],
    features: ['AI content generation (blogs, articles, summaries)', 'Multi-source document & web ingestion', 'Real-time AI chatbot for study help', 'Scalable backend handling 500+ requests/day', 'User authentication & usage analytics'],
    tags: ['React.js','Node.js','PostgreSQL','AI APIs'],
    github: 'https://github.com/nayan777pratyush',
    live: 'https://quick-ai-two-swart.vercel.app/',
    previewImg: CARD_IMAGES[0],
    previewImages: [CARD_IMAGES[0], CARD_IMAGES[1], CARD_IMAGES[2], CARD_IMAGES[3]],
  },
  {
    tag: 'Learning Management System',
    name: 'Pratyush', nameEm: 'LMS',
    shortDesc: 'Full-featured LMS with course creation, enrollment and analytics.',
    longDesc: 'A comprehensive Learning Management System enabling instructors to create courses and students to track their learning journey with rich analytics and interactive content.',
    bullets: [
      'Full-featured LMS with course creation, enrollment workflows, and progress tracking for students and instructors.',
      'Rich content delivery with video lectures, quizzes, assignments, and discussion forums.',
      'Admin dashboard with analytics on course performance, user engagement, and completion rates.',
    ],
    features: ['Course creation & enrollment flows', 'Video lectures, quizzes & assignments', 'Discussion forums & peer interaction', 'Admin analytics dashboard', 'Progress tracking & certificates'],
    tags: ['React.js','Node.js','Express.js','MongoDB'],
    github: 'https://github.com/nayan777pratyush/PratyushLMS.',
    live: null,
    previewImg: CARD_IMAGES[14],
    previewImages: [CARD_IMAGES[14], CARD_IMAGES[15], CARD_IMAGES[16]],
  },
  {
    tag: 'Authentication System',
    name: 'MERN', nameEm: '-Auth',
    shortDesc: 'Secure authentication with OTP, role-based access, and email verification.',
    longDesc: 'A production-grade full-stack authentication system with layered security, supporting JWT-based sessions, email OTP flows, and role-based access control for 1000+ users.',
    bullets: [
      'Full-stack authentication supporting 1,000+ user records with JWT and role-based access control.',
      'Email OTP verification, password reset flows, and secure protected routes via middleware-based validation.',
      'Reduced unauthorized access by approximately 90% through layered security architecture.',
    ],
    features: ['JWT access & refresh token system', 'Email OTP verification flow', 'Role-based access control (RBAC)', 'Protected route middleware', 'Password reset with secure links'],
    tags: ['React.js','Node.js','Express.js','MongoDB','JWT'],
    github: 'https://github.com/nayan777pratyush/MERN-Auth',
    live: null,
    previewImg: CARD_IMAGES[4],
    previewImages: [CARD_IMAGES[4], CARD_IMAGES[5], CARD_IMAGES[6]],
  },
  {
    tag: 'Ride-Hailing Application',
    name: 'Uber ', nameEm: 'Clone',
    shortDesc: 'Real-time ride booking with Google Maps, live tracking, and fare estimation.',
    longDesc: 'A full-stack ride-hailing application with real-time location updates, Google Maps integration for route visualization, and distinct role-based flows for riders and drivers.',
    bullets: [
      'Full-stack ride-hailing with real-time location tracking, user authentication, ride booking, and live ride updates.',
      'Integrated Google Maps API for route visualization, fare estimation, and driver-rider matching.',
      'Role-based flows for both riders and drivers with responsive modern UI/UX.',
    ],
    features: ['Real-time location tracking via WebSocket', 'Google Maps route & fare estimation', 'Driver-rider matching algorithm', 'Separate dashboards per role', 'Responsive mobile-first UI'],
    tags: ['React.js','Node.js','Express.js','MongoDB','Google Maps API'],
    github: 'https://github.com/nayan777pratyush/Uber-Clone',
    live: null,
    previewImg: CARD_IMAGES[7],
    previewImages: [CARD_IMAGES[7], CARD_IMAGES[8], CARD_IMAGES[9], CARD_IMAGES[10], CARD_IMAGES[11], CARD_IMAGES[12], CARD_IMAGES[13]],
  },
  {
    tag: 'AI Meeting Platform',
    name: 'MeetFlow', nameEm: '-AI',
    shortDesc: 'AI-powered video conferencing with smart summaries & action extraction.',
    longDesc: 'An intelligent video conferencing platform that combines WebRTC-based real-time communication with AI-driven post-meeting analytics, generating summaries and actionable insights automatically.',
    bullets: [
      'AI-powered video conferencing with intelligent meeting summaries and action-item extraction.',
      'Collaborative features: screen sharing, real-time chat, participant management.',
      'Scalable architecture supporting concurrent sessions and AI-driven post-meeting analytics.',
    ],
    features: ['WebRTC peer-to-peer video calls', 'AI-generated meeting summaries', 'Action item & decision extraction', 'Screen sharing & real-time chat', 'Participant management & recording'],
    tags: ['Next.js','TypeScript','AI APIs','WebRTC'],
    github: 'https://github.com/nayan777pratyush/MeetFlow-AI',
    live: null,
    previewImg: CARD_IMAGES[17],
    previewImages: [CARD_IMAGES[17], CARD_IMAGES[18], CARD_IMAGES[19], CARD_IMAGES[20]],
  },
];

// ==========================================
// GLOBAL STYLES
// ==========================================
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Viaoda+Libre&family=Imprima&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --mystic-void: #08050c;
    --mystic-deep: #110d1a;
    --mystic-mid: #1c1528;
    --mystic-surface: #231c32;
    --mystic-elevated: #2e2540;
    --mystic-border: rgba(180,140,220,0.15);
    --mystic-border-glow: rgba(180,140,220,0.40);
    --mystic-accent: #b48ce8;
    --mystic-accent-dim: rgba(180,140,232,0.60);
    --mystic-gold: #e8c87a;
    --mystic-gold-dim: rgba(232,200,122,0.55);
    --mystic-fog: rgba(200,180,240,0.10);
    --mystic-text: rgba(245,238,255,0.95);
    --mystic-text-muted: rgba(210,195,235,0.70);
    --mystic-text-faint: rgba(185,170,215,0.45);
    --font-display: 'Viaoda Libre', serif;
    --font-body: 'Imprima', sans-serif;
    --font-refined: 'Cormorant Garamond', serif;
    --glass-bg: rgba(30, 20, 50, 0.55);
    --glass-border: rgba(180, 140, 220, 0.22);
    --glass-blur: blur(20px);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--mystic-void);
    color: var(--mystic-text);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection { background: rgba(180,140,232,0.3); color: #fff; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--mystic-void); }
  ::-webkit-scrollbar-thumb { background: rgba(180,140,220,0.3); border-radius: 4px; }

  /* ── CUSTOM CURSORS ── */
  .m-cursor {
    width: 10px; height: 10px;
    background: rgba(180,140,232,0.9);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    transform: translate(-50%,-50%);
    z-index: 9999;
    transition: transform 0.15s ease, background 0.2s ease;
    mix-blend-mode: screen;
  }
  .m-cursor-ring {
    width: 34px; height: 34px;
    border: 1px solid rgba(180,140,232,0.5);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    transform: translate(-50%,-50%);
    z-index: 9998;
    transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
  }

  /* ── NAV ── */
  .m-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 52px;
    height: 64px;
    background: rgba(8,5,12,0.75);
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    border-bottom: 1px solid rgba(180,140,220,0.14);
    box-shadow: 0 4px 32px rgba(80,30,160,0.12);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .m-nav.hidden { opacity: 0; pointer-events: none; transform: translateY(-100%); }
  .m-nav.visible { opacity: 1; transform: translateY(0); animation: navSlideDown 0.5s cubic-bezier(0.16,1,0.3,1); }
  @keyframes navSlideDown {
    from { opacity: 0; transform: translateY(-100%); }
    to { opacity: 1; transform: translateY(0); }
  }
  .m-nav-logo {
    font-family: var(--font-display);
    font-size: 22px;
    color: var(--mystic-gold);
    text-decoration: none;
    letter-spacing: 0.08em;
  }
  .m-nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }
  .m-nav-links a {
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--mystic-text-muted);
    text-decoration: none;
    transition: color 0.25s;
    position: relative;
    padding-bottom: 3px;
  }
  .m-nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1px;
    background: var(--mystic-accent);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  .m-nav-links a:hover { color: var(--mystic-accent); }
  .m-nav-links a:hover::after { width: 100%; }
  .m-nav-links a.active { color: var(--mystic-accent); }
  .m-nav-links a.active::after { width: 100%; }

  /* ── PORTFOLIO SECTIONS SHARED ── */
  .m-section {
    position: relative;
    padding: 120px 80px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .m-section-inner {
    position: relative;
    z-index: 2;
  }

  /* Section heading */
  .m-eyebrow {
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mystic-accent-dim);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .m-eyebrow::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: var(--mystic-accent-dim);
  }
  .m-heading {
    font-family: var(--font-display);
    font-size: clamp(40px, 5vw, 64px);
    font-weight: normal;
    color: var(--mystic-text);
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin-bottom: 20px;
  }
  .m-heading em {
    font-style: italic;
    color: var(--mystic-accent);
  }

  /* Horizontal rule */
  .m-rule {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, var(--mystic-accent-dim), transparent);
    margin-bottom: 56px;
  }

  /* ── AMBIENT ORBS ── */
  .m-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(90px);
    opacity: 0.14;
  }

  /* ── FLOATING BUBBLES ── */
  .m-bubble {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle at 35% 35%, rgba(200,170,255,0.38), rgba(120,60,220,0.10) 60%, transparent 80%);
    border: 1px solid rgba(200,170,255,0.22);
    box-shadow: inset 0 0 12px rgba(180,140,255,0.18), 0 4px 20px rgba(100,40,200,0.14);
    animation: floatBubble var(--dur) ease-in-out infinite;
    animation-delay: var(--delay);
  }
  @keyframes floatBubble {
    0%, 100% { transform: translateY(0) scale(1); }
    33% { transform: translateY(-18px) scale(1.03); }
    66% { transform: translateY(8px) scale(0.98); }
  }

  /* ── ABOUT ── */
  .m-about-grid {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 80px;
    align-items: start;
  }
  .m-about-body p {
    font-family: var(--font-refined);
    font-size: 18px;
    line-height: 1.8;
    color: rgba(225,215,245,0.85);
    margin-bottom: 20px;
  }
  .m-about-body strong {
    color: var(--mystic-text);
    font-weight: 500;
  }
  .m-stat-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 48px;
  }
  .m-stat {
    background: var(--mystic-surface);
    border: 1px solid var(--mystic-border);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    padding: 20px 16px;
    text-align: center;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
  }
  .m-stat:hover {
    border-color: var(--mystic-border-glow);
    background: var(--mystic-elevated);
    box-shadow: 0 0 24px rgba(140,80,220,0.18);
  }
  .m-stat-num {
    font-family: var(--font-display);
    font-size: 32px;
    color: var(--mystic-gold);
    line-height: 1;
    margin-bottom: 4px;
  }
  .m-stat-label {
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--mystic-text-muted);
    text-transform: uppercase;
  }

  /* Info panel */
  .m-info-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: var(--glass-blur);
    border-radius: 20px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 8px 40px rgba(60,20,120,0.18);
  }
  .m-info-row {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(180,140,220,0.08);
  }
  .m-info-row:last-child { border-bottom: none; }
  .m-info-label {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
  }
  .m-info-value {
    font-family: var(--font-refined);
    font-size: 15px;
    color: var(--mystic-text);
  }
  .m-info-value a {
    color: var(--mystic-accent);
    text-decoration: none;
    transition: color 0.2s;
  }
  .m-info-value a:hover { color: var(--mystic-gold); }

  /* Status badge */
  .m-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: rgba(120,220,160,0.90);
  }
  .m-status-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(120,220,160,0.90);
    animation: pulse-green 2s ease-in-out infinite;
  }
  @keyframes pulse-green {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* ── EDUCATION TIMELINE ── */
  .m-timeline {
    position: relative;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .m-timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: linear-gradient(180deg, var(--mystic-accent-dim), transparent);
  }
  .m-tl-item {
    position: relative;
    padding: 0 0 52px 0;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .m-tl-item.visible { opacity: 1; transform: translateX(0); }
  .m-tl-dot {
    position: absolute;
    left: -37px;
    top: 8px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 2px solid var(--mystic-accent-dim);
    background: var(--mystic-void);
    transition: border-color 0.3s, background 0.3s;
  }
  .m-tl-item:hover .m-tl-dot {
    border-color: var(--mystic-accent);
    background: var(--mystic-accent);
  }
  .m-tl-date {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
    margin-bottom: 6px;
  }
  .m-tl-degree {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: normal;
    color: var(--mystic-text);
    margin-bottom: 4px;
  }
  .m-tl-school {
    font-family: var(--font-refined);
    font-size: 15px;
    color: var(--mystic-text-muted);
    margin-bottom: 10px;
  }
  .m-tl-badge {
    display: inline-block;
    padding: 4px 14px;
    background: rgba(180,140,232,0.12);
    border: 1px solid rgba(180,140,232,0.28);
    border-radius: 100px;
    font-size: 12px;
    color: var(--mystic-accent);
    letter-spacing: 0.04em;
  }

  /* ── PROJECTS GRID ── */
  .m-projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .m-project-card {
    background: var(--mystic-surface);
    border: 1px solid var(--mystic-border);
    border-radius: 20px;
    padding: 32px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(0.25,1,0.5,1), border-color 0.35s, background 0.35s, box-shadow 0.35s;
    opacity: 0;
    transform: translateY(30px);
  }
  .m-project-card.visible { opacity: 1; transform: translateY(0); }
  .m-project-card:hover {
    border-color: rgba(180,140,220,0.45);
    background: var(--mystic-elevated);
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(100,40,200,0.22), 0 0 0 1px rgba(180,140,220,0.18);
  }
  .m-project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--mystic-accent-dim), transparent);
    opacity: 0;
    transition: opacity 0.35s;
  }
  .m-project-card:hover::before { opacity: 1; }
  .m-project-card::after {
    content: 'Click to view details →';
    position: absolute;
    bottom: 16px;
    right: 20px;
    font-family: var(--font-body);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(180,140,232,0.50);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .m-project-card:hover::after { opacity: 1; }
  .m-project-tag {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--mystic-accent-dim);
    margin-bottom: 12px;
  }
  .m-project-name {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: normal;
    color: var(--mystic-text);
    margin-bottom: 16px;
    line-height: 1.1;
  }
  .m-project-name em { font-style: italic; color: var(--mystic-accent); }
  .m-project-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
  .m-project-bullets li {
    font-family: var(--font-refined);
    font-size: 14px;
    color: rgba(205,192,235,0.72);
    line-height: 1.55;
    padding-left: 14px;
    position: relative;
  }
  .m-project-bullets li::before {
    content: '◦';
    position: absolute;
    left: 0;
    color: var(--mystic-accent-dim);
  }
  .m-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }
  .m-tech-tag {
    font-size: 11px;
    padding: 3px 10px;
    background: rgba(180,140,232,0.10);
    border: 1px solid rgba(180,140,232,0.20);
    border-radius: 100px;
    color: var(--mystic-text-muted);
    letter-spacing: 0.04em;
  }
  .m-project-links {
    display: flex;
    gap: 12px;
  }
  .m-project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mystic-text-muted);
    text-decoration: none;
    padding: 7px 16px;
    border: 1px solid var(--mystic-border);
    border-radius: 100px;
    transition: color 0.25s, border-color 0.25s, background 0.25s;
  }
  .m-project-link:hover {
    color: var(--mystic-accent);
    border-color: var(--mystic-accent-dim);
    background: rgba(180,140,232,0.08);
  }

  /* ── PROJECT MODAL ── */
  .m-modal-backdrop {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(4, 2, 10, 0.82);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; animation: modalFadeIn 0.3s ease forwards;
    padding: 24px;
  }
  @keyframes modalFadeIn { to { opacity: 1; } }
  .m-modal {
    background: rgba(22, 14, 38, 0.94);
    backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(180,140,220,0.30);
    border-radius: 28px;
    width: 100%; max-width: 900px; max-height: 90vh;
    overflow-y: auto; overflow-x: hidden;
    position: relative;
    box-shadow: 0 32px 80px rgba(60,20,140,0.5), 0 0 0 1px rgba(180,140,220,0.12), inset 0 1px 0 rgba(255,255,255,0.05);
    transform: scale(0.88) translateY(24px);
    opacity: 0;
    animation: modalScaleIn 0.4s cubic-bezier(0.16,1,0.3,1) 0.05s forwards;
  }
  @keyframes modalScaleIn { to { transform: scale(1) translateY(0); opacity: 1; } }
  .m-modal::-webkit-scrollbar { width: 3px; }
  .m-modal::-webkit-scrollbar-thumb { background: rgba(180,140,220,0.30); border-radius: 4px; }
  .m-modal-close {
    position: absolute; top: 20px; right: 20px; z-index: 10;
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(180,140,232,0.15); border: 1px solid rgba(180,140,232,0.30);
    color: var(--mystic-text-muted); cursor: pointer;
    display: flex; align-items: center; justify-content: center; font-size: 18px;
    transition: background 0.2s, color 0.2s;
  }
  .m-modal-close:hover { background: rgba(180,140,232,0.28); color: var(--mystic-text); }
  .m-modal-hero {
    width: 100%; height: 260px; position: relative; overflow: hidden;
    border-radius: 28px 28px 0 0;
  }
  .m-modal-hero img { width: 100%; height: 100%; object-fit: cover; }
  .m-modal-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(8,5,20,0.2) 0%, rgba(8,5,20,0.88) 100%);
  }
  .m-modal-hero-content { position: absolute; bottom: 24px; left: 32px; right: 80px; }
  .m-modal-tag { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mystic-accent-dim); margin-bottom: 6px; }
  .m-modal-title { font-family: var(--font-display); font-size: 42px; font-weight: normal; color: #fff; line-height: 1; }
  .m-modal-title em { font-style: italic; color: var(--mystic-accent); }
  .m-modal-body {
    position: relative;

    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 32px;

    overflow: visible;
  }
  .m-modal-desc { font-family: var(--font-refined); font-size: 17px; color: rgba(215,205,240,0.85); line-height: 1.75; margin-bottom: 24px; }
  .m-modal-features-title { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mystic-text-faint); margin-bottom: 14px; }
  .m-modal-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
  .m-modal-features li { display: flex; align-items: center; gap: 10px; font-family: var(--font-refined); font-size: 15px; color: rgba(210,198,238,0.85); }
  .m-modal-features li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--mystic-accent); flex-shrink: 0; opacity: 0.7; }
  .m-modal-links { display: flex; gap: 12px; flex-wrap: wrap; }
  .m-modal-link-primary { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mystic-void); background: var(--mystic-accent); text-decoration: none; padding: 10px 20px; border-radius: 100px; transition: background 0.2s, transform 0.2s; }
  .m-modal-link-primary:hover { background: #c9a8f0; transform: translateY(-2px); }
  .m-modal-link-secondary { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mystic-text-muted); background: transparent; text-decoration: none; padding: 10px 20px; border-radius: 100px; border: 1px solid var(--mystic-border); transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s; }
  .m-modal-link-secondary:hover { color: var(--mystic-accent); border-color: var(--mystic-accent-dim); background: rgba(180,140,232,0.08); transform: translateY(-2px); }
  .m-modal-stack-title { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mystic-text-faint); margin-bottom: 14px; }
  .m-modal-stack-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 28px; }
  .m-modal-stack-tag { font-size: 12px; padding: 5px 12px; background: rgba(180,140,232,0.12); border: 1px solid rgba(180,140,232,0.25); border-radius: 100px; color: var(--mystic-accent); }
  .m-modal-previews { display: flex; flex-direction: column; gap: 8px; }
  .m-modal-preview-img { width: 100%; height: 80px; object-fit: cover; border-radius: 10px; border: 1px solid rgba(180,140,220,0.15); opacity: 0.75; transition: border-color 0.25s, opacity 0.25s, box-shadow 0.25s; cursor: pointer; }
  .m-modal-preview-img:hover { opacity: 1; }
  .m-modal-preview-img.active { opacity: 1; border-color: var(--mystic-accent); box-shadow: 0 0 12px rgba(180,140,232,0.45); }

  /* ── SKILLS ── */
  .m-skills-outer {
    display: flex;
    flex-direction: column;
    gap: 44px;
  }
  .m-skill-group-title {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
    margin-bottom: 14px;
  }
  .m-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .m-pill {
    font-family: var(--font-refined);
    font-size: 14px;
    padding: 7px 18px;
    background: var(--mystic-surface);
    border: 1px solid var(--mystic-border);
    backdrop-filter: blur(10px);
    border-radius: 100px;
    color: rgba(225,215,245,0.82);
    cursor: default;
    transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s;
    opacity: 0;
    transform: scale(0.92);
  }
  .m-pill.visible { opacity: 1; transform: scale(1); }
  .m-pill:hover {
    background: rgba(50,35,80,0.65);
    border-color: var(--mystic-border-glow);
    color: var(--mystic-text);
    transform: scale(1.04);
    box-shadow: 0 4px 16px rgba(140,80,220,0.20);
  }

  /* ── ACHIEVEMENTS ── */
  .m-achieve-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 56px;
  }
  .m-achieve-card {
    background: var(--mystic-surface);
    border: 1px solid var(--mystic-border);
    border-radius: 20px;
    padding: 28px 28px 24px;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
    opacity: 0;
    transform: translateY(20px);
  }
  .m-achieve-card.visible { opacity: 1; transform: translateY(0); }
  .m-achieve-card:hover {
    border-color: var(--mystic-border-glow);
    background: var(--mystic-elevated);
    box-shadow: 0 8px 32px rgba(100,40,200,0.20);
  }
  .m-achieve-icon {
    font-size: 24px;
    margin-bottom: 12px;
    display: block;
  }
  .m-achieve-prize {
    font-size: 13px;
    color: var(--mystic-gold);
    margin-bottom: 6px;
    letter-spacing: 0.04em;
  }
  .m-achieve-title {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: normal;
    color: var(--mystic-text);
    margin-bottom: 4px;
  }
  .m-achieve-detail {
    font-family: var(--font-refined);
    font-size: 14px;
    color: var(--mystic-text-muted);
  }

  .m-certs {
    background: var(--mystic-surface);
    border: 1px solid var(--mystic-border);
    border-radius: 20px;
    padding: 32px;
  }
  .m-cert-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  .m-cert-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-refined);
    font-size: 14px;
    color: rgba(205,192,235,0.75);
    padding: 8px 0;
    border-bottom: 1px solid rgba(180,140,220,0.06);
  }
  .m-cert-item::before {
    content: '✦';
    font-size: 8px;
    color: var(--mystic-accent-dim);
    flex-shrink: 0;
  }

  /* ── CONTACT ── */
  .m-contact-inner {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
  }
  .m-contact-tagline {
    font-family: var(--font-display);
    font-size: clamp(30px, 4vw, 48px);
    font-weight: normal;
    color: var(--mystic-text);
    margin-bottom: 16px;
    line-height: 1.1;
  }
  .m-contact-tagline em { color: var(--mystic-accent); font-style: italic; }
  .m-contact-sub {
    font-family: var(--font-refined);
    font-size: 17px;
    color: var(--mystic-text-muted);
    line-height: 1.7;
    margin-bottom: 48px;
  }
  .m-contact-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  .m-contact-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-refined);
    font-size: 16px;
    color: var(--mystic-text-muted);
    text-decoration: none;
    padding: 12px 28px;
    border: 1px solid var(--mystic-border);
    border-radius: 100px;
    width: 100%;
    max-width: 380px;
    justify-content: center;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    transition: color 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.2s;
  }
  .m-contact-link:hover {
    color: var(--mystic-accent);
    border-color: var(--mystic-accent-dim);
    background: rgba(50,30,90,0.55);
    box-shadow: 0 8px 32px rgba(100,40,200,0.20);
    transform: translateY(-2px);
  }

  /* ── FOOTER ── */
  .m-footer {
    border-top: 1px solid var(--mystic-border);
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .m-footer-name {
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--mystic-text-muted);
    letter-spacing: 0.06em;
  }
  .m-footer-copy {
    font-size: 12px;
    color: var(--mystic-text-faint);
    letter-spacing: 0.08em;
  }

  /* ── HERO SECTION (portfolio) ── */
  #m-hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 40px 80px;
    position: relative;
    overflow: hidden;
  }
  .m-hero-eyebrow {
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mystic-accent-dim);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .m-hero-eyebrow::before, .m-hero-eyebrow::after {
    content: '';
    width: 40px; height: 1px;
    background: var(--mystic-accent-dim);
  }
  .m-hero-name {
    font-family: var(--font-display);
    font-size: clamp(60px, 9vw, 110px);
    font-weight: normal;
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--mystic-text);
    margin-bottom: 8px;
  }
  .m-hero-name span {
    display: block;
    color: var(--mystic-accent);
    font-style: italic;
  }
  .m-hero-title {
    font-family: var(--font-refined);
    font-size: clamp(16px, 2.2vw, 22px);
    color: var(--mystic-text-muted);
    letter-spacing: 0.06em;
    margin-bottom: 20px;
    margin-top: 16px;
  }
  .m-hero-desc {
    font-family: var(--font-refined);
    font-size: 16px;
    color: rgba(205,192,235,0.72);
    max-width: 540px;
    line-height: 1.75;
    margin-bottom: 48px;
  }
  .m-hero-cta {
    display: flex;
    gap: 14px;
    margin-bottom: 48px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .m-btn-primary {
    font-family: var(--font-body);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mystic-void);
    background: var(--mystic-accent);
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
    box-shadow: 0 4px 20px rgba(140,80,220,0.35);
  }
  .m-btn-primary:hover { background: #c9a8f0; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(160,100,240,0.45); }
  .m-btn-secondary {
    font-family: var(--font-body);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mystic-text-muted);
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 100px;
    border: 1px solid var(--mystic-border);
    cursor: pointer;
    transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s;
  }
  .m-btn-secondary:hover {
    border-color: var(--mystic-accent-dim);
    color: var(--mystic-accent);
    background: rgba(50,30,90,0.5);
    transform: translateY(-2px);
  }
  .m-hero-socials {
    display: flex;
    gap: 20px;
  }
  .m-hero-social-link {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
    text-decoration: none;
    transition: color 0.25s;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
  }
  .m-hero-social-link:hover { color: var(--mystic-accent); border-bottom-color: var(--mystic-accent-dim); }

  /* Glassmorphism stats panel */
  .m-hero-glass-stats {
    position: absolute; right: 48px; top: 50%; transform: translateY(-50%);
    display: flex; flex-direction: column; gap: 12px;
    z-index: 10;
  }
  .m-glass-stat-card {
    background: rgba(22, 14, 40, 0.65);
    backdrop-filter: blur(24px) saturate(160%);
    border: 1px solid rgba(180,140,220,0.24);
    border-radius: 16px; padding: 16px 20px;
    display: flex; align-items: center; gap: 14px;
    min-width: 210px;
    box-shadow: 0 8px 32px rgba(60,20,120,0.25), inset 0 1px 0 rgba(255,255,255,0.06);
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  }
  .m-glass-stat-card:hover { border-color: rgba(180,140,220,0.42); box-shadow: 0 12px 40px rgba(100,40,200,0.30); transform: translateX(-4px); }
  .m-glass-stat-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .m-glass-stat-icon.purple { background: rgba(140,80,220,0.22); border: 1px solid rgba(140,80,220,0.32); }
  .m-glass-stat-icon.gold { background: rgba(200,160,60,0.20); border: 1px solid rgba(200,160,60,0.30); }
  .m-glass-stat-num { font-family: var(--font-display); font-size: 26px; color: var(--mystic-text); line-height: 1; }
  .m-glass-stat-label { font-size: 11px; color: var(--mystic-text-muted); letter-spacing: 0.04em; }

  /* Animated scroll cue */
  .m-scroll-cue {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.5;
    animation: bounce-down 2s ease-in-out infinite;
  }
  @keyframes bounce-down {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }
  .m-scroll-cue span {
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
  }

  /* arc card link */
  .arc-card-link { text-decoration: none; cursor: pointer; display: block; }

  /* mobile nav toggle */
  .m-nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
  }
  .m-nav-toggle span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--mystic-text-muted);
    transition: background 0.2s;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .m-section { padding: 80px 32px; }
    .m-about-grid { grid-template-columns: 1fr; gap: 40px; }
    .m-projects-grid { grid-template-columns: 1fr; }
    .m-achieve-grid { grid-template-columns: 1fr; }
    .m-stat-row { grid-template-columns: repeat(2, 1fr); }
    .m-cert-grid { grid-template-columns: 1fr; }
    .m-footer { flex-direction: column; gap: 12px; text-align: center; padding: 32px; }
    .m-nav-links { display: none; }
    .m-nav-links.open {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 64px; left: 0; right: 0;
      background: rgba(8,5,12,0.96);
      backdrop-filter: blur(28px);
      padding: 24px 32px;
      gap: 20px;
      border-bottom: 1px solid var(--mystic-border);
    }
    .m-nav-toggle { display: flex; }
    .m-nav { padding: 0 24px; }
    .m-hero-name { font-size: clamp(48px, 12vw, 72px); }
    .m-hero-glass-stats { display: none; }
    .m-modal-body { grid-template-columns: 1fr; }
    .m-modal-hero { height: 180px; }
    .m-modal-title { font-size: 30px; }
  }
`;

// ==========================================
// UTILITIES
// ==========================================
const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia('(max-width:767px)').matches
  );
  useEffect(() => {
    const media = window.matchMedia('(max-width:767px)');
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
    }, []);
  return isMobile;
}

// ==========================================
// FLOATING BUBBLES
// ==========================================
const BUBBLE_CONFIG = [
  { w: 120, top: '12%', left: '8%', dur: '7s', delay: '0s', opacity: 0.6 },
  { w: 60, top: '28%', left: '15%', dur: '9s', delay: '1.2s', opacity: 0.4 },
  { w: 90, top: '60%', left: '5%', dur: '11s', delay: '0.5s', opacity: 0.5 },
  { w: 48, top: '75%', left: '20%', dur: '8s', delay: '2s', opacity: 0.35 },
  { w: 70, top: '18%', right: '6%', dur: '10s', delay: '0.8s', opacity: 0.5 },
  { w: 100, top: '45%', right: '10%', dur: '8.5s', delay: '1.8s', opacity: 0.45 },
  { w: 40, top: '70%', right: '18%', dur: '12s', delay: '0.3s', opacity: 0.3 },
  { w: 55, top: '38%', left: '40%', dur: '9.5s', delay: '2.5s', opacity: 0.3 },
];

const FloatingBubbles: React.FC = () => (
  <>
    {BUBBLE_CONFIG.map((b, i) => (
      <div
        key={i}
        className="m-bubble"
        style={{
          width: b.w, height: b.w,
          top: b.top,
          left: 'left' in b ? b.left : undefined,
          right: 'right' in b ? b.right : undefined,
          opacity: b.opacity,
          ['--dur' as any]: b.dur,
          ['--delay' as any]: b.delay,
        }}
      />
    ))}
  </>
);

// ==========================================
// ARC CARD SLIDER
// ==========================================
interface ArcCardSliderProps {
  cards: CardData[];
  rotationOffset: number;
  isMobile: boolean;
}

const ArcCardSlider: React.FC<ArcCardSliderProps> = ({ cards, rotationOffset, isMobile }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardSpacingDeg = isMobile ? 12 : 9;
  const centerIndex = Math.floor(cards.length / 2);
  const arcRadius = isMobile ? 700 : 1100;
  const cardW = isMobile ? 160 : 220;
  const cardH = isMobile ? 175 : 230;
  const halfW = cardW / 2;

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: isMobile ? '260px' : '360px',
      overflow: 'visible',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {cards.map((card, i) => {
        const baseDeg = (i - centerIndex) * cardSpacingDeg;
        const deg = baseDeg - rotationOffset + (centerIndex * cardSpacingDeg);
        const rad = (deg * Math.PI) / 180;
        const x = Math.sin(rad) * arcRadius;
        const y = arcRadius - Math.cos(rad) * arcRadius;
        const isHovered = hoveredIndex === i;

        return (
          <a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="arc-card-link"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: 'absolute',
              bottom: `${-y + (isMobile ? 140 : 200)}px`,
              left: `calc(50% + ${x}px - ${halfW}px)`,
              width: `${cardW}px`,
              height: `${cardH}px`,
              borderRadius: isMobile ? '18px' : '24px',
              backgroundColor: card.color,
              boxShadow: isHovered
                ? '0 20px 60px rgba(40,20,60,0.4), 0 0 0 1px rgba(180,140,220,0.3)'
                : '0 8px 40px rgba(40,20,60,0.25)',
              transform: `rotate(${deg}deg) ${isHovered ? 'translateY(-18px) scale(1.04)' : ''}`,
              transformOrigin: `${halfW}px ${arcRadius}px`,
              padding: isMobile ? '14px' : '22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.35s cubic-bezier(0.25,1,0.5,1), box-shadow 0.35s',
              boxSizing: 'border-box',
              zIndex: isHovered ? 20 : 10,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{
                fontSize: '9px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(60,30,80,0.55)',
                background: 'rgba(60,30,80,0.1)',
                padding: '3px 8px',
                borderRadius: '100px',
                border: '1px solid rgba(60,30,80,0.15)',
              }}>{card.tag}</span>
            </div>
            <div>
              <h4 style={{
                fontFamily: "'Viaoda Libre', serif",
                fontSize: isMobile ? '19px' : '24px',
                color: '#2a1540',
                margin: '0 0 4px',
                lineHeight: 1.1,
                fontWeight: 'normal',
              }}>{card.title}</h4>
              <p style={{
                fontFamily: "'Imprima', sans-serif",
                fontSize: isMobile ? '11px' : '12.5px',
                color: 'rgba(42,21,64,0.6)',
                margin: 0,
                lineHeight: 1.4,
              }}>{card.desc}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

// ==========================================
// IMAGE LIGHTBOX
// ==========================================
interface ImageLightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [animDir, setAnimDir] = useState<'left'|'right'|null>(null);

  const goNext = () => {
    setAnimDir('left');
    setTimeout(() => { setCurrent(c => (c + 1) % images.length); setAnimDir(null); }, 220);
  };
  const goPrev = () => {
    setAnimDir('right');
    setTimeout(() => { setCurrent(c => (c - 1 + images.length) % images.length); setAnimDir(null); }, 220);
  };
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [current]);


  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(4,2,12,0.93)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'modalFadeIn 0.25s ease forwards',
        padding: '24px',
      }}
    >
      {/* Close */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '20px', right: '20px',
        width: '40px', height: '40px', borderRadius: '50%',
        background: 'rgba(180,140,232,0.18)', border: '1px solid rgba(180,140,232,0.35)',
        color: 'rgba(245,238,255,0.9)', cursor: 'pointer', fontSize: '20px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
        zIndex: 10,
      }}>×</button>

      {/* Prev */}
      {images.length > 1 && (
        <button onClick={goPrev} style={{
          position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(180,140,232,0.15)', border: '1px solid rgba(180,140,232,0.30)',
          color: 'rgba(245,238,255,0.85)', cursor: 'pointer', fontSize: '22px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, transform 0.2s',
          zIndex: 10,
        }}>‹</button>
      )}

      {/* Image */}
      <div style={{
        maxWidth: '860px', width: '100%', position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
      }}>
        <div style={{
          width: '100%', borderRadius: '20px', overflow: 'hidden',
          border: '1px solid rgba(180,140,220,0.25)',
          boxShadow: '0 24px 80px rgba(60,20,140,0.5)',
          transform: animDir === 'left' ? 'translateX(-40px)' : animDir === 'right' ? 'translateX(40px)' : 'translateX(0)',
          opacity: animDir ? 0 : 1,
          transition: 'transform 0.22s ease, opacity 0.22s ease',
        }}>
          <img
            src={images[current]}
            alt={`Preview ${current + 1}`}
            style={{ width: '100%', height: 'auto', maxHeight: '72vh', objectFit: 'contain', display: 'block', background: '#0a0710' }}
          />
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: i === current ? '#b48ce8' : 'rgba(180,140,232,0.30)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div style={{
          fontSize: '12px', letterSpacing: '0.14em',
          color: 'rgba(185,170,215,0.55)', fontFamily: 'Imprima',
        }}>
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button onClick={goNext} style={{
          position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(180,140,232,0.15)', border: '1px solid rgba(180,140,232,0.30)',
          color: 'rgba(245,238,255,0.85)', cursor: 'pointer', fontSize: '22px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 10,
        }}>›</button>
      )}
    </div>
  );
};

// ==========================================
// SVG ICONS
// ==========================================
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

// ==========================================
// PROJECT MODAL
// ==========================================
interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const initialIndex = project.previewImages.indexOf(project.previewImg);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex !== -1 ? initialIndex : 0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleThumbnailClick = (index: number) => {
    if (activeIndex === index) {
      setLightboxIndex(index);
    } else {
      setActiveIndex(index);
    }
  };

  return ( <>
    <div className="m-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
          className="m-modal"
          style={{
              position: "relative",
          }}
      >
        <button className="m-modal-close" onClick={onClose}>&times;</button>

        {/* Hero */}
        <div 
          className="m-modal-hero" 
          onClick={() => setLightboxIndex(activeIndex)}
          style={{ cursor: 'zoom-in' }}
        >
          <img src={project.previewImages[activeIndex]} alt={project.name + project.nameEm} />
          <div className="m-modal-hero-overlay" />
          <div className="m-modal-hero-content">
            <div className="m-modal-tag">{project.tag}</div>
            <div className="m-modal-title">{project.name}<em>{project.nameEm}</em></div>
          </div>
        </div>

        {/* Body */}
        <div className="m-modal-body">
          <div>
            <p className="m-modal-desc">{project.longDesc}</p>
            <div className="m-modal-features-title">Key Features</div>
            <ul className="m-modal-features">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className="m-modal-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="m-modal-link-primary">
                  <ExternalIcon /> Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="m-modal-link-secondary">
                <GitHubIcon /> GitHub Repo
              </a>
            </div>
          </div>
          <div className="m-modal-sidebar">
            <div className="m-modal-stack-title">Tech Stack</div>
            <div className="m-modal-stack-tags">
              {project.tags.map(t => <span className="m-modal-stack-tag" key={t}>{t}</span>)}
            </div>
            <div className="m-modal-stack-title">Preview</div>
            <div className="m-modal-previews">
              {project.previewImages.map((src, i) => (
                <img
                  key={i} src={src} alt=""
                  className={`m-modal-preview-img ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  style={{ cursor: 'zoom-in' }}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>

    {lightboxIndex !== null && (
      <ImageLightbox
        images={project.previewImages}
        startIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    )}
  </>
  );
};

// ==========================================
// MAIN APP
// ==========================================
export default function App() {
  const isMobile = useIsMobile();

  // Parallax states
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [uiVisible, setUiVisible] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const curtainsOpenRef = useRef(false);
  const entranceDoneRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);

  // Parallax refs
  const worldRef    = useRef<HTMLImageElement>(null);
  const cloudsRef   = useRef<HTMLImageElement>(null);
  const portalRef   = useRef<HTMLImageElement>(null);
  const curtainLRef = useRef<HTMLImageElement>(null);
  const curtainRRef = useRef<HTMLImageElement>(null);
  const targetMouseX = useRef(0);
  const targetMouseY = useRef(0);
  const smoothMouseX = useRef(0);
  const smoothMouseY = useRef(0);

  // Portfolio states
  const [navHidden, setNavHidden] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [selectedProject, setSelectedProject] =
  useState<ProjectData | null>(null);
const [showRobot, setShowRobot] =
  useState(false);
const [robotLeaving, setRobotLeaving] =
  useState(false);
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  

const handleCardClick = (p: ProjectData) => {

  setClickedCard(p.tag);

  setTimeout(() => {

    setClickedCard(null);

    setSelectedProject(p);

    // Robot starts hidden
    setShowRobot(false);
    setRobotLeaving(false);

    // Wait a little after modal opens
    setTimeout(() => {
      setShowRobot(true);
    }, 500);

  }, 380);

};

  // Inject global styles
  useEffect(() => {
    const el = document.createElement('style');
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  // Entrance sequence
  useEffect(() => {
    const t1 = setTimeout(() => { setCurtainsOpen(true); curtainsOpenRef.current = true; }, 100);
    const t2 = setTimeout(() => setUiVisible(true), 600);
    const t3 = setTimeout(() => { setEntranceDone(true); entranceDoneRef.current = true; }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Scroll listener + active section tracker
  useEffect(() => {
    const sections = ['m-about','m-education','m-projects','m-skills','m-achievements','m-contact'];
    const handleScroll = () => {
      const parallaxScrollRange = window.innerHeight * 3.8;
      const p = clamp(window.scrollY / parallaxScrollRange, 0, 1);
      setScrollProgress(p);
      scrollProgressRef.current = p;
      setNavHidden(p < 0.95);

      // Active section
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id.replace('m-', '');
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX.current = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      targetMouseY.current = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    if (!window.matchMedia('(max-width: 1023px)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('m-cursor-dot');
    const ring   = document.getElementById('m-cursor-ring');
    let mx = 0, my = 0, fx = 0, fy = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
    };
    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      if (ring) { ring.style.left = fx + 'px'; ring.style.top = fy + 'px'; }
      raf = requestAnimationFrame(animate);
    };
    document.addEventListener('mousemove', onMove);
    animate();

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, .m-pill, .m-project-card, .m-achieve-card, .m-btn-primary, .m-btn-secondary')) {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
        if (ring) { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(180,140,232,0.8)'; }
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, .m-pill, .m-project-card, .m-achieve-card, .m-btn-primary, .m-btn-secondary')) {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        if (ring) { ring.style.width = '34px'; ring.style.height = '34px'; ring.style.borderColor = 'rgba(180,140,232,0.5)'; }
      }
    };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  // IntersectionObserver for portfolio animations
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.delay || '0', 10);
          setTimeout(() => el.classList.add('visible'), delay);
        }
      });
    }, { threshold: 0.12 });

    const selectors = ['.m-tl-item', '.m-project-card', '.m-pill', '.m-achieve-card'];
    selectors.forEach((sel, si) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        (el as HTMLElement).dataset.delay = String(i * (si === 2 ? 30 : 150));
        io.observe(el);
      });
    });

    return () => io.disconnect();
  }, []);

  // High-perf animation loop
  useEffect(() => {
    let raf: number;
    const animate = () => {
      smoothMouseX.current += (targetMouseX.current - smoothMouseX.current) * 0.07;
      smoothMouseY.current += (targetMouseY.current - smoothMouseY.current) * 0.07;
      const ep = easeInOut(scrollProgressRef.current);
      const mx = smoothMouseX.current;
      const my = smoothMouseY.current;

      if (worldRef.current) {
        const s = lerp(1, 1.18, ep);
        worldRef.current.style.transform = `scale(${s}) translate(${-mx * 6}px, ${-my * 6}px)`;
      }
      if (cloudsRef.current) {
        const s = lerp(1, 1.4, ep);
        cloudsRef.current.style.transform = `scale(${s}) translate(${-mx * 9}px, ${-my * 9 * 0.4}px)`;
      }
      if (portalRef.current) {
        const s = lerp(1, 7.5, ep);
        portalRef.current.style.transform = `scale(${s}) translate(${-mx * 7}px, ${-my * 7}px)`;
      }
      if (entranceDoneRef.current) {
        const st = -lerp(0, 150, ep);
        if (curtainLRef.current) {
          const s = lerp(1, 1.3, ep);
          curtainLRef.current.style.transform = `translateX(calc(-62% + ${st}%)) scale(${s}) translate(${-mx * 14}px, ${-my * 14 * 0.3}px)`;
        }
        if (curtainRRef.current) {
          const s = lerp(1, 1.3, ep);
          curtainRRef.current.style.transform = `translateX(calc(62% + ${-st}%)) scale(${s}) translate(${-mx * 14}px, ${-my * 14 * 0.3}px)`;
        }
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Derived values
  const scene1Opacity = clamp(1 - scrollProgress / 0.22, 0, 1);
  const scene2Opacity = clamp((scrollProgress - 0.68) / 0.16, 0, 1);
  const portalOpacity = clamp(1 - (scrollProgress - 0.65) / 0.20, 0, 1);
  const cloudsOpacity = lerp(0.7, 1.0, clamp(scrollProgress / 0.05, 0, 1));
  const rotationOffset = lerp(0, 80, clamp((scrollProgress - 0.70) / 0.30, 0, 1));

  const uiFade = (delay: string): React.CSSProperties => ({
    opacity: uiVisible ? 1 : 0,
    transform: uiVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  });

  const NAV_SECTIONS = ['about','education','projects','skills','achievements','contact'];

const handleProjectClose = () => {
  // Start fly-out animation
  setRobotLeaving(true);

  // Keep robot visible while flying away
  setTimeout(() => {

    setShowRobot(false);

    setSelectedProject(null);

    setRobotLeaving(false);

  }, 2500);
};

  return (
    <div style={{ backgroundColor: '#08050c', minHeight: '100vh', width: '100vw', position: 'relative' }}>

      {/* Custom cursors */}
      <div className="m-cursor" id="m-cursor-dot" />
      <div className="m-cursor-ring" id="m-cursor-ring" />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleProjectClose}
        />
      )}
      <RobotOverlay
        visible={showRobot}
        leaving={robotLeaving}
      />

      {/* ── PARALLAX STICKY ZONE ── */}
      <div style={{ height: '480vh', position: 'relative' }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh', width: '100%',
          overflow: 'hidden', background: '#08050c',
        }}>
          {/* World BG */}
          <img ref={worldRef} src={WORLD_BG} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', transformOrigin: '50% 50%', zIndex: 0,
          }} />

          {/* Bottom clouds */}
          <img ref={cloudsRef} src={BOTTOM_CLOUDS} alt="" style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%',
            height: 'auto', transformOrigin: '50% 100%', zIndex: 10, opacity: cloudsOpacity,
          }} />

          {/* Arc cards (project preview) */}
          <div style={{
            position: 'absolute', bottom: isMobile ? '60px' : '80px', left: 0, right: 0,
            opacity: scene2Opacity,
            pointerEvents: scene2Opacity > 0.15 ? 'auto' : 'none',
            zIndex: 9, transition: 'opacity 0.4s ease',
          }}>
            <ArcCardSlider cards={SCENE2_CARDS} rotationOffset={rotationOffset} isMobile={isMobile} />
          </div>

          {/* Portal frame */}
          <img ref={portalRef} src={PORTAL_BG} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', transformOrigin: '52% 38%', zIndex: 15,
            opacity: portalOpacity, pointerEvents: scrollProgress >= 0.85 ? 'none' : 'auto',
          }} />

          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to top, rgba(8,5,12,0.6) 0%, transparent 100%)',
            pointerEvents: 'none', zIndex: 16,
          }} />

          {/* Curtain Left */}
          <img ref={curtainLRef} src={CURTAIN_LEFT} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'right center',
            transformOrigin: 'left center', zIndex: 16,
            transition: entranceDone ? 'none' : 'transform 1.8s cubic-bezier(0.16,1,0.3,1)',
            transform: curtainsOpen ? 'translateX(-62%)' : 'translateX(0%)',
            pointerEvents: 'none',
          }} />

          {/* Curtain Right */}
          <img ref={curtainRRef} src={CURTAIN_RIGHT} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'left center',
            transformOrigin: 'right center', zIndex: 16,
            transition: entranceDone ? 'none' : 'transform 1.8s cubic-bezier(0.16,1,0.3,1)',
            transform: curtainsOpen ? 'translateX(62%)' : 'translateX(0%)',
            pointerEvents: 'none',
          }} />

          {/* Top fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '42vh',
            background: 'linear-gradient(to bottom, rgba(8,5,12,0.5) 0%, transparent 100%)',
            pointerEvents: 'none', zIndex: 45,
          }} />

          {/* SCENE 1 NAV — REMOVED as requested */}

          {/* ── SCENE 1 HERO TEXT ── */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            opacity: scene1Opacity, pointerEvents: scene1Opacity > 0.1 ? 'auto' : 'none',
            zIndex: 20, transition: 'opacity 0.4s ease',
          }}>
            {isMobile ? (
              <div style={{ padding: '80px 24px 100px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <div style={uiFade('0.3s')}>
                  <h1 style={{ fontFamily: "'Viaoda Libre', serif", color: '#fff', margin: '0 0 14px', textAlign: 'center', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}>
                    <div style={{ fontSize: 'clamp(22px,6vw,34px)', letterSpacing: '0.22em' }}>FALL <span style={{ color: 'rgba(255,220,180,0.7)', margin: '0 4px' }}>&#8250;</span> <em>INTO</em></div>
                    <div style={{ fontSize: 'clamp(52px,16vw,80px)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>REVERIE</div>
                  </h1>
                  <p style={{ fontFamily: 'Imprima', fontSize: '14px', color: 'rgba(255,245,235,0.8)', maxWidth: '260px', margin: '0 auto', lineHeight: 1.65, textAlign: 'center' }}>
                    Full Stack & AI Developer crafting digital worlds where vision and code dissolve into experience.
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* Heading left */}
                <div style={{
                  position: 'absolute', top: '46%', left: '60px', maxWidth: '460px',
                  transform: 'translateY(-50%)', textAlign: 'left', ...uiFade('0.3s'),
                }}>
                  <h1 style={{ fontFamily: "'Viaoda Libre', serif", color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.7)', margin: '0 0 20px' }}>
                    <div style={{ fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '0.06em', lineHeight: 1.15 }}>
                      FALL <span style={{ color: 'rgba(255,220,180,0.7)', margin: '0 8px' }}>&#8250;</span> <em>INTO</em>
                    </div>
                    <div style={{ fontSize: 'clamp(52px,7.5vw,90px)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>REVERIE</div>
                  </h1>
                  <p style={{ fontFamily: 'Imprima', fontSize: '17px', color: 'rgba(255,245,235,0.82)', maxWidth: '320px', textShadow: '0 1px 12px rgba(0,0,0,0.8)', lineHeight: 1.7, margin: 0 }}>
                    Full Stack & AI Developer crafting digital worlds where vision, code, and living myth dissolve into one.
                  </p>
                </div>

                {/* Three small cards right — View Reel / Projects Shipped / View Reel */}
                <div style={{
                  position: 'absolute', right: '52px', top: '50%',
                  transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '12px',
                  zIndex: 10, ...uiFade('0.55s'),
                }}>
                  <div className="m-glass-stat-card">
                    <div className="m-glass-stat-icon purple">&#9654;</div>
                    <div>
                      <div className="m-glass-stat-num" style={{ fontFamily: "'Viaoda Libre', serif", fontSize: '20px' }}>View Reel</div>
                      <div className="m-glass-stat-label">See magic in motion</div>
                    </div>
                  </div>
                  <div className="m-glass-stat-card">
                    <div className="m-glass-stat-icon gold" style={{ fontSize: '20px' }}>&#9733;</div>
                    <div>
                      <div className="m-glass-stat-num">5+</div>
                      <div className="m-glass-stat-label">Projects Shipped</div>
                    </div>
                  </div>
                  <div className="m-glass-stat-card">
                    <div className="m-glass-stat-icon purple">&#9654;</div>
                    <div>
                      <div className="m-glass-stat-num" style={{ fontFamily: "'Viaoda Libre', serif", fontSize: '20px' }}>View Reel</div>
                      <div className="m-glass-stat-label">Experience the vibe</div>
                    </div>
                  </div>
                </div>

                {/* Scroll cue */}
                <div style={{
                  position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  pointerEvents: 'none', ...uiFade('0.9s'),
                }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', fontFamily: 'Imprima' }}>DESCEND</span>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: 'bounce-down 2s ease-in-out infinite',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── SCENE 2 UI ── */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start',
            opacity: scene2Opacity, pointerEvents: scene2Opacity > 0.1 ? 'auto' : 'none',
            zIndex: 46, boxSizing: 'border-box',
            paddingTop: isMobile ? '12vh' : '10vh',
            transition: 'opacity 0.4s ease',
          }}>
            <h2 style={{
              fontFamily: "'Viaoda Libre', serif",
              fontSize: isMobile ? 'clamp(28px,8vw,44px)' : 'clamp(38px,6.5vw,78px)',
              color: '#fff', letterSpacing: '0.03em', lineHeight: 1.05, textAlign: 'center',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)', margin: 0,
              maxWidth: isMobile ? '90%' : '80%', fontWeight: 'normal',
            }}>
              FORGE BEYOND THE REAL
            </h2>
            <p style={{
              fontFamily: 'Imprima', fontSize: isMobile ? '13px' : '18px',
              lineHeight: 1.6, textAlign: 'center', color: 'rgba(255,255,255,0.75)',
              margin: `${isMobile ? '3vh' : '5vh'} auto 0`,
              maxWidth: isMobile ? '260px' : '440px',
            }}>
              Projects that live at the edge of AI, full-stack engineering, and creative systems.
            </p>
          </div>

        </div>
      </div>

      {/* ── MIST TRANSITION ── */}
      <div style={{
        position: 'relative',
        zIndex: 100,
        marginTop: '-1px',
        background: 'linear-gradient(180deg, transparent 0%, #08050c 18%)',
        paddingTop: '1px',
      }}>

        {/* Ambient layer */}
        <div aria-hidden style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(ellipse 70% 50% at 20% 30%, rgba(100,60,180,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 70%, rgba(60,30,120,0.04) 0%, transparent 60%)',
        }} />

        {/* ── STICKY NAV (appears after parallax) ── */}
        <nav className={`m-nav ${navHidden ? 'hidden' : 'visible'}`}>
          <a href="#m-hero" className="m-nav-logo">PB</a>
          <ul className={`m-nav-links ${mobileNavOpen ? 'open' : ''}`}>
            {NAV_SECTIONS.map(s => (
              <li key={s}><a href={`#m-${s}`} className={activeSection === s ? 'active' : ''} onClick={() => setMobileNavOpen(false)}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
            ))}
          </ul>
          <div className="m-nav-toggle" onClick={() => setMobileNavOpen(v => !v)}>
            <span/><span/><span/>
          </div>
        </nav>

        {/* ── PORTFOLIO HERO ── */}
        <section id="m-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Ambient orbs */}
          <div className="m-orb" style={{ width: '600px', height: '600px', background: '#7040c0', top: '-100px', left: '-200px' }} />
          <div className="m-orb" style={{ width: '400px', height: '400px', background: '#4020a0', top: '200px', right: '-100px' }} />
          <div className="m-orb" style={{ width: '300px', height: '300px', background: '#8050d0', bottom: '50px', left: '40%' }} />

          {/* Floating Bubbles */}
          <FloatingBubbles />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '120px 40px 80px' }}>
            <p className="m-hero-eyebrow">Full Stack &amp; AI Developer</p>
            <h1 className="m-hero-name">Pratyush<span>Bhattacharya</span></h1>
            <p className="m-hero-title">Building scalable web systems &amp; AI-powered applications</p>
            <p className="m-hero-desc">
              Results-driven CSE undergraduate proficient in MERN, Next.js, PostgreSQL, and RESTful architecture &mdash; with real-world exposure to authentication systems, modular backend services, and AI integrations.
            </p>
            <div className="m-hero-cta">
              <a href="#m-projects" className="m-btn-primary">View Projects</a>
              <a href="#m-contact" className="m-btn-secondary">Get In Touch</a>
            </div>
            <div className="m-hero-socials">
              <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer" className="m-hero-social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer" className="m-hero-social-link">LinkedIn</a>
            </div>
            <div className="m-scroll-cue">
              <svg width="1" height="48" viewBox="0 0 1 48"><line x1="0.5" y1="0" x2="0.5" y2="48" stroke="rgba(180,140,232,0.3)" strokeWidth="1"/></svg>
              <span>Scroll</span>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="m-about" style={{ position: 'relative', borderTop: '1px solid rgba(180,140,220,0.06)' }}>
          <div className="m-orb" style={{ width: '500px', height: '500px', background: '#502090', top: '0px', right: '-150px' }} />
          {/* Floating Bubbles */}
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow">01</p>
              <h2 className="m-heading">About <em>Me</em></h2>
              <div className="m-rule" />
              <div className="m-about-grid">
                <div className="m-about-body">
                  <p>I&apos;m a <strong>Computer Science Engineering undergraduate</strong> at Reva University, Bangalore, with a strong foundation in full-stack development and a genuine passion for building AI-powered applications that solve real problems.</p>
                  <p>My work spans the full stack &mdash; from crafting <strong>responsive React interfaces</strong> to architecting robust Node.js backends with PostgreSQL and MongoDB. I&apos;ve shipped production-grade AI SaaS platforms, authentication systems, and real-time applications &mdash; always focused on <strong>clean architecture and scalable design</strong>.</p>
                  <p>Outside code, I&apos;m a competitive chess player &mdash; having secured <strong>1st prize twice</strong> at inter-school championships &mdash; and an active hackathon participant who thrives in rapid prototyping environments.</p>
                  <div className="m-stat-row">
                    {[['8.42','Current CGPA'],['5+','Projects Shipped'],['10+','Technologies'],['4×','Hackathon Awards']].map(([n,l]) => (
                      <div className="m-stat" key={l}><div className="m-stat-num">{n}</div><div className="m-stat-label">{l}</div></div>
                    ))}
                  </div>
                </div>
                <div className="m-info-panel">
                  {[
                    ['Location', 'Bangalore, India'],
                    ['Email', <a href="mailto:pratyushbhattacharya7@gmail.com">pratyushbhattacharya7@gmail.com</a>],
                    ['Phone', <a href="tel:+918123264791">+91 81232 64791</a>],
                    ['GitHub', <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer">nayan777pratyush</a>],
                    ['LinkedIn', <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer">Pratyush-Bhattacharya</a>],
                    ['Status', <span className="m-status-badge">Open to internships &amp; collaborations</span>],
                  ].map(([label, value]) => (
                    <div className="m-info-row" key={String(label)}>
                      <span className="m-info-label">{label}</span>
                      <span className="m-info-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="m-education" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
          <div className="m-orb" style={{ width: '400px', height: '400px', background: '#301870', bottom: '0', left: '-100px' }} />
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow">02</p>
              <h2 className="m-heading"><em>Education</em></h2>
              <div className="m-rule" />
              <div className="m-timeline">
                {[
                  { date: 'Sep 2023 — Present', degree: 'BTech in Computer Science Engineering', school: 'Reva University, Bangalore', grade: 'CGPA 8.42 / 10' },
                  { date: 'May 2021 — Apr 2023', degree: 'Pre-University Education', school: 'Cathedral Composite PU College, Bangalore', grade: '93.0%' },
                  { date: 'June 2010 — March 2021', degree: 'Schooling (CBSE)', school: 'Kairalee Nilayam Central School, Bangalore', grade: '87.8%' },
                ].map((item) => (
                  <div className="m-tl-item" key={item.date}>
                    <div className="m-tl-dot" />
                    <div className="m-tl-date">{item.date}</div>
                    <div className="m-tl-degree">{item.degree}</div>
                    <div className="m-tl-school">{item.school}</div>
                    <span className="m-tl-badge">{item.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS (Click to view in-depth card version) ── */}
        <section id="m-projects" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
          <div className="m-orb" style={{ width: '600px', height: '600px', background: '#4020a0', top: '-100px', right: '-200px' }} />
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow">03</p>
              <h2 className="m-heading">Featured <em>Projects</em></h2>
              <div className="m-rule" />
              <div className="m-projects-grid">
                {PROJECTS.map((p) => (
                  <div
                    className="m-project-card"
                    key={p.tag}
                    onClick={() => handleCardClick(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(p); }}
                    style={{
                      transform: clickedCard === p.tag ? 'scale(0.96) translateY(4px)' : undefined,
                      transition: clickedCard === p.tag ? 'transform 0.18s ease' : undefined,
                      boxShadow: clickedCard === p.tag ? '0 0 40px rgba(180,140,232,0.45), 0 0 0 2px rgba(180,140,232,0.4)' : undefined,
                    }}
                  >
                    <div className="m-project-tag">{p.tag}</div>
                    <h3 className="m-project-name">{p.name}<em>{p.nameEm}</em></h3>
                    <ul className="m-project-bullets">
                      {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                    </ul>
                    <div className="m-tech-tags">
                      {p.tags.map(t => <span className="m-tech-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="m-project-links" onClick={(e) => e.stopPropagation()}>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="m-project-link">
                        <GitHubIcon /> GitHub
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="m-project-link">
                          <ExternalIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="m-skills" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
          <div className="m-orb" style={{ width: '500px', height: '500px', background: '#602090', bottom: '-100px', left: '-150px' }} />
          {/* Floating Bubbles */}
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow">04</p>
              <h2 className="m-heading">Technical <em>Skills</em></h2>
              <div className="m-rule" />
              <div className="m-skills-outer">
                {[
                  { title: 'Programming Languages', skills: ['C','C++','Java','Python','JavaScript','TypeScript','SQL'] },
                  { title: 'Web & Backend Technologies', skills: ['React.js','Node.js','Express.js','Next.js','MongoDB','MySQL','PostgreSQL','EJS'] },
                  { title: 'Tools & Platforms', skills: ['Git','GitHub','Postman','Jupyter Notebook','Ubuntu','Kali Linux','Salesforce'] },
                  { title: 'Core Concepts', skills: ['MERN Stack','RESTful API Design','Authentication & Authorization','CRUD Operations','DSA','OOP','Machine Learning','DBMS','OS','Computer Networks'] },
                  { title: 'Soft Skills', skills: ['Problem Solving','Leadership','Team Collaboration','Time Management','Analytical Thinking'] },
                ].map((group) => (
                  <div key={group.title}>
                    <div className="m-skill-group-title">{group.title}</div>
                    <div className="m-pills">{group.skills.map(s => <span className="m-pill" key={s}>{s}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section id="m-achievements" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
          <div className="m-orb" style={{ width: '450px', height: '450px', background: '#3010a0', top: '100px', right: '-120px' }} />
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow">05</p>
              <h2 className="m-heading"><em>Achievements</em></h2>
              <div className="m-rule" />
              <div className="m-achieve-grid">
                {[
                  { icon: '\u265F', prize: '\uD83E\uDD47 1st Prize \u00D7 2  |  \uD83E\uDD48 2nd Prize \u00D7 1', title: 'Inter-School Chess', detail: 'REVA University, School of CSE \u2014 2023, 2024 (1st) \u00B7 2025 (2nd)' },
                  { icon: '\uD83D\uDCBB', prize: '\uD83E\uDD48 2nd Prize', title: 'NITTE Vibe Hackathon', detail: 'Team: Rapid Coders \u2014 2025' },
                  { icon: '\uD83C\uDFC6', prize: '\uD83E\uDD48 2nd Prize', title: 'Code Quest 2.0', detail: 'Coding + Hackathon \u2014 REVA University, 2025 \u00B7 Rapid Coders' },
                  { icon: '\u26A1', prize: '\uD83E\uDD48 2nd Prize', title: 'Code Sprint \u2014 ALGO-RHYTHM 3.0', detail: 'Gopalan College of Engineering \u2014 April 2026' },
                ].map(a => (
                  <div className="m-achieve-card" key={a.title}>
                    <span className="m-achieve-icon">{a.icon}</span>
                    <div className="m-achieve-prize">{a.prize}</div>
                    <div className="m-achieve-title">{a.title}</div>
                    <div className="m-achieve-detail">{a.detail}</div>
                  </div>
                ))}
              </div>

              
              <div className="m-certs">
                <div className="m-skill-group-title">Certifications</div>
                <div className="m-cert-grid">
                  {[
                    'Art of C Programming \u2014 NPTEL',
                    'Introduction to Python \u2014 Infotech Solutions',
                    'Cybersecurity and Blockchain \u2014 TrendingSkills',
                    'AWS Solutions Architecture \u2014 Forage',
                    'EA Software Engineering \u2014 Forage',
                    'IBM Digital Badges',
                    'AWS Digital Badges',
                  ].map(c => <div className="m-cert-item" key={c}>{c}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="m-contact" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
          <div className="m-orb" style={{ width: '700px', height: '700px', background: '#5020c0', top: '-200px', left: '50%', transform: 'translateX(-50%)' }} />
          {/* Floating Bubbles */}
          <FloatingBubbles />
          <div className="m-section">
            <div className="m-section-inner">
              <p className="m-eyebrow" style={{ justifyContent: 'center' }}>06</p>
              <div className="m-contact-inner">
                <h2 className="m-contact-tagline">Get In <em>Touch</em></h2>
                <p className="m-contact-sub">
                  Open to internship opportunities, freelance projects, and exciting collaborations. Whether you have a project in mind or just want to say hello &mdash; my inbox is always open.
                </p>
                <div className="m-contact-links">
                  <a href="mailto:pratyushbhattacharya7@gmail.com" className="m-contact-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
                    pratyushbhattacharya7@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer" className="m-contact-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer" className="m-contact-link">
                    <GitHubIcon /> GitHub &mdash; nayan777pratyush
                  </a>
                  <a href="tel:+918123264791" className="m-contact-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.04 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    +91 81232 64791
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="m-footer">
          <div className="m-footer-name">Pratyush Bhattacharya</div>
          <div className="m-footer-copy">&copy; 2026 &middot; Designed &amp; Crafted with precision</div>
        </footer>

      </div>
    </div>
  );
}