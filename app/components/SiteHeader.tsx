import Link from "next/link";
import { APP_STORE_URL } from "../lib/constants";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-6">
      <Link href="/" className="group flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neon-yellow">
          FD
        </span>
        <span className="text-lg font-semibold tracking-[0.12em] text-white/90">
          FIDGET DOODLE
        </span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] text-white/60 md:flex">
        <Link href="/privacy-policy" className="transition hover:text-white">
          Privacy
        </Link>
        <Link
          href="/terms-and-conditions"
          className="transition hover:text-white"
        >
          Terms
        </Link>
      </nav>
      <a
        href={APP_STORE_URL}
        className="neon-border-green hidden items-center justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.02] md:inline-flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        App Store
      </a>
    </header>
  );
}
