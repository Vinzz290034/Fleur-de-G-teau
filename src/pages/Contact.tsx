import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-rose-100 text-lg">
            We'd love to hear from you. Get in touch with any questions or to place a custom order.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(+63) 917-123-4567</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@fleurdegateau.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">123 Floral Street, Cebu City</p>
                    <p className="text-sm text-gray-500">Cebu, Philippines 6000</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8am - 6pm</p>
                    <p className="text-gray-600">Sunday: 9am - 4pm</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">📍 Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We deliver fresh cakes across Cebu City and nearby areas including:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✓ Cebu City (all zones)</li>
                  <li>✓ Lapu-Lapu City</li>
                  <li>✓ Mandaue City</li>
                  <li>✓ Talisay City</li>
                  <li>✓ Consolacion</li>
                  <li>✓ Custom arrangements available for extended areas</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="(+63) 917-123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="custom-order">Custom Order Inquiry</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.869449276405!2d123.8844!3d10.3157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9997ff000001%3A0x123abc123!2sCebu%20City!5e0!3m2!1sen!2sph!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I order?",
                a: "We recommend ordering at least 3-5 days in advance. For custom designs, please give us 1-2 weeks notice.",
              },
              {
                q: "Do you offer same-day delivery?",
                a: "Same-day delivery may be available for orders placed before 10am. Please contact us to check availability.",
              },
              {
                q: "Can I customize my cake?",
                a: "Absolutely! We specialize in custom cakes. Contact us with your ideas, and our team will work with you to create your dream cake.",
              },
              {
                q: "What is your delivery fee?",
                a: "Delivery fees vary based on location. Orders within Cebu City are ₱200-500. We'll provide an exact quote when you order.",
              },
              {
                q: "Do you offer vegan or gluten-free options?",
                a: "Yes! We can accommodate dietary restrictions. Please inform us when placing your order so we can ensure freshness and quality.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-l-4 border-rose-600 pl-6 py-4">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
