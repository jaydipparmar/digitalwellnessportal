import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Emergency Notice */}
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-accent-foreground">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">For emergencies, call 911 immediately</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">+</span>
              </div>
              <span className="font-display font-bold text-xl">Digital Wellness</span>
            </div>
            <p className="text-secondary-foreground/70 mb-4">
              Your trusted partner in finding quality healthcare. Connect with top hospitals and doctors near you.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/hospitals" className="text-secondary-foreground/70 hover:text-accent transition-colors">Find Hospitals</Link></li>
              <li><Link to="/dashboard" className="text-secondary-foreground/70 hover:text-accent transition-colors">My Appointments</Link></li>
              <li><Link to="/login" className="text-secondary-foreground/70 hover:text-accent transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-secondary-foreground/70 hover:text-accent transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-secondary-foreground/70">Hospital Search</span></li>
              <li><span className="text-secondary-foreground/70">Doctor Appointments</span></li>
              <li><span className="text-secondary-foreground/70">Online Consultation</span></li>
              <li><span className="text-secondary-foreground/70">Health Records</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-accent" />
                +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-accent" />
                support@digitalwellness.com
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                123 Healthcare Ave, Medical District, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © 2024 Digital Wellness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary-foreground/50 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-secondary-foreground/50 hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
