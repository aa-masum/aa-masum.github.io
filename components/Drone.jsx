export default function Drone() {
  const rotors = [[60, 60], [240, 60], [60, 240], [240, 240]];
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-md" role="img" aria-label="Top-down drawing of a quadcopter">
      <g stroke="#12203A" strokeWidth="6" strokeLinecap="round">
        <line x1="60" y1="60" x2="240" y2="240" />
        <line x1="240" y1="60" x2="60" y2="240" />
      </g>
      {rotors.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="46" fill="none" stroke="#2547F5" strokeWidth="1.5" strokeDasharray="4 5" />
          <g className="rotor">
            <line x1={x - 44} y1={y} x2={x + 44} y2={y} stroke="#12203A" strokeWidth="5" strokeLinecap="round" />
            <line x1={x} y1={y - 44} x2={x} y2={y + 44} stroke="#12203A" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
          </g>
          <circle cx={x} cy={y} r="7" fill="#FFC21A" stroke="#12203A" strokeWidth="3" />
        </g>
      ))}
      <rect x="112" y="112" width="76" height="76" rx="16" fill="#12203A" />
      <circle cx="150" cy="150" r="14" fill="#FFC21A" />
      <g stroke="#2547F5" strokeWidth="1.5" fill="none">
        <line x1="60" y1="292" x2="240" y2="292" />
        <line x1="60" y1="286" x2="60" y2="298" />
        <line x1="240" y1="286" x2="240" y2="298" />
      </g>
    </svg>
  );
}
