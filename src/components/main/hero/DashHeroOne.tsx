import routePath from "../../../consts/routes/routePath"

function DashHeroOne({ navigation }: {
    navigation: any
}) {
    return (
        <div className='w-full rounded-3xl mt-6 overflow-hidden relative group bg-gradient-to-br from-rose-50 via-amber-50 to-white shadow-2xl border border-amber-100'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Left Text Content */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm font-bold uppercase tracking-wider">Limited Time Offer</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                            Premium Paper
                        </span>
                        <br />
                        <span className="text-neutral-800">Decor Collections</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        Discover our handcrafted sustainable paper decorations that transform ordinary spaces into extraordinary celebrations. Loved by thousands worldwide.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 pt-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">5K+</div>
                            <div className="text-sm text-neutral-500">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">200+</div>
                            <div className="text-sm text-neutral-500">Unique Designs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">4.9★</div>
                            <div className="text-sm text-neutral-500">Average Rating</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                        <button 
                            onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOP_PAGE)}
                            className="group/btn relative px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
                        >
                            Shop Collection
                            <svg 
                                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            {/* Shine effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shine"></div>
                            </div>
                        </button>
                        
                        <button 
                            onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOP_PAGE)}
                            className="px-8 py-4 rounded-2xl font-bold text-neutral-700 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            View Gallery
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-4 pt-8">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div 
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-rose-400"
                                ></div>
                            ))}
                        </div>
                        <div className="text-sm text-neutral-600">
                            <span className="font-semibold">Join 5,000+</span> satisfied customers
                        </div>
                    </div>
                </div>

                {/* Right Image Content */}
                <div className="relative">
                    {/* Main Image Container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-700">
                        <img
                            src="/src/assets/images/premium_paper_decoration.png"
                            alt="Premium Paper Decoration"
                            className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                            style={{ aspectRatio: '4/3' }}
                        />
                        
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-amber-700 shadow-lg">
                            🔥 Best Seller
                        </div>
                    </div>

                    {/* Decorative Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-700"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-amber-400/20 rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-700"></div>

                    {/* Floating Badges */}
                    <div className="absolute -bottom-4 left-8 bg-white shadow-xl rounded-xl p-3 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">40% OFF</div>
                            <div className="text-xs text-neutral-500">Today Only</div>
                        </div>
                    </div>

                    <div className="absolute top-1/4 -right-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xl rounded-xl p-3 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                            <div className="font-bold">Free</div>
                            <div className="text-xs">Shipping</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-50/50 to-transparent"></div>
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

            {/* Animated Background Particles */}
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
    )
}

export default DashHeroOne