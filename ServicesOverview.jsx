import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, GraduationCap, Palette, BookOpen, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Compass,
    title: 'Family Navigation',
    description: 'Expert guidance through Ontario\'s developmental support systems, funding applications, and service coordination.',
    link: '/services/navigator',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: GraduationCap,
    title: 'Developmental Planning',
    description: 'IB Inquiry and Reggio Emilia-inspired developmental strategies adapted for children with diverse learning needs.',
    link: '/services/richland-legacy',
    color: 'bg-secondary/20 text-secondary-foreground',
  },
  {
    icon: Palette,
    title: 'The Art of Routine',
    description: 'Bespoke visual systems and daily routines that are beautiful, functional, and designed for your child\'s unique needs.',
    link: '/services/art-of-routine',
    color: 'bg-accent text-accent-foreground',
  },
  {
    icon: BookOpen,
    title: 'School Readiness',
    description: 'Comprehensive programs preparing neurodivergent children for confident, supported school transitions.',
    link: '/school-readiness',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Users,
    title: 'Parent Coaching',
    description: 'One-on-one caregiver education to build confidence, strategies, and advocacy skills for your family.',
    link: '/services',
    color: 'bg-secondary/20 text-secondary-foreground',
  },
  {
    icon: Lightbulb,
    title: 'Workshops & Training',
    description: 'Professional development for educators and empowerment workshops for parents and caregivers.',
    link: '/workshops',
    color: 'bg-accent text-accent-foreground',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            A comprehensive system of support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From navigating government funding to creating a calming home environment, 
            EmpowerECE provides the full spectrum of developmental support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.link}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
