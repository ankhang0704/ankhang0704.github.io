"use client";

import * as React from "react";

interface BrandLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  withBackground?: boolean;
}

export function BrandLogo({
  className = "w-7 h-7",
  withBackground = true,
  ...props
}: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {withBackground && (
        <>
          {/* Architectural Squircle Badge with Ambient Hairline */}
          <rect
            width="512"
            height="512"
            rx="96"
            className="fill-[#18181b] dark:fill-[#121214]"
          />
          <rect
            x="2"
            y="2"
            width="508"
            height="508"
            rx="94"
            className="stroke-white/20"
            strokeWidth="3"
          />
        </>
      )}

      {/* Left Architectural Pillar: Structural Foundation & A-Stem (45° Chamfer) */}
      <path
        d="M140 180 L180 140 H224 V348 C224 361.255 213.255 372 200 372 H164 C150.745 372 140 361.255 140 348 V180Z"
        fill="#ffffff"
      />

      {/* Right Dynamic Lintel: Upper Cantilever ('K' Upper Arm) */}
      <path
        d="M256 140 H348 C361.255 140 372 150.745 372 164 V248 C372 261.255 361.255 272 348 272 H304 C290.745 272 280 261.255 280 248 V196 H256 V140Z"
        fill="#e4e4e7"
      />

      {/* Right Lower Cantilever: Lower Arm ('K' Lower Arm) */}
      <path
        d="M280 288 H336 C349.255 288 360 298.745 360 312 V348 C360 361.255 349.255 372 336 372 H256 V312 C256 298.745 266.745 288 280 288Z"
        fill="#a1a1aa"
      />

      {/* Precision Coordinate Beacon: 45° Central Engineering Diamond */}
      <path d="M248 240 L264 256 L248 272 L232 256 Z" fill="#ffffff" />
      <circle cx="248" cy="256" r="3.5" fill="#18181b" />
    </svg>
  );
}
