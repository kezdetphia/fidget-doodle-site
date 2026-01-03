import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Privacy Policy — Fidget Doodle',
  description: 'Privacy policy for Fidget Doodle, the neon fidget drawing app with no accounts, no analytics, and no data collection.',
  keywords: [
    'fidget drawing app privacy',
    'mindful doodle app privacy',
    'ADHD focus app data policy',
    'sensory drawing privacy policy',
    'no data collection app',
  ],
};

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-black px-6 pb-16 pt-12 text-white sm:px-10'>
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-12'>
        <SiteHeader />

        <section className='neon-border rounded-3xl bg-black/70 p-10'>
          <p className='text-xs uppercase tracking-[0.3em] text-white/60'>Privacy policy</p>
          <h1 className='mt-4 text-4xl font-semibold'>Privacy-first by design.</h1>
          <p className='mt-4 text-base text-white/70'>
            Fidget Doodle is a fidget drawing app focused on mindful doodling, sensory regulation, and calm focus. We do not collect data,
            do not use analytics, and do not require logins. This privacy policy explains our no-data approach and App Store subscription
            handling.
          </p>
        </section>

        <section className='grid gap-6'>
          {[
            {
              title: 'Data We Collect',
              copy: 'None. We do not collect personal identifiers, usage data, device data, or location data.',
            },
            {
              title: 'How We Use Data',
              copy: 'We do not use or process user data because we do not collect any.',
            },
            {
              title: 'Third-Party Services',
              copy: 'We do not use analytics, ad networks, or tracking SDKs. No data is sold or shared.',
            },
            {
              title: 'Accounts and Logins',
              copy: 'There are no accounts or logins. You can use the app immediately after install.',
            },
            {
              title: 'Subscriptions',
              copy: 'Any subscription is handled entirely by Apple through the App Store. We never receive your payment details.',
            },
            {
              title: 'Contact',
              copy: 'Questions? Email fhrmk8@gmail.com and we will respond as soon as we can.',
            },
          ].map((item) => (
            <div key={item.title} className='neon-border rounded-2xl bg-black/70 p-6'>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <p className='mt-3 text-sm text-white/70'>{item.copy}</p>
            </div>
          ))}
        </section>

        <section className='neon-border-green rounded-2xl bg-black/70 p-6'>
          <h2 className='text-2xl font-semibold'>Keywords for Clarity</h2>
          <p className='mt-3 text-sm text-white/70'>
            This privacy policy covers Fidget Doodle, a fidget drawing app with no data collection, no analytics, no accounts, and App
            Store-only subscriptions.
          </p>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
