"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Euro, Home } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
    const skylineRef = useRef(null);

    useEffect(() => {
        gsap.to(skylineRef.current, {
            duration: 40,
            backgroundPosition: "-1000px 0",
            repeat: -1,
            ease: "none",
        });
    }, []);

    return (
        <motion.div
            className="relative min-h-[600px] bg-gradient-to-b from-gray-900 to-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Skyline Background */}
            <div
                ref={skylineRef}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'url("/berlin-skyline.svg")',
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "0 bottom",
                    backgroundSize: "auto 200px",
                    willChange: "background-position",
                }}
            />

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6">
                        Your International Real Estate
                        <span className="block text-orange-500">Agent in Berlin</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        First Citiz Berlin real estate team assists you from A to Z with
                        purchase and sale of your property in Berlin
                    </p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gray-800 rounded-xl shadow-2xl p-6">
                        {/* Search Tabs */}
                        <div className="flex gap-4 mb-6">
                            <button
                                className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full font-medium"
                                aria-label="Buy Property"
                            >
                                Buy
                            </button>
                            <button
                                className="px-6 py-2 bg-gray-700 text-gray-400 rounded-full font-medium hover:bg-gray-600 transition-colors"
                                aria-label="Rent Property"
                            >
                                Rent
                            </button>
                        </div>

                        {/* Search Fields */}
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Location
                                </label>
                                <div className="relative">
                                    <MapPin
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search by location, property type, or price"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                        aria-label="Location Search"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Property Type
                                </label>
                                <div className="relative">
                                    <Home
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                    <select
                                        className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none"
                                        aria-label="Select Property Type"
                                    >
                                        <option>Any type</option>
                                        <option>Apartment</option>
                                        <option>House</option>
                                        <option>Commercial</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Price Range
                                </label>
                                <div className="relative">
                                    <Euro
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                    <select
                                        className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none"
                                        aria-label="Select Price Range"
                                    >
                                        <option>Any price</option>
                                        <option>€100k - €200k</option>
                                        <option>€200k - €500k</option>
                                        <option>€500k+</option>
                                    </select>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                whileTap={{ scale: 0.98, rotate: -1 }}
                                className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-lg px-6 py-3 font-medium hover:bg-orange-600 transition-colors mt-6 md:mt-0"
                                aria-label="Search Properties"
                            >
                                <Search size={20} />
                                Search Properties
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 text-center"
                >
                    {[
                        { label: "Properties", value: "500+" },
                        { label: "Happy Clients", value: "1000+" },
                        { label: "Years Experience", value: "15+" },
                        { label: "Cities Covered", value: "10+" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/80 backdrop-blur-lg rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-colors"
                        >
                            <div className="text-2xl font-bold text-orange-500">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroSection;