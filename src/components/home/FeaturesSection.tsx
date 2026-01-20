import { MapPin, Clock, Calendar, Shield, Star, Phone } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Find Nearby Hospitals',
    description: 'Locate the best healthcare facilities close to you with our interactive map and real-time distance tracking.',
  },
  {
    icon: Clock,
    title: 'Real-Time Availability',
    description: 'Check doctor schedules instantly. Know exactly when your preferred doctor is available before booking.',
  },
  {
    icon: Calendar,
    title: 'Easy Appointment Booking',
    description: 'Book appointments in seconds with our streamlined booking system. No phone calls needed.',
  },
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'All doctors and hospitals in our network are thoroughly verified for your peace of mind.',
  },
  {
    icon: Star,
    title: 'Patient Reviews',
    description: 'Read genuine patient reviews and ratings to make informed decisions about your healthcare.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Our dedicated support team is available round the clock to assist you with any queries.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">
            Healthcare Made Simple
          </h2>
          <p className="text-muted-foreground">
            We're committed to making healthcare accessible and convenient for everyone. 
            Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="wellness-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
