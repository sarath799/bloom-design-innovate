import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Presentation, 
  Palette, 
  Award,
  TrendingUp,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  console.log("Index page is rendering");
  
  const partnerLogos = [
    { name: "College A", logo: "🎓" },
    { name: "College B", logo: "🏛️" },
    { name: "College C", logo: "📚" },
    { name: "College D", logo: "🎯" },
  ];

  const previewPanels = [
    {
      title: "Training Dashboard",
      description: "Real-time analytics for all training programs",
      icon: Presentation,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Studio Projects", 
      description: "Manage creative workflows from ideation to delivery",
      icon: Palette,
      color: "from-green-500 to-green-600"
    },
    {
      title: "College Analytics",
      description: "Institution-wide performance insights",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "50+", label: "College Partners", icon: BookOpen },
    { number: "1000+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Success Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-slate-600 to-blue-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
              Powering Institutions with Intelligence
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600 dark:text-green-400">
              PlantechX OS
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              One platform to manage leads, students, clients, and institutions. 
              Streamline your educational operations with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover-scale text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-slate-200 dark:border-gray-700 hover-scale">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-blue-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-slate-600 dark:text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto">
          <p className="text-center text-slate-600 dark:text-gray-400 mb-8 text-lg">
            Trusted by leading educational institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center space-x-2 text-2xl opacity-70 hover:opacity-100 transition-opacity hover-scale">
                <span>{partner.logo}</span>
                <span className="text-slate-700 dark:text-gray-300 font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Panels */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Experience the Platform
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get a preview of our comprehensive modules designed for modern educational institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {previewPanels.map((panel, index) => (
              <Card key={index} className="group bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover-scale overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${panel.color}`} />
                <CardContent className="p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${panel.color} mb-6`}>
                    <panel.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {panel.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {panel.description}
                  </p>
                  <Button variant="ghost" className="text-blue-600 dark:text-green-400 hover:bg-blue-50 dark:hover:bg-green-400/10 p-0 h-auto font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-900/50 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Two Powerful Platforms, One Solution
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              PlantechX OS combines training management and creative project workflows in a unified CRM platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Training Platform */}
            <Card className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mr-4">
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Training Platform</h3>
                    <p className="text-slate-600 dark:text-gray-400">Educational Program Management</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Multi-College Institution Management",
                    "Batch Scheduling & Calendar Sync", 
                    "Student Progress Tracking",
                    "Trainer Allocation System",
                    "Automated Certificate Generation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  <Link to="/platform">Explore Training Platform</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Studio Platform */}
            <Card className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mr-4">
                    <Palette className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Studio Platform</h3>
                    <p className="text-slate-600 dark:text-gray-400">Creative Project Management</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Client & Project Workflow Management",
                    "Student Assignment to Live Projects",
                    "Invoice Generation & Tracking",
                    "Design Review & Feedback System",
                    "Portfolio & Showcase Management"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-6 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white">
                  <Link to="/studio">Explore Studio Platform</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-slate-700 dark:from-green-400/20 dark:to-blue-400/20 text-white dark:text-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of institutions already using PlantechX OS to streamline their operations and boost student success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 hover-scale text-lg px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900 hover-scale text-lg px-8 py-3">
              <Link to="/contact">Contact Sales</Link>
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
