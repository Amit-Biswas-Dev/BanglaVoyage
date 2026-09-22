import {
  MapPin,
  Heart,
  Compass,
  ShieldCheck,
  Users,
  Mountain,
  ArrowRight,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-center text-white">

        {/* Background Decoration */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-5 inline-block rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
            🇧🇩 Explore Bangladesh
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            About{" "}
            <span className="text-emerald-400">
              BanglaVoyage
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover the beauty, culture, history, and hidden treasures
            of Bangladesh — one unforgettable journey at a time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/destinations"
              className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Explore Destinations
              <ArrowRight size={18} />
            </a>

            <a
              href="/packages"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Tour Packages
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=900&q=80"
              alt="Beautiful travel destination"
              className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 p-3 text-emerald-600">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    64
                  </p>
                  <p className="text-sm text-slate-500">
                    Districts to Explore
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Your Gateway to the Wonders of Bangladesh
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              BanglaVoyage is a travel platform created to help travelers
              discover the incredible beauty of Bangladesh. From the
              world's longest natural sea beach to peaceful tea gardens,
              historic landmarks, and vibrant cultural destinations,
              we bring the country's travel experiences together in one place.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you are planning a family vacation, a solo adventure,
              or a weekend escape, BanglaVoyage makes it easier to explore
              destinations, discover tour packages, and plan memorable trips.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-3 text-emerald-600">
                <Heart size={24} />
              </div>

              <p className="font-semibold text-slate-800">
                Travel more. Discover more. Love Bangladesh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600">
                <Compass size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To make traveling across Bangladesh easier, more accessible,
                and more enjoyable by providing useful destination information,
                tour packages, and travel-planning resources.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                <Mountain size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become a trusted digital travel companion for discovering
                Bangladesh's natural beauty, rich heritage, diverse culture,
                and unforgettable experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Why BanglaVoyage?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Everything You Need for Your Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We bring together helpful travel resources to make your
            Bangladesh adventure easier to plan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Feature 1 */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <MapPin size={28} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Amazing Destinations
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Discover beaches, hills, forests, rivers, and historical places.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Compass size={28} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Easy Trip Planning
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Find useful information to organize your next adventure.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShieldCheck size={28} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Reliable Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Access organized travel details for a smoother experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Users size={28} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              For Every Traveler
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Whether solo, with friends, or with family, find your adventure.
            </p>
          </div>

        </div>
      </section>

      {/* Travel Stats */}
      <section className="bg-emerald-600 px-6 py-16 text-white">

        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">

          <div>
            <h3 className="text-4xl font-extrabold">64+</h3>
            <p className="mt-2 text-emerald-100">
              Districts to Discover
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">100+</h3>
            <p className="mt-2 text-emerald-100">
              Travel Experiences
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">1</h3>
            <p className="mt-2 text-emerald-100">
              Beautiful Bangladesh
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-16 text-center text-white shadow-xl">

          <div className="mb-5 flex justify-center text-yellow-400">
            <Star size={36} fill="currentColor" />
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            Your Next Adventure Starts Here
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Pack your bags, explore new places, and experience the
            unforgettable beauty of Bangladesh with BanglaVoyage.
          </p>

          <a
            href="/destinations"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-semibold transition hover:bg-emerald-600"
          >
            Start Exploring
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </div>
  );
};

export default About;