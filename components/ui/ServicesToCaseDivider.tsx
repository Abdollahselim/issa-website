import React from "react";

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
}

export default function ServicesToCaseDivider({
  fillColor = "fill-black",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`mt-[-200px] relative w-full overflow-hidden leading-none rotate-180 z-10 ${className}`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
        className={`relative block w-full min-w-[1200px] h-80 ${fillColor}`}
      >
        {/* الموجة الخلفية */}
        <path
          d="M0,0 L0,8 Q600,34 600,35 Q1000,70 1400,125 L1200,0 Z"
          opacity="0.25"
        />
        
        {/* الموجة المتوسطة */}
        <path
          d="M0,0 L0,6 Q600,26 600,26 Q1100,60 1400,99 L1200,0 Z"
          opacity="0.5"
        />
        
        {/* الموجة الأمامية */}
        <path
          d="M0,0 L0,4 Q600,15 600,14 Q1200,40 1400,85 L1200,0 Z"
        />
      </svg>
    </div>
  );
}