import { SOCIAL_LINKS } from "@/lib/config";
import { LinkedInIcon, XIcon } from "@/components/ui/BrandIcons";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({
  className = "",
  iconClassName = "h-4 w-4",
}: SocialLinksProps) {
  return (
    <nav
      aria-label="Social links"
      className={`flex items-center gap-5 ${className}`}
    >
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center justify-center text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <LinkedInIcon className={iconClassName} />
      </a>

      <a
        href={SOCIAL_LINKS.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="flex items-center justify-center text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <XIcon className={iconClassName} />
      </a>
    </nav>
  );
}