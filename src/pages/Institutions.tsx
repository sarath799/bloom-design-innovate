
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Users, 
  BarChart3, 
  Download, 
  Wifi, 
  Shield,
  Clock,
  Award,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Institutions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Smart Tools for Smart Campuses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Empower your faculty, engage your students, and track batch performance—all from one powerful dashboard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              Schedule Campus Demo
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/contact">Get Institutional Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Institution Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                alt="Smart campus dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Educational Assessment</h2>
              <p className="text-gray-300 mb-6">
                From traditional pen-and-paper tests to AI-powered digital assessments that provide actionable insights 
                for both educators and students.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-green-400 mr-3" />
                  <span>Secure, proctored online examinations</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-green-400 mr-3" />
                  <span>Real-time performance analytics</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-green-400 mr-3" />
                  <span>Multi-batch management system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Institutions */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Features Built for Educational Institutions</h2>
            <p className="text-xl text-gray-300">Everything you need to modernize your assessment process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Upload className="h-6 w-6 mr-3" />
                  Easy Content Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Upload your curriculum content and let our AI automatically generate relevant test questions 
                  tailored to your syllabus.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Bulk content upload</li>
                  <li>• Multiple file format support</li>
                  <li>• Auto-categorization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Users className="h-6 w-6 mr-3" />
                  Faculty Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive dashboards for faculty members to monitor student performance, 
                  track progress, and identify areas needing attention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Individual student tracking</li>
                  <li>• Class performance overview</li>
                  <li>• Progress trend analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <BarChart3 className="h-6 w-6 mr-3" />
                  Performance Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Generate detailed class-wise and topic-wise performance reports with 
                  actionable insights for curriculum improvement.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Class-wise analytics</li>
                  <li>• Topic-wise breakdowns</li>
                  <li>• Comparative analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Download className="h-6 w-6 mr-3" />
                  Export Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Export all results, SWOT analysis data, and performance metrics in 
                  Excel or PDF format for easy sharing and archival.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Excel export</li>
                  <li>• PDF reports</li>
                  <li>• Bulk data export</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Wifi className="h-6 w-6 mr-3" />
                  Offline Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Special offline mode designed for rural campuses with limited internet connectivity, 
                  with automatic sync when online.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Works without internet</li>
                  <li>• Auto-sync capability</li>
                  <li>• Perfect for rural areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Shield className="h-6 w-6 mr-3" />
                  Secure Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Advanced security features including browser lockdown, plagiarism detection, 
                  and AI-powered proctoring for exam integrity.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Browser security</li>
                  <li>• Plagiarism detection</li>
                  <li>• AI proctoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Different Stakeholders */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefits for Every Stakeholder</h2>
            <p className="text-xl text-gray-300">How PlantechX transforms the educational experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Administrators */}
            <Card className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  <Award className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  For Administrators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Improve overall institutional performance metrics</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Reduce administrative overhead and paperwork</span>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Get comprehensive institutional analytics</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Ensure exam integrity and security</span>
                </div>
              </CardContent>
            </Card>

            {/* For Faculty */}
            <Card className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  <Users className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  For Faculty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Save hours on test creation and grading</span>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Get detailed insights into student understanding</span>
                </div>
                <div className="flex items-start">
                  <Upload className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Easy content management and organization</span>
                </div>
                <div className="flex items-start">
                  <FileSpreadsheet className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Generate reports for academic reviews</span>
                </div>
              </CardContent>
            </Card>

            {/* For Students */}
            <Card className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  <Award className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Understand strengths and weaknesses through SWOT</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Practice without time pressure in practice mode</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Track progress over time with detailed analytics</span>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-span">Prepare for placements with company-specific tests</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple Implementation Process</h2>
            <p className="text-xl text-gray-300">Get your institution up and running in just a few steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Demo & Discussion",
                description: "We understand your institutional needs and demonstrate the platform"
              },
              {
                step: "02",
                title: "Customization",
                description: "We customize the platform according to your curriculum and requirements"
              },
              {
                step: "03",
                title: "Training",
                description: "Comprehensive training for faculty and administrative staff"
              },
              {
                step: "04",
                title: "Go Live",
                description: "Launch with ongoing support and regular updates"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-400 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-green-400/5 to-blue-400/5 border-green-400/20 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <blockquote className="text-2xl font-medium text-gray-200 mb-6">
                "We've used the PlantechX Platform for 3 campus assessments and love the analytics. 
                The faculty dashboard has transformed how we monitor student progress."
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <div className="font-semibold text-white">Prof. Vinay R.</div>
                  <div className="text-gray-400">NRI College</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400/10 to-blue-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading educational institutions that have already modernized their assessment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 text-gray-900 hover:bg-green-500">
              Schedule Campus Demo
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Link to="/contact">Get Institutional Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Institutions;
