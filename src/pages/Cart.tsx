import React, { useState } from "react";
import { useCakeStore } from "../store";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCakeStore();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    deliveryAddress: "",
    deliveryDate: "",
    specialRequests: "",
  });

  const total = getCartTotal();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted successfully! We'll contact you soon to confirm delivery details.");
    clearCart();
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      deliveryAddress: "",
      deliveryDate: "",
      specialRequests: "",
    });
    setIsCheckingOut(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 text-rose-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Shop
          </button>
          <h1 className="text-4xl font-bold">Your Cart</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Browse our beautiful cakes and add your favorites!
              </p>
              <button
                onClick={() => navigate("/shop")}
                className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  {cart.map((item) => (
                    <div key={item.cake.id} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{item.cake.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Size: {item.customization.size} | Color: {item.customization.floralColor}
                          </p>
                          {item.customization.message && (
                            <p className="text-sm text-gray-500 italic mt-1">
                              Message: "{item.customization.message}"
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cake.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.cake.id, Math.max(1, item.quantity - 1))
                            }
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                          >
                            −
                          </button>
                          <span className="font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cake.id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">
                            ₱{item.cake.price.toLocaleString()} each
                          </p>
                          <p className="text-lg font-bold text-rose-700">
                            ₱{(item.cake.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => navigate("/shop")}
                    className="w-full mt-6 border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    + Add More Cakes
                  </button>
                </div>
              </div>

              {/* Checkout Section */}
              <div>
                {/* Order Total */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Order Total</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">₱{total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className="font-semibold">₱250</span>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-3 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-rose-700">₱{(total + 250).toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                {/* Clear Cart */}
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your cart?")) {
                      clearCart();
                    }
                  }}
                  className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}

          {/* Checkout Form Modal */}
          {isCheckingOut && cart.length > 0 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white p-6">
                  <h2 className="text-2xl font-bold">Delivery Information</h2>
                  <p className="text-rose-100">Complete your order details below</p>
                </div>

                <form onSubmit={handleCheckout} className="p-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="(+63) 917-123-4567"
                    />
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <textarea
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleFormChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                      placeholder="Your complete delivery address"
                    ></textarea>
                  </div>

                  {/* Delivery Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Delivery Date *
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleFormChange}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                      placeholder="Any special instructions or requests?"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
