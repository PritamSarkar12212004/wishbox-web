import { useNavigate } from "react-router-dom";
import type { TypeCollection } from "../../types/collections/typeCollection";
import routePath from "../../consts/routes/routePath";

function MainProductCard({ item, index }: { item: TypeCollection; index: number }) {
  const rating = 4.2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const navigate = useNavigate()
  const navugateScreen = (item: any) => {
    navigate(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE, {
      state: {
        data: item
      }
    })
  }
  return (
    <button
      onClick={() => navugateScreen(item)}
      className="group relative block cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      aria-labelledby={`collection-title-${index}`}
    >
      {/* Theme background overlay */}
      <div
        className="absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10"
        style={{ backgroundColor: item.theme?.secondaryColor || "" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative p-3 sm:p-4 md:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex-1 min-w-0 pr-2">
            <h3
              id={`collection-title-${index}`}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors truncate"
            >
              {item.title}
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2">
              {item.subtitle}
            </p>
          </div>
          <span
            className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-bold rounded-full text-white shadow-sm flex-shrink-0"
            style={{ backgroundColor: item.theme?.secondaryColor || "" }}
            aria-label={`${item.totalProducts} products`}
          >
            {item.totalProducts}+
          </span>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative px-3 sm:px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-500"
          style={{ backgroundColor: item.theme?.secondaryColor || "" }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10"
            aria-hidden="true"
          />
          <img
            src={item.coverImages[0].url}
            alt={item.title}
            className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
            aria-hidden="true"
          />
          {/* Quick view icon (decorative) */}
          <div
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg z-20"
            aria-hidden="true"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              style={{ color: item.theme?.secondaryColor || "" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 sm:p-4 md:p-6 pt-2 sm:pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          {/* Rating */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex text-amber-400" aria-label={`Rating: ${rating} out of 5`}>
              {[...Array(fullStars)].map((_, i) => (
                <svg
                  key={`full-${i}`}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {hasHalfStar && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#halfStar)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              )}
              {[...Array(emptyStars)].map((_, i) => (
                <svg
                  key={`empty-${i}`}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-gray-300"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600">{rating}</span>
          </div>

          {/* View button (now decorative or could be a separate action) */}
          <span
            className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 inline-flex items-center gap-1 sm:gap-2 group-hover:shadow-md group-hover:scale-105"
            style={{
              backgroundColor: item.theme?.secondaryColor || "",
              color: item.theme?.primaryColor || "",
            }}
            aria-hidden="true"
          >
            View
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-bl-xl sm:rounded-bl-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: item.theme?.secondaryColor || "" }}
        aria-hidden="true"
      />
    </button>
  );
}

export default MainProductCard;