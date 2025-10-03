# 🏠 Homepage Structure Documentation

## Overview

The homepage (`src/pages/index.astro`) is the main landing page of the Mintaka Studio website. It showcases the agency's services, portfolio, and provides a compelling user experience with smooth animations and interactive elements.

## Page Architecture

### Main Layout
```astro
<BaseLayout>
  <Hero />
  <WorkPreview class="!pt-20 pb-20 lg:!pt-36 lg:pb-40" />
  <Services />
  <Tagline />
  <Faq />
</BaseLayout>
```

## Section Breakdown

### 1. Hero Section (`src/components/landing/Hero.astro`)
**Purpose**: Main landing area that creates the first impression

**Key Features**:
- Animated rotating text showcasing services
- Primary CTA button for contact
- Secondary CTA for scrolling to projects
- GSAP-powered animations with SplitText
- Responsive design for all screen sizes

**Animation System**:
- Text appears with slide-up effect
- Rotating words cycle through services (websites, apps, solutions, experiences)
- Smooth transitions between states
- Scroll-triggered animations

**Content Structure**:
- Main title: "We create" + rotating words
- Subtitle: Value proposition text
- CTA buttons: Contact and scroll to projects

### 2. Work Preview Section (`src/components/landing/WorkPreview.astro`)
**Purpose**: Featured projects showcase

**Key Features**:
- Dynamic project loading from JSON data source
- Responsive grid layout (1 column mobile, 2 columns desktop)
- Hover effects and smooth transitions
- Integration with individual project pages
- GSAP-powered scroll animations

**Data Source**: `src/data/projects.json`
**Utility Functions**: `src/utils/projects.ts`

**Layout**:
- Alternating grid positioning for visual variety
- Project cards with images and titles
- Links to individual project pages

### 3. Services Section (`src/components/landing/Services.astro`)
**Purpose**: Interactive showcase of services offered

**Key Features**:
- Scroll-triggered service switching
- Visual indicators for active service
- SVG icons for each service category
- Smooth transitions between services
- Click-to-navigate functionality
- GSAP-powered animations

**Services Data**:
- Web Development
- Mobile Apps
- UI/UX Design
- SEO Optimization
- Digital Marketing

**Animation System**:
- Services switch based on scroll position
- Visual indicators show active service
- Smooth fade transitions between services

### 4. Tagline Section (`src/components/landing/Tagline.astro`)
**Purpose**: Brand messaging with animated elements

**Key Features**:
- Animated SVG arrow
- Brand tagline text
- Scroll-triggered animations
- GSAP DrawSVG plugin integration

**Animation System**:
- SVG path drawing animation
- Text reveal effects
- Scroll-triggered timing

### 5. FAQ Section (`src/components/landing/Faq.astro`)
**Purpose**: Frequently asked questions

**Key Features**:
- Expandable question/answer pairs
- Smooth accordion animations
- Comprehensive FAQ content
- Mobile-friendly interactions

**Content**:
- 10 common questions about services
- Detailed answers for each question
- Contact information for additional questions

## Technical Implementation

### Animation System
- **GSAP**: Main animation library
- **SplitText**: Text animation plugin
- **ScrollTrigger**: Scroll-based animations
- **DrawSVG**: SVG path animations
- **ScrollToPlugin**: Smooth scrolling

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid system
- Touch-friendly interactions

### Performance Optimizations
- Lazy loading for images
- Optimized animations
- Efficient scroll listeners
- Minimal JavaScript footprint

## File Structure

```
src/
├── pages/
│   └── index.astro              # Main homepage
├── components/
│   └── landing/
│       ├── Hero.astro          # Hero section
│       ├── WorkPreview.astro   # Projects showcase
│       ├── Services.astro      # Services display
│       ├── Tagline.astro       # Brand messaging
│       └── Faq.astro          # FAQ section
├── data/
│   └── projects.json           # Project data source
├── utils/
│   └── projects.ts             # Project utilities
└── i18n/
    ├── ui.ts                   # Translations
    └── utils.ts                # i18n utilities
```

## Customization Guide

### Adding New Projects
1. Edit `src/data/projects.json`
2. Add new project object with required fields
3. Projects automatically appear on homepage

### Modifying Services
1. Edit `src/components/landing/Services.astro`
2. Update services array with new service data
3. Add corresponding SVG icons

### Changing Animations
1. Modify GSAP timelines in component scripts
2. Adjust ScrollTrigger settings
3. Update animation durations and easing

### Updating Content
1. Edit translation files in `src/i18n/ui.ts`
2. Update FAQ content in `src/components/landing/Faq.astro`
3. Modify hero text in `src/components/landing/Hero.astro`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features required
- CSS Grid and Flexbox support
- GSAP animation support

## Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Maintenance Notes

- Regular updates to project data
- Animation performance monitoring
- Cross-browser compatibility testing
- Mobile responsiveness verification
- SEO optimization reviews

---

*Last updated: December 2024*
*Version: 1.0*
