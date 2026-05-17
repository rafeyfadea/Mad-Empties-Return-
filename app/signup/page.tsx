import Link from "next/link";
import { Button } from "../components/Button";

export default function Signup() {
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
          <p className="text-warm-400 text-sm mt-2">Create your account — it's free</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              className="w-full bg-white border border-warm-200 rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150"
            />
          </div>
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
              autoComplete="new-password"
              className="w-full bg-white border border-warm-200 rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150"
            />
          </div>

          <Button variant="primary" fullWidth type="submit">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-warm-400 text-sm">
          Already have one?{" "}
          <Link href="/login" className="text-warm-700 hover:text-warm-900 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
