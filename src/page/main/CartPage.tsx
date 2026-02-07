import { useState } from 'react';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Paper Garland - Festival Special",
      price: 1299,
      originalPrice: 1899,
      quantity: 2,
      image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      category: "Party Garlands",
      color: "Multi-color",
      delivery: "Free Delivery",
      estimatedDelivery: "2-3 business days"
    },
    {
      id: 2,
      name: "Elegant Paper Flower Bouquet",
      price: 899,
      originalPrice: 1299,
      quantity: 1,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      category: "Paper Flowers",
      color: "Pink & White",
      delivery: "Express Shipping",
      estimatedDelivery: "1-2 business days"
    },
    {
      id: 3,
      name: "Diwali Lantern Set of 12",
      price: 2499,
      originalPrice: 3499,
      quantity: 1,
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
      category: "Festive Lanterns",
      color: "Gold & Red",
      delivery: "Free Delivery",
      estimatedDelivery: "3-4 business days"
    },
    {
      id: 4,
      name: "Wedding Backdrop - Luxury Design",
      price: 4599,
      originalPrice: 5999,
      quantity: 1,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
      category: "Wedding Backdrops",
      color: "Ivory White",
      delivery: "Standard Shipping",
      estimatedDelivery: "4-5 business days"
    }
  ]);

  const navigate = useNavigate();

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal > 3000 ? 0 : 99;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const popularProducts = [
    {
      id: 5,
      name: "Birthday Decoration Kit",
      price: 1699,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      category: "Birthday Decor"
    },
    {
      id: 6,
      name: "Paper Fans Wall Decor",
      price: 799,
      image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      category: "Decorative Fans"
    }
  ];

  return (
    <ScrollReveal>
      <div className="min-h-scree">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-gray-600 mt-2">Review your items and proceed to checkout</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              {/* Cart Items List */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Your Cart Items</h2>
                    <button
                      onClick={() => setCartItems([])}
                      className="text-sm text-gray-600 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Clear Cart
                    </button>
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6">Add some beautiful decorations to your cart</p>
                    <button
                      onClick={() => navigate('/shop')}
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors duration-200">
                        <div className="flex flex-col sm:flex-row gap-6">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                              </span>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">Category: {item.category}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        {item.color}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        {item.delivery}
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>

                                {/* Quantity Controls & Price */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-gray-100 rounded-full px-2">
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-2 text-gray-600 hover:text-amber-600"
                                      >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                      </button>
                                      <span className="w-12 text-center font-medium text-gray-900">{item.quantity}</span>
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 text-gray-600 hover:text-amber-600"
                                      >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                      </button>
                                    </div>
                                    <span className="text-sm text-gray-500">Estimated: {item.estimatedDelivery}</span>
                                  </div>

                                  <div className="flex items-center gap-4">
                                    <div className="text-right">
                                      <div className="text-2xl font-bold text-gray-900">₹{item.price * item.quantity}</div>
                                      <div className="flex items-center gap-2 text-sm">
                                        <span className="text-gray-400 line-through">₹{item.originalPrice * item.quantity}</span>
                                        <span className="text-green-600 font-medium">
                                          Save ₹{(item.originalPrice - item.price) * item.quantity}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Continue Shopping */}
                {cartItems.length > 0 && (
                  <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        onClick={() => navigate('/shop')}
                        className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continue Shopping
                      </button>
                      <div className="text-sm text-gray-600">
                        Need help? <a href="#" className="text-amber-600 hover:underline">Contact Support</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                  </div>

                  <div className="p-6">
                    {/* Price Breakdown */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                        <span className="font-medium text-gray-900">₹{subtotal}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Savings</span>
                        <span className="font-medium text-green-600">-₹{savings}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium text-gray-900">
                          {shipping === 0 ? (
                            <span className="text-green-600">Free</span>
                          ) : (
                            `₹${shipping}`
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tax (GST 18%)</span>
                        <span className="font-medium text-gray-900">₹{tax.toFixed(2)}</span>
                      </div>

                      {shipping > 0 && (
                        <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-amber-800">Spend ₹{3000 - subtotal} more for free shipping!</p>
                              <div className="w-full bg-amber-200 rounded-full h-2 mt-1">
                                <div
                                  className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.min((subtotal / 3000) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 pt-6 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gray-900">₹{total.toFixed(2)}</div>
                          <div className="text-sm text-gray-600">Including all taxes</div>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={() => navigate('/checkout')}
                      disabled={cartItems.length === 0}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${cartItems.length === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl'
                        }`}
                    >
                      {cartItems.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
                    </button>

                    {/* Payment Methods */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">We accept</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-gray-100 rounded border"></div>
                        <div className="w-10 h-6 bg-gray-100 rounded border"></div>
                        <div className="w-10 h-6 bg-gray-100 rounded border"></div>
                        <div className="w-10 h-6 bg-gray-100 rounded border"></div>
                      </div>
                    </div>

                    {/* Secure Checkout */}
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-green-800">Secure Checkout</p>
                          <p className="text-xs text-green-700">Your payment information is encrypted and secure</p>
                        </div>
                      </div>
                    </div>

                    {/* Return Policy */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-800">30-Day Return Policy</p>
                          <p className="text-xs text-gray-600">Hassle-free returns within 30 days of delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default CartPage