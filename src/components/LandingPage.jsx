import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  Thermometer,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Snowflake
} from 'lucide-react';
import logo from '../assets/logo-tight.png'; // <<— uses src/assets/logo.png

const FORM_ENDPOINT = "https://formspree.io/f/xrbarqgz";

// ---- Mock data ----
const mockTestimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    company: "Dallas Research Lab",
    rating: 5,
    text:
      "Minus 80 Scientific saved our research when our -80°C freezer failed. Their emergency response was incredibly fast and professional."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "North Texas Biotech",
    rating: 5,
    text:
      "Reliable, knowledgeable, and always available. They've been maintaining our cold storage systems for 3 years without any issues."
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    company: "Metro Medical Center",
    rating: 5,
    text:
      "Expert technicians who understand the critical nature of cold storage. Their preventive maintenance program is excellent."
  }
];

const mockStats = [
  { number: "500+", label: "Systems Serviced" },
  { number: "24/7", label: "Emergency Response" },
  { number: "99.8%", label: "Uptime Achieved" },
  { number: "15+", label: "Years Experience" }
];

const services = [
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Ultra-Low Temperature Systems",
    description:
      "Expert repair and maintenance of -80°C freezers, cryogenic systems, and specialized laboratory equipment.",
    features: ["Emergency repairs", "Preventive maintenance", "Temperature calibration", "Parts replacement"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Industrial Cold Storage",
    description:
      "Comprehensive service for large-scale refrigeration systems, walk-in coolers, and industrial freezers.",
    features: ["System diagnostics", "Compressor repair", "Control system updates", "Energy optimization"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Medical & Pharmaceutical",
    description:
      "Specialized maintenance for vaccine storage, blood banks, and pharmaceutical cold chain equipment.",
    features: ["Compliance monitoring", "Alarm system service", "Documentation support", "Validation testing"]
  }
];

const whyChooseUs = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for critical cold storage emergencies with rapid response times."
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Ultra-Low Temperature Expertise",
    description: "Specialized knowledge in -80°C systems and cryogenic equipment that most technicians don't have."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Response Times",
    description: "We understand that every minute counts when your cold storage system fails."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified Technicians",
    description: "Factory-trained professionals with extensive experience in scientific and medical equipment."
  }
];

export const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-5 md:py-6">
      {/* Brand with logo */}
      <a href="/" aria-label="Minus 80 Scientific — Home" className="flex items-center gap-3">
        {/* Use your tighter crop if you have it in /public/logo-tight.png; otherwise keep /logo.png */}
        <img
          src="/logo-tight.png"
          alt="Minus 80 Scientific logo"
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
          fetchpriority="high"
        />
      </a>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#services" className="text-gray-700 hover:text-[#1B8BB4] transition-colors">Services</a>
        <a href="#about" className="text-gray-700 hover:text-[#1B8BB4] transition-colors">About</a>
        <a href="#contact" className="text-gray-700 hover:text-[#1B8BB4] transition-colors">Contact</a>
        <a href="tel:+12147291484">
          <Button className="bg-[#1B8BB4] hover:bg-[#156A89] text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </a>
      </div>
    </div>
  </div>
</header>



      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B8BB4] via-[#2A9FC4] to-[#1B8BB4] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Dallas, Texas • 24/7 Emergency Service
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Cold Storage
                  <span className="block text-cyan-200">Repair &amp; Service</span>
                </h1>
                <p className="text-xl text-cyan-100 leading-relaxed">
                  Professional repair and maintenance of ultra-low temperature systems, laboratory freezers,
                  and industrial cold storage equipment. When your critical systems fail, we're here 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#1B8BB4] hover:bg-gray-50 text-lg px-8 py-4 h-auto"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Emergency Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:+12147291484">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#1B8BB4] text-lg px-8 py-4 h-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    214-729-1484
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {mockStats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-cyan-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <<div className="relative">
  <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
    <img
      src="/logo.png"          // use /logo-tight.png if you saved the tighter crop
      alt="Minus 80 Scientific logo"
      className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto drop-shadow-lg"
      fetchpriority="high"
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Cold Storage Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventive maintenance, we keep your critical
              cold storage systems running at optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#1B8BB4]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B8BB4] group-hover:text-white transition-all duration-300">
                    <div className="text-[#1B8BB4] group-hover:text-white transition-colors">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-center">{service.description}</CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#1B8BB4]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#1B8BB4]/10 text-[#1B8BB4]">About Minus 80 Scientific</Badge>
                <h2 className="text-4xl font-bold text-gray-900">Your Trusted Cold Storage Experts in Dallas</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 15 years of specialized experience, Minus 80 Scientific is Dallas's premier
                  cold storage repair and maintenance company. We understand that when your critical
                  cooling systems fail, every minute counts.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1B8BB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-6 h-6 text-[#1B8BB4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultra-Low Temperature Specialists</h3>
                    <p className="text-gray-600">
                      Expert knowledge in -80°C systems, cryogenic equipment, and specialized laboratory freezers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1B8BB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1B8BB4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Response</h3>
                    <p className="text-gray-600">
                      Round-the-clock availability with rapid response times for critical system failures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1B8BB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#1B8BB4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified &amp; Insured</h3>
                    <p className="text-gray-600">
                      Factory-trained technicians with full insurance coverage for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1B8BB4] to-[#156A89] rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Serving Dallas &amp; Surrounding Areas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5" />
                      <span>3730 Dilido Rd Dallas, Texas 75228</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>214-729-1484</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span>info@minus80scientific.com</span>
                    </div>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-cyan-200 text-sm">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-cyan-200 text-sm">Systems Serviced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Minus 80 Scientific?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your critical cold storage systems are at stake, you need a partner you can trust.
              Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#1B8BB4] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it. Here's what our satisfied customers have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((t) => (
              <Card key={t.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#1B8BB4] to-[#156A89] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Expert Cold Storage Service Today</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Don't wait for a system failure. Contact us now for emergency repairs,
              preventive maintenance, or consultation on your cold storage needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Emergency Hotline</div>
                    <div className="text-cyan-200">214-729-1484</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-cyan-200">info@minus80scientific.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Office Location</div>
                    <div className="text-cyan-200">3730 Dilido Rd Dallas, Texas 75228</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Request Service</CardTitle>
                <CardDescription className="text-cyan-200">
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Plain HTML POST to Formspree */}
                <form action={FORM_ENDPOINT} method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New inquiry — Minus 80 Scientific" />
                  <input type="hidden" name="_next" value="/thank-you.html" />
                  <input type="text" name="_gotcha" className="hidden" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="Your full name"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="Company name"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="your.email@company.com"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="(214) 123-4567"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType" className="text-white">Service Needed</Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white"
                      defaultValue=""
                      onChange={handleInputChange}
                    >
                      <option value="" className="text-gray-900">Select service type</option>
                      <option value="emergency" className="text-gray-900">Emergency Repair</option>
                      <option value="maintenance" className="text-gray-900">Preventive Maintenance</option>
                      <option value="consultation" className="text-gray-900">Consultation</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Describe your cold storage system and the issue you're experiencing..."
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-white text-[#1B8BB4] hover:bg-gray-50 text-lg py-3">
                    Submit Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#1B8BB4] rounded-lg flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Minus 80 Scientific</h3>
                  <p className="text-gray-400 text-sm">Cold Storage Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional repair and maintenance of ultra-low temperature systems,
                laboratory freezers, and industrial cold storage equipment in Dallas, Texas.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">214-729-1484</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@minus80scientific.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Emergency Repairs</li>
                <li>Preventive Maintenance</li>
                <li>Laboratory Freezers</li>
                <li>Industrial Systems</li>
                <li>Medical Equipment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>3730 Dilido Rd</div>
                <div>Dallas, Texas 75228</div>
                <div className="pt-2">
                  <div className="text-[#1B8BB4] font-semibold">24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© {new Date().getFullYear()} Minus 80 Scientific. All rights reserved.</div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span>Licensed &amp; Insured</span>
              <span>Factory Trained Technicians</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// export both ways to avoid import mismatch
export default LandingPage;
