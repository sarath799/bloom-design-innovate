
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  FileText, 
  Award,
  BarChart3,
  Download,
  Upload,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Eye,
  BookOpen,
  ClipboardList
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Portals = () => {
  const collegeFeatures = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track batch performance, enrollment metrics, and student progress with live dashboards"
    },
    {
      icon: Calendar,
      title: "Batch Management",
      description: "Schedule and manage training batches with calendar integration and automated notifications"
    },
    {
      icon: Upload,
      title: "MoU Management",
      description: "Upload, track, and manage Memorandums of Understanding with automated renewal alerts"
    },
    {
      icon: Download,
      title: "Report Generation",
      description: "Download comprehensive reports on student performance, attendance, and outcomes"
    },
    {
      icon: Users,
      title: "Student Oversight",
      description: "Monitor student progress across all programs with detailed individual profiles"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Role-based access control ensuring data security and appropriate permissions"
    }
  ];

  const studentFeatures = [
    {
      icon: Eye,
      title: "Progress Tracking",
      description: "View your learning progress with detailed completion rates and skill assessments"
    },
    {
      icon: ClipboardList,
      title: "Attendance Records",
      description: "Access real-time attendance data with session-wise breakdown and notifications"
    },
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "Access course content, assignments, and resources from anywhere, anytime"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "View and download earned certificates with QR verification codes"
    },
    {
      icon: Calendar,
      title: "Schedule View",
      description: "Stay updated with upcoming classes, assignments, and important deadlines"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Full mobile experience with responsive design and offline capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
            Dedicated Portals
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Tailored experiences for colleges and students with secure, intuitive interfaces
          </p>
        </div>
      </section>

      {/* College Portal */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-6">
              <GraduationCap className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">College SPOC Portal</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive management dashboard for Single Points of Contact at partner institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {collegeFeatures.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-slate-700 dark:from-blue-400/20 dark:to-slate-400/20 rounded-2xl p-8 text-white dark:text-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Secure College Login</h3>
                <p className="text-lg mb-6 opacity-90">
                  Access your dedicated dashboard with role-based permissions and secure authentication
                </p>
                <div className="space-y-3">
                  {[
                    "Multi-factor authentication",
                    "Role-based access control", 
                    "Audit trail and activity logs",
                    "Data encryption and privacy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 opacity-90" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 hover-scale">
                  College Portal Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Portal */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/20 rounded-full mb-6">
              <Users className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Student Dashboard</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mobile-friendly student portal for tracking progress, accessing resources, and managing coursework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {studentFeatures.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400/20 dark:to-blue-400/20 rounded-2xl p-8 text-white dark:text-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Mobile-First Experience</h3>
                <p className="text-lg mb-6 opacity-90">
                  Access your learning dashboard anytime, anywhere with our responsive mobile interface
                </p>
                <div className="space-y-3">
                  {[
                    "Responsive design for all devices",
                    "Offline capability for core features",
                    "Push notifications for updates", 
                    "Quick access to certificates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 opacity-90" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 hover-scale">
                  Student Portal Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Get Started with Your Portal
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of colleges and students already using PlantechX OS portals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-green-400 dark:hover:bg-green-500 dark:text-gray-900 text-white hover-scale">
              <Link to="/contact">
                Request College Access <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover-scale">
              <Link to="/platform">
                Learn More About Features
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Portals;
