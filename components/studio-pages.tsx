import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { apps, support } from '../data/site';
import { Closing, Faq, FocusAreas, Journey, Philosophy, SectionTitle } from './editorial';
import { ProductGrid } from './content';

export function AboutContent() {
  return <>
    <section className="editorial-section studio-introduction"><div><SectionTitle eyebrow="The studio" title="Curiosity, shaped into something useful." /><p>Uxhan Forge is an independent mobile app and game studio. Our work brings together two interests: helping people make room for meaningful routines and finding enjoyment in a well-made puzzle.</p><p>Taqwa Habit, UXBLOX and RailBop explore those interests in different ways. Each begins with an interaction people can understand and return to.</p></div><aside className="studio-note glass"><p className="eyebrow">Our mission</p><h3>Make the small interactions count.</h3><p>A product can become part of someone’s day through a simple action that feels clear, useful or satisfying. That is where we put our attention.</p></aside></section>
    <section className="editorial-section"><SectionTitle eyebrow="Our focus" title="Applications with purpose. Games with a point of view." /><FocusAreas /></section>
    <section className="editorial-section"><Philosophy /></section>
    <section className="editorial-section editorial-split"><div><h2>Why apps and games?</h2><p>An app and a puzzle ask different things of a person’s attention. One can help organize a routine. The other invites someone to pause and think.</p></div><div><p>Both depend on clear choices, reliable feedback and a reason to return. Working across these formats gives us different ways to explore the same questions about usability and enjoyment.</p><p>We want each product to earn its place through how it works in someone’s hands.</p></div></section>
    <section className="editorial-section"><SectionTitle eyebrow="Creative approach" title="Build, learn, refine." /><Journey /></section>
    <section className="editorial-section"><SectionTitle eyebrow="The current portfolio" title="Three ideas taking their own shape." /><ProductGrid /></section>
    <section className="editorial-section editorial-split"><SectionTitle eyebrow="Looking ahead" title="Keep improving what deserves attention." /><div><p>Our current focus is the portfolio you see here: supporting Taqwa Habit and developing the puzzle experiences in UXBLOX and RailBop.</p><p>Future releases will be described through their product pages and verified update notes as details become available. If you have feedback about a product, we would like to hear the specifics.</p><Link className="text-link" href="/updates">Follow product updates <ArrowUpRight size={17} /></Link></div></section>
    <div className="editorial-section"><Closing title="Meet the products behind the studio." /></div>
  </>;
}

export function AppsContent() {
  return <>
    <nav className="category-links" aria-label="Explore app categories"><a href="#daily-practice">Daily practice</a><a href="#puzzle-games">Puzzle games</a><Link href="/updates">Release updates</Link></nav>
    <section className="editorial-section" id="daily-practice"><SectionTitle eyebrow="Mobile applications" title="A little structure for everyday practice." /><p className="section-note">Taqwa Habit brings prayer, Quran reading and remembrance tracking into one application. It is available now on Google Play.</p><ProductGrid products={[apps[0]]} /></section>
    <section className="editorial-section" id="puzzle-games"><SectionTitle eyebrow="Puzzle and casual games" title="Two ways to find the next move." /><p className="section-note">Explore the upcoming block-placement puzzle UXBLOX and the railway-connection puzzle RailBop.</p><ProductGrid products={apps.slice(1)} /></section>
    <section className="editorial-section editorial-split"><div><SectionTitle eyebrow="Choosing an experience" title="Start with what brings you here." /></div><div><p>For recording daily worship and seeing progress, explore Taqwa Habit. For placement and line-clearing puzzles, follow UXBLOX. For connecting tracks into a route, take a look at RailBop.</p><p>Each product page includes its status, features, update history and support information. Upcoming products will gain official store links when their releases are verified.</p></div></section>
    <section className="editorial-section"><Philosophy /></section>
  </>;
}

export function UpdateGuidance({ productName }: { productName?: string }) {
  return <div className="update-guidance"><p>{productName ? 'Browse published changes for ' + productName + '.' : 'Choose a product above to browse its published changes.'} Versioned entries record a release date, platform and channel, with changes grouped into features, improvements and fixes.</p><p>Store notes can appear separately when the update is verified but its version is unavailable. Coming-soon products receive release entries once publication details are confirmed.</p></div>;
}

export function ContactGuidance() {
  return <section className="editorial-section"><SectionTitle eyebrow="A clearer starting point" title="Send your question to the right place." /><div className="editorial-split"><div><h3>Studio inquiries</h3><p>Use the general address for questions about Uxhan Forge or its portfolio. A short subject and the context behind your message help us understand what you need.</p><h3 className="text-subheading">App-specific questions</h3><p>Select a product in the form to address your draft to product support. Include a screenshot if it helps explain an issue, adding it in your email application.</p></div><Faq items={[
    { question: 'How does the contact form work?', answer: 'It checks the required fields and prepares a draft in your email app. Review the message and send it from there.' },
    { question: 'What should a support message include?', answer: 'Include the app name, installed version, device and operating system, the steps that led to the issue and what you expected to happen.' },
    { question: 'Can I send account or privacy questions here?', answer: 'Yes. Choose the relevant app or email product support directly. Each app also has privacy and deletion pages with request links. Keep passwords and session tokens out of your message.' },
  ]} /></div></section>;
}

export function SupportGuidance() {
  return <>
    <section className="editorial-section"><SectionTitle eyebrow="Common support topics" title="A useful first step." /><Faq items={[
      { question: 'Something is not working as expected.', answer: 'Note which screen you were on and the actions that led to the problem. Include the app version, device model and operating system when emailing support. If you can reproduce it, describe the shortest set of steps.' },
      { question: 'I have a question about Taqwa Habit progress.', answer: 'Tell us which tracker or progress view is involved, such as prayer, Quran reading, Azkar or Hasanat. Include the date and what the app displayed, while keeping sensitive details to what is needed for your request.' },
      { question: 'I want to report a puzzle issue.', answer: 'Name the game and mode, and include the level or board details when available. Explain the move you tried and the result. A screenshot attached to your email can help describe the board.' },
      { question: 'Where are account and data deletion options?', answer: 'Choose the appropriate app’s Delete account link above for its in-app steps and an email request pathway. Support may need to verify ownership before acting on an account.' },
      { question: 'How do I find out if an issue was fixed?', answer: 'Check the Updates page or the product’s version-history page. Published notes group verified changes into features, improvements and fixes when that information is available.' },
    ]} /></section>
    <section className="editorial-section support-strip"><div><h2>Need to describe it in more detail?</h2><p>Email <a href={'mailto:' + support}>{support}</a> or prepare a message using the contact form.</p></div><Link className="button primary" href="/contact">Write to support <ArrowUpRight size={17} /></Link></section>
  </>;
}
