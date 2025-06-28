
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Fitness Coach Website",
      category: "Website",
      description: "Modern landing page for a fitness coach with booking system",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tags: ["Landing Page", "Booking System", "Responsive"]
    },
    {
      title: "Tech Startup Logo",
      category: "Logo Design",
      description: "Clean, modern logo design for AI technology startup",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop",
      tags: ["Brand Identity", "Logo", "Tech"]
    },
    {
      title: "E-commerce Store",
      category: "E-commerce",
      description: "Full online store for local boutique with payment integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["E-commerce", "Payment Gateway", "Inventory"]
    },
    {
      title: "Educational Platform UI",
      category: "UI/UX Design",
      description: "User interface design for online learning platform",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      tags: ["UI Design", "Education", "Dashboard"]
    },
    {
      title: "Restaurant Brand Kit",
      category: "Branding",
      description: "Complete brand identity including logo, menu design, and social media templates",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop",
      tags: ["Brand Kit", "Restaurant", "Print Design"]
    },
    {
      title: "Mobile App Interface",
      category: "Mobile Design",
      description: "Clean and intuitive mobile app design for productivity application",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      tags: ["Mobile UI", "App Design", "Productivity"]
    }
  ];

  const categories = ["All", "Website", "Logo Design", "UI/UX Design", "E-commerce", "Branding", "Mobile Design"];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Showcasing our best work across web development, design, and branding
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Every project tells a story of innovation, creativity, and client success
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-green-400 text-gray-900 hover:bg-green-500" 
                  : "border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-400 text-gray-900 hover:bg-green-500">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">120+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Websites Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Designs Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real feedback from real projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "PlantechX built my startup site in less than a week with a logo that exactly matched my brand vibe.",
                author: "Meera S.",
                company: "Founder of LearnPod"
              },
              {
                quote: "The e-commerce store they built has increased our online sales by 300%. Amazing work!",
                author: "Rajesh K.",
                company: "Owner, Fashion Boutique"
              },
              {
                quote: "Professional, fast, and exactly what we needed. The UI design exceeded our expectations.",
                author: "Priya M.",
                company: "Tech Startup CEO"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400/10 to-blue-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              View All Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Portfolio;
