"use client";

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
      {events.map((event, index) => (
        <div key={event.id} 
             className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] rounded-2xl cursor-pointer"
             style={{
               background: 'rgba(255, 255, 255, 0.05)',
               backdropFilter: 'blur(20px)',
               border: '1px solid rgba(255, 59, 48, 0.2)',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
               animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
             }}>
          <div className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Date Badge */}
              <div className="p-6 md:p-8 text-center md:min-w-[140px] flex flex-col justify-center group-hover:bg-red-500/20 transition-all duration-300"
                   style={{
                     background: 'rgba(255, 59, 48, 0.1)',
                     borderRight: '1px solid rgba(255, 59, 48, 0.2)'
                   }}>
                <div className="text-sm font-medium text-white/70 mb-1 group-hover:text-white/90 transition-colors duration-300"
                     style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  {event.day}
                </div>
                <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                     style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                  {event.date}
                </div>
              </div>

              {/* Event Image */}
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src={event.image} 
                  alt={`Cover for ${event.title}`}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Event Details */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-sm text-white/70 mb-2"
                         style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                      {event.time}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-red-400 transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-white/70"
                         style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                      <div>{event.organizer}</div>
                      <div>{event.location}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs px-3 py-1 rounded-full"
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
                  
                  <div className="flex justify-between items-center mt-6 pt-4"
                       style={{ borderTop: '1px solid rgba(255, 59, 48, 0.2)' }}>
                    <div className="text-2xl font-bold"
                         style={{ 
                           color: '#FF3B30',
                           fontFamily: 'var(--font-tourney), sans-serif'
                         }}>
                      {event.price}
                    </div>
                    <button className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                            style={{
                              background: 'rgba(0, 0, 0, 0.2)',
                              color: 'white',
                              border: '2px solid #FF3B30',
                              backdropFilter: 'blur(10px)',
                              fontFamily: 'var(--font-dm-sans), sans-serif'
                            }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
