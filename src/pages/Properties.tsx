import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BedDouble, Bath, Maximize, ArrowRight, Search, LayoutGrid, List } from "lucide-react";
import Layout from "@/components/Layout";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const allProperties = [
  { id: 1, image: property1, title: "Skyline Penthouse", location: "Manhattan, New York", price: "$4,500,000", priceNum: 4500000, beds: 4, baths: 3, sqft: "3,200", status: "For Sale", type: "Residential" },
  { id: 2, image: property2, title: "Beachfront Villa", location: "Turks & Caicos", price: "$6,800,000", priceNum: 6800000, beds: 5, baths: 4, sqft: "4,800", status: "For Sale", type: "Residential" },
  { id: 3, image: property3, title: "Corporate Tower Suite", location: "Downtown Business District", price: "$2,200,000", priceNum: 2200000, beds: 0, baths: 2, sqft: "5,500", status: "For Lease", type: "Commercial" },
  { id: 4, image: property1, title: "Luxury Condo", location: "Miami Beach, FL", price: "$1,950,000", priceNum: 1950000, beds: 3, baths: 2, sqft: "2,100", status: "For Sale", type: "Residential" },
  { id: 5, image: property2, title: "Island Estate", location: "Caribbean Islands", price: "$12,500,000", priceNum: 12500000, beds: 7, baths: 6, sqft: "8,200", status: "For Sale", type: "Residential" },
  { id: 6, image: property3, title: "Office Complex", location: "Silicon Valley, CA", price: "$8,900,000", priceNum: 8900000, beds: 0, baths: 4, sqft: "12,000", status: "For Lease", type: "Commercial" },
];

const Properties = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = allProperties.filter((p) => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <Layout>
      <section className="pt-28 pb-12 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 98%)" }}>Property Listings</h1>
          <p style={{ color: "hsl(0 0% 98% / 0.7)" }}>Browse our exclusive collection of premium properties</p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search properties..."
                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-secondary text-secondary-foreground text-sm rounded-md px-3 py-2 border border-border"
            >
              <option>All</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-secondary text-secondary-foreground text-sm rounded-md px-3 py-2 border border-border"
            >
              <option>All</option>
              <option>For Sale</option>
              <option>For Lease</option>
            </select>
            <div className="flex gap-1">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-md ${view === "grid" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-md ${view === "list" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-4"}>
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group bg-card rounded-lg overflow-hidden shadow-sm border border-border hover-lift ${
                  view === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${view === "list" ? "h-48 md:h-auto md:w-72 shrink-0" : "h-64"}`}>
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
                <div className="p-6 flex-1">
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
                  <Button variant="gold-outline" size="sm" className="mt-4">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
