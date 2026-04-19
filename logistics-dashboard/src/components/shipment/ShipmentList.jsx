import ShipmentRow from "./ShipmentRow";

export default function ShipmentList({ shipments, onSelect }) {
  if (!shipments || shipments.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        No shipments yet
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {shipments.map((s) => (
        <ShipmentRow
          key={s.id}
          shipment={s}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}