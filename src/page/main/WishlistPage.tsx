import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import ApiCallFullWatchlistData from '../../api/watchlist/ApiCallFullWatchlistData';
import { mainLoaderTogel } from '../../services/store/slice/loading/loadingSlice';
import routePath from '../../consts/routes/routePath';
import ApiCallWatchList from '../../api/watchlist/ApiCallWatchList';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

const getDiscountPercent = (original: number, sale: number) => {
    if (!original || !sale || original <= sale) return 0;
    return Math.round(((original - sale) / original) * 100);
};

function WishlistPage() {
    const dispatch = useDispatch();
    const userId = useSelector((state: any) => state.userDataSlice.mainUserID);
    const data = useSelector((state: any) => state.watchlistMainSlice.watchlistMainData);
    const navigate = useNavigate();

    const [sortBy, setSortBy] = useState('recent');
    const [filterInStock, setFilterInStock] = useState(false);

    const filteredItems = data
        .filter((item: any) => !filterInStock || item.stockStatus === 'in_stock')
        .sort((a: any, b: any) => {
            switch (sortBy) {
                case 'price-low':
                    return (a.pricing?.salePrice || 0) - (b.pricing?.salePrice || 0);
                case 'price-high':
                    return (b.pricing?.salePrice || 0) - (a.pricing?.salePrice || 0);
                case 'recent':
                default:
                    return (
                        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
                    );
            }
        });

    useEffect(() => {
        dispatch(mainLoaderTogel(true));
        ApiCallFullWatchlistData({ dispatch, userId });
    }, [dispatch, userId]);

    const navigation = useNavigate()
    const navigateScreen = (item: any) => {
        navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE, {
            state: {
                navigateData: item,
            }
        })
    }
    const LikeProduct = async (id: any) => {
        const data = {
            id: id,
            userID: userId

        }
        await ApiCallWatchList({
            dispatch: dispatch,
            data: data
        })
    }
    return (
        <ScrollReveal>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                    My Wishlist
                                </h1>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                    Your saved favourite decorations
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 sm:p-3 bg-amber-100 rounded-full">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                                        {data.length} items
                                    </div>
                                    <div className="text-xs text-gray-600">Saved for later</div>
                                </div>
                            </div>
                        </div>

                        {/* Sort & Filter Bar */}
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <label className="text-sm text-gray-600">Sort by:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white"
                                >
                                    <option value="recent">Recently Added</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={filterInStock}
                                    onChange={(e) => setFilterInStock(e.target.checked)}
                                    className="rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                                />
                                Show only in stock
                            </label>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8">
                    {data.length === 0 ? (
                        // Empty state
                        <div className="text-center py-8 sm:py-12">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                Your wishlist is empty
                            </h3>
                            <p className="text-sm text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-2">
                                Save your favourite decorations here to easily find them later.
                            </p>
                            <button
                                onClick={() => navigate('/shop')}
                                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-300"
                            >
                                Explore Products
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Results count */}
                            <div className="mb-4 sm:mb-6 px-2 sm:px-0">
                                <p className="text-sm text-gray-600">
                                    Showing{' '}
                                    <span className="font-semibold text-gray-900">
                                        {filteredItems.length}
                                    </span>{' '}
                                    of {data.length} items
                                </p>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                                {filteredItems.map((item: any) => {
                                    const imageUrl = item.images?.primary?.[0]?.url || '/placeholder-image.jpg';
                                    const salePrice = item.pricing?.salePrice || 0;
                                    const originalPrice = item.pricing?.originalPrice || 0;
                                    const discountPercent = getDiscountPercent(originalPrice, salePrice);
                                    const inStock = item.stockStatus === 'in_stock' && item.stock > 0;
                                    const firstTag = item.tags?.[0] || item.category;

                                    return (
                                        <div
                                            key={item._id}
                                            onClick={() => navigateScreen(item)}
                                            className="group bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                                        >
                                            {/* Image Container */}
                                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                                <img
                                                    src={imageUrl}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />

                                                {/* Discount Badge */}
                                                {discountPercent > 0 && (
                                                    <div className="absolute top-2 left-2 z-10">
                                                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-red-500 text-white text-xs font-bold rounded">
                                                            -{discountPercent}%
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Remove Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        LikeProduct(item._id);
                                                    }}
                                                    className="absolute cursor-pointer top-2 right-2 z-10 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                                    aria-label="Remove from wishlist"
                                                >
                                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>

                                                {/* Out of Stock Overlay */}
                                                {!inStock && (
                                                    <div className="absolute inset-x-2 bottom-2 z-10 px-2 py-1 sm:px-3 sm:py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full text-center">
                                                        Out of Stock
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
                                                {/* Category / Tag */}
                                                {firstTag && (
                                                    <div className="mb-1.5 sm:mb-2">
                                                        <span className="inline-block text-xs font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded capitalize">
                                                            {firstTag}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Title */}
                                                <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2 text-sm sm:text-base flex-1">
                                                    {item.title}
                                                </h3>

                                                {/* Price */}
                                                <div className="flex items-baseline justify-between flex-wrap gap-1 mb-3 sm:mb-4">
                                                    <div>
                                                        <span className="text-base sm:text-lg font-bold text-gray-900">
                                                            {formatCurrency(salePrice)}
                                                        </span>
                                                        {originalPrice > salePrice && (
                                                            <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                                                                {formatCurrency(originalPrice)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {originalPrice > salePrice && (
                                                        <span className="text-xs text-green-600 font-medium">
                                                            Save {formatCurrency(originalPrice - salePrice)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}

                    {/* Tips Section (only when empty) */}
                    {data.length === 0 && (
                        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
                            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                                    How to use Wishlist
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                    <div className="text-center p-3 sm:p-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                                            Save Items
                                        </h4>
                                        <p className="text-xs text-gray-600">
                                            Click the heart icon to save products
                                        </p>
                                    </div>
                                    <div className="text-center p-3 sm:p-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                                            Track Products
                                        </h4>
                                        <p className="text-xs text-gray-600">
                                            Monitor price changes and availability
                                        </p>
                                    </div>
                                    <div className="text-center p-3 sm:p-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                                            Easy Purchase
                                        </h4>
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
    );
}

export default WishlistPage;