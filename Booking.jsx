import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Phone, Mail, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const concerns = [
  'Autism Spectrum Differences',
  'ADHD',
  'Speech & Language Delays',
  'Developmental Delays',
  'Sensory Processing',
  'Behavioural & Emotional Regulation',
  'School Readiness',
  'Funding Navigation',
];

export default function Booking() {
  const [form, setForm] = useState({
    parent_name: '',
    email: '',
    phone: '',
    child_name: '',
    child_age: '',
    primary_concerns: [],
    current_supports: '',
    funding_status: '',
    consultation_type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const toggleConcern = (concern) => {
    const current = form.primary_concerns;
    if (current.includes(concern)) {
      handleChange('primary_concerns', current.filter((c) => c !== concern));
    } else {
      handleChange('primary_concerns', [...current, concern]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.parent_name || !form.email) {
      toast.error('Please provide your name and email.');
      return;
    }
    setLoading(true);
    await base44.entities.ConsultationBooking.create(form);

    await base44.integrations.Core.SendEmail({
      to: 'ahelask@gmail.com',
      subject: `New Consultation Request — ${form.parent_name}`,
      body: [
        'A new consultation request has been submitted through the EmpowerECE website.',
        '',
        '--- PARENT / CAREGIVER ---',
        `Name: ${form.parent_name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        '',
        '--- CHILD ---',
        `Name: ${form.child_name || 'Not provided'}`,
        `Age: ${form.child_age || 'Not provided'}`,
        '',
        '--- DETAILS ---',
        `Primary Concerns: ${form.primary_concerns.length ? form.primary_concerns.join(', ') : 'None selected'}`,
        `Current Supports: ${form.current_supports || 'Not provided'}`,
        `Funding Status: ${form.funding_status || 'Not provided'}`,
        `Consultation Type: ${form.consultation_type || 'Not provided'}`,
        '',
        '--- MESSAGE ---',
        form.message || 'No additional message.',
        '',
        '---',
        'Reply to this family within 1–2 business days to schedule their free consultation.',
      ].join('\n'),
    });

    setLoading(false);
    setSubmitted(true);
    toast.success('Consultation request submitted!');
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-3xl text-foreground mb-4">Thank you!</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Your consultation request has been received. We'll reach out within 
            1–2 business days to schedule a time that works for your family.
          </p>
          <p className="text-sm text-muted-foreground">
            In the meantime, explore our{' '}
            <a href="/funding" className="text-primary underline">Funding Navigator</a>{' '}
            to learn about programs that may support your family.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Book a Consultation</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Let's start the conversation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your first consultation is free. Tell us about your family and we'll 
              identify the right supports and funding pathways together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 bg-muted rounded-xl p-4">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">30 Minutes</p>
                <p className="text-xs text-muted-foreground">Free consultation</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl p-4">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Virtual or Phone</p>
                <p className="text-xs text-muted-foreground">Your choice</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl p-4">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Follow-up Plan</p>
                <p className="text-xs text-muted-foreground">Within 48 hours</p>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Info */}
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-4">Your Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input value={form.parent_name} onChange={(e) => handleChange('parent_name', e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Child Info */}
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-4">About Your Child</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Child's First Name</Label>
                      <Input value={form.child_name} onChange={(e) => handleChange('child_name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Child's Age</Label>
                      <Input value={form.child_age} onChange={(e) => handleChange('child_age', e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Concerns */}
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-4">Primary Areas of Concern</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {concerns.map((concern) => (
                      <div key={concern} className="flex items-center space-x-3">
                        <Checkbox
                          checked={form.primary_concerns.includes(concern)}
                          onCheckedChange={() => toggleConcern(concern)}
                        />
                        <Label className="text-sm cursor-pointer">{concern}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funding & Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Current Funding Status</Label>
                    <Select value={form.funding_status} onValueChange={(v) => handleChange('funding_status', v)}>
                      <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="not_applied">Haven't applied yet</SelectItem>
                        <SelectItem value="applied_waiting">Applied, waiting</SelectItem>
                        <SelectItem value="receiving_funding">Currently receiving funding</SelectItem>
                        <SelectItem value="denied">Application denied</SelectItem>
                        <SelectItem value="unsure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Consultation Type</Label>
                    <Select value={form.consultation_type} onValueChange={(v) => handleChange('consultation_type', v)}>
                      <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family_navigation">Family Navigation</SelectItem>
                        <SelectItem value="funding_support">Funding Support</SelectItem>
                        <SelectItem value="school_readiness">School Readiness</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label>Anything else you'd like us to know?</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    placeholder="Current supports, specific questions, or any context that would help us prepare for your consultation..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                >
                  {loading ? 'Submitting...' : 'Submit Consultation Request'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is confidential and will only be used to prepare for your consultation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
