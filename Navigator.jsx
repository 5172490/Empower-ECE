import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, FileCheck, CircleDollarSign, ShieldCheck, Clock, Heart } from 'lucide-react';

const steps = [
  { step: '01', title: 'Initial Assessment', description: 'We review your family\'s situation, current supports, and identify funding opportunities you may be missing.' },
  { step: '02', title: 'Funding Mapping', description: 'We match your child\'s needs with SSAH, OAP, ACSD, and other applicable Ontario programs.' },
  { step: '03', title: 'Application Support', description: 'We guide you through the paperwork, documentation, and submission process — step by step.' },
  { step: '04', title: 'Zero-Friction Billing', description: 'Once approved, we structure our services to bill directly through your funding allocation — reducing out-of-pocket costs.' },
  { step: '05', title: 'Ongoing Coordination', description: 'We continue navigating the system alongside you — renewals, reviews, and connecting with new services as needed.' },
];

const benefits = [
  { icon: CircleDollarSign, title: 'Reduce Out-of-Pocket', description: 'Many families are paying for services that could be funded. We find the right pathway.' },
  { icon: Clock, title: 'Save Time', description: 'Stop spending weekends on paperwork. We handle the administrative complexity.' },
  { icon: Heart, title: 'Reduce Stress', description: 'Focus on your child while we manage the systems that support them.' },
  { icon: ShieldCheck, title: 'Maximize Funding', description: 'Ensure you\'re accessing every dollar your family is entitled to.' },
];

export default function Navigator() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Navigator</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Zero-friction funding navigation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontario has funding programs designed for your family. The paperwork 
              shouldn't stand between your child and the support they need. 
              We navigate the system so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Process</p>
              <h2 className="font-heading text-3xl text-foreground">How we navigate together</h2>
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-heading text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Funding Programs */}
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="font-heading text-2xl text-foreground mb-6 text-center">
              Funding Programs We Navigate
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <CircleDollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading text-xl text-foreground mb-2">SSAH</h3>
                <p className="text-sm text-muted-foreground">Special Services at Home — funding for respite, developmental support, and family navigation services.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <FileCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading text-xl text-foreground mb-2">OAP</h3>
                <p className="text-sm text-muted-foreground">Ontario Autism Program — comprehensive funding for autism services including clinical supervision and family support.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading text-xl text-foreground mb-2">ACSD</h3>
                <p className="text-sm text-muted-foreground">Assistance for Children with Severe Disabilities — additional financial support beyond SSAH for eligible families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Stop the paperwork fatigue
          </h2>
          <p className="text-muted-foreground mb-8">
            Let us handle the administrative complexity while you focus on what matters most.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Claim Your Funding
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
