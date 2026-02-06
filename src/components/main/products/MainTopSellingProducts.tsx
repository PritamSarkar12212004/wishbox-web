import { useNavigate } from "react-router-dom";
import MainTopSellingProductCard from "../../card/MainTopSellingProductCard";

function MainTopSellingProducts() {
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
        }
    ];
    const navigation = useNavigate()
    return (
        <div className='w-full flex flex-col gap-8 py-12 px-4 md:px-8'>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-0.5 bg-amber-500"></div>
                    <span className="text-amber-500 font-medium tracking-widest text-sm">TOP SELLERS</span>
                    <div className="w-6 h-0.5 bg-amber-500"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
                    Our <span className="text-amber-500">Bestselling</span> Products
                </h2>
                <p className="text-gray-600 text-center max-w-2xl">
                    Discover our most popular handmade paper decorations loved by thousands of customers worldwide
                </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collections.map((item, index) => (
                    <MainTopSellingProductCard item={item} index={index} navigation={navigation} />
                ))}
            </div>
        </div>
    );
}

export default MainTopSellingProducts;