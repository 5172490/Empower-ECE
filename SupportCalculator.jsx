import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CircleDollarSign, FileCheck, ShieldCheck, Building, RefreshCw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const needOptions = [
  { id: 'autism', label: 'Autism Spectrum Disorder (ASD)' },
  { id: 'adhd', label: 'ADHD / Attention Differences' },
  { id: 'speech', label: 'Speech & Language Delays' },
  { id: 'dev_delay', label: 'Developmental Delays' },
  { id: 'sensory', label: 'Sensory Processing Differences' },
  { id: 'physical', label: 'Physical Disability' },
  { id: 'behaviour', label: 'Behavioural / Emotional Regulation' },
  { id: 'school', label: 'School Readiness / Learning Differences' },
];

const PROGRAMS = {
  oap: {
    icon: FileCheck,
    name: 'Ontario Autism Program (OAP)',
    short: 'OAP',
    colour: 'bg-primary/10 text-primary border-primary/20',
    description: 'Needs-based funding for autism services including behavioural support, speech-language therapy, OT, and family training.',
    typical: 'Up to $20,000/yr (Core Clinical) + $8,000 (Foundational Family Services)',
  },
  ssah: {
    icon: CircleDollarSign,
    name: 'Special Services at Home (SSAH)',
    short: 'SSAH',
    colour: 'bg-secondary/20 text-secondary-foreground border-secondary/30',
    description: 'Direct funding to purchase respite care, developmental workers, supplies, and family navigation services at home.',
    typical: 'Up to $25,000/yr depending on assessed need',
  },
  acsd: {
    icon: ShieldCheck,
    name: 'Assistance for Children with Severe Disabilities (ACSD)',
    short: 'ACSD',
    colour: 'bg-accent text-accent-foreground border-border',
    description: 'Additional financial assistance for extraordinary costs including clothing, transportation, dietary, and care needs.',
    typical: 'Up to $500/month in additional support',
  },
  earlyOn: {
    icon: Building,
    name: 'EarlyON & Community Programs',
    short: 'EarlyON',
    colour: 'bg-muted text-muted-foreground border-border',
    description: 'Free drop-in programs, developmental screening, and parenting workshops for young children and their families.',
    typical: 'Free of charge — community-funded',
  },
};

function calculatePrograms(age, needs) {
  const results = [];
  const ageNum = parseInt(age);

  const hasAutism = needs.includes('autism');
  const hasDev = needs.some(n => ['dev_delay', 'speech', 'adhd', 'sensory', 'behaviour', 'school'].includes(n));
  const hasPhysical = needs.includes('physical');
  const hasSevere = needs.length >= 3 || hasPhysical;

  if (hasAutism && ageNum < 18) {
    results.push({ key: 'oap', strength: 'Strong Match' });
  }
  if ((hasDev || hasAutism || hasPhysical) && ageNum < 18) {
    results.push({ key: 'ssah', strength: 'Strong Match' });
  }
  if (hasSevere && ageNum < 18) {
    results.push({ key: 'acsd', strength: 'Possible Match' });
  }
  if (ageNum < 6) {
    results.push({ key: 'earlyOn', strength: 'Recommended' });
  }

  return results;
}

const strengthStyle = {
  'Strong Match': 'bg-primary/10 text-primary',
  'Possible Match': 'bg-secondary/20 text-secondary-foreground',
  'Recommended': 'bg-muted text-muted-foreground',
};

export default function SupportCalculator() {
  const [age, setAge] = useState('');
  const [needs, setNeeds] = useState([]);
  const [results, setResults] = useState(null);

  const toggleNeed = (id) => {
    setNeeds(prev => prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]);
  };

  const handleCalculate = () => {
    setResults(calculatePrograms(age, needs));
  };

  const handleReset = () => {
    setAge('');
    setNeeds([]);
    setResults(null);
  };

  const canCalculate = age && needs.length > 0;

  return (
    <Card className="max-w-3xl mx-auto border-border shadow-sm">
      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          {!results ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Age */}
              <div className="mb-6">
                <Label className="text-base font-medium text-foreground mb-3 block">
                  Child's Age
                </Label>
                <Select value={age} onValueChange={setAge}>
                  <SelectTrigger className="w-48 h-11">
                    <SelectValue placeholder="Select age..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 18 }, (_, i) => i + 1).map(n => (
                      <SelectItem key={n} value={String(n)}>{n} year{n !== 1 ? 's' : ''} old</SelectItem>
                    ))}
                    <SelectItem value="18">18+ years old</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Needs */}
              <div className="mb-8">
                <Label className="text-base font-medium text-foreground mb-3 block">
                  Areas of Need <span className="text-muted-foreground font-normal">(select all that apply)</span>
                </Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {needOptions.map(({ id, label }) => (
                    <div
                      key={id}
                      onClick={() => toggleNeed(id)}
                      className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                        needs.includes(id) ? 'border-primary/40 bg-primary/5' : 'border-border hover:bg-muted/50'
                      }`}
                    >
                      <Checkbox
                        checked={needs.includes(id)}
                        onCheckedChange={() => toggleNeed(id)}
                        onClick={e => e.stopPropagation()}
                      />
                      <span className="text-sm text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                disabled={!canCalculate}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                Show Matching Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ) : (
            <motion.div key="results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-xl text-foreground">
                    {results.length > 0 ? `${results.length} program${results.length > 1 ? 's' : ''} found` : 'No programs matched'}
                  </h3>
                  <p className="text-sm text-muted-foreground">Based on age {age} · {needs.length} need{needs.length > 1 ? 's' : ''} selected</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground">
                  <RefreshCw className="w-4 h-4 mr-1" /> Reset
                </Button>
              </div>

              {results.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="mb-4">No direct program matches — but a personal consultation may identify other support pathways.</p>
                  <Link to="/booking">
                    <Button className="bg-primary hover:bg-primary/90">Book a Free Consultation</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map(({ key, strength }) => {
                    const prog = PROGRAMS[key];
                    const Icon = prog.icon;
                    return (
                      <div key={key} className={`rounded-xl border p-5 ${prog.colour}`}>
                        <div className="flex items-start gap-4">
                          <Icon className="w-7 h-7 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h4 className="font-heading text-lg">{prog.name}</h4>
                              <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${strengthStyle[strength]}`}>
                                {strength}
                              </span>
                            </div>
                            <p className="text-sm opacity-80 mb-2">{prog.description}</p>
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                              <CheckCircle className="w-4 h-4" />
                              {prog.typical}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="pt-4 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      These are estimates — actual eligibility is determined during assessment. 
                      Book a free consultation to confirm and start your applications.
                    </p>
                    <Link to="/booking">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                        Claim Your Funding
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
