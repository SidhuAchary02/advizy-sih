import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Award,
  Users,
  Code,
  Palette,
  Stethoscope,
  Calculator,
  Wrench,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const careerPaths = [
  {
    id: 1,
    title: "Software Engineering",
    icon: Code,
    description: "Build applications, websites, and software systems",
    education: "B.Tech in Computer Science/IT",
    duration: "4 years",
    avgSalary: "₹6-30 LPA",
    growth: "Very High",
    skills: ["Programming", "Problem Solving", "System Design"],
    colleges: ["IIT", "NIT", "IIIT", "Private Engineering Colleges"],
    exams: ["JEE Main", "JEE Advanced", "BITSAT"],
    jobs: ["Software Developer", "Full Stack Developer", "DevOps Engineer", "Tech Lead"],
    color: "primary",
  },
  {
    id: 2,
    title: "Design & Creative",
    icon: Palette,
    description: "Create visual experiences and user interfaces",
    education: "B.Des/BFA in Design",
    duration: "4 years",
    avgSalary: "₹4-18 LPA",
    growth: "High",
    skills: ["Creativity", "Visual Design", "User Research"],
    colleges: ["NID", "NIFT", "Pearl Academy", "MIT Institute of Design"],
    exams: ["NID Entrance", "NIFT Entrance", "UCEED"],
    jobs: ["UI/UX Designer", "Graphic Designer", "Product Designer", "Art Director"],
    color: "secondary",
  },
  {
    id: 3,
    title: "Medical & Healthcare",
    icon: Stethoscope,
    description: "Diagnose, treat, and care for patients",
    education: "MBBS/BDS/BAMS",
    duration: "5.5 years",
    avgSalary: "₹5-25 LPA",
    growth: "High",
    skills: ["Medical Knowledge", "Empathy", "Critical Thinking"],
    colleges: ["AIIMS", "JIPMER", "Government Medical Colleges", "Private Medical Colleges"],
    exams: ["NEET UG", "AIIMS", "JIPMER"],
    jobs: ["Doctor", "Surgeon", "Specialist", "Medical Researcher"],
    color: "accent",
  },
  {
    id: 4,
    title: "Business & Management",
    icon: Briefcase,
    description: "Lead teams and drive business growth",
    education: "BBA/B.Com + MBA",
    duration: "5-6 years",
    avgSalary: "₹4-20 LPA",
    growth: "High",
    skills: ["Leadership", "Strategy", "Communication"],
    colleges: ["IIM", "ISB", "FMS", "XLRI"],
    exams: ["CAT", "XAT", "GMAT", "SNAP"],
    jobs: ["Business Analyst", "Product Manager", "Consultant", "Entrepreneur"],
    color: "primary",
  },
  {
    id: 5,
    title: "Engineering & Technology",
    icon: Wrench,
    description: "Design and build systems that power the world",
    education: "B.Tech in Various Streams",
    duration: "4 years",
    avgSalary: "₹4-18 LPA",
    growth: "Medium",
    skills: ["Technical Skills", "Problem Solving", "Innovation"],
    colleges: ["IIT", "NIT", "State Engineering Colleges"],
    exams: ["JEE Main", "JEE Advanced", "State CET"],
    jobs: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer"],
    color: "secondary",
  },
  {
    id: 6,
    title: "Finance & Accounting",
    icon: Calculator,
    description: "Manage money, investments, and financial planning",
    education: "B.Com/BBA + CA/CFA",
    duration: "4-5 years",
    avgSalary: "₹3-15 LPA",
    growth: "Medium",
    skills: ["Analytical Skills", "Attention to Detail", "Financial Modeling"],
    colleges: ["SRCC", "LSR", "Christ University", "Symbiosis"],
    exams: ["CA Foundation", "CFA Level 1", "FRM"],
    jobs: ["Chartered Accountant", "Financial Analyst", "Investment Banker"],
    color: "accent",
  },
]

export default function CareerPathsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Career Path Explorer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover detailed career paths with education requirements, salary expectations, and growth opportunities
          </p>
        </div>

        {/* Career Path Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {careerPaths.map((path) => {
            const IconComponent = path.icon
            return (
              <Card
                key={path.id}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        path.color === "primary"
                          ? "bg-primary/10"
                          : path.color === "secondary"
                            ? "bg-secondary/10"
                            : "bg-accent/10"
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          path.color === "primary"
                            ? "text-primary"
                            : path.color === "secondary"
                              ? "text-secondary"
                              : "text-accent-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                      <CardDescription className="text-base">{path.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Average Salary</p>
                      <p className="font-semibold text-lg">{path.avgSalary}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Growth Potential</p>
                      <Badge
                        variant={
                          path.growth === "Very High" ? "default" : path.growth === "High" ? "secondary" : "outline"
                        }
                      >
                        {path.growth}
                      </Badge>
                    </div>
                  </div>

                  {/* Education Path */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Education Path
                    </h4>
                    <p className="text-sm">{path.education}</p>
                    <p className="text-xs text-muted-foreground">Duration: {path.duration}</p>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Top Colleges */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      Top Colleges
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.colleges.slice(0, 3).map((college, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {college}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Entrance Exams */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Entrance Exams
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.exams.map((exam, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {exam}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Job Opportunities */}
                  <div className="space-y-2">
                    <h4 className="font-semibold">Job Opportunities</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {path.jobs.map((job, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {job}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Link href="/colleges" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Find Colleges
                      </Button>
                    </Link>
                    <Link href="/quiz" className="flex-1">
                      <Button size="sm" className="w-full">
                        Take Quiz
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Path is Right for You?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take our comprehensive career assessment to get personalized recommendations based on your interests,
              skills, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg">
                  Take Career Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/mentors">
                <Button variant="outline" size="lg">
                  Talk to a Mentor
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
