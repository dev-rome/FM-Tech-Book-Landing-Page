export const ABOUT_LIST_ITEMS = [
  {
    id: 1,
    text: "Monthly curated tech reads selected by industry experts",
  },
  {
    id: 2,
    text: "Virtual and in-person meetups for deep-dive discussions",
  },
  {
    id: 3,
    text: "Early access to new tech book releases",
  },
  {
    id: 4,
    text: "Author Q&A sessions with tech thought leaders",
  },
];

export const STEPS_LIST_ITEMS = [
  {
    id: 1,
    text: "Choose your membership tier",
  },
  {
    id: 2,
    text: "Get your monthly book selection",
  },
  {
    id: 3,
    text: "Join our discussion forums",
  },
  {
    id: 4,
    text: "Attend exclusive meetups",
  },
];

export type MembershipPlan = {
  id: string;
  name: string;
  price: number | string;
  priceLabel?: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    priceLabel: "/month",
    features: ["1 book/month", "Online forums"],
    ctaLabel: "Subscribe Now",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    priceLabel: "/month",
    features: ["2 books/month", "Virtual meetups"],
    ctaLabel: "Subscribe Now",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    features: ["Team access", "Private sessions"],
    ctaLabel: "Talk to Us",
    highlighted: false,
  },
];
