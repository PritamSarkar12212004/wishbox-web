import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from "../../components/ui/animation/ScrollReveal";

function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Premium Paper Garland - Diwali Special",
            price: 1299,
            originalPrice: 1899,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Party Garlands",
            rating: 4.5,
            reviews: 128,
            inStock: true,
            tags: ["Best Seller", "Diwali", "Limited Edition"],
            addedDate: "2 days ago"
        },
        {
            id: 2,
            name: "Luxury Paper Flower Bouquet - Wedding Collection",
            price: 2999,
            originalPrice: 3999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers",
            rating: 4.8,
            reviews: 89,
            inStock: true,
            tags: ["Wedding", "Premium"],
            addedDate: "1 week ago"
        },
        {
            id: 3,
            name: "Golden Diwali Lantern Set (Set of 6)",
            price: 2499,
            originalPrice: 3499,
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            category: "Festive Lanterns",
            rating: 4.7,
            reviews: 204,
            inStock: false,
            tags: ["Diwali", "Golden", "Traditional"],
            addedDate: "3 days ago"
        },
        {
            id: 4,
            name: "Royal Wedding Backdrop - Pearl White",
            price: 5599,
            originalPrice: 6999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            category: "Wedding Backdrops",
            rating: 4.9,
            reviews: 56,
            inStock: true,
            tags: ["Wedding", "Luxury", "Customizable"],
            addedDate: "1 month ago"
        },
        {
            id: 5,
            name: "Birthday Party Decoration Kit Complete Set",
            price: 1899,
            originalPrice: 2499,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            category: "Birthday Decor",
            rating: 4.6,
            reviews: 312,
            inStock: true,
            tags: ["Birthday", "Complete Kit", "Party"],
            addedDate: "2 weeks ago"
        },
        {
            id: 6,
            name: "Decorative Paper Fans Wall Art Set",
            price: 799,
            originalPrice: 1199,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Decorative Fans",
            rating: 4.4,
            reviews: 167,
            inStock: true,
            tags: ["Wall Decor", "Modern"],
            addedDate: "5 days ago"
        },
         {
            id: 1,
            name: "Premium Paper Garland - Diwali Special",
            price: 1299,
            originalPrice: 1899,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Party Garlands",
            rating: 4.5,
            reviews: 128,
            inStock: true,
            tags: ["Best Seller", "Diwali", "Limited Edition"],
            addedDate: "2 days ago"
        },
        {
            id: 2,
            name: "Luxury Paper Flower Bouquet - Wedding Collection",
            price: 2999,
            originalPrice: 3999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers",
            rating: 4.8,
            reviews: 89,
            inStock: true,
            tags: ["Wedding", "Premium"],
            addedDate: "1 week ago"
        },
        {
            id: 3,
            name: "Golden Diwali Lantern Set (Set of 6)",
            price: 2499,
            originalPrice: 3499,
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            category: "Festive Lanterns",
            rating: 4.7,
            reviews: 204,
            inStock: false,
            tags: ["Diwali", "Golden", "Traditional"],
            addedDate: "3 days ago"
        },
        {
            id: 4,
            name: "Royal Wedding Backdrop - Pearl White",
            price: 5599,
            originalPrice: 6999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            category: "Wedding Backdrops",
            rating: 4.9,
            reviews: 56,
            inStock: true,
            tags: ["Wedding", "Luxury", "Customizable"],
            addedDate: "1 month ago"
        },
        {
            id: 5,
            name: "Birthday Party Decoration Kit Complete Set",
            price: 1899,
            originalPrice: 2499,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            category: "Birthday Decor",
            rating: 4.6,
            reviews: 312,
            inStock: true,
            tags: ["Birthday", "Complete Kit", "Party"],
            addedDate: "2 weeks ago"
        },
        {
            id: 6,
            name: "Decorative Paper Fans Wall Art Set",
            price: 799,
            originalPrice: 1199,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Decorative Fans",
            rating: 4.4,
            reviews: 167,
            inStock: true,
            tags: ["Wall Decor", "Modern"],
            addedDate: "5 days ago"
        },
         {
            id: 1,
            name: "Premium Paper Garland - Diwali Special",
            price: 1299,
            originalPrice: 1899,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Party Garlands",
            rating: 4.5,
            reviews: 128,
            inStock: true,
            tags: ["Best Seller", "Diwali", "Limited Edition"],
            addedDate: "2 days ago"
        },
        {
            id: 2,
            name: "Luxury Paper Flower Bouquet - Wedding Collection",
            price: 2999,
            originalPrice: 3999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers",
            rating: 4.8,
            reviews: 89,
            inStock: true,
            tags: ["Wedding", "Premium"],
            addedDate: "1 week ago"
        },
        {
            id: 3,
            name: "Golden Diwali Lantern Set (Set of 6)",
            price: 2499,
            originalPrice: 3499,
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            category: "Festive Lanterns",
            rating: 4.7,
            reviews: 204,
            inStock: false,
            tags: ["Diwali", "Golden", "Traditional"],
            addedDate: "3 days ago"
        },
        {
            id: 4,
            name: "Royal Wedding Backdrop - Pearl White",
            price: 5599,
            originalPrice: 6999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            category: "Wedding Backdrops",
            rating: 4.9,
            reviews: 56,
            inStock: true,
            tags: ["Wedding", "Luxury", "Customizable"],
            addedDate: "1 month ago"
        },
        {
            id: 5,
            name: "Birthday Party Decoration Kit Complete Set",
            price: 1899,
            originalPrice: 2499,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            category: "Birthday Decor",
            rating: 4.6,
            reviews: 312,
            inStock: true,
            tags: ["Birthday", "Complete Kit", "Party"],
            addedDate: "2 weeks ago"
        },
        {
            id: 6,
            name: "Decorative Paper Fans Wall Art Set",
            price: 799,
            originalPrice: 1199,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Decorative Fans",
            rating: 4.4,
            reviews: 167,
            inStock: true,
            tags: ["Wall Decor", "Modern"],
            addedDate: "5 days ago"
        },
         {
            id: 1,
            name: "Premium Paper Garland - Diwali Special",
            price: 1299,
            originalPrice: 1899,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Party Garlands",
            rating: 4.5,
            reviews: 128,
            inStock: true,
            tags: ["Best Seller", "Diwali", "Limited Edition"],
            addedDate: "2 days ago"
        },
        {
            id: 2,
            name: "Luxury Paper Flower Bouquet - Wedding Collection",
            price: 2999,
            originalPrice: 3999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers",
            rating: 4.8,
            reviews: 89,
            inStock: true,
            tags: ["Wedding", "Premium"],
            addedDate: "1 week ago"
        },
        {
            id: 3,
            name: "Golden Diwali Lantern Set (Set of 6)",
            price: 2499,
            originalPrice: 3499,
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            category: "Festive Lanterns",
            rating: 4.7,
            reviews: 204,
            inStock: false,
            tags: ["Diwali", "Golden", "Traditional"],
            addedDate: "3 days ago"
        },
        {
            id: 4,
            name: "Royal Wedding Backdrop - Pearl White",
            price: 5599,
            originalPrice: 6999,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            category: "Wedding Backdrops",
            rating: 4.9,
            reviews: 56,
            inStock: true,
            tags: ["Wedding", "Luxury", "Customizable"],
            addedDate: "1 month ago"
        },
        {
            id: 5,
            name: "Birthday Party Decoration Kit Complete Set",
            price: 1899,
            originalPrice: 2499,
            image: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            category: "Birthday Decor",
            rating: 4.6,
            reviews: 312,
            inStock: true,
            tags: ["Birthday", "Complete Kit", "Party"],
            addedDate: "2 weeks ago"
        },
        {
            id: 6,
            name: "Decorative Paper Fans Wall Art Set",
            price: 799,
            originalPrice: 1199,
            image: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            category: "Decorative Fans",
            rating: 4.4,
            reviews: 167,
            inStock: true,
            tags: ["Wall Decor", "Modern"],
            addedDate: "5 days ago"
        }
    ]);

    const [sortBy, setSortBy] = useState('recent');
    const [filterInStock, setFilterInStock] = useState(false);
    const navigate = useNavigate();

    const removeFromWishlist = (id: number) => {
        setWishlistItems(items => items.filter(item => item.id !== id));
    };

    const moveToCart = (item: any) => {
        alert(`${item.name} moved to cart!`);
    };
    const filteredItems = wishlistItems
        .filter(item => !filterInStock || item.inStock)
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                default: return 0;
            }
        });

    return (
        <ScrollReveal>
            <div className="min-h-screen ">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Wishlist</h1>
                                <p className="text-gray-600 mt-2">Your saved favorite decorations</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-amber-100 rounded-full">
                                    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900">{wishlistItems.length} items</div>
                                    <div className="text-sm text-gray-600">Saved for later</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content - Products Grid */}
                <div className="container mx-auto px-4 py-8">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg className="w-10 h-10 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Save your favorite decorations here to easily find them later.
                            </p>
                            <button
                                onClick={() => navigate('/shop')}
                                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-lg shadow-sm hover:shadow transition-all duration-300"
                            >
                                Explore Products
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Results Count */}
                            <div className="mb-6">
                                <p className="text-gray-600">
                                    Showing <span className="font-semibold text-gray-900">{filteredItems.length}</span> of {wishlistItems.length} items
                                </p>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 overflow-hidden">
                                        {/* Product Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />

                                            {/* Discount Badge */}
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                                                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                                </span>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromWishlist(item.id)}
                                                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            {/* Stock Status */}
                                            {!item.inStock && (
                                                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full text-center">
                                                    Out of Stock
                                                </div>
                                            )}

                                            {/* Quick View Overlay */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <button
                                                    onClick={() => navigate(`/product/${item.id}`)}
                                                    className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                >
                                                    Quick View
                                                </button>
                                            </div>
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            {/* Category & Added Date */}
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                                                    {item.category}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {item.addedDate}
                                                </span>
                                            </div>

                                            {/* Product Name */}
                                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                                                {item.name}
                                            </h3>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-3.5 h-3.5 ${i < Math.floor(item.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-600">{item.rating} ({item.reviews})</span>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <div className="text-lg font-bold text-gray-900">₹{item.price}</div>
                                                    <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                                                </div>
                                                <div className="text-xs text-green-600 font-medium">
                                                    Save ₹{item.originalPrice - item.price}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => moveToCart(item)}
                                                    disabled={!item.inStock}
                                                    className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-200 ${!item.inStock
                                                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                                                        }`}
                                                >
                                                    {!item.inStock ? 'Out of Stock' : 'Add to Cart'}
                                                </button>
                                                <button
                                                    onClick={() => navigate(`/product/${item.id}`)}
                                                    className="px-4 py-2.5 border border-gray-300 hover:border-amber-300 text-gray-700 hover:text-amber-700 rounded-lg font-medium transition-colors"
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Empty State Tips (only shown when empty) */}
                    {wishlistItems.length === 0 && (
                        <div className="mt-12 max-w-3xl mx-auto">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">How to use Wishlist</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center p-4">
                                        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-2">Save Items</h4>
                                        <p className="text-xs text-gray-600">
                                            Click the heart icon to save products
                                        </p>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-2">Track Products</h4>
                                        <p className="text-xs text-gray-600">
                                            Monitor price changes and availability
                                        </p>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-2">Easy Purchase</h4>
                                        <p className="text-xs text-gray-600">
                                            Move to cart when ready to buy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    )
}

export default WishlistPage