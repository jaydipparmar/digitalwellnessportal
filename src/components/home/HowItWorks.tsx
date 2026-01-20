import { Navigation, Building2, UserCheck, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: Navigation,
    step: '01',
    title: 'Enable Location',
    description: 'Allow location access to find hospitals and doctors near you instantly.',
  },
  {
    icon: Building2,
    step: '02',
    title: 'Choose Hospital',
    description: 'Browse nearby hospitals, compare ratings, and select your preferred one.',
  },
  {
    icon: UserCheck,
    step: '03',
    title: 'Select Doctor',
    description: 'View available doctors, check their specialization and availability.',
  },
  {
    icon: CalendarCheck,
    step: '04',
    title: 'Book Appointment',
    description: 'Pick a convenient time slot and confirm your appointment instantly.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">
            Book Your Appointment in 4 Easy Steps
          </h2>
          <p className="text-muted-foreground">
            Getting quality healthcare has never been easier. Follow these simple steps 
            to book your next doctor's appointment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border z-0">
                  <div className="absolute top-1/2 right-0 w-3 h-3 border-t-2 border-r-2 border-accent transform rotate-45 -translate-y-1/2"></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto bg-card rounded-2xl flex items-center justify-center shadow-wellness mb-6 group-hover:shadow-wellness-lg group-hover:scale-105 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-display text-lg font-semibold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
