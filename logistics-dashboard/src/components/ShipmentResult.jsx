// ShipmentResult.jsx
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
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>

      <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
        {JSON.stringify(shipment, null, 2)}
      </pre>
    </div>
  );
}

export default ShipmentResult;