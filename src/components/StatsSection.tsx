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
    <section className="bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
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
