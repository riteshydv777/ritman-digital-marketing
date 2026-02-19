# Deployment Guide - Ritman Digital Marketing

This guide covers deploying your Ritman Digital Marketing website to production.

## Quick Start with Vercel (Recommended)

Vercel is the recommended platform for Next.js applications and offers the best integration and performance.

### 1. Prepare Your Repository

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Commit initial version
git commit -m "Initial commit: Ritman Digital Marketing website"

# Add remote repository
git remote add origin https://github.com/yourusername/ritman-digital.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste your GitHub URL
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### 3. Configure Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., ritmandigital.com)
4. Update DNS records at your domain registrar:
   - Add CNAME: `cname.vercel.com`
   - Or use Vercel's nameservers

### 4. Environment Variables

If using email or analytics:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add any variables from `.env.example`:
   ```
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id
   ```
3. Click "Save"
4. Redeploy for changes to take effect

## Production Checklist

### Before Deployment
- [ ] Update `sitemap.ts` with correct domain
- [ ] Update social media links in footer
- [ ] Test all links work correctly
- [ ] Check mobile responsiveness
- [ ] Verify form functionality
- [ ] Check SEO meta tags
- [ ] Test analytics integration

### Security
- [x] Headers configured in `next.config.mjs`
- [x] Security headers enabled
- [x] No API keys in code
- [x] Use environment variables for sensitive data
- [ ] Enable HTTPS (Vercel does this automatically)
- [ ] Set up rate limiting if needed

### Performance
- [x] Images optimized
- [x] Code splitting configured
- [x] Static generation enabled
- [x] Caching headers set
- [ ] Test Core Web Vitals
- [ ] Monitor Lighthouse scores

### SEO
- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Robots.txt created
- [x] Sitemap.ts configured
- [ ] Verify Google Search Console
- [ ] Submit sitemap to search engines

## Vercel Deployment Configuration

The `vercel.json` file contains optimal settings:

```json
{
  "projectSettings": {
    "framework": "nextjs"
  },
  "buildCommand": "next build",
  "devCommand": "next dev",
  "outputDirectory": ".next",
  "regions": ["iad1"],
  "installCommand": "pnpm install --frozen-lockfile"
}
```

## Environment Variables for Production

### Email Service (Optional)
If you want to handle contact form submissions:

```env
SMTP_HOST=your_smtp_server
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
CONTACT_EMAIL=support@ritmandigital.com
```

### Analytics (Optional)
```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## Monitoring and Maintenance

### After Deployment

1. **Monitor Performance**
   - Check Vercel Analytics
   - Monitor Core Web Vitals
   - Review deployment logs

2. **Test Functionality**
   - Test contact form
   - Verify all links
   - Check responsive design
   - Test on multiple browsers

3. **Monitor Security**
   - Review Vercel security checks
   - Monitor for vulnerabilities
   - Check SSL certificate status

### Regular Maintenance

- Update dependencies monthly: `pnpm upgrade`
- Review analytics quarterly
- Update policies as needed
- Test backup deployment process

## Rollback Procedure

If you need to revert to a previous version:

1. In Vercel dashboard, go to "Deployments"
2. Find the working deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Custom Domain Setup

### Using Vercel Nameservers (Easiest)
1. At your domain registrar, change nameservers to:
   - ns1.vercel.com
   - ns2.vercel.com
   - ns3.vercel.com
   - ns4.vercel.com

2. Wait 24-48 hours for DNS propagation
3. Verify in Vercel dashboard

### Using CNAME (Manual)
1. At your domain registrar, add CNAME:
   - **Name**: www
   - **Value**: cname.vercel.com

2. For root domain (@), use A record to Vercel's IP
3. Update sitemap domain to match

## Troubleshooting

### Build Fails
```bash
# Clear build cache
vercel build --no-cache

# Check logs
vercel logs
```

### Slow Performance
- Enable Vercel Analytics to identify bottlenecks
- Check image optimization
- Review component re-renders

### Domain Not Working
- Verify DNS records: `nslookup yourdomain.com`
- Clear DNS cache: `ipconfig /flushdns`
- Allow 24-48 hours for propagation

## Alternative Deployment Platforms

### Netlify
```bash
npm run build
# Connect Git repo in Netlify dashboard
```

### Self-Hosted (VPS/Dedicated Server)
```bash
# Build
npm run build

# Install PM2
npm install -g pm2

# Start server
pm2 start "npm start" --name "ritman-digital"
```

## Performance Optimization

### Current Optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Compression enabled

### Monitor with
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vercel Analytics](https://vercel.com/analytics)

## Support

For deployment issues:
- Check [Vercel Docs](https://vercel.com/docs)
- Review [Next.js Docs](https://nextjs.org/docs)
- Contact support@ritmandigital.com

---

**Last Updated**: 2026
**Recommended Platform**: Vercel
**Next.js Version**: 16.1.6
