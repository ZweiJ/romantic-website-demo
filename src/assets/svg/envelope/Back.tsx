import type { SVGProps } from "react";

export default function Back(props: SVGProps<SVGSVGElement>) {
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
          id="backGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="420"
        >
          <stop offset="0%" stopColor="#F8F1E8" />
          <stop offset="100%" stopColor="#E8D8C7" />
        </linearGradient>

        <linearGradient
          id="backHighlight"
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

        <filter id="backNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="2"
            seed="8"
          />

          <feColorMatrix
            type="saturate"
            values="0"
          />

          <feComponentTransfer>
            <feFuncA
              type="table"
              tableValues="0 0 .03"
            />
          </feComponentTransfer>
        </filter>

        <filter
          id="backShadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodOpacity=".14"
          />
        </filter>
      </defs>

      <rect
        x="30"
        y="40"
        width="560"
        height="340"
        rx="22"
        fill="url(#backGradient)"
        filter="url(#backShadow)"
      />

      <rect
        x="30"
        y="40"
        width="560"
        height="80"
        rx="22"
        fill="url(#backHighlight)"
      />

      <rect
        x="42"
        y="52"
        width="536"
        height="316"
        rx="16"
        stroke="#EFE4D8"
        strokeWidth="1.2"
      />

      <rect
        x="30"
        y="40"
        width="560"
        height="340"
        rx="22"
        filter="url(#backNoise)"
        opacity=".18"
      />
    </svg>
  );
}