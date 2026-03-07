import { useLocation, useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import MainTopSellingProductCard from '../../components/card/MainTopSellingProductCard';
import { useDispatch } from 'react-redux';

function CollectionListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};
    const dispatch = useDispatch();

    const colorPalette = [
        { border: '#E6B8C7', bg: '#FFEFF4', accent: '#D97A9A' },
        { border: '#BFDFFF', bg: '#EEF7FF', accent: '#5DADE2' },
        { border: '#BEE5D3', bg: '#ECFFF6', accent: '#52BE80' },
        { border: '#FFE0B3', bg: '#FFF6E8', accent: '#F5B041' },
        { border: '#D7C4F2', bg: '#F4EEFF', accent: '#A569BD' },
        { border: '#BFEDE6', bg: '#EFFFFB', accent: '#48C9B0' },
        { border: '#F5C6C6', bg: '#FFF1F1', accent: '#EC7063' },
        { border: '#D6DBDF', bg: '#F4F6F7', accent: '#7F8C8D' },
    ];

    if (!data || data.length === 0) {
        return (
            <ScrollReveal>
                <div className="flex min-h-[50vh] items-center justify-center px-4 py-12">
                    <p className="text-center text-gray-500">
                        No products found in this collection.
                    </p>
                </div>
            </ScrollReveal>
        );
    }

    return (
        <ScrollReveal>
            <section className="w-full px-4 py-8 md:px-8 md:py-12 lg:py-16">
                {/* Header */}
                <div className="mx-auto mb-8 max-w-7xl text-center md:mb-12">
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="h-0.5 w-6 bg-amber-500" />
                        <span className="text-xs font-medium tracking-widest text-amber-500 sm:text-sm">
                            TOP SELLERS
                        </span>
                        <div className="h-0.5 w-6 bg-amber-500" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Our <span className="text-amber-500">Bestselling</span> Products
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                        Discover our most popular handmade paper decorations loved by
                        thousands of customers worldwide
                    </p>
                </div>

                {/* Product Grid - Two columns on mobile, three on lg, four on xl */}
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6">
                    {data.map((item: any, index: number) => (
                        <MainTopSellingProductCard
                            key={`${item._id}-${index}`}
                            item={item}
                            navigation={navigate}
                            colors={colorPalette[index % colorPalette.length]}
                            dispatch={dispatch}
                            isImg={false}
                        />
                    ))}
                </div>
            </section>
        </ScrollReveal>
    );
}

export default CollectionListPage;