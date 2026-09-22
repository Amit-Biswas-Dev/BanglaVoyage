import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Login Data Submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google OAuth trigger
    console.log("Google Sign-In Clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
        
        {/* Header */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Log in to your <span className="font-medium text-orange-600">BanglaVoyage</span> account.
          </p>
        </div>

        {/* Social Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 active:scale-[0.99]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-slate-400 font-medium">Or log in with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition duration-150 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 pl-4 pr-11 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition duration-150 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500/20"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-xs text-slate-600 font-medium">
                Remember me
              </label>
            </div>

            <a href="/forgot-password" className="text-xs font-semibold text-orange-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-orange-500/20 mt-2"
          >
            Log In
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <a href="/register" className="font-semibold text-orange-600 hover:underline">
            Create account
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;