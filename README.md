# 🏎️ F1 Pit Wall: Immersive Fan Command Center

[![Deploy static content to Pages](https://github.com/solmyst/f1-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/solmyst/f1-dashboard/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-e10600?style=for-the-badge&logo=google-chrome&logoColor=white)](https://solmyst.github.io/f1-dashboard/)

A high-fidelity, team-themed F1 dashboard designed for massive fans who want to track the race weekend with cinematic flair. This application transitions seamlessly from a data-heavy command center to a sleek, always-on-top desktop widget.

![F1 Dashboard Concept](https://images.pexels.com/photos/29242302/pexels-photo-29242302.jpeg?auto=compress&cs=tinysrgb&w=1200)

## 🌐 Web vs Desktop

| Feature | 🌐 Web Version (GitHub Pages) | 💻 Desktop App (Electron) |
| :--- | :--- | :--- |
| **Always-On-Top** | Browser Popup (Simulated) | Native System-Level Pinning |
| **Morphing** | Opens in a new window | Transforms the current window |
| **Offline Support** | Via PWA Service Worker | Native local hosting |
| **Frameless UI** | Browser UI remains visible | Completely borderless |

## 🌟 Key Features

### 🏁 Immersive Team Vibe
Choose your favorite team and driver to instantly paint the entire dashboard in their colors. 
- **Dynamic Theming:** Features unique gradients, diagonal stripe patterns, and secondary accent colors for all 11 teams.
- **Driver Spotlight:** Real-time stats, career wins, and championship standings for your favorite driver.

### 🔄 Morphing Window Technology (Electron Native)
The core of the experience is the "Pit Wall Widget" mode.
- **Single Window Transition:** With one click on the 📌 pin, the entire dashboard physically shrinks into a compact desktop widget.
- **Always-On-Top:** The widget locks above all your other windows, so you never miss a lap while working.
- **Frameless UI:** A sleek, borderless design that feels like a native part of your desktop wallpaper.

### 🚦 Live Race Experience
- **Race Simulation:** Test your strategy with a "Live Race" mode that simulates position changes, lap counting, and tire wear.
- **Team Radio:** A real-time ticker showing simulated radio messages from drivers and engineers.
- **Countdown Timer:** Live countdown to the next Grand Prix weekend.

## 🛠️ Technical Stack
- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties & Keyframe Animations), and Modern JavaScript.
- **Desktop Framework:** [Electron](https://www.electronjs.org/) for native OS integration.
- **PWA:** Service Worker integration for offline tracking and installation.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
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
To generate a standalone Windows application:
```bash
npm run dist
```
Navigate to `dist/` to find your `F1 Pit Wall Setup.exe`.

## 🌐 Deployment

This project is automatically deployed to **GitHub Pages** via GitHub Actions.

- **Trigger:** Every push to the `main` branch.
- **Live URL:** [https://solmyst.github.io/f1-dashboard/](https://solmyst.github.io/f1-dashboard/)

### How to enable on your fork:
1. Go to your repository on GitHub.
2. Navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The next push to `main` will trigger the deployment.

---
*Created with passion by Anush Gupta for the F1 community.* 🏁

