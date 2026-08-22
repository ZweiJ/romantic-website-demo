import type { SVGProps } from "react";

export default function Flap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="620"
      height="260"
      viewBox="0 0 620 260"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="flapGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="260"
        >
          <stop offset="0%" stopColor="#E6B784" />
          <stop offset="100%" stopColor="#C98D58" />
        </linearGradient>

        <linearGradient
          id="goldHighlight"
          x1="0"
          y1="0"
          x2="620"
          y2="0"
        >
          <stop
            offset="0%"
            stopColor="transparent"
          />

          <stop
            offset="50%"
            stopColor="#FFE6A6"
            stopOpacity=".8"
          />

          <stop
            offset="100%"
            stopColor="transparent"
          />
        </linearGradient>

        <linearGradient
          id="flapTopLight"
          x1="0"
          y1="0"
          x2="0"
          y2="120"
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

        <filter id="flapShadow">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="8"
            floodOpacity=".12"
          />
        </filter>
      </defs>

      <path
        id="flapBody"
        d="
          M30 30
          C90 35 180 95 310 190
          C440 95 530 35 590 30
          L590 250
          L30 250
          Z
        "
        fill="url(#flapGradient)"
        filter="url(#flapShadow)"
      />

      <path
        d="
          M40 40
          C130 50 220 105 310 170
          C400 105 490 50 580 40
        "
        stroke="url(#flapTopLight)"
        strokeWidth="5"
        opacity=".45"
        strokeLinecap="round"
      />

      <rect
        x="100"
        y="155"
        width="420"
        height="2"
        fill="url(#goldHighlight)"
        opacity=".55"
      />

      <path
        d="
          M110 160
          C180 170 250 180 310 182
          C370 180 440 170 510 160
        "
        stroke="#F8E6D0"
        strokeOpacity=".45"
        strokeWidth="1.5"
      />
    </svg>
  );
}