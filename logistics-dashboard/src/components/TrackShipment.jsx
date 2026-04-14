// TrackShipment.jsx
import { useState } from "react";
import { getShipment } from "../api/shipment";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

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
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader>
        <CardTitle className="text-xl">Track Shipment</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">

        <div className="space-y-2">
          <Label className="text-sm font-medium">Shipment ID</Label>
          <Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter shipment ID"
          />
        </div>

        <Button
          onClick={handleTrack}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Tracking..." : "Track Shipment"}
        </Button>

      </CardContent>
    </Card>
  );
}

export default TrackShipment;