
import { LockKeyhole, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Django authentication will be connected here later.
    console.log("Login submitted");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Stephen<span className="text-green-400">.</span>
          </a>

          <p className="mt-3 text-sm text-gray-500">
            Admin Management
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Sign in to manage your portfolio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Username
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-green-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-green-400"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm text-green-400 transition hover:text-green-300"
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-green-400 py-3.5 font-semibold text-black transition duration-300 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/10"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Back to portfolio */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-gray-600 transition hover:text-green-400"
          >
            ← Back to portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
