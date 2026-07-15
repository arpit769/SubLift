import { ArrowRight, BarChart3, ClipboardCheck, LineChart, MessagesSquare, SearchCheck } from "lucide-react";
import { Nav } from "@/components/Nav";
import { ButtonLink } from "@/components/Button";
import { DiscordProofSection } from "@/components/DiscordProofSection";
import { HeroSnapshot } from "@/components/HeroSnapshot";
import { PricingPlansSection } from "@/components/PricingPlansSection";
import { FORM_URL } from "@/lib/form";
import { DISCORD_URL } from "@/lib/discord";

const testimonials = [
  { name: "Maya S.", role: "Founder, dev tools community", quote: "The plan gave us better posting rhythm and clearer positioning without risky shortcuts." },
  { name: "Jordan L.", role: "Creator, finance subreddit", quote: "We finally understood which topics created repeat discussion, not just one-off spikes." },
  { name: "Priya R.", role: "Community lead", quote: "The dashboard made the work feel transparent and grounded in actual community signals." }
];

const faqs = [
  ["Do you guarantee member counts?", "No. We estimate reach and report progress, but we do not sell fake engagement or guaranteed subscriber numbers."],
  ["What kind of growth tactics do you use?", "Positioning, content planning, discovery research, retention improvements, and moderator workflow recommendations."],
  ["Can I change plans later?", "Yes. You can submit another application or ask your strategist to scope an upgrade."]
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_20%_20%,rgba(18,184,166,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,107,95,0.18),transparent_28%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-16">
            <div>
              <p className="inline-flex rounded-full bg-teal/10 px-4 py-2 text-sm font-bold text-teal">Organic subreddit strategy, tracked weekly</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-ink sm:mt-6 sm:text-6xl lg:text-7xl">
                Grow Your Subreddit Organically
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
                Apply for a realistic growth program built around positioning, content systems, and community health. No fake engagement, no inflated promises.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={FORM_URL} target="_blank" rel="noreferrer" className="w-full gap-2 sm:w-auto">
                  Start application <ArrowRight size={17} />
                </ButtonLink>
                <ButtonLink href="#pricing" variant="secondary" className="w-full sm:w-auto">View plans</ButtonLink>
              </div>
            </div>
            <HeroSnapshot />
          </div>
        </section>

        <section id="how" className="bg-cloud py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-ink">How it works</h2>
              <p className="mt-3 text-slate-600">A practical workflow for improving discoverability and community momentum.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [ClipboardCheck, "Apply", "Share your subreddit, niche, current activity, goals, and budget."],
                [SearchCheck, "Plan", "We review fit, choose a plan, and map realistic reach assumptions."],
                [LineChart, "Track", "Your dashboard shows orders, weekly traffic, status, and manual progress updates."]
              ].map(([Icon, title, copy]) => (
                <div key={String(title)} className="rounded-lg border border-slate-200 bg-white p-6">
                  <Icon className="h-8 w-8 text-teal" />
                  <h3 className="mt-5 text-xl font-bold text-ink">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{String(copy)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingPlansSection />

        <section className="bg-cloud py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-ink">Testimonials</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure key={item.name} className="rounded-lg border border-slate-200 bg-white p-6">
                  <MessagesSquare className="h-7 w-7 text-coral" />
                  <blockquote className="mt-5 text-slate-700">"{item.quote}"</blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-bold text-ink">{item.name}</span>
                    <span className="block text-slate-500">{item.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-ink">FAQ</h2>
            <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {faqs.map(([question, answer]) => (
                <div key={question} className="p-6">
                  <h3 className="font-bold text-ink">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="text-center md:text-left">
            <span className="font-semibold text-ink">GrowMySub</span>
            <span className="mt-1 block">Organic growth strategy for subreddit communities.</span>
          </div>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit cursor-pointer items-center gap-2 self-center rounded-md border border-slate-200 bg-white px-4 py-2 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-iris hover:text-iris hover:shadow-md md:self-auto"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.54 5.23A16.9 16.9 0 0 0 15.35 4c-.18.32-.39.75-.53 1.09a15.72 15.72 0 0 0-4.64 0A11.2 11.2 0 0 0 9.64 4c-1.47.25-2.88.67-4.18 1.23C2.82 9.13 2.1 12.94 2.46 16.7A16.8 16.8 0 0 0 7.6 19.3c.41-.56.78-1.16 1.09-1.79-.6-.23-1.17-.51-1.71-.84.14-.1.28-.21.42-.32a12.08 12.08 0 0 0 10.2 0c.14.11.28.22.42.32-.54.33-1.11.61-1.71.84.31.63.68 1.23 1.09 1.79a16.75 16.75 0 0 0 5.14-2.6c.43-4.36-.73-8.13-3-11.47ZM8.84 14.39c-1 0-1.83-.92-1.83-2.04 0-1.13.81-2.05 1.83-2.05 1.02 0 1.85.92 1.83 2.05 0 1.12-.81 2.04-1.83 2.04Zm6.32 0c-1 0-1.83-.92-1.83-2.04 0-1.13.81-2.05 1.83-2.05 1.02 0 1.85.92 1.83 2.05 0 1.12-.81 2.04-1.83 2.04Z" />
            </svg>
            View Live Proof on Discord
          </a>
        </div>
      </footer>
    </>
  );
}
