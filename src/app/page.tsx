import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Star, MapPin, Phone, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Split Layout Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
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
              <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight">
                AYODHYA
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              Where Vegetarian Cuisine Meets Art
            </p>

            {/* Call to Action */}
            <Link href="/menu">
              <Button className="border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Explore Our Menu
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-8 left-8 space-y-2 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sun: 11AM - 10PM</span>
            </div>
          </div>
        </div>

        {/* Right Side - Food Photography */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          {/* Main Food Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Beautiful Food Display */}
              <div className="relative">
                {/* Main Dish */}
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🍽️</div>
                      <div className="text-amber-800 font-semibold text-lg">Signature Dish</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 bg-amber-400 rounded-full opacity-50"></div>
              </div>
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
              At Ayodhya, we believe that vegetarian cuisine is not just about what you don't eat, 
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
    </div>
  );
}
