
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 hover-scale">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-scale ${
                  isActive(link.path)
                    ? "text-blue-600 dark:text-green-400 bg-blue-50 dark:bg-green-400/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 hover-scale"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 hover-scale">
              <Link to="/platform">Try Platform</Link>
            </Button>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-500 hover-scale">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-blue-600 dark:text-green-400 bg-blue-50 dark:bg-green-400/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 dark:border-green-400 dark:text-green-400">
                  <Link to="/platform">Try Platform</Link>
                </Button>
                <Button asChild className="bg-blue-600 text-white dark:bg-green-400 dark:text-gray-900">
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
