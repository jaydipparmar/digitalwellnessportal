import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Phone, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hospital } from '@/data/mockData';

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard = ({ hospital }: HospitalCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="wellness-card overflow-hidden">
      {/* Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-4">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
        
        {/* Emergency Badge */}
        {hospital.emergencyAvailable && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" />
            24/7 Emergency
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          {hospital.rating}
        </div>
        
        {/* Distance */}
        <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <MapPin className="w-4 h-4 text-primary" />
          {hospital.distance} km away
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display text-xl font-semibold text-secondary mb-2">
          {hospital.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          {hospital.address}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hospital.specialties.slice(0, 3).map((specialty, index) => (
            <span 
              key={index}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
          {hospital.specialties.length > 3 && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
              +{hospital.specialties.length - 3} more
            </span>
          )}
        </div>

        {/* Doctors Available */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{hospital.doctors.length} doctors available</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            variant="accent" 
            className="flex-1"
            onClick={() => navigate(`/hospital/${hospital.id}`)}
          >
            View Details
          </Button>
          <Button variant="outline" size="icon">
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
