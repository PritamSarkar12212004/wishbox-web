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
        { platform: 'Instagram', icon: '📸', handle: '@paperdecor', color: 'bg-pink-100 hover:bg-pink-200 text-pink-700', link: '#' },
        { platform: 'Facebook', icon: '👥', handle: 'PaperDecor', color: 'bg-blue-100 hover:bg-blue-200 text-blue-700', link: '#' },
        { platform: 'WhatsApp', icon: '💬', handle: '+91 98765 43210', color: 'bg-green-100 hover:bg-green-200 text-green-700', link: '#' },
        { platform: 'LinkedIn', icon: '💼', handle: 'PaperDecor', color: 'bg-blue-100 hover:bg-blue-200 text-blue-700', link: '#' }
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
        console.log('Form submitted:', { ...formData, topic: selectedTopic });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <ScrollReveal>
            <div className="min-h-screen ">
                <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
                    <div className="container mx-auto px-4 py-16 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We'd love to hear from you! Whether you have questions about our products,
                                need assistance with an order, or want to discuss a custom design, our team is here to help.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-8">
                                {/* Contact Information Cards */}
                                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                    <div className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200">
                                                    <span className="text-xl text-gray-600">{info.icon}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                                                    {info.action ? (
                                                        <a
                                                            href={info.action}
                                                            className="text-blue-600 hover:text-blue-700 font-medium text-lg block mb-1 transition-colors"
                                                        >
                                                            {info.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-900 font-medium text-lg mb-1">{info.details}</p>
                                                    )}
                                                    <p className="text-gray-500 text-sm">{info.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                className={`p-3 rounded-lg ${social.color} border border-transparent hover:border-gray-300 transform hover:-translate-y-1 transition-all duration-300`}
                                            >
                                                <div className="text-xl mb-1">{social.icon}</div>
                                                <div className="font-bold text-xs">{social.platform}</div>
                                                <div className="text-xs opacity-90 truncate">{social.handle}</div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Response */}
                                <div className="bg-blue-50 rounded-xl shadow-sm p-6 border border-blue-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl text-blue-600">⚡</span>
                                        <h3 className="text-xl font-bold text-gray-900">Quick Response</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Our average response time is under 2 hours during business hours.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-gray-600">Team Online Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <span className="text-xl text-green-600">✓</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-green-800">Message Sent Successfully!</h3>
                                                <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                                <p className="text-gray-600 mb-6">Fill out the form below and we'll respond as soon as possible.</p>

                                {/* Topic Selection */}
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-3">What can we help you with?</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {contactTopics.map((topic) => (
                                            <button
                                                key={topic.id}
                                                type="button"
                                                onClick={() => setSelectedTopic(topic.id)}
                                                className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center justify-center ${selectedTopic === topic.id
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
                                                    }`}
                                            >
                                                <span className="text-xl mb-1">{topic.icon}</span>
                                                <span className="text-xs font-medium">{topic.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                                                rows={5}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                                                placeholder="Please describe your inquiry in detail..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-1 w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
                                        />
                                        <label htmlFor="privacy" className="text-gray-600 text-sm">
                                            I agree to the privacy policy and terms of service. I understand that PaperDecor may contact me regarding my inquiry.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow-sm hover:shadow transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Visit Our Showroom</h2>
                                    <p className="text-gray-600">Come see our creations in person</p>
                                </div>
                                <div className="relative h-56 md:h-64 bg-gray-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gray-800 flex items-center justify-center">
                                                <span className="text-2xl text-white">📍</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-1">123 Craft Street</h3>
                                            <p className="text-gray-600 text-sm">Jaipur, Rajasthan 302001</p>
                                            <button className="mt-3 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:border-blue-300 hover:text-blue-700 transition-colors">
                                                Get Directions
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Parking Information</h4>
                                            <p className="text-gray-600 text-xs">Free parking available in the rear lot</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Accessibility</h4>
                                            <p className="text-gray-600 text-xs">Wheelchair accessible entrance and restrooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </ScrollReveal>
    )
}

export default ContactPage