import Link from "next/link";
import { Button } from "../components/Button";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FFF5F7 100%)" }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="font-serif text-2xl text-warm-900 tracking-tight">
            Mad for Makeup
          </Link>
          <p className="text-warm-400 text-sm mt-2">Sign in to your account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="w-full bg-white border border-warm-200 rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full bg-white border border-warm-200 rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150"
            />
          </div>

          <Button variant="primary" fullWidth type="submit">
            Sign in
          </Button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <Link href="/login" className="text-mad-rose-500 text-sm hover:underline underline-offset-2">
            Forgot password?
          </Link>
          <p className="text-warm-400 text-sm">
            No account?{" "}
            <Link href="/signup" className="text-warm-700 hover:text-warm-900 font-medium">
              Join free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
