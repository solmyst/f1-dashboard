# 🏎️ F1 Pit Wall: Immersive Fan Command Center

A high-fidelity, team-themed F1 dashboard designed for massive fans who want to track the race weekend with cinematic flair. This application transitions seamlessly from a data-heavy command center to a sleek, always-on-top desktop widget.

![F1 Dashboard Concept](https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1200)

## 🌟 Key Features

### 🏁 Immersive Team Vibe
Choose your favorite team and driver to instantly paint the entire dashboard in their colors. 
- **Dynamic Theming:** Features unique gradients, diagonal stripe patterns, and secondary accent colors for all 11 teams (including Ferrari Red, Mercedes Silver, and Red Bull Blue/Red).
- **Driver Spotlight:** Real-time stats, career wins, and championship standings for your favorite driver.

### 🔄 Morphing Window Technology (Electron Native)
The core of the experience is the "Pit Wall Widget" mode.
- **Single Window Transition:** With one click on the 📌 pin, the entire dashboard physically shrinks into a compact desktop widget.
- **Always-On-Top:** The widget locks above all your other windows (Word, VS Code, etc.), so you never miss a lap while working.
- **Frameless UI:** A sleek, borderless design that feels like a native part of your desktop wallpaper.

### 🚦 Live Race Experience
- **Race Simulation:** Test your strategy with a "Live Race" mode that simulates position changes, lap counting, and tire wear.
- **Team Radio:** A real-time ticker showing simulated radio messages from drivers and engineers.
- **Countdown Timer:** Live countdown to the next Grand Prix weekend.

## 🛠️ Technical Stack
- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties & Keyframe Animations), and Modern JavaScript.
- **Desktop Framework:** [Electron](https://www.electronjs.org/) for native OS integration and Always-On-Top capabilities.
- **PWA:** Service Worker integration for offline tracking.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Project was built using v18+)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/solmyst/f1-dashboard.git
   cd f1-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the Desktop App:
   ```bash
   npm start
   ```

### Building the Executable (.exe)
To generate a standalone Windows application that doesn't require a terminal:
```bash
npm run dist
```
Navigate to `dist/F1 Pit Wall-win32-x64/` to find your `F1 Pit Wall.exe`.

## 📸 Media
- **Dashboard Mode:** Full-screen data visualization.
- **Widget Mode:** Compact, 360x480 floating telemetry card.

---
*Created with passion by Anush Gupta for the F1 community.* 🏁
