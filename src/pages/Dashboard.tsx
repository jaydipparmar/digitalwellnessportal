import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Settings, LogOut, ChevronRight, X, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { userAppointments, Appointment } from '@/data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const filteredAppointments = userAppointments.filter(
    (apt) => apt.status === activeTab
  );

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-primary/10 text-primary';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="wellness-card mb-6">
                {/* User Profile */}
                <div className="text-center pb-6 border-b border-border">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-secondary">
                    John Doe
                  </h2>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>

                {/* Navigation */}
                <nav className="pt-6 space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary/10 text-primary">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">My Appointments</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <User className="w-5 h-5" />
                    <span>Profile Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Settings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </button>
                  <button 
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="wellness-card">
                <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Appointments</span>
                    <span className="font-semibold text-foreground">{userAppointments.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Upcoming</span>
                    <span className="font-semibold text-primary">
                      {userAppointments.filter(a => a.status === 'upcoming').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-semibold text-emerald-600">
                      {userAppointments.filter(a => a.status === 'completed').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary">
                  My Appointments
                </h1>
                <Button variant="accent" onClick={() => navigate('/hospitals')}>
                  Book New Appointment
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto">
                {(['upcoming', 'completed', 'cancelled'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl font-medium capitalize transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {tab}
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {userAppointments.filter(a => a.status === tab).length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Appointments List */}
              {filteredAppointments.length > 0 ? (
                <div className="space-y-4">
                  {filteredAppointments.map((appointment) => (
                    <div 
                      key={appointment.id}
                      className="wellness-card cursor-pointer hover:shadow-wellness-lg"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-secondary mb-1">
                              {appointment.doctorName}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-1">
                              {appointment.doctorSpecialty}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {appointment.hospitalName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(appointment.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {appointment.time}
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="wellness-card text-center py-12">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-secondary mb-2">
                    No {activeTab} appointments
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {activeTab === 'upcoming' 
                      ? "You don't have any upcoming appointments."
                      : `You don't have any ${activeTab} appointments.`
                    }
                  </p>
                  {activeTab === 'upcoming' && (
                    <Button variant="accent" onClick={() => navigate('/hospitals')}>
                      Book an Appointment
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="wellness-card max-w-md w-full animate-fade-in relative">
            <button
              onClick={() => setSelectedAppointment(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="font-display text-xl font-semibold text-secondary mb-6">
              Appointment Details
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Doctor</span>
                <span className="font-medium">{selectedAppointment.doctorName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Specialty</span>
                <span className="font-medium">{selectedAppointment.doctorSpecialty}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Hospital</span>
                <span className="font-medium">{selectedAppointment.hospitalName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">
                  {new Date(selectedAppointment.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium">{selectedAppointment.time}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(selectedAppointment.status)}`}>
                  {selectedAppointment.status}
                </span>
              </div>
            </div>

            {selectedAppointment.status === 'upcoming' && (
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Reschedule
                </Button>
                <Button variant="destructive" className="flex-1">
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
