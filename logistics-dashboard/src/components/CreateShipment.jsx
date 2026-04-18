// CreateShipment.jsx
import { useState } from "react";
import { createShipment } from "../api/shipment";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

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
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader>
        <CardTitle className="text-xl">Create Shipment</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Shipment Details</Label>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter shipment details"
          />
        </div>

        <div className="pt-2">
          <Button
            size="pill"
            onClick={handleCreate}
            disabled={loading}
            className="w-fit"
          >
            {loading ? "Creating..." : "Create Shipment"}
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default CreateShipment;