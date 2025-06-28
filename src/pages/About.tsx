
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Users, Zap, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            About PlantechX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Combining educational innovation and design intelligence to solve real-world digital problems
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              PlantechX is a multi-disciplinary brand offering two core arms: our AI-powered training platform for education and hiring, 
              and comprehensive digital services for startups, institutions, and businesses. We bridge the gap between technology and 
              creativity to deliver solutions that not only work but inspire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <Brain className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">PlantechX Training Platform</h3>
                  <p className="text-gray-300">
                    An AI-based examination system that revolutionizes how educational assessments are created, 
                    delivered, and analyzed for maximum learning impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <Code className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Digital Services</h3>
                  <p className="text-gray-300">
                    Creative and web solutions that help startups, institutions, and businesses establish 
                    a powerful digital presence with stunning design and functionality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                description: "We embrace cutting-edge technology and creative solutions to stay ahead of the curve."
              },
              {
                icon: Users,
                title: "Client-Centric",
                description: "Every solution is tailored to our clients' unique needs and goals, ensuring maximum impact."
              },
              {
                icon: Target,
                title: "Quality Excellence",
                description: "We maintain the highest standards in every project, from code quality to design aesthetics."
              },
              {
                icon: Award,
                title: "Transparent Process",
                description: "Clear communication, honest pricing, and no hidden surprises throughout our partnership."
              },
              {
                icon: Brain,
                title: "Continuous Learning",
                description: "We stay updated with the latest trends and technologies to deliver modern solutions."
              },
              {
                icon: Code,
                title: "Scalable Solutions",
                description: "Every solution we build is designed to grow with your business and adapt to future needs."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose PlantechX?</h2>
            <p className="text-xl text-gray-300">We let our work do the talking</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Affordable & Transparent Pricing",
                "Tailor-Made Designs – No Templates",
                "Lightning-Fast Delivery",
                "100% Responsive on All Devices",
                "Scalable & Clean Code",
                "Ongoing Support & Revisions",
                "Professional & Confidential Approach",
                "Proven Track Record"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                description: "We dive deep into your needs, goals, and challenges to create the perfect solution."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive plan that aligns with your objectives and budget."
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings the vision to life with cutting-edge technology and creative design."
              },
              {
                step: "04",
                title: "Excellence",
                description: "We refine, test, and perfect every detail until it exceeds your expectations."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400/10 to-blue-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Your Brand is Safe in Professional Hands</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied clients who trust PlantechX with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
