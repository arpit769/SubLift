import { DISCORD_URL } from "@/lib/discord";

export function DiscordProofSection({
  compact = false
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "mt-8" : "bg-white py-16 sm:py-20"}>
      <div className={compact ? "rounded-lg border border-slate-200 bg-cloud p-6 text-center shadow-card" : "mx-auto max-w-4xl rounded-lg border border-slate-200 bg-cloud px-6 py-10 text-center shadow-card sm:px-10"}>
        <h2 className="text-3xl font-black text-ink">Want to See Real Proof?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          For privacy and safety reasons, we don&apos;t display live subreddit details publicly.
          If you&apos;d like to see real growth proof, analytics, and live examples, contact us on Discord.
        </p>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-950"
        >
          View Live Proof on Discord
        </a>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
          We&apos;ll show you real subreddit growth data, insights, and answer your questions directly.
        </p>
      </div>
    </section>
  );
}
