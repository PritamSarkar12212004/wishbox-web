import { useNavigate } from "react-router-dom";
import routePath from "../../../consts/routes/routePath";

function ShowListPoduct() {

  const collections = [
    {
      id: 1,
      title: "Party Garlands",
      subtitle: "Premium Handmade Decor",
      bgColor: "#FFE8F0",
      bgColor2: "#FF6B9D",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 2,
      title: "Paper Flowers",
      subtitle: "Elegant Floral Creations",
      bgColor: "#F0F7FF",
      bgColor2: "#4A90E2",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 3,
      title: "Birthday Decor",
      subtitle: "Colorful Celebration Sets",
      bgColor: "#F0FFF4",
      bgColor2: "#48BB78",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 4,
      title: "Wedding Backdrops",
      subtitle: "Luxury Paper Designs",
      bgColor: "#FFF7E6",
      bgColor2: "#ED8936",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 5,
      title: "Festive Lanterns",
      subtitle: "Traditional & Modern Designs",
      bgColor: "#E6F7FF",
      bgColor2: "#4299E1",
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 6,
      title: "Decorative Fans",
      subtitle: "Wall & Ceiling Decor",
      bgColor: "#F9F0FF",
      bgColor2: "#9F7AEA",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 7,
      title: "Paper Streamers",
      subtitle: "Vibrant Party Decorations",
      bgColor: "#FFF0F3",
      bgColor2: "#FC8181",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 8,
      title: "Celebration Banners",
      subtitle: "Custom Text & Designs",
      bgColor: "#F0FFF8",
      bgColor2: "#38B2AC",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 1,
      title: "Party Garlands",
      subtitle: "Premium Handmade Decor",
      bgColor: "#FFE8F0",
      bgColor2: "#FF6B9D",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 2,
      title: "Paper Flowers",
      subtitle: "Elegant Floral Creations",
      bgColor: "#F0F7FF",
      bgColor2: "#4A90E2",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 3,
      title: "Birthday Decor",
      subtitle: "Colorful Celebration Sets",
      bgColor: "#F0FFF4",
      bgColor2: "#48BB78",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 4,
      title: "Wedding Backdrops",
      subtitle: "Luxury Paper Designs",
      bgColor: "#FFF7E6",
      bgColor2: "#ED8936",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 5,
      title: "Festive Lanterns",
      subtitle: "Traditional & Modern Designs",
      bgColor: "#E6F7FF",
      bgColor2: "#4299E1",
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 6,
      title: "Decorative Fans",
      subtitle: "Wall & Ceiling Decor",
      bgColor: "#F9F0FF",
      bgColor2: "#9F7AEA",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 7,
      title: "Paper Streamers",
      subtitle: "Vibrant Party Decorations",
      bgColor: "#FFF0F3",
      bgColor2: "#FC8181",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 8,
      title: "Celebration Banners",
      subtitle: "Custom Text & Designs",
      bgColor: "#F0FFF8",
      bgColor2: "#38B2AC",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 1,
      title: "Party Garlands",
      subtitle: "Premium Handmade Decor",
      bgColor: "#FFE8F0",
      bgColor2: "#FF6B9D",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 2,
      title: "Paper Flowers",
      subtitle: "Elegant Floral Creations",
      bgColor: "#F0F7FF",
      bgColor2: "#4A90E2",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 3,
      title: "Birthday Decor",
      subtitle: "Colorful Celebration Sets",
      bgColor: "#F0FFF4",
      bgColor2: "#48BB78",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 4,
      title: "Wedding Backdrops",
      subtitle: "Luxury Paper Designs",
      bgColor: "#FFF7E6",
      bgColor2: "#ED8936",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 5,
      title: "Festive Lanterns",
      subtitle: "Traditional & Modern Designs",
      bgColor: "#E6F7FF",
      bgColor2: "#4299E1",
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 6,
      title: "Decorative Fans",
      subtitle: "Wall & Ceiling Decor",
      bgColor: "#F9F0FF",
      bgColor2: "#9F7AEA",
      img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 7,
      title: "Paper Streamers",
      subtitle: "Vibrant Party Decorations",
      bgColor: "#FFF0F3",
      bgColor2: "#FC8181",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
    {
      id: 8,
      title: "Celebration Banners",
      subtitle: "Custom Text & Designs",
      bgColor: "#F0FFF8",
      bgColor2: "#38B2AC",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
      img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg"
    },
  ];

  const navigation = useNavigate()
  return (
    <div className='w-full flex flex-col gap-8 py-12 px-4 md:px-8'>
      <div className="   mx-auto">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-linear-to-r from-amber-100/20 to-rose-100/20 rounded-3xl blur-3xl"></div>
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent"></div>
              <span className="text-amber-600 font-light tracking-[0.3em] text-sm">PREMIUM COLLECTIONS</span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
              Handcrafted <span className="font-normal italic text-amber-600">Paper</span> Elegance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Discover our exquisite collection of premium handmade paper decorations,
              crafted with precision and passion for every celebration.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <button
              onClick={() => navigation(routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE)}
              key={item.id + '-' + index}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Background linear accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: item.bgColor2 }}
              ></div>

              {/* Image container with hover effect */}
              <div className="relative h-64 overflow-hidden">
                {/* Default Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                />
                {/* Hover Image */}
                <img
                  src={item.img2}
                  alt={item.title + ' hover'}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.subtitle}
                </p>

                {/* Price and Rating */}
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

                {/* View Product Button */}
                <button
                  className="w-full py-3 cursor-pointer px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group/btn"
                  style={{
                    backgroundColor: item.bgColor2,
                    backgroundImage: `linear-linear(135deg, ${item.bgColor2}, ${item.bgColor}`
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


            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ShowListPoduct;