"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  Award,
  Bell,
  Settings,
  ArrowRight,
  Star,
  Clock,
  ArrowLeft,
  Navigation,
  GraduationCap,
  Brain,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const handleComingSoon = () => {
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Application Submitted",
      message: "Your scholarship application for Merit Award has been successfully submitted.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Deadline Reminder",
      message: "JEE Main registration closes in 5 days. Don't miss out!",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New College Added",
      message: "IIT Hyderabad has been added to your recommended colleges list.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Quiz Completed",
      message: "Great job! You've completed your career aptitude assessment.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 5,
      type: "info",
      title: "Profile Update",
      message: "Your profile is now 75% complete. Add more details to get better recommendations.",
      time: "1 week ago",
      read: true,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertCircle className="w-4 h-4 text-amber-500" />
      case "info":
      default:
        return <Info className="w-4 h-4 text-blue-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon! 🚀</h3>
              <p className="text-gray-600">We're working hard to bring you this feature</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Advizy
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Popover open={notificationOpen} onOpenChange={setNotificationOpen}>
              <PopoverTrigger>
                <Button variant="ghost" size="sm" className="hover:bg-indigo-50 relative">
                  <Bell className="w-4 h-4 text-black" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-500">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="border-b p-4">
                  <h3 className="font-semibold text-lg">Notifications</h3>
                  <p className="text-sm text-gray-600">
                    {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
                  </p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                        !notification.read ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm truncate">{notification.title}</h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t bg-gray-50">
                  <Button variant="ghost" size="sm" className="w-full text-sm">
                    Mark all as read
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="sm" className="hover:bg-indigo-50">
              <Settings className="w-4 h-4 text-black" />
            </Button>
            <Avatar className="w-8 h-8 ring-2 ring-indigo-200">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white">RK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Welcome back, Rahul! 👋
          </h1>
          <p className="text-gray-600 text-lg">Let's continue building your bright future together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  Your Journey Progress
                </CardTitle>
                <CardDescription className="text-base">Track your career exploration milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-700">Profile Setup</span>
                    <span className="text-sm text-indigo-600 font-semibold">75%</span>
                  </div>
                  <Progress value={75} className="h-3 bg-gray-100" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-700">Career Assessment</span>
                    <span className="text-sm text-pink-600 font-semibold">60%</span>
                  </div>
                  <Progress value={60} className="h-3 bg-gray-100" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-700">College Research</span>
                    <span className="text-sm text-amber-600 font-semibold">40%</span>
                  </div>
                  <Progress value={40} className="h-3 bg-gray-100" />
                </div>
              </CardContent>
            </Card>

            {/* Nearby Colleges Feature */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Navigation className="w-6 h-6" />
                  Colleges Near You
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  Based on your location: Mumbai, Maharashtra
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-semibold mb-1">IIT Bombay</h4>
                    <p className="text-sm text-indigo-100 mb-2">12 km away • Engineering</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm">4.8 Rating</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-semibold mb-1">VJTI Mumbai</h4>
                    <p className="text-sm text-indigo-100 mb-2">8 km away • Engineering</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm">4.6 Rating</span>
                    </div>
                  </div>
                </div>
                <Link href="/colleges">
                  <Button className="w-full mt-4 bg-white text-indigo-600 hover:bg-gray-50 font-semibold">
                    Explore All Nearby Colleges <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Clear Next Steps */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="w-6 h-6 text-pink-600" />
                  Your Next Steps
                </CardTitle>
                <CardDescription className="text-base">Personalized recommendations to move forward</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-5 border-2 border-indigo-100 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Take Your Career Quiz</h4>
                      <p className="text-gray-600">Discover careers that match your interests & skills</p>
                    </div>
                  </div>
                  <Link href="/quiz">
                    <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-2 font-semibold">
                      Start Quiz <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between p-5 border-2 border-pink-100 rounded-xl hover:border-pink-300 hover:bg-pink-50/50 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Explore Engineering Path</h4>
                      <p className="text-gray-600">Perfect match for your science background</p>
                    </div>
                  </div>
                  <Link href="/career-paths">
                    <Button
                      variant="outline"
                      className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-2 font-semibold bg-transparent"
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between p-5 border-2 border-amber-100 rounded-xl hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Apply for Scholarships</h4>
                      <p className="text-gray-600">3 scholarships match your profile</p>
                    </div>
                  </div>
                  <Link href="/scholarships">
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-600 hover:bg-amber-50 px-6 py-2 font-semibold bg-transparent"
                    >
                      Apply <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-100 mb-1">Career Matches</p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <Target className="w-7 h-7" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-100 mb-1">Saved Colleges</p>
                      <p className="text-3xl font-bold">8</p>
                    </div>
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-7 h-7" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-100 mb-1">Scholarships</p>
                      <p className="text-3xl font-bold">5</p>
                    </div>
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Navigation */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Quick Access</CardTitle>
                <CardDescription>Jump to any feature instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/quiz"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 border border-transparent hover:border-indigo-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Career Quiz</span>
                    <p className="text-sm text-gray-500">Find your perfect match</p>
                  </div>
                </Link>

                <Link
                  href="/career-paths"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-pink-50 transition-all duration-200 border border-transparent hover:border-pink-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Career Paths</span>
                    <p className="text-sm text-gray-500">Explore opportunities</p>
                  </div>
                </Link>

                <Link
                  href="/colleges"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-amber-50 transition-all duration-200 border border-transparent hover:border-amber-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">College Directory</span>
                    <p className="text-sm text-gray-500">Find your ideal college</p>
                  </div>
                </Link>

                <Link
                  href="/scholarships"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-all duration-200 border border-transparent hover:border-green-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Scholarships</span>
                    <p className="text-sm text-gray-500">Fund your education</p>
                  </div>
                </Link>

                <Link
                  href="/timeline"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-50 transition-all duration-200 border border-transparent hover:border-purple-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-medium">Timeline</span>
                    <p className="text-sm text-gray-500">Track deadlines</p>
                  </div>
                </Link>

                <button
                  onClick={handleComingSoon}
                  className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium">Community Forum</span>
                    <p className="text-sm text-gray-500">Connect with peers</p>
                  </div>
                </button>

                <button
                  onClick={handleComingSoon}
                  className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-teal-50 transition-all duration-200 border border-transparent hover:border-teal-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium">Find Mentors</span>
                    <p className="text-sm text-gray-500">Get expert guidance</p>
                  </div>
                </button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">JEE Main Registration</p>
                    <p className="text-xs text-muted-foreground">Due in 5 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Merit Scholarship</p>
                    <p className="text-xs text-muted-foreground">Due in 12 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">College Application</p>
                    <p className="text-xs text-muted-foreground">Due in 20 days</p>
                  </div>
                </div>
                <Link href="/timeline">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View All Deadlines
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">Saved IIT Delhi to favorites</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">Completed aptitude quiz</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">Joined Engineering community</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
