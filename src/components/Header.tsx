
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/platform", label: "Training Platform" },
    { path: "/studio", label: "PlantechX Studio" },
    { path: "/institutions", label: "For Institutions" },
    { path: "/packages", label: "Packages" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4fcbd902-893f-407a-aa1d-f94982a29e7f.png" 
              alt="PlantechX" 
              className="h-8 w-8"
            />
            <span className="text-white font-bold text-xl">PlantechX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-green-400 bg-green-400/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/platform">Try Platform</Link>
            </Button>
            <Button asChild className="bg-green-400 text-gray-900 hover:bg-green-500">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-green-400 bg-green-400/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline" className="border-green-400 text-green-400">
                  <Link to="/platform">Try Platform</Link>
                </Button>
                <Button asChild className="bg-green-400 text-gray-900">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
