import { useState } from "react";
import CreateShipment from "../components/CreateShipment";
import TrackShipment from "../components/TrackShipment";
import ShipmentResult from "../components/ShipmentResult";
import UpdateShipment from "../components/UpdateShipment";

function Dashboard() {
  const [shipment, setShipment] = useState(null);

  return (
    <div className="grid gap-8 md:grid-cols-2">

      <CreateShipment setShipment={setShipment} />
      <TrackShipment setShipment={setShipment} />

      <div className="md:col-span-2 grid gap-8">
        <ShipmentResult shipment={shipment} setShipment={setShipment} />
        <UpdateShipment shipment={shipment} setShipment={setShipment} />
      </div>

    </div>
  );
}

export default Dashboard;