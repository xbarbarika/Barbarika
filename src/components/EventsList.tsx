"use client";

import { GlowCard } from "@/components/ui/spotlight-card";
import EventGlassCard from "@/components/ui/event-glass-card";

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
  useGlassCards?: boolean;
}

const EventsList = ({ events, useGlassCards = false }: EventsListProps) => {
  const glowColors: ('blue' | 'purple' | 'green' | 'red' | 'orange')[] = ['red', 'orange', 'purple'];
  
  // Background images mapping for different locations
  const getLocationBackground = (location: string) => {
    const locationMap: Record<string, string> = {
      'Seoul': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'New York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Paris': 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Berlin': 'https://images.unsplash.com/photo-1587330979470-3595ac045cd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Mumbai': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'Sydney': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    };
    
    return locationMap[location] || 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
  };
  
  // Render Glass Cards if requested
  if (useGlassCards) {
    return (
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <EventGlassCard 
            key={event.id}
            event={event}
            index={index}
            className="transition-all duration-300 hover:scale-105"
          />
        ))}
      </div>
    );
  }

  // Default GlowCard rendering
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <GlowCard 
          key={event.id}
          glowColor={glowColors[index % glowColors.length]}
          customSize={true}
          className="w-full h-auto min-h-[500px] cursor-pointer group relative overflow-hidden transition-all duration-300 hover:scale-105"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${getLocationBackground(event.location)})`,
              filter: 'brightness(0.3)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Date Badge */}
            <div className="p-4 mb-4 text-center rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                 style={{
                   background: 'rgba(255, 59, 48, 0.9)',
                   border: '1px solid rgba(255, 255, 255, 0.2)'
                 }}>
              <div className="text-sm font-medium text-white mb-1 transition-all duration-300"
                   style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                {event.day}
              </div>
              <div className="text-xl font-bold text-white transition-all duration-300"
                   style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                {event.date}
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1 flex flex-col justify-between p-2">
              <div>
                <div className="text-sm text-white/70 mb-2"
                     style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  {event.time}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-all duration-300 transform group-hover:scale-105"
                    style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-white/70 mb-4"
                     style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                  <div>{event.organizer}</div>
                  <div>{event.location}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:bg-red-500/30"
                         style={{
                           background: 'rgba(255, 59, 48, 0.2)',
                           color: '#FF3B30',
                           border: '1px solid rgba(255, 59, 48, 0.3)',
                           fontFamily: 'var(--font-dm-sans), sans-serif'
                         }}>
                      {event.type}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4"
                   style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="text-xl font-bold"
                     style={{ 
                       color: '#FF3B30',
                       fontFamily: 'var(--font-tourney), sans-serif'
                     }}>
                  {event.price}
                </div>
                <button className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group-hover:border-white group-hover:text-red-400 relative overflow-hidden"
                        style={{
                          background: 'rgba(0, 0, 0, 0.2)',
                          color: 'white',
                          border: '2px solid #FF3B30',
                          backdropFilter: 'blur(10px)',
                          fontFamily: 'var(--font-dm-sans), sans-serif'
                        }}>
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </GlowCard>
      ))}
    </div>
  );
};

export default EventsList;
