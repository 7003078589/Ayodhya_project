"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Clock, MapPin, Star, CheckCircle, ArrowRight, Crown, Sparkles, PartyPopper } from "lucide-react";

const PartyHallSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: "Main Hall View", description: "Spacious and elegant main dining area", capacity: "150 guests" },
    { id: 2, title: "Stage Area", description: "Perfect for performances and presentations", capacity: "200 guests" },
    { id: 3, title: "Private Dining", description: "Intimate setting for special occasions", capacity: "50 guests" },
    { id: 4, title: "Outdoor Garden", description: "Beautiful garden area for outdoor events", capacity: "100 guests" },
  ];

  const features = [
    {
      icon: Users,
      title: "Capacity",
      description: "Accommodates up to 150 guests comfortably",
      details: "Flexible seating arrangements for different event types",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "Availability",
      description: "Available 7 days a week",
      details: "Advance booking recommended for weekends",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Clock,
      title: "Duration",
      description: "Flexible timing options",
      details: "Half-day, full-day, or custom duration packages",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Prime location with easy access",
      details: "Ample parking space available for guests",
      color: "from-orange-400 to-red-500"
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      price: 299,
      capacity: "Up to 50 guests",
      duration: "4 hours",
      includes: [
        "Hall rental",
        "Basic sound system",
        "Standard lighting",
        "Cleanup service"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600",
      icon: Users
    },
    {
      name: "Premium Package",
      price: 499,
      capacity: "Up to 100 guests",
      duration: "6 hours",
      includes: [
        "Hall rental",
        "Premium sound system",
        "Professional lighting",
        "Decorations",
        "Cleanup service",
        "Event coordinator"
      ],
      popular: true,
      color: "from-emerald-400 to-cyan-500",
      icon: Crown
    },
    {
      name: "Luxury Package",
      price: 799,
      capacity: "Up to 150 guests",
      duration: "8 hours",
      includes: [
        "Hall rental",
        "Premium sound & lighting",
        "Custom decorations",
        "Catering options",
        "Event coordinator",
        "Photography setup",
        "Cleanup service"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500",
      icon: Sparkles
    }
  ];

  return (
    <section id="party-hall" className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <PartyPopper className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Event Venue</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Party Hall
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Host your special events in our beautifully designed party hall. Perfect for weddings, 
            corporate events, birthday parties, and celebrations of all kinds.
          </p>
        </motion.div>

        {/* Gallery Section - Unique Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center text-indigo-800">
                      <Users className="w-20 h-20 mx-auto mb-4 text-indigo-600" />
                      <p className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</p>
                      <p className="text-lg mb-2">{galleryImages[selectedImage].description}</p>
                      <p className="text-sm text-indigo-600 font-semibold">Capacity: {galleryImages[selectedImage].capacity}</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hall Features</h3>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedImage === index ? 'ring-4 ring-indigo-500 shadow-xl' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-indigo-800">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">{image.title}</p>
                      <p className="text-xs text-indigo-600">{image.capacity}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Section - Unique Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Party Hall?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-2">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages Section - Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Event Packages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredPackage(index)}
                onMouseLeave={() => setHoveredPackage(null)}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl scale-105' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                    <div className="text-4xl font-bold mb-4">
                      ${pkg.price}
                      <span className="text-lg font-normal opacity-70">/event</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5" />
                      <span>{pkg.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    <h5 className="font-semibold mb-3">Includes:</h5>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-white text-indigo-600 hover:bg-gray-100' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
                    } shadow-lg`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center"
        >
          <div className="relative p-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl text-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Plan Your Event?</h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your event requirements and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Visit
                </Button>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <Users className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartyHallSection;