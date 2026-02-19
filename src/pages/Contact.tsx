import sustainBg from "@/assets/sustainability-bg.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowDown, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "", commodity: "Shea Products", volume: "500" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainBg})` }} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-foreground mt-3 mb-6">
              Let's Build a Partnership.
            </h1>
            <p className="max-w-2xl mx-auto text-dark-foreground/80">
              Reach out for commodity inquiries, partnership opportunities, or to request a quote.
            </p>
          </ScrollReveal>
        </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <h2 className="text-3xl font-display font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
                        Partner with a reliable <br/>
                        <span className="text-primary">African supply partner.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                        Whether you are looking for specific commodity specifications or a long-term sourcing partner, our team is ready to assist.
                    </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Office Address</p>
                      <p className="text-muted-foreground text-sm">Accra, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">info@newafricacommodities.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">+233 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Working Hours</p>
                      <p className="text-muted-foreground text-sm">Mon – Fri: 8:00 AM – 5:00 PM GMT</p>
                    </div>
                  </div>
                 
                <div className="flex space-x-4 mb-5">
                  {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-all text-white hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                 <a
                    href="https://wa.me/233000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors mt-5"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>


                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                {submitted ? (
                  <div className="p-10 rounded-xl bg-muted text-center">
                    <h3 className="font-heading font-bold text-xl mb-2 text-primary">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your inquiry and will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          maxLength={100}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email *</label>
                        <input
                          required
                          type="email"
                          maxLength={255}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Company</label>
                        <input
                          type="text"
                          maxLength={100}
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Subject *</label>
                        <input
                          required
                          type="text"
                          maxLength={200}
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                          placeholder="Inquiry"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                          <label className="block text-sm font-medium mb-1.5">Commodity Interest</label>
                          <div className="relative">
                              <select 
                                value={form.commodity}
                                onChange={(e) => setForm({ ...form, commodity: e.target.value })}
                                className="w-full bg-white dark:bg-nac-dark border border-gray-200 dark:border-nac-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-nac-green/20 focus:border-nac-green dark:text-white transition-all appearance-none"
                              >
                                  <option>Shea Products</option>
                                  <option>Soya & Maize</option>
                                  <option>Gold</option>
                                  <option>Minerals</option>
                                  <option>Other</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                                  <ArrowDown size={18} />
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between items-center mb-1.5">
                              <label className="block text-sm font-medium mb-1.5">Estimated Volume (MT)</label>
                              <span className="text-xs text-nac-green font-mono" id="volume-val">{form.volume} MT</span>
                          </div>
                          <input 
                            type="range" 
                            min="0" 
                            max="1000" 
                            value={form.volume} 
                            onChange={(e) => setForm({ ...form, volume: e.target.value })}
                            className="w-full h-2 bg-gray-200 dark:bg-nac-border rounded-lg appearance-none cursor-pointer" 
                          />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message *</label>
                      <textarea
                        required
                        maxLength={2000}
                        rows={7}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
