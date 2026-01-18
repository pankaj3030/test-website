'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Zap,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Cpu,
  Database,
  Cloud,
  RefreshCw,
  FileText,
  Monitor,
  ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';

export default function ITSupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you! We\'ll be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Monitor,
      title: 'IT Support & Service Management',
      description: 'Scalable 24/7 support with advanced monitoring and responsive service to minimize downtime.',
      color: 'bg-emerald-500',
    },
    {
      icon: Cpu,
      title: 'App Development & Migration',
      description: 'Efficient low-code solutions using Microsoft Power Platform tailored to your business needs.',
      color: 'bg-orange-500',
    },
    {
      icon: Shield,
      title: 'Cyber Security Services',
      description: 'Comprehensive protection with Cyber Essentials consultancy and 24/7 threat monitoring.',
      color: 'bg-rose-500',
    },
    {
      icon: Cloud,
      title: 'Microsoft Azure',
      description: 'Secure cloud migration and infrastructure optimization with expert Azure guidance.',
      color: 'bg-cyan-500',
    },
    {
      icon: RefreshCw,
      title: 'Disaster Recovery',
      description: 'Cloud-based backup solutions ensuring business continuity and quick recovery from disruptions.',
      color: 'bg-violet-500',
    },
    {
      icon: FileText,
      title: 'Microsoft 365 Support',
      description: 'Optimize your Microsoft 365 setup for enhanced collaboration and productivity.',
      color: 'bg-amber-500',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance ensuring your IT systems are always operational.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Microsoft-certified professionals with deep technical expertise.',
    },
    {
      icon: Shield,
      title: 'Proactive Security',
      description: 'Multi-layered protection to safeguard your data and detect threats early.',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick resolution times to minimize business disruptions.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Free, no-obligation consultation to understand your unique IT requirements and business goals.',
    },
    {
      number: '02',
      title: 'Infrastructure Transfer',
      description: 'Seamless migration of your existing IT infrastructure to our managed systems with minimal disruption.',
    },
    {
      number: '03',
      title: 'Full Execution',
      description: 'Complete implementation and ongoing support with dedicated account management.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Isosceles Finance Ltd',
      content: 'Great service, could not be happier with the speedy response. Will recommend to others looking for an outsourced IT provider. A+',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'TechStart Solutions',
      content: 'Their proactive approach to IT support has transformed our operations. Issues are resolved before they impact our business.',
    },
    {
      name: 'Emily Davis',
      role: 'Managing Director',
      company: 'Growth Partners',
      content: 'Professional, reliable, and always available. They truly understand our business needs and deliver solutions that work.',
    },
  ];

  const stats = [
    { value: '800+', label: 'IT Professionals' },
    { value: '45,000+', label: 'Users Supported' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '6', label: 'Microsoft Designations' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
  {/* Replace this with your logo image */}
  <img src="/logo.png" alt="Your Company Name" className="h-8 w-auto" />
</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Why Us
              </a>
              <a href="#process" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Process
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  Trusted IT Partner
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Reliable IT Support{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                    For Your Business
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Customised IT support designed for businesses. Our dedicated team delivers dependable,
                  prompt solutions to ensure your systems operate seamlessly. Trust us to empower your
                  business with cutting-edge technology and exceptional customer care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 text-base"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-12 px-8 text-base border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Our Services
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl opacity-10 blur-xl"></div>
                <Card className="relative bg-white border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">24/7 Support Available</h3>
                          <p className="text-sm text-gray-600">Round-the-clock IT assistance</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                          <Users className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">800+ IT Professionals</h3>
                          <p className="text-sm text-gray-600">Expert team at your disposal</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                          <Shield className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Cyber Security Certified</h3>
                          <p className="text-sm text-gray-600">Protect your business data</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                          <Zap className="h-6 w-6 text-violet-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">98% Satisfaction Rate</h3>
                          <p className="text-sm text-gray-600">Trusted by thousands of users</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center h-12">
                  <div className="text-xl font-bold text-gray-400">Company {i}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Comprehensive IT Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From managed support to cloud migration, we provide end-to-end IT services tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-emerald-200"
                >
                  <CardHeader>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Your Trusted IT Partner
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We take pride in delivering exceptional IT support, empowering businesses to grow with reliable
                  and forward-thinking solutions. Our all-encompassing support services ensure your systems are secure,
                  optimised, and aligned with your company's goals.
                </p>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-600">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-6">
                    <CardContent>
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section id="process" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                Partnership Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Hassle-Free Onboarding
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures a smooth transition to our managed IT services with minimal disruption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-emerald-200 transition-all"
                >
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="h-8 w-8 text-emerald-600" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-emerald-900 text-emerald-300 border-emerald-700">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Let's Discuss Your IT Needs
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ready to transform your IT infrastructure? Contact us today for a free consultation and discover
                  how our managed IT services can benefit your business.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+44 (0) 24 7655 5555</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                      <Mail className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@techguard-it.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Suite B 53, 55 Butts Road<br />
                        Coventry, CV1 3BH<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 123 456 7890"
                          className="h-11"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company Ltd"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your IT support needs..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-base"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
                  <Shield className="h-5 w-5 text-white" />
                <div className="flex items-center space-x-2">
  <img src="/logo.png" alt="Your Company Name" className="h-8 w-auto" />
</div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive IT support and managed services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    IT Support
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Microsoft 365
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Disaster Recovery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-white transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>+44 (0) 24 7655 5555</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>info@techguard-it.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>
                    Suite B 53, 55 Butts Road<br />
                    Coventry, CV1 3BH<br />
                    United Kingdom
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} TechGuard IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
