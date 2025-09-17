import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Star } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Green Street", "Vegetarian District", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ayodhya.com", "reservations@ayodhya.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon - Thu: 11:00 AM - 10:00 PM",
        "Fri - Sat: 11:00 AM - 11:00 PM",
        "Sunday: 12:00 PM - 9:00 PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Contact Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight mb-8">
              CONTACT US
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              We'd love to hear from you
            </p>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Get in touch with us for reservations, events, or any questions. 
                Our team is here to help make your experience at Ayodhya unforgettable.
              </p>
              <p>
                Whether you're planning a special celebration or just want to learn more 
                about our vegetarian cuisine, we're always happy to assist.
              </p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Open Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Visual */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📞</div>
                      <div className="text-amber-800 font-semibold text-lg">Get In Touch</div>
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
              CONTACT
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for reservations, events, or any questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="text-center group hover:shadow-lg transition-all duration-300 bg-white rounded-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name</Label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name</Label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                  <Textarea 
                    id="message" 
                    className="mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Find Us Here</h3>
                  <p className="text-gray-600">Interactive map coming soon</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call for Reservations</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-gray-600">info@ayodhya.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Best Time to Call</p>
                      <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Notice */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Special Events & Catering</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Planning a special event? Our party hall and catering services are perfect for birthdays, 
            anniversaries, corporate events, and more. Contact us for custom packages and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call for Event Planning
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold">
              View Party Hall
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
