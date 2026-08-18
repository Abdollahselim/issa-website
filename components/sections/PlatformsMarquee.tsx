"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/lib/language-context";
import { platforms } from "@/data/platforms";

interface PlatformsMarqueeProps {
  showHeading?: boolean;
}

const MARQUEE_COPIES = 6;
const SPEED = 48; // pixels per second

export default function PlatformsMarquee({
  showHeading = true,
}: PlatformsMarqueeProps) {
  const { t } = useLanguage();

  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const [groupWidth, setGroupWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Measure the exact width of ONE complete platform group.
   *
   * The track contains identical groups:
   *
   * [GROUP][GROUP][GROUP][GROUP]...
   *
   * We move exactly one group's width and then wrap back
   * by that same amount. Because the next group is identical,
   * the reset is visually invisible.
   */
  const measureGroup = useCallback(() => {
    if (!groupRef.current) return;

    const width = groupRef.current.getBoundingClientRect().width;

    if (width > 0) {
      setGroupWidth(width);
    }
  }, []);

  /**
   * Initial measurement + responsive measurement.
   */
  useEffect(() => {
    measureGroup();

    const resizeObserver = new ResizeObserver(() => {
      measureGroup();
    });

    if (groupRef.current) {
      resizeObserver.observe(groupRef.current);
    }

    window.addEventListener("resize", measureGroup);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureGroup);
    };
  }, [measureGroup]);

  /**
   * Reset the animation clock when pause state changes.
   *
   * This prevents a large movement after mouse leave / resume.
   */
  useEffect(() => {
    lastTimeRef.current = null;
  }, [isPaused]);

  /**
   * Continuous marquee animation.
   *
   * IMPORTANT:
   * We use elapsed time instead of "1px per frame".
   * This keeps the speed consistent across 60Hz / 120Hz displays.
   */
  useEffect(() => {
    const trackElement = trackRef.current;

    if (!groupWidth || !trackElement) {
      return;
    }
    

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused) {
        const movement = (SPEED * deltaTime) / 1000;

        positionRef.current -= movement;

        /**
         * Move exactly one group width.
         *
         * Because the next group is identical to the first one,
         * this wrap is invisible to the user.
         */
        if (positionRef.current <= -groupWidth) {
          positionRef.current += groupWidth;
        }

        trackElement.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      lastTimeRef.current = null;
    };
  }, [groupWidth, isPaused]);

  /**
   * Render one complete platform group.
   */
  const renderGroup = (groupIndex: number) => (
    <div
      ref={groupIndex === 0 ? groupRef : undefined}
      key={groupIndex}
      className="
        marquee-content
        flex
        shrink-0
        items-center
        gap-10
        pr-10
        sm:gap-14
        sm:pr-14
        md:gap-18
        md:pr-18
      "
      aria-hidden={groupIndex !== 0}
    >
      {platforms.map((platform) => (
        <div
          key={`${groupIndex}-${platform.slug}`}
          className="
            relative
            h-20
            w-20
            shrink-0
            opacity-70
            grayscale
            transition-all
            duration-300
            hover:scale-110
            hover:opacity-100
            hover:grayscale-0
            sm:h-24
            sm:w-24
            md:h-28
            md:w-28
          "
        >
          <Image
            src={platform.logo}
            alt={groupIndex === 0 ? platform.name : ""}
            fill
            sizes="
              (max-width: 639px) 80px,
              (max-width: 767px) 96px,
              112px
            "
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      aria-label={t.platforms.heading}
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-black
        from-100%
        via-black
        via-[100%]
        to-transparent
        to-100%
        py-8
        sm:py-10
        md:py-19
      "
    >
      {/* Heading */}
      {showHeading && (
        <h2
          className="
            mb-6
            px-5
            text-center
            text-lg
            font-extrabold
            text-text-primary
            sm:mb-8
            sm:text-xl
            md:text-2xl
          "
        >
          {t.platforms.heading}
        </h2>
      )}

      {/* Marquee viewport */}
      <div
        dir="ltr"
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-20
            bg-gradient-to-r
            from-black
            to-transparent
            sm:w-32
            md:w-40
          "
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-20
            bg-gradient-to-l
            from-black
            to-transparent
            sm:w-32
            md:w-40
          "
        />

        {/* Infinite track */}
        <div
          ref={trackRef}
          className="flex w-max shrink-0 will-change-transform"
          style={{
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {Array.from({ length: MARQUEE_COPIES }, (_, index) =>
            renderGroup(index),
          )}
        </div>
      </div>
    </section>
  );
}