import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'IB Inquiry and Reggio Emilia trained — not generic daycare strategies',
  'Deep experience navigating Ontario developmental services systems',
  'Registered Early Childhood Educator (RECE) with Resource Consultant credentials',
  'Combines a Visual Arts background with functional developmental planning',
  'Zero-friction billing support for SSAH and AccessOAP funding',
  'Collaborative approach connecting families, schools, and therapists',
];

export default function WhySection({ image }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt="Calming, organized learning space with sensory-friendly design elements"
                className="w-full h-auto object-cover aspect-4/3"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Why EmpowerECE
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              Not a basic support worker.{' '}
              <span className="text-primary">A strategic advisor.</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              EmpowerECE was founded by an educator with leadership experience at 
              Richland Academy (a private IB/Reggio school) and Community Living Huronia 
              (a special needs systems navigator). This combination is rare — and powerful.
            </p>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{reason}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
