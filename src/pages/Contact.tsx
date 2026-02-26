import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
} as const;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-28 pb-12 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 98%)" }}>Contact Us</h1>
          <p style={{ color: "hsl(0 0% 98% / 0.7)" }}>Get in touch with our team of real estate experts</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
              <h2 className="text-3xl font-bold mt-3 text-foreground">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">Whether you're looking to buy, sell, or invest, our team is ready to help you make informed decisions.</p>

              <div className="mt-8 space-y-6">
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+2348026133205</p>
                  </div>
                </a>
                <a href="mailto:info@pk5realestate.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">info@pk5realestate.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Head Office</p>
                    <p className="text-muted-foreground text-sm" >
                      Apt. B Imanium Estate,<br />Nathaniel Akpan Street, Off Ekpri Nsukara, <br />Uyo,  Akwa Ibom State.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#25D366] text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border shadow-sm space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a topic</option>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Investment Advisory</option>
                      <option>Property Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <Button variant="gold" size="lg" type="submit" className="w-full">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

             {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Apt.%20B%20Imanium%20Estate,%20Nathaniel%20Akpan%20Street,%20Off%20Ekpri%20Nsukara,%20Uyo,%20Akwa%20Ibom%20State&output=embed"
                />
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
