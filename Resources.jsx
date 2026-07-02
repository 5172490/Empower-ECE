import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Palette, Brain, FileText, BookOpen, Download } from 'lucide-react';

const NAV_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/2cf946269_generated_bf616fbb.png';

const resources = [
  {
    icon: Calendar,
    title: 'Printable Visual Schedules',
    description: 'Daily routine cards and schedule boards designed to be calming, clear, and customizable.',
    tag: 'Most Popular',
  },
  {
    icon: Brain,
    title: 'Sensory Regulation Tools',
    description: 'Visual cue cards for identifying emotions, sensory states, and self-regulation strategies.',
    tag: 'Families',
  },
  {
    icon: BookOpen,
    title: 'School Readiness Kits',
    description: 'Comprehensive checklists and activity guides for preparing neurodivergent children for school transitions.',
    tag: 'Transitions',
  },
  {
    icon: FileText,
    title: 'Funding Checklists',
    description: 'Step-by-step application checklists for SSAH, OAP, and ACSD — everything you need to gather and submit.',
    tag: 'Funding',
  },
  {
    icon: Palette,
    title: 'Creative Learning Activities',
    description: 'Art-based developmental activities that build fine motor, communication, and regulation skills through play.',
    tag: 'Activities',
  },
  {
    icon: Download,
    title: 'Parenting Strategy Guides',
    description: 'Practical guides on topics like bedtime routines, mealtime strategies, and managing transitions.',
    tag: 'Guides',
  },
];

export default function Resources() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Resources & Digital Products</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
              Tools that support your daily life
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beautifully designed, evidence-informed resources for families and 
              educators — from visual schedules to funding checklists.
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
              <img
                src={NAV_IMAGE}
                alt="Organized family planning materials and resources"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Designed to be used, not filed away
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every resource is created with a Visual Arts lens — meaning they're not just 
                functional, they're beautiful enough to display on your fridge or classroom wall.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Printed resources and supply materials may be eligible for funding under SSAH's 
                "supplies" category. Ask us about eligibility during your consultation.
              </p>
              <Link to="/booking">
                <Button className="bg-primary hover:bg-primary/90">
                  Ask About Funded Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <resource.icon className="w-8 h-8 text-primary" />
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {resource.tag}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Need something custom?
          </h2>
          <p className="text-muted-foreground mb-8">
            We create bespoke visual resources tailored to your child's specific needs.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
              Request Custom Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
