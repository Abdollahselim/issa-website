"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { platforms } from "@/data/platforms";


const MARQUEE_COPIES = 6;
const SPEED = 48; // pixels per second

export default function PlatformsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const [groupWidth, setGroupWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Measure the exact width of ONE complete platform group.
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
        gap-[clamp(3rem,7vw,8rem)]
        pr-[clamp(3rem,7vw,8rem)]
      "
      aria-hidden={groupIndex !== 0}
    >
      {platforms.map((platform) => (
        <div
          key={`${groupIndex}-${platform.slug}`}
          className="
            relative
            h-[clamp(6rem,12vw,12rem)]
            w-[clamp(6rem,12vw,12rem)]
            shrink-0
            opacity-70
            grayscale
            transition-all
            duration-300
            hover:scale-110
            hover:opacity-100
            hover:grayscale-0
          "
        >
          <Image
            src={platform.logo}
            alt={groupIndex === 0 ? platform.name : ""}
            fill
            sizes="
              (max-width: 1023px) 96px,
              192px
            "
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Platforms"
      className="
        relative
        overflow-hidden
        bg-black
        py-[clamp(3rem,7vw,6rem)]
      "
    >
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
            w-[clamp(6rem,15vw,16rem)]
            bg-gradient-to-r
            from-black
            to-transparent
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
            w-[clamp(6rem,15vw,16rem)]
            bg-gradient-to-l
            from-black
            to-transparent
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