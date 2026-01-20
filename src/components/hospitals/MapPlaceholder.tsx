import { MapPin, Navigation, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { Hospital } from '@/data/mockData';

interface MapPlaceholderProps {
  hospitals: Hospital[];
  onHospitalClick?: (hospital: Hospital) => void;
  selectedHospital?: Hospital | null;
}

const MapPlaceholder = ({ hospitals, onHospitalClick, selectedHospital }: MapPlaceholderProps) => {
  return (
    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#map-grid)"/>
        </svg>
      </div>

      {/* Simulated Roads */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        <path d="M0 200 Q100 180 200 200 T400 200" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary"/>
        <path d="M200 0 Q180 100 200 200 T200 400" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary"/>
        <path d="M50 50 Q150 100 300 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"/>
        <path d="M350 50 Q250 150 150 350" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"/>
      </svg>

      {/* User Location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-accent rounded-full animate-ping absolute"></div>
          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center relative">
            <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-secondary bg-card px-2 py-1 rounded-full shadow-sm">
          Your Location
        </div>
      </div>

      {/* Hospital Markers */}
      {hospitals.map((hospital, index) => {
        const positions = [
          { top: '25%', left: '30%' },
          { top: '35%', left: '65%' },
          { top: '60%', left: '25%' },
          { top: '70%', left: '70%' },
        ];
        const pos = positions[index % positions.length];
        const isSelected = selectedHospital?.id === hospital.id;

        return (
          <div
            key={hospital.id}
            className={`absolute cursor-pointer transition-all duration-300 ${isSelected ? 'z-20 scale-110' : 'z-10 hover:scale-105'}`}
            style={{ top: pos.top, left: pos.left }}
            onClick={() => onHospitalClick?.(hospital)}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${isSelected ? 'bg-accent' : 'bg-primary'}`}>
              <MapPin className={`w-5 h-5 ${isSelected ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
            </div>
            {isSelected && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 wellness-card p-3 min-w-[200px] z-30 animate-fade-in">
                <h4 className="font-semibold text-secondary text-sm mb-1">{hospital.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{hospital.distance} km away</p>
                <div className="text-xs text-accent font-medium">Click to view details</div>
              </div>
            )}
          </div>
        );
      })}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-card rounded-lg shadow-wellness flex items-center justify-center hover:bg-muted transition-colors">
          <ZoomIn className="w-5 h-5 text-foreground" />
        </button>
        <button className="w-10 h-10 bg-card rounded-lg shadow-wellness flex items-center justify-center hover:bg-muted transition-colors">
          <ZoomOut className="w-5 h-5 text-foreground" />
        </button>
        <button className="w-10 h-10 bg-card rounded-lg shadow-wellness flex items-center justify-center hover:bg-muted transition-colors">
          <Layers className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Center Location Button */}
      <div className="absolute bottom-4 right-4">
        <button className="w-12 h-12 bg-accent rounded-full shadow-accent flex items-center justify-center hover:scale-105 transition-transform">
          <Navigation className="w-5 h-5 text-accent-foreground" />
        </button>
      </div>

      {/* Map Attribution */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
        📍 Map integration ready for Google Maps / Mapbox
      </div>
    </div>
  );
};

export default MapPlaceholder;
