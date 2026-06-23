import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'The Richland Legacy', path: '/services/richland-legacy' },
      { label: 'The Navigator', path: '/services/navigator' },
      { label: 'The Art of Routine', path: '/services/art-of-routine' },
    ],
  },
  { label: 'Funding Navigator', path: '/funding' },
  { label: 'School Readiness', path: '/school-readiness' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Resources', path: '/resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading text-lg">E</span>
            </div>
            <span className="font-heading text-xl text-foreground">
              Empower<span className="text-primary">ECE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-primary bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.path} asChild>
                        <Link to={child.path} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/booking" className="hidden lg:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Book a Consultation
              </Button>
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-heading text-lg">E</span>
                      </div>
                      <span className="font-heading text-xl text-foreground">
                        Empower<span className="text-primary">ECE</span>
                      </span>
                    </Link>
                  </div>
                  <nav className="flex-1 p-6 space-y-1">
                    {navLinks.map((link) => (
                      <React.Fragment key={link.label}>
                        <Link
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            isActive(link.path)
                              ? 'text-primary bg-accent'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          {link.label}
                        </Link>
                        {link.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </React.Fragment>
                    ))}
                  </nav>
                  <div className="p-6 border-t border-border">
                    <Link to="/booking" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Book a Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
