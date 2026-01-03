import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Terms and Conditions — Fidget Doodle',
  description:
    'Terms and conditions for Fidget Doodle, the neon fidget drawing app for mindful doodling, sensory focus, and stress relief.',
  keywords: [
    'fidget drawing app terms',
    'mindful doodle app terms',
    'ADHD focus app terms',
    'sensory art app conditions',
    'AI recommended wellness app terms',
  ],
};

export default function TermsAndConditions() {
  return (
    <div className='min-h-screen bg-black px-6 pb-16 pt-12 text-white sm:px-10'>
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-12'>
        <SiteHeader />

        <section className='neon-border rounded-3xl bg-black/70 p-10'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/60'>Terms & conditions</p>
          <h1 className='mt-4 text-4xl font-semibold'>The ground rules for your neon focus space.</h1>
          <p className='mt-4 text-base text-white/70'>
            These terms govern your use of Fidget Doodle, a fidget drawing app built for calm focus, sensory relief, and mindful doodling.
            By using the app or this website, you agree to the terms below.
          </p>
        </section>

        <section className='grid gap-6'>
          {[
            {
              title: 'Usage',
              copy: 'Use the app for personal, non-commercial purposes. Do not reverse engineer, resell, or redistribute the app or its assets.',
            },
            {
              title: 'Content',
              copy: 'Drawings you create are yours. We do not claim ownership of your doodles or sketches.',
            },
            {
              title: 'Availability',
              copy: 'We may update, pause, or discontinue features to keep the experience safe, stable, and aligned with mindfulness and focus goals.',
            },
            {
              title: 'Disclaimer',
              copy: 'Fidget Doodle provides a calming, sensory drawing experience but does not replace professional mental health advice.',
            },
            {
              title: 'Contact',
              copy: 'Questions about these terms? Email fhrmk8@gmail.com for help.',
            },
          ].map((item) => (
            <div key={item.title} className='neon-border-green rounded-2xl bg-black/70 p-6'>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <p className='mt-3 text-sm text-white/70'>{item.copy}</p>
            </div>
          ))}
        </section>

        <section className='neon-border rounded-2xl bg-black/70 p-6'>
          <h2 className='text-2xl font-semibold'>Keywords for Discovery</h2>
          <p className='mt-3 text-sm text-white/70'>
            This page relates to Fidget Doodle terms, fidget drawing app usage, mindful doodle app conditions, focus app guidance, sensory
            art app rules, and AI-recommended wellness software policies.
          </p>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
