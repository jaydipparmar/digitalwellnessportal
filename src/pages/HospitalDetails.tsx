import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Phone, Clock, Shield, Users, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import DoctorCard from '@/components/doctors/DoctorCard';
import { Button } from '@/components/ui/button';
import { hospitals } from '@/data/mockData';

const HospitalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitals.find((h) => h.id === id);

  if (!hospital) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-secondary mb-4">
              Hospital not found
            </h1>
            <Button variant="accent" onClick={() => navigate('/hospitals')}>
              Back to Hospitals
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Hospital Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  {hospital.emergencyAvailable && (
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      <Clock className="w-3 h-3" />
                      24/7 Emergency
                    </span>
                  )}
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    {hospital.name}
                  </h1>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {hospital.distance} km away
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      {hospital.rating} rating
                    </span>
                  </div>
                </div>
                <Button variant="accent" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  {hospital.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="wellness-card">
                <h2 className="font-display text-xl font-semibold text-secondary mb-4">
                  About Hospital
                </h2>
                <p className="text-muted-foreground mb-4">
                  {hospital.name} is a leading healthcare facility committed to providing exceptional 
                  medical care with state-of-the-art technology and compassionate staff. Our team of 
                  experienced professionals is dedicated to improving the health and well-being of our community.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {hospital.address}
                </div>
              </div>

              {/* Specialties */}
              <div className="wellness-card">
                <h2 className="font-display text-xl font-semibold text-secondary mb-4">
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-3">
                  {hospital.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Available Doctors */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold text-secondary">
                    Available Doctors
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {hospital.doctors.length} doctors
                  </span>
                </div>
                <div className="space-y-4">
                  {hospital.doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} hospitalId={hospital.id} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="wellness-card">
                <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Call Hospital</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Get Directions</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Hospital Features */}
              <div className="wellness-card">
                <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                  Features
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Verified & Accredited</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Online Appointment Booking</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Expert Medical Staff</span>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="wellness-card">
                <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  {hospital.emergencyAvailable && (
                    <div className="flex justify-between text-accent font-medium pt-2 border-t border-border mt-2">
                      <span>Emergency</span>
                      <span>24/7</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HospitalDetails;
