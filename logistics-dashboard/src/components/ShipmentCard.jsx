import { Card } from "@/components/ui/card";
import StatusHeader from "./StatusHeader";
import ProgressTracker from "./ProgressTracker";
import InfoBox from "./InfoBox";

export default function ShipmentCard({ shipment }) {
  return (
    <Card className="p-6 rounded-2xl">
      <StatusHeader shipment={shipment} />
      <ProgressTracker shipment={shipment} />
      {shipment.status !== "delivered" && <InfoBox />}
    </Card>
  );
}