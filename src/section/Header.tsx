import Logo from "/images/logo.svg";
import HeaderMobileImage from "/images/image-hero-mobile.webp";
import HeaderTabletImage from "/images/image-hero-tablet.webp";
import HeaderDesktopImage from "/images/image-hero-desktop.webp";
import DownArrow from "../components/DownArrow";
import Button from "../components/Button";
import CommunityBadge from "../components/CommunityBadge";

function Header() {
  return (
    <header className="relative bg-neutral-100 bg-[url('/images/pattern-light-bg.svg')] bg-cover bg-center bg-no-repeat px-200 pt-300 pb-1000 md:px-400">
      <div className="mx-auto grid max-w-292.5 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <img
          src={Logo}
          alt="tech book club logo"
          className="col-span-3 mb-600"
        />
        <div className="grid col-span-4 md:col-span-8 lg:col-span-12 gap-16">
          <div className="flex flex-col">
            <h1 className="font-martian text-38 bg-header-gradient mb-300 leading-[120%] font-bold">
              Join the ultimate tech book club
            </h1>
            <p className="font-inter text-20 mb-400 leading-[140%] text-neutral-700">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <Button className="font-martian rounded-8 bg-light-salmon-50 mb-250 flex items-center justify-center gap-4 border-2 border-neutral-900 px-150 py-200 font-semibold text-neutral-900 md:w-fit">
              REVIEW MEMBERSHIP OPTIONS
              <DownArrow />
            </Button>
            <CommunityBadge />
          </div>
          <picture>
            <source media="(min-width: 1200px)" srcSet={HeaderDesktopImage} />
            <source media="(min-width: 768px)" srcSet={HeaderTabletImage} />
            <source media="(max-width: 767px)" srcSet={HeaderMobileImage} />
            <img
              src={HeaderMobileImage}
              alt="group of people reading and discussing books"
              className="rounded-8 w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

export default Header;
