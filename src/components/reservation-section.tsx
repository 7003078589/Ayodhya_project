"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, CheckCircle, AlertCircle, Sparkles, Star, Heart } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
    type: "restaurant"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  const occasions = [
    "Birthday", "Anniversary", "Business Meeting", "Family Gathering",
    "Date Night", "Celebration", "Other"
  ];

  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Reserve your table online in just a few clicks",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Choose from available time slots throughout the day",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Users,
      title: "Group Friendly",
      description: "Accommodate parties of any size with advance notice",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing experience! The reservation process was so smooth.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Perfect for our anniversary dinner. Highly recommended!",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Great service and the party hall was perfect for our event.",
      avatar: "👩‍🎨"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show success message
    toast.success("Reservation submitted successfully!", {
      description: "We'll contact you shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      message: "",
      type: "restaurant"
    });

    setIsSubmitting(false);
  };

  return (
    <section id="reservations" className="py-32 bg-gradient-to-br from-rose-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full px-6 py-3 mb-6"
          >
            <Calendar className="w-5 h-5 text-rose-600" />
            <span className="text-rose-700 font-semibold">Book Your Experience</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Make a{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Reservation
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Book your table or party hall for an unforgettable dining experience. 
            We recommend making reservations in advance, especially for weekends and special occasions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Reservation Form - Unique Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Form Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-rose-50/80 rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-orange-100/20 rounded-3xl"></div>
              
              <div className="relative p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Reservation Form</h3>
                    <p className="text-gray-600">Fill in your details to book your table</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Reservation Type */}
                  <div className="space-y-3">
                    <Label htmlFor="type" className="text-lg font-semibold text-gray-900">Reservation Type</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl">
                        <SelectValue placeholder="Select reservation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant Table</SelectItem>
                        <SelectItem value="party-hall">Party Hall Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-lg font-semibold text-gray-900">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg font-semibold text-gray-900">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-lg font-semibold text-gray-900">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="date" className="text-lg font-semibold text-gray-900">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="time" className="text-lg font-semibold text-gray-900">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Guests and Occasion */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="guests" className="text-lg font-semibold text-gray-900">Number of Guests *</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="occasion" className="text-lg font-semibold text-gray-900">Special Occasion</Label>
                      <Select value={formData.occasion} onValueChange={(value) => handleInputChange("occasion", value)}>
                        <SelectTrigger className="h-12 bg-white/80 border-2 border-rose-200 rounded-xl">
                          <SelectValue placeholder="Select occasion (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {occasions.map((occasion) => (
                            <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-lg font-semibold text-gray-900">Additional Requests</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any special requests or dietary requirements?"
                      rows={4}
                      className="bg-white/80 border-2 border-rose-200 rounded-xl"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-rose-500/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-6 h-6 mr-3" />
                        Make Reservation
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Information Sidebar - Unique Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">What Our Customers Say</h3>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="p-6 bg-gradient-to-r from-rose-100 to-orange-100 rounded-2xl border border-rose-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-rose-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-rose-600" />
                  <span className="text-gray-700">reservations@adhoya.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Our team is available to help you with your reservation and answer any questions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;