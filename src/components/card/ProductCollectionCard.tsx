import routePath from "../../consts/routes/routePath"

function ProductCollectionCard({ item, index, navigation }: {
    item: any;
    index: any;
    navigation: any
}) {
    return (
        <button
            key={item.id + '-' + index}
            onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE)}
            className='group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100'
        >
            {/* Background pattern */}
            <div
                className='absolute inset-0 opacity-5'
                style={{ backgroundColor: item.accentColor }}
            ></div>

            {/* Card Header */}
            <div className='relative p-6'>
                <div className='flex items-start justify-between mb-4'>
                    <div>
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700'>
                                {item.category}
                            </span>
                            <span className='px-2 py-1 text-xs font-bold rounded-full text-white shadow-sm'
                                style={{ backgroundColor: item.accentColor }}>
                                {item.productsCount}+ items
                            </span>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors'>
                            {item.title}
                        </h3>
                        <p className='text-gray-600 text-sm mt-1'>
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div className='relative px-6'>
                <div
                    className='relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500'
                    style={{ backgroundColor: item.bgColor }}
                >
                    <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10'></div>
                    <img
                        src={item.img}
                        alt={item.title}
                        className='w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700'
                    />

                    {/* Overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'></div>

                    {/* Quick action button */}
                    <div className='absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg z-20'>
                        <svg className='w-5 h-5' style={{ color: item.accentColor }} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className='p-6 pt-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='flex text-amber-400'>
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                            ))}
                            <svg className='w-4 h-4 fill-current text-gray-300' viewBox='0 0 20 20'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                        </div>
                        <span className='text-sm text-gray-600'>4.2</span>
                    </div>

                    <button
                        className='px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-2'
                        style={{
                            backgroundColor: item.bgColor,
                            color: item.accentColor
                        }}
                    >
                        View Collection
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Decorative corner */}
            <div
                className='absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500'
                style={{ backgroundColor: item.accentColor }}
            ></div>
        </button>)
}

export default ProductCollectionCard