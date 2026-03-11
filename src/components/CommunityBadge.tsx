import Avatars from "/images/image-avatars.webp";
import Star from "../svg/Star";

function CommunityBadge() {
  return (
    <div className="flex items-center gap-3">
      <img src={Avatars} alt="Community avatars" className="h-10 w-28" />
      <div className="flex flex-col gap-1">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6"
            />
          ))}
        </div>
        <p className="font-martian text-14 text-neutral-700">
          200+ developers joined already
        </p>
      </div>
    </div>
  );
}

export default CommunityBadge;
