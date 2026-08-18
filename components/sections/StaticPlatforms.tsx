"use client";

import Image from "next/image";
import { platforms } from "@/data/platforms";

const STATIC_PLATFORM_NAMES = [
  "Salla",
  "Google Ads",
  "TikTok Ads",
] as const;

export default function StaticPlatforms() {
  const staticPlatforms = STATIC_PLATFORM_NAMES
    .map((name) => platforms.find((platform) => platform.name === name))
    .filter(
      (platform): platform is (typeof platforms)[number] =>
        Boolean(platform),
    );

  return (
    <section
      aria-label="Platforms"
      className="relative px-3 pb-14 pt-1"
    >
      <div className="mx-auto flex w-full max-w-[390px] items-center justify-between gap-3">
        {staticPlatforms.map((platform) => (
          <div
            key={platform.slug}
            className="
              relative
              h-[100px]
              w-[100px]
              shrink-0
              sm:h-12
              sm:w-32
            "
          >
            <Image
              src={platform.logo}
              alt={platform.name}
              fill
              sizes="(max-width: 640px) 100px, 128px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}