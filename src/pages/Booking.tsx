import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { hospitals, timeSlots } from '@/data/mockData';

const Booking = () => {
  const { hospitalId, doctorId } = useParams();
  const navigate = useNavigate();
  
  const hospital = hospitals.find((h) => h.id === hospitalId);
  const doctor = hospital?.doctors.find((d) => d.id === doctorId);

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: '',
  });

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  if (!hospital || !doctor) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-secondary mb-4">
              Booking information not found
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
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary">
              Book Appointment
            </h1>
          </div>

          {/* Progress Steps */}
          {step < 4 && (
            <div className="flex items-center justify-between mb-8">
              {['Select Date', 'Select Time', 'Your Details'].map((label, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className={`flex items-center gap-2 ${index + 1 <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index + 1 < step ? 'bg-primary text-primary-foreground' :
                      index + 1 === step ? 'bg-primary text-primary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1 < step ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{label}</span>
                  </div>
                  {index < 2 && (
                    <div className={`flex-1 h-0.5 mx-4 ${index + 1 < step ? 'bg-primary' : 'bg-muted'}`}></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Doctor Info Card */}
          <div className="wellness-card mb-8">
            <div className="flex items-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-secondary">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium text-sm">{doctor.specialty}</p>
                <p className="text-muted-foreground text-sm">{hospital.name}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-secondary">${doctor.consultationFee}</div>
                <div className="text-xs text-muted-foreground">Consultation Fee</div>
              </div>
            </div>
          </div>

          {/* Step 1: Select Date */}
          {step === 1 && (
            <div className="wellness-card animate-fade-in">
              <h2 className="font-display text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Select Appointment Date
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-1">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-2xl font-bold text-secondary">
                      {date.getDate()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {date.toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button 
                  variant="accent" 
                  size="lg" 
                  disabled={!selectedDate}
                  onClick={() => setStep(2)}
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Time */}
          {step === 2 && (
            <div className="wellness-card animate-fade-in">
              <h2 className="font-display text-xl font-semibold text-secondary mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Select Time Slot
              </h2>
              <p className="text-muted-foreground mb-6">
                {selectedDate && formatDate(selectedDate)}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                      !slot.available
                        ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                        : selectedTime === slot.time
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button 
                  variant="accent" 
                  size="lg" 
                  disabled={!selectedTime}
                  onClick={() => setStep(3)}
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Your Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="wellness-card animate-fade-in">
              <h2 className="font-display text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Your Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="input-wellness w-full pl-12"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-wellness w-full pl-12"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-wellness w-full pl-12"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Reason for Visit
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="input-wellness w-full min-h-[100px] resize-none"
                    placeholder="Briefly describe your symptoms or reason for appointment..."
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button type="submit" variant="accent" size="lg">
                  Confirm Booking
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="wellness-card text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-secondary mb-2">
                Appointment Confirmed!
              </h2>
              <p className="text-muted-foreground mb-6">
                Your appointment has been successfully booked. You will receive a confirmation email shortly.
              </p>
              
              <div className="bg-muted rounded-xl p-6 text-left mb-6">
                <h3 className="font-semibold text-foreground mb-4">Appointment Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Doctor</span>
                    <span className="font-medium">{doctor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hospital</span>
                    <span className="font-medium">{hospital.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{selectedDate && formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="text-muted-foreground">Consultation Fee</span>
                    <span className="font-bold text-primary">${doctor.consultationFee}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="accent" onClick={() => navigate('/dashboard')}>
                  View My Appointments
                </Button>
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
