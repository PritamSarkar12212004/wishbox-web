import MainTopSellingProductCard from "../../card/MainTopSellingProductCard";
import routePath from "../../../consts/routes/routePath";
import { useSelector } from "react-redux";
import type { Product } from "../../../types/product/typeProduct";

function MainTopSellingProducts({ navigation, dispatch }: any) {
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
    const data: Product[] = useSelector((state: any) => state.product.product)
    return (
        <div className='w-full flex flex-col gap-5 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-10  sm:px-4 md:px-6 lg:px-8'>
            <div className="w-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
                <div className="relative inline-block">
                    <span className="relative px-3 py-1.5 bg-linear-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider z-10">
                        🏆 Top Sellers
                    </span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 sm:w-12 sm:h-1 bg-linear-to-r from-amber-400/50 via-amber-400 to-amber-400/50"></div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mt-1">
                    Our <span className="bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Bestselling</span> Products
                </h2>
                <p className="text-gray-600 text-center text-sm sm:text-base max-w-xl">
                    Handpicked favorites loved by thousands
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {data.map((item, index) => (
                    <MainTopSellingProductCard
                        key={item._id + '-' + index}
                        item={item}
                        index={index}
                        navigation={navigation}
                        colors={colorPalette[index % colorPalette.length]}
                        dispatch={dispatch}
                        isImg={false}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4 sm:mt-6">
                <button
                    onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOP_PAGE)}
                    className="px-6 py-3 text-sm sm:text-base font-medium cursor-pointer text-gray-700 border border-gray-300 rounded-full hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                    View All Products
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MainTopSellingProducts;