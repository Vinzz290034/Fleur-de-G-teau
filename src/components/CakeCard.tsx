import React, { useState } from "react";
import { Cake, CakeCustomization } from "../types";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CAKE_SIZES, FLORAL_COLORS } from "../api/cakeData";
import { useCakeStore } from "../store";

interface CakeCardProps {
  cake: Cake;
  showDetails?: boolean;
}

export const CakeCard: React.FC<CakeCardProps> = ({ cake, showDetails = false }) => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState<CakeCustomization>({
    size: "medium",
    floralColor: FLORAL_COLORS[0].name,
    message: "",
  });

  const { addToCart } = useCakeStore();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(cake, customization, quantity);
    setShowCustomizer(false);
    setQuantity(1);
    navigate("/cart");
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col group">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = "";
              e.currentTarget.style.background = "linear-gradient(135deg, #f687b3 0%, #f093fb 100%)";
            }}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
            {cake.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
            {cake.description}
          </p>

          {showDetails && cake.ingredients && (
            <div className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-2">Key Ingredients:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                {cake.ingredients.slice(0, 3).map((ing, idx) => (
                  <li key={idx}>• {ing}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-rose-700">₱{cake.price.toLocaleString()}</span>
            <span className="text-xs bg-pink-100 text-rose-700 px-2 py-1 rounded-full">
              {cake.category}
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowCustomizer(true)}
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart size={18} />
            Customize & Add
          </button>
        </div>
      </div>

      {/* Customizer Modal */}
      {showCustomizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-rose-400 to-pink-500 text-white p-4">
              <h2 className="text-xl font-bold">{cake.name}</h2>
              <p className="text-sm opacity-90">Customize your cake</p>
            </div>

            <div className="p-6 space-y-4">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cake Size
                </label>
                <select
                  value={customization.size}
                  onChange={(e) =>
                    setCustomization({ ...customization, size: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                >
                  {CAKE_SIZES.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Floral Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Floral Color
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {FLORAL_COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() =>
                        setCustomization({ ...customization, floralColor: color.name })
                      }
                      className={`w-10 h-10 rounded-lg transition-colors ${
                        customization.floralColor === color.name
                          ? "ring-2 ring-rose-500"
                          : "ring-1 ring-gray-200 hover:ring-2 hover:ring-gray-300"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <input
                  type="text"
                  maxLength={30}
                  value={customization.message || ""}
                  onChange={(e) =>
                    setCustomization({ ...customization, message: e.target.value })
                  }
                  placeholder="Add a personal message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Price</p>
                <p className="text-2xl font-bold text-rose-700">
                  ₱{(cake.price * quantity).toLocaleString()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => setShowCustomizer(false)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
