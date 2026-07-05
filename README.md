<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a0d2e,50:4a1a6e,100:b48ce8&height=200&section=header&text=Step%20Into%20Wonder&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Pratyush%20Bhattacharya%20—%20Portfolio&descSize=18&descAlignY=60&descColor=c9a8f0&animation=fadeIn" width="100%" />

<br/>

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-my--portfolio--pratyush.vercel.app-b48ce8?style=for-the-badge&logoColor=white)](https://my-portfolio-pratyush.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-nayan777pratyush-1a0d2e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nayan777pratyush)
[![TypeScript](https://img.shields.io/badge/TypeScript-78.8%25-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/nayan777pratyush/MyPortfolio)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-pratyush.vercel.app/)

<br/>

> *An immersive, scroll-driven portfolio experience — built with cinematic parallax, a living 3D robot companion, and a design language borrowed from wonder itself.*

<br/>

[![Preview](https://img.shields.io/badge/✨%20Click%20to%20experience%20it%20live-→-b48ce8?style=for-the-badge)](https://my-portfolio-pratyush.vercel.app/)

</div>

---

## ✨ What Makes This Different

This isn't just a portfolio. It's a **theatrical experience** — complete with curtain reveals, parallax worlds, a 3D robot companion that reacts to your actions, and cinematic transitions every step of the way.

| Feature | Details |
|---|---|
| 🎭 **Curtain Opening** | Silk curtains part on load to reveal a fantasy portal world |
| 🌍 **Scroll Parallax** | Multi-layer depth parallax with floating clouds and world assets |
| 🤖 **3D Robot Companion** | Powered by Three.js — flies across screen, waves, floats, reacts |
| 🃏 **Arc Card Carousel** | Infinite rotating card arc with scroll-driven physics |
| 🪟 **Project Modals** | Cinematic open/close with robot flyover transitions |
| 🌟 **Custom Cursor** | Dual-layer cursor with glow ring and blend-mode effects |
| 📱 **Fully Responsive** | Mobile-first with adaptive layouts for every screen |

---

## 🎬 Experience Walkthrough

```
🎭  CURTAIN OPENS          — silk drapes part to reveal the portal
       ↓
🌍  PARALLAX HERO          — floating world with depth layers
       ↓
🃏  ARC CARD CAROUSEL      — scroll-physics rotating project arc
       ↓
🖱️  CLICK PROJECT CARD
       ↓
🌑  DARK SCREEN APPEARS    — background fades to void
       ↓
🤖  ROBOT FLIES L → R      — appears tiny on left, grows full-size crossing screen
       ↓
🚀  ROCKET LANDING         — robot tips upright on right side with bounce
       ↓
👋  IDLE + WAVE            — robot floats and greets you
       ↓
📋  PROJECT CARD OPENS     — detailed modal fades in
       ↓
❌  CLOSE CARD
       ↓
🤖  ROBOT LAUNCHES R → L   — tips horizontal, shrinks into left horizon
       ↓
🌑  SCREEN CLEARS          — back to portfolio
```

---

## 🛠️ Tech Stack

<div align="center">

### Core Framework
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)

### 3D & Animation
![Three.js](https://img.shields.io/badge/Three.js_r185-000000?style=flat-square&logo=threedotjs&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/@react--three/fiber_v9-000000?style=flat-square&logo=threedotjs&logoColor=white)
![React Three Drei](https://img.shields.io/badge/@react--three/drei_v10-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_v12-0055FF?style=flat-square&logo=framer&logoColor=white)

### Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![CSS Variables](https://img.shields.io/badge/CSS_Custom_Properties-1572B6?style=flat-square&logo=css3&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

</div>

```
portfolio/
├── public/
│   └── models/
│       └── robot.glb          ← 3D robot model (Three.js GLB)
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
```

---

## 🤖 The Robot System

The robot companion is built on a **phase-based state machine** that orchestrates both the CSS travel across the screen and the internal 3D animation:

```typescript
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
```

The robot's **CSS journey** across the screen:
- Starts at `left: -200px`, `scale(0.12)`, rotated `-90deg` (horizontal like a missile)
- Transitions to `left: calc(100vw - 180px)` with `scale(1)` (full size at right)
- On arrival: rotates `0deg` (upright) with a spring bounce — like a rocket landing
- On close: reverses — tips horizontal, shrinks, disappears off the left edge

---

## 🚀 Projects Featured

| Project | Type | Stack | Links |
|---|---|---|---|
| **QuickAI** | AI SaaS Platform | React · Node.js · PostgreSQL · AI APIs | [Live ↗](https://quick-ai-two-swart.vercel.app/) · [GitHub ↗](https://github.com/nayan777pratyush) |
| **PratyushLMS** | Learning Management System | React · Node.js · Express · MongoDB | [GitHub ↗](https://github.com/nayan777pratyush/PratyushLMS.) |
| **MERN-Auth** | Authentication System | React · Node.js · Express · MongoDB · JWT | [GitHub ↗](https://github.com/nayan777pratyush/MERN-Auth) |
| **Uber Clone** | Ride-Hailing App | React · Node.js · Express · MongoDB · Google Maps | [GitHub ↗](https://github.com/nayan777pratyush/Uber-Clone) |
| **MeetFlow AI** | AI Meeting Platform | Next.js · TypeScript · WebRTC · AI APIs | [GitHub ↗](https://github.com/nayan777pratyush/MeetFlow-AI) |

---

## 🎨 Design System

The entire site runs on a single **"Mystic Void"** design language with CSS custom properties:

```css
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
```

---

## ⚡ Getting Started

```bash
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
```

> **Requires:** Node.js 18+ · npm 9+

The robot model lives at `public/models/robot.glb` — the app will show a blank 3D scene if it's missing. Ensure it's present before running.

---

## 📁 Key Files Reference

| File | Purpose |
|---|---|
| `src/App.tsx` | All sections, project data, layout, global CSS injection |
| `src/components/Robot/RobotAnimations.ts` | 3D state machine — controls position/rotation per frame |
| `src/components/Robot/RobotOverlay.tsx` | Phase orchestrator — CSS travel + backdrop + stars + speed lines |
| `src/components/Robot/RobotScene.tsx` | Three.js Canvas wrapper with lighting |
| `src/components/Robot/Robot.tsx` | GLB model loader + frame loop |
| `public/models/robot.glb` | 3D robot asset |

---

## 🌐 Live Demo

<div align="center">

**[→ my-portfolio-pratyush.vercel.app ←](https://my-portfolio-pratyush.vercel.app/)**

*Best experienced on desktop with a mouse for the full cursor & parallax effect.*

</div>

---

## 📬 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-nayan777pratyush-1a0d2e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nayan777pratyush)

*Feel free to fork, star ⭐, or raise an issue if you find something interesting!*

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:b48ce8,50:4a1a6e,100:1a0d2e&height=120&section=footer&animation=fadeIn" width="100%" />

*Built with curiosity, caffeine, and an unreasonable amount of Three.js.*

</div>
