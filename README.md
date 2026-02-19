# 🛡️ CYBERTHON 26 — Official Event Website

> **The World's Most Elite Cybersecurity Hackathon**  
> March 20, 2026 · 48 Hours · $50K Prize Pool · 500+ Hackers

---

## 📖 Overview

This is the official website for **Cyberthon 26**, a premier cybersecurity hackathon event. Built with a cinematic dark-themed UI featuring immersive 3D Spline scenes, animated countdowns, particle effects, and smooth scroll-based interactions — designed to set the tone for an elite hacking experience.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer-motion.com/) |
| 3D Scene | [@splinetool/react-spline](https://spline.design/) |
| 3D Engine | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Orbitron (display) · Inter (body) via Google Fonts |

---

## 📁 Project Structure

```
cyberthon-nexus-main/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Full-screen 3D Spline hero section
│   │   ├── Navbar.tsx       # Fixed top navbar with scroll effect
│   │   ├── About.tsx        # Event overview + stats grid
│   │   ├── Tracks.tsx       # 6 competition domain cards
│   │   ├── Timeline.tsx     # Hackathon schedule / phases
│   │   ├── Countdown.tsx    # Live flip-digit countdown timer
│   │   ├── Sponsors.tsx     # Dual-row animated sponsor marquee
│   │   ├── Contact.tsx      # Contact / registration section
│   │   ├── Footer.tsx       # Footer with social links + watermark
│   │   ├── ParticleField.tsx# Background particle canvas effect
│   │   ├── NavLink.tsx      # Reusable nav anchor component
│   │   └── ui/              # shadcn/ui primitive components
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Root app with routing + providers
│   ├── App.css              # Global styles + CSS variables
│   └── main.tsx             # React entry point
├── index.html               # HTML shell with meta tags + fonts
├── tailwind.config.ts       # Tailwind theme config
├── vite.config.ts           # Vite build config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies + scripts
```

---

## 🧩 Key Sections

### 🌌 Hero
Full-screen immersive 3D scene powered by **Spline**. Loads lazily with a graceful "Loading Experience…" fallback. Sets the visual tone of the entire site.

### 🔢 Countdown
Real-time flip-digit timer counting down to **March 20, 2026, 9:00 AM IST**. Updates every second with smooth rotateX animations.

### ℹ️ About
Two-column layout with event description on the left and an animated stats grid on the right:
- **500+** Hackers · **48h** Non-Stop · **$50K** Prize Pool · **6** Tracks

### 🎯 Tracks (6 Competition Domains)
| # | Domain | Focus |
|---|---|---|
| 01 | Web Security | Real-world web vulnerabilities |
| 02 | Mobile Security | App reverse engineering |
| 03 | Crypto & Blockchain | Smart contract auditing, DeFi |
| 04 | Reverse Engineering | Binary analysis, CTF puzzles |
| 05 | Digital Forensics | Breach investigation |
| 06 | AI Security | Adversarial ML, prompt injection |

### 📅 Timeline
Scroll-animated event schedule covering all hackathon phases.

### 🤝 Sponsors
Dual infinite-marquee rows featuring partner organizations (CrowdStrike, Palo Alto Networks, Cloudflare, HackerOne, and more). Pauses on hover.

### 🦶 Footer
Social links (LinkedIn, Instagram, YouTube) + a massive translucent **CYBERTHON** watermark in the background.

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm or bun

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/cyberthon-nexus.git
cd cyberthon-nexus

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:8080` (or the next available port).

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm run test
```

---

## 🎨 Customization

### Changing the 3D Scene
Open `src/components/Hero.tsx` and replace the `scene` URL:
```tsx
<Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
```

### Changing the Countdown Date
Open `src/components/Countdown.tsx` and update:
```tsx
const TARGET_DATE = new Date("2026-03-20T09:00:00+05:30").getTime();
```

### Updating Sponsors
Edit the `sponsors` array in `src/components/Sponsors.tsx`.

### Updating Tracks
Edit the `tracks` array in `src/components/Tracks.tsx`.

### Theme Colors
Primary accent colors are defined in `tailwind.config.ts` and `src/App.css`. The design uses:
- **Cyan** (`cyan-400`) — primary accent
- **Purple** (`purple-500`) — secondary accent
- **Dark background** (`#000` / `bg-background`) — base theme

---

## 🌐 Deployment

The site can be deployed to any static hosting platform:

- **Vercel**: Connect your GitHub repo and deploy automatically.
- **Netlify**: Drag and drop the `dist/` folder or use CI/CD.
- **GitHub Pages**: Use `npm run build` and publish the `dist/` directory.

---

## 📄 License

© 2026 Cyberthon Initiative. All rights reserved.
