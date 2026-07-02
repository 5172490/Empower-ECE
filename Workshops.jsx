import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, GraduationCap, CircleDollarSign, Layers, Monitor, Calendar } from 'lucide-react';

const WORKSHOP_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/084478251_generated_b974c1a5.png';

const workshops = [
  {
    icon: Users,
    title: 'Parent Education Workshops',
    description: 'Practical workshops on developmental support strategies, sensory regulation, and daily routine building for families.',
    format: 'In-person or virtual · 90 minutes · Small group',
    audience: 'Parents and caregivers',
  },
  {
    icon: GraduationCap,
    title: 'Educator Training Sessions',
    description: 'Professional development for teachers and ECEs on inclusive practices, IEP collaboration, and classroom adaptations.',
    format: 'In-person or virtual · Half-day or full-day',
    audience: 'Teachers, ECEs, educational assistants',
  },
  {
    icon: CircleDollarSign,
    title: 'Funding Navigation Workshops',
    description: 'Step-by-step guidance through SSAH, OAP, and ACSD applications — what to expect, how to apply, and how to maximize your allocation.',
    format: 'Virtual · 60 minutes · Monthly',
    audience: 'Families new to the funding system',
  },
  {
    icon: Layers,
    title: 'School Inclusion Training',
    description: 'Building capacity for inclusive classrooms — sensory-friendly environments, differentiation strategies, and collaborative IEP development.',
    format: 'In-person · Half-day · School-based',
    audience: 'Schools and childcare centres',
  },
  {
    icon: Monitor,
    title: 'On-Demand Learning',
    description: 'Recorded workshop sessions available anytime — covering daily routines, sensory strategies, and funding basics.',
    format: 'Self-paced · Online access',
    audience: 'All families and educators',
  },
];

export default function Workshops() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Workshops & Training</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Knowledge is the best support strategy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Workshops for parents who want practical tools and professional development 
              for educators building more inclusive environments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <img
              src={WORKSHOP_IMAGE}
              alt="Parents and educators in a collaborative workshop setting"
              className="w-full rounded-2xl shadow-xl object-cover h-64 lg:h-80"
            />
          </div>

          <div className="space-y-6">
            {workshops.map((workshop, i) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <workshop.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-foreground mb-2">{workshop.title}</h3>
                        <p className="text-muted-foreground mb-3">{workshop.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                            {workshop.format}
                          </span>
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {workshop.audience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
                Register for a Workshop
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
