import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight, Compass, GraduationCap, Palette, BookOpen,
  Users, Lightbulb, Monitor, Wrench
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Compass,
    title: 'Family Navigation Services',
    description: 'We guide families through Ontario\'s complex landscape of developmental services, funding programs, school supports, and community resources.',
    who: 'Families newly navigating a diagnosis or struggling with service coordination.',
    outcomes: 'Clear action plan, connected supports, reduced administrative burden.',
    funding: 'May be supported through SSAH funding as "system navigation and family support."',
    link: '/services/navigator',
  },
  {
    icon: GraduationCap,
    title: 'Developmental Planning & Support Strategies',
    description: 'Individualized developmental plans rooted in inquiry-based learning and evidence-based philosophy, adapted for children with diverse needs.',
    who: 'Children aged 2–12 with developmental delays, ASD, ADHD, or learning differences.',
    outcomes: 'Personalized developmental goals, inquiry-based strategies, measurable progress.',
    funding: 'Aligns with OAP core clinical services and SSAH developmental support funding.',
    link: '/services/developmental-planning',
  },
  {
    icon: BookOpen,
    title: 'School Readiness Programs',
    description: 'Comprehensive preparation for school transitions including sensory regulation, communication readiness, and social skills development.',
    who: 'Families preparing neurodivergent children for school entry or transitions.',
    outcomes: 'Confident school entry, teacher-supported IEP planning, reduced transition anxiety.',
    funding: 'School readiness programming may be supported under OAP and SSAH.',
    link: '/school-readiness',
  },
  {
    icon: Users,
    title: 'Parent Coaching & Caregiver Education',
    description: 'Empowering parents with practical strategies, advocacy skills, and confidence to support their child\'s development at home.',
    who: 'Parents and caregivers who want hands-on tools and deeper understanding.',
    outcomes: 'Increased caregiver confidence, practical daily strategies, stronger advocacy.',
    funding: 'Caregiver education is recognized under SSAH and OAP funding frameworks.',
    link: '/booking',
  },
  {
    icon: Palette,
    title: 'Inclusive Learning & Sensory Programs',
    description: 'Sensory-based learning experiences designed to build regulation skills through art, play, and creative exploration.',
    who: 'Children with sensory processing differences, regulation challenges, or creative learning styles.',
    outcomes: 'Improved self-regulation, sensory awareness, and engagement through creative modalities.',
    funding: 'Sensory materials and programs may qualify as "supplies" under SSAH.',
    link: '/services/art-of-routine',
  },
  {
    icon: Wrench,
    title: 'School Consulting & Inclusion Support',
    description: 'Working alongside schools and educators to build inclusive environments, support IEP development, and strengthen classroom strategies.',
    who: 'Schools, daycares, and educators supporting children with diverse learning needs.',
    outcomes: 'Stronger inclusion practices, teacher confidence, aligned home-school strategies.',
    funding: 'May be funded through municipal inclusion grants and school board partnerships.',
    link: '/booking',
  },
  {
    icon: Lightbulb,
    title: 'Workshop & Training Programs',
    description: 'Professional development for educators and empowerment workshops for parents — from funding navigation to sensory strategies.',
    who: 'Educators seeking PD, parents wanting community learning, organizations building capacity.',
    outcomes: 'Practical tools, community connection, professional growth.',
    funding: 'Workshop fees may be covered under professional development funding.',
    link: '/workshops',
  },
  {
    icon: Monitor,
    title: 'Digital Resources & Toolkits',
    description: 'Beautifully designed printable resources including visual schedules, sensory kits, school readiness checklists, and funding guides.',
    who: 'Families wanting ready-to-use tools for daily routines and developmental support.',
    outcomes: 'Immediate practical support, organized routines, reduced overwhelm.',
    funding: 'Printed resources and supplies may be eligible under SSAH "supplies" category.',
    link: '/resources',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              A full spectrum of developmental support
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From system navigation to sensory programs, every service is designed to 
              reduce your stress and increase your child's opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                        
                        <div className="grid sm:grid-cols-3 gap-4 mb-4">
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Who It's For</p>
                            <p className="text-sm text-muted-foreground">{service.who}</p>
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Outcomes</p>
                            <p className="text-sm text-muted-foreground">{service.outcomes}</p>
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Funding</p>
                            <p className="text-sm text-muted-foreground">{service.funding}</p>
                          </div>
                        </div>

                        <Link to={service.link}>
                          <Button variant="outline" className="border-primary/30 text-primary hover:bg-accent">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-8">
            Book a free consultation and we'll help you identify the right services 
            and funding pathways for your family.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
