# CleanStreets NJ - Cleaning Business Website PRD

## Original Problem Statement
Build a comprehensive cleaning business website for a commercial & street cleaning company in New Jersey with:
- Homepage with hero section, trust badges, services preview
- Services page (Commercial, Outdoor, Specialty cleaning)
- Why Choose Us page
- Government & Commercial Contracts page
- Testimonials with before/after gallery
- Pricing page
- Contact page with form
- Blog/Resources section
- Legal pages (Privacy, Terms)

## User Personas
1. **Commercial Property Managers** - Need reliable office/retail cleaning
2. **Municipal Contracting Officers** - Looking for certified vendors
3. **Facilities Managers** - Need specialty services (pressure washing, floor care)
4. **Construction Companies** - Post-construction cleanup services

## Core Requirements (Static)
- [x] Responsive design with professional appearance
- [x] Trust-building elements (badges, certifications)
- [x] Contact form with database storage
- [x] Service categories with detailed descriptions
- [x] Government contract information (NAICS codes, capabilities)
- [x] Testimonials and before/after gallery
- [x] Pricing estimates display
- [x] Blog section for SEO content
- [x] Legal pages

## What's Been Implemented (December 2025)
### Backend (FastAPI)
- Contact form submission endpoint (`POST /api/contact`)
- Blog posts endpoint with seed data (`GET /api/blog`)
- Testimonials endpoint with seed data (`GET /api/testimonials`)
- Gallery endpoint with before/after images (`GET /api/gallery`)

### Frontend (React)
- **9 Main Pages**: Home, Services, Why Choose Us, Contracts, Testimonials, Pricing, Contact, Blog
- **2 Legal Pages**: Privacy Policy, Terms of Service
- **Layout Components**: Navbar with mobile menu, Footer
- **Design**: Industrial Purity theme with Barlow Condensed + Inter fonts
- **Colors**: Sky Blue (#0EA5E9), Eco Green (#16A34A), Slate (#0F172A)

## P0 Features (Implemented)
- ✅ Homepage with hero, trust badges, services preview
- ✅ Services page with tabs (Commercial, Outdoor, Specialty)
- ✅ Contact form with validation and database storage
- ✅ Government contracts page with NAICS codes
- ✅ Mobile responsive navigation
- ✅ Footer with contact info and links

## P1 Features (Future)
- Email notifications for contact form submissions
- Blog post CMS/admin panel
- Individual blog post detail pages
- Downloadable capability statement PDF
- Live chat widget integration

## P2 Features (Future)
- Customer portal for existing clients
- Online quote calculator
- Service scheduling system
- Multi-language support

## Technology Stack
- Frontend: React, Tailwind CSS, Shadcn/UI
- Backend: FastAPI, Python
- Database: MongoDB
- Hosting: Kubernetes/Docker

## Next Tasks
1. Test all pages and forms thoroughly
2. Add email notification integration (optional)
3. Create actual downloadable capability statement PDF
4. Add more blog content for SEO
