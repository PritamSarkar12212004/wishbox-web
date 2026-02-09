import { useState } from 'react'
import ScrollReveal from '../../../components/ui/animation/ScrollReveal'
import { useNavigate } from 'react-router-dom'

function ShowProduct() {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('A4');
    const [selectedColor, setSelectedColor] = useState('#FF6B9D');
    const [quantity, setQuantity] = useState(100);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    // Mock product data
    const product = {
        id: 'PPD-2024-001',
        title: 'Premium Handmade Paper Garland',
        category: 'Party Decorations',
        sku: 'GAR-PREMIUM-001',
        description: 'Beautifully crafted premium paper garlands made from 100% recycled paper. Perfect for parties, weddings, and festive decorations. Each garland is handcrafted by skilled artisans with attention to detail.',
        longDescription: `
            <p>Introducing our exquisite Premium Handmade Paper Garland collection, designed to elevate any celebration. Made from high-quality, eco-friendly recycled paper, these garlands are both sustainable and stunning.</p>
            
            <h4>Features:</h4>
            <ul>
                <li>100% Recycled & Biodegradable Paper</li>
                <li>Handcrafted by Skilled Artisans</li>
                <li>UV Resistant Colors that Last</li>
                <li>Water-Resistant Coating</li>
                <li>Flexible & Durable Construction</li>
                <li>Easy to Install & Remove</li>
            </ul>
            
            <h4>Applications:</h4>
            <ul>
                <li>Wedding Decorations</li>
                <li>Birthday Parties</li>
                <li>Corporate Events</li>
                <li>Festival Decor</li>
                <li>Retail Store Displays</li>
                <li>Photography Backdrops</li>
            </ul>
            
            <h4>Quality Assurance:</h4>
            <p>Each garland undergoes 3-stage quality check to ensure perfection. We use non-toxic, child-safe colors and materials.</p>
        `,
        price: {
            retail: 299,
            wholesale: {
                100: 199,
                500: 169,
                1000: 149,
                5000: 129,
                10000: 99
            }
        },
        sizes: [
            { name: 'A4', dimensions: '21cm × 29.7cm', weight: '80gsm' },
            { name: 'A3', dimensions: '29.7cm × 42cm', weight: '120gsm' },
            { name: 'Custom', dimensions: 'Variable', weight: 'Custom' }
        ],
        colors: [
            { name: 'Rose Pink', code: '#FF6B9D', inStock: true },
            { name: 'Sky Blue', code: '#4A90E2', inStock: true },
            { name: 'Emerald Green', code: '#48BB78', inStock: true },
            { name: 'Sunset Orange', code: '#ED8936', inStock: true },
            { name: 'Royal Purple', code: '#9F7AEA', inStock: false },
            { name: 'Golden Yellow', code: '#ECC94B', inStock: true }
        ],
        images: [
            'https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg',
            'https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg',
            'https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg',
            'https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg',
            'https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
        specifications: {
            material: '100% Recycled Paper',
            finish: 'Matte with Glossy Accents',
            packaging: '200 pcs per carton',
            cartonDimensions: '60cm × 40cm × 30cm',
            cartonWeight: '8.5kg',
            moq: '100 pieces',
            leadTime: '7-10 days',
            certifications: ['ISO 9001', 'FSC Certified', 'Eco-Friendly']
        },
        wholesalePacks: [
            { name: 'Starter Pack', pieces: 100, price: 19900, save: 33 },
            { name: 'Business Pack', pieces: 500, price: 84500, save: 43 },
            { name: 'Premium Pack', pieces: 1000, price: 149000, save: 50 },
            { name: 'Enterprise Pack', pieces: 5000, price: 645000, save: 56 },
            { name: 'Bulk Pack', pieces: 10000, price: 990000, save: 66 }
        ],
        ratings: {
            average: 4.7,
            total: 245,
            breakdown: [5, 4, 3, 2, 1]
        },
        relatedProducts: [
            { id: 1, name: 'Paper Flowers', price: 249, image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg' },
            { id: 2, name: 'Festive Lanterns', price: 179, image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg' },
            { id: 3, name: 'Decorative Fans', price: 329, image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg' }
        ]
    };

    const calculatePrice = () => {
        if (quantity >= 10000) return product.price.wholesale[10000];
        if (quantity >= 5000) return product.price.wholesale[5000];
        if (quantity >= 1000) return product.price.wholesale[1000];
        if (quantity >= 500) return product.price.wholesale[500];
        if (quantity >= 100) return product.price.wholesale[100];
        return product.price.retail;
    };

    const totalPrice = calculatePrice() * quantity;

    const handleAddToCart = () => {
        // Add to cart logic
        console.log('Added to cart:', {
            productId: product.id,
            title: product.title,
            size: selectedSize,
            color: selectedColor,
            quantity,
            unitPrice: calculatePrice(),
            totalPrice
        });
    };

    const handleQuickOrder = () => {
        // Quick order logic
        console.log('Quick order:', { productId: product.id, quantity });
    };

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Product Navigation */}
                <div className="bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600">
                            <button onClick={() => navigate(-1)} className="hover:text-amber-600 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Collections
                            </button>
                            <span className="mx-2">/</span>
                            <span className="text-gray-400">{product.category}</span>
                            <span className="mx-2">/</span>
                            <span className="font-medium text-gray-900">{product.title}</span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Main Product Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Left Column - Images & Video */}
                        <div>
                            {/* Main Image */}
                            <div className="mb-4 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
                                {showVideo ? (
                                    <div className="relative aspect-video">
                                        <iframe
                                            src={product.videoUrl}
                                            className="w-full h-full"
                                            title="Product Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        <button
                                            onClick={() => setShowVideo(false)}
                                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <img
                                        src={product.images[activeImageIndex]}
                                        alt={product.title}
                                        className="w-full h-auto max-h-[500px] object-contain"
                                    />
                                )}
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveImageIndex(index);
                                            setShowVideo(false);
                                        }}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${activeImageIndex === index ? 'border-amber-500' : 'border-gray-200'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                                {/* Video Thumbnail */}
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200 relative group hover:border-amber-500"
                                >
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600"></div>
                                </button>
                            </div>

                            {/* Product SKU & Stock */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-sm text-gray-500">Product ID:</span>
                                        <p className="font-semibold">{product.id}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500">SKU:</span>
                                        <p className="font-semibold">{product.sku}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500">In Stock:</span>
                                        <p className="font-semibold text-green-600">✓ Available</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500">MOQ:</span>
                                        <p className="font-semibold">{product.specifications.moq}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Product Details */}
                        <div>
                            {/* Product Header */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="flex items-center">
                                                <div className="flex text-amber-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="ml-2 text-gray-600">({product.ratings.total} reviews)</span>
                                            </div>
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                                Best Seller
                                            </span>
                                        </div>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                                        <svg className="w-6 h-6 text-gray-400 hover:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Price Section */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-4xl font-bold text-gray-900">₹{calculatePrice()}</span>
                                        <span className="text-lg text-gray-500 line-through">₹{product.price.retail}</span>
                                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded">
                                            Save {Math.round((1 - calculatePrice() / product.price.retail) * 100)}%
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mt-2">Minimum Order: {product.specifications.moq}</p>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="mb-8">
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <div dangerouslySetInnerHTML={{ __html: product.longDescription }} className="text-gray-600" />
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                                <div className="flex gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size.name}
                                            onClick={() => setSelectedSize(size.name)}
                                            className={`px-4 py-3 rounded-xl border-2 transition-all ${selectedSize === size.name ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 hover:border-gray-300'}`}
                                        >
                                            <div className="font-medium">{size.name}</div>
                                            <div className="text-sm text-gray-500">{size.dimensions}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => color.inStock && setSelectedColor(color.code)}
                                            disabled={!color.inStock}
                                            className={`relative rounded-full w-12 h-12 border-2 ${selectedColor === color.code ? 'border-amber-500 ring-2 ring-amber-200' : 'border-gray-300'}`}
                                            style={{ backgroundColor: color.code }}
                                            title={`${color.name} ${!color.inStock ? '(Out of Stock)' : ''}`}
                                        >
                                            {!color.inStock && (
                                                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-gray-300 rounded-xl">
                                        <button
                                            onClick={() => setQuantity(Math.max(100, quantity - 100))}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <div className="px-6 py-3 text-lg font-semibold">{quantity}</div>
                                        <button
                                            onClick={() => setQuantity(quantity + 100)}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="text-gray-600">
                                        Total: <span className="text-2xl font-bold text-gray-900">₹{totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to Cart (Wholesale)
                                </button>
                                <button
                                    onClick={handleQuickOrder}
                                    className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Quick Order
                                </button>
                                <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all">
                                    Request Quote
                                </button>
                            </div>

                            {/* Wholesale Price Table */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Wholesale Pricing</h3>
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Quantity</th>
                                                <th className="py-3 px-4 text-left">Price per piece</th>
                                                <th className="py-3 px-4 text-left">Total Price</th>
                                                <th className="py-3 px-4 text-left">You Save</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.wholesalePacks.map((pack, index) => (
                                                <tr key={index} className={`border-t border-gray-200 ${quantity >= pack.pieces ? 'bg-amber-50' : ''}`}>
                                                    <td className="py-3 px-4 font-medium">{pack.pieces.toLocaleString()} pcs</td>
                                                    <td className="py-3 px-4">₹{(pack.price / pack.pieces).toFixed(0)}</td>
                                                    <td className="py-3 px-4">₹{pack.price.toLocaleString()}</td>
                                                    <td className="py-3 px-4 text-green-600 font-bold">{pack.save}%</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                key !== 'certifications' && (
                                    <div key={key} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="text-sm text-gray-500 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="font-semibold text-gray-900">{value}</p>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="mt-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="text-sm text-gray-500 mb-4">Certifications & Standards</h4>
                            <div className="flex flex-wrap gap-3">
                                {product.specifications.certifications.map((cert, index) => (
                                    <span key={index} className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.relatedProducts.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                                            <button className="px-4 py-2 bg-amber-50 text-amber-700 font-medium rounded-lg hover:bg-amber-100">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bulk Order CTA */}
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Place a Bulk Order?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                            Contact our wholesale team for custom orders, private labeling, and special pricing for large quantities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50">
                                Request Custom Quote
                            </button>
                            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10">
                                Call Now: +91 9876543210
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ShowProduct