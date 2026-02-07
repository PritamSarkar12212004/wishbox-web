import { useState } from 'react';
import ScrollReveal from "../../components/ui/animation/ScrollReveal";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [selectedTopic, setSelectedTopic] = useState('general');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactTopics = [
        { id: 'general', label: 'General Inquiry', icon: '💬' },
        { id: 'order', label: 'Order Support', icon: '📦' },
        { id: 'custom', label: 'Custom Design', icon: '🎨' },
        { id: 'wholesale', label: 'Wholesale/Bulk', icon: '🏢' },
        { id: 'careers', label: 'Careers', icon: '👔' },
        { id: 'feedback', label: 'Feedback', icon: '⭐' }
    ];

    const contactInfo = [
        {
            icon: '📞',
            title: 'Call Us',
            details: '+91 98765 43210',
            subtitle: 'Monday to Saturday, 9 AM to 8 PM',
            action: 'tel:+919876543210'
        },
        {
            icon: '📧',
            title: 'Email Us',
            details: 'hello@paperdecor.in',
            subtitle: 'Response within 24 hours',
            action: 'mailto:hello@paperdecor.in'
        },
        {
            icon: '📍',
            title: 'Visit Us',
            details: '123 Craft Street, Jaipur, Rajasthan',
            subtitle: 'Showroom open 10 AM to 7 PM',
            action: 'https://maps.google.com'
        },
        {
            icon: '⏰',
            title: 'Business Hours',
            details: 'Mon-Sat: 9 AM - 8 PM',
            subtitle: 'Sunday: 10 AM - 6 PM',
            action: null
        }
    ];

    const socialLinks = [
        { platform: 'Instagram', icon: '📸', handle: '@paperdecor', color: 'from-pink-500 to-purple-500', link: '#' },
        { platform: 'Facebook', icon: '👥', handle: 'PaperDecor', color: 'from-blue-500 to-blue-700', link: '#' },
        { platform: 'WhatsApp', icon: '💬', handle: '+91 98765 43210', color: 'from-green-500 to-green-600', link: '#' },
        { platform: 'LinkedIn', icon: '💼', handle: 'PaperDecor', color: 'from-blue-400 to-blue-600', link: '#' }
    ];

    const faqs = [
        {
            question: 'How long does delivery take?',
            answer: 'Delivery takes 3-7 business days depending on your location. Express delivery available for major cities.'
        },
        {
            question: 'Can I customize decorations?',
            answer: 'Yes! We specialize in custom designs. Share your requirements and we\'ll create something unique for you.'
        },
        {
            question: 'What materials do you use?',
            answer: 'We use eco-friendly, biodegradable paper and sustainable materials. All our decorations are handmade.'
        },
        {
            question: 'Do you offer wholesale pricing?',
            answer: 'Yes, we offer special pricing for bulk orders and event planners. Contact our wholesale team.'
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In real app, this would submit to backend
        console.log('Form submitted:', { ...formData, topic: selectedTopic });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <ScrollReveal>
            <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="container mx-auto px-4 py-20 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                                We'd love to hear from you! Whether you have questions about our products, 
                                need assistance with an order, or want to discuss a custom design, our team is here to help.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-8">
                                {/* Contact Information Cards */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                    <div className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-xl">{info.icon}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                                                    {info.action ? (
                                                        <a 
                                                            href={info.action} 
                                                            className="text-amber-600 hover:text-amber-700 font-medium text-lg block mb-1 transition-colors"
                                                        >
                                                            {info.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-900 font-medium text-lg mb-1">{info.details}</p>
                                                    )}
                                                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}
                                            >
                                                <div className="text-2xl mb-2">{social.icon}</div>
                                                <div className="font-bold text-sm">{social.platform}</div>
                                                <div className="text-xs opacity-90">{social.handle}</div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Response */}
                                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">⚡</span>
                                        <h3 className="text-xl font-bold">Quick Response</h3>
                                    </div>
                                    <p className="text-amber-100 mb-4">
                                        Our average response time is under 2 hours during business hours.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm">Team Online Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                                <span className="text-2xl text-green-600">✓</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-green-800 text-lg">Message Sent Successfully!</h3>
                                                <p className="text-green-700">We'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                                <p className="text-gray-600 mb-8">Fill out the form below and we'll respond as soon as possible.</p>

                                {/* Topic Selection */}
                                <div className="mb-8">
                                    <label className="block text-gray-700 font-medium mb-4">What can we help you with?</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {contactTopics.map((topic) => (
                                            <button
                                                key={topic.id}
                                                type="button"
                                                onClick={() => setSelectedTopic(topic.id)}
                                                className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${selectedTopic === topic.id
                                                        ? 'border-amber-500 bg-amber-50 text-amber-700 shadow-sm'
                                                        : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50 text-gray-700'
                                                    }`}
                                            >
                                                <span className="text-2xl mb-2">{topic.icon}</span>
                                                <span className="text-sm font-medium">{topic.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-400">👤</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-400">📧</span>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-400">📱</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                                Subject *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-400">📝</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="What is this regarding?"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                            Your Message *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3">
                                                <span className="text-gray-400">💬</span>
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Please describe your inquiry in detail..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-1 w-5 h-5 text-amber-500 rounded focus:ring-amber-400 focus:ring-offset-0"
                                        />
                                        <label htmlFor="privacy" className="text-gray-600 text-sm">
                                            I agree to the privacy policy and terms of service. I understand that PaperDecor may contact me regarding my inquiry.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="group">
                                            <div className="p-4 border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-sm transition-all duration-200">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                                        <p className="text-gray-600">{faq.answer}</p>
                                                    </div>
                                                    <span className="text-gray-400 ml-4">+</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2 mx-auto">
                                        View all FAQs
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>

                            {/* Location Map */}
                            <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                <div className="p-6 border-b border-gray-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Showroom</h2>
                                    <p className="text-gray-600">Come see our creations in person</p>
                                </div>
                                <div className="relative h-64 md:h-80 bg-gradient-to-br from-amber-100 to-orange-100">
                                    {/* Map Placeholder - Replace with actual Google Maps embed */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                                <span className="text-2xl text-white">📍</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">123 Craft Street</h3>
                                            <p className="text-gray-600">Jaipur, Rajasthan 302001</p>
                                            <button className="mt-4 px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-amber-300 hover:text-amber-700 transition-colors">
                                                Get Directions
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-gray-50">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Parking Information</h4>
                                            <p className="text-gray-600">Free parking available in the rear lot</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Accessibility</h4>
                                            <p className="text-gray-600">Wheelchair accessible entrance and restrooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Teams */}
                    <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Dedicated Support Teams</h2>
                            <p className="text-amber-100 max-w-2xl mx-auto">
                                We have specialized teams ready to assist you with different aspects of our service
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                                    <span className="text-2xl">👑</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">VIP Customer Care</h3>
                                <p className="text-amber-100 text-sm">Priority support for bulk orders and corporate clients</p>
                                <div className="mt-4 text-sm">Email: vip@paperdecor.in</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Design Consultations</h3>
                                <p className="text-amber-100 text-sm">Expert guidance for custom decorations and themes</p>
                                <div className="mt-4 text-sm">Email: design@paperdecor.in</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🏢</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Business Partnerships</h3>
                                <p className="text-amber-100 text-sm">For wholesale, collaborations, and partnerships</p>
                                <div className="mt-4 text-sm">Email: partners@paperdecor.in</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Contact Note */}
                <div className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <p className="text-gray-400">
                                    © 2024 PaperDecor. All rights reserved.
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                    We're here to make your celebrations beautiful
                                </p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-400 text-sm">Online Support Available</span>
                                </div>
                                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
                                    Live Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ContactPage