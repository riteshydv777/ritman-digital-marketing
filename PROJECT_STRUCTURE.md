# Project Structure Documentation

## Complete File Organization

```
ritman-digital-marketing/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.tsx                # Root layout with metadata, fonts, analytics
│   ├── 📄 globals.css               # Global styles, design tokens, animations
│   ├── 📄 page.tsx                  # Home page (main landing page)
│   ├── 📄 sitemap.ts                # Dynamic sitemap for SEO
│   │
│   ├── 📁 privacy-policy/           # Privacy Policy page
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 refund-policy/            # Refund Policy page
│   │   └── 📄 page.tsx
│   │
│   └── 📁 terms/                    # Terms & Conditions page
│       └── 📄 page.tsx
│
├── 📁 components/                   # React Components
│   │
│   ├── 📁 layout/                   # Layout Components
│   │   └── 📄 navbar.tsx            # Navigation bar (responsive with mobile menu)
│   │
│   ├── 📁 sections/                 # Page Sections
│   │   ├── 📄 hero.tsx              # Hero section with animated headline
│   │   ├── 📄 services.tsx          # Services grid (6 cards)
│   │   ├── 📄 about-us.tsx          # About company section
│   │   ├── 📄 how-it-works-new.tsx  # 4-step process timeline
│   │   ├── 📄 stats-new.tsx         # Animated statistics counters
│   │   ├── 📄 contact-form.tsx      # Contact form with validation
│   │   └── 📄 footer-new.tsx        # Footer with links and info
│   │
│   └── 📁 ui/                       # shadcn/ui Components (auto-generated)
│       ├── 📄 accordion.tsx
│       ├── 📄 alert-dialog.tsx
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 dialog.tsx
│       ├── 📄 input.tsx
│       ├── 📄 label.tsx
│       ├── 📄 textarea.tsx
│       └── ... (other shadcn components)
│
├── 📁 hooks/                        # Custom React Hooks
│   ├── 📄 use-mobile.ts             # Mobile detection hook
│   └── 📄 use-toast.ts              # Toast notification hook
│
├── 📁 lib/                          # Utility Functions
│   └── 📄 utils.ts                  # cn() - class name utility
│
├── 📁 public/                       # Static Assets
│   ├── 📄 icon.svg                  # Site favicon
│   ├── 📄 apple-icon.png            # Apple touch icon
│   ├── 📄 icon-light-32x32.png      # Light theme icon
│   ├── 📄 icon-dark-32x32.png       # Dark theme icon
│   ├── 📄 placeholder-logo.png      # Logo placeholder
│   ├── 📄 placeholder-logo.svg      # Logo vector
│   ├── 📄 placeholder-user.jpg      # User avatar placeholder
│   ├── 📄 placeholder.jpg           # Image placeholder
│   ├── 📄 placeholder.svg           # SVG placeholder
│   └── 📄 robots.txt                # SEO - Search engine crawling rules
│
├── 📁 styles/                       # Additional Style Files
│   └── 📄 globals.css               # Duplicate of app/globals.css (can be removed)
│
├── 📁 node_modules/                 # Dependencies (auto-generated)
│
├── 📄 .env.example                  # Environment variables template
├── 📄 .env.local                    # Local environment (git ignored)
├── 📄 .gitignore                    # Git ignore rules
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 components.json               # shadcn/ui configuration
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration (Tailwind v4)
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 package.json                  # Dependencies and scripts
├── 📄 pnpm-lock.yaml                # Dependency lock file
├── 📄 vercel.json                   # Vercel deployment configuration
│
├── 📄 README.md                     # Project overview and setup guide
├── 📄 DEPLOYMENT.md                 # Detailed deployment instructions
├── 📄 PROJECT_STRUCTURE.md          # This file
│
└── 📄 .editorconfig                 # Editor settings (if present)
```

## File Descriptions

### Core Application Files

#### `app/layout.tsx`
- Root layout component for all pages
- Sets up metadata (title, description, OG tags)
- Imports and configures fonts (Geist, Geist Mono)
- Wraps children with providers
- Includes Vercel Analytics

#### `app/globals.css`
- Global styles imported into all pages
- Design tokens (CSS custom properties)
- Tailwind CSS configuration
- Custom component classes
- Animation keyframes
- Theme variables

#### `app/page.tsx`
- Main homepage
- Imports and arranges all major sections
- Home = Navbar + Hero + Services + About + HowItWorks + Stats + Contact + Footer

#### `app/sitemap.ts`
- Dynamic sitemap generation for SEO
- Lists all pages and their update frequency
- Used by search engines to crawl site

### Layout Components

#### `components/layout/navbar.tsx`
Features:
- Fixed position with glassmorphism
- Desktop navigation menu
- Mobile hamburger menu
- Responsive design
- Brand logo with gradient text
- CTA button

### Section Components

#### `components/sections/hero.tsx`
- Large hero banner at page top
- Animated headline with gradient text
- Subheading and description
- CTA buttons (primary + secondary)
- Animated floating gradient orb
- Full viewport height

#### `components/sections/services.tsx`
- Grid of 6 service cards
- Icons for each service
- Hover animations
- Glassmorphic design
- Section title and description

Services included:
1. Instagram Marketing Campaigns
2. YouTube Promotion Services
3. Brand Awareness Campaigns
4. Audience Growth Strategy
5. Engagement Optimization
6. Performance Analytics

#### `components/sections/about-us.tsx`
- Two-column layout (content + glass card)
- Company description
- Mission and values
- Key differentiators
- Professional tone

#### `components/sections/how-it-works-new.tsx`
- 4-step process timeline
- Connected steps with decorative line
- Numbered badges (1-4)
- Card-based design
- Hover animations

Steps:
1. Select Marketing Service
2. Share Campaign Details
3. Strategy Execution
4. Performance Tracking

#### `components/sections/stats-new.tsx`
- Animated counter components
- 4 statistics displayed
- Gradient background
- CountUp animation on scroll
- Professional metrics

Statistics:
- 500+ Campaigns Managed
- 200+ Clients Served
- 95% Client Satisfaction
- 5+ Years Experience

#### `components/sections/contact-form.tsx`
- Two-column layout
- Contact information (left)
- Form inputs (right)
- Email and phone links
- Form validation
- Success message
- Professional disclaimers

#### `components/sections/footer-new.tsx`
- Full-width footer
- Brand info column
- Quick links
- Contact information
- Legal links (policies)
- Copyright notice
- Current year dynamic

### Policy Pages

#### `app/privacy-policy/page.tsx`
- 8 sections covering data handling
- User rights information
- Cookie usage
- Security measures

#### `app/refund-policy/page.tsx`
- 9 sections on refund terms
- Service nature disclosure
- No guarantees statement
- Razorpay-safe language

#### `app/terms/page.tsx`
- 13 sections covering terms of service
- Liability limitations
- User responsibilities
- Third-party platform disclaimers

### Configuration Files

#### `next.config.mjs`
Settings:
- TypeScript strict mode
- Image optimization
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Compression enabled
- No production source maps
- SWC minification

#### `tailwind.config.js`
- Tailwind CSS v4 configuration
- Design tokens mapped to CSS variables
- Custom colors and spacing
- Animation configurations

#### `tsconfig.json`
- Strict type checking
- Path aliases (@/)
- JSX support
- Next.js specific options

#### `package.json`
Scripts:
- `dev` - Development server
- `build` - Production build
- `start` - Run production server
- `lint` - ESLint check

Key dependencies:
- next 16.1.6
- react 19.2.4
- framer-motion 11.0.0
- tailwindcss 4.1.9
- shadcn/ui components
- lucide-react (icons)
- react-countup (counters)
- react-hook-form (forms)

#### `vercel.json`
- Framework detection (nextjs)
- Build and dev commands
- Deployment region (iad1)
- Install command (pnpm with frozen lockfile)
- Public project setting

## Component Hierarchy

```
html
└── body
    └── RootLayout (app/layout.tsx)
        ├── Navbar (components/layout/navbar.tsx)
        │   ├── Logo
        │   ├── Desktop Nav Menu
        │   ├── Mobile Menu (conditional)
        │   └── CTA Button
        │
        ├── main
        │   ├── Hero (components/sections/hero.tsx)
        │   │   ├── Animated Headline
        │   │   ├── Subheading
        │   │   └── CTA Buttons
        │   │
        │   ├── Services (components/sections/services.tsx)
        │   │   └── ServiceCard[] x 6
        │   │       ├── Icon
        │   │       ├── Title
        │   │       ├── Description
        │   │       └── Learn More Link
        │   │
        │   ├── AboutUs (components/sections/about-us.tsx)
        │   │   ├── Company Description
        │   │   └── Mission Glass Card
        │   │
        │   ├── HowItWorksNew (components/sections/how-it-works-new.tsx)
        │   │   └── StepCard[] x 4
        │   │       ├── Number Badge
        │   │       ├── Title
        │   │       └── Description
        │   │
        │   ├── StatsNew (components/sections/stats-new.tsx)
        │   │   └── StatCard[] x 4
        │   │       ├── Number with CountUp
        │   │       └── Label
        │   │
        │   └── ContactForm (components/sections/contact-form.tsx)
        │       ├── Contact Info
        │       │   ├── Email Card
        │       │   └── Support Card
        │       └── Form
        │           ├── Name Input
        │           ├── Email Input
        │           ├── Message Textarea
        │           └── Submit Button
        │
        └── FooterNew (components/sections/footer-new.tsx)
            ├── Brand Column
            ├── Quick Links Column
            ├── Contact Column
            └── Bottom Bar (Copyright + Policy Links)
```

## Design System

### Color Variables (in globals.css)
```css
:root {
  --background: 240 30% 3%;       /* Deep navy */
  --foreground: 0 0% 98%;         /* Off white */
  --primary: 219 80% 50%;         /* Bright blue */
  --primary-light: 219 100% 60%;  /* Light blue */
  --secondary: 200 90% 56%;       /* Cyan */
  --accent: 38 92% 50%;           /* Amber/Orange */
  --muted: 240 10% 25%;           /* Dark gray */
  --muted-foreground: 240 5% 65%; /* Light gray */
  --card: 240 20% 8%;             /* Dark card bg */
  --card-foreground: 0 0% 98%;    /* Card text */
  --border: 240 15% 15%;          /* Border color */
  --ring: 219 80% 50%;            /* Focus ring */
  --radius: 0.625rem;             /* Border radius */
}
```

### Component Classes
- `.glass-effect` - Glassmorphism with backdrop blur
- `.gradient-bg` - Blue gradient background
- `.gradient-text` - Blue to cyan gradient text
- `.btn-primary` - Primary gradient button
- `.btn-secondary` - Secondary outline button
- `.section-container` - Full-width section padding
- `.max-width-container` - Centered max-width wrapper
- `.fade-in-up` - Scroll animation

## Scalability Considerations

### Easy to Extend:
- Add new sections in `/components/sections/`
- Create new pages in `/app/[page]/`
- Add components in `/components/ui/`
- Add hooks in `/hooks/`

### Performance:
- Client components use `'use client'` only when needed
- Server components by default
- Code splitting automatic
- Images lazy-loaded

### Maintenance:
- Centralized design tokens
- Consistent naming conventions
- Component-based architecture
- Clear file organization

## Best Practices Applied

✅ TypeScript for type safety
✅ Component composition
✅ Server vs Client components
✅ Dynamic metadata
✅ SEO optimization
✅ Mobile-first design
✅ Accessibility (semantic HTML)
✅ Performance (code splitting, lazy loading)
✅ Security (headers, no secrets in code)
✅ Responsive design (mobile, tablet, desktop)

---

**Last Updated**: 2026
**Framework**: Next.js 16.1.6
**Status**: Production-Ready
