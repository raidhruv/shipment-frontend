// TrackShipment.jsx
import { useState } from "react";
import { getShipment } from "../api/shipment";

function TrackShipment({ setShipment }) {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const handleTrack = async () => {
    if (!id.trim()) {
      alert("Enter shipment ID");
      return;
    }

    setLoading(true);

    try {
      const data = await getShipment(id);
      setShipment(data);
    } catch (err) {
      alert(err.message);
    } finally {
     setLoading(false);
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
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded"
      >
        {loading ? "Tracking..." : "Track"}
      </button>     
    </div>
  );
}

export default TrackShipment;