"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import type { Service } from "@/data/types";

const SWIPE_THRESHOLD = 40;

const MOBILE_SIZE = 1;
const TABLET_SIZE = 2;
const DESKTOP_SIZE = 4;

function chunkServices(
  items: Service[],
  size: number,
): Service[][] {
  const groups: Service[][] = [];

  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }

  return groups;
}

export default function Services() {
  const { t, dir } = useLanguage();

  const [activeMobile, setActiveMobile] = useState(0);
  const [activeTablet, setActiveTablet] = useState(0);
  const [activeDesktop, setActiveDesktop] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const mobileGroups = useMemo(
    () => chunkServices(services, MOBILE_SIZE),
    [],
  );

  const tabletGroups = useMemo(
    () => chunkServices(services, TABLET_SIZE),
    [],
  );

  const desktopGroups = useMemo(
    () => chunkServices(services, DESKTOP_SIZE),
    [],
  );

  const move = useCallback(
    (
      direction: "next" | "prev",
      setter: React.Dispatch<React.SetStateAction<number>>,
      length: number,
    ) => {
      setter((current) => {
        if (direction === "next") {
          return (current + 1) % length;
        }

        return (current - 1 + length) % length;
      });
    },
    [],
  );

  const goNext = useCallback(() => {
    move("next", setActiveMobile, mobileGroups.length);
    move("next", setActiveTablet, tabletGroups.length);
    move("next", setActiveDesktop, desktopGroups.length);
  }, [move, mobileGroups.length, tabletGroups.length, desktopGroups.length]);

  const goPrev = useCallback(() => {
    move("prev", setActiveMobile, mobileGroups.length);
    move("prev", setActiveTablet, tabletGroups.length);
    move("prev", setActiveDesktop, desktopGroups.length);
  }, [move, mobileGroups.length, tabletGroups.length, desktopGroups.length]);

  const handleForward = dir === "rtl" ? goPrev : goNext;
  const handleBackward = dir === "rtl" ? goNext : goPrev;

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleBackward();
      }

      if (event.key === "ArrowLeft") {
        handleForward();
      }
    };

    node.addEventListener("keydown", handleKeyDown);

    return () => {
      node.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleBackward, handleForward]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX;

    if (endX === undefined) {
      touchStartX.current = null;
      return;
    }

    const delta = endX - touchStartX.current;

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta < 0) {
        handleForward();
      } else {
        handleBackward();
      }
    }

    touchStartX.current = null;
  };

  const mobileGroup = mobileGroups[activeMobile] ?? [];
  const tabletGroup = tabletGroups[activeTablet] ?? [];
  const desktopGroup = desktopGroups[activeDesktop] ?? [];

  return (
    <section
      id="services"
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={t.services.heading}
      className="
        relative
        w-full
        px-4
        pb-20
        pt-16
        outline-none

        sm:px-6
        sm:pb-28
        sm:pt-24

        lg:px-8
        lg:pb-36
        lg:pt-32
      "
    >
      {/* Heading */}
      <h2
        className="
          mb-9
          text-center
          text-[62px]
          font-black
          leading-none
          tracking-[-0.04em]
          text-white

          sm:mb-12
          sm:text-7xl

          lg:mb-14
          lg:text-[88px]
        "
      >
        {t.services.heading}
      </h2>

      {/* =========================================================
          MOBILE — 1 CARD
      ========================================================= */}
      <div className="sm:hidden">
        <div
          className="relative mx-auto flex w-full max-w-[360px] items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={handleBackward}
            aria-label="Previous service"
            className="
              absolute
              -left-1
              top-1/2
              z-20
              -translate-y-1/2
              text-white
              transition-transform
              active:scale-90
            "
          >
            <ChevronLeft
              className="h-11 w-11"
              strokeWidth={1.8}
            />
          </button>

          <div
            key={mobileGroup[0]?.id}
            className="
              w-[276px]
              shrink-0
              animate-fade-up
            "
          >
            {mobileGroup[0] && (
              <ServiceCard service={mobileGroup[0]} />
            )}
          </div>

          <button
            type="button"
            onClick={handleForward}
            aria-label="Next service"
            className="
              absolute
              -right-1
              top-1/2
              z-20
              -translate-y-1/2
              text-white
              transition-transform
              active:scale-90
            "
          >
            <ChevronRight
              className="h-11 w-11"
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex justify-center gap-1.5">
          {mobileGroups.map((group, index) => (
            <button
              key={group[0]?.id ?? index}
              type="button"
              onClick={() => setActiveMobile(index)}
              aria-label={`${t.services.heading} ${index + 1}`}
              aria-current={index === activeMobile}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === activeMobile
                    ? "w-6 bg-accent-orange"
                    : "w-1.5 bg-white/30"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          TABLET — 2 CARDS
      ========================================================= */}
      <div className="hidden sm:block lg:hidden">
        <div className="mx-auto flex max-w-[760px] items-center gap-4">
          <button
            type="button"
            onClick={handleBackward}
            aria-label="Previous services"
            className="
              shrink-0
              text-white
              transition-transform
              hover:scale-105
              active:scale-90
            "
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div
            className="grid min-w-0 flex-1 grid-cols-2 gap-4"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {tabletGroup.map((service) => (
              <div
                key={service.id}
                className="min-w-0 animate-fade-up"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleForward}
            aria-label="Next services"
            className="
              shrink-0
              text-white
              transition-transform
              hover:scale-105
              active:scale-90
            "
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>

        {/* Tablet dots */}
        <div className="mt-7 flex justify-center gap-1.5">
          {tabletGroups.map((group, index) => (
            <button
              key={group[0]?.id ?? index}
              type="button"
              onClick={() => setActiveTablet(index)}
              aria-label={`${t.services.heading} ${index + 1}`}
              aria-current={index === activeTablet}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === activeTablet
                    ? "w-6 bg-accent-orange"
                    : "w-1.5 bg-white/30"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          DESKTOP — 4 CARDS
      ========================================================= */}
      <div className="hidden lg:block">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-6">
          <button
            type="button"
            onClick={handleBackward}
            aria-label="Previous services"
            className="
              shrink-0
              text-white
              transition-transform
              hover:scale-105
              active:scale-90
            "
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div
            className="grid min-w-0 flex-1 grid-cols-4 gap-5"
          >
            {desktopGroup.map((service) => (
              <div
                key={service.id}
                className="min-w-0 animate-fade-up"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleForward}
            aria-label="Next services"
            className="
              shrink-0
              text-white
              transition-transform
              hover:scale-105
              active:scale-90
            "
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>

        {/* Desktop dots */}
        <div className="mt-8 flex justify-center gap-1.5">
          {desktopGroups.map((group, index) => (
            <button
              key={group[0]?.id ?? index}
              type="button"
              onClick={() => setActiveDesktop(index)}
              aria-label={`${t.services.heading} ${index + 1}`}
              aria-current={index === activeDesktop}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === activeDesktop
                    ? "w-6 bg-accent-orange"
                    : "w-1.5 bg-white/30"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}