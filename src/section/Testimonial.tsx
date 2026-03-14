import Star from "../svg/Star";

function Testimonial() {
  return (
    <div className="flex flex-col gap-8 lg:items-center">
      <div className="flex" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6" />
        ))}
      </div>
      <figure className="mx-auto flex flex-col gap-8 lg:max-w-242.5 lg:items-center">
        <blockquote className="text-24 font-martian md:text-34 leading-[110%] font-semibold tracking-[-1px] text-neutral-900 md:leading-[130%] lg:text-center">
          <p>
            This book club transformed my technical reading from a solitary
            activity into an enriching community experience. The discussions are
            gold!
          </p>
        </blockquote>
        <figcaption className="text-20 font-inter leading-[140%] tracking-[-0.5px] text-neutral-700">
          Sarah Chen, Software Architect
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial;
