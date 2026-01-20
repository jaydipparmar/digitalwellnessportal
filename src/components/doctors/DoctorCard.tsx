import { useNavigate } from 'react-router-dom';
import { Star, Clock, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Doctor } from '@/data/mockData';

interface DoctorCardProps {
  doctor: Doctor;
  hospitalId: string;
}

const DoctorCard = ({ doctor, hospitalId }: DoctorCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="wellness-card flex flex-col sm:flex-row gap-4">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-secondary">
              {doctor.name}
            </h3>
            <p className="text-primary font-medium text-sm">{doctor.specialty}</p>
          </div>
          <span className={doctor.available ? 'status-available' : 'status-busy'}>
            {doctor.available ? 'Available' : 'Busy'}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>{doctor.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>{doctor.experience} years exp.</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{doctor.nextAvailable}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm">
            <span className="text-muted-foreground">Consultation Fee: </span>
            <span className="font-semibold text-secondary">${doctor.consultationFee}</span>
          </div>
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => navigate(`/booking/${hospitalId}/${doctor.id}`)}
          >
            <Calendar className="w-4 h-4 mr-1" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
