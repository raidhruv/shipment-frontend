export default function TransitTimeline({ points }) {
  if (!points || points.length === 0) return null;

  return (
    <div className="mt-4 space-y-2 text-sm">
      {points.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span>📍</span>
          <span className="font-medium">{p.location}</span>
          <span className="text-gray-500 text-xs">
            {new Date(p.time).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}