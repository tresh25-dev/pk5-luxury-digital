import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Award, Star, ArrowRight, BedDouble, Bath, Maximize } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    id: 1,
    image: property1,
    title: "Skyline Penthouse",
    location: "Manhattan, New York",
    price: "$4,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    status: "For Sale",
  },
  {
    id: 2,
    image: property2,
    title: "Beachfront Villa",
    location: "Turks & Caicos",
    price: "$6,800,000",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    status: "For Sale",
  },
  {
    id: 3,
    image: property3,
    title: "Corporate Tower Suite",
    location: "Downtown Business District",
    price: "$2,200,000",
    beds: 0,
    baths: 2,
    sqft: "5,500",
    status: "For Lease",
  },
];

const whyChoose = [
  { icon: Shield, title: "Trust & Integrity", desc: "Over a decade of transparent dealings and satisfied clients worldwide." },
  { icon: TrendingUp, title: "ROI Focused", desc: "Strategic investments designed to maximize your returns." },
  { icon: Users, title: "Expert Team", desc: "Certified professionals with deep market expertise." },
  { icon: Award, title: "Award Winning", desc: "Recognized as a top real estate firm for 5 consecutive years." },
];

const testimonials = [
  { name: "Jonathan Reed", role: "Investor", text: "PK5 helped me build a portfolio that consistently outperforms the market. Exceptional service.", rating: 5 },
  { name: "Sarah Mitchell", role: "Homeowner", text: "They found us our dream home in just 3 weeks. The entire process was seamless and professional.", rating: 5 },
  { name: "David Chen", role: "Developer", text: "Their commercial insights and market analysis are unmatched. A truly premium experience.", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy-dark/50" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-accent text-sm font-medium tracking-wide">Premium Real Estate</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "hsl(0 0% 98%)" }}>
              Premium Properties.{" "}
              <span className="text-gradient-gold">Smart Investments.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "hsl(0 0% 98% / 0.8)" }}>
             PK5 Real Estate specializes in premium property services, delivering luxury living spaces and high-yield investment opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/properties">View Listings</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Properties Sold" },
              { value: "500M+", label: "Transaction Value" },
              { value: "53%", label: "Client Satisfaction" },
              { value: "2+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <p className="text-3xl md:text-4xl font-bold font-serif text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Featured Properties</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Discover hand-picked properties that represent the finest in luxury living and smart investment opportunities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, i) => (
              <motion.div
                key={property.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border hover-lift"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {property.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent font-bold text-xl">{property.price}</p>
                  <h3 className="text-lg font-semibold mt-1 text-foreground font-sans">{property.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{property.location}</p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    {property.beds > 0 && (
                      <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" />{property.beds} Beds</span>
                    )}
                    <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{property.baths} Baths</span>
                    <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{property.sqft} sqft</span>
                  </div>
                  <Button variant="gold-outline" size="sm" className="w-full mt-4" asChild>
                    <Link to="/properties">View Details <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PK5 */}
      <section className="py-20 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why PK5</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(0 0% 98%)" }}>Why Choose PK5 Real Estate</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "hsl(0 0% 98% / 0.7)" }}>
              We combine market expertise with personalized service to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center p-6 rounded-lg border border-primary-foreground/10 backdrop-blur-sm hover:border-accent/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-sans" style={{ color: "hsl(0 0% 98%)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 98% / 0.6)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">Let our experts guide you to the perfect investment. Schedule a free consultation today.</p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">Schedule Consultation <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
