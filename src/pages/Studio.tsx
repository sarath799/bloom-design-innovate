
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Figma, 
  Monitor,
  ShoppingCart,
  FileText,
  Image,
  PenTool,
  Camera,
  Layout
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Studio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            PlantechX Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Design, development, and branding services to help startups, professionals, and institutions go online with impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 hover-scale">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Website Development */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-green-400">
                  <Code className="h-8 w-8 mr-3" />
                  Website Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="Website development" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Business Websites
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Monitor className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Landing Pages
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <FileText className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Personal Portfolios
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <ShoppingCart className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    E-commerce Sites
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Built with:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">HTML/CSS</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Bootstrap</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">WordPress</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">React</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white">
                  Start Website Project
                </Button>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-green-400">
                  <Palette className="h-8 w-8 mr-3" />
                  UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                  alt="UI/UX Design" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Layout className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Wireframes
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Monitor className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    High-Fidelity Prototypes
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Smartphone className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Mobile App Interfaces
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Web App Design
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools we use:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Figma</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Adobe XD</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Sketch</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white">
                  Start Design Project
                </Button>
              </CardContent>
            </Card>

            {/* Graphic Design */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-green-400">
                  <PenTool className="h-8 w-8 mr-3" />
                  Graphic Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop" 
                  alt="Logo design samples" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <PenTool className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Logo Design
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <FileText className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Poster Design
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Image className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Social Media Creatives
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Monitor className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Presentation Decks
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Camera className="h-4 w-4 text-blue-600 dark:text-green-400 mr-2" />
                    Video Thumbnails
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Specializing in:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Brand Identity</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Print Design</span>
                    <span className="bg-blue-100 dark:bg-green-400/20 text-blue-700 dark:text-green-400 px-2 py-1 rounded text-xs">Digital Media</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white">
                  Start Design Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Studio */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose PlantechX Studio?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Professional quality that speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fully Responsive",
                desc: "Perfect on all devices - desktop, tablet, mobile",
                icon: Smartphone
              },
              {
                title: "SEO-Friendly",
                desc: "Built for search engines from the ground up",
                icon: Globe
              },
              {
                title: "Lightning Fast",
                desc: "Optimized for speed and performance",
                icon: Code
              },
              {
                title: "Custom Design",
                desc: "No templates - everything tailored to your brand",
                icon: Palette
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center hover-scale">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">From concept to launch in simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We understand your needs and goals" },
              { step: "02", title: "Design", desc: "Create stunning visuals and user experience" },
              { step: "03", title: "Develop", desc: "Build with clean, scalable code" },
              { step: "04", title: "Deploy", desc: "Launch and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 dark:bg-green-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technologies We Use</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Modern tools for modern solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "HTML5", "CSS3", "JavaScript", "React", "WordPress", "Bootstrap",
              "Figma", "Adobe XD", "Photoshop", "Illustrator", "Node.js", "MongoDB"
            ].map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
                <p className="text-gray-900 dark:text-white font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-green-400/10 dark:to-blue-400/10 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 hover-scale">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Studio;
