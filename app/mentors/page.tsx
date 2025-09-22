import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, ArrowLeft, Star, MapPin, Clock, MessageCircle, Video, Calendar } from "lucide-react"
import Link from "next/link"

const mentors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    title: "Senior Software Engineer",
    company: "Google India",
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    location: "Bangalore",
    expertise: ["Software Engineering", "Computer Science", "Career Guidance"],
    education: "IIT Delhi, MS from Stanford",
    languages: ["English", "Hindi"],
    price: "₹1,500/hour",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100&text=PS",
    bio: "Experienced software engineer helping students navigate tech careers. Specialized in coding interviews and career transitions.",
    sessions: 450,
    responseTime: "< 2 hours",
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    title: "Professor of Medicine",
    company: "AIIMS Delhi",
    experience: "15 years",
    rating: 4.8,
    reviews: 89,
    location: "New Delhi",
    expertise: ["Medical Education", "NEET Preparation", "Healthcare Careers"],
    education: "AIIMS Delhi, Fellowship from Harvard",
    languages: ["English", "Hindi"],
    price: "₹2,000/hour",
    availability: "Busy",
    image: "/placeholder.svg?height=100&width=100&text=RK",
    bio: "Medical professional and educator with expertise in guiding students through medical entrance exams and career paths.",
    sessions: 320,
    responseTime: "< 4 hours",
  },
  {
    id: 3,
    name: "Ms. Anita Desai",
    title: "Design Director",
    company: "Adobe India",
    experience: "12 years",
    rating: 4.7,
    reviews: 156,
    location: "Mumbai",
    expertise: ["UI/UX Design", "Product Design", "Creative Careers"],
    education: "NID Ahmedabad, Design Thinking from IDEO",
    languages: ["English", "Hindi", "Marathi"],
    price: "₹1,800/hour",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100&text=AD",
    bio: "Creative professional helping students explore design careers and build strong portfolios.",
    sessions: 280,
    responseTime: "< 1 hour",
  },
  {
    id: 4,
    name: "Mr. Vikram Singh",
    title: "Investment Banking VP",
    company: "Goldman Sachs",
    experience: "10 years",
    rating: 4.6,
    reviews: 94,
    location: "Mumbai",
    expertise: ["Finance", "MBA Preparation", "Investment Banking"],
    education: "IIM Ahmedabad, CFA Charter",
    languages: ["English", "Hindi"],
    price: "₹2,500/hour",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100&text=VS",
    bio: "Finance expert helping students understand business careers and MBA preparation strategies.",
    sessions: 180,
    responseTime: "< 3 hours",
  },
  {
    id: 5,
    name: "Dr. Meera Patel",
    title: "Research Scientist",
    company: "ISRO",
    experience: "11 years",
    rating: 4.8,
    reviews: 73,
    location: "Bangalore",
    expertise: ["Space Technology", "Research Careers", "Science Education"],
    education: "IISc Bangalore, PhD in Aerospace",
    languages: ["English", "Hindi", "Gujarati"],
    price: "₹1,600/hour",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100&text=MP",
    bio: "Space scientist passionate about inspiring the next generation of researchers and engineers.",
    sessions: 150,
    responseTime: "< 2 hours",
  },
  {
    id: 6,
    name: "Ms. Kavya Reddy",
    title: "Startup Founder",
    company: "EduTech Solutions",
    experience: "6 years",
    rating: 4.5,
    reviews: 112,
    location: "Hyderabad",
    expertise: ["Entrepreneurship", "Business Strategy", "Startup Ecosystem"],
    education: "IIT Hyderabad, MBA from ISB",
    languages: ["English", "Hindi", "Telugu"],
    price: "₹1,400/hour",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100&text=KR",
    bio: "Young entrepreneur helping students explore startup opportunities and business careers.",
    sessions: 95,
    responseTime: "< 1 hour",
  },
]

export default function MentorsPage() {
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
          <Link href="/dashboard">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Mentor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with industry experts and experienced professionals for personalized career guidance
          </p>
        </div>

        {/* Coming Soon Banner */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-2">Mentorship Program Coming Soon!</h2>
            <p className="text-muted-foreground mb-4">
              We're working hard to bring you personalized mentorship sessions with industry experts.
            </p>
            <Badge className="mb-4">Beta Launch: April 2024</Badge>
          </CardContent>
        </Card>

        {/* Mentor Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <Card
              key={mentor.id}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.image || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg font-semibold">
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{mentor.name}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {mentor.title}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                      </div>
                      <Badge variant={mentor.availability === "Available" ? "default" : "secondary"}>
                        {mentor.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        {mentor.rating} ({mentor.reviews} reviews)
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {mentor.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {mentor.experience}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Bio */}
                <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Sessions</p>
                    <p className="font-semibold">{mentor.sessions}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="font-semibold text-xs">{mentor.responseTime}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="font-semibold">{mentor.price}</p>
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">{mentor.education}</p>
                </div>

                {/* Languages */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                    <Video className="w-4 h-4 mr-2" />
                    Video Call
                  </Button>
                  <Button size="sm" className="flex-1" disabled>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">Booking will be available in beta launch</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-secondary/10 to-accent/10 border-2">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Want to Become a Mentor?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Share your expertise and help the next generation of students make informed career decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" disabled>
                Apply as Mentor
              </Button>
              <Button variant="outline" size="lg" disabled>
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Mentor applications will open with the beta launch</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
