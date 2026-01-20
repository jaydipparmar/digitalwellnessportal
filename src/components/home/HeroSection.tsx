import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Navigation, Hospital, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const navigate = useNavigate();

  const handleLocationRequest = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          navigate('/hospitals');
        },
        () => {
          setIsLocating(false);
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      setIsLocating(false);
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/hospitals?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="hero-section min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted Healthcare Platform</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Find Nearby Hospitals & 
              <span className="text-primary"> Book Doctors</span> Instantly
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Your health is our priority. Discover quality healthcare facilities near you, 
              check doctor availability in real-time, and book appointments with just a few clicks.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search hospitals, specialties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-wellness w-full pl-12 pr-4"
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="sm:w-auto">
                  Search
                </Button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleLocationRequest}
                disabled={isLocating}
              >
                <Navigation className="w-5 h-5 mr-2" />
                {isLocating ? 'Detecting Location...' : 'Find Nearby Hospitals'}
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate('/hospitals')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Hospitals</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-wellness-lg">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                  alt="Healthcare professional"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-20 wellness-card flex items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Hospital className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">24/7 Available</div>
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-32 wellness-card flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Easy Booking</div>
                  <div className="text-sm text-muted-foreground">Book in seconds</div>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 wellness-card flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-card" alt="Doctor" />
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-card" alt="Doctor" />
                  <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-card" alt="Doctor" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Doctors</div>
                  <div className="text-sm text-muted-foreground">Verified professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
