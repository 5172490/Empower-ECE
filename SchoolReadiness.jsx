import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BookOpen, MessageCircle, Brain, Heart, Users } from 'lucide-react';

const LEARNING_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/563709537_generated_212a489b.png';

const programs = [
  {
    icon: Brain,
    title: 'Sensory Regulation Preparation',
    description: 'Building self-regulation skills through sensory strategies tailored to the classroom environment.',
    details: ['Identifying sensory triggers and calming strategies', 'Practising transition routines', 'Building body awareness and self-advocacy'],
  },
  {
    icon: MessageCircle,
    title: 'Communication Readiness',
    description: 'Strengthening functional communication for the classroom — requests, social language, and self-expression.',
    details: ['Visual communication supports', 'Social story development', 'Peer interaction practice'],
  },
  {
    icon: BookOpen,
    title: 'Transition-to-School Planning',
    description: 'A comprehensive plan connecting your family, the school, and any therapists into one coordinated transition.',
    details: ['IEP preparation support', 'Teacher communication frameworks', 'IPRC advocacy guidance'],
  },
  {
    icon: Users,
    title: 'Parent-Child Readiness Sessions',
    description: 'Joint sessions where parents learn strategies alongside their child — building shared language and confidence.',
    details: ['Morning routine rehearsals', 'School-day visual supports', 'Homework and after-school strategies'],
  },
];

export default function SchoolReadiness() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">School Readiness</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Confident transitions for{' '}
              <span className="text-primary">every learner</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              School readiness isn't one-size-fits-all. For neurodivergent children, 
              preparation means building sensory regulation, communication confidence, 
              and a support system that the school understands.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={LEARNING_IMAGE}
                alt="Inclusive learning space with sensory-friendly design"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-foreground mb-6">
                More than academics
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Traditional school readiness focuses on letters and numbers. For many 
                neurodivergent children, the real challenges are sensory overwhelm, 
                transitions, communication, and self-regulation. Our programs address all of it.
              </p>
              <div className="space-y-3">
                {['Neurodivergent-affirming approach', 'Collaborative planning with receiving school',
                  'IEP and IPRC preparation support', 'Sensory profile assessment for classroom needs',
                  'May be funded through OAP and SSAH'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <program.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">Prepare with confidence</h2>
          <p className="text-muted-foreground mb-8">
            Let's build a school readiness plan that's tailored to your child.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Start Your Transition Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
