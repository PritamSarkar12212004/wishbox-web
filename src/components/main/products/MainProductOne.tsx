import routePath from "../../../consts/routes/routePath";

function MainProductOne({ navigate }: {
    navigate: any
}) {
    const collections = [
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            accentColor: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 42,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            accentColor: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 36,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            accentColor: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 28,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            accentColor: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            productsCount: 19,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern",
            bgColor: "#E6F7FF",
            accentColor: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            productsCount: 31,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            accentColor: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            productsCount: 24,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            accentColor: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            productsCount: 47,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        },
        {
            id: 8,
            title: "Seasonal Decor",
            subtitle: "Holiday Special Editions",
            bgColor: "#F0FFF8",
            accentColor: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            productsCount: 22,
            navigate: routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
        }
    ];

    return (
        <div className="w-full flex flex-col gap-10 py-12 px-4 md:px-8 ">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center gap-4 ">
                <div className="relative">
                    <span className="relative px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full uppercase tracking-wider z-10">
                        Premium Collections
                    </span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
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

            {/* Collections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collections.map((item, index) => (
                    <button onClick={() => navigate(item.navigate)}
                        key={item.id + '-' + index}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Background pattern */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{ backgroundColor: item.accentColor }}
                        ></div>

                        {/* Card Header */}
                        <div className="relative p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-800 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                                <span className="px-3 py-1 text-xs font-bold rounded-full text-white shadow-sm"
                                    style={{ backgroundColor: item.accentColor }}>
                                    {item.productsCount}+ items
                                </span>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative px-6">
                            <div
                                className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10"></div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

                                {/* Quick action button */}
                                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg z-20">
                                    <svg className="w-5 h-5" style={{ color: item.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-6 pt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-amber-400">
                                        {[...Array(4)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600">4.2</span>
                                </div>

                                <button
                                    className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.accentColor
                                    }}
                                >
                                    View Collection
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Decorative corner */}
                        <div
                            className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                            style={{ backgroundColor: item.accentColor }}
                        ></div>
                    </button>
                ))}
            </div>

            {/* CTA Section */}
            <div className="relative mt-8 p-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
                {/* Background pattern */}
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