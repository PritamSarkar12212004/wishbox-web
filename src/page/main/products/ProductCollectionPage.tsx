import { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollReveal from '../../../components/ui/animation/ScrollReveal';
import MainProductCard from '../../../components/card/MainProductCard';
import APiCallFetchFullColection from '../../../api/collection/APiCallFetchFullColection';
import type { RootState } from '../../../services/store/store';
import type { TypeCollection } from '../../../types/collections/typeCollection';

function ProductCollectionPage() {
    const dispatch = useDispatch();

    // Redux state
    const { collection: data, loading } = useSelector(
        (state: RootState) => state.collection
    );

    // Local UI state
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const searchRef = useRef<HTMLDivElement | null>(null);

    // Fetch collections on mount if not already loaded
    useEffect(() => {
        if (!data || data.length === 0) {
            APiCallFetchFullColection({ dispatch });
        }
    }, [dispatch, data]);

    // Extract unique categories from collections
    const categories = useMemo(() => {
        if (!data) return ['All'];
        const cats = data.map((item: TypeCollection) => item.categoryName);
        return ['All', ...new Set(cats)];
    }, [data]);

    // Filter collections based on search and category
    const filteredCollections = useMemo(() => {
        if (!data) return [];

        return data.filter((item: TypeCollection) => {
            // Category filter
            if (selectedCategory !== 'All' && item.categoryName !== selectedCategory) {
                return false;
            }

            // Search query filter (title & subtitle)
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const titleMatch = item.title.toLowerCase().includes(query);
                const subtitleMatch = item.subtitle?.toLowerCase().includes(query) ?? false;
                return titleMatch || subtitleMatch;
            }

            return true;
        });
    }, [data, searchQuery, selectedCategory]);

    // Click outside to close suggestions
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Generate suggestions from actual collection titles (max 6)
    const suggestionList = useMemo(() => {
        if (!data || !searchQuery) return [];
        const query = searchQuery.toLowerCase();
        return data
            .map((item: TypeCollection) => item.title)
            .filter((title: string) => title.toLowerCase().includes(query))
            .slice(0, 6);
    }, [data, searchQuery]);

    // Loading state
    if (loading) {
        return (
            <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                    <div className="h-8 w-48 bg-neutral-200 rounded-full animate-pulse" />
                    <div className="h-12 w-96 max-w-full bg-neutral-200 rounded-lg animate-pulse" />
                    <div className="h-6 w-64 bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-xl sm:rounded-2xl bg-white shadow-md p-4 animate-pulse"
                        >
                            <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-neutral-200 rounded-lg mb-4" />
                            <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2" />
                            <div className="h-3 bg-neutral-200 rounded w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <ScrollReveal>
            <div className="flex-1 flex gap-8 flex-col pb-20 relative">

                {/* ========== HERO HEADER (inspired by MainProductOne) ========== */}
                <section className="w-full bg-neutral-50 pt-8 sm:pt-12 md:pt-16 px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                            <div className="relative">
                                <span className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider shadow-lg z-10">
                                    Explore Collections
                                </span>
                                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 max-w-4xl leading-tight">
                                Discover Our{' '}
                                <span className="relative inline-block">
                                    <span className="text-amber-500">Curated</span>
                                    <svg
                                        className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 text-amber-400"
                                        viewBox="0 0 200 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0,5 Q50,0 100,5 T200,5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                    </svg>
                                </span>{' '}
                                Collections
                            </h2>

                            <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl">
                                Handpicked themes and products for every celebration – find the perfect match for your moment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== STICKY SEARCH & FILTERS ========== */}
                <div className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-8 py-4">
                        {/* Search input */}
                        <div className="relative" ref={searchRef}>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    placeholder="Search collections by name or description..."
                                    className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm"
                                />

                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                )}

                                {/* Suggestions dropdown (dynamic from collection titles) */}
                                {showSuggestions && suggestionList.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden animate-fadeIn">
                                        <div className="p-2 max-h-64 overflow-y-auto">
                                            {suggestionList.map((title: any, idx: any) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setSearchQuery(title);
                                                        setShowSuggestions(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-700">{title}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 text-xs text-gray-500">
                                            {suggestionList.length} suggestions – type to refine
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Category filter chips */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                        ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ========== COLLECTIONS GRID ========== */}
                <div className="container mx-auto ">
                    {filteredCollections.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-amber-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No collections found
                            </h3>
                            <p className="text-gray-600 text-center max-w-md mb-6">
                                Try adjusting your search or filter to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {filteredCollections.map((item: TypeCollection, index: number) => (
                                <MainProductCard key={item._id} item={item} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}

export default ProductCollectionPage;