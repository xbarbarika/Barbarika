"use client";

const StatsSection = () => {
  const stats = [
    {
      number: "36",
      label: "Events Held This Decade"
    },
    {
      number: "56,000+",
      label: "Founders"
    },
    {
      number: "21,500+",
      label: "Community Members"
    },
    {
      number: "60+",
      label: "Major Sponsors"
    }
  ];

  return (
    <section className="py-12 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 p-6 rounded-2xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 59, 48, 0.2)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                 }}>
              <div className="text-4xl md:text-5xl font-bold text-white"
                   style={{ 
                     color: '#FF3B30',
                     fontFamily: 'var(--font-tourney), sans-serif'
                   }}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/70 font-medium"
                   style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
