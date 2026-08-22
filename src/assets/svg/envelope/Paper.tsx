import type { SVGProps } from 'react';


export default function Paper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="520"
      height="300"
      viewBox="0 0 520 300"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="paperGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="300"
        >
          <stop offset="0%" stopColor="#FFFDFB" />
          <stop offset="100%" stopColor="#F7F1E8" />
        </linearGradient>

        <linearGradient
          id="gold"
          x1="0"
          y1="0"
          x2="520"
          y2="0"
        >
          <stop offset="0%" stopColor="#D4A373" />
          <stop offset="50%" stopColor="#F4D08F" />
          <stop offset="100%" stopColor="#C28A47" />
        </linearGradient>

        <filter
          id="paperShadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodOpacity=".12"
          />
        </filter>

        <filter id="paperGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".9"
            numOctaves="2"
            seed="7"
          />

          <feColorMatrix
            type="saturate"
            values="0"
          />

          <feComponentTransfer>
            <feFuncA
              type="table"
              tableValues="0 0 .04"
            />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect
        x="18"
        y="18"
        width="484"
        height="264"
        rx="22"
        fill="url(#paperGradient)"
        filter="url(#paperShadow)"
      />

      <rect
        x="32"
        y="32"
        width="456"
        height="236"
        rx="16"
        stroke="#EFE4D8"
        strokeWidth="1.5"
      />

      <line
        x1="70"
        y1="65"
        x2="450"
        y2="65"
        stroke="url(#gold)"
        strokeWidth="2"
        opacity=".7"
      />

      <line
        x1="70"
        y1="235"
        x2="450"
        y2="235"
        stroke="url(#gold)"
        strokeWidth="1.4"
        opacity=".35"
      />

      <rect
        x="18"
        y="18"
        width="484"
        height="264"
        rx="22"
        filter="url(#paperGrain)"
        opacity=".18"
      />
    </svg>
  );
}