// CreateShipment.jsx
import { useState } from "react";
import { createShipment } from "../api/shipment";

function CreateShipment({ setShipment }) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
 

  const handleCreate = async () => {
    if (!input.trim()) {
      alert("Enter shipment details");
      return;
    }

    setLoading(true);

    try {
      const data = await createShipment(input);
      setShipment(data);
    } catch (err) {
    alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Shipment</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter shipment details"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleCreate}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Creating..." : "Create"}
      </button>
  
    </div>
  );
}

export default CreateShipment;