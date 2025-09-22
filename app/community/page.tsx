import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, ArrowLeft, MessageCircle, Heart, Reply, Pin } from "lucide-react"
import Link from "next/link"

const communityPosts = [
  {
    id: 1,
    title: "JEE Main 2024 - Study Group Formation",
    content:
      "Looking for serious JEE aspirants to form a study group. We can share resources, discuss doubts, and motivate each other. Currently scoring around 85% in mocks.",
    author: {
      name: "Rahul Sharma",
      avatar: "/placeholder.svg?height=40&width=40&text=RS",
      badge: "JEE Aspirant",
    },
    category: "Study Groups",
    timestamp: "2 hours ago",
    likes: 24,
    replies: 8,
    isPinned: false,
    tags: ["JEE", "Study Group", "Physics", "Mathematics"],
  },
  {
    id: 2,
    title: "NEET Biology - Difficult Topics Discussion",
    content:
      "Can someone explain the concept of genetic engineering in simple terms? I'm struggling with this chapter and my exam is next month.",
    author: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40&text=PP",
      badge: "NEET Aspirant",
    },
    category: "Academic Help",
    timestamp: "4 hours ago",
    likes: 15,
    replies: 12,
    isPinned: false,
    tags: ["NEET", "Biology", "Genetics", "Help Needed"],
  },
  {
    id: 3,
    title: "IIT Delhi Campus Life - AMA",
    content:
      "I'm a 3rd year CSE student at IIT Delhi. Ask me anything about campus life, academics, placements, or anything else you'd like to know!",
    author: {
      name: "Arjun Kumar",
      avatar: "/placeholder.svg?height=40&width=40&text=AK",
      badge: "IIT Student",
    },
    category: "College Life",
    timestamp: "1 day ago",
    likes: 89,
    replies: 34,
    isPinned: true,
    tags: ["IIT Delhi", "Campus Life", "CSE", "AMA"],
  },
  {
    id: 4,
    title: "Scholarship Application Tips",
    content:
      "Just got selected for the National Merit Scholarship! Here are some tips that helped me: 1) Start early 2) Focus on your SOP 3) Get good recommendation letters...",
    author: {
      name: "Sneha Reddy",
      avatar: "/placeholder.svg?height=40&width=40&text=SR",
      badge: "Scholarship Winner",
    },
    category: "Success Stories",
    timestamp: "2 days ago",
    likes: 156,
    replies: 23,
    isPinned: false,
    tags: ["Scholarship", "Success Story", "Tips", "Merit"],
  },
  {
    id: 5,
    title: "Career Confusion - Engineering vs Medicine",
    content:
      "I'm good at both PCM and PCB. My parents want me to do engineering, but I'm interested in medicine. How do I decide? Any advice from people who faced similar dilemmas?",
    author: {
      name: "Vikash Singh",
      avatar: "/placeholder.svg?height=40&width=40&text=VS",
      badge: "12th Grade",
    },
    category: "Career Guidance",
    timestamp: "3 days ago",
    likes: 67,
    replies: 45,
    isPinned: false,
    tags: ["Career Choice", "Engineering", "Medicine", "Advice Needed"],
  },
  {
    id: 6,
    title: "Design Portfolio Review - Need Feedback",
    content:
      "I'm applying to NID and need feedback on my portfolio. Can experienced designers or current NID students help me review it? I'll share the link in comments.",
    author: {
      name: "Kavya Desai",
      avatar: "/placeholder.svg?height=40&width=40&text=KD",
      badge: "Design Aspirant",
    },
    category: "Portfolio Review",
    timestamp: "5 days ago",
    likes: 32,
    replies: 18,
    isPinned: false,
    tags: ["NID", "Portfolio", "Design", "Feedback"],
  },
]

const categories = [
  { name: "Study Groups", count: 45, color: "primary" },
  { name: "Academic Help", count: 128, color: "secondary" },
  { name: "College Life", count: 89, color: "accent" },
  { name: "Career Guidance", count: 156, color: "primary" },
  { name: "Success Stories", count: 67, color: "secondary" },
  { name: "Portfolio Review", count: 34, color: "accent" },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Advizy</span>
          </div>
          <div className="flex items-center gap-3">
            <Button disabled>
              <MessageCircle className="w-4 h-4 mr-2" />
              New Post
            </Button>
            <Link href="/dashboard">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Student Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow students, share experiences, and get help from the community
          </p>
        </div>

        {/* Coming Soon Banner */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-2">Community Features Coming Soon!</h2>
            <p className="text-muted-foreground mb-4">
              We're building an amazing community platform where students can connect, share, and learn together.
            </p>
            <Badge className="mb-4">Beta Launch: May 2024</Badge>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Members</span>
                  <span className="font-semibold">12,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Today</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Posts This Week</span>
                  <span className="font-semibold">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Questions Answered</span>
                  <span className="font-semibold">2,890</span>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-card/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Arjun Kumar", points: 2450, badge: "IIT Student" },
                  { name: "Sneha Reddy", points: 1890, badge: "Scholarship Winner" },
                  { name: "Rahul Sharma", points: 1567, badge: "JEE Aspirant" },
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.points} points</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Posts */}
            {communityPosts.map((post) => (
              <Card
                key={post.id}
                className={`border-2 hover:border-primary/50 transition-colors ${
                  post.isPinned ? "border-accent/50 bg-accent/5" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {post.isPinned && <Pin className="w-4 h-4 text-accent-foreground" />}
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">{post.author.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {post.author.badge}
                          </Badge>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                          <span>•</span>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground" disabled>
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground" disabled>
                        <Reply className="w-4 h-4 mr-1" />
                        {post.replies}
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      View Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" disabled>
                Load More Posts
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Full community features available in beta launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
