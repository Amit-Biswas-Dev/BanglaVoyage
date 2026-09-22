const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500">
          Login to your BanglaVoyage account.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;