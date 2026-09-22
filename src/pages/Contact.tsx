const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="bg-slate-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Have a question? Get in touch with BanglaVoyage.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">

        <form className="rounded-2xl bg-white p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block font-medium text-slate-700">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;