import type { SVGProps } from "react";

export default function Seal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 120 120"
      width="120"
      height="120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="waxGradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#d8757c" />
          <stop offset="45%" stopColor="#b84d59" />
          <stop offset="100%" stopColor="#8f3544" />
        </radialGradient>

        <filter
          id="sealShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodOpacity="0.28"
          />
        </filter>
      </defs>

      {/* Wax seal */}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="url(#waxGradient)"
        filter="url(#sealShadow)"
      />

      {/* Inner wax detail */}
      <circle
        cx="60"
        cy="60"
        r="42"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.5"
      />

      {/* AJ */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fill="#fffaf5"
        fontSize="25"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
        letterSpacing="1"
      >
        AJ
      </text>

      {/* Wax highlight */}
      <ellipse
        cx="42"
        cy="36"
        rx="15"
        ry="8"
        fill="rgba(255,255,255,0.16)"
        transform="rotate(-25 42 36)"
      />
    </svg>
  );
}