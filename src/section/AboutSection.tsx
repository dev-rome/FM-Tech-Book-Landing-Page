import Check from "../components/Check";
import AboutMobileImage from "/images/image-read-together-mobile.webp";
import AboutTabletImage from "/images/image-read-together-tablet.webp";
import AboutDesktopImage from "/images/image-read-together-desktop.webp";
import { ABOUT_LIST_ITEMS } from "../constants";

function AboutSection() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-20">
        <div className="flex flex-col gap-6 md:gap-9">
          <h2 className="font-martian text-34 md:text-50 leading-[130%] font-semibold tracking-[-2px] text-neutral-900 md:max-w-126 lg:max-w-full xl:max-w-none">
            Read together, grow together
          </h2>
          <ul className="flex flex-col gap-4 md:gap-6 xl:order-last">
            {ABOUT_LIST_ITEMS.map(({ id, text }) => (
              <li key={id} className="flex items-center gap-4">
                <span>
                  <Check />
                </span>
                <p className="text-20 font-inter text-neutral-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:order-first xl:max-w-140">
          <picture>
            <source media="(min-width: 1200px)" srcSet={AboutDesktopImage} />
            <source media="(min-width: 768px)" srcSet={AboutTabletImage} />
            <img
              src={AboutMobileImage}
              alt="Group of tech enthusiasts sitting together reading and discussing books"
              className="rounded-12 w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
