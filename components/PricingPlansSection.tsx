"use client";

import {
  CheckCircle2,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { DiscordProofSection } from "@/components/DiscordProofSection";
import { getApplyFormUrl } from "@/lib/form";
import { cn } from "@/lib/utils";

type GrowthPlan = {
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
};

const plans: GrowthPlan[] = [
  {
    name: "Meme Growth",
    price: 49,
    features: ["Viral content strategy", "Fast traffic spikes", "Best for entertainment subreddits"]
  },
  {
    name: "Q&A Growth",
    price: 59,
    popular: true,
    features: ["Engagement-driven growth", "Comment-focused strategy", "Ideal for discussion communities"]
  },
  {
    name: "Educational Growth",
    price: 69,
    features: ["Authority building", "High-quality content distribution", "Long-term audience growth"]
  },
  {
    name: "Productivity Growth",
    price: 79,
    features: ["Structured growth system", "Retention-focused audience", "Self-improvement niche"]
  },
  {
    name: "Location-Based Growth",
    price: 89,
    features: ["Local audience targeting", "Community-driven engagement"]
  },
  {
    name: "Fashion / Reps Growth",
    price: 99,
    features: ["Trend-based content strategy", "High engagement audience"]
  },
  {
    name: "Betting Growth",
    price: 99,
    features: ["Compliance-aware content planning", "Real discussion strategy", "Best for betting communities"]
  },
  {
    name: "Social Media Growth",
    price: 79,
    features: ["Trend-led content distribution", "Creator audience engagement", "Best for social media communities"]
  },
  {
    name: "Technology Growth",
    price: 89,
    features: ["Technical authority building", "Product and news content strategy", "Best for tech-focused subreddits"]
  },
  {
    name: "Managed Moderation",
    price: 50,
    features: ["Post-growth subreddit moderation", "Team member support for daily management", "Helps keep engagement consistent"]
  },
  {
    name: "Other Category",
    price: 0,
    features: [
      "Custom plan for niche-specific subreddits",
      "Pricing depends on category and growth scope",
      "Our team member will confirm the final amount during the deal"
    ]
  }
];

export function PricingPlansSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-4 py-2 text-sm font-bold text-teal">
            <Sparkles size={16} />
            100% organic weekly plans
          </p>
          <h2 className="mt-5 text-3xl font-black text-ink sm:text-4xl">
            Choose Your Subreddit Growth Plan
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Weekly plans based on subreddit type. 100% organic growth with real engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex min-h-[330px] flex-col rounded-lg border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-iris/40 hover:shadow-soft",
                plan.popular ? "border-iris ring-2 ring-iris/15" : "border-slate-200/80"
              )}
            >
              {plan.popular ? (
                <span className="absolute right-5 top-5 rounded-full bg-iris px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-card">
                  Most Popular
                </span>
              ) : null}
              <h3 className={cn("text-xl font-black text-ink", plan.popular ? "pr-28" : "")}>{plan.name}</h3>
              <div className="mt-5">
                <span className="text-xl font-black text-ink sm:text-2xl">Application</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={getApplyFormUrl(plan.name)}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-7 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md px-5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5",
                  plan.popular ? "bg-iris hover:bg-blue-700" : "bg-ink hover:bg-slate-950"
                )}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <InfoPanel
            icon={<ShieldCheck size={20} />}
            title="Organic Disclaimer"
            body="We do not use bots or fake engagement. Growth is driven by content and distribution strategies. Results vary based on niche, consistency, and audience behavior."
          />
          <InfoPanel
            icon={<UsersRound size={20} />}
            title="Moderator Requirement"
            body="Active moderator involvement is required. The subreddit owner (mod) must stay in contact with our team during the campaign."
          />
          <InfoPanel
            icon={<LifeBuoy size={20} />}
            title="Guidance & Support"
            body="We guide moderators on content strategy, posting frequency, and community engagement. Our team also creates and publishes high-engagement posts for your subreddit, helps manage moderation during the growth phase, and handles additional execution steps that support consistent organic momentum."
          />
          <InfoPanel
            icon={<TrendingUp size={20} />}
            title="Post-Growth Support"
            body="We guide moderators on how to maintain growth after the campaign ends, keep engagement consistent, and avoid a drop in activity."
          />
        </div>

        <div className="mt-5 rounded-lg border border-slate-200 bg-cloud p-6 text-center shadow-card">
          <h3 className="text-lg font-black text-ink">Expectation Setting</h3>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Most subreddits see noticeable growth within the first few weeks. However, exact traffic and engagement depend on niche and execution.
          </p>
        </div>

        <DiscordProofSection compact />
      </div>

    </section>
  );
}

function InfoPanel({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <article className="rounded-lg border border-slate-200/80 bg-white p-6 shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-teal/10 text-teal">
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-black text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
        </div>
      </div>
    </article>
  );
}
