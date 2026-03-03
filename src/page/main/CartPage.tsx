import { useEffect, useState } from 'react';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import APiCallFetchFullCart from '../../api/cart/APiCallFetchFullCart';

function CartPage() {
  const data: {
    image: string;
    price: number;
    quantity: number;
    subTotal: number;
    title: string
  } = useSelector((state: any) => state.cartDataSlice.cartData)
  const id = useSelector((state: any) => state.userDataSlice.mainUserID)
  type CartItem = {
    _id: any;
    image: string;
    price: number;
    quantity: number;
    title: string;
  };
  const [cartItems, setCartItems] = useState<CartItem[]>(data || []);
  const navigate = useNavigate();
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 20) return;

    setCartItems(items =>
      items.map(item =>
        item._id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item._id !== id));
  };
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 3000 ? 0 : 99;
  const total = subtotal;

  const dispatch = useDispatch()
  useEffect(() => {
    APiCallFetchFullCart({
      dispatch: dispatch,
      id: id
    })
  }, [])
  return (
    <ScrollReveal>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Review your items and proceed to checkout</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium text-sm">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              {/* Cart Items List */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden border border-gray-200">
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base sm:text-lg font-bold text-gray-900">Your Cart Items</h2>
                    {cartItems.length > 0 && (
                      <button
                        onClick={() => setCartItems([])}
                        className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear Cart
                      </button>
                    )}
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">Your cart is empty</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4">Add some beautiful decorations to your cart</p>
                    <button
                      onClick={() => navigate('/shop')}
                      className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow text-sm"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div key={item._id} className="p-3 sm:p-4 hover:bg-gray-50/50 transition-colors duration-200">
                        <div className="flex gap-3 sm:gap-4">
                          {/* Product Image - Fixed aspect ratio */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full">
                                -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                              </span>
                            </div>
                          </div>

                          {/* Product Details - Takes remaining space */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col h-full">
                              {/* Top row: Title and Remove button */}
                              <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 mb-1">{item.title}</h3>
                                  {/* <p className="text-xs text-gray-600 mb-1">Category: {item.category}</p> */}
                                </div>
                                <button
                                  onClick={() => removeItem(item._id)}
                                  className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors flex-shrink-0"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>

                              {/* Middle row: Color and Delivery info */}
                              {/* <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                  </svg>
                                  {item.color}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                  </svg>
                                  {item.delivery}
                                </span>
                              </div> */}

                              {/* Bottom row: Quantity, Delivery estimate, and Price */}
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-auto">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center bg-gray-100 rounded-full">
                                    <button
                                      onClick={() => updateQuantity(item._id, item.quantity - 20)}
                                      className="p-1.5 text-gray-600 hover:text-amber-600"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                      </svg>
                                    </button>
                                    <span className="w-8 text-center font-medium text-gray-900 text-sm">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item._id, item.quantity + 20)}
                                      className="p-1.5 text-gray-600 hover:text-amber-600"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between sm:justify-end gap-3">
                                  <div className="text-right">
                                    <div className="text-base sm:text-lg font-bold text-gray-900">₹{item.price * item.quantity}</div>
                                    <div className="flex items-center gap-1 text-xs">
                                      <span className="text-gray-400 line-through">₹{item.price * item.quantity}</span>
                                      <span className="text-green-600 font-medium">
                                        Save ₹{(item.price - item.price) * item.quantity}
                                      </span>
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
                  <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        onClick={() => navigate('/shop')}
                        className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continue Shopping
                      </button>
                      <div className="text-xs text-gray-600">
                        Need help? <a href="#" className="text-amber-600 hover:underline">Contact Support</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-2 sm:top-4">
                <div className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden border border-gray-200">
                  <div className="p-3 sm:p-4 border-b border-gray-200">
                    <h2 className="text-base sm:text-lg font-bold text-gray-900">Order Summary</h2>
                  </div>

                  <div className="p-3 sm:p-4">
                    {/* Price Breakdown */}
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Subtotal ({cartItems.length} items)</span>
                        <span className="font-medium text-gray-900">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Shipping</span>
                        <span className="font-medium text-gray-900">
                          {shipping === 0 ? (
                            <span className="text-green-600">Free</span>
                          ) : (
                            `₹${shipping}`
                          )}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <div className="mt-2 p-2 sm:p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="flex-1">
                              <p className="text-xs font-medium text-amber-800">Spend ₹{3000 - subtotal} more for free shipping!</p>
                              <div className="w-full bg-amber-200 rounded-full h-1.5 mt-1">
                                <div
                                  className="bg-amber-500 h-1.5 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.min((subtotal / 3000) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-semibold text-gray-900">Total Amount</span>
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">₹{total.toFixed(2)}</div>
                          <div className="text-xs text-gray-600">Including all taxes</div>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={() => navigate('/checkout')}
                      disabled={cartItems.length === 0}
                      className={`w-full py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${cartItems.length === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      {cartItems.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
                    </button>
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