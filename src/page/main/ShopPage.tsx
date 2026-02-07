import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../../components/ui/animation/ScrollReveal";
import { useNavigate } from "react-router-dom";
import ProductCollectionPopularTag from "../../data/ProductCollectionPopularTag";
import ProductCollectionSuggestion from "../../data/ProductCollectionSuggestion";
import MainTopSellingProductCard from "../../components/card/MainTopSellingProductCard";

function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredCollections, setFilteredCollections] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Define collections first
    const collections = [
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }
        , {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }
        , {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }
        , {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        },
        {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        }, {
            id: 1,
            title: "Party Garlands",
            subtitle: "Premium Handmade Decor",
            bgColor: "#FFE8F0",
            bgColor2: "#FF6B9D",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Party Garlands"
        },
        {
            id: 2,
            title: "Paper Flowers",
            subtitle: "Elegant Floral Creations",
            bgColor: "#F0F7FF",
            bgColor2: "#4A90E2",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Flowers"
        },
        {
            id: 3,
            title: "Birthday Decor",
            subtitle: "Colorful Celebration Sets",
            bgColor: "#F0FFF4",
            bgColor2: "#48BB78",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Birthday Decor"
        },
        {
            id: 4,
            title: "Wedding Backdrops",
            subtitle: "Luxury Paper Designs",
            bgColor: "#FFF7E6",
            bgColor2: "#ED8936",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/8/537264055/KO/LP/HB/151524151/ganpati-decoration-paper-fans-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Wedding Backdrops"
        },
        {
            id: 5,
            title: "Festive Lanterns",
            subtitle: "Traditional & Modern Designs",
            bgColor: "#E6F7FF",
            bgColor2: "#4299E1",
            img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/YU/UB/KR/151524151/product-jpeg-500x500.jpg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Festive Lanterns"
        },
        {
            id: 6,
            title: "Decorative Fans",
            subtitle: "Wall & Ceiling Decor",
            bgColor: "#F9F0FF",
            bgColor2: "#9F7AEA",
            img: "https://5.imimg.com/data5/IOS/Default/2025/9/541891653/JT/OP/BL/151524151/product-jpeg-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Decorative Fans"
        },
        {
            id: 7,
            title: "Paper Streamers",
            subtitle: "Vibrant Party Decorations",
            bgColor: "#FFF0F3",
            bgColor2: "#FC8181",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Paper Streamers"
        },
        {
            id: 8,
            title: "Celebration Banners",
            subtitle: "Custom Text & Designs",
            bgColor: "#F0FFF8",
            bgColor2: "#38B2AC",
            img: "https://5.imimg.com/data5/SELLER/Default/2025/6/523216395/QU/RE/VZ/151524151/aakash-kandil-diwali-lanterns-500x500.jpeg",
            img2: "https://5.imimg.com/data5/SELLER/Default/2025/6/523107255/SJ/BD/BQ/151524151/paper-party-garland-500x500.jpeg",
            category: "Celebration Banners"
        },
    ];

    const events = [
        "Sanskranti", "Diwali", "Holi", "Christmas", "New Year",
        "Eid", "Wedding", "Birthday", "Anniversary", "Ganesh Chaturthi",
        "Navratri", "Durga Puja", "Raksha Bandhan", "Karva Chauth", "Lohri"
    ];

    const categories = [
        "All", "Party Garlands", "Paper Flowers", "Birthday Decor",
        "Wedding Backdrops", "Festive Lanterns", "Decorative Fans",
        "Paper Streamers", "Celebration Banners"
    ];
    const latestProducts = collections.slice(0, 4);

    const popularProducts = collections.slice(4, 8);

    useEffect(() => {
        let filtered = collections;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        if (selectedEvents.length > 0) {
            filtered = filtered.filter(item =>
                selectedEvents.some(event =>
                    item.tags?.some((tag: string) =>
                        tag.toLowerCase().includes(event.toLowerCase())
                    )
                )
            );
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.subtitle.toLowerCase().includes(query) ||
                (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(query)))
            );
        }

        setFilteredCollections(filtered);
    }, [searchQuery, selectedCategory, selectedEvents]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    const handleEventToggle = (event: string) => {
        setSelectedEvents(prev =>
            prev.includes(event)
                ? prev.filter(e => e !== event)
                : [...prev, event]
        );
    };

    const clearAllFilters = () => {
        setSelectedCategory('All');
        setSelectedEvents([]);
        setSearchQuery('');
    };

    const navigation = useNavigate();

    return (
        <ScrollReveal>
            <div className="flex-1 flex flex-col min-h-screen">
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="lg:hidden fixed bottom-6 right-6 z-40 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors shadow-amber-500/30"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </button>

                {showSidebar && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity"
                        onClick={() => setShowSidebar(false)}
                    />
                )}
                <div className='w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-100'>
                    <div className='container mx-auto px-4 md:px-8 py-4'>
                        <div className='relative' ref={searchRef}>
                            <div className='relative group'>
                                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                    <svg className='w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors'
                                        fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                    </svg>
                                </div>
                                <input
                                    type='text'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    placeholder='Search collections, decorations, themes...'
                                    className='w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm'
                                />

                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                                d='M6 18L18 6M6 6l12 12' />
                                        </svg>
                                    </button>
                                )}
                                {showSuggestions && (
                                    <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden animate-fadeIn'>
                                        <div className='p-4 border-b border-gray-100'>
                                            <div className='flex items-center justify-between mb-3'>
                                                <span className='text-sm font-semibold text-gray-700'>Popular Searches</span>
                                                <button
                                                    onClick={() => setShowSuggestions(false)}
                                                    className='text-xs text-gray-400 hover:text-gray-600'
                                                >
                                                    Close
                                                </button>
                                            </div>

                                            <div className='flex flex-wrap gap-2 mb-4'>
                                                {ProductCollectionPopularTag.map((tag, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleSuggestionClick(tag)}
                                                        className='px-3 py-1.5 bg-gray-100 hover:bg-amber-50 text-gray-700 hover:text-amber-700 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-amber-200'
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className='space-y-1 max-h-64 overflow-y-auto'>
                                                {ProductCollectionSuggestion
                                                    .filter(suggestion =>
                                                        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                                                    )
                                                    .map((suggestion, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleSuggestionClick(suggestion)}
                                                            className='w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg flex items-center justify-between group transition-colors'
                                                        >
                                                            <div className='flex items-center gap-3'>
                                                                <svg className='w-4 h-4 text-gray-400 group-hover:text-amber-500'
                                                                    fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                                                </svg>
                                                                <span className='text-gray-700 group-hover:text-gray-900'>{suggestion}</span>
                                                            </div>
                                                            <svg className='w-4 h-4 text-gray-300 group-hover:text-amber-500'
                                                                fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                                                    d='M9 5l7 7-7 7' />
                                                            </svg>
                                                        </button>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className='bg-gray-50 px-4 py-3 border-t border-gray-200'>
                                            <div className='flex items-center justify-between text-sm'>
                                                <span className='text-gray-500'>Press <kbd className='px-2 py-1 bg-white border border-gray-300 rounded text-xs'>Enter</kbd> to search</span>
                                                <span className='text-gray-500'>Press <kbd className='px-2 py-1 bg-white border border-gray-300 rounded text-xs'>Esc</kbd> to close</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 min-h-0">
                    <div className={`
                        ${showSidebar ? 'translate-x-0' : '-translate-x-full'} 
                        lg:translate-x-0 lg:flex
                        fixed lg:sticky lg:top-[88px] left-0 top-0 h-screen lg:h-[calc(100vh-88px)] w-80 bg-white border-r border-gray-200 z-40
                        transition-transform duration-300 ease-in-out
                        shadow-xl lg:shadow-none flex-shrink-0
                    `}>
                        <div className="p-6 overflow-y-auto h-full">
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                                <button
                                    onClick={() => setShowSidebar(false)}
                                    className="lg:hidden text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Clear All Button */}
                            <button
                                onClick={clearAllFilters}
                                className="w-full mb-6 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Clear All Filters
                            </button>

                            {/* Categories Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${selectedCategory === category
                                                ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{category}</span>
                                                {selectedCategory === category && (
                                                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Events Filter Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Events
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {events.map((event) => (
                                        <button
                                            key={event}
                                            onClick={() => handleEventToggle(event)}
                                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedEvents.includes(event)
                                                ? 'bg-amber-500 text-white shadow-md hover:shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                                                }`}
                                        >
                                            {event}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Latest Products Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    Latest Products
                                </h3>
                                <div className="space-y-3">
                                    {latestProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group border border-transparent hover:border-gray-200"
                                            onClick={() => navigation(`/product/${product.id}`)}
                                        >
                                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={product.img}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate">{product.title}</h4>
                                                <p className="text-xs text-gray-500 truncate">{product.subtitle}</p>
                                            </div>
                                            <svg className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Products Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    Popular Products
                                </h3>
                                <div className="space-y-3">
                                    {popularProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group border border-transparent hover:border-gray-200"
                                            onClick={() => navigation(`/product/${product.id}`)}
                                        >
                                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                                                <img
                                                    src={product.img}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded shadow">
                                                    Hot
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate">{product.title}</h4>
                                                <p className="text-xs text-gray-500 truncate">{product.subtitle}</p>
                                            </div>
                                            <svg className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Products Area - Scrollable */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4 md:p-6 lg:p-8">
                            {/* Active Filters */}
                            <div className="mb-6 flex flex-wrap items-center gap-2">
                                {selectedCategory !== 'All' && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm shadow-sm">
                                        {selectedCategory}
                                        <button
                                            onClick={() => setSelectedCategory('All')}
                                            className="ml-1 hover:text-amber-900 transition-colors"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {selectedEvents.map(event => (
                                    <span key={event} className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm shadow-sm">
                                        {event}
                                        <button
                                            onClick={() => handleEventToggle(event)}
                                            className="ml-1 hover:text-blue-900 transition-colors"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                                {(selectedCategory !== 'All' || selectedEvents.length > 0) && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-sm text-gray-600 hover:text-gray-900 underline ml-2"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>

                            {/* Results Count */}
                            <div className="mb-6">
                                <p className="text-gray-600">
                                    Showing <span className="font-semibold text-gray-900">{filteredCollections.length}</span> products
                                </p>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredCollections.map((item: any, index: number) => (
                                    <MainTopSellingProductCard key={`${item.id}-${index}`} item={item} index={index} navigation={navigation} />
                                ))}
                            </div>

                            {/* No Results Message */}
                            {filteredCollections.length === 0 && (
                                <div className="text-center py-16 px-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                                    <p className="text-gray-500 mb-6 max-w-md mx-auto">Try adjusting your filters or search terms to find what you're looking for</p>
                                    <button
                                        onClick={clearAllFilters}
                                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ShopPage;