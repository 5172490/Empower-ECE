import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleDollarSign, FileCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const fundingPrograms = [
  { icon: CircleDollarSign, name: 'SSAH', full: 'Special Services at Home', description: 'Respite and developmental support funding' },
  { icon: FileCheck, name: 'OAP', full: 'Ontario Autism Program', description: 'Comprehensive autism services funding' },
  { icon: ShieldCheck, name: 'ACSD', full: 'Assistance for Children with Severe Disabilities', description: 'Additional financial support for families' },
];

export default function FundingBanner() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Stop the Paperwork Fatigue
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Ontario families leave thousands of dollars on the table every year
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Government funding programs exist specifically to support your child's development. 
            Most families don't know they qualify — or feel overwhelmed by the process. 
            We handle the navigation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {fundingPrograms.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <program.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-1">{program.name}</h3>
              <p className="text-sm font-medium text-foreground/80 mb-2">{program.full}</p>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/funding">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Check Your Funding Eligibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
