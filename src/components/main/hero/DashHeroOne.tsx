import routePath from "../../../consts/routes/routePath";

function DashHeroOne({ navigation }: { navigation: any }) {
    return (
        <div className='w-full rounded-3xl mt-6 overflow-hidden relative group'>
            {/* Decorative background circles - smaller on mobile */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-rose-400 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Left column */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Limited Time Offer</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                        <span className="bg-linear-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                            Premium Paper
                        </span>
                        <br />
                        <span className="text-neutral-800">Decor Collections</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        Discover our handcrafted sustainable paper decorations that transform ordinary spaces into extraordinary celebrations. Loved by thousands worldwide.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                        <button
                            onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOP_PAGE)}
                            className="group/btn relative cursor-pointer px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                        >
                            Shop Collection
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                                <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shine"></div>
                            </div>
                        </button>

                        <button
                            onClick={() => navigation(routePath.PRIVATE_ROUTE.COLLECTIONIMG_PAGE)}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl cursor-pointer font-bold text-neutral-700 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                        >
                            View Gallery
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right column - image with floating badges */}
                <div className="relative mt-4 sm:mt-6 lg:mt-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-700">
                        <img
                            src="/src/assets/images/premium_paper_decoration.png"
                            alt="Premium Paper Decoration"
                            className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                            style={{ aspectRatio: '4/3' }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-amber-700 shadow-lg">
                            🔥 Best Seller
                        </div>
                    </div>

                    {/* Decorative background shapes */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-linear-to-br from-amber-400/20 to-rose-400/20 rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-700"></div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-linear-to-br from-rose-400/20 to-amber-400/20 rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-700"></div>

                    {/* Floating discount badge */}
                    <div className="absolute -bottom-4 left-2 sm:left-4 md:left-8 bg-white shadow-xl rounded-lg sm:rounded-xl p-2 sm:p-3 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-600">40% OFF</div>
                            <div className="text-[10px] sm:text-xs text-neutral-500">Today Only</div>
                        </div>
                    </div>

                    {/* Free shipping badge */}
                    <div className="absolute top-1/4 -right-2 sm:-right-4 bg-linear-to-r from-rose-500 to-amber-500 text-white shadow-xl rounded-lg sm:rounded-xl p-2 sm:p-3 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                            <div className="font-bold text-xs sm:text-sm">Free</div>
                            <div className="text-[10px] sm:text-xs">Shipping</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-amber-50/50 to-transparent"></div>
                <svg className="relative w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="fill-amber-100"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="fill-amber-100"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="fill-amber-100"></path>
                </svg>
            </div>

            {/* Sparkles */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${1 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default DashHeroOne;