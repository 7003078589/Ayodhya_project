"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Star, Clock, ChefHat, Sparkles, ArrowRight, Plus } from "lucide-react";
import { menuCategories, formatPrice, getAllMenuItems } from "@/data/menu-data";

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", icon: ChefHat },
    { id: "rice-special", name: "Rice Special", icon: Star },
    { id: "paneer-special", name: "Paneer Special", icon: Leaf },
    { id: "north-indian-curry", name: "North Indian Curry", icon: ChefHat },
    { id: "south-indian-dishes", name: "South Indian", icon: Sparkles },
    { id: "fresh-fruit-juice", name: "Fresh Juice", icon: Leaf },
  ];

  // Get all menu items from our data
  const allMenuItems = getAllMenuItems();
  
  // Transform the data to match the component's expected format
  const menuItems = allMenuItems.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description || `${item.name} - Delicious vegetarian dish`,
    price: item.price,
    category: item.category,
    prepTime: "15-20 min",
    rating: 4.5 + Math.random() * 0.4, // Random rating between 4.5-4.9
    isPopular: item.popular || false,
    image: getEmojiForCategory(item.category),
  }));

  // Helper function to get emoji based on category
  function getEmojiForCategory(category: string): string {
    const emojiMap: { [key: string]: string } = {
      "rice-special": "🍚",
      "paneer-special": "🧀",
      "meals": "🍽️",
      "north-indian-curry": "🍛",
      "tandoori-items": "🔥",
      "roti-curry": "🥖",
      "north-indian-biriyani": "🍚",
      "south-indian-dishes": "🥘",
      "manchurian-gravy": "🥢",
      "north-indian-palav": "🍚",
      "fresh-fruit-juice": "🍹",
      "dry-fruit-milk-shake": "🥛",
      "fresh-fruit-milk-shake": "🥤",
      "special-milk-shake": "🍫",
      "ragi-milk-shake": "🌾",
      "others": "🍽️"
    };
    return emojiMap[category] || "🍽️";
  }

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-6"
          >
            <ChefHat className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-semibold">Our Culinary Journey</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our carefully crafted vegetarian dishes, each prepared with the finest ingredients 
            and traditional cooking techniques to deliver exceptional flavors.
          </p>
        </motion.div>

        {/* Category Filter - Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/25"
                  : "bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <category.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items - Unique Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-center space-x-8 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Emoji/Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </h3>
                        {item.isPopular && (
                          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.prepTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-emerald-400">
                        {formatPrice(item.price)}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      >
                        <Plus className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Note - Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                All Our Dishes Are 100% Vegetarian
              </h3>
              <p className="text-gray-300 max-w-2xl">
                We use only the freshest organic ingredients and traditional cooking methods. 
                Our menu changes seasonally to ensure the best quality and taste.
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-emerald-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;