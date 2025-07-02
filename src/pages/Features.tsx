
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  BookOpen, 
  Palette, 
  Award,
  Target,
  Bell,
  MessageSquare,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  UserCheck,
  ClipboardList,
  PieChart,
  Settings,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Features = () => {
  const coreFeatures = [
    {
      icon: BarChart3,
      title: "Unified Dashboard",
      description: "Real-time analytics for leads, projects, revenue, and enrollment statistics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Centralized system for Training, Studio, and hybrid leads with automated scoring",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Support Ticket System",
      description: "Integrated inbox with tagging, assignment, and priority management",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Task & Calendar Planner",
      description: "Smart scheduling with reminders, daily views, and team coordination",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description: "Comprehensive reporting with exportable charts and custom dashboards",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Granular permissions and security controls for different user types",
      color: "from-red-500 to-red-600"
    }
  ];

  const trainingFeatures = [
    {
      icon: GraduationCap,
      title: "Multi-College Management",
      description: "Manage multiple institutions with dedicated dashboards and MoU tracking",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Batch Scheduling",
      description: "Advanced scheduling with calendar sync and automated notifications",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Course & Curriculum",
      description: "Comprehensive course management with curriculum tracking and updates",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student lifecycle management with progress tracking",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: UserCheck,
      title: "Trainer Allocation",
      description: "Smart trainer assignment with rating system and workload balancing",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: ClipboardList,
      title: "Attendance & Progress",
      description: "Real-time attendance tracking with automated progress reports",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Certificate Generation",
      description: "Automated certificate creation with QR validation and blockchain verification",
      color: "from-red-500 to-red-600"
    },
    {
      icon: PieChart,
      title: "Institution Dashboards",
      description: "Dedicated analytics and reporting for each partner institution",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const studioFeatures = [
    {
      icon: Palette,
      title: "Project Workflow",
      description: "Complete workflow management from ideation to design to delivery",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Comprehensive client portal with project history and communication logs",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description: "Automated invoicing with payment tracking and recurring billing",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Feedback Tracking",
      description: "Structured feedback collection with approval workflows",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Student Assignment",
      description: "Assign students to live projects with skill matching algorithms",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Portfolio Management",
      description: "Showcase completed projects with client testimonials and case studies",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
            Comprehensive Features
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how PlantechX OS revolutionizes educational institution management with powerful, integrated tools
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-100 dark:bg-gray-800 p-1 rounded-lg">
              <TabsTrigger 
                value="core" 
                className="text-lg py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-green-400"
              >
                Core CRM
              </TabsTrigger>
              <TabsTrigger 
                value="training" 
                className="text-lg py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-green-400"
              >
                Training Platform
              </TabsTrigger>
              <TabsTrigger 
                value="studio" 
                className="text-lg py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-green-400"
              >
                Studio Platform
              </TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Core CRM Modules</h2>
                <p className="text-xl text-slate-600 dark:text-gray-300">
                  Essential business management tools for educational institutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
                    <CardHeader className="pb-4">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} w-fit mb-4`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training" className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Training Platform Features</h2>
                <p className="text-xl text-slate-600 dark:text-gray-300">
                  Comprehensive tools for managing educational programs and student success
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trainingFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
                    <CardHeader className="pb-4">
                      <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${feature.color} w-fit mb-3`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-slate-800 dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="studio" className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Studio Platform Features</h2>
                <p className="text-xl text-slate-600 dark:text-gray-300">
                  Professional creative project management and client workflow tools
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studioFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
                    <CardHeader className="pb-4">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} w-fit mb-4`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integration Ready */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Ready for Integration</h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            PlantechX OS seamlessly integrates with your existing tools and platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Zoom", icon: "🎥" },
              { name: "Google Meet", icon: "📞" }, 
              { name: "Stripe", icon: "💳" },
              { name: "LMS APIs", icon: "📚" }
            ].map((integration, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover-scale p-6">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <div className="text-slate-800 dark:text-white font-semibold">{integration.name}</div>
              </Card>
            ))}
          </div>

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Features;
