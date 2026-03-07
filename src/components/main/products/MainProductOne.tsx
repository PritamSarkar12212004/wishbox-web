// MainProductOne.tsx
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routePath from "../../../consts/routes/routePath";
import MainProductCard from "../../card/MainProductCard";
import type { RootState } from "../../../services/store/store";
import type { TypeCollection } from "../../../types/collections/typeCollection";

function MainProductOne() {
  const navigate = useNavigate();
  const { collection: data, loading } = useSelector(
    (state: RootState) => state.collection
  );
  if (loading) {
    return (
      <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          <div className="h-8 w-48 bg-neutral-200 rounded-full animate-pulse" />
          <div className="h-12 w-96 max-w-full bg-neutral-200 rounded-lg animate-pulse" />
          <div className="h-6 w-64 bg-neutral-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl bg-white shadow-md p-4 animate-pulse"
            >
              <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-neutral-200 rounded-lg mb-4" />
              <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-neutral-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-12  bg-neutral-50">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
        <div className="relative">
          <span className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider shadow-lg z-10">
            Premium Collections
          </span>
          <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 max-w-4xl leading-tight">
          Explore Our{" "}
          <span className="relative inline-block">
            <span className="text-amber-500">Exquisite</span>
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 text-amber-400"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 Q50,0 100,5 T200,5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>{" "}
          Collections
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl">
          Handcrafted with precision and passion, each collection tells a
          unique story of celebration and joy
        </p>
      </div>

      {/* Card Grid */}
      {data && data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {data.map((item: TypeCollection, index: number) => (
            <MainProductCard key={item._id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-500 py-8">No collections found.</p>
      )}

      {/* Call-to-Action Banner */}
      <div className="relative mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 group hover:shadow-2xl transition-shadow duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
              Ready to Elevate Your Celebrations?
            </h3>
            <p className="text-amber-100 text-sm sm:text-base">
              Browse all our premium collections in one place
            </p>
          </div>
          <button
            onClick={() => navigate(routePath.PRIVATE_ROUTE.COLLECTION_PAGE)}
            className="group/btn cursor-pointer relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold text-amber-600 bg-white hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600"
            aria-label="Explore all collections"
          >
            Explore All Collections
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainProductOne;