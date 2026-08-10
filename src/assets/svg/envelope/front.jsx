<svg xmlns="http://www.w3.org/2000/svg" width="620" height="420" viewBox="0 0 620 420" fill="none">

    <defs>

        <!-- Left Fold -->
        <linearGradient id="leftFold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F5E9DD"></stop>
            <stop offset="100%" stop-color="#E6D3C0"></stop>
        </linearGradient>

        <!-- Right Fold -->
        <linearGradient id="rightFold" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F8EEE3"></stop>
            <stop offset="100%" stop-color="#DFC8B2"></stop>
        </linearGradient>

        <!-- Bottom Fold -->
        <linearGradient id="bottomFold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#E6C39B"></stop>
            <stop offset="100%" stop-color="#C98E59"></stop>
        </linearGradient>

        <!-- Highlight -->
        <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="white" stop-opacity=".55"></stop>

            <stop offset="100%" stop-color="white" stop-opacity="0"></stop>

        </linearGradient>

        <!-- Shadow -->

        <filter id="shadow">

            <feDropShadow dx="0" dy="5" stdDeviation="8" flood-opacity=".08"></feDropShadow>

        </filter>

    </defs>

    <!-- LEFT PANEL -->

    <path d="

        M30 50

        L310 220

        L30 380

        Z

        " fill="url(#leftFold)"></path>

    <!-- RIGHT PANEL -->

    <path d="

        M590 50

        L310 220

        L590 380

        Z

        " fill="url(#rightFold)"></path>

    <!-- BOTTOM PANEL -->

    <path d="

        M30 380

        L310 180

        L590 380

        Z

        " fill="url(#bottomFold)" filter="url(#shadow)"></path>

    <!-- CENTER CREASE -->

    <path d="

        M310 180

        L310 380

        " stroke="#D9B089" stroke-width="1.4" opacity=".35"></path>

    <!-- LEFT CREASE -->

    <path d="

        M30 50

        L310 220

        " stroke="#FFFFFF" stroke-opacity=".25" stroke-width="1"></path>

    <!-- RIGHT CREASE -->

    <path d="

        M590 50

        L310 220

        " stroke="#FFFFFF" stroke-opacity=".22" stroke-width="1"></path>

    <!-- SOFT HIGHLIGHT -->

    <rect x="30" y="45" width="560" height="45" fill="url(#shine)" opacity=".45"></rect>

</svg>