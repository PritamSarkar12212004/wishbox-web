import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ProductCollectionSuggestion from '../../../data/ProductCollectionSuggestion';
import ProductCollcationData from '../../../data/ProductCollcationData';
import ProductCollectionCard from '../../../components/card/ProductCollectionCard';
import ProductCollectionPopularTag from '../../../data/ProductCollectionPopularTag';
import ScrollReveal from '../../../components/ui/animation/ScrollReveal';

function ProductCollectionPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredCollections, setFilteredCollections] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const searchRef = useRef(null);
    useEffect(() => {
        let filtered = ProductCollcationData;

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

    const navigation = useNavigate()
    return (
        <ScrollReveal>
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
                                                {ProductCollectionPopularTag.map((tag, index) => (
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
                                                {ProductCollectionSuggestion
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
                                <ProductCollectionCard index={index} item={item} navigation={navigation} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>

    )
}

export default ProductCollectionPage;