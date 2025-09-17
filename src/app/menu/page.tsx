import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Leaf, Clock } from "lucide-react";

export default function Menu() {
  const menuCategories = [
    {
      title: "Appetizers",
      icon: "🥗",
      items: [
        { name: "Paneer Tikka", description: "Grilled cottage cheese with aromatic spices", price: "$12", popular: true },
        { name: "Samosa Platter", description: "Crispy pastries filled with spiced potatoes", price: "$8" },
        { name: "Vegetable Spring Rolls", description: "Fresh vegetables wrapped in crispy pastry", price: "$10" },
        { name: "Bruschetta Trio", description: "Toasted bread with tomato, basil, and olive oil", price: "$9" }
      ]
    },
    {
      title: "Main Courses",
      icon: "🍛",
      items: [
        { name: "Dal Makhani", description: "Creamy black lentils slow-cooked to perfection", price: "$16", popular: true },
        { name: "Palak Paneer", description: "Fresh spinach with cottage cheese in rich gravy", price: "$15" },
        { name: "Vegetable Biryani", description: "Fragrant basmati rice with mixed vegetables", price: "$18" },
        { name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms", price: "$17" },
        { name: "Chana Masala", description: "Spiced chickpeas in tomato-based curry", price: "$14" }
      ]
    },
    {
      title: "Desserts",
      icon: "🍰",
      items: [
        { name: "Gulab Jamun", description: "Soft milk dumplings in rose-flavored syrup", price: "$7", popular: true },
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$9" },
        { name: "Kulfi", description: "Traditional Indian ice cream with pistachios", price: "$6" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$8" }
      ]
    },
    {
      title: "Beverages",
      icon: "🥤",
      items: [
        { name: "Fresh Mango Lassi", description: "Creamy yogurt drink with fresh mango", price: "$5" },
        { name: "Masala Chai", description: "Spiced tea with aromatic herbs", price: "$4" },
        { name: "Fresh Fruit Juice", description: "Seasonal fruits blended to perfection", price: "$6" },
        { name: "Sparkling Water", description: "Premium sparkling water with lemon", price: "$3" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Menu Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight mb-8">
              OUR MENU
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              Exquisite vegetarian cuisine crafted with passion
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">100% Vegetarian</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Premium Quality</span>
              </div>
            </div>
            <Link href="/reservations">
              <Button className="border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Make Reservation
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Menu Visual */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🍽️</div>
                      <div className="text-amber-800 font-semibold text-lg">Signature Menu</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 bg-amber-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="text-amber-600 font-bold text-2xl writing-mode-vertical-rl transform rotate-180">
              MENU
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="group hover:shadow-lg transition-all duration-300 bg-white rounded-lg p-6 border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <Badge className="bg-amber-100 text-amber-800 border-amber-300 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-amber-600 ml-4">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Note */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Special Dietary Requirements?</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We accommodate various dietary needs including gluten-free, vegan, and nut-free options. 
              Please inform our staff about any allergies or preferences when ordering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="/reservations">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold">
                  Book Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
