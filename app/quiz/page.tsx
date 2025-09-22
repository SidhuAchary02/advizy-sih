"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Target,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Brain,
  Heart,
  Zap,
  User,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const studentDetailsQuestions = [
  {
    id: 1,
    type: "input",
    question: "What's your name?",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    id: 2,
    type: "select",
    question: "Which state are you from?",
    options: [
      "Andhra Pradesh",
      "Bihar",
      "Delhi",
      "Gujarat",
      "Karnataka",
      "Kerala",
      "Maharashtra",
      "Punjab",
      "Rajasthan",
      "Tamil Nadu",
      "Uttar Pradesh",
      "West Bengal",
      "Other",
    ],
    required: true,
  },
  {
    id: 3,
    type: "select",
    question: "What's your current grade/class?",
    options: [
      "Class 10",
      "Class 11",
      "Class 12",
      "1st Year College",
      "2nd Year College",
      "3rd Year College",
      "Final Year College",
    ],
    required: true,
  },
  {
    id: 4,
    type: "select",
    question: "How would you rate your academic performance?",
    options: [
      "Excellent (90%+)",
      "Good (75-89%)",
      "Average (60-74%)",
      "Below Average (45-59%)",
      "Need Improvement (<45%)",
    ],
    required: true,
  },
  {
    id: 5,
    type: "select",
    question: "What's your family's monthly income range?",
    options: [
      "Below ₹25,000",
      "₹25,000 - ₹50,000",
      "₹50,000 - ₹1,00,000",
      "₹1,00,000 - ₹2,00,000",
      "Above ₹2,00,000",
      "Prefer not to say",
    ],
    required: false,
  },
  {
    id: 6,
    type: "mcq",
    question: "Which subjects do you enjoy the most?",
    options: [
      { id: "a", text: "Mathematics & Physics", category: "stem" },
      { id: "b", text: "Biology & Chemistry", category: "medical" },
      { id: "c", text: "History & Literature", category: "humanities" },
      { id: "d", text: "Economics & Business Studies", category: "commerce" },
    ],
    required: true,
  },
  {
    id: 7,
    type: "mcq",
    question: "What type of career environment appeals to you?",
    options: [
      { id: "a", text: "Corporate offices with structured work", category: "corporate" },
      { id: "b", text: "Creative studios with flexible hours", category: "creative" },
      { id: "c", text: "Hospitals or labs helping people", category: "service" },
      { id: "d", text: "Outdoor fieldwork and travel", category: "field" },
    ],
    required: true,
  },
  {
    id: 8,
    type: "mcq",
    question: "How important is job security vs. high salary to you?",
    options: [
      { id: "a", text: "Job security is most important", category: "security" },
      { id: "b", text: "High salary is most important", category: "money" },
      { id: "c", text: "Work satisfaction matters most", category: "satisfaction" },
      { id: "d", text: "Growth opportunities matter most", category: "growth" },
    ],
    required: true,
  },
  {
    id: 9,
    type: "mcq",
    question: "Are you willing to study for competitive exams?",
    options: [
      { id: "a", text: "Yes, I'm ready for intense preparation", category: "competitive" },
      { id: "b", text: "Maybe, if it's not too difficult", category: "moderate" },
      { id: "c", text: "I prefer admission through regular merit", category: "merit" },
      { id: "d", text: "I want to avoid competitive exams", category: "avoid" },
    ],
    required: true,
  },
  {
    id: 10,
    type: "mcq",
    question: "What's your biggest concern about choosing a career?",
    options: [
      { id: "a", text: "Not knowing what I'm good at", category: "skills" },
      { id: "b", text: "Financial constraints for education", category: "finance" },
      { id: "c", text: "Family pressure and expectations", category: "family" },
      { id: "d", text: "Job market and future opportunities", category: "market" },
    ],
    required: true,
  },
]

const aptitudeQuestions = [
  {
    id: 1,
    question:
      "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: [
      { id: "a", text: "5 minutes", correct: true },
      { id: "b", text: "20 minutes", correct: false },
      { id: "c", text: "100 minutes", correct: false },
      { id: "d", text: "500 minutes", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which number comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: [
      { id: "a", text: "40", correct: false },
      { id: "b", text: "42", correct: true },
      { id: "c", text: "44", correct: false },
      { id: "d", text: "48", correct: false },
    ],
  },
  {
    id: 3,
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely Lazzles.",
    options: [
      { id: "a", text: "True", correct: true },
      { id: "b", text: "False", correct: false },
      { id: "c", text: "Cannot be determined", correct: false },
      { id: "d", text: "Sometimes true", correct: false },
    ],
  },
  {
    id: 4,
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: [
      { id: "a", text: "0 degrees", correct: false },
      { id: "b", text: "7.5 degrees", correct: true },
      { id: "c", text: "15 degrees", correct: false },
      { id: "d", text: "22.5 degrees", correct: false },
    ],
  },
  {
    id: 5,
    question: "Which of these patterns is different from the others?",
    options: [
      { id: "a", text: "Circle, Square, Triangle", correct: false },
      { id: "b", text: "Red, Blue, Green", correct: false },
      { id: "c", text: "Cat, Dog, Fish", correct: true },
      { id: "d", text: "Apple, Orange, Banana", correct: false },
    ],
  },
]

export default function QuizPage() {
  const router = useRouter()
  const [quizPhase, setQuizPhase] = useState<"details" | "aptitude" | "results">("details")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [detailsAnswers, setDetailsAnswers] = useState<Record<number, string>>({})
  const [aptitudeAnswers, setAptitudeAnswers] = useState<Record<number, string>>({})
  const [aptitudeScore, setAptitudeScore] = useState(0)
  const [showBackAlert, setShowBackAlert] = useState(false)

  const handleBackNavigation = () => {
    if (Object.keys(detailsAnswers).length > 0 || Object.keys(aptitudeAnswers).length > 0) {
      setShowBackAlert(true)
    } else {
      router.push("/dashboard")
    }
  }

  const confirmBackNavigation = () => {
    router.push("/dashboard")
  }

  const handleDetailsAnswer = (questionId: number, value: string) => {
    setDetailsAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleAptitudeAnswer = (questionId: number, optionId: string) => {
    setAptitudeAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const nextDetailsQuestion = () => {
    if (currentQuestion < studentDetailsQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Move to aptitude test
      setQuizPhase("aptitude")
      setCurrentQuestion(0)
    }
  }

  const nextAptitudeQuestion = () => {
    if (currentQuestion < aptitudeQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Calculate aptitude score and show results
      calculateAptitudeScore()
      setQuizPhase("results")
    }
  }

  const calculateAptitudeScore = () => {
    let score = 0
    Object.entries(aptitudeAnswers).forEach(([questionId, optionId]) => {
      const question = aptitudeQuestions.find((q) => q.id === Number.parseInt(questionId))
      const option = question?.options.find((o) => o.id === optionId)
      if (option?.correct) {
        score++
      }
    })
    setAptitudeScore(score)
  }

  const skipAptitudeTest = () => {
    setQuizPhase("results")
  }

  const getRecommendations = () => {
    const grade = detailsAnswers[3] || ""
    const performance = detailsAnswers[4] || ""
    const subjects = detailsAnswers[6] || ""
    const environment = detailsAnswers[7] || ""

    const recommendations = [
      {
        title: "Computer Science Engineering",
        description: "Build software and technology solutions",
        match: "85%",
        salary: "₹4-15 LPA",
        growth: "Very High",
      },
      {
        title: "Business Administration",
        description: "Manage and lead business operations",
        match: "78%",
        salary: "₹3-12 LPA",
        growth: "High",
      },
      {
        title: "Digital Marketing",
        description: "Promote brands through digital channels",
        match: "72%",
        salary: "₹2.5-10 LPA",
        growth: "Very High",
      },
    ]

    return recommendations
  }

  if (showBackAlert) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="max-w-md mx-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent" />
              Lose Your Progress?
            </CardTitle>
            <CardDescription>
              You haven't signed up yet. If you go back now, all your quiz answers will be lost. Consider creating an
              account to save your progress!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button variant="outline" onClick={() => setShowBackAlert(false)} className="flex-1">
              Stay & Continue
            </Button>
            <Button onClick={confirmBackNavigation} variant="destructive" className="flex-1">
              Go Back Anyway
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Results Phase
  if (quizPhase === "results") {
    const recommendations = getRecommendations()

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Header */}
        <header className="border-b border-border glass-effect">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Advizy</span>
            </div>
            <Button variant="outline" onClick={handleBackNavigation}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Career Recommendations
              </h1>
              <p className="text-muted-foreground text-lg">
                Based on your profile and {aptitudeScore > 0 ? `aptitude score (${aptitudeScore}/5)` : "preferences"}
              </p>
            </div>

            {/* Student Profile Summary */}
            <Card className="mb-8 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Your Profile Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Name:</span> {detailsAnswers[1] || "Not provided"}
                  </p>
                  <p>
                    <span className="font-medium">Location:</span> {detailsAnswers[2] || "Not provided"}
                  </p>
                  <p>
                    <span className="font-medium">Grade:</span> {detailsAnswers[3] || "Not provided"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Performance:</span> {detailsAnswers[4] || "Not provided"}
                  </p>
                  {aptitudeScore > 0 && (
                    <p>
                      <span className="font-medium">Aptitude Score:</span> {aptitudeScore}/5 (
                      {Math.round((aptitudeScore / 5) * 100)}%)
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Career Recommendations */}
            <Card className="mb-8 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Top Career Matches for You
                </CardTitle>
                <CardDescription>Personalized recommendations based on your responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {recommendations.map((career, index) => (
                    <Card key={index} className="border-2 hover:border-primary/50 transition-all hover-lift">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{career.match} Match</Badge>
                          <Badge variant="outline">{career.growth}</Badge>
                        </div>
                        <CardTitle className="text-lg">{career.title}</CardTitle>
                        <CardDescription>{career.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Expected Salary:</span>
                            <span className="text-sm font-medium text-accent">{career.salary}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
                <CardDescription>Continue exploring your career options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/career-paths">
                    <Button className="w-full gradient-primary" size="lg">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Explore Careers
                    </Button>
                  </Link>
                  <Link href="/colleges">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Find Colleges
                    </Button>
                  </Link>
                  <Link href="/scholarships">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <Heart className="w-4 h-4 mr-2" />
                      Get Scholarships
                    </Button>
                  </Link>
                </div>
                <div className="text-center pt-4">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setQuizPhase("details")
                      setCurrentQuestion(0)
                      setDetailsAnswers({})
                      setAptitudeAnswers({})
                      setAptitudeScore(0)
                    }}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Aptitude Test Phase
  if (quizPhase === "aptitude") {
    const progress = ((currentQuestion + 1) / aptitudeQuestions.length) * 100
    const question = aptitudeQuestions[currentQuestion]

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Header */}
        <header className="border-b border-border glass-effect">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Advizy - Aptitude Test</span>
            </div>
            <Button variant="ghost" onClick={skipAptitudeTest}>
              Skip Test
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Question {currentQuestion + 1} of {aptitudeQuestions.length}
                </span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            {/* Question Card */}
            <Card className="mb-8 hover-lift">
              <CardHeader>
                <Badge className="w-fit mb-2 gradient-accent text-white">Logical Reasoning</Badge>
                <CardTitle className="text-xl">{question.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAptitudeAnswer(question.id, option.id)}
                    className={`w-full p-4 text-left border-2 rounded-xl transition-all hover-lift ${
                      aptitudeAnswers[question.id] === option.id
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border hover:border-primary/50 hover:bg-card/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          aptitudeAnswers[question.id] === option.id
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {aptitudeAnswers[question.id] === option.id && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={nextAptitudeQuestion}
                disabled={!aptitudeAnswers[question.id]}
                className="gradient-primary"
              >
                {currentQuestion === aptitudeQuestions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Student Details Phase
  const progress = ((currentQuestion + 1) / studentDetailsQuestions.length) * 100
  const question = studentDetailsQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="border-b border-border glass-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Advizy - Get to Know You</span>
          </div>
          <Button variant="ghost" onClick={handleBackNavigation}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {studentDetailsQuestions.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Question Card */}
          <Card className="mb-8 hover-lift">
            <CardHeader>
              <Badge className="w-fit mb-2 gradient-secondary text-white">Personal Details</Badge>
              <CardTitle className="text-xl">{question.question}</CardTitle>
              {!question.required && (
                <CardDescription className="text-accent">Optional - you can skip this</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {question.type === "input" && (
                <div className="space-y-2">
                  <Input
                    placeholder={question.placeholder}
                    value={detailsAnswers[question.id] || ""}
                    onChange={(e) => handleDetailsAnswer(question.id, e.target.value)}
                    className="text-lg p-4 rounded-xl"
                  />
                </div>
              )}

              {question.type === "select" && (
                <Select
                  value={detailsAnswers[question.id] || ""}
                  onValueChange={(value) => handleDetailsAnswer(question.id, value)}
                >
                  <SelectTrigger className="text-lg p-4 rounded-xl">
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {question.options?.map((option) => (
                      <SelectItem key={option} value={option} className="text-lg">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {question.type === "mcq" && (
                <div className="space-y-3">
                  {question.options?.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleDetailsAnswer(question.id, option.id)}
                      className={`w-full p-4 text-left border-2 rounded-xl transition-all hover-lift ${
                        detailsAnswers[question.id] === option.id
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-border hover:border-primary/50 hover:bg-card/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            detailsAnswers[question.id] === option.id
                              ? "border-primary bg-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {detailsAnswers[question.id] === option.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <span className="font-medium">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {!question.required && (
                <Button variant="ghost" onClick={nextDetailsQuestion}>
                  Skip
                </Button>
              )}
              <Button
                onClick={nextDetailsQuestion}
                disabled={question.required && !detailsAnswers[question.id]}
                className="gradient-primary"
              >
                {currentQuestion === studentDetailsQuestions.length - 1 ? "Take Aptitude Test" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
