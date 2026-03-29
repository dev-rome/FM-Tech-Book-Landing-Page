import Check from "../svg/Check";
import Button from "./Button";
import type { MembershipPlan } from "../constants";

type MembershipCardProps = {
  plan: MembershipPlan;
};

function MembershipCard({
  plan: { name, price, priceLabel, highlighted, features, ctaLabel },
}: MembershipCardProps) {
  const formattedPrice = typeof price === "number" ? `$${price}` : price;

  const cardStyles = highlighted
    ? "bg-neutral-100 px-300 py-300 lg:py-500 lg:max-w-[350px]"
    : "bg-neutral-0 p-300 lg:max-w-[286px]";

  const buttonStyles =
    "text-16 rounded-8 bg-light-salmon-50 font-martian md:text-18 box-border block w-full border-2 border-neutral-900 px-150 py-200 text-center font-semibold text-neutral-900";

  return (
    <article
      aria-label={`${name} membership plan`}
      className={`rounded-8 relative isolate box-border flex w-full flex-col overflow-hidden border border-neutral-200 md:max-lg:w-[calc(50%-0.75rem)] ${cardStyles}`}
    >
      {highlighted && (
        <img
          src="/images/pattern-glow.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-32 -z-10"
        />
      )}
      <div>
        <h3 className="font-martian text-24 mb-300 font-semibold text-neutral-900">
          {name}
        </h3>
        <p className="font-martian text-34 font-semibold text-neutral-900">
          {formattedPrice}
          {priceLabel && (
            <span className="font-inter text-20 font-normal text-neutral-700">
              {priceLabel}
            </span>
          )}
        </p>
      </div>
      <hr className="my-300 border-neutral-200" />
      <ul
        aria-label={`${name} plan features`}
        className="mb-300 flex-1 space-y-200"
      >
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-150">
            <Check />
            <span className="font-inter text-18 text-neutral-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        ariaLabel={`${ctaLabel} for ${name}`}
        className={`btn-membership-card-hover ${buttonStyles}`}
      >
        {ctaLabel}
      </Button>
    </article>
  );
}

export default MembershipCard;
