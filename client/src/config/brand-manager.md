# Brand Management System Documentation

## Overview
This centralized brand management system allows you to change colors and logos globally across the entire website from a single location.

## Quick Start - How to Change Colors

### 1. Change Colors Globally
Edit `client/src/index.css` at lines 8-16:

```css
:root {
  --brand-primary: #E5042F;      /* Change this to update all red elements */
  --brand-white: #FFFFFF;        /* Change this to update all white elements */
  --brand-secondary: #00D9FF;    /* Cyan accent color */
  --brand-dark: #000000;         /* Black color */
  --brand-background: #0A0A0A;   /* Dark background */
  --brand-primary-rgb: 229, 4, 47;    /* Update RGB values to match hex */
  --brand-white-rgb: 255, 255, 255;   /* Update RGB values to match hex */
}
```

**Example**: To change red to blue:
- Change `--brand-primary: #E5042F;` to `--brand-primary: #0066FF;`
- Change `--brand-primary-rgb: 229, 4, 47;` to `--brand-primary-rgb: 0, 102, 255;`

### 2. Change Logo Globally
Edit `client/src/config/brand.ts`:

```typescript
assets: {
  logo: '/your-new-logo.svg',       // Update this path
  logoIcon: '/your-new-icon.svg',   // Update this path
  favicon: '/your-new-favicon.ico', // Update this path
},
```

### 3. Change Brand Text
Edit `client/src/config/brand.ts`:

```typescript
text: {
  name: 'YOUR BRAND NAME',
  tagline: 'Your Tagline Here',
  copyright: '© 2025',
},
```

## System Architecture

### Files Structure
```
client/src/
├── config/
│   ├── brand.ts              # Main brand configuration
│   └── brand-manager.md      # This documentation
├── components/ui/
│   └── brand-logo.tsx        # Centralized logo component
└── index.css                 # CSS variables (primary change location)
```

### How It Works
1. **CSS Variables**: All colors are defined as CSS custom properties in `index.css`
2. **Brand Configuration**: Centralized settings in `brand.ts`
3. **Logo Component**: Reusable logo component that automatically updates everywhere
4. **Automatic Updates**: Change once, updates everywhere automatically

## Usage Examples

### Using the Brand Logo Component
```tsx
import { BrandLogo } from "@/components/ui/brand-logo";

// Full logo with text
<BrandLogo variant="full" size="lg" showTagline={true} />

// Icon only
<BrandLogo variant="icon" size="md" />

// Text only
<BrandLogo variant="text" size="sm" showTagline={false} />
```

### Using Brand Colors in Components
```tsx
// Instead of hardcoded colors:
className="text-red-500 bg-white"

// Use brand variables:
className="text-[var(--brand-primary)] bg-[var(--brand-white)]"

// With opacity:
className="bg-[rgba(var(--brand-primary-rgb),0.1)]"
```

## Color Conversion Helper

When changing colors, convert hex to RGB:

**Hex #E5042F = RGB 229, 4, 47**
- E5 (hex) = 229 (decimal)
- 04 (hex) = 4 (decimal)  
- 2F (hex) = 47 (decimal)

Use an online hex to RGB converter or calculator.

## Components Using Brand System

Currently implemented in:
- ✅ Navigation component
- ✅ Logo components
- ✅ Mobile menu
- 🔄 Homepage (next to update)
- 🔄 All feature pages (next to update)
- 🔄 Footer components (next to update)

## Migration Guide

To migrate existing components to use the brand system:

1. Replace hardcoded hex colors:
   ```tsx
   // Before
   className="text-[#E5042F]"
   
   // After
   className="text-[var(--brand-primary)]"
   ```

2. Replace hardcoded RGB values:
   ```tsx
   // Before
   className="bg-[rgba(229,4,47,0.1)]"
   
   // After
   className="bg-[rgba(var(--brand-primary-rgb),0.1)]"
   ```

3. Use the brand logo component:
   ```tsx
   // Before
   <div className="logo-container">
     <img src="/logo.svg" />
     <span>GAMERS TAG</span>
   </div>
   
   // After
   <BrandLogo variant="full" size="md" showTagline={true} />
   ```

## Benefits

1. **Global Updates**: Change one value, update entire website
2. **Consistency**: Ensures brand colors are used consistently
3. **Maintainability**: Easy to maintain and modify
4. **Scalability**: Easy to add new brand elements
5. **Performance**: CSS variables are optimized by browsers