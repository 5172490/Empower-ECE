import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Palette, Eye, Sunrise, Layout } from 'lucide-react';

const VISUAL_SCHEDULE_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/653bc2341_generated_5f0ec15f.png';

const products = [
  { icon: Sunrise, title: 'Morning & Evening Routines', description: 'Custom visual sequence cards designed around your child\'s specific daily rhythms and needs.' },
  { icon: Layout, title: 'Activity Transition Boards', description: 'Beautifully illustrated boards that support smooth transitions between activities — reducing meltdowns and anxiety.' },
  { icon: Eye, title: 'Sensory Regulation Toolkits', description: 'Visual cue systems for identifying emotions, sensory states, and self-regulation strategies.' },
  { icon: Palette, title: 'Bespoke Visual Environments', description: 'Room layout and environmental design recommendations that support sensory needs while looking beautiful.' },
];

export default function ArtOfRoutine() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-secondary-foreground" />
            </div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Art of Routine</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Functional support that feels like{' '}
              <span className="text-primary italic">art</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging a Visual Arts background from York University, we create bespoke, 
              aesthetically pleasing visual systems that support your child — 
              without making your home look like a clinic.
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={VISUAL_SCHEDULE_IMAGE}
                  alt="Beautifully designed visual schedule board with daily routine cards in calming colours"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Approach</p>
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Where visual arts meets developmental support
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Most visual supports for children with special needs look clinical, generic, 
                or frankly unappealing. They work against the calming, organized environment 
                your child needs.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Art of Routine takes a completely different approach. Each visual system 
                is custom-designed with your child's sensory profile, your home's aesthetic, 
                and evidence-based developmental principles in mind.
              </p>
              <div className="space-y-3">
                {['Custom colour palettes matched to your child\'s sensory preferences',
                  'Clean, minimal design that reduces visual overwhelm',
                  'Durable, beautiful materials you\'ll want on display',
                  'Funded as "supplies" under SSAH programming'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <product.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Design your child's daily success
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a consultation to discuss a custom visual support system for your family.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Start Your Custom Design
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
