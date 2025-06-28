
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare, Calendar, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    needType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", needType: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Send className="h-6 w-6 text-green-400 mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type of Need *
                    </label>
                    <Select value={formData.needType} onValueChange={(value) => handleInputChange("needType", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select what you need" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="design">Graphic Design</SelectItem>
                        <SelectItem value="platform">Training Platform</SelectItem>
                        <SelectItem value="package">Package Deal</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your project *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white focus:border-green-400 min-h-32"
                      placeholder="Describe your project requirements, budget, timeline, and any specific needs..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-400 text-gray-900 hover:bg-green-500">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email Us</h3>
                      <p className="text-gray-300">contact@plantechx.in</p>
                      <p className="text-sm text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">WhatsApp</h3>
                      <p className="text-gray-300">+91 XXXXX XXXXX</p>
                      <p className="text-sm text-gray-400">Quick responses via WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Book a Call</h3>
                      <p className="text-gray-300">Schedule a consultation</p>
                      <Button variant="outline" size="sm" className="mt-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                        Book Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300">India</p>
                      <p className="text-sm text-gray-400">Serving clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Free Platform Demo
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Download Package Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat with Our Team
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-1">How long does a typical project take?</h4>
                    <p className="text-sm text-gray-400">Most websites: 1-2 weeks. Complex projects: 3-6 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Do you provide ongoing support?</h4>
                    <p className="text-sm text-gray-400">Yes, all packages include free support period.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Can I see examples of your work?</h4>
                    <p className="text-sm text-gray-400">Check our portfolio page for recent projects.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Response Promise</h2>
          <p className="text-xl text-gray-300 mb-8">
            We value your time and are committed to quick, professional responses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24 Hours</div>
              <div className="text-gray-300">Email Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2 Hours</div>
              <div className="text-gray-300">WhatsApp Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">Same Day</div>
              <div className="text-gray-300">Project Proposal</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
