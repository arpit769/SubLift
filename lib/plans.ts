export type PlanKey = "starter" | "growth" | "scale";

export const plans = {
  starter: {
    key: "starter",
    name: "Starter",
    price: 249,
    duration: "30 days",
    estimatedReach: "2k-6k relevant impressions",
    description: "For new communities validating positioning and early content loops.",
    features: ["Subreddit audit", "Content calendar", "Weekly progress notes", "Organic discovery guidance"]
  },
  growth: {
    key: "growth",
    name: "Growth",
    price: 649,
    duration: "60 days",
    estimatedReach: "8k-20k relevant impressions",
    description: "For communities ready to improve retention, posting cadence, and discovery.",
    features: ["Everything in Starter", "Niche research", "Biweekly strategy review", "Traffic trend tracking"]
  },
  scale: {
    key: "scale",
    name: "Scale",
    price: 1499,
    duration: "90 days",
    estimatedReach: "25k-60k relevant impressions",
    description: "For teams building a durable subreddit as part of a larger growth channel.",
    features: ["Everything in Growth", "Dedicated strategist", "Moderator workflow review", "Custom reporting"]
  }
} as const;

export const planList = Object.values(plans);
