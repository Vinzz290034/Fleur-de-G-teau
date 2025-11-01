import React from "react";
import { Trash2, ShoppingBag, X } from "lucide-react";
import { useCakeStore } from "../store";
import { useNavigate } from "react-router-dom";

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCakeStore();
  const navigate = useNavigate();

  const total = getCartTotal();

  const handleCheckout = () => {
    onClose();
    navigate("/cart");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed lg:relative right-0 top-0 h-screen lg:h-auto w-full sm:w-96 bg-white shadow-2xl lg:shadow-lg z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} />
            <h2 className="text-xl font-bold">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden hover:bg-rose-500 p-1 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500 font-semibold">Your cart is empty</p>
              <p className="text-sm text-gray-400">Start browsing our beautiful cakes</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cake.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {/* Cake Info */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.cake.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Size: <span className="font-medium">{item.customization.size}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Color: <span className="font-medium">{item.customization.floralColor}</span>
                    </p>
                    {item.customization.message && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        "{item.customization.message}"
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cake.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Price and Quantity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.cake.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold transition-colors"
                    >
                      −
                    </button>
                    <span className="font-semibold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cake.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-rose-700">
                    ₱{(item.cake.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-rose-700">₱{total.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
              >
                Go to Checkout
              </button>
              <button
                onClick={() => clearCart()}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
