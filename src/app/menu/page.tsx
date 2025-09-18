"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Leaf } from "lucide-react";
import { menuCategories, formatPrice } from "@/data/menu-data";

export default function Menu() {
  // Real menu data from your restaurant
  const starters = [
    {
      id: 1,
      name: "Onion Dosa",
      description: "Crispy dosa topped with fresh onions and aromatic spices",
      price: 60,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 2,
      name: "Curd Rice",
      description: "Traditional South Indian comfort food with yogurt, rice, and aromatic spices",
      price: 60,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 3,
      name: "Curd Avalakki",
      description: "Flattened rice mixed with yogurt and fresh vegetables",
      price: 50,
      featured: false,
      dietary: "Vegetarian"
    },
    {
      id: 4,
      name: "Idly",
      description: "Soft steamed rice cakes served with sambar and coconut chutney",
      price: 35,
      featured: false,
      dietary: "Vegetarian"
    },
    {
      id: 5,
      name: "Vada",
      description: "Crispy fried lentil fritters with aromatic spices",
      price: 35,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 6,
      name: "Battan Idli",
      description: "Special large idli served with sambar and chutney",
      price: 50,
      featured: false,
      dietary: "Vegetarian"
    }
  ];

  const mainCourses = [
    {
      id: 7,
      name: "Paneer Ghee Roast",
      description: "Cottage cheese cooked in aromatic ghee with traditional spices",
      price: 180,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 8,
      name: "Special Paneer Manchurian",
      description: "Crispy paneer balls in tangy Manchurian sauce",
      price: 190,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 9,
      name: "Masala Dosa",
      description: "Crispy crepe filled with spiced potatoes and onions",
      price: 65,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 10,
      name: "Paneer Biriyani",
      description: "Fragrant basmati rice with spiced paneer and aromatic herbs",
      price: 170,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 11,
      name: "Butter Masala Dosa",
      description: "Rich and buttery masala dosa with extra ghee",
      price: 90,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 12,
      name: "Mango Shake",
      description: "Fresh mango blended with creamy milk and ice",
      price: 65,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 13,
      name: "Falooda",
      description: "Traditional Indian dessert drink with vermicelli, rose syrup, and ice cream",
      price: 70,
      featured: true,
      dietary: "Vegetarian"
    },
    {
      id: 14,
      name: "Mixed Dry Fruits Shake",
      description: "Nutritious shake with almonds, dates, and mixed dry fruits",
      price: 75,
      featured: false,
      dietary: "Vegetarian"
    }
  ];

  const getDietaryIcon = (dietary: string | null) => {
    if (!dietary) return null;
    
    const icons: { [key: string]: string } = {
      "Vegan": "🌱",
      "Vegetarian": "🥬", 
      "Gluten Free": "🌾",
      "Wheat": "🌾"
    };
    
    return icons[dietary] || "🌿";
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/Image/home3.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-gray-800">
        {/* Header */}
        <div className="px-8 py-12">
          <h1 className="text-6xl font-serif text-amber-600 mb-8">Menu</h1>
        </div>

      {/* Starters Section */}
      <div className="px-8 mb-16">
        <h2 className="text-3xl font-serif text-amber-600 mb-8">Starters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {starters.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="flex items-center gap-2">
                {item.featured && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  {(item as any).nameKannada && (
                    <p className="text-sm text-gray-600 italic">{(item as any).nameKannada}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.dietary && (
                <div className="flex items-center gap-1">
                  <span className="text-sm">{getDietaryIcon(item.dietary)}</span>
                  <span className="text-xs text-gray-600">{item.dietary}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Courses Section */}
      <div className="px-8 mb-16">
        <h2 className="text-3xl font-serif text-amber-600 mb-8">Main Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mainCourses.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="flex items-center gap-2">
                {item.featured && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  {(item as any).nameKannada && (
                    <p className="text-sm text-gray-600 italic">{(item as any).nameKannada}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.dietary && (
                <div className="flex items-center gap-1">
                  <span className="text-sm">{getDietaryIcon(item.dietary)}</span>
                  <span className="text-xs text-gray-600">{item.dietary}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
