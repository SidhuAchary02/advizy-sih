"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Target,
  ArrowLeft,
  Search,
  Calendar,
  DollarSign,
  Users,
  Award,
  Clock,
  ExternalLink,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

const scholarships = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "Government of India",
    amount: "₹50,000 per year",
    type: "Merit-based",
    eligibility: "12th grade students with 85%+ marks",
    deadline: "2024-03-15",
    category: "Academic Excellence",
    description: "Scholarship for academically excellent students pursuing higher education",
    requirements: ["Academic transcripts", "Income certificate", "Caste certificate (if applicable)"],
    benefits: ["Tuition fee coverage", "Monthly stipend", "Book allowance"],
    status: "Open",
    applicants: "50,000+",
    color: "primary",
  },
  {
    id: 2,
    name: "Inspire Scholarship for Higher Education",
    provider: "Department of Science & Technology",
    amount: "₹80,000 per year",
    type: "Merit-based",
    eligibility: "Students pursuing Science/Engineering/Medicine",
    deadline: "2024-04-30",
    category: "STEM Education",
    description: "Encouraging students to pursue careers in science and research",
    requirements: ["KVPY qualification", "JEE/NEET scores", "Research proposal"],
    benefits: ["Full tuition coverage", "Research funding", "Mentorship program"],
    status: "Open",
    applicants: "25,000+",
    color: "secondary",
  },
  {
    id: 3,
    name: "Post Matric Scholarship for SC/ST",
    provider: "Ministry of Social Justice",
    amount: "₹35,000 per year",
    type: "Need-based",
    eligibility: "SC/ST students with family income < ₹2.5 LPA",
    deadline: "2024-02-28",
    category: "Social Welfare",
    description: "Financial assistance for SC/ST students in higher education",
    requirements: ["Caste certificate", "Income certificate", "Academic records"],
    benefits: ["Tuition fee reimbursement", "Maintenance allowance", "Book grant"],
    status: "Closing Soon",
    applicants: "1,00,000+",
    color: "accent",
  },
  {
    id: 4,
    name: "Kishore Vaigyanik Protsahan Yojana",
    provider: "Indian Institute of Science",
    amount: "₹7,000 per month",
    type: "Merit-based",
    eligibility: "Students interested in research careers",
    deadline: "2024-05-15",
    category: "Research",
    description: "Fellowship program to encourage research in basic sciences",
    requirements: ["KVPY exam qualification", "Interview", "Research aptitude"],
    benefits: ["Monthly fellowship", "Research opportunities", "IISc mentorship"],
    status: "Open",
    applicants: "15,000+",
    color: "primary",
  },
  {
    id: 5,
    name: "Aditya Birla Scholarship",
    provider: "Aditya Birla Group",
    amount: "₹1,75,000 per year",
    type: "Merit-based",
    eligibility: "IIT/IIM students with excellent academic record",
    deadline: "2024-06-30",
    category: "Corporate",
    description: "Supporting bright students in premier institutions",
    requirements: ["IIT/IIM admission", "Academic excellence", "Leadership potential"],
    benefits: ["Full scholarship", "Internship opportunities", "Industry mentorship"],
    status: "Open",
    applicants: "5,000+",
    color: "secondary",
  },
  {
    id: 6,
    name: "Pragati Scholarship for Girls",
    provider: "AICTE",
    amount: "₹30,000 per year",
    type: "Gender-specific",
    eligibility: "Girl students in technical education",
    deadline: "2024-03-31",
    category: "Women Empowerment",
    description: "Encouraging girls to pursue technical education",
    requirements: ["Female candidate", "Technical course admission", "Family income < ₹8 LPA"],
    benefits: ["Tuition fee support", "Laptop/tablet", "Skill development programs"],
    status: "Open",
    applicants: "30,000+",
    color: "accent",
  },
]

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = selectedType === "all" || scholarship.type.toLowerCase().includes(selectedType.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || scholarship.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesStatus = selectedStatus === "all" || scholarship.status.toLowerCase() === selectedStatus.toLowerCase()

    return matchesSearch && matchesType && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return "default"
      case "closing soon":
        return "destructive"
      case "closed":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getDaysUntilDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Scholarship Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover scholarships and financial aid opportunities to support your education journey
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="merit">Merit-based</SelectItem>
                  <SelectItem value="need">Need-based</SelectItem>
                  <SelectItem value="gender">Gender-specific</SelectItem>
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="academic">Academic Excellence</SelectItem>
                  <SelectItem value="stem">STEM Education</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="social">Social Welfare</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closing soon">Closing Soon</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredScholarships.length} of {scholarships.length} scholarships
          </p>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sorted by deadline</span>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => {
            const daysLeft = getDaysUntilDeadline(scholarship.deadline)
            return (
              <Card
                key={scholarship.id}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                        <Badge variant={getStatusColor(scholarship.status)}>{scholarship.status}</Badge>
                      </div>
                      <CardDescription className="text-base">{scholarship.provider}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {scholarship.amount}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {scholarship.applicants}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        scholarship.color === "primary"
                          ? "bg-primary/10"
                          : scholarship.color === "secondary"
                            ? "bg-secondary/10"
                            : "bg-accent/10"
                      }`}
                    >
                      <Award
                        className={`w-6 h-6 ${
                          scholarship.color === "primary"
                            ? "text-primary"
                            : scholarship.color === "secondary"
                              ? "text-secondary"
                              : "text-accent-foreground"
                        }`}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{scholarship.description}</p>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Type</p>
                      <Badge variant="outline" className="text-xs">
                        {scholarship.type}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Category</p>
                      <Badge variant="outline" className="text-xs">
                        {scholarship.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Deadline</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{new Date(scholarship.deadline).toLocaleDateString()}</p>
                      <p className={`text-xs ${daysLeft <= 7 ? "text-red-500" : "text-muted-foreground"}`}>
                        {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
                      </p>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Eligibility
                    </h4>
                    <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="font-semibold">Benefits</h4>
                    <div className="space-y-1">
                      {scholarship.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold">Required Documents</h4>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                    <Button size="sm" className="flex-1" disabled={scholarship.status === "Closed" || daysLeft <= 0}>
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No scholarships found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("all")
                  setSelectedCategory("all")
                  setSelectedStatus("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Scholarship?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our AI-powered recommendation system can help you find scholarships that match your profile and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg">Get Personalized Recommendations</Button>
              </Link>
              <Link href="/mentors">
                <Button variant="outline" size="lg">
                  Talk to a Counselor
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
