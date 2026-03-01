import type { Product } from '../../types/product/typeProduct';
import routePath from '../../consts/routes/routePath';
function MainTopSellingProductCard({
    item,
    navigation,
    colors,
}: {
    item: Product;
    navigation: any;
    colors: {
        border: string;
        bg: string;
        accent: string;
    };
}) {
    const primaryImage = item.images?.primary?.[0]?.url;
    const hoverImage = item.images?.primary?.[1]?.url;
    const navigatePage = () => {
        navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE, {
            state: {
                navigateData: item,
            }
        })
    }
    return (
        <div
            className="group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{
                backgroundColor: colors.bg,
                border: `1px solid ${colors.border}`
            }}
            onClick={() => navigatePage()}
        >
            {/* Accent Top Line */}
            <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{ backgroundColor: colors.accent }}
            />

            {/* Image */}
            <div className="relative h-52 overflow-hidden rounded-t-2xl bg-white">
                {primaryImage && (
                    <img
                        src={primaryImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                )}

                {hoverImage && (
                    <img
                        src={hoverImage}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                )}

                {/* Bestseller Badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                            backgroundColor: "white",
                            border: `1px solid ${colors.border}`,
                            color: colors.accent
                        }}
                    >
                        Bestseller
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2">
                    {item.subtitle}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                            ₹{item.pricing.salePrice}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            ₹{item.pricing.originalPrice}
                        </span>
                    </div>

                    <span
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                            backgroundColor: "white",
                            border: `1px solid ${colors.border}`,
                            color: "#555"
                        }}
                    >
                        {item.pricing.originalPrice > 0
                            ? `${Math.round(
                                ((item.pricing.originalPrice - item.pricing.salePrice) /
                                    item.pricing.originalPrice) *
                                100
                            )}% OFF`
                            : "0% OFF"}
                    </span>
                </div>

                <button
                    className="w-full py-2 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{
                        backgroundColor: "white",
                        border: `1px solid ${colors.border}`,
                        color: "#333"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.bg;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                    }}
                >
                    View Product
                </button>

            </div>
        </div>
    );
}

export default MainTopSellingProductCard;