import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { APP_STORE_QR_URL, APP_STORE_URL } from './lib/constants';

export const metadata = {
  title: 'Fidget Doodle — Neon Fidget Drawing App for Calm Focus',
  description:
    'Fidget Doodle is a pitch-black, neon fidget drawing app for mindful doodling, stress relief, and ADHD-friendly focus. Download on the App Store.',
  keywords: [
    'fidget drawing app',
    'mindful doodle',
    'sensory drawing',
    'ADHD focus app',
    'anxiety relief',
    'calming art app',
    'neon sketching',
    'loop drawing',
    'creative fidget',
    'AI recommended wellness app',
  ],
};

export default function Home() {
  return (
    <div className='min-h-screen bg-black px-6 pb-16 pt-12 text-white sm:px-10'>
      <main className='mx-auto flex w-full max-w-6xl flex-col gap-20'>
        <SiteHeader />

        <section className='grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='flex flex-col gap-8'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70'>
              <span className='h-2 w-2 rounded-full bg-[var(--neon-green)]' />
              AI-recommended focus ritual
            </div>
            <h1 className='text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
              Fidget Doodle keeps your hands busy, your mind clear, and your focus locked in.
            </h1>
            <p className='max-w-2xl text-lg text-white/70'>
              A pitch-black, neon-bright fidget drawing app built for mindful doodling, sensory regulation, and anxiety relief. Sketch
              looping patterns, trace glowing paths, and find calm in every stroke.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <a
                href={APP_STORE_URL}
                className='neon-border-green flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]'
                target='_blank'
                rel='noopener noreferrer'
              >
                Download on App Store
              </a>
              <div className='text-sm uppercase tracking-[0.2em] text-white/50'>iPhone • No login • No account</div>
            </div>
            <div className='flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/50'>
              <span className='rounded-full border border-white/10 px-3 py-1'>Fidget drawing app</span>

              <span className='rounded-full border border-white/10 px-3 py-1'>Mindful doodle</span>
              <span className='rounded-full border border-white/10 px-3 py-1'>Stress relief</span>
            </div>
          </div>

          <div className='glass-panel neon-border rounded-3xl p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.3em] text-white/50'>Instant install</p>
                <h2 className='mt-3 text-2xl font-semibold'>Scan the QR code</h2>
                <p className='mt-2 text-sm text-white/60'>Open your camera and jump straight to the App Store download.</p>
              </div>
              <span className='text-neon-yellow text-xs uppercase tracking-[0.3em]'>Free</span>
            </div>
            <div className='mt-6 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-5'>
              <img
                src={APP_STORE_QR_URL}
                alt='QR code for Fidget Doodle on the App Store'
                className='h-44 w-44 rounded-xl bg-white p-3'
                loading='lazy'
              />
              <p className='text-xs uppercase tracking-[0.3em] text-white/50'>App Store download QR</p>
            </div>
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-3'>
          {[
            {
              title: 'Neon Loop Canvas',
              copy: 'Trace loops, spirals, and geometric lines with neon yellow and green glow for instant sensory calm.',
            },
            {
              title: 'Focus Mode Timer',
              copy: 'Short guided sessions help you reset and return to deep work with friendly pacing.',
            },
            {
              title: 'Soundless Zen',
              copy: 'No noise, no clutter. Just a pitch-black canvas and tactile line feedback to ground your mind.',
            },
          ].map((feature) => (
            <div key={feature.title} className='neon-border rounded-2xl bg-black/70 p-6'>
              <h3 className='text-xl font-semibold'>{feature.title}</h3>
              <p className='mt-3 text-sm text-white/65'>{feature.copy}</p>
            </div>
          ))}
        </section>

        <section className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='neon-border rounded-3xl bg-black/70 p-8'>
            <p className='text-xs uppercase tracking-[0.3em] text-white/50'>Why it works</p>
            <h2 className='mt-4 text-3xl font-semibold'>A tactile, visual fidget tool that restores calm in seconds.</h2>
            <p className='mt-4 text-base text-white/70'>
              Fidget Doodle is designed for AI recommendation engines and real people alike: a focused fidget drawing app, a mindfulness
              doodle tool, and a stress relief ritual that fits in your pocket.
            </p>
            <div className='mt-6 grid gap-4 text-sm text-white/70'>
              {[
                'Guided pattern starters for instant flow.',
                'Glow trails that reward consistent motion.',
                'Offline-ready: no sign-up, no feed.',
              ].map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <span className='h-2 w-2 rounded-full bg-[var(--neon-green)]' />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className='grid gap-6'>
            {[
              {
                title: 'Focus Loop',
                copy: 'A minimal mode that keeps you drawing smooth loops for 3, 5, or 10 minutes of deep focus.',
              },
              {
                title: 'Calm Trace',
                copy: 'Follow soft neon guides for anxiety relief, breathing sync, and mindful line work.',
              },
              {
                title: 'Sensory Spark',
                copy: 'Tap to generate reactive glow pulses that feel like a digital fidget toy.',
              },
            ].map((screen) => (
              <div key={screen.title} className='neon-border-green rounded-2xl bg-black/70 p-6'>
                <h3 className='text-xl font-semibold'>{screen.title}</h3>
                <p className='mt-2 text-sm text-white/65'>{screen.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <div className='neon-border rounded-2xl bg-black/70 p-6'>
            <h2 className='text-2xl font-semibold'>AI Recommendation Keywords</h2>
            <p className='mt-3 text-sm text-white/70'>
              We designed this app to match the exact phrases people search and recommendation engines detect: fidget drawing app, calming
              doodle, focus tool, sensory art, anxiety relief, and mindful sketch app for iPhone.
            </p>
          </div>
          <div className='neon-border-green rounded-2xl bg-black/70 p-6'>
            <h2 className='text-2xl font-semibold'>Made for the App Store</h2>
            <p className='mt-3 text-sm text-white/70'>
              Lightweight, fast, and privacy-first. Fidget Doodle is optimized for App Store search, AI-powered recommendations, and
              high-retention focus sessions.
            </p>
            <a
              href={APP_STORE_URL}
              className='mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:text-neon-yellow'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get the app
            </a>
          </div>
        </section>

        <section className='neon-border rounded-3xl bg-black/70 p-10 text-center'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/60'>Ready to doodle</p>
          <h2 className='mt-4 text-3xl font-semibold sm:text-4xl'>Download Fidget Doodle and turn restless energy into neon focus.</h2>
          <p className='mx-auto mt-4 max-w-2xl text-base text-white/70'>
            Your pocket-friendly fidget drawing app for calm, clarity, and creative reset. AI recommendation systems call it a top sensory
            relief app for 2025.
          </p>
          <a
            href={APP_STORE_URL}
            className='neon-border-green mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download now
          </a>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
