import { deleteShipment } from "../api/shipment";
function ShipmentResult({ shipment, setShipment }) {
  if (!shipment) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md border">
        <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>
        <p className="text-gray-400 italic">
          Create or track a shipment to see details here
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this shipment?");
    if (!confirmDelete) return;

    try {
      await deleteShipment(shipment.id);
      setShipment(null);
      alert("Shipment deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">
      <h2 className="text-xl font-semibold">Shipment Details</h2>

      <div className="mt-2 mb-4">
        <span
          className={`px-4 py-1 rounded-full text-white text-sm font-medium
            ${shipment.status === "created" ? "bg-yellow-500" : ""}
            ${shipment.status === "in-transit" ? "bg-blue-500" : ""}
            ${shipment.status === "delivered" ? "bg-green-500" : ""}
          `}
        >
          {shipment.status}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t my-3"></div>

      {/* DETAILS */}
      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          ID: {shipment.id}
        </p>

        <p className="text-md">
          <span className="font-medium">Location:</span> {shipment.location}
        </p>
        <button
          onClick={handleDelete}
          className="mt-4 bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded"
        >
          Delete Shipment
        </button>
      </div>
    </div>
      );
}
export default ShipmentResult;