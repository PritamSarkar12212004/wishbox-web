import { useEffect, useRef, useState, useCallback } from 'react';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import ApiCallGalleryData from '../../api/gallery/ApiCallGalleryData';
import type { typeGallery } from '../../types/gallery/typeGallery';

function GalleryPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const images: typeGallery[] = useSelector(
        (state: any) => state.gallery.gallery
    );
    const [columns, setColumns] = useState(4);
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColumns(1);
            else if (width < 768) setColumns(2);
            else if (width < 1024) setColumns(3);
            else setColumns(4);
        };
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await ApiCallGalleryData(dispatch);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load gallery');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dispatch]);

    const handleRetry = useCallback(() => {
        setLoading(true);
        ApiCallGalleryData(dispatch)
            .then(() => setError(null))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [dispatch]);
    const createColumns = (items: typeGallery[], colCount: number) => {
        const cols: typeGallery[][] = Array(colCount)
            .fill(null)
            .map(() => []);
        items.forEach((item, index) => {
            cols[index % colCount].push(item);
        });
        return cols;
    };

    const masonryColumns = createColumns(images || [], columns);
    const SkeletonLoader = () => (
        <div className="flex gap-2 animate-pulse">
            {Array.from({ length: columns }).map((_, colIdx) => (
                <div key={colIdx} className="flex-1 space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-200 rounded-lg"
                            style={{ height: `${Math.random() * 200 + 200}px` }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-white">
                <div className="container mx-auto px-2 py-4" ref={containerRef}>
                    <header className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
                        <p className="text-gray-600 mt-2">Explore our collection</p>
                    </header>

                    {error && (
                        <div className="text-center py-10">
                            <p className="text-red-500 mb-4">{error}</p>
                            <button
                                onClick={handleRetry}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Retry
                            </button>
                        </div>
                    )}

                    {loading && <SkeletonLoader />}

                    {!loading && !error && (!images || images.length === 0) && (
                        <p className="text-center text-gray-500 py-10">No images found.</p>
                    )}

                    {!loading && !error && images && images.length > 0 && (
                        <div className="flex gap-2">
                            {masonryColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="flex-1 space-y-2">
                                    {column.map((image) => {
                                        const highQuality = image.versions.find(
                                            (v) => v.quality === "q100"
                                        );
                                        const lowQuality = image.versions.find(
                                            (v) => v.quality === "q50"
                                        );
                                        const thumbnailUrl = lowQuality?.url || highQuality?.url;
                                        const zoomUrl = highQuality?.url || thumbnailUrl;

                                        return (
                                            <div
                                                key={image._id}
                                                className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100 hover:shadow-xl transition-all duration-300"
                                            >
                                                <Zoom zoomMargin={20}>
                                                    <img
                                                        src={thumbnailUrl}
                                                        data-zoom-image={zoomUrl}
                                                        alt="Gallery"
                                                        loading="lazy"
                                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        style={{ cursor: 'zoom-in', display: 'block' }}
                                                        onError={(e) => {
                                                            e.currentTarget.src = '/placeholder-image.jpg'; // Make sure this exists
                                                        }}
                                                    />
                                                </Zoom>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}

export default GalleryPage;