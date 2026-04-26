import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { ArrowRight, ArrowLeft, Sparkles, Calendar, DollarSign, Star } from 'lucide-react';

interface AIEstimatorProps {
  onNavigate?: (page: string) => void;
}

interface FormData {
  service: string;
  projectType: string;
  features: string[];
  timeline: string;
  budget: string;
  business: string;
  goals: string;
  inspiration: string;
  colors: string;
  contact: {
    name: string;
    email: string;
    company: string;
  };
}

const initialFormData: FormData = {
  service: '',
  projectType: '',
  features: [],
  timeline: '',
  budget: '',
  business: '',
  goals: '',
  inspiration: '',
  colors: '',
  contact: {
    name: '',
    email: '',
    company: ''
  }
};

const steps = [
  { id: 1, title: 'Service Type', description: 'What do you need?' },
  { id: 2, title: 'Project Details', description: 'Tell us about your project' },
  { id: 3, title: 'Timeline & Budget', description: 'Your preferences' },
  { id: 4, title: 'Design Preferences', description: 'Visual direction' },
  { id: 5, title: 'Contact Info', description: 'How to reach you' },
  { id: 6, title: 'Estimate', description: 'Your AI-generated estimate' }
];

export default function AIEstimator({ onNavigate }: AIEstimatorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGenerating, setIsGenerating] = useState(false);

  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateEstimate = () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      nextStep();
    }, 3000);
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateContactData = (field: keyof FormData['contact'], value: string) => {
    setFormData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <section id="ai-estimator" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200/50 mb-6"
          >
            <Sparkles className="size-5 text-indigo-600" />
            <span className="text-base font-medium text-indigo-700">AI-Powered Estimation</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Project Estimate
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Answer a few questions and get instant AI-powered timeline and pricing estimates
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-900">Step {currentStep} of {steps.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              className="h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <Card className="min-h-[500px] shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
            <CardTitle className="text-xl text-gray-900">{steps[currentStep - 1].title}</CardTitle>
            <CardDescription className="text-gray-600">{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Service Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <RadioGroup value={formData.service} onValueChange={(value) => updateFormData('service', value)}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-6 rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 cursor-pointer transition-all">
                        <RadioGroupItem value="branding" id="branding" className="border-pink-500 text-pink-500" />
                        <Label htmlFor="branding" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                              <span className="text-white font-bold">B</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Logo & Branding Design</div>
                              <div className="text-sm text-gray-600">Complete brand identity and visual systems</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 cursor-pointer transition-all">
                        <RadioGroupItem value="uxui" id="uxui" className="border-blue-500 text-blue-500" />
                        <Label htmlFor="uxui" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                              <span className="text-white font-bold">U</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">UX/UI Design</div>
                              <div className="text-sm text-gray-600">Website, mobile app, or landing page design</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-6 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 cursor-pointer transition-all">
                        <RadioGroupItem value="development" id="development" className="border-green-500 text-green-500" />
                        <Label htmlFor="development" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                              <span className="text-white font-bold">D</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Development</div>
                              <div className="text-sm text-gray-600">Web apps, mobile apps, or e-commerce platforms</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="business" className="text-gray-900">Tell us about your business</Label>
                    <Textarea
                      id="business"
                      placeholder="What does your company do? Who is your target audience?"
                      value={formData.business}
                      onChange={(e) => updateFormData('business', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="goals" className="text-gray-900">What are your main goals for this project?</Label>
                    <Textarea
                      id="goals"
                      placeholder="Increase conversions, improve user experience, launch new product..."
                      value={formData.goals}
                      onChange={(e) => updateFormData('goals', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {formData.service === 'development' && (
                    <div>
                      <Label className="text-gray-900">Key Features Needed:</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {['User Authentication', 'Payment Processing', 'Admin Dashboard', 'API Integration', 'Mobile Responsive', 'Search Functionality'].map((feature) => (
                          <div key={feature} className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-indigo-50 border border-gray-200">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={() => toggleFeature(feature)}
                              className="border-indigo-500 text-indigo-500"
                            />
                            <Label htmlFor={feature} className="text-sm text-gray-700">{feature}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 3: Timeline & Budget */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label>When do you need this completed?</Label>
                    <RadioGroup value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)} className="mt-2">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap">ASAP (Rush job)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1month" id="1month" />
                          <Label htmlFor="1month">Within 1 month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2months" id="2months" />
                          <Label htmlFor="2months">2-3 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible">Flexible timeline</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Budget Range</Label>
                    <RadioGroup value={formData.budget} onValueChange={(value) => updateFormData('budget', value)} className="mt-2">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5k" id="5k" />
                          <Label htmlFor="5k">$5,000 - $10,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10k" id="10k" />
                          <Label htmlFor="10k">$10,000 - $25,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25k" id="25k" />
                          <Label htmlFor="25k">$25,000 - $50,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="50k" id="50k" />
                          <Label htmlFor="50k">$50,000+</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Design Preferences */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="inspiration">Design Inspiration</Label>
                    <Textarea
                      id="inspiration"
                      placeholder="Share any websites, apps, or designs you like. Include URLs if possible."
                      value={formData.inspiration}
                      onChange={(e) => updateFormData('inspiration', e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="colors">Color Preferences</Label>
                    <Input
                      id="colors"
                      placeholder="Blue, modern, minimalist, corporate, playful..."
                      value={formData.colors}
                      onChange={(e) => updateFormData('colors', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Contact Info */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.contact.name}
                        onChange={(e) => updateContactData('name', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.contact.email}
                        onChange={(e) => updateContactData('email', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.contact.company}
                      onChange={(e) => updateContactData('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 6: AI Estimate Results */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  {isGenerating ? (
                    <div className="text-center py-12">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <Sparkles className="size-8 text-white" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">AI is analyzing your project...</h3>
                      <p className="text-gray-600">This will take just a moment</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <Star className="size-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Project Estimate</h3>
                        <p className="text-gray-600">Based on your requirements, here's what we recommend:</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                <Calendar className="size-5 text-white" />
                              </div>
                              <h4 className="font-semibold text-gray-900">Timeline</h4>
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">8-12 weeks</div>
                            <p className="text-sm text-gray-600">Including revisions and testing</p>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                <DollarSign className="size-5 text-white" />
                              </div>
                              <h4 className="font-semibold text-gray-900">Investment</h4>
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">$15,000 - $25,000</div>
                            <p className="text-sm text-gray-600">Fixed-price project estimate</p>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="mb-6 border-0 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-gray-50 to-indigo-50">
                          <CardTitle className="text-gray-900">Project Phases</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                              <span className="font-medium text-gray-900">Discovery & Strategy</span>
                              <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">1-2 weeks</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                              <span className="font-medium text-gray-900">Design & Prototyping</span>
                              <span className="text-sm text-gray-600 bg-purple-100 px-3 py-1 rounded-full">3-4 weeks</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                              <span className="font-medium text-gray-900">Development</span>
                              <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">4-6 weeks</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="text-center">
                        <Button size="lg" className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                          Book Discovery Call
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 6 && (
              <div className="flex justify-between pt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="group border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                >
                  <ArrowLeft className="mr-2 size-5 transition-transform group-hover:-translate-x-1" />
                  Previous
                </Button>

                {currentStep === 5 ? (
                  <Button 
                    onClick={generateEstimate} 
                    size="lg"
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3"
                  >
                    Generate Estimate
                    <Sparkles className="ml-2 size-5" />
                  </Button>
                ) : (
                  <Button 
                    onClick={nextStep} 
                    size="lg"
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3"
                  >
                    Next
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}