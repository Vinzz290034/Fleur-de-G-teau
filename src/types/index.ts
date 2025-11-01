// Cake product types
export interface Cake {
  id: string;
  name: string;
  price: number; // in PHP
  description: string;
  image: string;
  category: "birthday" | "wedding" | "celebration" | "seasonal";
  servings: string[];
  flavors: string[];
  ingredients?: string[];
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

// Customization options
export interface CakeCustomization {
  size: string;
  floralColor: string;
  message?: string;
}

// Cart item with customization
export interface CartItem {
  cake: Cake;
  quantity: number;
  customization: CakeCustomization;
}

// Order information
export interface Order {
  items: CartItem[];
  deliveryAddress: string;
  deliveryDate: string;
  customerName: string;
  customerPhone: string;
  specialRequests?: string;
  totalPrice: number;
}

// Custom cake request
export interface CustomCakeRequest {
  id: string;
  customerName: string;
  customerEmail: string;
  cakeSize: string;
  flavor: string;
  decorationDetails: string;
  submittedAt: string;
}
