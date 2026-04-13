function ShipmentResult({ shipment }) {
  if (!shipment) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>
        <p className="text-gray-500">No shipment selected</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>

      <div>
        <span className="font-medium">ID:</span> {shipment.id}
      </div>

      <div>
        <span className="font-medium">Status:</span>{" "}
        <span
          className={`px-2 py-1 rounded text-white text-sm
            ${shipment.status === "created" ? "bg-yellow-500" : ""}
            ${shipment.status === "in-transit" ? "bg-blue-500" : ""}
            ${shipment.status === "delivered" ? "bg-green-500" : ""}
          `}
        >
          {shipment.status}
        </span>
      </div>

      <div>
        <span className="font-medium">Location:</span> {shipment.location}
      </div>
    </div>
  );
}

export default ShipmentResult;