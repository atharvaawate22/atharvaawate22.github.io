# Atharva Awate Portfolio

A modern, professional software-focused portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.

## 🚀 Features

- **Modern Design**: Dark mode first with glassmorphism and subtle depth effects
- **3D Elements**: Interactive Three.js scene with floating particles and animated orbs
- **Smooth Animations**: Framer Motion for component animations, GSAP for scroll-based effects
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Accessible**: ARIA labels, keyboard navigation, and reduced motion support
- **Performance Optimized**: Lighthouse-friendly with lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js with @react-three/fiber
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navbar.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section with 3D scene
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills with animated progress bars
│   ├── Projects.tsx     # Project cards with modal
│   ├── Experience.tsx   # Timeline experience section
│   ├── Contact.tsx      # Contact form with validation
│   ├── Footer.tsx       # Footer with social links
│   ├── LoadingScreen.tsx # Loading animation
│   ├── ScrollAnimations.tsx # GSAP scroll animations
│   ├── index.ts         # Component exports
│   └── three/
│       └── HeroScene.tsx # Three.js 3D scene
├── config/
│   └── data.ts          # All portfolio data (EDIT THIS FILE)
├── public/
│   └── assets/          # Static assets (resume, images)
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## ✏️ Customization

### Updating Personal Information

All portfolio data is centralized in `config/data.ts`. Edit this file to update:

- **Personal Details**: Name, email, location, social links
- **About Section**: Headline, description, paragraphs, stats
- **Skills**: Categories and skill levels
- **Projects**: Project details, descriptions, tech stacks
- **Experience**: Timeline entries

### Adding New Projects

In `config/data.ts`, add to the `projectsData` array:

```typescript
{
  id: 6, // Increment ID
  title: "Your Project Title",
  description: "Short description for cards",
  longDescription: "Detailed description for modal",
  image: "/projects/your-image.jpg",
  tags: ["React", "Node.js", "etc"],
  category: "Full-Stack", // or "Frontend", "Backend"
  github: "https://github.com/your-username/project",
  demo: "https://your-demo-url.com",
  featured: true, // Show prominently
}
```

### Adding Resume

Place your resume PDF in:
```
public/assets/Atharva_Awate_Resume.pdf
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  accent: {
    primary: '#6366f1',   // Main accent (indigo)
    secondary: '#8b5cf6', // Secondary (purple)
    tertiary: '#06b6d4',  // Tertiary (cyan)
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Ultrawide**: > 1536px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- Sufficient color contrast

## 🎨 Design Features

- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Accents**: Subtle gradient borders and text
- **Micro-interactions**: Hover effects, card tilts, button physics
- **Scroll Animations**: Fade-ins, parallax effects, scale transitions
- **3D Hero**: Animated particle sphere with wireframe geometry

## 📈 Performance Tips

1. Optimize images before adding to `/public`
2. Use WebP format for images when possible
3. Keep the Three.js scene simple on mobile
4. Test with Lighthouse regularly

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Atharva Awate**
