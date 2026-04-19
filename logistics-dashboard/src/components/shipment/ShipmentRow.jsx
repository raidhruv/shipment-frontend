export default function ShipmentRow({ shipment, onClick }) {
  return (
    <div
      onClick={() => onClick(shipment)}
      className="p-3 border rounded-md cursor-pointer hover:bg-gray-50"
    >
        <div className="flex justify-between">
          <div>
            <p className="font-medium">{shipment.name || "Unnamed Shipment"}</p>
            <p className="text-sm text-gray-500">{shipment.id}</p>
          </div>

          <span className="text-sm text-gray-600">
            {shipment.status}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {shipment.location}
        </p>
    </div>
  );
}
