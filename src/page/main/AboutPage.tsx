import { useState } from 'react';
import ScrollReveal from "../../components/ui/animation/ScrollReveal";
import { useNavigate } from 'react-router-dom';

function AboutPage() {
    const [activeTab, setActiveTab] = useState('story');
    const navigate = useNavigate();

    const teamMembers = [
        {
            id: 1,
            name: "Priya Sharma",
            role: "Founder & Creative Director",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
            bio: "12+ years in paper craft industry. Passionate about sustainable decorations.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        },
        {
            id: 2,
            name: "Rajesh Patel",
            role: "Operations Head",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            bio: "Expert in supply chain and logistics. Ensures timely delivery of every order.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        },
        {
            id: 3,
            name: "Ananya Singh",
            role: "Lead Designer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=400&h=400&fit=crop&crop=face",
            bio: "Creates stunning designs inspired by Indian festivals and traditions.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        },
        {
            id: 4,
            name: "Vikram Mehta",
            role: "Production Manager",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            bio: "Oversees quality control and ensures each product meets our standards.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        },
        {
            id: 5,
            name: "Sunita Reddy",
            role: "Customer Relations",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
            bio: "Makes sure every customer has an exceptional experience with us.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        },
        {
            id: 6,
            name: "Amit Joshi",
            role: "Sustainability Head",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            bio: "Leads our eco-friendly initiatives and sustainable practices.",
            social: { linkedin: "#", instagram: "#", twitter: "#" }
        }
    ];

    const achievements = [
        { number: "200+", label: "Skilled Artisans", icon: "👩‍🎨" },
        { number: "98%", label: "Client Satisfaction", icon: "😊" },
        { number: "50+", label: "Eco Materials Used", icon: "🌱" },
        { number: "100%", label: "Handcrafted", icon: "✋" },
        { number: "24/7", label: "Support Team", icon: "🛟" },
        { number: "1000+", label: "Event Partners", icon: "🤝" }
    ];

    const values = [
        {
            title: "Craftsmanship",
            description: "Each product is handcrafted with attention to detail and traditional techniques.",
            icon: "✂️",
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Sustainability",
            description: "We use eco-friendly materials and promote reusable decorations.",
            icon: "🌿",
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Innovation",
            description: "Blending traditional designs with modern aesthetics and techniques.",
            icon: "💡",
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Quality",
            description: "Premium materials and rigorous quality checks for every product.",
            icon: "⭐",
            color: "bg-yellow-100 text-yellow-600"
        }
    ];

    const processSteps = [
        { step: 1, title: "Design", description: "Our designers create unique patterns inspired by Indian festivals", icon: "🎨" },
        { step: 2, title: "Material Selection", description: "Choosing eco-friendly, high-quality paper and materials", icon: "📄" },
        { step: 3, title: "Handcrafting", description: "Skilled artisans handcraft each piece with precision", icon: "👐" },
        { step: 4, title: "Quality Check", description: "Every product undergoes 3-stage quality inspection", icon: "✅" },
        { step: 5, title: "Packaging", description: "Eco-friendly packaging ensuring safe delivery", icon: "📦" },
        { step: 6, title: "Delivery", description: "Careful handling and timely delivery to your doorstep", icon: "🚚" }
    ];

    return (
        <ScrollReveal>
            <div className="min-h-screen">
                <section className="relative overflow-hidden bg-gradient-to-br ">
                    <div className="container mx-auto px-4 py-20 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-4xl">🎨</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Where Art Meets Celebration
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                At PaperDecor, we don't just create decorations - we craft experiences. 
                                Every fold, cut, and color is a testament to our passion for turning 
                                ordinary moments into extraordinary memories through the timeless art of paper craft.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-sm hover:shadow transition-all duration-300"
                                >
                                    Discover Our Artistry
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-700 rounded-lg font-bold text-lg transition-all duration-300">
                                    Meet Our Artisans
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section - Updated */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {achievements.map((item, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.number}</div>
                                    <div className="text-gray-600 text-sm">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story & Mission Tabs */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Tabs */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex bg-gray-100 rounded-lg p-1">
                                    {['story', 'mission', 'vision'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-6 py-2 rounded-md font-bold text-sm md:text-base capitalize transition-all duration-300 ${
                                                activeTab === tab 
                                                ? 'bg-white text-blue-600 shadow-sm' 
                                                : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            {tab === 'story' ? 'Our Story' : tab === 'mission' ? 'Our Mission' : 'Our Vision'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                                <div className="p-4 md:p-8">
                                    {activeTab === 'story' && (
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900 mb-4">From a Small Workshop to India's Favorite Decor Brand</h2>
                                                <div className="space-y-3 text-gray-600">
                                                    <p>
                                                        What started as a small family workshop in Jaipur in 2008 has blossomed into 
                                                        India's leading paper decoration brand. Our founder, Priya Sharma, began with 
                                                        a simple vision: to create beautiful, sustainable decorations that celebrate 
                                                        India's rich festival culture.
                                                    </p>
                                                    <p>
                                                        Today, we work with over 200 skilled artisans across Rajasthan and Gujarat, 
                                                        preserving traditional paper craft techniques while innovating with modern designs. 
                                                        Each piece tells a story of craftsmanship, tradition, and celebration.
                                                    </p>
                                                    <p>
                                                        Our journey has been about more than just creating products - it's about 
                                                        preserving heritage, empowering artisans, and making celebrations more 
                                                        beautiful and sustainable.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <div className="rounded-lg overflow-hidden shadow-sm">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop" 
                                                        alt="Our workshop"
                                                        className="w-full h-64 md:h-80 object-cover"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow">
                                                    <div className="text-2xl font-bold">15+</div>
                                                    <div className="font-medium text-sm">Years of Excellence</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'mission' && (
                                        <div className="text-center max-w-2xl mx-auto">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                                <span className="text-2xl">🎯</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                            <p className="text-gray-600 mb-6">
                                                To revolutionize celebrations by providing eco-friendly, beautifully crafted 
                                                decorations that honor tradition while embracing innovation.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                <div className="p-4 bg-blue-50 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-2">Artisan Empowerment</h3>
                                                    <p className="text-gray-600 text-sm">Fair wages and skill development for traditional craftsmen</p>
                                                </div>
                                                <div className="p-4 bg-green-50 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-2">Sustainable Practices</h3>
                                                    <p className="text-gray-600 text-sm">100% biodegradable materials and eco-friendly packaging</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'vision' && (
                                        <div className="text-center max-w-2xl mx-auto">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                                                <span className="text-2xl">👁️</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                                            <p className="text-gray-600">
                                                To become the world's most trusted brand for sustainable celebrations, 
                                                inspiring joy while preserving our planet for future generations.
                                            </p>
                                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                                <p className="text-gray-700 font-medium">
                                                    "Creating a world where every celebration is beautiful, sustainable, and meaningful."
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we create
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow transition-all duration-300 border border-gray-200">
                                        <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                                            <span className="text-xl">{value.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Craftsmanship Process</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Every decoration goes through a meticulous 6-step process
                            </p>
                        </div>
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                                                <span className="text-xl">{step.icon}</span>
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                                <span className="text-xs font-bold text-blue-600">{step.step}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Creative Family</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The passionate team behind every celebration
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="group bg-white rounded-lg p-6 shadow-sm hover:shadow transition-all duration-300 border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                                <img 
                                                    src={member.image} 
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                            <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                                            <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                                            <div className="flex gap-2">
                                                <a href={member.social.linkedin} className="w-6 h-6 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors text-xs">
                                                    in
                                                </a>
                                                <a href={member.social.instagram} className="w-6 h-6 bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 rounded-full flex items-center justify-center transition-colors text-xs">
                                                    ig
                                                </a>
                                                <a href={member.social.twitter} className="w-6 h-6 bg-gray-100 hover:bg-sky-100 text-gray-600 hover:text-sky-600 rounded-full flex items-center justify-center transition-colors text-xs">
                                                    X
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Ready to Transform Your Celebrations?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join thousands of happy customers who've made their special moments unforgettable with our creations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-sm hover:shadow transition-all duration-300"
                                >
                                    Shop Now
                                </button>
                                <button onClick={() => navigate('/contact')} className="px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-700 rounded-lg font-bold text-lg transition-all duration-300">
                                    Contact Our Team
                                </button>
                            </div>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-gray-900">Fast</div>
                                    <div className="text-gray-600 text-sm">3-7 Day Delivery</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-gray-900">Free</div>
                                    <div className="text-gray-600 text-sm">Shipping Over ₹3000</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-gray-900">Custom</div>
                                    <div className="text-gray-600 text-sm">Design Service</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-gray-900">Easy</div>
                                    <div className="text-gray-600 text-sm">Returns & Exchanges</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Note */}
                <div className="bg-gray-50 border-t border-gray-200 py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-gray-600">
                            © 2024 PaperDecor. All rights reserved. Handcrafted with ❤️ in India.
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Making celebrations beautiful since 2008
                        </p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default AboutPage