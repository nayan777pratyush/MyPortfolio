<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a0d2e,50:4a1a6e,100:b48ce8&height=200&section=header&text=Step%20Into%20Wonder&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Pratyush%20Bhattacharya%20—%20Portfolio&descSize=18&descAlignY=60&descColor=c9a8f0&animation=fadeIn" width="100%" />

<br/>






<br/>

An immersive, scroll-driven portfolio experience — built with cinematic parallax, a living 3D robot companion, and a design language borrowed from wonder itself.

<br/>



</div>

✨ What Makes This Different

This portfolio is designed as a modern, interactive developer portfolio that combines a polished visual identity with practical project and career information.

Feature

Details

🎞️ Animated Hero Carousel

Three rotating hero slides that automatically transition every 10 seconds, with manual previous/next controls

🧊 3D Developer Visual

Animated developer 3D GIF featured in the first hero slide

💻 Developer Terminal

Animated terminal GIF paired with the personal introduction in the second hero slide

🚀 Build-Focused Slide

A third slide highlighting Full Stack, AI & Data, and Deploy & Scale capabilities

💡 Developer Quotes

Personal engineering philosophy integrated into the hero experience

🤖 3D Robot Companion

Interactive Three.js robot experience for project interactions

🃏 Project Experience

Interactive project cards with detailed project views and links

📱 Responsive Design

Adaptive layouts for desktop, tablet, and mobile screens

📄 Resume Access

Resume can be opened or downloaded directly from Get In Touch

🐳 Modern Tooling

Docker and Cloud included in the Tools & Platforms skill set

🎬 Hero Experience

The landing experience is focused and interactive without the previous full-screen parallax intro.

01 · THE WORK
┌────────────────────┬──────────────────────────┐
│                    │  Developer quotes        │
│    3D DEVELOPER    │  and engineering         │
│        GIF         │  philosophy              │
│                    │                          │
└────────────────────┴──────────────────────────┘

                    ↓ 10 seconds

02 · THE IDENTITY
┌──────────────────────────┬────────────────────┐
│  PRATYUSH BHATTACHARYA   │                    │
│  Full Stack & AI         │  DEVELOPER         │
│  Developer               │  TERMINAL GIF      │
│                          │                    │
│  [View Projects]         │                    │
│  [Get In Touch]          │                    │
└──────────────────────────┴────────────────────┘

                    ↓ 10 seconds

03 · THE BUILD
┌────────────────────────────────────────────────┐
│  BUILD BEYOND THE IDEA.                       │
│                                                │
│  Full Stack · AI & Data · Deploy & Scale      │
│                                                │
│  Turning ideas into thoughtful, scalable      │
│  software systems.                             │
└────────────────────────────────────────────────┘

The hero automatically cycles through all three slides every 10 seconds, while arrow controls let visitors move between slides manually.

📱 Responsive Experience

The portfolio adapts to desktop, tablet, and mobile screens.

Responsive navigation for smaller screens

Hero slides adapt their layouts for mobile

Mobile hero supports swipe navigation

Project cards stack cleanly on smaller screens

Skills wrap without horizontal overflow

Contact actions fit smaller displays

Desktop-only cursor effects are disabled where appropriate

No horizontal page overflow on narrow screens

🛠️ Tech Stack

<div align="center">

Core Framework





3D & Animation






Styling




Deployment






</div>

portfolio/
├── public/
│   ├── models/
│   │   └── robot.glb          ← 3D robot model (Three.js GLB)
│   ├── developer-3d.gif       ← Animated 3D developer hero visual
│   ├── developer-terminal.gif ← Animated terminal hero visual
│   └── resume.pdf             ← Resume available from Get In Touch
├── src/
│   ├── assets/                ← Project preview images
│   ├── components/
│   │   └── Robot/
│   │       ├── Robot.tsx          ← 3D robot mesh & animation hook
│   │       ├── RobotAnimations.ts ← State machine: flyIn/idle/wave/flyOut
│   │       ├── RobotOverlay.tsx   ← Cinematic transition orchestrator
│   │       └── RobotScene.tsx     ← Three.js Canvas + lighting setup
│   ├── App.tsx                ← Main app, all sections, project data
│   ├── App.css                ← Component-specific styles
│   ├── index.css              ← Global reset + CSS variables
│   └── main.tsx               ← React root entry
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json

🤖 The Robot System

The robot companion is built on a phase-based state machine that orchestrates both the CSS travel across the screen and the internal 3D animation:

type RobotState = "flyIn" | "idle" | "wave" | "flyOut";

// Phase machine controls the cinematic sequence
type Phase =
  | "idle"       // nothing shown
  | "backdrop"   // dark screen fades in
  | "flying"     // robot travels L → R (horizontal, tiny → full size)
  | "landing"    // robot tips upright at right side with bounce
  | "resting"    // robot floats & waves, project card shown
  | "launching"  // robot tips horizontal again, R → L exit
  | "gone"       // screen clears

The robot's CSS journey across the screen:

Starts at left: -200px, scale(0.12), rotated -90deg (horizontal like a missile)

Transitions to left: calc(100vw - 180px) with scale(1) (full size at right)

On arrival: rotates 0deg (upright) with a spring bounce — like a rocket landing

On close: reverses — tips horizontal, shrinks, disappears off the left edge

🚀 Projects Featured

Project

Type

Stack

Links

QuickAI

AI SaaS Platform

React · Node.js · PostgreSQL · AI APIs

Live ↗ · GitHub ↗

PratyushLMS

Learning Management System

React · Node.js · Express · MongoDB

GitHub ↗

MERN-Auth

Authentication System

React · Node.js · Express · MongoDB · JWT

GitHub ↗

Uber Clone

Ride-Hailing App

React · Node.js · Express · MongoDB · Google Maps

GitHub ↗

MeetFlow AI

AI Meeting Platform

Next.js · TypeScript · WebRTC · AI APIs

GitHub ↗

🎨 Design System

The entire site runs on a single "Mystic Void" design language with CSS custom properties:

:root {
  /* Background palette — deep void to mystic surface */
  --mystic-void:     #08050c;
  --mystic-deep:     #110d1a;
  --mystic-mid:      #1c1528;
  --mystic-surface:  #231c32;
  --mystic-elevated: #2e2540;

  /* Accent — soft violet glow */
  --mystic-accent:     #b48ce8;
  --mystic-accent-dim: rgba(180,140,232,0.60);
  --mystic-gold:       #e8c87a;

  /* Typography */
  --font-display:  'Viaoda Libre', serif;    /* Hero headlines */
  --font-body:     'Imprima', sans-serif;    /* UI text */
  --font-refined:  'Cormorant Garamond';     /* Descriptions */

  /* Glassmorphism */
  --glass-bg:     rgba(30, 20, 50, 0.55);
  --glass-border: rgba(180, 140, 220, 0.22);
  --glass-blur:   blur(20px);
}

⚡ Getting Started

# Clone the repo
git clone https://github.com/nayan777pratyush/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

Requires: Node.js 18+ · npm 9+

The robot model lives at public/models/robot.glb — the app will show a blank 3D scene if it's missing. Ensure it's present before running.

📁 Key Files Reference

File

Purpose

src/App.tsx

All sections, project data, layout, global CSS injection

src/components/Robot/RobotAnimations.ts

3D state machine — controls position/rotation per frame

src/components/Robot/RobotOverlay.tsx

Phase orchestrator — CSS travel + backdrop + stars + speed lines

src/components/Robot/RobotScene.tsx

Three.js Canvas wrapper with lighting

src/components/Robot/Robot.tsx

GLB model loader + frame loop

public/models/robot.glb

3D robot asset

public/developer-3d.gif

Animated 3D developer hero visual

public/developer-terminal.gif

Animated terminal hero visual

public/resume.pdf

Resume opened/downloaded from Get In Touch

🌐 Live Demo

<div align="center">

→ my-portfolio-pratyush.vercel.app ←

Designed to work smoothly across desktop, tablet, and mobile.

</div>

📬 Contact

<div align="center">



Feel free to fork, star ⭐, or raise an issue if you find something interesting!

</div>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:b48ce8,50:4a1a6e,100:1a0d2e&height=120&section=footer&animation=fadeIn" width="100%" />

Built with curiosity, caffeine, and an unreasonable amount of code.

</div>
