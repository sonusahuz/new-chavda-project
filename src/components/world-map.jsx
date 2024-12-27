// eslint-disable-next-line react/prop-types
export function WorldMap({ className }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ background: '#f8fafc' }}
      >
        {/* Simplified world map path */}
        <path
          d="M150,100 L850,100 L850,400 L150,400 Z"
          fill="#e2e8f0"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        {/* Example country markers */}
        <circle cx="200" cy="150" r="5" fill="#94a3b8" /> {/* Canada */}
        <circle cx="220" cy="200" r="5" fill="#94a3b8" /> {/* United States */}
        <circle cx="300" cy="300" r="5" fill="#94a3b8" /> {/* Brazil */}
        <circle cx="600" cy="150" r="5" fill="#94a3b8" /> {/* Russia */}
        <circle cx="700" cy="200" r="5" fill="#94a3b8" /> {/* China */}
      </svg>
    </div>
  );
}
