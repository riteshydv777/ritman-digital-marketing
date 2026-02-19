# Ritman Digital Marketing Website

A modern, premium, production-ready digital marketing company website built with Next.js, React, and Framer Motion.

## Overview

Ritman Digital Marketing is a professional, fully responsive website showcasing digital marketing services. The site features smooth animations, glassmorphism design elements, and a clean, scalable architecture optimized for Vercel deployment.

## Features

- ✨ **Modern Design** - Premium blue gradient theme with glassmorphism cards
- 🎬 **Smooth Animations** - Framer Motion animations and scroll effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Production-Ready** - Optimized for speed, SEO, and performance
- 🎯 **Professional Structure** - Clean, scalable folder organization
- 🔒 **Security Headers** - Built-in security best practices
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.4
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 11.0.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Geist Font Family
- **Analytics**: Vercel Analytics
- **Form Handling**: React Hook Form

## Folder Structure

```
project-root/
├── app/
│   ├── layout.tsx              # Root layout with metadata and fonts
│   ├── globals.css             # Global styles and design tokens
│   ├── page.tsx                # Home page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy policy page
│   ├── refund-policy/
│   │   └── page.tsx            # Refund policy page
│   └── terms/
│       └── page.tsx            # Terms & conditions page
├── components/
│   ├── layout/
│   │   └── navbar.tsx          # Navigation bar with mobile menu
│   ├── sections/
│   │   ├── hero.tsx            # Hero section with CTA
│   │   ├── services.tsx        # Services showcase grid
│   │   ├── about-us.tsx        # About company section
│   │   ├── how-it-works-new.tsx # 4-step process timeline
│   │   ├── stats-new.tsx       # Animated statistics counters
│   │   ├── contact-form.tsx    # Contact form with validation
│   │   └── footer-new.tsx      # Footer with links
│   └── ui/                     # shadcn/ui components
├── hooks/                      # Custom React hooks
├── lib/
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── styles/                     # Additional style files
├── .env.example                # Environment variables template
├── vercel.json                 # Vercel deployment config
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## Pages

### Home Page (`/`)
Main landing page with:
- Fixed navbar with mobile menu
- Hero section with animated headline
- Services grid (6 service cards)
- About company section
- How it works timeline (4 steps)
- Statistics counters
- Contact form
- Footer with policy links

### Privacy Policy (`/privacy-policy`)
Comprehensive privacy policy covering data collection, usage, and user rights.

### Refund Policy (`/refund-policy`)
Detailed refund policy with clear terms about service nature and refund conditions.

### Terms & Conditions (`/terms`)
Complete terms of service covering usage, liability, and platform policies.

## Getting Started

### Prerequisites
- Node.js 18+ (or pnpm)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ritman-digital-marketing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Building for Production

```bash
pnpm build
pnpm start
```

### Code Quality

The project includes:
- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for consistent styling
- Framer Motion for animations

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

The `vercel.json` file contains optimal settings for Vercel deployment.

### Environment Variables

No environment variables are required for basic functionality. Optional variables:
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - For Vercel Analytics

See `.env.example` for more options.

## Design System

### Color Palette
- **Background**: `#000a1a` (Deep navy)
- **Primary**: `#3b82f6` (Bright blue)
- **Secondary**: `#0ea5e9` (Cyan)
- **Accent**: `#fbbf24` (Amber)
- **Text**: `#f1f5f9` (Light slate)

### Typography
- **Headings**: Geist Bold
- **Body**: Geist Regular
- **Mono**: Geist Mono (code blocks)

### Components
- Glassmorphic cards with backdrop blur
- Gradient text and buttons
- Smooth scroll animations
- Responsive grid layouts

## Performance

The site is optimized for:
- **Core Web Vitals**: LCP, FID, CLS optimized
- **Page Speed**: Lazy loading, image optimization
- **Security**: Headers, no security vulnerabilities
- **SEO**: Meta tags, Open Graph, structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Ritman Digital Marketing. All rights reserved.

## Support

For issues or questions, contact: support@ritmandigital.com

## Important Notes

### Service Disclaimers
- No guarantee of specific marketing results
- Results depend on market conditions and competition
- Refunds only available if service not yet initiated
- All services are digital in nature

### Policy Compliance
- GDPR compliant
- Transparent about data usage
- Clear refund and cancellation terms
- Professional, corporate language only

## Changelog

### Version 1.0.0 (Initial Release)
- Complete website with all sections
- Mobile-responsive design
- Production-ready deployment
- Policy pages included
- Smooth animations and modern design

---

Built with ❤️ for Ritman Digital Marketing
