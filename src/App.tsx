import React, { useState, useEffect, useRef } from 'react';
import RobotOverlay from "./components/Robot/RobotOverlay";
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
    github: 'https://github.com/nayan777pratyush/QuickAI',
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

  /* ── PORTFOLIO HERO / TWO-PANEL INTRO ── */
  #m-hero {
    min-height: 100svh;
    height: 100svh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(ellipse 60% 65% at 10% 50%, rgba(100,55,180,0.15), transparent 72%),
      radial-gradient(ellipse 55% 65% at 90% 50%, rgba(80,35,150,0.13), transparent 72%),
      linear-gradient(180deg, #090610 0%, #08050c 100%);
  }

  #m-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(180,140,232,0.025) 50%, transparent);
  }

  .m-hero-stage {
    position: absolute;
    inset: 0;
    z-index: 3;
    overflow: hidden;
  }

  .m-hero-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(100%);
    transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.55s ease, visibility 0s linear 0.8s;
  }

  .m-hero-slide.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(0);
    transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.55s ease;
  }

  .m-hero-slide.exit-left {
    transform: translateX(-100%);
    opacity: 0;
    visibility: visible;
  }

  /* PANEL 01 — 3D GIF + editorial quotes */
  .m-hero-gif-quote-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);
    align-items: center;
    gap: clamp(38px, 6vw, 96px);
    width: min(1180px, 100%);
    height: 100%;
    margin: 0 auto;
    padding: 96px 60px 74px;
  }

  .m-hero-gif-half {
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .m-hero-gif-full {
    display: block;
    width: min(48vw, 640px);
    height: min(72vh, 620px);
    object-fit: contain;
    border-radius: 22px;
    filter: drop-shadow(0 28px 70px rgba(90,40,150,0.34));
  }

  .m-hero-terminal-full {
    display: block;
    width: min(47vw, 650px);
    height: min(70vh, 560px);
    object-fit: contain;
    border-radius: 20px;
    border: 1px solid rgba(180,140,232,0.22);
    box-shadow: 0 28px 75px rgba(50,20,100,0.40), 0 0 45px rgba(130,80,220,0.10);
  }

  .m-hero-panel-label {
    position: absolute;
    bottom: 34px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-body);
    font-size: 9px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
  }

  /* PANEL 02 — identity + terminal composition */
  .m-hero-identity-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.85fr);
    align-items: center;
    gap: clamp(38px, 6vw, 96px);
    width: min(1180px, 100%);
    height: 100%;
    margin: 0 auto;
    padding: 96px 60px 74px;
  }

  .m-hero-identity {
    position: relative;
    z-index: 2;
    text-align: left;
  }

  .m-hero-identity-kicker {
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(180,140,232,0.72);
    margin-bottom: 24px;
  }

  .m-hero-name {
    font-family: var(--font-display);
    font-size: clamp(62px, 8vw, 112px);
    font-weight: normal;
    line-height: 0.88;
    letter-spacing: -0.025em;
    color: var(--mystic-text);
    margin-bottom: 22px;
  }

  .m-hero-name span {
    display: block;
    color: var(--mystic-accent);
    font-style: italic;
  }

  .m-hero-title {
    font-family: var(--font-refined);
    font-size: clamp(19px, 2vw, 25px);
    color: var(--mystic-text-muted);
    letter-spacing: 0.055em;
    margin-bottom: 16px;
  }

  .m-hero-desc {
    font-family: var(--font-refined);
    font-size: 18px;
    color: rgba(205,192,235,0.72);
    max-width: 600px;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .m-hero-cta {
    display: flex;
    gap: 14px;
    margin-bottom: 26px;
    flex-wrap: wrap;
  }

  .m-btn-primary,
  .m-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 10px 22px;
    border-radius: 100px;
    text-decoration: none;
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  }

  .m-btn-primary {
    color: var(--mystic-void);
    background: var(--mystic-accent);
    border: 1px solid var(--mystic-accent);
  }

  .m-btn-secondary {
    color: var(--mystic-text-muted);
    background: rgba(30,20,50,0.32);
    border: 1px solid rgba(180,140,220,0.28);
  }

  .m-btn-primary:hover,
  .m-btn-secondary:hover {
    transform: translateY(-2px);
  }

  .m-btn-primary:hover {
    color: var(--mystic-void);
    background: #c9a8f0;
    border-color: #c9a8f0;
    box-shadow: 0 10px 28px rgba(140,80,220,0.24);
  }

  .m-btn-secondary:hover {
    color: var(--mystic-accent);
    border-color: var(--mystic-accent-dim);
    background: rgba(50,30,90,0.55);
    box-shadow: 0 10px 28px rgba(100,40,200,0.16);
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

  .m-hero-quotes {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .m-hero-quote-card {
    position: relative;
    padding: 21px 24px 20px;
    border: 1px solid rgba(180,140,220,0.17);
    border-radius: 18px;
    background: rgba(30,20,50,0.48);
    backdrop-filter: blur(18px);
    box-shadow: 0 14px 45px rgba(50,20,100,0.14);
  }

  .m-hero-quote-card::before {
    content: '“';
    position: absolute;
    top: 7px;
    left: 13px;
    font-family: var(--font-display);
    font-size: 34px;
    line-height: 1;
    color: rgba(180,140,232,0.42);
  }

  .m-hero-quote-card p {
    font-family: var(--font-refined);
    font-size: clamp(16px, 1.45vw, 20px);
    line-height: 1.45;
    font-style: italic;
    color: rgba(230,220,248,0.82);
    padding-left: 20px;
  }

  .m-hero-quote-card.featured {
    border-color: rgba(180,140,232,0.30);
    background: rgba(40,25,68,0.58);
  }

  .m-hero-reverie {
    margin-top: 28px;
    font-family: var(--font-display);
    font-size: clamp(18px, 2vw, 27px);
    letter-spacing: 0.14em;
    color: rgba(245,238,255,0.82);
  }

  .m-hero-reverie em { color: var(--mystic-accent); font-style: italic; }

  .m-hero-divider {
    width: 90px;
    height: 1px;
    margin-top: 20px;
    background: linear-gradient(90deg, var(--mystic-accent-dim), transparent);
  }

  /* PANEL 03 — engineering focus */
  .m-hero-focus-panel {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    align-items: center;
    gap: clamp(38px, 6vw, 92px);
    width: min(1180px, 100%);
    height: 100%;
    margin: 0 auto;
    padding: 96px 60px 74px;
  }

  .m-hero-focus-intro {
    position: relative;
    z-index: 2;
    text-align: left;
  }

  .m-hero-focus-title {
    font-family: var(--font-display);
    font-size: clamp(54px, 6.4vw, 88px);
    font-weight: normal;
    line-height: 0.94;
    letter-spacing: -0.025em;
    color: var(--mystic-text);
    margin-bottom: 24px;
  }

  .m-hero-focus-title em {
    color: var(--mystic-accent);
    font-style: italic;
  }

  .m-hero-focus-desc {
    font-family: var(--font-refined);
    font-size: 18px;
    line-height: 1.7;
    color: rgba(205,192,235,0.72);
    max-width: 500px;
  }

  .m-hero-focus-line {
    width: 90px;
    height: 1px;
    margin-top: 28px;
    background: linear-gradient(90deg, var(--mystic-accent-dim), transparent);
  }

  .m-hero-focus-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    position: relative;
    z-index: 2;
  }

  .m-hero-focus-card {
    min-height: 170px;
    padding: 24px;
    border: 1px solid rgba(180,140,220,0.18);
    border-radius: 18px;
    background: rgba(30,20,50,0.48);
    backdrop-filter: blur(18px);
    box-shadow: 0 14px 45px rgba(50,20,100,0.14);
    transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
  }

  .m-hero-focus-card:last-child {
    grid-column: 1 / -1;
  }

  .m-hero-focus-card:hover {
    transform: translateY(-4px);
    border-color: rgba(180,140,232,0.38);
    background: rgba(40,25,68,0.58);
  }

  .m-hero-focus-card span {
    display: block;
    font-family: var(--font-body);
    font-size: 10px;
    letter-spacing: 0.2em;
    color: var(--mystic-accent-dim);
    margin-bottom: 14px;
  }

  .m-hero-focus-card h3 {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: normal;
    color: var(--mystic-text);
    margin-bottom: 8px;
  }

  .m-hero-focus-card p {
    font-family: var(--font-refined);
    font-size: 14px;
    line-height: 1.55;
    color: var(--mystic-text-muted);
  }

  .m-hero-arrows {
    position: absolute;
    right: 34px;
    bottom: 30px;
    z-index: 20;
    display: flex;
    gap: 8px;
  }

  .m-hero-arrow {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(180,140,232,0.28);
    background: rgba(25,15,42,0.68);
    backdrop-filter: blur(12px);
    color: rgba(245,238,255,0.78);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s;
  }

  .m-hero-arrow:hover {
    border-color: var(--mystic-accent);
    color: var(--mystic-accent);
    background: rgba(50,30,90,0.72);
    transform: translateY(-2px);
  }

  .m-hero-progress {
    position: absolute;
    left: 50%;
    bottom: 42px;
    transform: translateX(-50%);
    z-index: 20;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .m-hero-progress-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid rgba(180,140,232,0.45);
    background: transparent;
    transition: all 0.3s ease;
  }

  .m-hero-progress-dot.active {
    width: 26px;
    border-radius: 100px;
    background: var(--mystic-accent);
    border-color: var(--mystic-accent);
  }

  .m-hero-timer {
    position: absolute;
    left: 34px;
    bottom: 34px;
    z-index: 20;
    width: 92px;
    height: 1px;
    overflow: hidden;
    background: rgba(180,140,232,0.13);
  }

  .m-hero-timer::after {
    content: '';
    display: block;
    height: 100%;
    width: 0;
    background: rgba(180,140,232,0.65);
    animation: heroTimer 10s linear infinite;
  }

  @keyframes heroTimer { from { width: 0; } to { width: 100%; } }

  .m-hero-scroll-cue {
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0.48;
    pointer-events: none;
  }

  .m-hero-scroll-cue span {
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mystic-text-faint);
  }

  @media (max-width: 900px) {
    #m-hero { height: 100svh; min-height: 680px; }
    .m-hero-gif-quote-panel { padding: 84px 28px 80px; gap: 28px; }
    .m-hero-gif-half { padding: 8px; }
    .m-hero-gif-full { width: 48vw; height: 55vh; }
    .m-hero-terminal-full { width: 46vw; height: 52vh; }
    .m-hero-identity-panel { grid-template-columns: 1fr; gap: 28px; padding: 92px 34px 90px; overflow-y: auto; }
    .m-hero-identity { text-align: center; }
    .m-hero-name { font-size: clamp(52px, 12vw, 78px); }
    .m-hero-desc { margin-left: auto; margin-right: auto; }
    .m-hero-cta, .m-hero-socials { justify-content: center; }
    .m-hero-quotes { max-width: 620px; width: 100%; margin: 0 auto; }
    .m-hero-reverie { text-align: center; }
    .m-hero-divider { margin-left: auto; margin-right: auto; }
    .m-hero-focus-panel { grid-template-columns: 1fr; gap: 28px; padding: 92px 34px 90px; overflow-y: auto; }
    .m-hero-focus-intro { text-align: center; }
    .m-hero-focus-desc { margin-left: auto; margin-right: auto; }
    .m-hero-focus-line { margin-left: auto; margin-right: auto; }
    .m-hero-focus-grid { max-width: 620px; width: 100%; margin: 0 auto; }

    .m-hero-arrows { right: 20px; bottom: 20px; }
    .m-hero-timer { left: 20px; bottom: 24px; }
  }

  @media (max-width: 560px) {
    .m-hero-gif-quote-panel { grid-template-columns: 1fr; grid-template-rows: auto 1fr; padding: 78px 16px 70px; gap: 18px; }
    .m-hero-gif-half { padding: 5px; }
    .m-hero-gif-full { width: 82vw; height: 44vh; }
    .m-hero-terminal-full { width: 82vw; height: 38vh; }
    .m-hero-identity-panel { padding: 88px 22px 92px; }
    .m-hero-focus-panel { padding: 88px 22px 92px; }
    .m-hero-focus-grid { grid-template-columns: 1fr; }
    .m-hero-focus-card:last-child { grid-column: auto; }
    .m-hero-focus-card { min-height: 0; }
    .m-hero-title { font-size: 18px; }
    .m-hero-desc { font-size: 15px; }
    .m-hero-quote-card { padding: 17px 18px; }
    .m-hero-quote-card p { font-size: 15px; }
    .m-hero-arrow { width: 38px; height: 38px; }
    .m-hero-timer { display: none; }
    .m-hero-progress { bottom: 27px; }
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

  /* ── FINAL MOBILE POLISH ── */
  #m-hero, .m-hero-stage, .m-hero-slide { min-width: 0; max-width: 100%; }
  .m-hero-slide { overflow: hidden; }
  .m-hero-gif-quote-panel, .m-hero-identity-panel, .m-hero-focus-panel { min-width: 0; }
  .m-hero-focus-card, .m-hero-quote-card, .m-project-card, .m-info-panel, .m-certs { min-width: 0; }
  .m-hero-focus-card p, .m-hero-quote-card p, .m-project-bullets li, .m-about-body p, .m-info-value, .m-contact-sub { overflow-wrap: anywhere; }

  @media (max-width: 767px) {
    html, body { overflow-x: hidden; }
    .m-cursor, .m-cursor-ring { display: none; }
    .m-nav { height: 60px; padding: 0 18px; }
    .m-nav-logo { font-size: 20px; }
    .m-nav-links.open { top: 60px; padding: 20px 22px 24px; gap: 17px; }
    .m-nav-links a { font-size: 10px; }

    .m-section { width: 100%; padding: 72px 20px; }
    .m-heading { font-size: clamp(36px, 11vw, 52px); }
    .m-rule { margin-bottom: 38px; }
    .m-about-grid { gap: 28px; }
    .m-about-body p { font-size: 17px; line-height: 1.72; }
    .m-stat-row { gap: 10px; margin-top: 34px; }
    .m-stat { padding: 16px 10px; border-radius: 14px; }
    .m-stat-num { font-size: 27px; }
    .m-stat-label { font-size: 9px; letter-spacing: 0.06em; }
    .m-info-panel { padding: 22px; border-radius: 16px; }

    .m-timeline { padding-left: 30px; }
    .m-tl-dot { left: -27px; }
    .m-tl-degree { font-size: 20px; }
    .m-tl-school { font-size: 14px; line-height: 1.45; }

    .m-projects-grid { gap: 16px; }
    .m-project-card { padding: 22px 20px 24px; border-radius: 17px; }
    .m-project-name { font-size: 25px; }
    .m-project-bullets li { font-size: 14px; }
    .m-project-links { flex-wrap: wrap; }
    .m-project-link { padding: 7px 13px; font-size: 10px; }

    .m-skills-outer { gap: 32px; }
    .m-skill-group-title { font-size: 10px; letter-spacing: 0.16em; }
    .m-pills { gap: 7px; }
    .m-pill { font-size: 13px; padding: 7px 13px; }

    .m-achieve-grid { gap: 14px; }
    .m-achieve-card { padding: 22px 20px; border-radius: 17px; }
    .m-cert-grid { gap: 4px; }
    .m-certs { padding: 22px; border-radius: 17px; }
    .m-cert-item { font-size: 13px; }

    .m-contact-sub { font-size: 16px; margin-bottom: 34px; }
    .m-contact-link { max-width: none; font-size: 15px; padding: 12px 16px; }
    .m-footer { padding: 28px 20px; }

    /* Hero: every panel stays inside the phone viewport and can scroll internally if needed. */
    #m-hero { height: 100svh; min-height: 620px; }
    .m-hero-stage { inset: 0; }
    .m-hero-slide { overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; }
    .m-hero-gif-quote-panel, .m-hero-identity-panel, .m-hero-focus-panel {
      width: 100%; min-height: 100%; height: auto; padding-left: 20px; padding-right: 20px;
    }
    .m-hero-gif-quote-panel {
      grid-template-columns: 1fr; grid-template-rows: auto auto; align-content: center;
      padding-top: 78px; padding-bottom: 90px; gap: 18px;
    }
    .m-hero-gif-full { width: min(78vw, 310px); height: min(36vh, 260px); }
    .m-hero-quotes { width: 100%; gap: 10px; }
    .m-hero-quote-card { padding: 14px 15px; border-radius: 15px; }
    .m-hero-quote-card p { font-size: 14px; line-height: 1.4; padding-left: 17px; }

    .m-hero-identity-panel {
      grid-template-columns: 1fr; align-content: center; gap: 20px;
      padding-top: 82px; padding-bottom: 88px; overflow-y: auto;
    }
    .m-hero-identity { text-align: center; }
    .m-hero-identity-kicker { font-size: 9px; margin-bottom: 17px; letter-spacing: 0.22em; }
    .m-hero-name { font-size: clamp(44px, 14vw, 64px); line-height: 0.9; margin-bottom: 17px; }
    .m-hero-title { font-size: 16px; line-height: 1.35; margin-bottom: 12px; }
    .m-hero-desc { font-size: 14px; line-height: 1.55; margin-bottom: 20px; }
    .m-hero-cta { gap: 9px; margin-bottom: 18px; justify-content: center; }
    .m-btn-primary, .m-btn-secondary { min-height: 40px; padding: 9px 16px; font-size: 9px; }
    .m-hero-socials { gap: 16px; justify-content: center; }
    .m-hero-social-link { font-size: 9px; }
    .m-hero-reverie { margin-top: 20px; font-size: 16px; }

    .m-hero-focus-panel {
      grid-template-columns: 1fr; align-content: center; gap: 20px;
      padding-top: 82px; padding-bottom: 88px;
    }
    .m-hero-focus-intro { text-align: center; }
    .m-hero-focus-title { font-size: clamp(42px, 12vw, 60px); line-height: 0.94; margin-bottom: 16px; }
    .m-hero-focus-desc { font-size: 14px; line-height: 1.55; }
    .m-hero-focus-line { margin: 20px auto 0; }
    .m-hero-focus-grid { grid-template-columns: 1fr; gap: 10px; width: 100%; }
    .m-hero-focus-card, .m-hero-focus-card:last-child { grid-column: auto; min-height: 0; padding: 16px 17px; border-radius: 15px; }
    .m-hero-focus-card span { margin-bottom: 8px; }
    .m-hero-focus-card h3 { font-size: 19px; margin-bottom: 5px; }
    .m-hero-focus-card p { font-size: 13px; line-height: 1.45; }

    .m-hero-panel-label { bottom: 15px; font-size: 7px; letter-spacing: 0.2em; }
    .m-hero-arrows { right: 14px; bottom: 14px; }
    .m-hero-arrow { width: 36px; height: 36px; font-size: 18px; }
    .m-hero-progress { bottom: 22px; }
    .m-hero-scroll-cue { display: none; }
  }

  @media (max-width: 380px) {
    #m-hero { min-height: 600px; }
    .m-section { padding-left: 16px; padding-right: 16px; }
    .m-hero-gif-quote-panel, .m-hero-identity-panel, .m-hero-focus-panel { padding-left: 16px; padding-right: 16px; }
    .m-hero-gif-full { width: 72vw; height: 30vh; }
    .m-hero-quote-card p { font-size: 13px; }
    .m-hero-name { font-size: 42px; }
    .m-hero-title { font-size: 15px; }
    .m-hero-desc { font-size: 13px; }
    .m-hero-focus-title { font-size: 40px; }
    .m-hero-focus-card h3 { font-size: 18px; }
    .m-hero-focus-card p { font-size: 12.5px; }
    .m-hero-arrows { right: 10px; bottom: 10px; }
    .m-hero-progress { bottom: 18px; }
  }

`;

// ==========================================
// UTILITIES
// ==========================================


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

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 20.45H7.1V8.99H3.54v11.46z"/>
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" aria-hidden="true">
    <path d="M6 3.5h9l3 3V20.5H6z"/>
    <path d="M15 3.5v4h3M9 11h6M9 14h6M9 17h4"/>
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [showRobot, setShowRobot] = useState(false);
  const [robotLeaving, setRobotLeaving] = useState(false);
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  const [heroSlide, setHeroSlide] = useState<0 | 1 | 2>(0);
  const heroTouchStartX = useRef<number | null>(null);
  const heroTouchStartY = useRef<number | null>(null);

  const NAV_SECTIONS = ['about','education','projects','skills','achievements','contact'];

  const handleCardClick = (p: ProjectData) => {
    setClickedCard(p.tag);
    setTimeout(() => {
      setClickedCard(null);
      setSelectedProject(p);
      setShowRobot(false);
      setRobotLeaving(false);
      setTimeout(() => setShowRobot(true), 500);
    }, 380);
  };

  const handleProjectClose = () => {
    setRobotLeaving(true);
    setTimeout(() => {
      setShowRobot(false);
      setSelectedProject(null);
      setRobotLeaving(false);
    }, 2500);
  };

  useEffect(() => {
    const el = document.createElement('style');
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  // Hero intro: three panels, rotating every 10 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide(current => current === 2 ? 0 : (current + 1) as 0 | 1 | 2);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [heroSlide]);

  const heroSlideClass = (index: 0 | 1 | 2) =>
    `m-hero-slide ${heroSlide === index ? 'active' : heroSlide > index ? 'exit-left' : ''}`;

  const goHeroPrev = () => setHeroSlide(current => current === 0 ? 2 : (current - 1) as 0 | 1 | 2);
  const goHeroNext = () => setHeroSlide(current => current === 2 ? 0 : (current + 1) as 0 | 1 | 2);

  const handleHeroTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    heroTouchStartX.current = e.touches[0]?.clientX ?? null;
    heroTouchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const handleHeroTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (heroTouchStartX.current === null || heroTouchStartY.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? heroTouchStartX.current;
    const endY = e.changedTouches[0]?.clientY ?? heroTouchStartY.current;
    const dx = endX - heroTouchStartX.current;
    const dy = endY - heroTouchStartY.current;
    heroTouchStartX.current = null;
    heroTouchStartY.current = null;
    if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) goHeroNext();
    else goHeroPrev();
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(`m-${id}`);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById('m-cursor-dot');
    const ring = document.getElementById('m-cursor-ring');
    let mx = 0, my = 0, fx = 0, fy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = `${mx}px`; cursor.style.top = `${my}px`; }
    };
    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      if (ring) { ring.style.left = `${fx}px`; ring.style.top = `${fy}px`; }
      raf = requestAnimationFrame(animate);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, .m-pill, .m-project-card, .m-achieve-card')) {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
        if (ring) { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(180,140,232,0.8)'; }
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, .m-pill, .m-project-card, .m-achieve-card')) {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        if (ring) { ring.style.width = '34px'; ring.style.height = '34px'; ring.style.borderColor = 'rgba(180,140,232,0.5)'; }
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    animate();
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

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

  return (
    <div style={{ backgroundColor: '#08050c', minHeight: '100vh', width: '100%', position: 'relative' }}>
      <div className="m-cursor" id="m-cursor-dot" />
      <div className="m-cursor-ring" id="m-cursor-ring" />

      {selectedProject && <ProjectModal project={selectedProject} onClose={handleProjectClose} />}
      <RobotOverlay visible={showRobot} leaving={robotLeaving} />

      {/* ── STICKY NAV ── */}
      <nav className="m-nav visible">
        <a href="#m-hero" className="m-nav-logo">PB</a>
        <ul className={`m-nav-links ${mobileNavOpen ? 'open' : ''}`}>
          {NAV_SECTIONS.map(s => (
            <li key={s}>
              <a href={`#m-${s}`} className={activeSection === s ? 'active' : ''} onClick={() => setMobileNavOpen(false)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="m-nav-toggle" onClick={() => setMobileNavOpen(v => !v)}>
          <span /><span /><span />
        </div>
      </nav>

      {/* ── HERO: TWO-PANEL INTRO ── */}
      <section id="m-hero" onTouchStart={handleHeroTouchStart} onTouchEnd={handleHeroTouchEnd}>
        <div className="m-orb" style={{ width: '600px', height: '600px', background: '#7040c0', top: '-160px', left: '-250px' }} />
        <div className="m-orb" style={{ width: '450px', height: '450px', background: '#4020a0', top: '220px', right: '-180px' }} />
        <div className="m-orb" style={{ width: '300px', height: '300px', background: '#8050d0', bottom: '-80px', left: '44%' }} />
        <FloatingBubbles />

        <div className="m-hero-stage">
          {/* PANEL 01 — 3D GIF + the editorial quotes */}
          <div className={heroSlideClass(0)}>
            <div className="m-hero-gif-quote-panel">
              <div className="m-hero-gif-half">
                <img src="/developer-3d.gif" alt="3D developer animation" className="m-hero-gif-full" />
              </div>

              <div className="m-hero-quotes">
                <div className="m-hero-quote-card featured"><p>Projects that live at the edge of AI, full-stack engineering, and creative systems.</p></div>
                <div className="m-hero-quote-card"><p>Code with curiosity. Build with purpose. Learn without limits.</p></div>
                <div className="m-hero-quote-card"><p>I believe consistency beats motivation.</p></div>
                <div className="m-hero-quote-card"><p>Let&apos;s build something amazing together.</p></div>
              </div>
            </div>
            <span className="m-hero-panel-label">01 / 03 · The Work</span>
          </div>

          {/* PANEL 02 — name + terminal GIF */}
          <div className={heroSlideClass(1)}>
            <div className="m-hero-identity-panel">
              <div className="m-hero-identity">
                <div className="m-hero-identity-kicker">Full Stack &amp; AI Developer</div>
                <h1 className="m-hero-name">Pratyush<span>Bhattacharya</span></h1>
                <p className="m-hero-title">Building scalable web systems &amp; AI-powered applications.</p>
                <p className="m-hero-desc">Results-driven CSE undergraduate focused on full-stack engineering, AI integrations, clean architecture, and real-world software.</p>
                <div className="m-hero-cta">
                  <a href="#m-projects" className="m-btn-primary">View Projects</a>
                  <a href="#m-contact" className="m-btn-secondary">Get In Touch</a>
                </div>
                <div className="m-hero-socials">
                  <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer" className="m-hero-social-link">GitHub</a>
                  <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer" className="m-hero-social-link">LinkedIn</a>
                </div>
                <div className="m-hero-reverie">FALL <span>›</span> <em>INTO REVERIE</em></div>
                <div className="m-hero-divider" />
              </div>

              <div className="m-hero-gif-half">
                <img src="/developer-terminal.gif" alt="Developer terminal animation" className="m-hero-terminal-full" />
              </div>
            </div>
          </div>

          {/* PANEL 03 — engineering focus */}
          <div className={heroSlideClass(2)}>
            <div className="m-hero-focus-panel">
              <div className="m-hero-focus-intro">
                <div className="m-hero-identity-kicker">How I Build</div>
                <h2 className="m-hero-focus-title">Build <em>systems</em><br />that matter.</h2>
                <p className="m-hero-focus-desc">Full-stack engineering, AI integrations, and scalable backend architecture — designed to turn ideas into reliable software.</p>
                <div className="m-hero-focus-line" />
              </div>

              <div className="m-hero-focus-grid">
                <div className="m-hero-focus-card">
                  <span>01</span>
                  <h3>AI &amp; Intelligent Apps</h3>
                  <p>Practical AI integrations, automation, document intelligence, and real-time assistants.</p>
                </div>
                <div className="m-hero-focus-card">
                  <span>02</span>
                  <h3>Full-Stack Systems</h3>
                  <p>Modern React frontend with Node.js services, secure APIs, databases, and clean architecture.</p>
                </div>
                <div className="m-hero-focus-card">
                  <span>03</span>
                  <h3>Scale &amp; Reliability</h3>
                  <p>Authentication, PostgreSQL, Docker, cloud-ready deployments, and production-minded engineering.</p>
                </div>
              </div>
            </div>
            <span className="m-hero-panel-label">03 / 03 · The Build</span>
          </div>
        </div>

        <div className="m-hero-arrows" aria-label="Hero panels">
          <button type="button" className="m-hero-arrow" onClick={goHeroPrev} aria-label="Previous hero panel">‹</button>
          <button type="button" className="m-hero-arrow" onClick={goHeroNext} aria-label="Next hero panel">›</button>
        </div>

        <div className="m-hero-progress" aria-hidden="true">
          <button type="button" className={`m-hero-progress-dot ${heroSlide === 0 ? 'active' : ''}`} onClick={() => setHeroSlide(0)} aria-label="Hero panel 1" />
          <button type="button" className={`m-hero-progress-dot ${heroSlide === 1 ? 'active' : ''}`} onClick={() => setHeroSlide(1)} aria-label="Hero panel 2" />
          <button type="button" className={`m-hero-progress-dot ${heroSlide === 2 ? 'active' : ''}`} onClick={() => setHeroSlide(2)} aria-label="Hero panel 3" />
        </div>

        <div className="m-hero-timer" aria-hidden="true" key={heroSlide} />

        <div className="m-hero-scroll-cue">
          <span>Scroll</span>
          <svg width="1" height="30" viewBox="0 0 1 30"><line x1="0.5" y1="0" x2="0.5" y2="30" stroke="rgba(180,140,232,0.35)" strokeWidth="1" /></svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="m-about" style={{ position: 'relative', borderTop: '1px solid rgba(180,140,220,0.06)' }}>
        <div className="m-orb" style={{ width: '500px', height: '500px', background: '#502090', top: '0px', right: '-150px' }} />
        <FloatingBubbles />
        <div className="m-section"><div className="m-section-inner">
          <p className="m-eyebrow">01</p>
          <h2 className="m-heading">About <em>Me</em></h2>
          <div className="m-rule" />
          <div className="m-about-grid">
            <div className="m-about-body">
              <p>I&apos;m a <strong>Computer Science Engineering undergraduate</strong> at Reva University, Bangalore, with a strong foundation in full-stack development and a genuine passion for building AI-powered applications that solve real problems.</p>
              <p>My work spans the full stack &mdash; from crafting <strong>responsive React interfaces</strong> to architecting robust Node.js backends with PostgreSQL and MongoDB. I&apos;ve shipped production-grade AI SaaS platforms, authentication systems, and real-time applications &mdash; always focused on <strong>clean architecture and scalable design</strong>.</p>
              <p>Outside code, I&apos;m a competitive chess player &mdash; having secured <strong>1st prize twice</strong> at inter-school championships &mdash; and an active hackathon participant who thrives in rapid prototyping environments.</p>
              <div className="m-stat-row">{[['8.42','Current CGPA'],['5+','Projects Shipped'],['10+','Technologies'],['4×','Hackathon Awards']].map(([n,l]) => <div className="m-stat" key={l}><div className="m-stat-num">{n}</div><div className="m-stat-label">{l}</div></div>)}</div>
            </div>
            <div className="m-info-panel">
              {[
                ['Location', 'Bangalore, India'],
                ['Email', <a href="mailto:pratyushbhattacharya7@gmail.com">pratyushbhattacharya7@gmail.com</a>],
                ['Phone', <a href="tel:+918123264791">+91 81232 64791</a>],
                ['GitHub', <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer">nayan777pratyush</a>],
                ['LinkedIn', <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer">Pratyush-Bhattacharya</a>],
                ['Status', <span className="m-status-badge">Open to internships &amp; collaborations</span>],
              ].map(([label, value]) => <div className="m-info-row" key={String(label)}><span className="m-info-label">{label}</span><span className="m-info-value">{value}</span></div>)}
            </div>
          </div>
        </div></div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="m-education" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
        <div className="m-orb" style={{ width: '400px', height: '400px', background: '#301870', bottom: '0', left: '-100px' }} /><FloatingBubbles />
        <div className="m-section"><div className="m-section-inner">
          <p className="m-eyebrow">02</p><h2 className="m-heading"><em>Education</em></h2><div className="m-rule" />
          <div className="m-timeline">{[
            { date: 'Sep 2023 — Present', degree: 'BTech in Computer Science Engineering', school: 'Reva University, Bangalore', grade: 'CGPA 8.42 / 10' },
            { date: 'May 2021 — Apr 2023', degree: 'Pre-University Education', school: 'Cathedral Composite PU College, Bangalore', grade: '93.0%' },
            { date: 'June 2010 — March 2021', degree: 'Schooling (CBSE)', school: 'Kairalee Nilayam Central School, Bangalore', grade: '87.8%' },
          ].map(item => <div className="m-tl-item" key={item.date}><div className="m-tl-dot" /><div className="m-tl-date">{item.date}</div><div className="m-tl-degree">{item.degree}</div><div className="m-tl-school">{item.school}</div><span className="m-tl-badge">{item.grade}</span></div>)}</div>
        </div></div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="m-projects" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
        <div className="m-orb" style={{ width: '600px', height: '600px', background: '#4020a0', top: '-100px', right: '-200px' }} /><FloatingBubbles />
        <div className="m-section"><div className="m-section-inner">
          <p className="m-eyebrow">03</p><h2 className="m-heading">Featured <em>Projects</em></h2><div className="m-rule" />
          <div className="m-projects-grid">{PROJECTS.map(p => <div className="m-project-card" key={p.tag} onClick={() => handleCardClick(p)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') handleCardClick(p); }} style={{ transform: clickedCard === p.tag ? 'scale(0.96) translateY(4px)' : undefined, transition: clickedCard === p.tag ? 'transform 0.18s ease' : undefined, boxShadow: clickedCard === p.tag ? '0 0 40px rgba(180,140,232,0.45), 0 0 0 2px rgba(180,140,232,0.4)' : undefined }}>
            <div className="m-project-tag">{p.tag}</div><h3 className="m-project-name">{p.name}<em>{p.nameEm}</em></h3>
            <ul className="m-project-bullets">{p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}</ul>
            <div className="m-tech-tags">{p.tags.map(t => <span className="m-tech-tag" key={t}>{t}</span>)}</div>
            <div className="m-project-links" onClick={e => e.stopPropagation()}><a href={p.github} target="_blank" rel="noopener noreferrer" className="m-project-link"><GitHubIcon /> GitHub</a>{p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="m-project-link"><ExternalIcon /> Live Demo</a>}</div>
          </div>)}</div>
        </div></div>
      </section>

      {/* ── SKILLS ── */}
      <section id="m-skills" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
        <div className="m-orb" style={{ width: '500px', height: '500px', background: '#602090', bottom: '-100px', left: '-150px' }} /><FloatingBubbles />
        <div className="m-section"><div className="m-section-inner">
          <p className="m-eyebrow">04</p><h2 className="m-heading">Technical <em>Skills</em></h2><div className="m-rule" />
          <div className="m-skills-outer">{[
            { title: 'Programming Languages', skills: ['C','C++','Java','Python','JavaScript','TypeScript','SQL'] },
            { title: 'Web & Backend Technologies', skills: ['React.js','Node.js','Express.js','Next.js','MongoDB','MySQL','PostgreSQL','EJS'] },
            { title: 'Tools & Platforms', skills: ['Git','GitHub','Postman','Jupyter Notebook','Ubuntu','Kali Linux','Salesforce','Docker','Cloud'] },
            { title: 'Core Concepts', skills: ['MERN Stack','RESTful API Design','Authentication & Authorization','CRUD Operations','DSA','OOP','Machine Learning','DBMS','OS','Computer Networks'] },
            { title: 'Soft Skills', skills: ['Problem Solving','Leadership','Team Collaboration','Time Management','Analytical Thinking'] },
          ].map(group => <div key={group.title}><div className="m-skill-group-title">{group.title}</div><div className="m-pills">{group.skills.map(s => <span className="m-pill" key={s}>{s}</span>)}</div></div>)}</div>
        </div></div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="m-achievements" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
        <div className="m-orb" style={{ width: '450px', height: '450px', background: '#3010a0', top: '100px', right: '-120px' }} /><FloatingBubbles />
        <div className="m-section"><div className="m-section-inner">
          <p className="m-eyebrow">05</p><h2 className="m-heading"><em>Achievements</em></h2><div className="m-rule" />
          <div className="m-achieve-grid">{[
            { icon: '♟', prize: '🥇 1st Prize × 2  |  🥈 2nd Prize × 1', title: 'Inter-School Chess', detail: 'REVA University, School of CSE — 2023, 2024 (1st) · 2025 (2nd)' },
            { icon: '💻', prize: '🥈 2nd Prize', title: 'NITTE Vibe Hackathon', detail: 'Team: Rapid Coders — 2025' },
            { icon: '🏆', prize: '🥈 2nd Prize', title: 'Code Quest 2.0', detail: 'Coding + Hackathon — REVA University, 2025 · Rapid Coders' },
            { icon: '⚡', prize: '🥈 2nd Prize', title: 'Code Sprint — ALGO-RHYTHM 3.0', detail: 'Gopalan College of Engineering — April 2026' },
          ].map(a => <div className="m-achieve-card" key={a.title}><span className="m-achieve-icon">{a.icon}</span><div className="m-achieve-prize">{a.prize}</div><div className="m-achieve-title">{a.title}</div><div className="m-achieve-detail">{a.detail}</div></div>)}</div>
          <div className="m-certs"><div className="m-skill-group-title">Certifications</div><div className="m-cert-grid">{['Art of C Programming — NPTEL','Introduction to Python — Infotech Solutions','Cybersecurity and Blockchain — TrendingSkills','AWS Solutions Architecture — Forage','EA Software Engineering — Forage','IBM Digital Badges','AWS Digital Badges'].map(c => <div className="m-cert-item" key={c}>{c}</div>)}</div></div>
        </div></div>
      </section>

      {/* ── CONTACT ── */}
      <section id="m-contact" style={{ borderTop: '1px solid rgba(180,140,220,0.06)', position: 'relative' }}>
        <div className="m-orb" style={{ width: '700px', height: '700px', background: '#5020c0', top: '-200px', left: '50%', transform: 'translateX(-50%)' }} /><FloatingBubbles />
        <div className="m-section"><div className="m-section-inner"><p className="m-eyebrow" style={{ justifyContent: 'center' }}>06</p><div className="m-contact-inner">
          <h2 className="m-contact-tagline">Get In <em>Touch</em></h2>
          <p className="m-contact-sub">Open to internship opportunities, freelance projects, and exciting collaborations. Whether you have a project in mind or just want to say hello &mdash; my inbox is always open.</p>
          <div className="m-contact-links">
            <a href="mailto:pratyushbhattacharya7@gmail.com" className="m-contact-link">✉ pratyushbhattacharya7@gmail.com</a>
            <a href="https://www.linkedin.com/in/pratyush-bhattacharya/" target="_blank" rel="noopener noreferrer" className="m-contact-link"><LinkedInIcon /> LinkedIn</a>
            <a href="https://github.com/nayan777pratyush" target="_blank" rel="noopener noreferrer" className="m-contact-link"><GitHubIcon /> GitHub</a>
            <a href="tel:+918123264791" className="m-contact-link">☎ +91 81232 64791</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="m-contact-link"><ResumeIcon /> View Resume</a>
            <a href="/resume.pdf" download="Pratyush-Bhattacharya-Resume.pdf" className="m-contact-link">↓ Download Resume</a>
          </div>
        </div></div></div>
      </section>

      <footer className="m-footer"><div className="m-footer-name">Pratyush Bhattacharya</div><div className="m-footer-copy">&copy; 2026 &middot; Designed &amp; Crafted with precision</div></footer>
    </div>
  );
}