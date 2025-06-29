
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  Users, 
  Trophy, 
  Palette, 
  Code, 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent animate-scale-in">
              From Insight to Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
              Powering the Future of Learning with AI
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              From AI-powered examination systems to stunning business websites — PlantechX fuels growth for educators, startups, and creators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white text-lg px-8 py-6 hover-scale">
                <Link to="/platform">Try PlantechX Platform</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 text-lg px-8 py-6 hover-scale">
                <Link to="/studio">Launch My Website</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-lg px-8 py-6 hover-scale">
                <Link to="/packages">View Packages <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Mockup Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                alt="AI-powered examination platform mockup" 
                className="rounded-lg shadow-2xl"
              />
              <p className="text-center mt-4 text-gray-600 dark:text-gray-400">AI Exam Dashboard</p>
            </div>
            <div className="hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop" 
                alt="Logo design samples" 
                className="rounded-lg shadow-2xl"
              />
              <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Logo Design Samples</p>
            </div>
            <div className="hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Website thumbnails" 
                className="rounded-lg shadow-2xl"
              />
              <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Website Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Two powerful arms of innovation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Training Platform */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Brain className="h-12 w-12 text-blue-600 dark:text-green-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">PlantechX Training Platform</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI-based examination system</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Custom AI Test Creation</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Teachers share content → AI creates focused tests</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Purpose Platform</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">For colleges, coaching centers, and corporates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Trophy className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Placement Preparation</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Company-specific tests and interview training</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white">
                  <Link to="/platform">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Digital Services */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-green-400 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Palette className="h-12 w-12 text-blue-600 dark:text-green-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">PlantechX Studio</h3>
                    <p className="text-gray-600 dark:text-gray-400">Creative and web solutions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Code className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Website Development</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Responsive, SEO-friendly websites</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Palette className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">UI/UX Design</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Modern interfaces and user experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-600 dark:text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Branding Solutions</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Logos, graphics, and brand identity</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white">
                  <Link to="/studio">Explore Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose PlantechX?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">We let our work do the talking</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Affordable & Transparent", desc: "No hidden costs, clear pricing" },
              { title: "Tailor-Made Designs", desc: "No templates, everything custom" },
              { title: "Lightning-Fast Delivery", desc: "Quick turnaround times" },
              { title: "100% Responsive", desc: "Perfect on all devices" },
              { title: "Clean & Scalable Code", desc: "Built for the future" },
              { title: "Ongoing Support", desc: "We're here after launch" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 hover-scale">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-green-400/10 dark:to-blue-400/10 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Join hundreds of satisfied clients who trust PlantechX</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 hover-scale">
              <Link to="/platform">Book Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
