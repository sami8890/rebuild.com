"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Bed,
  Bath,
  Maximize,
  Euro,
  MapPin,
  Filter,
  ArrowUpDown,
  Grid,
  List,
} from "lucide-react";

const FeaturedProperties = () => {
  const [viewType, setViewType] = useState("grid");
  const [, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Top location: Imposing 2/3-room apartment with balcony",
      location: "Berlin - Friedrichshain",
      price: 753372,
      rooms: 3,
      area: 85.63,
      status: "vacant",
      type: "apartment",
      isNew: true,
      image: "/home1.png",
    },
    {
      id: 2,
      title: "Top location: Imposing 2/3-room apartment with balcony",
      location: "Berlin - Friedrichshain",
      price: 753372,
      rooms: 3,
      area: 85.63,
      status: "vacant",
      type: "apartment",
      isNew: true,
      image: "/home2.png",
    },
    {
      id: 3,
      title: "Top location: Imposing 2/3-room apartment with balcony",
      location: "Berlin - Friedrichshain",
      price: 753372,
      rooms: 3,
      area: 85.63,
      status: "vacant",
      type: "apartment",
      isNew: true,
      image: "/home3.png",
    },
    {
      id: 4,
      title: "Top location: Imposing 2/3-room apartment with balcony",
      location: "Berlin - Friedrichshain",
      price: 753372,
      rooms: 3,
      area: 85.63,
      status: "vacant",
      type: "apartment",
      isNew: true,
      image: "/home4.png",
    },
    {
      id: 1,
      title: "Top location: Imposing 2/3-room apartment with balcony",
      location: "Berlin - Friedrichshain",
      price: 753372,
      rooms: 3,
      area: 85.63,
      status: "vacant",
      type: "apartment",
      isNew: true,
      image: "/home5.png",
    },
    // Add more properties here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-3xl font-bold text-gray-200">
              Properties of the Month
            </h2>
            <p className="text-gray-400 mt-2">
              Discover our hand-picked premium properties in Berlin
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            {/* View Toggle */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-1 flex">
              <button
                onClick={() => setViewType("grid")}
                className={`p-2 rounded ${
                  viewType === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-gray-400 hover:text-gray-200 transition-colors"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewType("list")}
                className={`p-2 rounded ${
                  viewType === "list"
                    ? "bg-orange-500 text-white"
                    : "text-gray-400 hover:text-gray-200 transition-colors"
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 rounded-lg shadow-sm px-4 py-2 pr-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area">Area</option>
              </select>
              <ArrowUpDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="bg-gray-800 rounded-lg shadow-sm px-4 py-2 text-gray-300 flex items-center gap-2 hover:bg-gray-700 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </motion.div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gray-800 rounded-lg shadow-sm mb-8 overflow-hidden"
            >
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors">
                    <option>All Types</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Commercial</option>
                  </select>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rooms
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Area (m²)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Property Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid ${
            viewType === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-8`}
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer
                ${viewType === "list" ? "flex" : ""}`}
            >
              {/* Property Image */}
              <motion.div
                className={`relative ${
                  viewType === "list" ? "w-1/3" : "w-full"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={property.image || "/api/placeholder/400/320"}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                {property.isNew && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}
              </motion.div>

              {/* Property Details */}
              <div className={`p-4 ${viewType === "list" ? "w-2/3" : ""}`}>
                <h3 className="text-lg font-bold text-gray-200 mb-2 hover:text-orange-500 transition-colors">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <MapPin size={16} /> {property.location}
                </p>
                <p className="text-gray-200 font-semibold text-xl mt-3 flex items-center gap-2">
                  <Euro size={20} />
                  {property.price.toLocaleString()}
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{property.rooms} Rooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{property.area} m²</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize size={16} />
                    <span>{property.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
