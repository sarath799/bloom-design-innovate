
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/4fcbd902-893f-407a-aa1d-f94982a29e7f.png" 
                  alt="PlantechX Logo" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white font-bold text-xl tracking-tight antialiased">
                  PlantechX
                </span>
              </div>
            </div>
            <p className="text-blue-600 dark:text-green-400 text-sm font-semibold">
              Training. Designing. Launching.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              From AI-powered examination systems to stunning business websites — PlantechX fuels growth for educators, startups, and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">Home</Link>
              <Link to="/platform" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">Training Platform</Link>
              <Link to="/studio" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">PlantechX Studio</Link>
              <Link to="/packages" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">Packages</Link>
              <Link to="/portfolio" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">Portfolio</Link>
              <Link to="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">AI-Powered Examinations</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Website Development</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">UI/UX Design</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Graphic Design</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Branding Solutions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">carelinkdesk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors hover-scale">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 transition-colors hover-scale">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <Link to="#" className="hover:text-blue-600 dark:hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-600 dark:hover:text-green-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 PlantechX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
