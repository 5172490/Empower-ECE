import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleDollarSign, FileCheck, ShieldCheck, Building, ArrowDown } from 'lucide-react';
import FundingQuiz from '../components/funding/FundingQuiz';
import SupportCalculator from '../components/funding/SupportCalculator';

const programs = [
  {
    icon: FileCheck,
    name: 'Ontario Autism Program (OAP)',
    description: 'A needs-based program providing funding for autism services, including behavioural support, speech-language pathology, occupational therapy, and family training.',
    eligibility: 'Children and youth with an ASD diagnosis from a qualified professional.',
    supports: 'Core clinical services, caregiver-mediated supports, entry-to-school programs, foundational family services.',
  },
  {
    icon: CircleDollarSign,
    name: 'Special Services at Home (SSAH)',
    description: 'Direct funding to help families purchase services and supports for children with developmental or physical disabilities.',
    eligibility: 'Children with a developmental disability under 18, living at home.',
    supports: 'Respite care, developmental support workers, supplies and materials, family navigation services.',
  },
  {
    icon: ShieldCheck,
    name: 'Assistance for Children with Severe Disabilities (ACSD)',
    description: 'Additional financial assistance for families of children with severe disabilities, covering extraordinary costs related to the child\'s care.',
    eligibility: 'Children with severe disabilities requiring significant support beyond typical care.',
    supports: 'Additional funding for clothing, transportation, dietary needs, and other disability-related expenses.',
  },
  {
    icon: Building,
    name: 'EarlyON & Community Programs',
    description: 'Free programs and services for families with young children, including inclusive programming and developmental screening.',
    eligibility: 'Families with children from birth to 6 years of age.',
    supports: 'Drop-in programs, parenting workshops, developmental screening, community referrals.',
  },
];

export default function Funding() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Funding Navigator</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Ontario funding exists for your family.{' '}
              <span className="text-primary">Let us help you access it.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Thousands of Ontario families are paying out of pocket for supports that could be 
              funded through provincial programs. The paperwork is complex — but we make it simple.
            </p>
            <a href="#calculator">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
                Check Your Eligibility
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Programs We Navigate</p>
            <h2 className="font-heading text-3xl text-foreground">Understanding your funding options</h2>
          </div>

          <div className="space-y-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="flex items-start gap-5">
                  <program.icon className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">{program.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Eligibility</p>
                        <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Supports Covered</p>
                        <p className="text-sm text-muted-foreground">{program.supports}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Flowchart */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Pathway</p>
            <h2 className="font-heading text-3xl text-foreground">How families access funding</h2>
          </div>

          <div className="space-y-4">
            {[
              { step: '1', title: 'Diagnosis or Assessment', desc: 'A healthcare professional provides a formal diagnosis or developmental assessment.' },
              { step: '2', title: 'Program Identification', desc: 'We identify which funding programs match your child\'s diagnosis and needs.' },
              { step: '3', title: 'Application Support', desc: 'We help you complete and submit applications with all required documentation.' },
              { step: '4', title: 'Approval & Allocation', desc: 'Once approved, funding is allocated based on your child\'s assessed needs.' },
              { step: '5', title: 'Service Delivery', desc: 'Use your funding to access developmental supports — including EmpowerECE services.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 items-start bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-heading text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Calculator */}
      <section id="calculator" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Free Tool</p>
            <h2 className="font-heading text-3xl text-foreground mb-4">Support Program Calculator</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Enter your child's age and areas of need to instantly see which Ontario 
              funding programs may be available to your family.
            </p>
          </div>
          <SupportCalculator />
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Free Tool</p>
            <h2 className="font-heading text-3xl text-foreground mb-4">Funding Eligibility Quiz</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Answer 5 quick questions and we'll identify which Ontario funding programs 
              may support your family.
            </p>
          </div>
          <FundingQuiz />
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Ready to claim your funding?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team will review your eligibility and walk you through every step.
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
