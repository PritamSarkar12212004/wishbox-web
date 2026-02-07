import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';

function GalleryPage() {
    const [columns, setColumns] = useState(4);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);
    const mediaItems = [
        // Wedding
        { id: 1, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop' },
        { id: 2, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop' },
        { id: 3, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&auto=format&fit=crop' },
        { id: 4, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop' },
        { id: 5, type: 'video', category: 'wedding', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0a4a6?w=800&auto=format&fit=crop' },
        { id: 6, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop' },

        // Festival
        { id: 7, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1603394630682-9b8d6c6b8c6d?w=800&auto=format&fit=crop' },
        { id: 8, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1603398749727-3d5c5d7c4c74?w=800&auto=format&fit=crop' },
        { id: 9, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1572195577046-2f67a2b8bbda?w=800&auto=format&fit=crop' },
        { id: 10, type: 'video', category: 'festival', src: 'https://images.unsplash.com/photo-1603394630818-5d4c16f3a2b8?w=800&auto=format&fit=crop' },
        { id: 11, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop' },
        { id: 12, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop' },

        // Corporate
        { id: 13, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop' },
        { id: 14, type: 'video', category: 'corporate', src: 'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c9e?w=800&auto=format&fit=crop' },
        { id: 15, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop' },
        { id: 16, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop' },

        // Birthday
        { id: 17, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop' },
        { id: 18, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop' },
        { id: 19, type: 'video', category: 'birthday', src: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=800&auto=format&fit=crop' },
        { id: 20, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop' },

        // Baby Shower
        { id: 21, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=800&auto=format&fit=crop' },
        { id: 22, type: 'video', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop' },
        { id: 23, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop' },
        { id: 24, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop' },

        // More images for Pinterest effect
        { id: 25, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&auto=format&fit=crop' },
        { id: 26, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1603394630682-9b8d6c6b8c6d?w=700&auto=format&fit=crop' },
        { id: 27, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&auto=format&fit=crop' },
        { id: 28, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&auto=format&fit=crop' },
        { id: 29, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=700&auto=format&fit=crop' },
        { id: 30, type: 'video', category: 'wedding', src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=700&auto=format&fit=crop' },
        { id: 31, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1603398749727-3d5c5d7c4c74?w=700&auto=format&fit=crop' },
        { id: 32, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c9e?w=700&auto=format&fit=crop' },
        { id: 33, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format&fit=crop' },
        { id: 34, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&auto=format&fit=crop' },
        { id: 35, type: 'video', category: 'wedding', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&auto=format&fit=crop' },
        { id: 36, type: 'image', category: 'festival', src: 'https://images.unsplash.com/photo-1572195577046-2f67a2b8bbda?w=700&auto=format&fit=crop' },
        { id: 37, type: 'image', category: 'corporate', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&auto=format&fit=crop' },
        { id: 38, type: 'image', category: 'birthday', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&auto=format&fit=crop' },
        { id: 39, type: 'image', category: 'baby-shower', src: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=700&auto=format&fit=crop' },
        { id: 40, type: 'image', category: 'wedding', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0a4a6?w=700&auto=format&fit=crop' },
    ];

    // Handle responsive column count
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColumns(2);
            else if (width < 1024) setColumns(3);
            else setColumns(4);
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    // Create Pinterest-style masonry columns
    const createColumns = (items: any, colCount: any) => {
        const columns = Array(colCount).fill().map(() => []);

        items.forEach((item: any, index: any) => {
            const columnIndex = index % colCount;
            columns[columnIndex].push(item);
        });

        return columns;
    };

    const handleImageClick = (media: any) => {
        setSelectedMedia(media);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMedia(null);
    };

    const loadMoreImages = () => {
        setIsLoading(true);
        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const masonryColumns = createColumns(mediaItems, columns);

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-white">

                {/* Pure Image Grid */}
                <div className="container mx-auto px-2 py-4" ref={containerRef}>
                    <div className="flex gap-2 mb-4 justify-end">
                        <button
                            onClick={() => setColumns(2)}
                            className={`px-3 py-1 rounded-full text-sm ${columns === 2 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            2
                        </button>
                        <button
                            onClick={() => setColumns(3)}
                            className={`px-3 py-1 rounded-full text-sm ${columns === 3 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            3
                        </button>
                        <button
                            onClick={() => setColumns(4)}
                            className={`px-3 py-1 rounded-full text-sm ${columns === 4 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            4
                        </button>
                    </div>

                    {/* Masonry Grid - Pure Images Only */}
                    <div className="flex gap-2">
                        {masonryColumns.map((column, columnIndex) => (
                            <div key={columnIndex} className="flex-1">
                                {column.map((item) => (
                                    <div
                                        key={item.id}
                                        className="mb-2 group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100"
                                        onClick={() => handleImageClick(item)}
                                    >
                                        {/* Image Container */}
                                        <div className="relative">
                                            <img
                                                src={item.src}
                                                alt=""
                                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                style={{
                                                    height: 'auto',
                                                    minHeight: '200px'
                                                }}
                                            />

                                            {/* Video Play Indicator */}
                                            {item.type === 'video' && (
                                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                        <span className="text-gray-800 text-lg">▶</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Save Button (Pinterest Style) */}
                                            <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                <div className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                                                    <span>+</span>
                                                    Save
                                                </div>
                                            </button>

                                            {/* Minimal Overlay - Only appears on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-8">
                        <button
                            onClick={loadMoreImages}
                            disabled={isLoading}
                            className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <span className="animate-spin">⟳</span>
                                    Loading...
                                </span>
                            ) : (
                                'Load more images'
                            )}
                        </button>
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        Scroll for more inspiration
                    </p>
                </div>

                {/* Full Screen Modal - Only Image */}
                {isModalOpen && selectedMedia && (
                    <div
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center p-0 cursor-pointer"
                        onClick={closeModal}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl backdrop-blur-sm"
                        >
                            ✕
                        </button>

                        {/* Image Only */}
                        <div className="relative max-w-[90vw] max-h-[90vh]">
                            <img
                                src={selectedMedia.src}
                                alt=""
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />

                            {/* Video Indicator */}
                            {selectedMedia.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
                                        <span className="text-white text-2xl">▶</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </ScrollReveal>
    );
}

export default GalleryPage;