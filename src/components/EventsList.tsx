"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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

interface EventsListProps {
  events: EventType[];
}

const EventsList = ({ events }: EventsListProps) => {
  return (
    <div className="space-y-8">
      {events.map((event) => (
        <Card key={event.id} className="bg-event-card border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Date Badge */}
              <div className="bg-muted p-6 md:p-8 text-center md:min-w-[140px] flex flex-col justify-center">
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  {event.day}
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {event.date}
                </div>
              </div>

              {/* Event Image */}
              <div className="w-full md:w-48 h-48 md:h-auto">
                <Image 
                  src={event.image} 
                  alt={`Cover for ${event.title}`}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Event Details */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {event.time}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>{event.organizer}</div>
                      <div>{event.location}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary">
                      {event.price}
                    </div>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventsList;
