import { useLocation, useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import MainTopSellingProductCard from '../../components/card/MainTopSellingProductCard';
import { useDispatch } from 'react-redux';

function CollectionListPage() {
    const navigation = useNavigate()
    const location: any = useLocation();
    const { data } = location.state || {};
    const dispatch = useDispatch()
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
    return (
        <ScrollReveal>
            <div className='w-full flex flex-col gap-8 py-12 px-4 md:px-8'>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-0.5 bg-amber-500"></div>
                        <span className="text-amber-500 font-medium tracking-widest text-sm">TOP SELLERS</span>
                        <div className="w-6 h-0.5 bg-amber-500"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
                        Our <span className="text-amber-500">Bestselling</span> Products
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl">
                        Discover our most popular handmade paper decorations loved by thousands of customers worldwide
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map((item: any, index: any) => (
                        <MainTopSellingProductCard
                            key={item._id + '-' + index}
                            item={item}
                            navigation={navigation}
                            colors={colorPalette[index % colorPalette.length]}
                            dispatch={dispatch}
                            isImg={false}
                        />
                    ))}
                </div>
            </div>
        </ScrollReveal>
    )
}

export default CollectionListPage