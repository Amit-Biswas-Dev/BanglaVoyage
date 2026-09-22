import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Compass,
  ArrowRight,
  Sparkles,
  TreePine,
  Sun,
  Mountain,
  Building2,
  Calendar,
} from "lucide-react"; // npm install lucide-react

// Destination dataset tailored for Bangladesh
const DESTINATIONS_DATA = [
  {
    id: "coxs-bazar",
    name: "Cox's Bazar",
    division: "Chittagong",
    category: "Beaches",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    toursCount: 24,
    startingPrice: 8500,
    rating: 4.8,
    tagline: "World's longest natural sea beach stretching over 120 km.",
    highlights: ["Inani Beach", "Marine Drive", "Himchari Waterfalls"],
    popularSeason: "Nov - Mar",
  },
  {
    id: "sreemangal",
    name: "Sreemangal",
    division: "Sylhet",
    category: "Tea Gardens",
    image:
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
    toursCount: 18,
    startingPrice: 10500,
    rating: 4.9,
    tagline: "The Tea Capital of Bangladesh wrapped in rolling green hills.",
    highlights: ["Lawachara Rainforest", "Baikka Beel", "7-Layer Tea"],
    popularSeason: "Sep - Feb",
  },
  {
    id: "sundarbans",
    name: "Sundarbans",
    division: "Khulna",
    category: "Forests & Wildlife",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
    toursCount: 12,
    startingPrice: 16000,
    rating: 4.9,
    tagline: "The world's largest mangrove forest and home to Royal Bengal Tigers.",
    highlights: ["Katamka Beach", "Hiron Point", "Tiger Tracking Boat Safari"],
    popularSeason: "Oct - Mar",
  },
  {
    id: "sajek-valley",
    name: "Sajek Valley",
    division: "Rangamati",
    category: "Hills & Trails",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    toursCount: 15,
    startingPrice: 9200,
    rating: 4.9,
    tagline: "Roof of Rangamati where clouds dance right at your doorstep.",
    highlights: ["Konglak Pahar", "Helipad Sunset", "Tribal Cuisine"],
    popularSeason: "All Year",
  },
  {
    id: "saint-martins",
    name: "Saint Martin's Island",
    division: "Chittagong",
    category: "Beaches",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    toursCount: 10,
    startingPrice: 11000,
    rating: 4.7,
    tagline: "Bangladesh's only coral island surrounded by crystal clear waters.",
    highlights: ["Chera Dwip", "Coral Reef Snorkeling", "Fresh Coconut Coast"],
    popularSeason: "Nov - Feb",
  },
  {
    id: "panam-city",
    name: "Sonargaon & Panam City",
    division: "Dhaka",
    category: "Heritage & History",
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f8418b0d?q=80&w=800&auto=format&fit=crop",
    toursCount: 8,
    startingPrice: 3500,
    rating: 4.6,
    tagline: "Lost 19th-century merchant city boasting exquisite colonial architecture.",
    highlights: ["Folk Art Museum", "Panam Nagar Ruins", "Meghna River Ride"],
    popularSeason: "Oct - Mar",
  },
];

const CATEGORIES = [
  { name: "All", icon: Compass },
  { name: "Beaches", icon: Sun },
  { name: "Hills & Trails", icon: Mountain },
  { name: "Tea Gardens", icon: TreePine },
  { name: "Forests & Wildlife", icon: Sparkles },
  { name: "Heritage & History", icon: Building2 },
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.division.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || dest.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-slate-900 px-6 py-20 text-center text-white sm:py-28">
        {/* Subtle Background Accent */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400 border border-orange-500/20 mb-4">
            <Compass className="h-4 w-4" /> Explore Bangladesh
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Discover Beautiful <span className="text-orange-500">Destinations</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            From the world's longest natural sandy beach to lush rolling tea gardens, plan your next memorable voyage across Bangladesh.
          </p>

          {/* Search Box Component */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by destination (e.g. Sreemangal, Cox's Bazar)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl bg-white/10 py-4 pl-12 pr-4 text-sm text-white placeholder-slate-400 backdrop-blur-md border border-white/20 outline-none transition focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-4 focus:ring-orange-500/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Popular Destinations
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredDestinations.length} places you can visit today
            </p>
          </div>
        </div>

        {/* Destinations Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((dest) => (
              <a
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {dest.division} Division
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      {dest.toursCount} Tours
                    </span>
                  </div>

                  {/* Title over Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white drop-shadow-sm">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {dest.tagline}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dest.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-medium uppercase text-slate-400 block">Starting from</span>
                      <span className="text-base font-bold text-slate-900">
                        ৳{dest.startingPrice.toLocaleString()}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="mt-16 text-center py-12 rounded-2xl bg-white border border-slate-200/80">
            <MapPin className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">No destinations found</h3>
            <p className="mt-1 text-sm text-slate-500">
              We couldn't find anything matching "{searchQuery}". Try searching for another region.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 rounded-xl bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Destinations;