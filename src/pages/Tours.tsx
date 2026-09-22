import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Share2,
  Heart,
  CheckCircle2,
  XCircle,
  Calendar,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Globe,
  Info,
} from "lucide-react"; // npm install lucide-react

const TourDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openItineraryDay, setOpenItineraryDay] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // Mock Tour Data for BanglaVoyage
  const tour = {
    title: "Sreemangal Tea Gardens & Lawachara Forest Expedition",
    location: "Sreemangal, Moulvibazar, Sylhet",
    rating: 4.9,
    reviewsCount: 128,
    duration: "3 Days / 2 Nights",
    groupSize: "Max 12 People",
    language: "English, Bengali",
    pricePerPerson: 12500, // in BDT
    discountPrice: 10500,
    heroImages: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582650625119-3a31f8418b0d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=600&auto=format&fit=crop",
    ],
    overview:
      "Escape into the lush green expanse of Sreemangal, the Tea Capital of Bangladesh. Immerse yourself in endless rolling tea plantations, trek through Lawachara National Park in search of rare Hoolock Gibbons, taste the iconic 7-layer tea at Nilkantha Tea Cabin, and experience authentic tribal culture in Baikka Beel wetland reserve.",
    highlights: [
      "Guided wildlife trek inside Lawachara Rain Forest",
      "Sunset cycle ride through Nurjahan Tea Estate",
      "Traditional Khasia tribal village visit & cultural exchange",
      "Birdwatching at Baikka Beel Sanctuary",
      "Taste the famous 7-layer tea & local Sylheti cuisine",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dhaka to Sreemangal & Tea Estate Sunset Walk",
        description:
          "Depart early from Dhaka via AC transport. Arrive at Sreemangal eco-resort by midday. After local lunch, enjoy a relaxed evening walk through rolling tea estates and sample fresh green tea.",
      },
      {
        day: "Day 2",
        title: "Lawachara Rain Forest Trek & Khasia Village",
        description:
          "Morning wildlife trek inside Lawachara National Park with an expert naturalist. Visit the nearby Khasia tribal village to learn about betel leaf cultivation. Afternoon visit to Baikka Beel wetland.",
      },
      {
        day: "Day 3",
        title: "Seven-Layer Tea Experience & Return to Dhaka",
        description:
          "Visit Nilkantha Tea Cabin to experience the legendary multi-layered tea. Pick up local tea souvenirs and organic pineapple snacks before heading back to Dhaka by evening.",
      },
    ],
    inclusions: [
      "2 Nights eco-resort accommodation (Twin sharing)",
      "All meals (Breakfast, Lunch, Dinner with traditional dishes)",
      "AC Vehicle for Dhaka-Sreemangal round trip & local transfers",
      "Licensed eco-guide & forest permit fees",
      "Complimentary Seven-Layer Tea tasting",
    ],
    exclusions: [
      "Personal expenses & tipping",
      "Any video camera permits inside forest",
      "Travel insurance",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Header Container */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <nav className="flex text-sm text-slate-500">
            <a href="/" className="hover:text-orange-600 transition">Tours</a>
            <span className="mx-2">/</span>
            <a href="/sylhet" className="hover:text-orange-600 transition">Sylhet</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Sreemangal</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
              {isSaved ? "Saved" : "Save"}
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>

        {/* Title Section */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {tour.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="h-4 w-4 fill-amber-400" />
              <span>{tour.rating}</span>
              <span className="text-slate-500 font-normal">({tour.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-slate-600">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span>{tour.location}</span>
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="mt-6 grid grid-cols-1 gap-3 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2 h-[380px] sm:h-[450px]">
          <div className="relative md:col-span-2 md:row-span-2">
            <img
              src={tour.heroImages[0]}
              alt="Tea Gardens"
              className="h-full w-full object-cover transition duration-300 hover:opacity-95"
            />
          </div>
          <div className="hidden md:block md:col-span-1">
            <img
              src={tour.heroImages[1]}
              alt="Lawachara Forest"
              className="h-full w-full object-cover transition duration-300 hover:opacity-95"
            />
          </div>
          <div className="hidden md:block md:col-span-1">
            <img
              src={tour.heroImages[2]}
              alt="Wetlands"
              className="h-full w-full object-cover transition duration-300 hover:opacity-95"
            />
          </div>
          <div className="hidden md:block md:col-span-2">
            <img
              src={tour.heroImages[3]}
              alt="Seven Layer Tea"
              className="h-full w-full object-cover transition duration-300 hover:opacity-95"
            />
          </div>
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* Left Side Details */}
          <div className="lg:col-span-2">
            
            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100 sm:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Duration</p>
                  <p className="text-sm font-semibold text-slate-800">{tour.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Group Size</p>
                  <p className="text-sm font-semibold text-slate-800">{tour.groupSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Languages</p>
                  <p className="text-sm font-semibold text-slate-800">{tour.language}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Guided</p>
                  <p className="text-sm font-semibold text-slate-800">Verified Host</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-8 border-b border-slate-200">
              <nav className="flex gap-8">
                {["overview", "itinerary", "inclusions"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-semibold capitalize transition ${
                      activeTab === tab
                        ? "border-b-2 border-orange-500 text-orange-600"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Contents */}
            <div className="py-6 space-y-8">
              
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">About this Experience</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{tour.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Tour Highlights</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Itinerary Tab */}
              {activeTab === "itinerary" && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Day-by-Day Schedule</h3>
                  <div className="space-y-3">
                    {tour.itinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-white overflow-hidden transition"
                      >
                        <button
                          onClick={() => setOpenItineraryDay(openItineraryDay === idx ? null : idx)}
                          className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          <div className="flex items-center gap-3">
                            <span className="rounded-lg bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-600">
                              {item.day}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          {openItineraryDay === idx ? (
                            <ChevronUp className="h-5 w-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-400" />
                          )}
                        </button>
                        {openItineraryDay === idx && (
                          <div className="border-t border-slate-100 bg-slate-50/50 p-4 text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions Tab */}
              {activeTab === "inclusions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5">
                    <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" /> What's Included
                    </h4>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {tour.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2"></span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-rose-100 bg-rose-50/30 p-5">
                    <h4 className="font-bold text-rose-900 flex items-center gap-2 mb-3">
                      <XCircle className="h-5 w-5 text-rose-600" /> What's Excluded
                    </h4>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {tour.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2"></span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Host Section */}
            <div className="mt-8 rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                alt="Guide"
                className="h-14 w-14 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Tour Organizer</p>
                <h4 className="text-base font-bold text-slate-900">BanglaVoyage Official Guides</h4>
                <p className="text-xs text-slate-500 mt-0.5">Certified eco-tourism guides in Bangladesh with 5+ years experience.</p>
              </div>
            </div>

          </div>

          {/* Right Sticky Booking Card */}
          <div>
            <div className="sticky top-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="text-2xl font-bold text-slate-900">৳{tour.discountPrice.toLocaleString()}</span>
                  <span className="ml-2 text-sm text-slate-400 line-through">৳{tour.pricePerPerson.toLocaleString()}</span>
                  <p className="text-xs text-slate-500 mt-0.5">per person / all inclusive</p>
                </div>
                <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-600">
                  Save ৳{(tour.pricePerPerson - tour.discountPrice).toLocaleString()}
                </span>
              </div>

              {/* Booking Inputs */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                    Select Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                    Guests
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4+ Group Booking</option>
                  </select>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="mt-6 rounded-xl bg-slate-50 p-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>৳{tour.discountPrice.toLocaleString()} x 1 traveler</span>
                  <span>৳{tour.discountPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Service fee</span>
                  <span>৳0</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-900 text-base">
                  <span>Total Amount</span>
                  <span className="text-orange-600">৳{tour.discountPrice.toLocaleString()}</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-lg active:scale-[0.99]">
                Book Tour Now
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Info className="h-4 w-4 text-slate-400" />
                <span>Free cancellation up to 48 hours before trip</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TourDetails;