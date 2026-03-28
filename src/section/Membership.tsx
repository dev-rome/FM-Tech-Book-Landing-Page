import { MEMBERSHIP_PLANS } from "../constants";
import MembershipCard from "../components/MembershipCard";

function Membership() {
  return (
    <section
      id="memberships"
      aria-labelledby="memberships-heading"
      className="flex flex-col gap-10"
    >
      <h2
        id="memberships-heading"
        className="text-34 md:text-50 font-martian leading-[130%] font-semibold tracking-[-2px] text-neutral-900 lg:text-center"
      >
        Membership options
      </h2>
      <div className="flex flex-col gap-300 md:flex-row md:flex-wrap lg:flex-nowrap lg:items-center lg:gap-300">
        {MEMBERSHIP_PLANS.map((plan) => (
          <MembershipCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export default Membership;
