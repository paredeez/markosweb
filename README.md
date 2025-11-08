# Marko's Schnitzel Website

A modern, sleek website for Marko's Schnitzel - a relaxed counter-serve in Moorabbin, VIC offering wraps and pittas filled with breaded meat, plus fries & sides. Built with React, TypeScript, and Tailwind CSS.

## Business Information

- **Address**: 2/159 Chesterville Rd, Moorabbin VIC 3189
- **Phone**: (03) 9555 3228
- **Hours**: Monday-Friday 7:00 AM - 2:30 PM (Closed weekends)

## Features

- 🎨 Modern, responsive design with vibrant orange/red color scheme matching the brand
- ⚡ Built with Vite for lightning-fast development and builds
- 🔷 TypeScript for type safety
- 💅 Tailwind CSS for beautiful, utility-first styling
- 📱 Fully responsive - looks great on all devices
- 🖼️ Image gallery showcasing delicious schnitzels
- 📍 Contact section with location information
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
markos-schnitzel/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar with smooth scrolling
│   │   ├── Hero.tsx         # Hero section with logo and CTA
│   │   ├── Menu.tsx         # Menu items with images
│   │   ├── About.tsx        # About section with fresh ingredients
│   │   ├── Contact.tsx      # Contact information and map
│   │   └── Footer.tsx       # Footer with links
│   ├── App.tsx              # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── images/                 # Image assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Color Scheme

The website uses a custom color palette inspired by the Marko's Schnitzel logo:

- **Primary Orange**: `#FF7F27` (marko-orange)
- **Accent Red**: `#C84444` (marko-red)
- **Dark**: `#1a1a1a` (marko-dark)
- **Light**: `#f8f8f8` (marko-light)

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## License

All rights reserved © Marko's Schnitzel

---

Made with ❤️ for schnitzel lovers everywhere!

