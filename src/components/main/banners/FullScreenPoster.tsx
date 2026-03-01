import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BANNERS = [
    {
        url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
        title: "Artistic Painting Kit",
        price: "₹1,499",
        badge: "Premium"
    },
    {
        url: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2070&auto=format&fit=crop",
        title: "Calligraphy & Ink Set",
        price: "₹1,249",
        badge: "Limited"
    },
    {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        title: "Handmade Craft Box",
        price: "₹999",
        badge: "Best Seller"
    },
    {
        url: "https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=2070&auto=format&fit=crop",
        title: "Creative Stationery Pack",
        price: "₹799",
        badge: "New Arrival"
    }
];

const FullScreenPoster = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full flex flex-col gap-4">

            <div className="w-full relative overflow-hidden shadow-2xl rounded-3xl bg-black" style={{ aspectRatio: '32/9' }}>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 w-full h-full flex items-center"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            duration: 1.2,
                            ease: "linear"
                        }}
                    >
                        {/* Background Image */}
                        <img
                            src={BANNERS[currentIndex].url}
                            alt={BANNERS[currentIndex].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />

                        {/* Product Information Overlay */}
                        <div className="relative z-20 px-16 flex flex-col items-start max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white mb-4"
                            >
                                {BANNERS[currentIndex].badge}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-5xl font-black text-white tracking-tight mb-3 drop-shadow-2xl"
                            >
                                {BANNERS[currentIndex].title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-amber-400 text-3xl font-black drop-shadow-lg"
                            >
                                {BANNERS[currentIndex].price}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Subtle Gradient for bottom depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
            </div>

        </div>
    )
}

export default FullScreenPoster;
