// Dashboard.jsx
import { useState } from "react";
import CreateShipment from "../components/CreateShipment";
import TrackShipment from "../components/TrackShipment";
import ShipmentResult from "../components/ShipmentResult";

function Dashboard() {
  const [shipment, setShipment] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CreateShipment setShipment={setShipment} />
      <TrackShipment setShipment={setShipment} />

      <div className="md:col-span-2">
        <ShipmentResult shipment={shipment} />
      </div>
    </div>
  );
}

export default Dashboard;