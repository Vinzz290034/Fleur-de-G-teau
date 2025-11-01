# Fleur de Gâteau - Online Cake Shop Website

A fully responsive, multi-page React application for a boutique online cake shop specializing in handcrafted, floral-themed cakes with seamless customization, ordering, and cart management.

## Project Status

- **Project Type**: React + TypeScript Multi-page Web Application with React Router
- **Entry Point**: `src/main.tsx`
- **Build System**: Vite 7.0.0
- **Styling System**: Tailwind CSS 3.4.17
- **State Management**: Zustand for in-memory cart
- **Routing**: React Router DOM 6.30.1

## Pages Implemented

### 1. Home Page (`src/pages/Home.tsx`)
- Hero section with call-to-action
- Featured collections (Birthdays, Weddings, Celebrations)
- Why Choose Us section highlighting key features
- Fully responsive design with gradient backgrounds

### 2. Shop Page (`src/pages/Shop.tsx`)
- Grid display of 6 signature cakes
- Each cake card shows: image, name, description, price, category, ingredients
- Click "Customize & Add" to open cake customizer modal
- Ingredients list displayed on cards
- Hero section with service area information
- **New**: Clicking "Add to Cart" navigates directly to `/cart` page

### 3. Cart Page (`src/pages/Cart.tsx`)
- **Dedicated page-based cart** (no sidebar/drawer on other pages)
- Shows cart items with customization details
- Quantity adjustment and item removal
- Order total calculation (subtotal + delivery fee)
- "Add More Cakes" button to return to shop
- "Proceed to Checkout" button opens checkout form modal
- Checkout form with fields:
  - Full Name, Email, Phone
  - Delivery Address
  - Preferred Delivery Date
  - Special Requests
- Order submission with confirmation and cart clear

### 4. About Us Page (`src/pages/About.tsx`)
- Company story and mission
- Our values: Artistry, Integrity, Excellence, Customer Care, Sustainability
- Team information
- Quality commitment message

### 5. Blog Page (`src/pages/Blog.tsx`)
- 5 blog posts with categories:
  - "The Benefits of Fresh Ingredients in Cake Baking"
  - "How to Store Your Cake to Keep It Fresh"
  - "The Art of Floral Cake Decoration"
  - "Choosing the Perfect Cake Flavor for Your Event"
  - "Understanding Cake Pricing"
- Category filtering system
- Post metadata (author, date, category)
- Full post content display

### 6. Contact Us Page (`src/pages/Contact.tsx`)
- Contact information cards (Phone, Email, Address, Hours)
- Service areas listing
- Contact form with validation
- Embedded Google Map iframe
- FAQ section with 5 common questions
- Business hours and location details

### 7. Custom Cake Request Page (`src/pages/CustomCake.tsx`)
- **New**: Dedicated page for custom cake requests
- Form with fields: Full Name, Email, Cake Size, Flavor, Decoration Details
- Form validation (required fields, email format)
- Success confirmation with redirect to home
- Stores requests in Zustand store (`customCakeRequests`)
- Responsive design with info section explaining next steps

## Core Features

### Navigation & Header (`src/components/Header.tsx`)
- Responsive sticky header with logo and brand name
- Desktop navigation menu with active page highlighting
- Mobile responsive navigation pills
- Cart icon link (directs to `/cart` page)
- **NEW**: Custom Cake link in navigation menu
- Mobile-friendly layout

### Footer (`src/components/Footer.tsx`)
- Multi-column footer layout
- Quick links to all pages
- Service area information
- Contact CTA
- Copyright information

### Cake Cards (`src/components/CakeCard.tsx`)
- Display cake image, name, price, description
- Show ingredients when `showDetails={true}`
- Customizer modal with:
  - Size selection (4 options)
  - Floral color picker (7 colors)
  - Custom message input (max 30 chars)
  - Quantity adjustment
  - Real-time price calculation
- Add to cart functionality with confirmation

### Cart & Custom Request Management (`src/store/cakeStore.ts`)
- Zustand store with full cart and custom cake request logic
- **Cart Methods**: addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount
- **Custom Cake Methods**: submitCustomCakeRequest, getCustomCakeRequests
- In-memory state (clears on page refresh)
- **Ready for localStorage enhancement**: Can add persistence with `zustand/middleware`

### Cake Customizer Modal (`src/components/CakeCard.tsx`)
- Opens when "Customize & Add" button is clicked
- Size selection dropdown (4 options)
- Floral color picker (7 color swatches)
- Optional custom message input (max 30 chars)
- Quantity adjustment with +/- buttons
- Real-time total price calculation
- "Add to Cart" button redirects to `/cart` page
- "Cancel" button closes modal

## Data Structure

### Cake Data (`src/api/cakeData.ts`)
- 6 signature cakes with:
  - id, name, price (PHP), description, image URL
  - category (birthday, wedding, celebration)
  - servings array, flavors array
  - ingredients array (for product details)
- Floral colors with hex codes (7 options)
- Cake sizes with serving descriptions (4 sizes)
- **NEW**: CUSTOM_CAKE_FLAVORS array with 14 flavor options for custom requests

### Blog Posts (`src/api/cakeData.ts`)
- 5 posts with: id, title, excerpt, content, author, date, category
- Fully formatted content with multiple paragraphs
- Blog page supports filtering by category

### Types (`src/types/index.ts`)
- `Cake`: Product interface with ingredients
- `BlogPost`: Blog post interface
- `CartItem`: Cart entry with cake + customization + quantity
- `CakeCustomization`: User selections (size, color, message)
- `Order`: Future checkout structure
- **NEW**: `CustomCakeRequest`: Custom cake request with customer info, size, flavor, and decoration details

## Design System

### Color Palette (Per Requirements)
- **Background**: `#FDEDEC` (soft blush pink)
- **Accent**: `#B76E79` (rosé gold)
- **Text**: `#333333` (charcoal gray)
- **Buttons**: `#FFF8F0` (ivory) with rose gold borders
- **Hover**: `#CFA5B1` (dusty mauve)
- **Gradients**: Rose → Pink for CTAs and headers

### Responsive Breakpoints
- Mobile-first design
- `sm`: 640px, `md`: 768px, `lg`: 1024px, `xl`: 1280px
- Full responsive behavior across all pages

## Development Commands

- **Build**: `npm run build` (production build to `dist/` folder)
- **Dev**: `npm run dev` (local testing - for development only)
- **Preview**: `npm run preview` (preview production build locally)

## Project Structure

```
src/
├── api/
│   └── cakeData.ts          # Cakes, colors, sizes, blog posts
├── components/
│   ├── Header.tsx           # Navigation header with routing
│   ├── Footer.tsx           # Footer with links
│   ├── CakeCard.tsx         # Cake product card + customizer modal
│   ├── CartPanel.tsx        # Cart panel (sidebar/drawer)
│   └── index.ts             # Component exports
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── Shop.tsx             # Product showcase
│   ├── Cart.tsx             # Checkout page (form + summary)
│   ├── About.tsx            # Company story & values
│   ├── Blog.tsx             # Blog posts + filtering
│   ├── Contact.tsx          # Contact form + map + FAQ
│   └── index.ts             # Page exports
├── store/
│   ├── cakeStore.ts         # Zustand cart store
│   └── index.ts             # Store exports
├── types/
│   └── index.ts             # TypeScript interfaces
├── App.tsx                  # Router setup & main layout
├── main.tsx                 # Entry point
└── index.css                # Global Tailwind styles
```

## Tech Stack

### Core
- **React**: 18.3.1
- **TypeScript**: 5.8.3
- **Vite**: 7.0.0
- **React Router DOM**: 6.30.1
- **Zustand**: 4.4.7

### Styling & UI
- **Tailwind CSS**: 3.4.17
- **Lucide React**: Icons (ShoppingCart, Heart, Truck, etc.)

### Dependencies
- Full list in `package.json`

## Key Implementation Details

### Add to Cart Flow
1. User clicks "Customize & Add" on cake card (in Shop page)
2. Customizer modal opens with size, color, message, and quantity options
3. User selects preferences (size, floral color, optional message, quantity)
4. User clicks "Add to Cart" button
5. Item added to Zustand store (in-memory)
6. Page redirects to `/cart` page automatically

### Cart Page Flow
1. User arrives at `/cart` after adding an item
2. Cart page displays all items with customization details
3. User can adjust quantities, remove items, or add more cakes
4. Clicking "Add More Cakes" navigates back to `/shop`
5. User clicks "Proceed to Checkout" when ready
6. Checkout form modal opens
7. User enters delivery details (name, email, phone, address, date, requests)
8. User clicks "Place Order"
9. Order submitted (in-memory with alert confirmation)
10. Cart clears and user sees empty cart page

### Image Handling
- Cake images use URLs (ready for real images from Unsplash or other CDN)
- Images have fallback gradient backgrounds if URL fails
- All images use production-ready absolute paths

## Custom Cake Request Flow

1. User clicks "Request Custom Cake" button on Shop page or navigates to `/custom-cake`
2. CustomCake page displays a form with fields:
   - Full Name (required)
   - Email Address (required, validated)
   - Cake Size (dropdown, 4 options)
   - Preferred Flavor (dropdown, 14 options)
   - Custom Cake Design & Decoration Details (textarea, required)
3. User fills out form and clicks "Submit Request"
4. Request is validated (required fields, email format)
5. Request is stored in Zustand `customCakeRequests` array with auto-generated ID and timestamp
6. Success confirmation page displays with customer name and email
7. Page auto-redirects to home after 3 seconds

## Future Enhancements

### Phase 1: Data Persistence
- Add localStorage for cart persistence across page refreshes
- Add localStorage for custom cake requests
- Use `zustand/middleware` for hydration

### Phase 2: Backend Integration
- Connect to Youware Backend for:
  - Order database storage
  - Custom cake request database storage
  - User authentication
  - Order history tracking
  - Custom request management dashboard
  - Email notifications for requests
  - Inventory management
  - Delivery area mapping

### Phase 3: Enhanced Features
- Product detail pages with full gallery and reviews
- User accounts and order history
- Admin dashboard for order and custom request management
- Image upload for custom cake requests
- Live chat support
- Email notification system
- Payment gateway integration
- Quote generation for custom requests

### Phase 4: Advanced Features
- Subscription/recurring orders
- Gift cards
- Loyalty rewards program
- Real-time order tracking
- Multiple language support (Tagalog)
- Customer portfolio/gallery of custom cakes

## Important Notes

### ✅ BUILD STATUS
Production build successful ✓ (273.69 KB JS, 27.45 KB CSS, gzipped) - Custom Cake page integrated

### ⚠️ CRITICAL: Do NOT Modify `index.html` Entry Point
```html
<script type="module" src="/src/main.tsx"></script>
```
This is the core entry point. Any modification will break the app.

### 📸 PRODUCT IMAGES
- **Hero image** on Home page: `/assets/hero-cake.png` (stored in `public/assets/`)
- **Cake product images**: 6 custom images stored in `public/assets/` and referenced in `src/api/cakeData.ts`:
  - `cake-1-rose-garden.png` → Rose Garden Elegance
  - `cake-2-lavender.png` → Lavender Dream
  - `cake-3-peony.png` → Peony Celebration
  - `cake-4-wildflower.png` → Wildflower Bliss
  - `cake-5-romantic.png` → Romantic White
  - `cake-6-sunset.png` → Sunset Bloom
- **Asset Path Requirements**: 
  - All images use absolute paths starting with `/assets/` or `/images/`
  - Static assets are placed in `public/assets/` directory
  - Vite automatically serves these from the public folder with `/assets/` prefix
  - Images in source code (like `src/assets/`) are NOT served in production

### 💾 CART PERSISTENCE
Cart is currently in-memory. To add localStorage persistence:
```typescript
// In src/store/cakeStore.ts, add:
import { persist } from "zustand/middleware";

export const useCakeStore = create(
  persist(
    (set, get) => ({ ... }),
    { name: "cake-cart" }
  )
);
```

### 🗺️ GOOGLE MAP
Contact page uses embedded Google Map iframe. Update coordinates and API settings as needed.

## Code Conventions

- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind CSS utility classes
- **State**: Zustand for global cart, React hooks for local state
- **Routing**: React Router `useNavigate` and `Link` components
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Icons**: Lucide React for consistent icon set

## Responsive Design

All pages are fully responsive:
- **Mobile**: 1-column layouts, full-width sidebars, touch-optimized buttons
- **Tablet**: 2-column layouts, optimized spacing
- **Desktop**: 3-column grids, sticky elements, enhanced hover effects

## Deployment Ready

The build is production-ready and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Traditional web hosting
- Youware platform

Just run `npm run build` and deploy the `dist/` folder.
