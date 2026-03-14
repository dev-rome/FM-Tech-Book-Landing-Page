import PatternCircle from "/images/pattern-circle.png";
import TechLogos from "/images/logos-tech.svg";
import CommunityDesktopImage from "/images/image-not-average-desktop.webp";
import CommunityTabletImage from "/images/image-not-average-tablet.webp";
import CommunityMobileImage from "/images/image-not-average-mobile.webp";

function CommunitySection() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-20">
        <div className="flex flex-col gap-6 xl:flex-1">
          <h2 className="font-martian text-34 md:text-50 leading-[130%] font-semibold tracking-[-2px] text-neutral-900 md:max-w-126 lg:max-w-full xl:max-w-none">
            Not your average book{" "}
            <span className="relative inline-flex">
              club
              <img
                src={PatternCircle}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full object-contain"
              />
            </span>
          </h2>
          <p className="text-20 w-full leading-[140%] text-neutral-700">
            Connect with a community that speaks your language - from{" "}
            <strong>Python</strong> to <strong>TypeScript</strong> and
            everything in between. Our discussions blend technical depth with
            practical applications.
          </p>
        </div>
        <div className="relative xl:max-w-140 xl:shrink-0">
          <div className="absolute hidden md:right-8 md:bottom-12 md:block xl:bottom-8 xl:-left-20">
            <img
              src={TechLogos}
              alt="Logos of various programming languages and technologies"
            />
          </div>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={CommunityDesktopImage}
            />
            <source media="(min-width: 768px)" srcSet={CommunityTabletImage} />
            <img
              src={CommunityMobileImage}
              alt="Group of tech enthusiasts sitting together reading and discussing books"
              className="rounded-12 w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
