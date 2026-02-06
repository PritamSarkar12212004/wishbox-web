import routePath from '../../consts/routes/routePath';

function MainTopSellingProductCard({ item, index, navigation }: any) {
    return (
        <button
            onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE)}
            key={item.id + '-' + index}
            className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            style={{ backgroundColor: item.bgColor }}
        >
            <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: item.bgColor2 }}
            ></div>
            <div className="relative h-64 overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                />
                <img
                    src={item.img2}
                    alt={item.title + ' hover'}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full text-white shadow-md"
                        style={{ backgroundColor: item.bgColor2 }}>
                        Bestseller
                    </span>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-amber-500 to-amber-600 text-white shadow-md">
                        -40%
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {item.subtitle}
                </p>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold" style={{ color: item.bgColor2 }}>
                            ₹299
                        </span>
                        <span className="text-gray-500 line-through text-sm ml-2">₹499</span>
                    </div>
                    <div className="flex items-center">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm ml-2">(4.8)</span>
                    </div>
                </div>
                <button
                    className="w-full py-3 cursor-pointer px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group/btn"
                    style={{
                        backgroundColor: item.bgColor2,
                        backgroundImage: `linear-gradient(135deg, ${item.bgColor2}, ${item.bgColor}`
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}
                >
                    View Product
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </button>)
}

export default MainTopSellingProductCard