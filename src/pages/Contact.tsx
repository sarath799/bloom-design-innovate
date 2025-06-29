
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
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
    // Here you would typically send the form data to carelinkdesk@gmail.com
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", needType: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Send className="h-6 w-6 text-blue-600 dark:text-green-400 mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-green-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-green-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Type of Need *
                    </label>
                    <Select value={formData.needType} onValueChange={(value) => handleInputChange("needType", value)}>
                      <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Select what you need" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 z-50">
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="platform">Platform</SelectItem>
                        <SelectItem value="package">Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tell us about your project *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-green-400 min-h-32"
                      placeholder="Describe your project requirements, budget, timeline, and any specific needs..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-green-400 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">carelinkdesk@gmail.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-green-400 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                      <p className="text-gray-600 dark:text-gray-300">+91 XXXXX XXXXX</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Quick responses via WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">How long does a typical project take?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Most websites: 1-2 weeks. Complex projects: 3-6 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Do you provide ongoing support?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Yes, all packages include free support period.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Can I see examples of your work?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Check our portfolio page for recent projects.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Response Promise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We value your time and are committed to quick, professional responses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="hover-scale">
              <div className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-2">24 Hours</div>
              <div className="text-gray-600 dark:text-gray-300">Email Response Time</div>
            </div>
            <div className="hover-scale">
              <div className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-2">2 Hours</div>
              <div className="text-gray-600 dark:text-gray-300">WhatsApp Response</div>
            </div>
            <div className="hover-scale">
              <div className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-2">Same Day</div>
              <div className="text-gray-600 dark:text-gray-300">Project Proposal</div>
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
