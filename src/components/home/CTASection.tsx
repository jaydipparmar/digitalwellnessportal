import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-white"/>
          </svg>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of patients who trust Digital Wellness for their healthcare needs. 
            Find the best doctors and hospitals near you today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => navigate('/hospitals')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Hospitals Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-secondary-foreground/20">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Verified Doctors</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
