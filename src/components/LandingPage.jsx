<form
  action="https://formspree.io/f/xrbarqgz"
  method="POST"
  acceptCharset="UTF-8"
  className="space-y-4"
>
  {/* anti-bot honeypot */}
  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

  {/* redirect after success */}
  <input type="hidden" name="_redirect" value="https://www.minus80scientific.com/thank-you.html" />
  {/* nicer email subject */}
  <input type="hidden" name="_subject" value="New Service Request — Minus 80 Scientific" />

  {/* your existing fields (names matter!) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="name" className="text-white">Name *</Label>
      <Input id="name" name="name" required className="bg-white/20 border-white/30 text-white placeholder:text-white/60" placeholder="Your full name" />
    </div>
    <div>
      <Label htmlFor="company" className="text-white">Company</Label>
      <Input id="company" name="company" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" placeholder="Company name" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="email" className="text-white">Email *</Label>
      <Input id="email" name="email" type="email" required className="bg-white/20 border-white/30 text-white placeholder:text-white/60" placeholder="your.email@company.com" />
    </div>
    <div>
      <Label htmlFor="phone" className="text-white">Phone *</Label>
      <Input id="phone" name="phone" type="tel" required className="bg-white/20 border-white/30 text-white placeholder:text-white/60" placeholder="(214) 123-4567" />
    </div>
  </div>

  <div>
    <Label htmlFor="serviceType" className="text-white">Service Needed</Label>
    <select id="serviceType" name="serviceType" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white">
      <option value="" className="text-gray-900">Select service type</option>
      <option value="emergency" className="text-gray-900">Emergency Repair</option>
      <option value="maintenance" className="text-gray-900">Preventive Maintenance</option>
      <option value="consultation" className="text-gray-900">Consultation</option>
      <option value="other" className="text-gray-900">Other</option>
    </select>
  </div>

  <div>
    <Label htmlFor="message" className="text-white">Message *</Label>
    <Textarea id="message" name="message" required rows={4} className="bg-white/20 border-white/30 text-white placeholder:text-white/60" placeholder="Describe your system and the issue..." />
  </div>

  <Button type="submit" size="lg" className="w-full bg-white text-[#1B8BB4] hover:bg-gray-50 text-lg py-3">
    Submit Request
    <ArrowRight className="w-5 h-5 ml-2" />
  </Button>
</form>
