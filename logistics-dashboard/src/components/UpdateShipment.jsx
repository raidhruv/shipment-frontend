//update shipment component
import { useState, useEffect } from "react";
import { updateShipment } from "../api/shipment";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

function UpdateShipment({ shipment, setShipment }) {
  const [status, setStatus] = useState(shipment?.status || "");
  const [location, setLocation] = useState(shipment?.location || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (shipment) {
      setStatus(shipment.status || "");
      setLocation(shipment.location || "");
    }
  }, [shipment]);

  if (!shipment) return null;

  const handleUpdate = async () => {
    const payload = {};

    if (status && status !== shipment.status) {
      payload.status = status;
    }

    if (location && location !== shipment.location) {
      payload.location = location;
      payload.appendTransit = true;
    }

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
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader>
        <CardTitle className="text-xl">Update Shipment</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {/* STATUS */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Status</Label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="">Select Status</option>
            <option value="created">Created</option>
            <option value="in-transit">In Transit</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        {/* LOCATION */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Location</Label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* ACTION */}
        <div className="pt-2">
          <Button
            size="pill"
            onClick={handleUpdate}
            disabled={loading}
            className="w-fit"
          >
            {loading ? "Updating..." : "Update Shipment"}
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default UpdateShipment;
