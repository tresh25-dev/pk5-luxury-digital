import { motion } from "framer-motion";
import { Shield, Target, Users, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import princeImg from "../../src/assets/princeImg.jpg";
import peterImg from "../../src/assets/peterImg.jpg";
import alozieImg from "../../src/assets/alozieImg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
} as const;

const team = [
  { name: "Peter Kimani", role: "Founder & CEO", initials: "PK" },
  { name: "Amara Johnson", role: "Head of Sales", initials: "AJ" },
  { name: "David Osei", role: "Investment Advisor", initials: "DO" },
  { name: "Lisa Chen", role: "Property Manager", initials: "LC" },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-28 pb-12 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 98%)" }}>About PK5 Real Estate</h1>
          <p style={{ color: "hsl(0 0% 98% / 0.7)" }}>Building trust through premium real estate experiences since 2026</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">A Legacy of Excellence</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Founded in 2026, PK5 Real Estate has grown from a focused property advisory firm into one of the most respected names in luxury real estate. We’ve helped hundreds of clients secure standout properties and make smart investment decisions across residential, commercial, and development sectors
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-sans">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">To set a higher standard in real estate by presenting exceptional, high-quality and unmatched service through by expertise, commitment, and integrity.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-sans">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">To be the most trusted and innovative real estate brand globally, setting new standards in property excellence and client satisfaction.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Meet the Experts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Prince Nnaemeka Njoku", role: "CEO & Founder", image: princeImg },
              { name: "Peter Eziakor", role: "Head of Facilities & Production", image: peterImg },
              { name: "Alozie Okwukanma", role: "Head of IT", image: alozieImg },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-lg bg-card shadow-sm border border-border text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-[50%_15%]"
                  />

                </div>


                <h3 className="text-lg font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust Badges */}
      <section className="py-16 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: "Licensed & Certified" },
              { icon: CheckCircle, label: "BBB Accredited" },
              { icon: Users, label: "500+ Happy Clients" },
              { icon: Shield, label: "Insured & Bonded" },
            ].map((badge, i) => (
              <motion.div key={badge.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="flex flex-col items-center gap-2">
                <badge.icon className="w-8 h-8 text-accent" />
                <span className="text-sm font-medium" style={{ color: "hsl(0 0% 98% / 0.8)" }}>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
