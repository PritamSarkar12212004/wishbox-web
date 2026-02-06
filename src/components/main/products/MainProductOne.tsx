import routePath from "../../../consts/routes/routePath";
import MainProductData from "../../../data/MainProductData";
import MainProductCard from "../../card/MainProductCard";

function MainProductOne({ navigate }: {
    navigate: any
}) {
    return (
        <div className="w-full flex flex-col gap-10 py-12 px-4 md:px-8 ">
            <div className="flex flex-col items-center text-center gap-4 ">
                <div className="relative">
                    <span className="relative px-4 py-2 bg-linear-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full uppercase tracking-wider z-10">
                        Premium Collections
                    </span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-linear-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 max-w-4xl leading-tight">
                    Explore Our <span className="relative">
                        <span className="text-amber-500">Exquisite</span>
                        <svg className="absolute -bottom-2 left-0 w-full h-2 text-amber-400" viewBox="0 0 200 10">
                            <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span> Collections
                </h2>

                <p className="text-neutral-600 text-lg max-w-2xl">
                    Handcrafted with precision and passion, each collection tells a unique story of celebration and joy
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MainProductData.map((item, index) => (
                    <MainProductCard item={item} index={index} navigate={navigate} />
                ))}
            </div>

            <div className="relative mt-8 p-8 rounded-2xl overflow-hidden bg-linear-to-r from-amber-500 to-amber-600">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">Ready to Elevate Your Celebrations?</h3>
                        <p className="text-amber-100">Browse all our premium collections in one place</p>
                    </div>
                    <button onClick={() => navigate(routePath.PRIVATE_ROUTE.COLLECTION_PAGE)} className="group cursor-pointer relative px-8 py-4 rounded-xl font-bold text-amber-600 bg-white hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
                        Explore All Collections
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainProductOne;