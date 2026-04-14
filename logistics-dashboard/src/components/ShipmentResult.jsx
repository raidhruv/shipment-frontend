//shipment result component
import { deleteShipment } from "../api/shipment";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import ProgressTracker from "./ProgressTracker";
import { mapShipmentToUI } from "@/lib/shipmentMapper";

import TransitTimeline from "./TransitTimeline";

function ShipmentResult({ shipment, setShipment }) {
  if (!shipment) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Shipment Details</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground italic">
            Create or track a shipment to see details here
          </p>
        </CardContent>
      </Card>
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

  const uiShipment = mapShipmentToUI(shipment);

  return (
  <Card className="shadow-sm hover:shadow-md transition">
    <CardHeader>
      <CardTitle className="text-xl">Shipment Details</CardTitle>
    </CardHeader>

    <CardContent className="space-y-5">

      {/* STATUS - LEFT ALIGNED */}
      <div>
        <Badge className={`px-3 py-1 text-xs font-semibold tracking-wide
          
            ${shipment.status === "created" ? "bg-yellow-100 text-yellow-800 border border-yellow-200" : ""}
            ${shipment.status === "in-transit" ? "bg-blue-100 text-blue-800 border border-blue-200" : ""}
            ${shipment.status === "delivered" ? "bg-green-100 text-green-800 border border-green-200" : ""}
          `}
        >
          {shipment.status}
        </Badge>
      </div>

      {/* DETAILS */}
      <div className="text-sm">

        <div className="space-y-1 text-sm">

          <div>
            <span className="text-muted-foreground text-sm">Shipment ID: </span>
            <span className="font-medium">{shipment.id}</span>
          </div>

          <div>
            <span className="text-muted-foreground text-sm">Location: </span>
            <span className="font-medium">{shipment.location}</span>
          </div>

        </div>

      </div>

      {/* PROGRESS TRACKER */}
      <div className="pt-2">
        <ProgressTracker shipment={uiShipment} />
      </div>
    
      <div className="pt-3">
        <TransitTimeline points={shipment.transit_points || []} />
      </div> 

      <Separator />

      {/* ACTION */}
      <div>
        <Button 
        onClick={handleDelete}
        className="bg-red-600 text-white hover:bg-red-700">
          Delete Shipment
        </Button>
      </div>

    </CardContent>
  </Card>
);
}

export default ShipmentResult;