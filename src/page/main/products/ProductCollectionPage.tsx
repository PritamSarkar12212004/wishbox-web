import routePath from '../../../consts/routes/routePath';
import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../../../components/ui/animation/ScrollReveal';

function ProductCollectionPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredCollections, setFilteredCollections] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const searchRef = useRef(null);
    const collections = [
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            accentColor: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 42,
            category: "Party",
            tags: ["garlands", "party", "decorations", "celebration"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            accentColor: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 36,
            category: "Floral",
            tags: ["flowers", "floral", "elegant", "wedding"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            accentColor: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 28,
            category: "Party",
            tags: ["birthday", "celebration", "colorful", "sets"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            accentColor: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            productsCount: 19,
            category: "Wedding",
            tags: ["wedding", "luxury", "backdrops", "premium"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern",
            bgColor: "#E6F7FF",
            accentColor: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            productsCount: 31,
            category: "Festive",
            tags: ["lanterns", "festive", "traditional", "diwali"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            accentColor: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 24,
            category: "Home Decor",
            tags: ["fans", "wall decor", "ceiling", "interior"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            accentColor: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 47,
            category: "Party",
            tags: ["streamers", "vibrant", "party", "colorful"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 8,
            title: "Seasonal Decor",
            subtitle: "Holiday Special Editions",
            bgColor: "#F0FFF8",
            accentColor: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 22,
            category: "Seasonal",
            tags: ["seasonal", "holiday", "christmas", "festive"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            accentColor: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 42,
            category: "Party",
            tags: ["garlands", "party", "decorations", "celebration"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            accentColor: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 36,
            category: "Floral",
            tags: ["flowers", "floral", "elegant", "wedding"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            accentColor: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 28,
            category: "Party",
            tags: ["birthday", "celebration", "colorful", "sets"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            accentColor: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            productsCount: 19,
            category: "Wedding",
            tags: ["wedding", "luxury", "backdrops", "premium"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern",
            bgColor: "#E6F7FF",
            accentColor: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            productsCount: 31,
            category: "Festive",
            tags: ["lanterns", "festive", "traditional", "diwali"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            accentColor: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 24,
            category: "Home Decor",
            tags: ["fans", "wall decor", "ceiling", "interior"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            accentColor: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 47,
            category: "Party",
            tags: ["streamers", "vibrant", "party", "colorful"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 8,
            title: "Seasonal Decor",
            subtitle: "Holiday Special Editions",
            bgColor: "#F0FFF8",
            accentColor: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 22,
            category: "Seasonal",
            tags: ["seasonal", "holiday", "christmas", "festive"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            accentColor: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 42,
            category: "Party",
            tags: ["garlands", "party", "decorations", "celebration"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            accentColor: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 36,
            category: "Floral",
            tags: ["flowers", "floral", "elegant", "wedding"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            accentColor: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 28,
            category: "Party",
            tags: ["birthday", "celebration", "colorful", "sets"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            accentColor: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            productsCount: 19,
            category: "Wedding",
            tags: ["wedding", "luxury", "backdrops", "premium"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern",
            bgColor: "#E6F7FF",
            accentColor: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            productsCount: 31,
            category: "Festive",
            tags: ["lanterns", "festive", "traditional", "diwali"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            accentColor: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 24,
            category: "Home Decor",
            tags: ["fans", "wall decor", "ceiling", "interior"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            accentColor: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 47,
            category: "Party",
            tags: ["streamers", "vibrant", "party", "colorful"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 8,
            title: "Seasonal Decor",
            subtitle: "Holiday Special Editions",
            bgColor: "#F0FFF8",
            accentColor: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 22,
            category: "Seasonal",
            tags: ["seasonal", "holiday", "christmas", "festive"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            accentColor: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 42,
            category: "Party",
            tags: ["garlands", "party", "decorations", "celebration"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            accentColor: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 36,
            category: "Floral",
            tags: ["flowers", "floral", "elegant", "wedding"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            accentColor: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 28,
            category: "Party",
            tags: ["birthday", "celebration", "colorful", "sets"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            accentColor: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            productsCount: 19,
            category: "Wedding",
            tags: ["wedding", "luxury", "backdrops", "premium"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern",
            bgColor: "#E6F7FF",
            accentColor: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            productsCount: 31,
            category: "Festive",
            tags: ["lanterns", "festive", "traditional", "diwali"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            accentColor: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 24,
            category: "Home Decor",
            tags: ["fans", "wall decor", "ceiling", "interior"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            accentColor: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 47,
            category: "Party",
            tags: ["streamers", "vibrant", "party", "colorful"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
        {
            id: 8,
            title: "Seasonal Decor",
            subtitle: "Holiday Special Editions",
            bgColor: "#F0FFF8",
            accentColor: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 22,
            category: "Seasonal",
            tags: ["seasonal", "holiday", "christmas", "festive"],
            navigate: routePath.PRIVATE_ROUTE.COLLECTION_PAGE
        },
    ];
    const suggestions = [
        "Party Garlands",
        "Paper Flowers",
        "Birthday Decor",
        "Wedding Backdrops",
        "Festive Lanterns",
        "Seasonal Decorations",
        "Paper Streamers",
        "Home Decor",
        "Premium Collections",
        "Party Garlands",
        "Paper Flowers",
        "Birthday Decor",
        "Wedding Backdrops",
        "Festive Lanterns",
        "Seasonal Decorations",
        "Paper Streamers",
        "Home Decor",
        "Premium Collections",
        "Party Garlands",
        "Paper Flowers",
        "Birthday Decor",
        "Wedding Backdrops",
        "Festive Lanterns",
        "Seasonal Decorations",
        "Paper Streamers",
        "Home Decor",
        "Premium Collections",
    ];

    useEffect(() => {
        let filtered = collections;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.subtitle.toLowerCase().includes(query) ||
                item.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        setFilteredCollections(filtered);
    }, [searchQuery, selectedCategory]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (suggestion: any) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    // Handle collection click
    const handleCollectionClick = (navigateTo: any) => {
        navigateTo(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE)
    };

    const popularTags = [
        "Birthday", "Wedding", "Party", "Festive", "Home Decor",
        "Premium", "Handmade", "Seasonal", "Floral", "Traditional"
    ];

    return (
        <div className='flex-1 flex gap-8 flex-col pb-20 relative '>
            <div className='w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-100'>
                <div className='container mx-auto px-4 md:px-8 py-4'>
                    <div className='relative' ref={searchRef}>
                        <div className='relative group'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <svg className='w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors'
                                    fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                </svg>
                            </div>

                            <input
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                placeholder='Search collections, decorations, themes...'
                                className='w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm'
                            />

                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                >
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            )}

                            {/* Search Suggestions Dropdown */}
                            {showSuggestions && (
                                <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden animate-fadeIn'>
                                    <div className='p-4 border-b border-gray-100'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <span className='text-sm font-semibold text-gray-700'>Popular Searches</span>
                                            <button
                                                onClick={() => setShowSuggestions(false)}
                                                className='text-xs text-gray-400 hover:text-gray-600'
                                            >
                                                Close
                                            </button>
                                        </div>

                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {popularTags.map((tag, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSuggestionClick(tag)}
                                                    className='px-3 py-1.5 bg-gray-100 hover:bg-amber-50 text-gray-700 hover:text-amber-700 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-amber-200'
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>

                                        <div className='space-y-1 max-h-64 overflow-y-auto'>
                                            {suggestions
                                                .filter(suggestion =>
                                                    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .map((suggestion, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleSuggestionClick(suggestion)}
                                                        className='w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg flex items-center justify-between group transition-colors'
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            <svg className='w-4 h-4 text-gray-400 group-hover:text-amber-500'
                                                                fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                                            </svg>
                                                            <span className='text-gray-700 group-hover:text-gray-900'>{suggestion}</span>
                                                        </div>
                                                        <svg className='w-4 h-4 text-gray-300 group-hover:text-amber-500'
                                                            fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                                                d='M9 5l7 7-7 7' />
                                                        </svg>
                                                    </button>
                                                ))}
                                        </div>
                                    </div>

                                    <div className='bg-gray-50 px-4 py-3 border-t border-gray-200'>
                                        <div className='flex items-center justify-between text-sm'>
                                            <span className='text-gray-500'>Press <kbd className='px-2 py-1 bg-white border border-gray-300 rounded text-xs'>Enter</kbd> to search</span>
                                            <span className='text-gray-500'>Press <kbd className='px-2 py-1 bg-white border border-gray-300 rounded text-xs'>Esc</kbd> to close</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>

            {/* Collections Grid */}
            <div className='container mx-auto px-4 md:px-8'>
                {filteredCollections.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <div className='w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center'>
                            <svg className='w-12 h-12 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                    d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>No collections found</h3>
                        <p className='text-gray-600 text-center max-w-md mb-6'>
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('All');
                            }}
                            className='px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300'
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {filteredCollections.map((item: any, index: any) => (
                            <div
                                key={item.id + '-' + index}
                                onClick={() => handleCollectionClick(item.navigate)}
                                className='group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100'
                            >
                                {/* Background pattern */}
                                <div
                                    className='absolute inset-0 opacity-5'
                                    style={{ backgroundColor: item.accentColor }}
                                ></div>

                                {/* Card Header */}
                                <div className='relative p-6'>
                                    <div className='flex items-start justify-between mb-4'>
                                        <div>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <span className='px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700'>
                                                    {item.category}
                                                </span>
                                                <span className='px-2 py-1 text-xs font-bold rounded-full text-white shadow-sm'
                                                    style={{ backgroundColor: item.accentColor }}>
                                                    {item.productsCount}+ items
                                                </span>
                                            </div>
                                            <h3 className='text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors'>
                                                {item.title}
                                            </h3>
                                            <p className='text-gray-600 text-sm mt-1'>
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className='relative px-6'>
                                    <div
                                        className='relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500'
                                        style={{ backgroundColor: item.bgColor }}
                                    >
                                        <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10'></div>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className='w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700'
                                        />

                                        {/* Overlay gradient */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'></div>

                                        {/* Quick action button */}
                                        <div className='absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg z-20'>
                                            <svg className='w-5 h-5' style={{ color: item.accentColor }} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className='p-6 pt-4'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-amber-400'>
                                                {[...Array(4)].map((_, i) => (
                                                    <svg key={i} className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                                    </svg>
                                                ))}
                                                <svg className='w-4 h-4 fill-current text-gray-300' viewBox='0 0 20 20'>
                                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                                </svg>
                                            </div>
                                            <span className='text-sm text-gray-600'>4.2</span>
                                        </div>

                                        <button
                                            className='px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-2'
                                            style={{
                                                backgroundColor: item.bgColor,
                                                color: item.accentColor
                                            }}
                                        >
                                            View Collection
                                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div
                                    className='absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500'
                                    style={{ backgroundColor: item.accentColor }}
                                ></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCollectionPage;