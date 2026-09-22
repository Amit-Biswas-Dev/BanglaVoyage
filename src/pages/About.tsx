const About = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-slate-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          About BanglaVoyage
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Discover Bangladesh, one journey at a time.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Who We Are
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          BanglaVoyage is a travel platform designed to help travelers
          discover destinations, explore tour packages, and plan
          memorable journeys across Bangladesh.
        </p>
      </div>

    </div>
  );
};

export default About;