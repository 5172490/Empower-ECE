import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await base44.entities.LeadCapture.create({
      email,
      source: 'homepage_guide',
    });
    setEmail('');
    setLoading(false);
    toast.success('Your free guide is on the way! Check your inbox.');
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Download className="w-10 h-10 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-4">
            Free Guide: Ontario Funding for Families
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Download our plain-language guide to SSAH, OAP, and ACSD funding — 
            including eligibility requirements, application steps, and what supports 
            you can claim.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-6 whitespace-nowrap"
            >
              {loading ? 'Sending...' : 'Get Free Guide'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/funding">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12">
                Claim Your Funding
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
