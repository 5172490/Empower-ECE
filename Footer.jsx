import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Family Navigation', path: '/services' },
    { label: 'The Richland Legacy', path: '/services/richland-legacy' },
    { label: 'The Navigator', path: '/services/navigator' },
    { label: 'The Art of Routine', path: '/services/art-of-routine' },
    { label: 'School Readiness', path: '/school-readiness' },
  ],
  Resources: [
    { label: 'Funding Navigator', path: '/funding' },
    { label: 'Workshops & Training', path: '/workshops' },
    { label: 'Digital Resources', path: '/resources' },
    { label: 'Book a Consultation', path: '/booking' },
  ],
  About: [
    { label: 'Our Story', path: '/about' },
    { label: 'Our Approach', path: '/about' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Accessibility', path: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-lg">E</span>
              </div>
              <span className="font-heading text-xl">
                Empower<span className="text-primary">ECE</span>
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Empowering Ontario families through developmental journeys with clarity, 
              compassion, and expert navigation.
            </p>
            <div className="space-y-3 text-sm opacity-70">
              <a href="mailto:hello@empowerece.ca" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" />
                hello@empowerece.ca
              </a>
              <a href="tel:+12895551234" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" />
                (289) 555-1234
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Ontario, Canada
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-heading text-lg mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credentials & Compliance */}
        <div className="border-t border-background/10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-2">
                Credentials & Designations
              </p>
              <p className="text-sm opacity-70 leading-relaxed">
                Registered Early Childhood Educator (RECE) · College of ECE Ontario · 
                Resource Consultant · B.A. Visual Arts (York University) · 
                ECE Diploma (Sheridan College) · Resource Consultation Certificate (Seneca College)
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-2">
                Compliance & Accessibility
              </p>
              <p className="text-sm opacity-70 leading-relaxed">
                EmpowerECE is committed to accessibility under the Accessibility for Ontarians 
                with Disabilities Act (AODA). This website is designed to meet WCAG 2.1 Level AA standards. 
                We are not a clinical medical provider. All services are developmental and educational in nature.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} EmpowerECE. All rights reserved.
          </p>
          <p className="text-xs opacity-50">
            Developmental Support · Family Navigation · Inclusive Education
          </p>
        </div>
      </div>
    </footer>
  );
}
