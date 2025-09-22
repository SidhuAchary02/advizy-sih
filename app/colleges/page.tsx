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
  MapPin,
  Star,
  BookOpen,
  TrendingUp,
  Filter,
  Heart,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: "New Delhi",
    type: "Government",
    rating: 4.8,
    established: 1961,
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
    cutoff: "JEE Advanced Rank 1-500",
    fees: "₹2.5 LPA",
    placement: "₹25 LPA",
    image: "/placeholder.svg?height=200&width=300&text=IIT+Delhi",
    highlights: ["Top Engineering College", "Excellent Placements", "Research Opportunities"],
    category: "Engineering",
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences",
    shortName: "AIIMS Delhi",
    location: "New Delhi",
    type: "Government",
    rating: 4.9,
    established: 1956,
    courses: ["MBBS", "BDS", "B.Sc Nursing", "B.Pharma"],
    cutoff: "NEET Rank 1-100",
    fees: "₹1.5 LPA",
    placement: "₹15 LPA",
    image: "/placeholder.svg?height=200&width=300&text=AIIMS+Delhi",
    highlights: ["Premier Medical College", "Government Hospital", "Research Excellence"],
    category: "Medical",
  },
  {
    id: 3,
    name: "Indian Institute of Management Ahmedabad",
    shortName: "IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Government",
    rating: 4.7,
    established: 1961,
    courses: ["MBA", "PGDM", "Executive MBA", "PhD"],
    cutoff: "CAT 99+ Percentile",
    fees: "₹25 LPA",
    placement: "₹35 LPA",
    image: "/placeholder.svg?height=200&width=300&text=IIM+Ahmedabad",
    highlights: ["Top Business School", "Industry Connections", "Global Recognition"],
    category: "Management",
  },
  {
    id: 4,
    name: "National Institute of Design",
    shortName: "NID Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Government",
    rating: 4.6,
    established: 1961,
    courses: ["B.Des", "M.Des", "Product Design", "Communication Design"],
    cutoff: "NID Entrance + Portfolio",
    fees: "₹3 LPA",
    placement: "₹12 LPA",
    image: "/placeholder.svg?height=200&width=300&text=NID+Ahmedabad",
    highlights: ["Premier Design Institute", "Industry Projects", "Creative Excellence"],
    category: "Design",
  },
  {
    id: 5,
    name: "Shri Ram College of Commerce",
    shortName: "SRCC",
    location: "New Delhi",
    type: "Government",
    rating: 4.5,
    established: 1926,
    courses: ["B.Com (Hons)", "B.A Economics", "M.Com", "M.A Economics"],
    cutoff: "95%+ in 12th",
    fees: "₹0.5 LPA",
    placement: "₹8 LPA",
    image: "/placeholder.svg?height=200&width=300&text=SRCC",
    highlights: ["Top Commerce College", "Delhi University", "Finance Focus"],
    category: "Commerce",
  },
  {
    id: 6,
    name: "Manipal Institute of Technology",
    shortName: "MIT Manipal",
    location: "Manipal, Karnataka",
    type: "Private",
    rating: 4.3,
    established: 1957,
    courses: ["Computer Science", "Information Technology", "Electronics", "Biotechnology"],
    cutoff: "MET Rank 1-5000",
    fees: "₹15 LPA",
    placement: "₹12 LPA",
    image: "/placeholder.svg?height=200&width=300&text=MIT+Manipal",
    highlights: ["Private Engineering College", "Industry Partnerships", "Modern Campus"],
    category: "Engineering",
  },
]

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [savedColleges, setSavedColleges] = useState<number[]>([])

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some((course) => course.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" || college.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesType = selectedType === "all" || college.type.toLowerCase() === selectedType.toLowerCase()
    const matchesLocation =
      selectedLocation === "all" || college.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSearch && matchesCategory && matchesType && matchesLocation
  })

  const toggleSaveCollege = (collegeId: number) => {
    setSavedColleges((prev) =>
      prev.includes(collegeId) ? prev.filter((id) => id !== collegeId) : [...prev, collegeId],
    )
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
          <h1 className="text-4xl font-bold mb-4">College Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and compare colleges across India with detailed information about courses, fees, and placements
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search colleges, courses, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="manipal">Manipal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sort by: Relevance</span>
          </div>
        </div>

        {/* College Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <Card
              key={college.id}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{college.shortName}</CardTitle>
                      <Badge variant={college.type === "Government" ? "default" : "secondary"}>{college.type}</Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground">{college.name}</CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {college.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        {college.rating}
                      </div>
                      <span>Est. {college.established}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSaveCollege(college.id)}
                    className={savedColleges.includes(college.id) ? "text-red-500" : ""}
                  >
                    <Heart className={`w-4 h-4 ${savedColleges.includes(college.id) ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* College Image */}
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Fees</p>
                    <p className="font-semibold">{college.fees}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg. Placement</p>
                    <p className="font-semibold">{college.placement}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Cut-off</p>
                    <p className="font-semibold text-xs">{college.cutoff}</p>
                  </div>
                </div>

                {/* Courses */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Popular Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 3).map((course, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                    {college.courses.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{college.courses.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    Highlights
                  </h4>
                  <div className="space-y-1">
                    {college.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedType("all")
                  setSelectedLocation("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
