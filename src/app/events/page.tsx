"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";
import PhotoGallery from "@/components/PhotoGallery";
import EventsList from "@/components/EventsList";

export interface EventType {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  organizer: string;
  location: string;
  type: string;
  price: string;
  image: string;
}

const EventsPage = () => {
  const events: EventType[] = [
    {
      id: 1,
      date: "Sep 22",
      day: "Monday",
      time: "2:00 AM · 11:00 AM GMT+9",
      title: "Korea Blockchain Week Founders & Investors Brunch ✨ (invite only)",
      organizer: "By Rime Salmi & Barbarika",
      location: "Seoul",
      type: "Founders & Investors Brunch ✨",
      price: "$250",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/bd/5fc977b7-4a1e-4ab7-a59a-e58f688af1ad.png"
    },
    {
      id: 2,
      date: "Sep 22",
      day: "Monday", 
      time: "6:00 AM · 3:00 PM GMT+9",
      title: "Korea Blockchain Week VCs & LPs Cocktail Hour ✨ (invite only)",
      organizer: "By Rime Salmi & Barbarika",
      location: "Seoul",
      type: "VC & LP Event ✨",
      price: "$500",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/gr/4db407d2-8354-4880-892e-731a72d68235.png"
    },
    {
      id: 3,
      date: "Sep 30",
      day: "Tuesday",
      time: "3:00 AM · 11:00 AM GMT+8",
      title: "Token2049 Singapore Founders & Investors Brunch ✨ (invite only)",
      organizer: "By Rime Salmi & Barbarika",
      location: "Singapore",
      type: "Founders & Investors Brunch ✨",
      price: "$300",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/aa/52139394-01d5-49b4-9b0a-438b228442ca.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip Links */}
      <div className="sr-only">
        <a href="#main-content" className="skip-link">Skip to Content</a>
      </div>

      {/* Hero Section */}
      <main id="main-content" className="relative min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center overflow-hidden">
        {/* Barbarika Logo Pattern Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="text-right pt-20 pr-20">
            <h2 className="text-6xl font-bold text-foreground/30 tracking-widest transform rotate-12">
              barbarika
            </h2>
            <div className="mt-8 text-sm font-medium text-foreground/40 tracking-wider">
              MARKETING STRATEGY<br />
              FOR WEB3
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            BARBARIKA&apos;S EXCLUSIVE<br />
            <span className="text-foreground/90">INVESTOR EVENTS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            An exclusive series of events designed to provide Web3 brands with monthly, 
            consistent exposure to the top founders & top investors all around the world.
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            SPONSOR AN EVENT WITH US
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Events Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Luma Integration Header */}
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Powered by Luma
            </Badge>
          </div>

          {/* Events List */}
          <EventsList events={events} />

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <footer className="bg-card py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-4">
              barbarika
            </h2>
            <div className="text-sm text-muted-foreground">
              A leading edge global growth agency
            </div>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Site Map</a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6">
        <Button 
          size="sm" 
          className="rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </Button>
      </div>
    </div>
  );
};

export default EventsPage;


