import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScrollReveal from "../../components/ui/animation/ScrollReveal";
import MainTopSellingProductCard from "../../components/card/MainTopSellingProductCard";
import ApiCallFetchFullProduct from "../../api/product/ApiCallFetchFullProduct";

function ShopPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Real product data from Redux
    const products = useSelector((state: any) => state.product.productFullData) || [];

    // Local state
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Derive unique tags for suggestions
    const allTags = useMemo(
        () => [...new Set(products.flatMap((p: any) => p.tags || []))],
        [products]
    );

    // Color palette for cards
    const colorPalette = [
        { border: "#E6B8C7", bg: "#FFEFF4", accent: "#D97A9A" },
        { border: "#BFDFFF", bg: "#EEF7FF", accent: "#5DADE2" },
        { border: "#BEE5D3", bg: "#ECFFF6", accent: "#52BE80" },
        { border: "#FFE0B3", bg: "#FFF6E8", accent: "#F5B041" },
        { border: "#D7C4F2", bg: "#F4EEFF", accent: "#A569BD" },
        { border: "#BFEDE6", bg: "#EFFFFB", accent: "#48C9B0" },
        { border: "#F5C6C6", bg: "#FFF1F1", accent: "#EC7063" },
        { border: "#D6DBDF", bg: "#F4F6F7", accent: "#7F8C8D" },
    ];

    // Fetch products on mount
    useEffect(() => {
        ApiCallFetchFullProduct({ dispatch });
    }, [dispatch]);

    // Close suggestions on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter products by search query only
    const filteredProducts = useMemo(() => {
        if (!searchQuery) return products;
        const query = searchQuery.toLowerCase();
        return products.filter(
            (p: any) =>
                p.title.toLowerCase().includes(query) ||
                p.subtitle.toLowerCase().includes(query) ||
                p.tags?.some((tag: string) => tag.toLowerCase().includes(query))
        );
    }, [products, searchQuery]);

    // Suggestions from product titles and tags
    const suggestions = useMemo(() => {
        if (!searchQuery) return [];
        const query = searchQuery.toLowerCase();
        const titleMatches = products
            .map((p: any) => p.title)
            .filter((title: string) => title.toLowerCase().includes(query))
            .slice(0, 3);
        const tagMatches = allTags.filter((tag: any) => tag.toLowerCase().includes(query)).slice(0, 2);
        return [...new Set([...titleMatches, ...tagMatches])];
    }, [searchQuery, products, allTags]);

    // Popular tags for suggestion pills
    const popularTags = useMemo(() => allTags.slice(0, 8), [allTags]);

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    // Loading state
    if (!products.length) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-white">
                <div className="text-center">
                    <div className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 font-medium">Loading beautiful products...</p>
                </div>
            </div>
        );
    }

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-gray-50/50">
                <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="relative" ref={searchRef}>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    placeholder="Search for decorations, themes, or events..."
                                    className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-gray-900 placeholder-gray-400 text-base"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}

                                {/* Suggestions Dropdown */}
                                {showSuggestions && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden animate-slideDown">
                                        <div className="p-5 border-b border-gray-100">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-sm font-semibold text-gray-700">Popular Tags</span>
                                                <button onClick={() => setShowSuggestions(false)} className="text-xs text-gray-400 hover:text-gray-600">
                                                    Close
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {popularTags.map((tag, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleSuggestionClick(tag as string)}
                                                        className="px-3 py-1.5 bg-gray-100 hover:bg-amber-50 text-gray-700 hover:text-amber-700 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-amber-200"
                                                    >
                                                        {tag as string}
                                                    </button>
                                                ))}
                                            </div>

                                            {suggestions.length > 0 && (
                                                <>
                                                    <div className="text-sm font-semibold text-gray-700 mb-2">Suggestions</div>
                                                    <div className="space-y-1 max-h-60 overflow-y-auto">
                                                        {suggestions.map((suggestion, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => handleSuggestionClick(suggestion)}
                                                                className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center justify-between group transition-colors"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                                    </svg>
                                                                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{suggestion}</span>
                                                                </div>
                                                                <svg className="w-4 h-4 text-gray-300 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="bg-gray-50/80 px-5 py-3 border-t border-gray-200 text-xs text-gray-500 flex justify-between">
                                            <span>Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded-md">Enter</kbd> to search</span>
                                            <span>Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded-md">Esc</kbd> to close</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <main className="container mx-auto  sm:px-6 lg:px-8 py-8">
                    {/* Result Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
                            {searchQuery && <span> for "{searchQuery}"</span>}
                        </p>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredProducts.map((item: any, index: number) => (
                                <MainTopSellingProductCard
                                    key={item._id}
                                    colors={colorPalette[index % colorPalette.length]}
                                    item={item}
                                    navigation={navigate}
                                    isImg={true}
                                    dispatch={dispatch}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 px-4 bg-white rounded-3xl shadow-sm">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
                            <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                {searchQuery ? `No results for "${searchQuery}"` : "No products available"}
                            </p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </ScrollReveal>
    );
}

export default ShopPage;