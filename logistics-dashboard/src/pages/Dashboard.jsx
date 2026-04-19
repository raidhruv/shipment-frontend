import { useState } from "react";
import CreateShipment from "../components/CreateShipment";
import TrackShipment from "../components/TrackShipment";
import ShipmentResult from "../components/ShipmentResult";
import UpdateShipment from "../components/UpdateShipment";
import ShipmentList from "../components/shipment/ShipmentList";

function Dashboard() {
  const [shipment, setShipment] = useState(null);
  const [shipments, setShipments] = useState([]);

  const handleNewShipment = (data) => {
    setShipment(data);

    setShipments((prev) => {
      const index = prev.findIndex((s) => s.id === data.id);

      // If exists → MERGE (not replace)
      if (index !== -1) {
        const updated = [...prev];
        updated[index] = { ...updated[index], ...data }; // 👈 FIX HERE
        return updated;
      }

      // If new → ADD
      return [data, ...prev];
    });
  };

  const handleDeleteShipment = (id) => {
    setShipments((prev) => prev.filter((s) => s.id !== id));
    setShipment((prev) => (prev?.id === id ? null : prev));
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">

      <CreateShipment setShipment={handleNewShipment} />
      <TrackShipment setShipment={handleNewShipment} />

      <div className="md:col-span-2 space-y-6">

        {/* Shipment List */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Recent Shipments
          </h3>

          <ShipmentList
            shipments={shipments}
            onSelect={setShipment}
          />
        </div>

        {/* Selected Shipment */}
        <ShipmentResult shipment={shipment} setShipment={setShipment} />
        <UpdateShipment
          shipment={shipment}
          setShipment={setShipment}
          onDelete={handleDeleteShipment}
        />

      </div>

    </div>
  );
}

export default Dashboard;
