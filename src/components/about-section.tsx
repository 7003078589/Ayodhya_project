"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Award, Users, Clock, Star, ArrowRight, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "9+", label: "Years Experience", icon: Award },
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "100+", label: "Menu Items", icon: Leaf },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the finest organic vegetables and herbs daily from local farms.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Heart,
      title: "Healthy & Nutritious",
      description: "Every dish is crafted to provide maximum nutrition without compromising on taste.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Award,
      title: "Award-Winning Chef",
      description: "Our head chef brings 15+ years of experience in vegetarian fine dining.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Perfect for family gatherings, business meetings, and special celebrations.",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Our Story</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Adhoya
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Adhoya, we believe that vegetarian cuisine can be both sophisticated and satisfying. 
            Our restaurant combines traditional cooking methods with modern culinary techniques to create 
            an unforgettable dining experience.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Crafting Excellence Since{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  2015
                </span>
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2015, Adhoya began as a small family restaurant with a simple mission: 
                  to prove that vegetarian food can be the star of any meal. Over the years, we've 
                  grown into a premier destination for those seeking exceptional plant-based cuisine.
                </p>
                <p>
                  Our commitment to quality, sustainability, and innovation has earned us recognition 
                  as one of the city's finest vegetarian restaurants. We're proud to serve dishes that 
                  celebrate the natural flavors of fresh, seasonal ingredients.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Award-Winning Excellence</h4>
                <p className="text-gray-600 text-sm">Recognized by local food critics and customers alike</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Area */}
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-100 via-cyan-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 flex items-center justify-center">
                  <div className="text-center text-emerald-800">
                    <Leaf className="w-20 h-20 mx-auto mb-6 text-emerald-600" />
                    <p className="text-2xl font-bold mb-2">Restaurant Interior</p>
                    <p className="text-lg">Elegant & Modern Design</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Values Section - Unique Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from ingredient selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group cursor-pointer">
            <span className="text-lg font-semibold">Experience Our Story</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;