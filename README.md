# EaseMyCancer Website

A comprehensive, customer-facing website for EaseMyCancer - a holistic cancer support organization providing yoga, nutrition, emotional wellbeing, and psychological support services.

## 🎯 Features

- **Complete Support System**: Comprehensive information about all services
- **Interactive Elements**: Familiar feelings checklist, contact forms
- **Responsive Design**: Mobile-first approach with smooth animations
- **Brand Consistency**: Warm, compassionate color scheme
- **SEO Optimized**: Proper metadata and structure
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Fonts**: Inter (body) + Playfair Display (headings)

## 🎨 Design System

### Brand Colors
- **Primary**: Warm orange/peach (#f08b52)
- **Secondary**: Sage green (#5a7a5a)
- **Accent**: Cream/beige (#d9c9a8)
- **Neutral**: Grayscale palette

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

## 📄 Pages Structure

1. **Hero Section** - Inspirational quote with postcard imagery
2. **Familiar Feelings** - Interactive checklist for emotional support
3. **Founder's Story** - Parul's personal journey and mission
4. **Services** - Comprehensive service offerings
5. **How It Works** - Simple 3-step process
6. **Treatment Stages** - Support for all phases
7. **Evidence-Based** - Statistics and testimonials
8. **Additional Support** - Specialized products and services
9. **Affirmations** - Daily inspiration and reminders
10. **Contact & Legal** - Complete contact and legal information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The website runs on `http://localhost:3000` (or next available port).

## 🎨 Customization

### Brand Colors
The color scheme is easily customizable in `src/lib/theme.ts`:

```typescript
export const brandColors = {
  primary: { /* orange/peach palette */ },
  secondary: { /* sage green palette */ },
  accent: { /* cream/beige palette */ },
  // ... more colors
}
```

### Components
All components are built with shadcn/ui and can be customized:
- Located in `src/components/`
- Fully typed with TypeScript
- Responsive and accessible

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured experience for large screens
- **Touch Friendly**: All interactive elements are touch-optimized

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**
- **Keyboard Navigation**
- **Screen Reader Support**
- **High Contrast Support**
- **Focus Management**

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media optimization
- **Structured Data**: Rich snippets support
- **Sitemap**: Automatic sitemap generation
- **Performance**: Optimized loading times

## 📞 Contact Information

**Easevia Integrative Solutions Pvt. Ltd.**
- Email: support@easemycancer.com
- Phone: +91-XXXXXXXXXX
- Address: 4414, Block 44, Prestige Kew Gardens, Yamlur, Marathahalli Colony, Bangalore, Karnataka, India

## 📄 Legal

- Privacy Policy
- Terms & Conditions  
- Refund & Cancellation Policy
- Disclaimer
- Cookie Policy

---

Built with ❤️ for cancer patients and their families.