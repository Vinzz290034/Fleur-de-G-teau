import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Truck, Sparkles } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-block">
                <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🌸 Artisan Cake Creations
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fleur de Gâteau
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bringing handcrafted elegance straight to your doorstep. Beautifully designed cakes with floral artistry and premium ingredients, perfect for your special moments in Cebu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                >
                  Start Shopping
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-rose-400 text-gray-700 hover:text-rose-600 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="rounded-2xl h-96 overflow-hidden shadow-lg">
              <img
                src="src/assets/hero-cake.png"
                alt="Fleur de Gâteau Premium Cake - Beautifully designed with floral artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handcrafted Excellence</h3>
              <p className="text-gray-600">
                Each cake is meticulously crafted by our talented pastry chefs using premium ingredients and artisanal techniques.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable Delivery</h3>
              <p className="text-gray-600">
                We deliver fresh cakes across Cebu with real-time tracking. Your cake arrives in perfect condition, every time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">
                We pour passion and care into every cake, making each one special and memorable for your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Discover our signature cakes perfect for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birthdays */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg h-64 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-6xl">🎉</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Birthday Cakes</h3>
              <p className="text-gray-600 mb-4">Celebrate with our colorful and delicious birthday cakes</p>
              <Link
                to="/shop"
                className="text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center"
              >
                Explore
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Weddings */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg h-64 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-6xl">💍</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Wedding Cakes</h3>
              <p className="text-gray-600 mb-4">Elegant and sophisticated cakes for your special day</p>
              <Link
                to="/shop"
                className="text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center"
              >
                Explore
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Celebrations */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg h-64 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-6xl">✨</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Celebrations</h3>
              <p className="text-gray-600 mb-4">Custom cakes for anniversaries, events, and special moments</p>
              <Link
                to="/shop"
                className="text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center"
              >
                Explore
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sweeten Your Celebration?</h2>
          <p className="text-rose-100 text-lg mb-8">
            Browse our collection or contact us for a custom cake that's uniquely yours.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-rose-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
          >
            Browse All Cakes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
