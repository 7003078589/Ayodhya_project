import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from "lucide-react";

export default function Reservations() {
  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  const partySizes = [
    "1 person", "2 people", "3 people", "4 people", "5 people", "6 people",
    "7 people", "8 people", "9 people", "10 people", "11-15 people", "16-20 people"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Reservation Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold text-amber-600 leading-tight mb-8">
              RESERVATIONS
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-12 italic">
              Book your table for an unforgettable experience
            </p>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Reserve your table at Ayodhya and prepare for an exceptional vegetarian dining experience. 
                Our team is ready to make your visit memorable.
              </p>
              <p>
                Whether it&apos;s a romantic dinner, family celebration, or business meeting, 
                we&apos;ll ensure the perfect setting for your occasion.
              </p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Easy Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-gray-600">Flexible Times</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Reservation Visual */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📅</div>
                      <div className="text-amber-800 font-semibold text-lg">Book Your Table</div>
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
              RESERVE
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card className="border-amber-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-800 mb-6">Book Your Table</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">First Name *</Label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        className="mt-1 border-amber-300 focus:border-amber-500"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        type="text" 
                        className="mt-1 border-amber-300 focus:border-amber-500"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        className="mt-1 border-amber-300 focus:border-amber-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        className="mt-1 border-amber-300 focus:border-amber-500"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-gray-700">Date *</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        className="mt-1 border-amber-300 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-gray-700">Time *</Label>
                      <Select>
                        <SelectTrigger className="mt-1 border-amber-300 focus:border-amber-500">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="partySize" className="text-gray-700">Party Size *</Label>
                      <Select>
                        <SelectTrigger className="mt-1 border-amber-300 focus:border-amber-500">
                          <SelectValue placeholder="How many?" />
                        </SelectTrigger>
                        <SelectContent>
                          {partySizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-gray-700">Special Requests</Label>
                    <Input 
                      id="specialRequests" 
                      type="text" 
                      className="mt-1 border-amber-300 focus:border-amber-500"
                      placeholder="Dietary restrictions, celebrations, etc."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Info */}
          <div className="space-y-8">
            {/* Hours */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Restaurant Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Call Us</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-gray-600">reservations@ayodhya.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Policies</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Reservations are held for 15 minutes past the scheduled time</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Please call to cancel at least 2 hours in advance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Large parties (8+) may require a deposit</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>We accommodate dietary restrictions with advance notice</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Special Events */}
      <div className="bg-amber-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">Planning a Special Event?</h3>
          <p className="text-amber-700 max-w-2xl mx-auto mb-6">
            For private dining, corporate events, or celebrations with 20+ guests, 
            our party hall offers the perfect setting with custom catering options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Users className="w-5 h-5 mr-2" />
              Book Party Hall
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call for Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
