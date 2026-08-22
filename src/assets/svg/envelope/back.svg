<svg xmlns="http://www.w3.org/2000/svg" width="620" height="420" viewBox="0 0 620 420" fill="none">

    <defs>

        <!-- Main Envelope Gradient -->
        <linearGradient id="backGradient" x1="0" y1="0" x2="0" y2="420">
            <stop offset="0%" stop-color="#F8F1E8"></stop>
            <stop offset="100%" stop-color="#E8D8C7"></stop>
        </linearGradient>

        <!-- Top Highlight -->
        <linearGradient id="highlight" x1="0" y1="0" x2="0" y2="120">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".55"></stop>
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"></stop>
        </linearGradient>

        <!-- Paper Texture -->
        <filter id="paperNoise">

            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="8"></feTurbulence>

            <feColorMatrix type="saturate" values="0"></feColorMatrix>

            <feComponentTransfer>

                <feFuncA type="table" tableValues="0 0 .03"></feFuncA>

            </feComponentTransfer>

        </filter>

        <!-- Soft Shadow -->

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">

            <feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity=".14"></feDropShadow>

        </filter>

    </defs>

    <!-- Main Body -->

    <rect x="30" y="40" width="560" height="340" rx="22" fill="url(#backGradient)" filter="url(#shadow)"></rect>

    <!-- Highlight -->

    <rect x="30" y="40" width="560" height="80" rx="22" fill="url(#highlight)"></rect>

    <!-- Inner Border -->

    <rect x="42" y="52" width="536" height="316" rx="16" stroke="#EFE4D8" stroke-width="1.2"></rect>

    <!-- Paper Grain -->

    <rect x="30" y="40" width="560" height="340" rx="22" filter="url(#paperNoise)" opacity=".18"></rect>

</svg>