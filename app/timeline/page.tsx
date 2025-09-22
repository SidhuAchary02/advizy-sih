"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Target,
  ArrowLeft,
  Calendar,
  Clock,
  Plus,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"

const timelineEvents = [
  {
    id: 1,
    title: "JEE Main Registration",
    description: "Register for JEE Main 2024 examination",
    date: "2024-03-20",
    type: "exam",
    status: "upcoming",
    priority: "high",
    category: "Engineering Entrance",
  },
  {
    id: 2,
    title: "NEET Application Deadline",
    description: "Last date to apply for NEET UG 2024",
    date: "2024-03-25",
    type: "application",
    status: "upcoming",
    priority: "high",
    category: "Medical Entrance",
  },
  {
    id: 3,
    title: "Merit Scholarship Application",
    description: "Apply for National Merit Scholarship",
    date: "2024-03-15",
    type: "scholarship",
    status: "completed",
    priority: "medium",
    category: "Financial Aid",
  },
  {
    id: 4,
    title: "College Counseling Session",
    description: "Attend career counseling with mentor",
    date: "2024-03-10",
    type: "meeting",
    status: "completed",
    priority: "medium",
    category: "Guidance",
  },
  {
    id: 5,
    title: "IIT Delhi Campus Visit",
    description: "Visit IIT Delhi campus and attend info session",
    date: "2024-04-05",
    type: "visit",
    status: "upcoming",
    priority: "low",
    category: "College Research",
  },
  {
    id: 6,
    title: "CAT Registration Opens",
    description: "Registration for CAT 2024 begins",
    date: "2024-08-01",
    type: "exam",
    status: "future",
    priority: "medium",
    category: "Management Entrance",
  },
]

export default function TimelinePage() {
  const [events, setEvents] = useState(timelineEvents)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    type: "exam",
    priority: "medium",
    category: "",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "upcoming":
        return "secondary"
      case "overdue":
        return "destructive"
      case "future":
        return "outline"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "exam":
        return BookOpen
      case "application":
        return Award
      case "scholarship":
        return Award
      case "meeting":
        return Users
      case "visit":
        return Calendar
      default:
        return Calendar
    }
  }

  const getDaysUntil = (date: string) => {
    const eventDate = new Date(date)
    const today = new Date()
    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      const event = {
        id: events.length + 1,
        ...newEvent,
        status: getDaysUntil(newEvent.date) < 0 ? "overdue" : getDaysUntil(newEvent.date) <= 30 ? "upcoming" : "future",
      }
      setEvents([...events, event])
      setNewEvent({
        title: "",
        description: "",
        date: "",
        type: "exam",
        priority: "medium",
        category: "",
      })
      setShowAddDialog(false)
    }
  }

  const toggleEventStatus = (eventId: number) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, status: event.status === "completed" ? "upcoming" : "completed" } : event,
      ),
    )
  }

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

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
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription>Add an important deadline or event to your timeline</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="Enter event title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      placeholder="Enter event description"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <select
                        id="priority"
                        value={newEvent.priority}
                        onChange={(e) => setNewEvent({ ...newEvent, priority: e.target.value })}
                        className="w-full p-2 border border-border rounded-md"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newEvent.category}
                      onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                      placeholder="e.g., Engineering Entrance, Scholarship"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={addEvent} className="flex-1">
                      Add Event
                    </Button>
                    <Button variant="outline" onClick={() => setShowAddDialog(false)} className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
          <h1 className="text-4xl font-bold mb-4">Academic Timeline</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track important deadlines, exams, and milestones in your academic journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-xl font-bold">{events.filter((e) => e.status === "upcoming").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-xl font-bold">{events.filter((e) => e.status === "completed").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">High Priority</p>
                  <p className="text-xl font-bold">
                    {events.filter((e) => e.priority === "high" && e.status !== "completed").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-xl font-bold">
                    {
                      events.filter((e) => {
                        const eventDate = new Date(e.date)
                        const now = new Date()
                        return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear()
                      }).length
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Your Academic Timeline
            </CardTitle>
            <CardDescription>All your important dates and deadlines in chronological order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {sortedEvents.map((event, index) => {
                const IconComponent = getTypeIcon(event.type)
                const daysUntil = getDaysUntil(event.date)

                return (
                  <div key={event.id} className="flex items-start gap-4">
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                          event.status === "completed"
                            ? "bg-primary border-primary"
                            : event.status === "upcoming"
                              ? "bg-secondary border-secondary"
                              : "bg-muted border-muted-foreground"
                        }`}
                      >
                        {event.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <IconComponent
                            className={`w-5 h-5 ${
                              event.status === "upcoming" ? "text-secondary-foreground" : "text-muted-foreground"
                            }`}
                          />
                        )}
                      </div>
                      {index < sortedEvents.length - 1 && <div className="w-0.5 h-16 bg-border mt-2"></div>}
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 pb-8">
                      <Card
                        className={`border-2 ${
                          event.status === "completed"
                            ? "border-primary/20 bg-primary/5"
                            : event.status === "upcoming" && daysUntil <= 7
                              ? "border-red-200 bg-red-50"
                              : "border-border"
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{event.title}</h3>
                              <p className="text-muted-foreground text-sm">{event.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={getStatusColor(event.status)}>{event.status}</Badge>
                              <div
                                className={`w-2 h-2 rounded-full ${getPriorityColor(event.priority).replace("text-", "bg-")}`}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(event.date).toLocaleDateString()}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {event.category}
                              </Badge>
                            </div>

                            <div className="flex items-center gap-2">
                              {event.status !== "completed" && daysUntil >= 0 && (
                                <span
                                  className={`text-sm ${daysUntil <= 7 ? "text-red-500 font-medium" : "text-muted-foreground"}`}
                                >
                                  {daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days left`}
                                </span>
                              )}
                              {event.status !== "completed" && daysUntil < 0 && (
                                <span className="text-sm text-red-500 font-medium">
                                  {Math.abs(daysUntil)} days overdue
                                </span>
                              )}
                              <Button size="sm" variant="outline" onClick={() => toggleEventStatus(event.id)}>
                                {event.status === "completed" ? "Mark Pending" : "Mark Complete"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
