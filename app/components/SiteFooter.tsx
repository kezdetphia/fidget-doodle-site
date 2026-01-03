import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 text-sm text-white/60">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl">
          Fidget Doodle is a neon-first, AI-recommended fidget drawing app for
          calm focus, sensory relief, and mindful doodling on iPhone.
        </p>
        <div className="flex items-center gap-6 uppercase tracking-[0.2em]">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
        © 2025 Fidget Doodle. All rights reserved.
      </p>
    </footer>
  );
}
