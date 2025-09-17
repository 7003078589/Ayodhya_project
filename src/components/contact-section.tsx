"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Navigation, Star, Heart, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 Green Street",
        "Vegetarian District",
        "City, State 12345"
      ],
      action: "Get Directions",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 123-4568"
      ],
      action: "Call Now",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@adhoya.com",
        "reservations@adhoya.com"
      ],
      action: "Send Email",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon - Thu: 11:00 AM - 10:00 PM",
        "Fri - Sat: 11:00 AM - 11:00 PM",
        "Sunday: 12:00 PM - 9:00 PM"
      ],
      action: "View Menu",
      color: "from-orange-400 to-red-500"
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "Call Now",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support",
      action: "Start Chat",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Navigation,
      title: "Visit Us",
      description: "Come see our restaurant",
      action: "Get Directions",
      color: "from-purple-400 to-pink-500"
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
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <MessageCircle className="w-5 h-5 text-cyan-600" />
            <span className="text-cyan-700 font-semibold">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our menu, 
            want to book our party hall, or just want to say hello, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form - Unique Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Form Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-cyan-50/90 rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-3xl"></div>
              
              <div className="relative p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-lg font-semibold text-gray-900">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="h-12 bg-white/80 border-2 border-cyan-200 rounded-xl"
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
                        className="h-12 bg-white/80 border-2 border-cyan-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-lg font-semibold text-gray-900">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      required
                      className="h-12 bg-white/80 border-2 border-cyan-200 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-lg font-semibold text-gray-900">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="bg-white/80 border-2 border-cyan-200 rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information - Unique Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-200 hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{action.title}</h4>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                      </div>
                      <div className="text-cyan-600 font-semibold text-sm">{action.action}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center text-cyan-800">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-sm">Click to view our location</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <Navigation className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600">
              Call us directly for immediate assistance with reservations and inquiries.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h3>
            <p className="text-gray-600">
              We care about your experience and are here to make it memorable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;