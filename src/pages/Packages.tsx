
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Packages = () => {
  const packages = [
    {
      name: "Starter Website",
      price: "₹15,000",
      ideal: "Freelancers, Coaches",
      features: [
        "1-page responsive website",
        "Custom logo design",
        "Contact form integration",
        "Mobile responsive design",
        "Basic SEO optimization",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Startup Combo",
      price: "₹35,000",
      ideal: "Startups & Small Teams",
      features: [
        "5-page professional website",
        "Logo + brand kit",
        "Social media creatives (10 posts)",
        "Contact & inquiry forms",
        "SEO optimization",
        "Google Analytics setup",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Online Store",
      price: "₹65,000",
      ideal: "Retailers, Small Brands",
      features: [
        "Full eCommerce website",
        "Payment gateway integration",
        "Product catalog (up to 100 items)",
        "Inventory management",
        "Order management system",
        "Brand kit + logo",
        "6 months support"
      ],
      popular: false
    },
    {
      name: "Design Kit",
      price: "₹25,000",
      ideal: "Creators & Influencers",
      features: [
        "Logo + brand identity",
        "Instagram grid templates (20 posts)",
        "Story templates (10 designs)",
        "Poster designs (5 custom)",
        "Brand color palette",
        "Font recommendations",
        "Design guidelines document"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Packages
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Budget-friendly packages tailored for different needs
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Choose the perfect package to kickstart your digital presence
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-green-400' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-400 my-2">{pkg.price}</div>
                  <p className="text-gray-400">Ideal for {pkg.ideal}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 pt-4">
                    <Button asChild className="w-full bg-green-400 text-gray-900 hover:bg-green-500">
                      <Link to="/contact">Choose This Package</Link>
                    </Button>
                    <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Discuss Requirements
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Something Custom?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't see exactly what you need? We create custom solutions tailored to your specific requirements and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Websites</h3>
              <p className="text-gray-400">Large-scale websites with advanced functionality</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">E-learning Platforms</h3>
              <p className="text-gray-400">Custom learning management systems</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Complex Integrations</h3>
              <p className="text-gray-400">API integrations and third-party connections</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Download className="h-4 w-4 mr-2" />
              Download Packages PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Packages?</h2>
            <p className="text-xl text-gray-300">Transparent pricing, exceptional value</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Hidden Costs", desc: "What you see is what you pay" },
              { title: "Fast Delivery", desc: "Most projects completed in 1-2 weeks" },
              { title: "Unlimited Revisions", desc: "We work until you're 100% satisfied" },
              { title: "Ongoing Support", desc: "Free support period included" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400/10 to-blue-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your package and let's bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              <Link to="/contact">Get Started Today</Link>
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

export default Packages;
