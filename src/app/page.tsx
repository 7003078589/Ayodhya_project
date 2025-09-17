"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Star, MapPin, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const diskImages = [
    "/images/dishes/dosa.jpg",
    "/images/dishes/idlli.jpg",
    "/images/dishes/vada.jpg",
    "/images/dishes/rice.jpg",
    "/images/dishes/disk1.jpg"
  ];

  // Auto-slide effect - continuous sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % diskImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [diskImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Split Layout Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative bg-gradient-to-br from-gray-50 to-white shadow-inner border-r border-gray-200">
          {/* Social Media Icons */}
          <div className="absolute top-8 left-8 flex flex-col space-y-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
              <Twitter className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
              <Instagram className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-lg">
            {/* Logo with Decorative Element */}
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20 Z" 
                        fill="none" stroke="#D97706" strokeWidth="2"/>
                  <circle cx="30" cy="30" r="3" fill="#D97706"/>
                  <circle cx="50" cy="25" r="2" fill="#D97706"/>
                  <circle cx="70" cy="30" r="3" fill="#D97706"/>
                  <circle cx="25" cy="50" r="2" fill="#D97706"/>
                  <circle cx="75" cy="50" r="2" fill="#D97706"/>
                  <circle cx="30" cy="70" r="3" fill="#D97706"/>
                  <circle cx="50" cy="75" r="2" fill="#D97706"/>
                  <circle cx="70" cy="70" r="3" fill="#D97706"/>
                </svg>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight relative">
                <span className="bg-gradient-to-br from-amber-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
                  AYODHYA
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent bg-clip-text text-transparent blur-sm">
                  AYODHYA
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-amber-500/20 bg-clip-text text-transparent blur-sm -translate-x-1 -translate-y-1">
                  AYODHYA
                </div>
              </h1>
              
              {/* UPAHAR Text */}
              <div className="mt-4 relative">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-600 relative">
                  <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent drop-shadow-md">
                    UPAHAR
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent bg-clip-text text-transparent blur-sm">
                    UPAHAR
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/40 to-amber-600/30 bg-clip-text text-transparent blur-sm -translate-x-0.5 -translate-y-0.5">
                    UPAHAR
                  </div>
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-2xl font-light mb-12 italic relative">
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent drop-shadow-md">
                Where Vegetarian Cuisine Meets Art
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent bg-clip-text text-transparent blur-sm">
                Where Vegetarian Cuisine Meets Art
              </div>
            </div>

            {/* Call to Action */}
            <Link href="/menu">
              <Button className="relative border-2 border-amber-600 text-amber-600 bg-gradient-to-br from-white to-gray-50 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Explore Our Menu</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-md"></div>
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-8 left-8 space-y-2 text-sm">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-gray-200">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-gray-200">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-gray-700 font-medium">Mon-Sun: 11AM - 10PM</span>
            </div>
          </div>
        </div>

        {/* Right Side - Food Photography */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[60vh] lg:min-h-screen bg-[url('/Image/home3.jpg')] bg-cover bg-center">
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/40"></div>
          
          {/* Circular Food Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Main Dish */}
              <div className="w-80 h-80 rounded-full shadow-2xl relative overflow-hidden bg-gray-100">
                {diskImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Ayodhya Restaurant Signature Dish"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = '/images/dishes/dosa.jpg';
                    }}
                  />
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-amber-400 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Vertical Branding */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="text-amber-600 font-bold text-2xl writing-mode-vertical-rl transform rotate-180">
              AYODHYA
            </div>
          </div>

          {/* Top Right Elements */}
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            <Link href="/reservations" className="text-amber-600 hover:text-amber-700 font-semibold">
              RESERVE
            </Link>
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
              0
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved vegetarian creations, crafted with passion and precision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Dish 1 */}
            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-6xl">🥗</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Garden Fresh Salad</h3>
              <p className="text-gray-600 mb-4">Organic greens with seasonal vegetables and house dressing</p>
              <span className="text-2xl font-bold text-amber-600">$14</span>
            </div>

            {/* Dish 2 */}
            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-6xl">🍛</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Dal Makhani</h3>
              <p className="text-gray-600 mb-4">Creamy black lentils slow-cooked to perfection</p>
              <span className="text-2xl font-bold text-amber-600">$16</span>
            </div>

            {/* Dish 3 */}
            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-6xl">🍰</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Gulab Jamun</h3>
              <p className="text-gray-600 mb-4">Soft milk dumplings in rose-flavored syrup</p>
              <span className="text-2xl font-bold text-amber-600">$7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Culinary Journey</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At Ayodhya, we believe that vegetarian cuisine is not just about what you don&apos;t eat, 
              but about celebrating the incredible flavors and textures that nature provides. 
              Our chefs combine traditional techniques with modern innovation to create dishes 
              that are both familiar and surprising.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/about">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                  Our Story
                </Button>
              </Link>
              <Link href="/party-hall">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold">
                  Book Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* India Culture Section */}
      <section className="py-16 lg:py-24 bg-white">
        {/* Text content in clean white area */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-relaxed">
            Experience the essence of Indian culture through our<br />
            culinary delights.
          </h2>
        </div>
        
        {/* Full width doodle image */}
        <div className="w-full overflow-hidden">
          <img 
            src="/Image/13.png" 
            alt="Indian Culture Doodles" 
            className="w-full h-auto object-cover -m-1"
            style={{ border: 'none', outline: 'none' }}
          />
        </div>
      </section>

    </div>
  );
}
