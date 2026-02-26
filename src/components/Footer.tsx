import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">PK5</h3>
            <p className="text-gradient-gold font-serif text-sm mb-4">Real Estate</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium properties and smart investments. Your trusted partner in luxury real estate since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["Luxury Residential", "Commercial Real Estate", "Land Sales", "Property Management", "Investment Advisory"].map((s) => (
                <span key={s} className="text-sm text-primary-foreground/70">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                +2348026133205
              </a>
              <a href="mailto:info@pk5realestate.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                info@pk5realestate.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>  Head Office: 5901 Peachtree <br/> Dunwoody Road, Suite A310,<br/>  Atlanta,  GA 30328, USA </span>

   
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2025 PK5 Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <span key={t} className="text-sm text-primary-foreground/50 hover:text-accent cursor-pointer transition-colors">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
