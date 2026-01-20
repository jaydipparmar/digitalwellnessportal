import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import HospitalCard from '@/components/hospitals/HospitalCard';
import MapPlaceholder from '@/components/hospitals/MapPlaceholder';
import { Button } from '@/components/ui/button';
import { hospitals, Hospital } from '@/data/mockData';

const specialties = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Emergency', 'General Medicine'];
const distances = ['Any', 'Within 1 km', 'Within 2 km', 'Within 5 km', 'Within 10 km'];

const Hospitals = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDistance, setSelectedDistance] = useState('Any');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      // Search filter
      const matchesSearch = 
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      // Specialty filter
      const matchesSpecialty = 
        selectedSpecialty === 'All' || 
        hospital.specialties.includes(selectedSpecialty);

      // Distance filter
      let matchesDistance = true;
      if (selectedDistance !== 'Any') {
        const maxDistance = parseInt(selectedDistance.match(/\d+/)?.[0] || '999');
        matchesDistance = hospital.distance <= maxDistance;
      }

      return matchesSearch && matchesSpecialty && matchesDistance;
    });
  }, [searchQuery, selectedSpecialty, selectedDistance]);

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-2">
              Find Hospitals Near You
            </h1>
            <p className="text-muted-foreground">
              Discover quality healthcare facilities in your area
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search hospitals, specialties, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-wellness w-full pl-12 pr-4"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Toggle */}
              <Button
                variant={showFilters ? 'default' : 'outline'}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* View Toggle */}
              <div className="hidden lg:flex bg-card rounded-xl p-1 border border-border">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'map' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setViewMode('map')}
                >
                  Map
                </button>
              </div>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="wellness-card animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Specialty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Specialty
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty) => (
                        <button
                          key={specialty}
                          onClick={() => setSelectedSpecialty(specialty)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            selectedSpecialty === specialty
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                          }`}
                        >
                          {specialty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Distance Filter */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Distance
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {distances.map((distance) => (
                        <button
                          key={distance}
                          onClick={() => setSelectedDistance(distance)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            selectedDistance === distance
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                          }`}
                        >
                          {distance}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-6 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{filteredHospitals.length} hospitals found</span>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hospital List */}
            <div className={viewMode === 'map' ? 'hidden lg:block' : ''}>
              {filteredHospitals.length > 0 ? (
                <div className="grid gap-6">
                  {filteredHospitals.map((hospital) => (
                    <HospitalCard key={hospital.id} hospital={hospital} />
                  ))}
                </div>
              ) : (
                <div className="wellness-card text-center py-12">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-secondary mb-2">
                    No hospitals found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>

            {/* Map */}
            <div className={`${viewMode === 'list' ? 'hidden lg:block' : ''} lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]`}>
              <MapPlaceholder 
                hospitals={filteredHospitals} 
                onHospitalClick={setSelectedHospital}
                selectedHospital={selectedHospital}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hospitals;
