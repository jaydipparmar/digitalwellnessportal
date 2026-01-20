export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: number;
  available: boolean;
  nextAvailable: string;
  consultationFee: number;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  image: string;
  specialties: string[];
  doctors: Doctor[];
  lat: number;
  lng: number;
  phone: string;
  emergencyAvailable: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  hospitalName: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    rating: 4.9,
    experience: 15,
    available: true,
    nextAvailable: 'Today, 2:00 PM',
    consultationFee: 150,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    rating: 4.8,
    experience: 12,
    available: true,
    nextAvailable: 'Today, 4:30 PM',
    consultationFee: 180,
  },
  {
    id: '3',
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
    rating: 4.9,
    experience: 10,
    available: false,
    nextAvailable: 'Tomorrow, 10:00 AM',
    consultationFee: 120,
  },
  {
    id: '4',
    name: 'Dr. James Anderson',
    specialty: 'Orthopedic',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face',
    rating: 4.7,
    experience: 18,
    available: true,
    nextAvailable: 'Today, 5:00 PM',
    consultationFee: 200,
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face',
    rating: 4.8,
    experience: 8,
    available: true,
    nextAvailable: 'Today, 3:00 PM',
    consultationFee: 130,
  },
];

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Healthcare Ave, Medical District',
    distance: 0.8,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
    specialties: ['Cardiology', 'Neurology', 'Pediatrics', 'Emergency'],
    doctors: [doctors[0], doctors[1], doctors[2]],
    lat: 40.7128,
    lng: -74.006,
    phone: '+1 (555) 123-4567',
    emergencyAvailable: true,
  },
  {
    id: '2',
    name: 'Wellness Medical Center',
    address: '456 Health Blvd, Wellness Park',
    distance: 1.2,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
    specialties: ['Orthopedics', 'Dermatology', 'General Medicine'],
    doctors: [doctors[3], doctors[4]],
    lat: 40.7148,
    lng: -74.008,
    phone: '+1 (555) 234-5678',
    emergencyAvailable: true,
  },
  {
    id: '3',
    name: 'Community Health Hospital',
    address: '789 Care Street, Downtown',
    distance: 2.1,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
    specialties: ['Family Medicine', 'Internal Medicine', 'Psychiatry'],
    doctors: [doctors[0], doctors[4]],
    lat: 40.7108,
    lng: -74.002,
    phone: '+1 (555) 345-6789',
    emergencyAvailable: false,
  },
  {
    id: '4',
    name: 'Metro Health Center',
    address: '321 Medical Lane, Uptown',
    distance: 2.8,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop',
    specialties: ['Cardiology', 'Oncology', 'Surgery'],
    doctors: [doctors[1], doctors[2], doctors[3]],
    lat: 40.7168,
    lng: -74.012,
    phone: '+1 (555) 456-7890',
    emergencyAvailable: true,
  },
];

export const timeSlots: TimeSlot[] = [
  { id: '1', time: '9:00 AM', available: true },
  { id: '2', time: '9:30 AM', available: false },
  { id: '3', time: '10:00 AM', available: true },
  { id: '4', time: '10:30 AM', available: true },
  { id: '5', time: '11:00 AM', available: false },
  { id: '6', time: '11:30 AM', available: true },
  { id: '7', time: '2:00 PM', available: true },
  { id: '8', time: '2:30 PM', available: true },
  { id: '9', time: '3:00 PM', available: false },
  { id: '10', time: '3:30 PM', available: true },
  { id: '11', time: '4:00 PM', available: true },
  { id: '12', time: '4:30 PM', available: true },
];

export const userAppointments: Appointment[] = [
  {
    id: '1',
    hospitalName: 'City General Hospital',
    doctorName: 'Dr. Sarah Johnson',
    doctorSpecialty: 'Cardiologist',
    date: '2024-01-25',
    time: '10:00 AM',
    status: 'upcoming',
  },
  {
    id: '2',
    hospitalName: 'Wellness Medical Center',
    doctorName: 'Dr. Lisa Park',
    doctorSpecialty: 'Dermatologist',
    date: '2024-01-28',
    time: '2:30 PM',
    status: 'upcoming',
  },
  {
    id: '3',
    hospitalName: 'Metro Health Center',
    doctorName: 'Dr. Michael Chen',
    doctorSpecialty: 'Neurologist',
    date: '2024-01-15',
    time: '11:00 AM',
    status: 'completed',
  },
  {
    id: '4',
    hospitalName: 'Community Health Hospital',
    doctorName: 'Dr. Emily Williams',
    doctorSpecialty: 'Pediatrician',
    date: '2024-01-10',
    time: '9:30 AM',
    status: 'cancelled',
  },
];
