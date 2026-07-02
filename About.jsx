import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Heart, BookOpen, Users, Award } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Family-Centred', description: 'Every plan starts with your family\'s unique story, strengths, and goals.' },
  { icon: BookOpen, title: 'Inquiry-Based', description: 'Grounded in IB and Reggio Emilia philosophy — honouring how each child learns.' },
  { icon: Users, title: 'Collaborative', description: 'We connect families, schools, therapists, and agencies into one coherent system.' },
  { icon: Award, title: 'Accessible', description: 'We believe high-quality developmental support should be available to every family.' },
];

const timeline = [
  { year: 'York University', desc: 'B.A. in Visual Arts — developing the creative lens that informs our visual support systems.' },
  { year: 'Sheridan College', desc: 'Early Childhood Education diploma — building the foundation of child development expertise.' },
  { year: 'Seneca College', desc: 'Resource Consultation certificate — specializing in inclusive education and developmental support.' },
  { year: 'IB / Reggio Emilia School', desc: 'Leadership in a private IB/Reggio Emilia school — learning world-class inquiry-based strategies.' },
  { year: 'Community Living Huronia', desc: 'Navigating the special needs system — understanding how to connect families with critical resources.' },
  { year: 'EmpowerECE', desc: 'Combining all of this experience into a single, integrated family support system for Ontario.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Our Story</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Where education, art, and advocacy meet
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              EmpowerECE was born from a simple observation: the families who need the most 
              support are often the ones most overwhelmed by the systems meant to help them. 
              We exist to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Journey */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Journey</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
              Built on a foundation of real experience
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Our founder holds credentials in Visual Arts, Early Childhood Education, and 
              Resource Consultation — a rare combination that defines our approach.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 sm:pl-12 relative"
                >
                  <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden sm:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1">{item.year}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground">
              What guides our work
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted rounded-2xl p-8 mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Important note:</strong> EmpowerECE is not a clinical medical provider. 
              We provide developmental support, family navigation, caregiver education, and 
              inclusive education consulting. We collaborate closely with clinical professionals 
              including SLPs, OTs, and behavioural specialists to ensure coordinated care.
            </p>
          </div>

          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
