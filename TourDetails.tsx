const quickInfo = [
  ["Duration", "7 Days / 6 Nights"],
  ["Group Size", "2–15 People"],
  ["Difficulty", "Moderate"],
  ["Best Time", "Mar – Oct"],
];

const highlights = [
  "Scenic mountain viewpoints",
  "Professional local guide",
  "Authentic local cuisine",
  "Cultural village experiences",
  "Comfortable accommodation",
  "Private transportation",
  "Photography opportunities",
  "Flexible free time",
];

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival & Welcome",
    description:
      "Arrive at the destination, meet your guide, transfer to your hotel, and enjoy a welcome dinner.",
  },
  {
    day: "Day 02",
    title: "Mountain Exploration",
    description:
      "Start the adventure with a guided mountain excursion featuring panoramic views and scenic trails.",
  },
  {
    day: "Day 03",
    title: "Village & Cultural Experience",
    description:
      "Visit local communities, learn about traditional lifestyles, and enjoy an authentic local lunch.",
  },
  {
    day: "Day 04",
    title: "Adventure Day",
    description:
      "Enjoy outdoor activities and explore some of the region's most beautiful natural attractions.",
  },
  {
    day: "Day 05",
    title: "Scenic Discovery",
    description:
      "Travel through spectacular landscapes and visit several hidden gems away from the main tourist routes.",
  },
  {
    day: "Day 06",
    title: "Relax & Free Time",
    description:
      "Take a relaxed day to explore independently, shop for souvenirs, or simply enjoy your surroundings.",
  },
  {
    day: "Day 07",
    title: "Departure",
    description:
      "Enjoy breakfast before your scheduled transfer to the airport or your next destination.",
  },
];

const included = [
  "6 nights hotel accommodation",
  "Daily breakfast",
  "Airport transfers",
  "Professional tour guide",
  "Private transportation",
  "Selected entrance fees",
  "Welcome dinner",
];

const excluded = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Lunch and dinner except where mentioned",
  "Optional activities",
  "Tips and gratuities",
];

const TourDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Mountain landscape"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              Adventure • 7 Days / 6 Nights
            </span>

            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Explore the Majestic Mountains
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Experience breathtaking landscapes, local culture, unforgettable
              adventures, and carefully selected destinations.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#booking"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book This Tour
              </a>

              <a
                href="#itinerary"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                View Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {quickInfo.map(([label, value]) => (
            <div key={label} className="border-r px-6 py-6 text-center">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold">Tour Overview</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Discover spectacular natural landscapes on this unforgettable
                journey. Explore scenic mountain trails, peaceful villages,
                local cuisine, and unique cultural experiences.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our experienced guides help you explore each destination safely
                while giving you plenty of time to enjoy the scenery.
              </p>
            </section>

            {/* Highlights */}
            <section className="mt-14">
              <h2 className="text-3xl font-bold">Tour Highlights</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border bg-white p-4"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section id="itinerary" className="mt-14">
              <h2 className="text-3xl font-bold">Tour Itinerary</h2>

              <div className="mt-8 space-y-5">
                {itinerary.map(({ day, title, description }) => (
                  <article
                    key={day}
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <span className="h-fit rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-600">
                        {day}
                      </span>

                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Included */}
            <section className="mt-14">
              <h2 className="text-3xl font-bold">What's Included?</h2>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-lg font-bold text-green-800">
                    Included
                  </h3>

                  <ul className="mt-4 space-y-3 text-green-900">
                    {included.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                  <h3 className="text-lg font-bold text-red-800">
                    Not Included
                  </h3>

                  <ul className="mt-4 space-y-3 text-red-900">
                    {excluded.map((item) => (
                      <li key={item}>× {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Info */}
            <section className="mt-14">
              <h2 className="text-3xl font-bold">Important Information</h2>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <ul className="space-y-3 text-sm text-amber-900">
                  <li>• Valid passport or required travel documents are necessary.</li>
                  <li>• Arrive at the meeting point 30 minutes before departure.</li>
                  <li>• Weather may occasionally affect the itinerary.</li>
                  <li>• Travelers should be comfortable with moderate activity.</li>
                  <li>• Inform us about dietary requirements before the trip.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Booking */}
          <aside id="booking">
            <div className="sticky top-8 overflow-hidden rounded-2xl border bg-white shadow-lg">
              <div className="bg-blue-600 p-6 text-white">
                <p className="text-sm text-blue-100">Starting from</p>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">$899</span>
                  <span className="mb-1 text-blue-100">/ person</span>
                </div>

                <p className="mt-2 text-sm text-blue-100">
                  Taxes and selected fees included
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">Book Your Tour</h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium">
                      Travel Date
                    </label>

                    <input
                      type="date"
                      className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Travelers
                    </label>

                    <select className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500">
                      {[1, 2, 3, 4].map((count) => (
                        <option key={count}>
                          {count} {count === 1 ? "Traveler" : "Travelers"}
                        </option>
                      ))}
                      <option>5+ Travelers</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-lg bg-blue-600 px-5 py-3.5 font-semibold text-white hover:bg-blue-700"
                  >
                    Check Availability
                  </button>
                </div>

                <div className="mt-6 space-y-3 border-t pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Free cancellation</span>
                    <span className="text-green-600">Available</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Instant confirmation
                    </span>
                    <span>Yes</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Support</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for Your Next Adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Reserve your spot today and get ready for an unforgettable
            adventure.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Start Your Booking
          </a>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;