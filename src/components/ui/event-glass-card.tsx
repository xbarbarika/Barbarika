import * as React from "react";
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { EventType } from "@/components/EventsList";

export interface EventGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: EventType;
  index: number;
}

const EventGlassCard = React.forwardRef<HTMLDivElement, EventGlassCardProps>(
  ({ event, index, className, ...props }, ref) => {
    // Get location background image
    const getLocationBackground = (location: string) => {
      const locationMap: Record<string, string> = {
        'Seoul': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'New York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'Tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      };
      return locationMap[location] || 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
    };

    return (
      <div
        ref={ref}
        className={`group h-[400px] w-[320px] [perspective:1000px] ${className}`}
        {...props}
      >
        <div className="relative h-full rounded-[30px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(255,59,48,0.4)_20px_40px_25px_-20px,rgba(0,0,0,0.3)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,15deg)]">
          
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 rounded-[30px] bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-110"
            style={{
              backgroundImage: `url(${getLocationBackground(event.location)})`,
            }}
          />
          
          {/* Glass Effect Layer */}
          <div className="absolute inset-2 rounded-[35px] border-b border-l border-white/20 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          
          {/* Content Layer */}
          <div className="absolute inset-0 [transform:translate3d(0,0,26px)]">
            <div className="p-6 h-full flex flex-col">
              
              {/* Date Badge */}
              <div className="mb-6">
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(255, 59, 48, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Calendar className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {event.date} • {event.day}
                  </span>
                </div>
              </div>

              {/* Event Title */}
              <h3 
                className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-red-300 transition-all duration-300 line-clamp-2"
                style={{ fontFamily: 'var(--font-tourney), sans-serif' }}
              >
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-3 text-red-400" />
                  <span style={{ fontFamily: 'var(--font-numans), sans-serif' }}>{event.time}</span>
                </div>
                
                <div className="flex items-center text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-red-400" />
                  <span style={{ fontFamily: 'var(--font-numans), sans-serif' }}>{event.location}</span>
                </div>
                
                <div className="flex items-center text-white/80 text-sm">
                  <Users className="w-4 h-4 mr-3 text-red-400" />
                  <span style={{ fontFamily: 'var(--font-numans), sans-serif' }}>{event.organizer}</span>
                </div>
              </div>

              {/* Event Type Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(255, 59, 48, 0.2)',
                    color: '#FF3B30',
                    border: '1px solid rgba(255, 59, 48, 0.3)',
                    fontFamily: 'var(--font-dm-sans), sans-serif'
                  }}
                >
                  {event.type}
                </span>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div 
                  className="text-2xl font-bold transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    color: '#FF3B30',
                    fontFamily: 'var(--font-tourney), sans-serif'
                  }}
                >
                  {event.price}
                </div>
                
                <button className="flex items-center px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group-hover:border-white group-hover:text-red-300 relative overflow-hidden"
                        style={{
                          background: 'rgba(0, 0, 0, 0.3)',
                          color: 'white',
                          border: '2px solid rgba(255, 59, 48, 0.5)',
                          backdropFilter: 'blur(10px)',
                          fontFamily: 'var(--font-dm-sans), sans-serif'
                        }}>
                  <span className="relative z-10 mr-2">Learn More</span>
                  <ChevronRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none">
            {[
              { size: "120px", pos: "10px", z: "20px", delay: "0s", opacity: "0.1" },
              { size: "90px", pos: "15px", z: "40px", delay: "0.3s", opacity: "0.15" },
              { size: "60px", pos: "20px", z: "60px", delay: "0.6s", opacity: "0.2" },
            ].map((circle, circleIndex) => (
              <div
                key={circleIndex}
                className="absolute aspect-square rounded-full bg-red-500 shadow-[rgba(255,59,48,0.3)_-5px_5px_15px_0px] transition-all duration-700 ease-in-out group-hover:scale-110"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  opacity: circle.opacity,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              ></div>
            ))}
            
            {/* Event Number Badge */}
            <div
              className="absolute grid aspect-square w-[40px] place-content-center rounded-full bg-red-500 shadow-[rgba(255,59,48,0.4)_-5px_5px_15px_0px] transition-all duration-700 ease-in-out [transform:translate3d(0,0,80px)] [transition-delay:0.9s] group-hover:[transform:translate3d(0,0,100px)]"
              style={{ top: "25px", right: "25px" }}
            >
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

EventGlassCard.displayName = "EventGlassCard";

export default EventGlassCard;
