import Logo from "/images/logo.svg";
import PatternGlow from "/images/pattern-glow.svg";
import HeaderMobileImage from "/images/image-hero-mobile.webp";
import HeaderTabletImage from "/images/image-hero-tablet.webp";
import HeaderDesktopImage from "/images/image-hero-desktop.webp";
import DownArrow from "../components/DownArrow";
import Button from "../components/Button";
import CommunityBadge from "../components/CommunityBadge";

function Header() {
  return (
    <header className="relative z-20 overflow-hidden bg-neutral-100 bg-[url('/images/pattern-light-bg.svg')] bg-cover bg-center bg-no-repeat px-200 pt-300 pb-1000 md:px-400">
      <div className="absolute -right-112.5 -bottom-100.5 -z-10 hidden md:block">
        <img src={PatternGlow} alt="pattern glow" aria-hidden="true" />
      </div>
      <div className="mx-auto max-w-292.5">
        <img
          src={Logo}
          alt="tech book club logo"
          className="mb-600 h-auto w-48 md:mb-800"
        />
        <div className="flex flex-col gap-12 md:gap-16 xl:flex-row xl:items-center">
          <div className="xl:max-w-142.5">
            <h1 className="font-martian text-34 md:text-62 bg-header-gradient mb-300 leading-[120%] font-bold lg:max-w-190 xl:max-w-none">
              Join the ultimate tech book club
            </h1>
            <p className="font-inter text-20 mb-400 leading-[140%] text-neutral-700 lg:max-w-190 xl:max-w-none">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <Button className="font-martian text-14 md:text-18 rounded-8 bg-light-salmon-50 btn-header-hover mb-250 flex w-full items-center justify-center gap-4 border-2 border-neutral-900 px-150 py-200 font-semibold text-neutral-900 md:w-fit">
              REVIEW MEMBERSHIP OPTIONS
              <DownArrow aria-hidden="true" />
            </Button>
            <CommunityBadge />
          </div>
          <picture>
            <source media="(min-width: 1200px)" srcSet={HeaderDesktopImage} />
            <source media="(min-width: 768px)" srcSet={HeaderTabletImage} />
            <source media="(max-width: 767px)" srcSet={HeaderMobileImage} />
            <img
              src={HeaderMobileImage}
              alt="tech book club members gathered around books and laptops, engaged in discussion"
              className="rounded-8 w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

export default Header;
