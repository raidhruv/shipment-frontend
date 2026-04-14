export function mapShipmentToUI(shipment) {
  const statusMap = {
    created: 0,
    "in-transit": 1,
    delivered: 2
  };

  const currentStep = statusMap[shipment.status] ?? 0;

  return {
    status: shipment.status,
    isOnTime: shipment.on_time ?? true,
    currentStep,
    steps: [
      {
        label: "Created",
        date: shipment.created_at || "—"
      },
      {
        label: "In Transit",
        date: shipment.updated_at || "—"
      },
      {
        label: "Delivered",
        date: shipment.delivered_at || "Pending"
      }
    ]
  };
}