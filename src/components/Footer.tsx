import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-900 to-pink-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✿</span>
              <h3 className="text-lg font-bold">Fleur de Gâteau</h3>
            </div>
            <p className="text-rose-100 text-sm">
              Bringing handcrafted elegance straight to your doorstep with premium cakes and floral artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-rose-100">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-semibold mb-4">Service Area</h4>
            <p className="text-rose-100 text-sm">
              Delivery available across Cebu and beyond. Fast, reliable shipping with real-time tracking.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-rose-100 text-sm">
              Questions? Reach out to our team for personalized assistance with custom orders.
            </p>
            <Link to="/contact" className="text-rose-200 hover:text-white text-sm mt-2 inline-block transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="border-t border-rose-700 pt-8">
          <div className="flex items-center justify-center text-sm text-rose-100 gap-1">
            <span>&copy; 2025 Fleur de Gâteau. Made with</span>
            <Heart size={16} className="text-rose-300 fill-rose-300" />
            <span>in Cebu.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
