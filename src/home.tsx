import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaSearch,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const destinations = [
  {
    name: "Cox's Bazar",
    location: "Chattogram",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    tours: "24 Tours",
  },
  {
    name: "Sajek Valley",
    location: "Rangamati",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    tours: "18 Tours",
  },
  {
    name: "Sylhet",
    location: "Sylhet",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    tours: "16 Tours",
  },
  {
    name: "Bandarban",
    location: "Chattogram",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    tours: "21 Tours",
  },
];

const packages = [
  {
    title: "Cox's Bazar Sea Beach Tour",
    location: "Cox's Bazar, Bangladesh",
    duration: "3 Days / 2 Nights",
    price: "৳6,500",
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sajek Valley Adventure",
    location: "Rangamati, Bangladesh",
    duration: "2 Days / 1 Night",
    price: "৳4,200",
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sylhet Nature Escape",
    location: "Sylhet, Bangladesh",
    duration: "3 Days / 2 Nights",
    price: "৳5,800",
    rating: 4.9,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[680px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <FaMapMarkerAlt className="text-orange-400" />
              Discover Bangladesh
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Explore Bangladesh,
              <span className="block text-orange-400">
                Create Memories.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Discover the beauty of Bangladesh with Bangla Voyage.
              Find amazing destinations, exciting tour packages, and
              unforgettable travel experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600">
                Explore Tours
                <FaArrowRight />
              </button>

              <button className="rounded-xl border border-white/60 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
                View Destinations
              </button>
            </div>
          </div>
        </div>

        {/* ================= SEARCH BOX ================= */}
        <div className="absolute bottom-[-55px] left-1/2 w-[92%] max-w-6xl -translate-x-1/2">
          <div className="rounded-2xl bg-white p-5 shadow-2xl md:p-6">
            <div className="grid gap-4 md:grid-cols-4">
              {/* Destination */}
              <div className="rounded-xl border border-slate-200 p-3">
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-400">
                  Destination
                </label>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" />

                  <select className="w-full bg-transparent text-sm font-medium outline-none">
                    <option>Select destination</option>
                    <option>Cox's Bazar</option>
                    <option>Sajek Valley</option>
                    <option>Sylhet</option>
                    <option>Bandarban</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="rounded-xl border border-slate-200 p-3">
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-400">
                  Travel Date
                </label>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-orange-500" />

                  <input
                    type="date"
                    className="w-full bg-transparent text-sm font-medium outline-none"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="rounded-xl border border-slate-200 p-3">
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-400">
                  Travelers
                </label>

                <div className="flex items-center gap-2">
                  <FaUsers className="text-orange-500" />

                  <select className="w-full bg-transparent text-sm font-medium outline-none">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                </div>
              </div>

              {/* Search */}
              <button className="flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-orange-500">
                <FaSearch />
                Search Tours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-semibold text-orange-500">
              EXPLORE BANGLADESH
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Popular Destinations
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Discover some of the most beautiful places Bangladesh has
              to offer.
            </p>
          </div>

          <button className="hidden items-center gap-2 font-semibold text-orange-500 md:flex">
            View All
            <FaArrowRight />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative h-[330px] overflow-hidden rounded-2xl"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="mb-1 text-sm text-white/70">
                  {destination.location}
                </p>

                <h3 className="text-2xl font-bold">
                  {destination.name}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {destination.tours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 font-semibold text-orange-500">
              OUR TOUR PACKAGES
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Find Your Perfect Trip
            </h2>

            <p className="mt-3 text-slate-500">
              Carefully designed tour packages for unforgettable
              experiences.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((tour) => (
              <div
                key={tour.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-orange-500">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    <FaMapMarkerAlt className="text-orange-500" />
                    {tour.location}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {tour.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-b pb-4">
                    <span className="text-sm text-slate-500">
                      {tour.duration}
                    </span>

                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">
                        {tour.rating}
                      </span>

                      <span className="text-sm text-slate-400">
                        ({tour.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">
                        Starting from
                      </p>

                      <p className="text-2xl font-bold text-orange-500">
                        {tour.price}
                      </p>
                    </div>

                    <button className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold text-orange-500">
              WHY BANGLA VOYAGE
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Travel More.
              <br />
              Experience More.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              We make discovering Bangladesh simple, comfortable,
              and memorable. From choosing your destination to
              booking your trip, Bangla Voyage is here to help.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Handpicked tour packages",
                "Affordable and transparent pricing",
                "Experienced local travel support",
                "Easy and secure booking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-orange-500" />
                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Learn More
              <FaArrowRight />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-orange-50 p-8">
              <p className="text-4xl font-extrabold text-orange-500">
                50+
              </p>
              <p className="mt-2 text-slate-600">
                Destinations
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-4xl font-extrabold text-slate-900">
                2K+
              </p>
              <p className="mt-2 text-slate-600">
                Happy Travelers
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-4xl font-extrabold text-slate-900">
                100+
              </p>
              <p className="mt-2 text-slate-600">
                Tour Packages
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-8">
              <p className="text-4xl font-extrabold text-orange-500">
                4.9
              </p>
              <p className="mt-2 text-slate-600">
                Average Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center text-white md:px-16">
          <div className="relative z-10">
            <p className="font-semibold text-orange-400">
              YOUR NEXT ADVENTURE AWAITS
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
              Ready to explore Bangladesh?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Choose your destination, pack your bags, and let
              Bangla Voyage take care of the rest.
            </p>

            <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 md:flex-row lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold">
              Bangla<span className="text-orange-500">Voyage</span>
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Discover Bangladesh, one journey at a time.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Bangla Voyage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;