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
        { number: "10K+", label: "Happy Customers", icon: "👨‍👩‍👧‍👦" },
        { number: "50K+", label: "Products Sold", icon: "🎁" },
        { number: "100+", label: "Festivals Covered", icon: "🎉" },
        { number: "15+", label: "Years Experience", icon: "⭐" },
        { number: "500+", label: "Designs Created", icon: "🎨" },
        { number: "25+", label: "Cities Served", icon: "📍" }
    ];

    const values = [
        {
            title: "Craftsmanship",
            description: "Each product is handcrafted with attention to detail and traditional techniques.",
            icon: "✂️",
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "Sustainability",
            description: "We use eco-friendly materials and promote reusable decorations.",
            icon: "🌿",
            color: "from-green-500 to-emerald-600"
        },
        {
            title: "Innovation",
            description: "Blending traditional designs with modern aesthetics and techniques.",
            icon: "💡",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Quality",
            description: "Premium materials and rigorous quality checks for every product.",
            icon: "⭐",
            color: "from-purple-500 to-pink-500"
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
            <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600">
                    <div className="absolute inset-0 bg-opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}>
                    </div>
                    <div className="container mx-auto px-4 py-24 relative">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Crafting Celebrations
                                <span className="block text-amber-100 text-4xl md:text-5xl mt-4">Since 2008</span>
                            </h1>
                            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                                We transform simple paper into unforgettable memories. From traditional festivals to modern celebrations, 
                                we bring your special moments to life with handcrafted decorations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Explore Our Collections
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                    Watch Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {achievements.map((item, index) => (
                                <div key={index} className="text-center p-6">
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
                                    <div className="text-gray-600 font-medium">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story & Mission Tabs */}
                <section className="py-20 bg-gradient-to-b from-white to-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Tabs */}
                            <div className="flex justify-center mb-12">
                                <div className="inline-flex bg-gray-100 rounded-2xl p-1">
                                    {['story', 'mission', 'vision'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-8 py-3 rounded-xl font-bold text-lg capitalize transition-all duration-300 ${
                                                activeTab === tab 
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                                                : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            {tab === 'story' ? 'Our Story' : tab === 'mission' ? 'Our Mission' : 'Our Vision'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div className="p-8 md:p-12">
                                    {activeTab === 'story' && (
                                        <div className="grid md:grid-cols-2 gap-12 items-center">
                                            <div>
                                                <h2 className="text-3xl font-bold text-gray-900 mb-6">From a Small Workshop to India's Favorite Decor Brand</h2>
                                                <div className="space-y-4 text-gray-600">
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
                                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop" 
                                                        alt="Our workshop"
                                                        className="w-full h-64 md:h-96 object-cover"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                                                    <div className="text-3xl font-bold">15+</div>
                                                    <div className="font-medium">Years of Excellence</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'mission' && (
                                        <div className="text-center max-w-2xl mx-auto">
                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                                <span className="text-3xl">🎯</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                                            <p className="text-xl text-gray-600 mb-6">
                                                To revolutionize celebrations by providing eco-friendly, beautifully crafted 
                                                decorations that honor tradition while embracing innovation.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                                <div className="p-6 bg-amber-50 rounded-xl">
                                                    <h3 className="font-bold text-gray-900 mb-2">Artisan Empowerment</h3>
                                                    <p className="text-gray-600 text-sm">Fair wages and skill development for traditional craftsmen</p>
                                                </div>
                                                <div className="p-6 bg-amber-50 rounded-xl">
                                                    <h3 className="font-bold text-gray-900 mb-2">Sustainable Practices</h3>
                                                    <p className="text-gray-600 text-sm">100% biodegradable materials and eco-friendly packaging</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'vision' && (
                                        <div className="text-center max-w-2xl mx-auto">
                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                                <span className="text-3xl">👁️</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                                            <p className="text-xl text-gray-600">
                                                To become the world's most trusted brand for sustainable celebrations, 
                                                inspiring joy while preserving our planet for future generations.
                                            </p>
                                            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
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
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we create
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="group">
                                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                                            <span className="text-2xl">{value.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Craftsmanship Process</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Every decoration goes through a meticulous 6-step process
                            </p>
                        </div>
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="text-center">
                                        <div className="relative">
                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                                                <span className="text-2xl">{step.icon}</span>
                                            </div>
                                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-amber-200">
                                                <span className="text-sm font-bold text-amber-600">{step.step}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Creative Family</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The passionate team behind every celebration
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <img 
                                                    src={member.image} 
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                            <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                                            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                            <div className="flex gap-3">
                                                <a href={member.social.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors">
                                                    <span className="text-sm">in</span>
                                                </a>
                                                <a href={member.social.instagram} className="w-8 h-8 bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 rounded-full flex items-center justify-center transition-colors">
                                                    <span className="text-sm">ig</span>
                                                </a>
                                                <a href={member.social.twitter} className="w-8 h-8 bg-gray-100 hover:bg-sky-100 text-gray-600 hover:text-sky-600 rounded-full flex items-center justify-center transition-colors">
                                                    <span className="text-sm">X</span>
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
                <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Celebrations?
                            </h2>
                            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                                Join thousands of happy customers who've made their special moments unforgettable with our creations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Shop Now
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                    Contact Our Team
                                </button>
                            </div>
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl text-white font-bold">24/7</div>
                                    <div className="text-amber-100">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl text-white font-bold">Free</div>
                                    <div className="text-amber-100">Shipping Over ₹3000</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl text-white font-bold">30-Day</div>
                                    <div className="text-amber-100">Return Policy</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl text-white font-bold">Custom</div>
                                    <div className="text-amber-100">Designs Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Note */}
                <div className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-gray-400">
                            © 2024 PaperDecor. All rights reserved. Handcrafted with ❤️ in India.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Making celebrations beautiful since 2008
                        </p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default AboutPage