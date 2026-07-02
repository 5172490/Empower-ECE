import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, GraduationCap, Search, Lightbulb, Star, Brain, MessageSquare, Hand, Activity, HeartPulse, Users } from 'lucide-react';

const approaches = [
  {
    icon: Search,
    title: 'Inquiry-Based Learning',
    description: 'We use the child\'s natural curiosity as the starting point — building developmental strategies around their genuine interests and questions.',
  },
  {
    icon: Lightbulb,
    title: 'Reggio Emilia Philosophy',
    description: 'The child as a competent learner. We create environments and provocations that honour each child\'s unique way of making sense of the world.',
  },
  {
    icon: Star,
    title: 'IB Framework Adaptation',
    description: 'International Baccalaureate approaches to learning — adapted for developmental support, focusing on critical thinking, self-management, and communication.',
  },
];

const therapyTeam = [
  {
    icon: Brain,
    title: 'Occupational Therapist (OT)',
    description: 'We coordinate with OTs to align sensory regulation, fine motor, and daily living strategies across home and school settings.',
  },
  {
    icon: MessageSquare,
    title: 'Speech-Language Pathologist (SLP)',
    description: 'SLP goals are integrated into daily activities and learning experiences to support communication and language development.',
  },
  {
    icon: Hand,
    title: 'Physiotherapist (PT)',
    description: 'Where gross motor and physical development goals are identified, we coordinate with PTs to reinforce movement strategies.',
  },
  {
    icon: HeartPulse,
    title: 'Behaviour Therapist / ABA',
    description: 'Collaborative alignment with behaviour therapy programs ensures consistent reinforcement of skills across all environments.',
  },
  {
    icon: Activity,
    title: 'Developmental Paediatrician',
    description: 'We work alongside medical teams to ensure developmental plans reflect clinical recommendations and assessment outcomes.',
  },
  {
    icon: Users,
    title: 'Educators & School Teams',
    description: 'Direct collaboration with classroom teachers, EAs, and school resource staff to ensure strategies are applied consistently.',
  },
];

const outcomes = [
  'Developmental plans built on the child\'s strengths and interests',
  'Strategies that transfer across home, school, and therapy settings',
  'Documentation methods that track meaningful progress (not just compliance)',
  'Environmental design recommendations for homes and classrooms',
  'Coordination frameworks for working with SLPs, OTs, PTs, and educators',
  'Progress reporting aligned with IEP and IPRC requirements',
];

export default function DevelopmentalPlanning() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Developmental Planning & Support</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
               Reggio Emilia & IB approaches.{' '}
               <span className="text-primary">For every child.</span>
             </h1>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               We apply evidence-based educational frameworks like Reggio Emilia and International
               Baccalaureate inquiry approaches to developmental support — because every child deserves
               a world-class, research-informed approach.
             </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {approaches.map((approach, i) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <approach.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">{approach.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Therapy Coordination */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Multidisciplinary Coordination</p>
              <h2 className="font-heading text-3xl text-foreground mb-3">Working alongside your therapy team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Developmental progress happens when everyone works together. We coordinate directly with
                your child's existing clinicians so strategies are consistent, reinforced, and aligned at every stage.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {therapyTeam.map((member, i) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-accent/40 rounded-xl p-5 border border-border"
                >
                  <member.icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-heading text-lg text-foreground mb-1">{member.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">What You Get</p>
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Outcomes that matter
              </h2>
              <div className="space-y-4">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="font-heading text-2xl text-foreground mb-4">
                A Different Approach
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Most developmental support workers follow a generic, compliance-oriented model.
                This service is different because it applies proven educational frameworks —
                Reggio Emilia and International Baccalaureate — to create meaningful developmental support.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We don't just work on isolated skills. We design rich, inquiry-driven learning
                experiences that develop the whole child — cognitively, socially, emotionally,
                and creatively.
              </p>
              <p className="text-sm text-muted-foreground italic">
                This service may be funded through OAP core clinical services and SSAH
                developmental support allocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Ready for a different approach?
          </h2>
          <p className="text-muted-foreground mb-8">
            Schedule a consultation to discuss how this approach
            can support your child's developmental journey.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Book a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
