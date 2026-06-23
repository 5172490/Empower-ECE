import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const questions = [
  {
    id: 'diagnosis',
    question: 'Has your child received a formal diagnosis from a healthcare professional?',
    options: [
      { value: 'yes_autism', label: 'Yes — Autism Spectrum Disorder (ASD)' },
      { value: 'yes_other', label: 'Yes — another developmental diagnosis (ADHD, Global Delay, etc.)' },
      { value: 'in_process', label: 'Currently in the assessment process' },
      { value: 'no', label: 'No formal diagnosis yet' },
    ],
  },
  {
    id: 'age',
    question: 'How old is your child?',
    options: [
      { value: 'under_6', label: 'Under 6 years old' },
      { value: '6_to_12', label: '6 to 12 years old' },
      { value: '13_to_17', label: '13 to 17 years old' },
      { value: '18_plus', label: '18 or older' },
    ],
  },
  {
    id: 'current_funding',
    question: 'Are you currently receiving any Ontario government funding for your child?',
    options: [
      { value: 'ssah', label: 'Yes — SSAH (Special Services at Home)' },
      { value: 'oap', label: 'Yes — OAP (Ontario Autism Program)' },
      { value: 'both', label: 'Yes — multiple programs' },
      { value: 'none', label: 'No — not currently receiving funding' },
    ],
  },
  {
    id: 'needs',
    question: 'What is your primary area of need right now?',
    options: [
      { value: 'funding_help', label: 'Help applying for or navigating funding programs' },
      { value: 'dev_support', label: 'Developmental support and planning for my child' },
      { value: 'school', label: 'School readiness or school inclusion support' },
      { value: 'daily_routines', label: 'Support with daily routines and home strategies' },
    ],
  },
  {
    id: 'paying',
    question: 'Are you currently paying out of pocket for any developmental supports?',
    options: [
      { value: 'yes_significant', label: 'Yes — a significant amount each month' },
      { value: 'yes_some', label: 'Yes — some expenses' },
      { value: 'no', label: 'No — but my child needs supports we can\'t afford' },
      { value: 'covered', label: 'No — our current funding covers our needs' },
    ],
  },
];

const getResults = (answers) => {
  const programs = [];
  if (answers.diagnosis === 'yes_autism' || answers.diagnosis === 'in_process') {
    programs.push({ name: 'Ontario Autism Program (OAP)', match: 'strong', description: 'Your child may qualify for OAP core clinical services and family support funding.' });
  }
  if (answers.diagnosis !== 'no' && answers.age !== '18_plus') {
    programs.push({ name: 'Special Services at Home (SSAH)', match: 'strong', description: 'SSAH provides funding for developmental support, respite, and family navigation services.' });
  }
  if (answers.diagnosis === 'yes_autism' || answers.diagnosis === 'yes_other') {
    programs.push({ name: 'Assistance for Children with Severe Disabilities (ACSD)', match: 'possible', description: 'Additional financial support may be available depending on the severity of your child\'s needs.' });
  }
  if (answers.age === 'under_6') {
    programs.push({ name: 'EarlyON Child and Family Centres', match: 'possible', description: 'Free programs and services for families with children from birth to 6 years.' });
  }
  if (programs.length === 0) {
    programs.push({ name: 'General Family Support', match: 'consultation', description: 'Based on your answers, a personal consultation would help us identify the right support pathways.' });
  }
  return programs;
};

export default function FundingQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    await base44.entities.LeadCapture.create({
      email,
      source: 'funding_quiz',
      quiz_results: answers,
    });
    setEmailSubmitted(true);
    toast.success('Results saved! We\'ll be in touch.');
  };

  const results = getResults(answers);

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-foreground mb-2">Your Funding Matches</h3>
            <p className="text-muted-foreground">Based on your answers, here are programs you may be eligible for:</p>
          </div>

          <div className="space-y-4 mb-8">
            {results.map((program) => (
              <div key={program.name} className="bg-accent/50 rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading text-lg text-foreground">{program.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    program.match === 'strong' ? 'bg-primary/10 text-primary' : 'bg-secondary/30 text-secondary-foreground'
                  }`}>
                    {program.match === 'strong' ? 'Strong Match' : program.match === 'possible' ? 'Possible Match' : 'Recommended'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Enter your email to save these results and receive detailed eligibility information.
              </p>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 h-12 px-6">
                  Save Results
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-sm text-primary font-medium mb-4">Results saved! Check your inbox for details.</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/booking">Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  const q = questions[current];
  const answered = answers[q.id];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground">Question {current + 1} of {questions.length}</p>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div key={i} className={`w-8 h-1.5 rounded-full ${i <= current ? 'bg-primary' : 'bg-muted'}`} />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-heading text-xl text-foreground mb-6">{q.question}</h3>

            <RadioGroup value={answered} onValueChange={handleAnswer} className="space-y-3">
              {q.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 rounded-xl border border-border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answered}
            className="bg-primary hover:bg-primary/90"
          >
            {current === questions.length - 1 ? 'See Results' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
