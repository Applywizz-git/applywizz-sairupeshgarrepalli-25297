# Venkata Taraka Rama Rao Rudra - Data Analyst Portfolio

A visually striking, high-end portfolio website built with modern web technologies featuring cinematic motion, elegant typography, micro-interactions, and immersive animations.

## 🎨 Project Overview

This portfolio showcases the professional experience, skills, and certifications of a Data Analyst with 3+ years of experience. The design follows a premium gold-based color palette with glassmorphism effects, parallax overlays, and smooth animations throughout.

### Key Features

- **Cinematic Preloader** - Sequential letter fade animation
- **Sticky Header** - Glass-blur effect with smooth scroll navigation
- **Hero Section** - Two-column layout with animated profile and floating badges
- **About Section** - Animated counters, skill bars with shimmer effects, and highlights grid
- **Experience Timeline** - Vertical alternating timeline with tech badges
- **Projects Carousel** - Swiper.js with coverflow effect
- **Skills Grid** - Categorized skills with progress rings and hover animations
- **Certification Flip Cards** - Interactive 3D flip cards
- **Education Cards** - Fade-in animations with icons
- **Contact Form** - Floating labels, confetti on submit, social links
- **Scroll-to-Top FAB** - Floating action button with icon rotation

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Utility-First Styling |
| **Framer Motion** | Advanced Animations |
| **AOS.js** | Scroll Reveal Animations |
| **Swiper.js** | Projects Carousel |
| **React Icons** | Icon Library |
| **React Scroll** | Smooth Section Navigation |

## 📁 Folder Structure

```
src/
├── assets/              # Images, fonts, and static files
├── components/
│   ├── Preloader.tsx    # Loading animation
│   ├── Header.tsx       # Sticky navigation
│   ├── HeroSection.tsx  # Landing section
│   ├── AboutSection.tsx # Bio, counters, skills
│   ├── ExperienceSection.tsx  # Work timeline
│   ├── ProjectsSection.tsx    # Swiper carousel
│   ├── SkillsSection.tsx      # Skills grid
│   ├── CertificationSection.tsx # Flip cards
│   ├── EducationSection.tsx   # Education cards
│   ├── ContactSection.tsx     # Contact form
│   └── Footer.tsx       # Footer & scroll-to-top
├── components/ui/       # shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── index.css            # Design system & styles
└── main.tsx             # App entry point
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## 📝 How to Customize Content

### Updating Personal Information

Edit the content directly in the component files:

- **Hero Section** (`src/components/HeroSection.tsx`): Name, title, bio
- **About Section** (`src/components/AboutSection.tsx`): Paragraphs, counters, highlights
- **Experience** (`src/components/ExperienceSection.tsx`): Jobs array with bullets
- **Projects** (`src/components/ProjectsSection.tsx`): Projects array
- **Skills** (`src/components/SkillsSection.tsx`): Skill categories
- **Certifications** (`src/components/CertificationSection.tsx`): Certifications array
- **Education** (`src/components/EducationSection.tsx`): Education array

### Adding a Resume PDF

1. Place your resume file in `public/assets/resume.pdf`
2. Add a download button linking to `/assets/resume.pdf`

## 🎨 Color Palette

| Color | Hex | HSL | Usage |
|-------|-----|-----|-------|
| Soft Gold | `#F5D98A` | `45 85% 75%` | Highlights, gradients |
| Royal Gold | `#D4AF37` | `43 67% 52%` | Primary actions, accents |
| Deep Bronze | `#8C7A5B` | `32 22% 45%` | Secondary text, borders |
| Charcoal | `#1A1A1A` | `0 0% 10%` | Dark backgrounds |
| Pure White | `#FFFFFF` | `0 0% 100%` | Light backgrounds, text |

### Modifying Colors

Update the CSS variables in `src/index.css`:

```css
:root {
  --gold-soft: 45 85% 75%;
  --gold-royal: 43 67% 52%;
  --bronze-deep: 32 22% 45%;
  /* ... */
}
```

## ♿ Accessibility

This portfolio follows accessibility best practices:

- **Keyboard Navigation**: All interactive elements are focusable
- **ARIA Labels**: Screen reader support for buttons and icons
- **Focus Rings**: Visible focus indicators on all interactive elements
- **Color Contrast**: WCAG 2.1 AA compliant color combinations
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## 🚢 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of `dist/` to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## 📱 Responsive Design

The portfolio is fully responsive across all breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🔧 Environment Variables

No environment variables are required for the basic portfolio. If adding backend functionality (contact form, analytics), create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using modern web technologies.
