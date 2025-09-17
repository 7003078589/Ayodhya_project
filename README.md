# Adhoya Restaurant Website

A modern, responsive website for Adhoya - a vegetarian fine-dining restaurant with party hall facilities. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

### 🍽️ Restaurant Features
- **Modern Hero Section** - Eye-catching landing page with smooth animations
- **About Section** - Showcases restaurant story, values, and statistics
- **Dynamic Menu** - Interactive menu with category filtering and item details
- **Reservation System** - Complete booking form with validation
- **Contact Information** - Multiple contact methods and location details

### 🎉 Party Hall Features
- **Hall Showcase** - Interactive gallery and feature highlights
- **Event Packages** - Different pricing tiers for various event sizes
- **Booking System** - Integrated reservation system for party hall events
- **Capacity Information** - Clear details about space and amenities

### 🎨 Design & UX
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Modern UI Components** - Built with shadcn/ui for consistent design
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Performance** - Optimized for fast loading and smooth interactions

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adhoya-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with navigation and footer
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── navigation.tsx       # Main navigation component
│   ├── footer.tsx           # Footer component
│   ├── hero-section.tsx     # Landing hero section
│   ├── about-section.tsx    # About restaurant section
│   ├── menu-section.tsx     # Dynamic menu with filtering
│   ├── party-hall-section.tsx # Party hall showcase
│   ├── reservation-section.tsx # Booking system
│   └── contact-section.tsx  # Contact information
└── lib/
    └── utils.ts             # Utility functions
```

## Key Components

### Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Call-to-action buttons

### Hero Section
- Full-screen landing with gradient background
- Animated text and buttons
- Scroll indicator

### Menu Section
- Category-based filtering
- Item cards with ratings and pricing
- Popular item indicators

### Party Hall Section
- Interactive image gallery
- Feature highlights
- Pricing packages
- Booking integration

### Reservation System
- Comprehensive booking form
- Date/time selection
- Guest count and occasion selection
- Form validation and success feedback

### Contact Section
- Contact form with validation
- Multiple contact methods
- Location information
- Quick action buttons

## Customization

### Colors
The website uses a green color scheme that can be customized in `tailwind.config.js`:

```javascript
colors: {
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    // ... more shades
    900: '#14532d',
  }
}
```

### Content
- Update restaurant information in component files
- Modify menu items in `menu-section.tsx`
- Change party hall packages in `party-hall-section.tsx`
- Update contact details in `contact-section.tsx` and `footer.tsx`

### Images
Replace placeholder image areas with actual restaurant photos:
- Hero background
- About section image
- Menu item images
- Party hall gallery
- Contact map

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as they come into view
- **Minimal Bundle**: Tree-shaking and dead code elimination

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@adhoya.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for Adhoya Restaurant