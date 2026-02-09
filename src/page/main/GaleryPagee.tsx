import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GalleryPage() {
    const [columns, setColumns] = useState(4);
    const containerRef = useRef(null);

    // Images with different aspect ratios for Pinterest effect
    const images = [
        // Portrait Images (Tall)
        { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 2, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 3, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0a4a6?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 4, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 5, src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 6, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        
        // Landscape Images (Wide)
        { id: 7, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 8, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 9, src: 'https://images.unsplash.com/photo-1603394630682-9b8d6c6b8c6d?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 10, src: 'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c9e?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 11, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 12, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        
        // Square Images
        { id: 13, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 14, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 15, src: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 16, src: 'https://images.unsplash.com/photo-1572195577046-2f67a2b8bbda?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 17, src: 'https://images.unsplash.com/photo-1603398749727-3d5c5d7c4c74?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 18, src: 'https://images.unsplash.com/photo-1603394630818-5d4c16f3a2b8?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        
        // More portrait images for variety
        { id: 19, src: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 20, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 21, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        { id: 22, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=900&fit=crop&crop=center', aspect: 'portrait' },
        
        // More landscape images for variety
        { id: 23, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 24, src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        { id: 25, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900&h=600&fit=crop&crop=center', aspect: 'landscape' },
        
        // More square images for variety
        { id: 26, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 27, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        { id: 28, src: 'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c9e?w=600&h=600&fit=crop&crop=center', aspect: 'square' },
        
        // Additional images for Pinterest effect
        { id: 29, src: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=900&h=1200&fit=crop&crop=center', aspect: 'portrait' },
        { id: 30, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&crop=center', aspect: 'landscape' },
        { id: 31, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=700&fit=crop&crop=center', aspect: 'square' },
        { id: 32, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop&crop=center', aspect: 'portrait' },
        { id: 33, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&crop=center', aspect: 'landscape' },
        { id: 34, src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&h=700&fit=crop&crop=center', aspect: 'square' },
        { id: 35, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=1200&fit=crop&crop=center', aspect: 'portrait' },
        { id: 36, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop&crop=center', aspect: 'landscape' },
        { id: 37, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&h=700&fit=crop&crop=center', aspect: 'square' },
        { id: 38, src: 'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c9e?w=800&h=1200&fit=crop&crop=center', aspect: 'portrait' },
        { id: 39, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop&crop=center', aspect: 'landscape' },
        { id: 40, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=700&fit=crop&crop=center', aspect: 'square' },
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

        // Distribute images to columns based on their aspect ratio for better balance
        items.forEach((item: any, index: any) => {
            const columnIndex = index % colCount;
            columns[columnIndex].push(item);
        });

        return columns;
    };

    const masonryColumns = createColumns(images, columns);

    // Get height based on aspect ratio
    const getHeightClass = (aspect: string) => {
        switch(aspect) {
            case 'portrait': return 'h-[350px] md:h-[400px]';
            case 'landscape': return 'h-[250px] md:h-[300px]';
            case 'square': return 'h-[300px] md:h-[350px]';
            default: return 'h-[300px]';
        }
    };


    return (
        <ScrollReveal>
            <div className="min-h-screen bg-white">
                {/* Pure Image Grid */}
                <div className="container mx-auto px-2 py-4" ref={containerRef}>
                    {/* Column Controls */}
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

                    {/* Masonry Grid with Image Zoom - FIXED CLICK ISSUE */}
                    <div className="flex gap-2">
                        {masonryColumns.map((column, columnIndex) => (
                            <div key={columnIndex} className="flex-1">
                                {column.map((image: any) => (
                                    <div
                                        key={image.id}
                                        className="mb-2 group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Simple Zoom wrapper - no extra divs that might interfere */}
                                        <Zoom 
                                            zoomMargin={40}
                                            overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
                                            transitionDuration={300}
                                        >
                                            <img
                                                src={image.src}
                                                alt=""
                                                className={`w-full object-cover transition-transform duration-300 ${getHeightClass(image.aspect)}`}
                                                style={{ 
                                                    cursor: 'zoom-in',
                                                    display: 'block'
                                                }}
                                            />
                                        </Zoom>
                                        
                                        {/* Hover effect overlay - separate from zoom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-8">
                        <button className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-all duration-300">
                            Load more images
                        </button>
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        Click any image to zoom • Scroll for more inspiration
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
}

export default GalleryPage;