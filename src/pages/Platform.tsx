
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  BookOpen, 
  Trophy, 
  BarChart, 
  Globe, 
  Mic,
  FileText,
  Clock,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Platform = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            PlantechX Training Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Our flagship AI-powered examination solution built to make assessments smarter, secure, and insightful
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              Book a Free Demo
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/contact">Request Access</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Visual */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                alt="AI examination platform interface" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Assessment Creation</h2>
              <p className="text-gray-300 mb-6">
                Simply share what you've taught, and our AI creates focused, comprehensive tests tailored to your specific class and topics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Brain className="h-6 w-6 text-green-400 mr-3" />
                  <span>AI analyzes your curriculum content</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-green-400 mr-3" />
                  <span>Generates questions in seconds</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-6 w-6 text-green-400 mr-3" />
                  <span>Provides detailed analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Who Is It For?</h2>
            <p className="text-xl text-gray-300">Perfect for educational institutions and corporate training</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Colleges & Universities", desc: "Streamline student assessments" },
              { icon: Users, title: "Coaching Centers", desc: "Enhance preparation programs" },
              { icon: Trophy, title: "Corporate Recruiters", desc: "Screen candidates effectively" },
              { icon: Globe, title: "Training Institutes", desc: "Deliver professional certifications" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:border-green-400 transition-all duration-300">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need for modern assessments</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature Cards */}
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Brain className="h-6 w-6 mr-3" />
                    Custom Class-Based AI Test Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Teachers share what they've taught → Our AI creates focused tests for that specific class and topic</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Clock className="h-6 w-6 mr-3" />
                    Practice Mode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">No timers, stress-free learning environment for students to practice at their own pace</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Trophy className="h-6 w-6 mr-3" />
                    Company-Specific Test Packs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Prepare for TCS, Wipro, Infosys, and other major companies with tailored question sets</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Mic className="h-6 w-6 mr-3" />
                    LSRW Skills Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Comprehensive Listening, Speaking, Reading, and Writing assessment similar to Versant</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <BarChart className="h-6 w-6 mr-3" />
                    SWOT Analysis Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Detailed performance analytics showing Strengths, Weaknesses, Opportunities, and Threats</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Shield className="h-6 w-6 mr-3" />
                    Admin & Faculty Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Comprehensive management tools for administrators and teaching staff</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Certification Access</h3>
                <p className="text-gray-300">Courses aligned with internationally recognized standards and programs</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Placement Interview Prep</h3>
                <p className="text-gray-300">Real-time mock interviews, resume help, and company-specific question practice</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <Mic className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Interview Training</h3>
                <p className="text-gray-300">Company-specific questions, group discussions, and mock HR/Tech interviews</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Add-Ons</h2>
            <p className="text-xl text-gray-300">Optional upgrades to enhance your platform</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border-green-400/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Mic className="h-6 w-6 mr-3" />
                  LSRW Skills Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive assessment of Listening, Speaking, Reading, and Writing skills with AI-based feedback similar to professional language tests.
                </p>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                  Add to Package
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border-green-400/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <FileText className="h-6 w-6 mr-3" />
                  Resume Builder + Interview Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Industry-ready resume templates, comprehensive mock interviews, and group discussion practice sessions.
                </p>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                  Add to Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400/10 to-blue-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future of Testing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free demo and see how PlantechX can transform your assessment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              Book a Free Demo
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/contact">Request Access</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Platform;
