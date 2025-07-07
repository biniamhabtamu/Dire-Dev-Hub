import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Code, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Dire-Dev
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The Ultimate Web App for Dire Dawa University Students
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              Your all-in-one platform for academic resources, collaboration, and development tools. 
              Built with React.js & modern tech stack for the ultimate learning experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-gradient-card p-6 rounded-xl shadow-elegant border backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Dev-Material & Books</h3>
              <p className="text-sm text-muted-foreground">
                Access free textbooks, PDFs, and coding resources for all subjects
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl shadow-elegant border backdrop-blur-sm">
              <Code className="h-8 w-8 text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Dev-Tools</h3>
              <p className="text-sm text-muted-foreground">
                Code editor, todo lists, markdown notes with live preview
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl shadow-elegant border backdrop-blur-sm">
              <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Real-Time Chat & Discussion</h3>
              <p className="text-sm text-muted-foreground">
                Connect with peers, share code, and collaborate in real-time
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join thousands of Dire Dawa University students already using Dire-Dev
            </p>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-300" />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/10 rounded-full animate-pulse delay-700" />
    </section>
  );
};

export default HeroSection;