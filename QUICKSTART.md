# Quick Start Guide

Get your Ritman Digital Marketing website up and running in minutes.

## 1. Setup (2 minutes)

### Option A: Using pnpm (Recommended)
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Option B: Using npm
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 2. Customize Your Site (5 minutes)

### Update Site Information

#### Update Brand Name
- **File**: `components/layout/navbar.tsx` (line 22)
- Change: `"Ritman"` to your company name

#### Update Contact Email
- **File**: `components/sections/contact-form.tsx` (line 78)
- Change: `support@ritmandigital.com` to your email

#### Update Footer Links
- **File**: `components/sections/footer-new.tsx` (lines 35-45, 90-95)
- Update email and company description

#### Update SEO Metadata
- **File**: `app/layout.tsx` (lines 5-38)
- Update title, description, keywords
- Update Open Graph image URL
- Change URL to your domain

### Customize Colors (Optional)

#### Change Theme Colors
- **File**: `app/globals.css` (lines 1-16)
- Modify CSS custom properties:
  ```css
  --primary: 219 80% 50%;        /* Change primary color */
  --secondary: 200 90% 56%;      /* Change secondary color */
  --accent: 38 92% 50%;          /* Change accent color */
  ```

### Update Service Descriptions (Optional)

- **File**: `components/sections/services.tsx` (lines 8-37)
- Modify service titles and descriptions
- Change icons using lucide-react

## 3. Build & Deploy (3 minutes)

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Ritman Digital Marketing website"
   git branch -M main
   git remote add origin https://github.com/yourusername/repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., ritmandigital.com)
   - Follow DNS instructions at your registrar

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `app/globals.css` | Styles & design tokens |
| `components/sections/hero.tsx` | Hero section |
| `components/layout/navbar.tsx` | Navigation |
| `vercel.json` | Deployment config |

## Essential Customizations

### ✅ Must Do
1. [ ] Update email in contact form
2. [ ] Update domain in sitemap.ts
3. [ ] Update SEO metadata in layout.tsx
4. [ ] Update company info in footer

### ✅ Should Do
1. [ ] Customize colors in globals.css
2. [ ] Update brand name throughout
3. [ ] Add company logo
4. [ ] Update service descriptions

### ✅ Nice to Have
1. [ ] Add team photos
2. [ ] Customize icons
3. [ ] Add testimonials
4. [ ] Add case studies

## Common Customizations

### Add a New Section
1. Create `components/sections/new-section.tsx`
2. Export component
3. Import in `app/page.tsx`
4. Add to page layout

```tsx
// Example
export function NewSection() {
  return (
    <section className="section-container">
      <div className="max-width-container">
        {/* Your content */}
      </div>
    </section>
  )
}
```

### Change Colors
```css
/* In app/globals.css */
:root {
  --primary: 220 90% 50%;      /* Change this */
  --secondary: 200 90% 56%;
  /* ... */
}
```

### Add Navigation Link
```tsx
// In components/layout/navbar.tsx
const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  // Add new link:
  { label: 'Blog', href: '/blog' },
]
```

### Update Page Metadata
```tsx
// In app/page.tsx or any page
export const metadata = {
  title: 'Your Title',
  description: 'Your description',
}
```

## Troubleshooting

### Port Already in Use
```bash
# Use different port
pnpm dev -- -p 3001
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Dependencies Missing
```bash
# Reinstall all dependencies
rm -rf node_modules
pnpm install
```

## Scripts Available

```bash
# Development
pnpm dev          # Start dev server on port 3000
pnpm dev -p 3001  # Start on port 3001

# Production
pnpm build        # Build for production
pnpm start        # Run production server
pnpm lint         # Run ESLint

# Deployment
vercel            # Deploy to preview
vercel --prod     # Deploy to production
```

## Environment Variables

Optional settings in `.env.local`:

```env
# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id

# Email (if implementing contact form handling)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
CONTACT_EMAIL=support@ritmandigital.com
```

## Performance Tips

- ✅ Images are already optimized
- ✅ Code splitting is automatic
- ✅ Caching headers configured
- ✅ Compression enabled

Monitor performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Next Steps

1. ✅ Customize your information
2. ✅ Test locally
3. ✅ Deploy to Vercel
4. ✅ Set up custom domain
5. ✅ Monitor with analytics

## Need Help?

- 📖 Read [README.md](README.md)
- 📁 Check [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- 🚀 See [DEPLOYMENT.md](DEPLOYMENT.md)
- 📚 Visit [Next.js Docs](https://nextjs.org/docs)
- 💬 Email support@ritmandigital.com

---

**Ready to deploy?** [See Deployment Guide](DEPLOYMENT.md)

**Want to understand the code?** [See Project Structure](PROJECT_STRUCTURE.md)

**Questions?** Check [README.md](README.md)
