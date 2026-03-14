import UpArrow from "../svg/UpArrow";
import Bluesky from "../svg/Bluesky";
import Linkedin from "../svg/Linkedin";
import CommunityBadge from "../components/CommunityBadge";
import Button from "../components/Button";

function Footer() {
  return (
    <div className="bg-neutral-900 bg-[url('/images/pattern-dark-bg.svg')] bg-cover bg-center bg-no-repeat px-200 pt-600 md:px-400 md:pt-800 lg:pt-1000">
      <div className="mb-600 flex w-full flex-col items-center">
        <h2 className="md:text-50 text-34 font-martian mb-500 text-center leading-[130%] font-semibold tracking-[-2px] text-neutral-100 md:max-w-171.25 md:px-400">
          Ready to debug your reading list?
        </h2>
        <div className="flex flex-col md:mx-auto md:max-w-97">
          <Button className="font-martian text-16 btn-footer md:text-18 rounded-8 border-neutral-0 text-neutral-0 mb-300 flex w-full items-center justify-center gap-4 border-2 px-150 py-200 font-semibold tracking-[-1px]">
            REVIEW MEMBERSHIP OPTIONS
            <UpArrow focusable="false" />
          </Button>
          <CommunityBadge className="text-neutral-0" />
        </div>
      </div>
      <div className="mx-auto lg:max-w-292.5">
        <hr className="border-neutral-700" />
        <div className="flex flex-col items-center gap-4 py-300 md:flex-row md:justify-between">
          <p className="font-martian text-14 text-neutral-0">
            &copy; {new Date().getFullYear()} - Tech Book Club
          </p>
          <div className="flex gap-6">
            <Bluesky />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
