import type { Product } from '../../types/product/typeProduct';
import routePath from '../../consts/routes/routePath';
import { tempProductShowData } from '../../services/store/slice/product/tempProductSlice';

function MainTopSellingProductCard({
    item,
    navigation,
    colors,
    isImg,
    dispatch,
}: {
    item: Product;
    dispatch?: any;
    isImg?: boolean;
    navigation: any;
    colors: {
        border: string;
        bg: string;
        accent: string;
    };
}) {
    const primaryImage = item.images?.primary?.[0]?.url;
    const hoverImage = item.images?.primary?.[1]?.url;

    const navigatePage = async () => {
        await dispatch(tempProductShowData(item));
        navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE, {
            state: {
                navigateData: isImg ? null : item,
                isImg,
            },
        });
    };

    const discountPercentage =
        item.pricing.originalPrice > 0
            ? Math.round(
                ((item.pricing.originalPrice - item.pricing.salePrice) /
                    item.pricing.originalPrice) *
                100
            )
            : 0;

    return (
        <article
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            style={{
                backgroundColor: colors.bg,
                border: `1px solid ${colors.border}`,
            }}
            onClick={navigatePage}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    navigatePage();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${item.title}`}
        >
            {/* Accent top line */}
            <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: colors.accent }}
            />

            {/* Image with fixed aspect ratio */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
                {primaryImage && (
                    <img
                        src={primaryImage}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        loading="lazy"
                    />
                )}

                {hoverImage && (
                    <img
                        src={hoverImage}
                        alt={`${item.title} alternate view`}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        loading="lazy"
                    />
                )}

                {/* Bestseller badge */}
                <div className="absolute left-2 top-2 z-10 sm:left-3 sm:top-3">
                    <span
                        className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
                        style={{
                            border: `1px solid ${colors.border}`,
                            color: colors.accent,
                        }}
                    >
                        Bestseller
                    </span>
                </div>

                {/* Discount badge (if applicable) */}
                {discountPercentage > 0 && (
                    <div className="absolute right-2 top-2 z-10 sm:right-3 sm:top-3">
                        <span
                            className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white sm:px-3 sm:py-1 sm:text-xs"
                            style={{ backgroundColor: colors.accent }}
                        >
                            {discountPercentage}% OFF
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-2 sm:p-3 md:p-4">
                <h3 className="mb-1 text-xs font-semibold text-gray-900 line-clamp-1 sm:text-sm md:text-base">
                    {item.title}
                </h3>

                <p className="mb-2 text-[10px] text-gray-500 line-clamp-2 sm:text-xs md:text-sm">
                    {item.subtitle}
                </p>

                {/* Price */}
                <div className="mb-2 flex flex-wrap items-center gap-1 sm:mb-3 sm:gap-2">
                    <span className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        ₹{item.pricing.salePrice}
                    </span>
                    {item.pricing.originalPrice > item.pricing.salePrice && (
                        <span className="text-[9px] text-gray-400 line-through sm:text-xs">
                            ₹{item.pricing.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default MainTopSellingProductCard;