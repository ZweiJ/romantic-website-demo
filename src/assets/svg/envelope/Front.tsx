import type { SVGProps } from "react";

export default function Front(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="620"
      height="420"
      viewBox="0 0 620 420"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="leftFold"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#F5E9DD" />
          <stop offset="100%" stopColor="#E6D3C0" />
        </linearGradient>

        <linearGradient
          id="rightFold"
          x1="1"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#F8EEE3" />
          <stop offset="100%" stopColor="#DFC8B2" />
        </linearGradient>

        <linearGradient
          id="bottomFold"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#E6C39B" />
          <stop offset="100%" stopColor="#C98E59" />
        </linearGradient>

        <linearGradient
          id="frontShine"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#FFFFFF"
            stopOpacity=".55"
          />

          <stop
            offset="100%"
            stopColor="#FFFFFF"
            stopOpacity="0"
          />
        </linearGradient>

        <filter id="frontShadow">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="8"
            floodOpacity=".08"
          />
        </filter>
      </defs>

      <path
        d="M30 50 L310 220 L30 380 Z"
        fill="url(#leftFold)"
      />

      <path
        d="M590 50 L310 220 L590 380 Z"
        fill="url(#rightFold)"
      />

      <path
        d="M30 380 L310 180 L590 380 Z"
        fill="url(#bottomFold)"
        filter="url(#frontShadow)"
      />

      <path
        d="M310 180 L310 380"
        stroke="#D9B089"
        strokeWidth="1.4"
        opacity=".35"
      />

      <path
        d="M30 50 L310 220"
        stroke="#FFFFFF"
        strokeOpacity=".25"
        strokeWidth="1"
      />

      <path
        d="M590 50 L310 220"
        stroke="#FFFFFF"
        strokeOpacity=".22"
        strokeWidth="1"
      />

      <rect
        x="30"
        y="45"
        width="560"
        height="45"
        fill="url(#frontShine)"
        opacity=".45"
      />
    </svg>
  );
}