// Mock data for Minus80 Scientific landing page

export const mockContactInfo = {
  company: "Minus80 Scientific",
  address: "3730 Dilido Rd, Dallas, Texas 75228",
  phone: "\(214\)\ 427-8733",
  email: "info@minus80scientific.com",
  emergencyAvailable: true,
  serviceArea: "Dallas, Texas & Surrounding Areas"
};

export const mockServices = [
  {
    id: 1,
    category: "Ultra-Low Temperature Systems",
    icon: "thermometer",
    title: "Laboratory Freezer Repair",
    description: "Expert repair and maintenance of -80°C freezers, cryogenic systems, and specialized laboratory equipment.",
    features: [
      "Emergency repairs within 2-4 hours",
      "Preventive maintenance programs",
      "Temperature calibration services",
      "Genuine parts replacement",
      "System diagnostics and optimization"
    ],
    emergencyAvailable: true
  },
  {
    id: 2,
    category: "Industrial Cold Storage",
    icon: "settings",
    title: "Industrial System Service",
    description: "Comprehensive service for large-scale refrigeration systems, walk-in coolers, and industrial freezers.",
    features: [
      "System diagnostics and troubleshooting",
      "Compressor repair and replacement",
      "Control system updates and upgrades",
      "Energy efficiency optimization",
      "Compliance and safety inspections"
    ],
    emergencyAvailable: true
  },
  {
    id: 3,
    category: "Medical & Pharmaceutical",
    icon: "shield",
    title: "Medical Equipment Service",
    description: "Specialized maintenance for vaccine storage, blood banks, and pharmaceutical cold chain equipment.",
    features: [
      "FDA compliance monitoring",
      "Alarm system service and testing",
      "Documentation and validation support",
      "Temperature mapping and validation",
      "GMP compliance assistance"
    ],
    emergencyAvailable: true
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    position: "Research Director",
    company: "BioTech Research Labs",
    rating: 5,
    text: "Minus80 Scientific saved our research when our -80°C freezer failed over the weekend. Their emergency response team was on-site within 2 hours and had us back online before any samples were compromised. Incredible service!",
    serviceUsed: "Emergency Repair",
    verified: true
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Facilities Manager",
    company: "Dallas Medical Center",
    rating: 5,
    text: "We've been using Minus80 Scientific for our preventive maintenance program for 3 years. They're reliable, knowledgeable, and always available when we need them. Our uptime has improved dramatically.",
    serviceUsed: "Preventive Maintenance",
    verified: true
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    position: "Quality Manager",
    company: "CryoStore Industries",
    rating: 5,
    text: "Their technicians really understand the critical nature of our cold storage operations. The level of expertise they bring to ultra-low temperature systems is unmatched in the Dallas area.",
    serviceUsed: "System Upgrade",
    verified: true
  }
];

export const mockCompanyStats = [
  { number: "500+", label: "Systems Serviced", description: "Cold storage units maintained and repaired" },
  { number: "24/7", label: "Emergency Response", description: "Round-the-clock availability" },
  { number: "99.8%", label: "Uptime Achieved", description: "Average system uptime for our clients" },
  { number: "15+", label: "Years Experience", description: "Specialized cold storage expertise" },
  { number: "2-4hrs", label: "Response Time", description: "Average emergency response time" },
  { number: "100%", label: "Certified Techs", description: "Factory-trained professionals" }
];

export const mockWhyChooseUs = [
  {
    id: 1,
    icon: "clock",
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for critical cold storage emergencies with rapid response times averaging 2-4 hours.",
    benefits: [
      "Immediate phone support",
      "Emergency dispatch system",
      "Weekend and holiday service",
      "Priority response for critical systems"
    ]
  },
  {
    id: 2,
    icon: "thermometer",
    title: "Ultra-Low Temperature Expertise",
    description: "Specialized knowledge in -80°C systems and cryogenic equipment that most general HVAC technicians don't possess.",
    benefits: [
      "Factory training certifications",
      "Specialized diagnostic equipment",
      "Ultra-low temp component expertise",
      "Cryogenic system knowledge"
    ]
  },
  {
    id: 3,
    icon: "zap",
    title: "Fast Response Times",
    description: "We understand that every minute counts when your cold storage system fails. Our average response time is 2-4 hours.",
    benefits: [
      "GPS-tracked service vehicles",
      "Pre-stocked common parts",
      "Multiple technician coverage",
      "Prioritized emergency calls"
    ]
  },
  {
    id: 4,
    icon: "shield",
    title: "Certified & Insured",
    description: "Factory-trained professionals with comprehensive insurance coverage and industry certifications for your peace of mind.",
    benefits: [
      "EPA certification",
      "Manufacturer training",
      "Full liability insurance",
      "Bonded technicians"
    ]
  }
];

export const mockFormSubmission = {
  success: true,
  message: "Thank you for your inquiry! We will contact you within 2 hours during business hours, or first thing the next business day if submitted after hours.",
  responseTime: "2 hours",
  emergencyContact: "\(214\)\ 427-8733"
};

// Mock form validation
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name is required and must be at least 2 characters";
  }
  
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Valid email address is required";
  }
  
  if (!formData.phone || !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
    errors.phone = "Valid phone number is required";
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message is required and must be at least 10 characters";
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default {
  mockContactInfo,
  mockServices,
  mockTestimonials,
  mockCompanyStats,
  mockWhyChooseUs,
  mockFormSubmission,
  validateContactForm
};

