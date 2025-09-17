import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Leaf, Clock, Star, MapPin, Phone } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source only the finest, freshest ingredients from local farms and trusted suppliers."
    },
    {
      icon: Award,
      title: "Culinary Excellence",
      description: "Our chefs bring years of experience and passion to create exceptional vegetarian dishes."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe in building connections through food and creating memorable dining experiences."
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description: "We honor traditional cooking techniques while embracing modern culinary innovation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - About Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight mb-8">
              OUR STORY
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              Where passion meets culinary artistry
            </p>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Founded in 2020, Ayodhya was born from a simple yet powerful vision: to create a space where 
                vegetarian cuisine could be celebrated as the art form it truly is.
              </p>
              <p>
                Our founder, Chef Priya Sharma, spent years traveling across India and Europe, gathering 
                inspiration from traditional recipes and modern culinary techniques.
              </p>
            </div>
            <Link href="/menu">
              <Button className="border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - About Visual */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👩‍🍳</div>
                      <div className="text-amber-800 font-semibold text-lg">Chef Priya Sharma</div>
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
              ABOUT
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Adhoya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group hover:shadow-lg transition-all duration-300 bg-white rounded-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Chef</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    <strong className="text-amber-600">Chef Priya Sharma</strong> brings over 15 years of culinary 
                    expertise to Ayodhya. Trained in both traditional Indian cooking and modern European techniques, 
                    she has created a unique fusion that celebrates the best of vegetarian cuisine.
                  </p>
                  <p>
                    Chef Priya's philosophy is simple: "Great food comes from great ingredients, prepared with 
                    respect for tradition and a willingness to innovate." Her dishes have been featured in 
                    numerous culinary magazines and have earned her recognition as one of the city's top 
                    vegetarian chefs.
                  </p>
                  <p>
                    When she's not in the kitchen, Chef Priya enjoys teaching cooking classes and working with 
                    local farmers to source the finest seasonal ingredients for our menu.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/menu">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                      View Chef's Menu
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold">
                      Book Cooking Class
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-12 text-center">
                <div className="w-64 h-64 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <span className="text-8xl">👩‍🍳</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Chef Priya Sharma</h3>
                <p className="text-amber-700 text-lg mb-4">Executive Chef & Founder</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">50+</div>
                    <div className="text-sm text-gray-600">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Vegetarian Restaurant 2023</h3>
              <p className="text-gray-600">City Food Awards</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Hospitality Association</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Top Party Venue</h3>
              <p className="text-gray-600">Event Planners Choice</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
