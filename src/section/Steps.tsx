import PatternGlow from "/images/pattern-glow.svg";
import PatternArrow from "../svg/PatternArrow";
import { STEPS_LIST_ITEMS } from "../constants";

function Steps() {
  return (
    <div className="rounded-12 relative z-20 overflow-hidden bg-neutral-100 bg-[url('/images/pattern-light-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="md:h-2xl absolute -right-64 -bottom-64 -z-10 md:-right-44 md:-bottom-44 md:w-2xl xl:-right-72 xl:-bottom-72">
        <img src={PatternGlow} alt="" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-8 px-200 py-400 md:gap-10 md:px-400 md:py-1000 xl:gap-16 xl:px-15 xl:pt-1000 xl:pb-17.5">
        <h2 className="font-martian text-34 md:text-50 leading-[130%] font-semibold -tracking-[2px] text-neutral-900 xl:mx-auto xl:max-w-lg xl:text-center">
          Your tech reading journey
        </h2>
        <ul className="flex flex-col gap-4 md:gap-6 xl:flex-row xl:gap-10">
          {STEPS_LIST_ITEMS.map(({ id, text }, index) => (
            <li key={id} className="flex flex-1 flex-col gap-2.5 md:gap-4">
              <div className="flex items-center justify-between">
                <span className="font-martian md:text-18 rounded-4 flex h-8 w-8 items-center justify-center border-2 border-neutral-900 font-semibold text-neutral-900 md:h-10 md:w-10">
                  {id}
                </span>
                {index !== STEPS_LIST_ITEMS.length - 1 && (
                  <PatternArrow className="hidden xl:block" />
                )}
              </div>
              <p className="font-martian md:text-18 leading-[130%] font-semibold -tracking-[1px] text-neutral-900">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Steps;
