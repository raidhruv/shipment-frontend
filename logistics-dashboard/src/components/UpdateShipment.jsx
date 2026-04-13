import { useState, useEffect } from "react";
import { updateShipment } from "../api/shipment";

function UpdateShipment({ shipment, setShipment }) {
  // SAFE INITIAL STATE
  const [status, setStatus] = useState(shipment?.status || "");
  const [location, setLocation] = useState(shipment?.location || "");
  const [loading, setLoading] = useState(false);

  // EXIT EARLY IF NO SHIPMENT
  if (!shipment) return null;

  // SYNC FORM WHEN SHIPMENT CHANGES
  useEffect(() => {
    setStatus(shipment.status);
    setLocation(shipment.location);
  }, [shipment]);

  const handleUpdate = async () => {
    // BUILD SMART PAYLOAD (ONLY CHANGES)
    const payload = {};

    if (status && status !== shipment.status) {
      payload.status = status;
    }

    if (location && location !== shipment.location) {
      payload.location = location;
    }

    // NOTHING CHANGED
    if (Object.keys(payload).length === 0) {
      alert("No changes detected");
      return;
    }

    setLoading(true);

    try {
      const updated = await updateShipment(shipment.id, payload);
      setShipment(updated);
      alert("Shipment updated successfully");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border mt-6">
      <h2 className="text-xl font-semibold mb-4">Update Shipment</h2>

      {/* STATUS */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="">Select Status</option>
        <option value="created">Created</option>
        <option value="in-transit">In Transit</option>
        <option value="delivered">Delivered</option>
      </select>

      {/* LOCATION */}
      <input
        placeholder="Update location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      {/* BUTTON */}
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="bg-purple-500 hover:bg-purple-600 transition text-white px-4 py-2 rounded"
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
}

export default UpdateShipment;