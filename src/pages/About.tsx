import React from "react";
import { Heart, Target, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Fleur de Gâteau</h1>
          <p className="text-rose-100 text-lg">
            Handcrafted elegance, one cake at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Fleur de Gâteau was born from a passion for creating beautiful, delicious cakes that bring joy to every celebration. What started as a small home bakery has grown into a beloved local business serving the Cebu community.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our founder, Chef Marie, believes that every cake should be a masterpiece – not just in taste, but in presentation. With over 15 years of experience in pastry arts, she leads a talented team of bakers and decorators who share her commitment to excellence.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we continue to create handcrafted cakes using only premium ingredients, traditional techniques, and innovative floral designs that make each cake truly special.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">👨‍🍳</div>
                <p className="text-gray-700 font-semibold">Chef Marie & Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-rose-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create exceptional, handcrafted cakes that bring joy, celebrate life's precious moments, and become treasured memories for our customers in Cebu and beyond.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-rose-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest, freshest ingredients sourced from trusted suppliers. Every cake is made fresh to order with meticulous attention to detail and taste.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-rose-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We're committed to serving the Cebu community with reliable delivery, excellent customer service, and support for local events and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="space-y-6">
            {[
              {
                title: "Artistry",
                description: "We view cake making as an art form, combining traditional techniques with innovative designs to create edible masterpieces.",
              },
              {
                title: "Integrity",
                description: "We're honest about our ingredients, pricing, and what we can deliver. Your trust is our most valuable asset.",
              },
              {
                title: "Excellence",
                description: "We never compromise on quality. Every cake that leaves our kitchen meets our exacting standards.",
              },
              {
                title: "Customer Care",
                description: "Your celebration matters to us. We provide personalized service and support to make your experience exceptional.",
              },
              {
                title: "Sustainability",
                description: "We're mindful of our environmental impact and work to minimize waste while using eco-friendly practices.",
              },
            ].map((value, index) => (
              <div key={index} className="border-l-4 border-rose-600 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <p className="text-gray-600 text-lg mb-8">
            Our talented team of pastry chefs, decorators, and bakers are passionate about creating beautiful, delicious cakes. With combined experience and a shared vision, we work together to make every celebration special.
          </p>
          <p className="text-gray-600 text-lg">
            When you order from Fleur de Gâteau, you're not just getting a cake – you're getting the dedication and love of a team that truly cares about your special moment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
