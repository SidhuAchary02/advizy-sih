import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  ArrowRight,
  Award,
  Calendar,
  Lightbulb,
  Sparkles,
  Zap,
  TrendingUp,
  Brain,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Advizy
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/quiz" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Career Quiz
            </Link>
            <Link href="/colleges" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Colleges
            </Link>
            <Link href="/scholarships" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Scholarships
            </Link>
            <Link href="/career-paths" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Career Paths
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-indigo-50">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200 px-4 py-2 text-sm font-semibold"
          >
            🚀 New Career Guidance Platform for Students
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
            Discover Your
            <span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Dream Career
            </span>
            <br />
            Path Today! ✨
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
            Get personalized career recommendations, explore colleges, find scholarships, and connect with mentors.
            Start your career journey with confidence and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold shadow-xl"
              >
                Start Your Journey FREE 🎯
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 border-2 border-indigo-300 hover:bg-indigo-50 bg-transparent"
              >
                Take Career Quiz 📝
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>100% Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-500" />
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-500" />
              <span>Personalized Guidance</span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <img
            src="/diverse-group-of-happy-indian-students-celebrating.jpg"
            alt="Students celebrating career success"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Quick Access Features */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and resources to guide your career journey from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/quiz">
              <Card className="border-2 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-indigo-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-indigo-600">Career Assessment 🧠</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Take our smart quiz to discover careers that perfectly match your interests, skills, and personality
                  </CardDescription>
                  <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                    Start Quiz <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/colleges">
              <Card className="border-2 hover:border-pink-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-pink-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-pink-600">College Directory 🏫</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Explore colleges with detailed information about courses, fees, placements, and campus life
                  </CardDescription>
                  <Button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white">
                    Find Colleges <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/scholarships">
              <Card className="border-2 hover:border-amber-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-amber-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-amber-600">Scholarships 💰</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Find scholarships that match your profile and get help with applications and deadlines
                  </CardDescription>
                  <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                    Find Scholarships <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/career-paths">
              <Card className="border-2 hover:border-green-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-green-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-green-600">Career Paths 🎯</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Explore detailed career paths with education requirements, skills needed, and growth opportunities
                  </CardDescription>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                    Explore Paths <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/timeline">
              <Card className="border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-purple-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-purple-600">Timeline Tracker ⏰</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Never miss important deadlines for applications, exams, and scholarship submissions
                  </CardDescription>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                    View Timeline <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard">
              <Card className="border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-blue-50 cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-600">Personal Dashboard 💡</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Track your progress, view recommendations, and manage your entire career journey in one place
                  </CardDescription>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">
              How Advizy Works 🚀
            </h2>
            <p className="text-xl text-gray-600">3 simple steps to discover your perfect career path</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">Take the Assessment 📝</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Complete our interactive career assessment to understand your interests, skills, and personality in just
                10 minutes
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-pink-600">Explore Options 🔍</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover personalized career recommendations, top colleges, and scholarship opportunities tailored for
                you
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-amber-600">Take Action 🎯</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Apply to colleges, pursue scholarships, and build your career path with confidence and guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey? 🚀</h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
            Take the first step towards your dream career. Get personalized recommendations and expert guidance today!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-white text-indigo-600 hover:bg-gray-50 font-bold shadow-xl"
              >
                Get Started FREE 🎯
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                Take Career Quiz 📝
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Advizy</span>
              </div>
              <p className="text-gray-600">
                Empowering students to make informed career decisions with personalized guidance and comprehensive
                resources.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/quiz" className="hover:text-gray-900 transition-colors">
                    Career Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/colleges" className="hover:text-gray-900 transition-colors">
                    College Directory
                  </Link>
                </li>
                <li>
                  <Link href="/scholarships" className="hover:text-gray-900 transition-colors">
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link href="/career-paths" className="hover:text-gray-900 transition-colors">
                    Career Paths
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/timeline" className="hover:text-gray-900 transition-colors">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-gray-900 transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-gray-900 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/mentors" className="hover:text-gray-900 transition-colors">
                    Mentors
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/help" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Advizy. All rights reserved. Made with ❤️ for Indian students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
