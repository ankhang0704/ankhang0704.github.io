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
          {/* Architectural Squircle Container */}
          <rect
            width="512"
            height="512"
            rx="96"
            className="fill-[#141417] dark:fill-[#101012]"
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

      {/* Pure Mathematical Monogram: An Khang (A × K Ligature) */}
      <g>
        {/* Left Ascending Stem of 'A' */}
        <polygon
          points="96,420 148,420 244,140 244,92 200,92 96,420"
          fill="#ffffff"
        />

        {/* Architectural Central Spine (The Shared Backbone of A & K) */}
        <rect x="244" y="92" width="48" height="328" fill="#f4f4f5" />

        {/* Horizontal Structural Crossbar of 'A' */}
        <rect x="160" y="238" width="84" height="40" fill="#ffffff" />

        {/* Upper 45° Cantilever Arm of 'K' */}
        <polygon
          points="292,256 292,208 364,92 412,92 292,256"
          fill="#e4e4e7"
        />

        {/* Lower 45° Cantilever Arm of 'K' */}
        <polygon
          points="292,256 292,304 364,420 412,420 292,256"
          fill="#d4d4d8"
        />

        {/* Central Precision Alignment Diamond (Coordinate Anchor) */}
        <path d="M268 244 L280 256 L268 268 L256 256 Z" fill="#141417" />
        <circle cx="268" cy="256" r="3.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
