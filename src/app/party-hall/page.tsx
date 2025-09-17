import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Utensils, Music, Camera, Gift, Phone, Mail } from "lucide-react";

export default function PartyHall() {
  const packages = [
    {
      name: "Intimate Gathering",
      capacity: "20-40 guests",
      price: "$299",
      duration: "4 hours",
      features: [
        "Private dining area",
        "Basic sound system",
        "Table decorations",
        "Menu selection (up to 3 courses)",
        "Event coordinator"
      ],
      popular: false
    },
    {
      name: "Celebration Package",
      capacity: "50-80 guests",
      price: "$599",
      duration: "6 hours",
      features: [
        "Full party hall access",
        "Premium sound system",
        "Custom decorations",
        "Full menu selection",
        "Dedicated event coordinator",
        "Photo backdrop area"
      ],
      popular: true
    },
    {
      name: "Grand Event",
      capacity: "100-150 guests",
      price: "$999",
      duration: "8 hours",
      features: [
        "Entire venue exclusive use",
        "Professional sound & lighting",
        "Custom theme decorations",
        "Premium catering menu",
        "Event planning consultation",
        "Photography setup area",
        "Valet parking assistance"
      ],
      popular: false
    }
  ];

  const amenities = [
    {
      icon: Users,
      title: "Flexible Capacity",
      description: "Accommodate 20-150 guests with customizable seating arrangements"
    },
    {
      icon: Music,
      title: "Sound System",
      description: "Professional audio equipment with wireless microphones"
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Full-service catering with customizable vegetarian menus"
    },
    {
      icon: Camera,
      title: "Photo Areas",
      description: "Beautiful backdrops and lighting for memorable photos"
    },
    {
      icon: Gift,
      title: "Event Planning",
      description: "Dedicated coordinator to help plan your perfect event"
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Available for all types of celebrations and corporate events"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Party Hall Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight mb-8">
              PARTY HALL
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              Celebrate your special moments in style
            </p>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Our elegant party hall provides the perfect backdrop for your most important moments. 
                Whether you&apos;re celebrating a birthday, anniversary, or corporate event.
              </p>
              <p>
                With flexible seating arrangements, professional sound systems, and our signature 
                vegetarian catering, your guests will enjoy both the ambiance and the cuisine.
              </p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Up to 150 Guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Flexible Booking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Party Hall Visual */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎉</div>
                      <div className="text-amber-800 font-semibold text-lg">Event Space</div>
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
              EVENTS
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-amber-800 mb-6">Perfect for Every Celebration</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Our elegant party hall provides the perfect backdrop for your most important moments. 
                Whether you&apos;re celebrating a birthday, anniversary, corporate event, or wedding reception, 
                we create unforgettable experiences tailored to your vision.
              </p>
              <p>
                With flexible seating arrangements, professional sound systems, and our signature 
                vegetarian catering, your guests will enjoy both the ambiance and the cuisine.
              </p>
              <p>
                Our experienced event coordinators work closely with you to ensure every detail 
                is perfect, from initial planning to the final celebration.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Event
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Button>
            </div>
          </div>
          <div className="bg-amber-200 rounded-2xl p-8 text-center">
            <div className="w-full h-80 bg-amber-300 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Users className="w-20 h-20 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Beautiful Event Space</h3>
                <p className="text-amber-700">Photo gallery coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Packages */}
      <div className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">Event Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`relative hover:shadow-lg transition-shadow border-amber-200 ${pkg.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600"><strong>Capacity:</strong> {pkg.capacity}</p>
                    <p className="text-gray-600"><strong>Duration:</strong> {pkg.duration}</p>
                    <p className="text-3xl font-bold text-amber-600">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}>
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">Venue Amenities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
            <Card key={amenity.title} className="text-center hover:shadow-lg transition-shadow border-amber-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perfect for Every Occasion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Birthday Parties", icon: "🎂" },
              { title: "Anniversaries", icon: "💕" },
              { title: "Corporate Events", icon: "💼" },
              { title: "Wedding Receptions", icon: "💒" },
              { title: "Graduation Parties", icon: "🎓" },
              { title: "Holiday Celebrations", icon: "🎉" },
              { title: "Baby Showers", icon: "👶" },
              { title: "Retirement Parties", icon: "🏆" }
            ].map((event) => (
              <div key={event.title} className="text-center">
                <div className="text-4xl mb-3">{event.icon}</div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-800 mb-6">Ready to Plan Your Event?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our event planning team to discuss your vision and create the perfect celebration. 
            We&apos;re here to make your special day unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Mail className="w-5 h-5 mr-2" />
              Email events@ayodhya.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
