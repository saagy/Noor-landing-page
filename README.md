# 🏙️ Noor Smart City - Next.js Landing Page

An interactive, ultra-modern enterprise landing page for **Noor City**, showcasing smart infrastructure, in-unit intelligence, IoT integration, smart access control, and masterplan exploration with full bilingual support (English & Arabic).

---

## ✨ Features

- **🎬 Dynamic Hero Section**: Fluid scroll-based video animation with smooth zoom-out transitions.
- **🌐 Bilingual Support**: Full English & Arabic locale switcher with authentic translations, custom typography (`Nexa` for English & `Bahij TheSansArabic` for Arabic), and RTL support.
- **🔑 Smart Access Control**: Interactive showcase for digital QR invitations, zero-lobby wait smart elevator dispatch, intercom access, and guided elevator controls.
- **💡 In-Unit Intelligence**: Dynamic feature cards highlighting smart panels, water/gas leakage sensors, and automated routine scenes.
- **🗺️ Interactive Masterplan**: District filter map featuring clickable locations, real-time detail highlights, and conditional floor plan views.
- **📱 Mobile & Tablet Responsive**: Fully optimized responsive design across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation & Running Locally

1. **Navigate to the app directory**:
   ```bash
   cd noor-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Structure

```text
quirky-chandrasekhar/
├── README.md               # Repository documentation
├── .gitignore              # Git ignore configuration
└── noor-app/               # Next.js web application
    ├── app/                # App Router pages, layout, and global CSS
    ├── components/         # Reusable React UI components
    ├── lib/                # Language translations and utility functions
    ├── public/             # Static assets (images, videos, custom fonts)
    ├── package.json        # Dependencies and scripts
    └── tsconfig.json       # TypeScript configuration
```

---

## 🏗️ Production Build

To test or generate a production build:

```bash
cd noor-app
npm run build
npm run start
```
