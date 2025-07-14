"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Plus,
  Calendar,
  Users,
  Clock,
  Video,
  Link2,
  Settings,
  LogOut,
  Mic,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const [meetingUrl, setMeetingUrl] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const recentMeetings = [
    {
      id: 1,
      title: "Product Strategy Review",
      date: "Today, 2:00 PM",
      duration: "45 min",
      participants: ["Sarah Chen", "Mike Rodriguez", "Alex Thompson"],
      status: "completed",
    },
    {
      id: 2,
      title: "Weekly Team Standup",
      date: "Yesterday, 10:00 AM",
      duration: "30 min",
      participants: ["Team Alpha"],
      status: "completed",
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "Dec 8, 3:00 PM",
      duration: "60 min",
      participants: ["John Smith", "Emma Wilson"],
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-card/50 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <Mic className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                MeetMuse
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-foreground font-medium">
                Dashboard
              </Link>
              <Link
                href="/meetings"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Meetings
              </Link>
              <Link
                href="/settings"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings className="w-5 h-5" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to capture your next meeting insights?
          </p>
        </div>

        {/* Create Meeting Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Plus className="w-5 h-5 mr-2 text-primary" />
                Create New Meeting
              </CardTitle>
              <CardDescription>
                Start recording and transcribing your meeting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="meeting-url" className="text-sm font-medium">
                    Paste Meeting URL
                  </Label>
                  <Input
                    id="meeting-url"
                    value={meetingUrl}
                    onChange={(e) => setMeetingUrl(e.target.value)}
                    placeholder="https://zoom.us/j/... or meet.google.com/..."
                    className="bg-background/50"
                  />
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                    <Link2 className="w-4 h-4 mr-2" />
                    Join & Record
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <span className="text-2xl">or</span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="w-full border-2 hover:bg-accent/50"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule New Meeting
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">
                      Total Meetings
                    </p>
                  </div>
                  <Video className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">8.5h</p>
                    <p className="text-sm text-muted-foreground">Time Saved</p>
                  </div>
                  <Clock className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Meetings */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/40">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Meetings</CardTitle>
                <CardDescription>
                  Your latest meeting recordings and transcripts
                </CardDescription>
              </div>
              <Link href="/meetings">
                <Button variant="outline" className="border-2">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeetings.map((meeting) => (
                <Link key={meeting.id} href={`/meetings/${meeting.id}`}>
                  <div className="p-4 rounded-xl border border-border/40 hover:border-border/60 hover:bg-accent/30 transition-all duration-200 cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {meeting.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {meeting.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {meeting.duration}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {meeting.participants.length} participants
                          </span>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          meeting.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
                      >
                        {meeting.status}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
