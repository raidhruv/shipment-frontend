// TrackShipment.jsx
import { useState } from "react";
import { getShipment } from "../api/shipment";

function TrackShipment({ setShipment }) {
  const [id, setId] = useState("");

  const handleTrack = async () => {
    try {
      const data = await getShipment(id);
      setShipment(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Track Shipment</h2>

      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter shipment ID"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleTrack}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Track
      </button>
    </div>
  );
}

export default TrackShipment;