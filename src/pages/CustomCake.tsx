import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCakeStore } from "../store/cakeStore";
import { CAKE_SIZES, CUSTOM_CAKE_FLAVORS } from "../api/cakeData";

export default function CustomCake() {
  const navigate = useNavigate();
  const { submitCustomCakeRequest } = useCakeStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    cakeSize: "medium",
    flavor: "Vanilla",
    decorationDetails: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Full name is required";
    }
    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = "Please enter a valid email";
    }
    if (!formData.decorationDetails.trim()) {
      newErrors.decorationDetails = "Please describe your custom cake design";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitCustomCakeRequest({
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      cakeSize: formData.cakeSize,
      flavor: formData.flavor,
      decorationDetails: formData.decorationDetails,
    });

    setIsSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h2>
            <p className="text-gray-600 mb-4">
              Thank you, <strong>{formData.customerName}</strong>! We've received your custom cake request and will contact you at <strong>{formData.customerEmail}</strong> shortly with a quote and next steps.
            </p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Request Your Custom Cake</h1>
          <p className="text-lg text-gray-600">
            Tell us about your dream cake, and we'll bring it to life!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="customerName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.customerName
                  ? "border-red-500 focus:border-red-600 bg-red-50"
                  : "border-rose-200 focus:border-rose-400 bg-white"
              }`}
            />
            {errors.customerName && (
              <p className="text-red-600 text-sm mt-1">{errors.customerName}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="customerEmail" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.customerEmail
                  ? "border-red-500 focus:border-red-600 bg-red-50"
                  : "border-rose-200 focus:border-rose-400 bg-white"
              }`}
            />
            {errors.customerEmail && (
              <p className="text-red-600 text-sm mt-1">{errors.customerEmail}</p>
            )}
          </div>

          {/* Cake Size */}
          <div className="mb-6">
            <label htmlFor="cakeSize" className="block text-sm font-semibold text-gray-700 mb-2">
              Cake Size
            </label>
            <select
              id="cakeSize"
              name="cakeSize"
              value={formData.cakeSize}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:outline-none focus:border-rose-400 bg-white transition"
            >
              {CAKE_SIZES.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          {/* Flavor */}
          <div className="mb-6">
            <label htmlFor="flavor" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Flavor
            </label>
            <select
              id="flavor"
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:outline-none focus:border-rose-400 bg-white transition"
            >
              {CUSTOM_CAKE_FLAVORS.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>

          {/* Decoration Details */}
          <div className="mb-8">
            <label htmlFor="decorationDetails" className="block text-sm font-semibold text-gray-700 mb-2">
              Custom Cake Design & Decoration Details *
            </label>
            <textarea
              id="decorationDetails"
              name="decorationDetails"
              value={formData.decorationDetails}
              onChange={handleChange}
              placeholder="Describe your custom cake design, decorations, special requests, and any specific themes or colors you'd like..."
              rows={5}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition resize-none ${
                errors.decorationDetails
                  ? "border-red-500 focus:border-red-600 bg-red-50"
                  : "border-rose-200 focus:border-rose-400 bg-white"
              }`}
            />
            {errors.decorationDetails && (
              <p className="text-red-600 text-sm mt-1">{errors.decorationDetails}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              Share as many details as possible to help us create your perfect cake!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="flex-1 px-6 py-3 border-2 border-rose-300 text-rose-600 font-semibold rounded-lg hover:bg-rose-50 transition"
            >
              Back to Shop
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>✓ We'll review your custom cake request within 24 hours</li>
            <li>✓ You'll receive a detailed quote and timeline via email</li>
            <li>✓ We'll confirm availability and finalize your custom design</li>
            <li>✓ Your unique, handcrafted cake will be ready on your specified date</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
