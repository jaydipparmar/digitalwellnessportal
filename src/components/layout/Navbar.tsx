import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Hospitals', path: '/hospitals' },
    { name: 'My Appointments', path: '/dashboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 wellness-gradient shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">+</span>
            </div>
            <span className="text-primary-foreground font-display font-bold text-xl hidden sm:block">
              Digital Wellness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  isActive(link.path) ? 'text-primary-foreground' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="accent" size="sm">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link py-2 ${
                    isActive(link.path) ? 'text-primary-foreground' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-primary-foreground/20">
                <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="accent" className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
