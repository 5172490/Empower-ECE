import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/60 via-background to-secondary/10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ontario Developmental Support & Family Navigation
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Your child's diagnosis is{' '}
              <span className="text-primary italic">not</span> the finish line.{' '}
              <span className="text-secondary">It's the starting point.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              If you're paying out of pocket for developmental supports your child 
              needs — there may be Ontario funding programs you haven't accessed yet. 
              SSAH, OAP, and ACSD can change everything.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl">
              EmpowerECE bridges the gap between a clinical diagnosis and a flourishing 
              daily life. We navigate the systems so you can focus on your child.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/booking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/funding">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-primary/30 text-primary hover:bg-accent">
                  Explore Funding Supports
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-heading text-foreground">RECE</p>
                <p className="text-xs text-muted-foreground">Registered ECE</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-heading text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-heading text-foreground">IB/Reggio</p>
                <p className="text-xs text-muted-foreground">Trained</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Parent and child engaged in creative learning activity together"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border"
            >
              <p className="text-sm font-medium text-foreground">Trusted by families across</p>
              <p className="text-lg font-heading text-primary">Ontario, Canada</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
