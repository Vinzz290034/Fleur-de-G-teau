import React from "react";
import { useNavigate } from "react-router-dom";
import { CakeCard } from "../components";
import { CAKES } from "../api/cakeData";

export const Shop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Signature Collection</h1>
          <p className="text-lg text-rose-100 max-w-2xl mx-auto">
            Discover our beautifully handcrafted cakes, each designed with premium ingredients and floral artistry. Perfect for birthdays, weddings, and special celebrations across Cebu.
          </p>
        </div>
      </section>

      {/* Cake Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAKES.map((cake) => (
            <CakeCard key={cake.id} cake={cake} showDetails={true} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            We create custom cakes tailored to your specific needs and preferences. Contact us for a personalized consultation.
          </p>
          <button
            onClick={() => navigate("/custom-cake")}
            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Request Custom Cake
          </button>
        </div>
      </section>
    </div>
  );
};
