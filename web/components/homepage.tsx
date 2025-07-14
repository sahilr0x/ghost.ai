"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, FileText, Video, Mic } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
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
            <div className="flex items-center space-x-4">
              <Link href="/(auth)/login">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Login
                </Button>
              </Link>
              <Link href="/(auth)/login">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Try Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Your Smart Meeting
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Capture, Summarize, Remember.
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
              Transcribe, summarize, and revisit meetings with a single click.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-accent/50 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Preview */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/40 p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Beautiful Meeting Interface Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need for
              <span className="text-primary"> perfect meetings</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by AI to make every meeting more productive and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Auto Transcripts",
                description:
                  "Real-time transcription with perfect accuracy and speaker identification",
              },
              {
                icon: Users,
                title: "Speaker Detection",
                description:
                  "Automatically identify and label different speakers throughout the meeting",
              },
              {
                icon: Mic,
                title: "Smart Summaries",
                description:
                  "AI-powered summaries highlighting key decisions and action items",
              },
              {
                icon: Video,
                title: "Video Playback",
                description:
                  "Synced video playback with clickable transcript navigation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to transform your meetings?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams who never miss an important detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 text-lg rounded-full"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full border-2"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/60 rounded-md flex items-center justify-center">
                <Mic className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                MeetMuse
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 MeetMuse. Crafted with elegance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
