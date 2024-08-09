function LogoIcon({ width, height, color }) {
  const logoColor = color || "#000000";
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 122.000000 96.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
        fill={logoColor}
        stroke="none"
      >
        <path
          d="M488 788 l-95 -163 78 -37 c44 -20 99 -51 123 -68 l43 -31 46 31 c25
    17 67 40 94 52 26 11 49 22 51 23 2 2 -42 82 -98 179 -85 147 -106 176 -125
    176 -19 0 -39 -28 -117 -162z"
        />
        <path
          d="M234 353 c-60 -103 -110 -190 -112 -195 -2 -4 59 -8 135 -8 l138 1
    42 87 c24 48 63 110 87 138 l45 51 -30 22 c-34 25 -168 91 -185 91 -6 0 -60
    -84 -120 -187z"
        />
        <path
          d="M821 494 c-30 -13 -69 -33 -87 -45 l-33 -20 46 -57 c26 -31 64 -94
    85 -139 l39 -83 104 0 c58 0 105 3 105 6 0 6 -172 312 -194 345 -10 15 -16 14
    -65 -7z"
        />
        <path
          d="M27 53 l-24 -38 240 -3 c132 -1 242 0 245 2 2 3 -6 21 -18 40 l-22
    36 -199 0 -199 0 -23 -37z"
        />
        <path
          d="M753 55 c-13 -19 -23 -37 -23 -40 0 -3 110 -5 245 -5 l245 0 -23 38
    -24 37 -199 3 -199 2 -22 -35z"
        />
      </g>
    </svg>
  );
}

export default LogoIcon;
