import { useEffect, useState } from 'react'
import ScrollReveal from '../../../components/ui/animation/ScrollReveal'
import { FaStar, FaHeart, FaShare, FaShoppingCart, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { mainLoaderTogel } from '../../../services/store/slice/loading/loadingSlice';
import ApiCallProductImageFetch from '../../../api/product/ApiCallProductImageFetch';
import { tempProductShowData } from '../../../services/store/slice/product/tempProductSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiCallCart from '../../../api/cart/ApiCallCart';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import routePath from '../../../consts/routes/routePath';

function ShowProduct() {
    const [loadingCart, setLoadingCart] = useState<boolean>(false)
    const [quantity, setQuantity] = useState(20);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const item = useSelector((state: any) => state.productTempData.productShowData);
    const location: any = useLocation();
    const { navigateData } = location.state;
    const dispatch = useDispatch();
    const userId = useSelector((state: any) => state.userDataSlice.mainUserID)
    const callApi = async () => {
        dispatch(mainLoaderTogel(true));
        const image = await ApiCallProductImageFetch({ gItem: navigateData.gallery, dispatch });
        const data = {
            image: image,
            item: navigateData
        };
        dispatch(tempProductShowData(data));
    };
    if (!item || !item.item) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            </div>
        );
    }
    const product = item.item;
    const cartData = useSelector((state: any) => state.cartDataSlice.cartIDData);
    const isInCart = cartData?.includes(product._id);
    const salePrice = product.pricing?.salePrice || 0;
    const originalPrice = product.pricing?.originalPrice || 0;
    const savingPercent = originalPrice > 0 ? Math.round(((originalPrice - salePrice) / originalPrice) * 100) : 0;
    const specifications = [
        { label: 'GSM', value: product.paperSpecs?.gsm ? `${product.paperSpecs.gsm} GSM` : 'N/A' },
        {
            label: 'Dimensions', value: product.paperSpecs?.width && product.paperSpecs?.height
                ? `${product.paperSpecs.width} × ${product.paperSpecs.height} ${product.paperSpecs.unit || 'inch'}`
                : 'N/A'
        },
        { label: 'Stock', value: product.stockStatus === 'in_stock' ? `${product.stock} units` : 'Out of stock' }
    ];
    const reviews = {
        rating: 4.8,
        count: 245,
        highlights: [
            { label: 'Quality', value: 4.9 },
            { label: 'Value', value: 4.7 },
            { label: 'Delivery', value: 4.8 }
        ]
    };
    const naviate = useNavigate()
    const cartAdd = async () => {
        setLoadingCart(true)
        const data = {
            item: item.item,
            quantity: quantity,
            price: salePrice,
            userId: userId
        }
        ApiCallCart({
            data: data,
            dispatch: dispatch,
            setLoadingCart
        })
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        callApi();
    }, []);

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-white">
                <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4"></div>
                            <div className="flex items-center gap-4">
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <FaShare className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <FaHeart className={`w-5 h-5 ${isFavorite ? 'text-red-500' : 'text-gray-600'}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column - Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-lg">
                                <img
                                    src={product.images?.primary?.[0]?.url || '/placeholder-image.jpg'}
                                    alt={product.title}
                                    className="w-full h-full object-contain p-8"
                                />
                                {product.stockStatus === 'in_stock' && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold rounded-full shadow">
                                            In Stock
                                        </span>
                                    </div>
                                )}
                            </div>

                            {item.image && item.image.length > 0 && (
                                <div className="grid grid-cols-4 gap-3">
                                    {item.image.map((img: any, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImageIndex(index)}
                                            className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImageIndex === index
                                                ? 'border-rose-500 shadow-md'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img
                                                src={img.versions?.[0]?.url || img.url || '/placeholder-thumb.jpg'}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Column - Details */}
                        <div className="space-y-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-medium mb-3">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {product.category || 'Premium Quality'}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {product.title}
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    {product.description}
                                </p>

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(reviews.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`} />
                                        ))}
                                        <span className="font-bold text-gray-900 ml-1">{reviews.rating}</span>
                                    </div>
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-600">{reviews.count} reviews</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">₹{salePrice}</span>
                                    {originalPrice > salePrice && (
                                        <>
                                            <span className="text-lg text-gray-500 line-through">₹{originalPrice}</span>
                                            <span className="text-sm text-green-600 font-semibold">Save {savingPercent}%</span>
                                        </>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">Inclusive of all taxes</p>
                            </div>

                            {product.paperSpecs?.width && product.paperSpecs?.height && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                                    <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800">
                                        {product.paperSpecs.width} × {product.paperSpecs.height} {product.paperSpecs.unit || 'inch'}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {
                                    isInCart ? null : <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => setQuantity(prev => Math.max(20, prev - 20))}
                                                    className="px-4 py-3 text-gray-600 cursor-pointer hover:text-gray-900 hover:bg-gray-50"
                                                    disabled={quantity <= 20}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <div className="px-6 py-3 text-lg font-semibold text-gray-900">
                                                    {quantity.toLocaleString()} <span className="text-sm text-gray-500">pieces</span>
                                                </div>
                                                <button
                                                    onClick={() => setQuantity(prev => Math.min(prev + 20, product.stock || Infinity))}
                                                    className="px-4 py-3 text-gray-600 cursor-pointer hover:text-gray-900 hover:bg-gray-50"
                                                    disabled={product.stock ? quantity >= product.stock : false}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {product.stock && (
                                                <span className="text-sm text-gray-500">{product.stock} available</span>
                                            )}
                                        </div>
                                    </div>

                                }

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <button onClick={() => loadingCart ? null : isInCart ? naviate(routePath.PRIVATE_ROUTE.CART_PAGE) : cartAdd()} className="group relative cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {
                                            loadingCart ? <Box sx={{ display: 'flex' }}>
                                                <CircularProgress color='white' size={20} />
                                            </Box> : isInCart ? <>  <FaShoppingCart className="relative z-10 w-5 h-5" />
                                                <span className="relative z-10">View Cart</span></> : <><FaShoppingCart className="relative z-10 w-5 h-5" />
                                                <span className="relative z-10">Add to Cart</span></>

                                        }

                                    </button>

                                    <button className="group cursor-pointer relative bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <FaWhatsapp className="relative z-10 w-5 h-5" />
                                        <span className="relative z-10">WhatsApp Order</span>
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button className="flex-1 cursor-pointer min-w-[120px] py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                                        <FaPhoneAlt className="w-4 h-4" />
                                        Call Now
                                    </button>
                                    <button className="flex-1 cursor-pointer min-w-[120px] py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-rose-300 hover:bg-rose-50 transition-all flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-8">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                                        <div className="font-semibold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-gray-900 mb-2">{reviews.rating}</div>
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`w-5 h-5 ${i < Math.floor(reviews.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`} />
                                        ))}
                                    </div>
                                    <div className="text-gray-600">{reviews.count} reviews</div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    {reviews.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="w-24 text-sm text-gray-600">{highlight.label}</div>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                                    style={{ width: `${(highlight.value / 5) * 100}%` }}
                                                />
                                            </div>
                                            <div className="w-10 text-right font-semibold text-gray-900">
                                                {highlight.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700" />
                            <div className="relative z-10 p-8 md:p-12 text-white">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">Need Custom Bulk Order?</h2>
                                        <p className="text-blue-100 mb-6">
                                            Contact us for custom designs, private labeling, and special pricing for large quantities. Our team is ready to assist you.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button className="px-6 cursor-pointer py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
                                                Request Custom Quote
                                            </button>
                                            <button className="px-6 cursor-pointer py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                                Download Catalog
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold mb-1">5000+</div>
                                            <div className="text-blue-200 text-sm">Happy Clients</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold mb-1">50K+</div>
                                            <div className="text-blue-200 text-sm">Orders Delivered</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold mb-1">24/7</div>
                                            <div className="text-blue-200 text-sm">Support</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold mb-1">15+</div>
                                            <div className="text-blue-200 text-sm">Years Experience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="container mx-auto px-4 pb-6">
                        <div className="text-center text-gray-600">
                            <p className="font-medium">PaperDecor Wholesale</p>
                            <p className="text-sm mt-1">Premium Paper Decorations Since 2008</p>
                        </div>
                    </div>
                </footer>
            </div>
        </ScrollReveal>
    );
}

export default ShowProduct;