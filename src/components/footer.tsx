import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Ayodhya</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Experience the finest vegetarian cuisine in an elegant setting. 
              Our restaurant offers a perfect blend of traditional flavors and modern presentation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-amber-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-amber-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-amber-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-amber-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-amber-100 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/party-hall" className="text-amber-100 hover:text-white transition-colors">
                  Party Hall
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-amber-100 hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100 text-sm">
                  123 Green Street,<br />
                  Vegetarian District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100 text-sm">info@ayodhya.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-300" />
                <div className="text-amber-100 text-sm">
                  <div>Mon - Thu: 11:00 AM - 10:00 PM</div>
                  <div>Fri - Sat: 11:00 AM - 11:00 PM</div>
                  <div>Sunday: 12:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-100 text-sm">
            © 2024 Ayodhya Restaurant. All rights reserved. | 
            <Link href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
            <Link href="#" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
