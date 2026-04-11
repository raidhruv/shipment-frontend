const BASE_URL = "http://localhost:8080";

// CREATE SHIPMENT
export async function createShipment(data) {
  try {
    const res = await fetch(`${BASE_URL}/shipment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ details: data }),
    });

    if (!res.ok) {
      throw new Error("Failed to create shipment");
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
}

// GET SHIPMENT
export async function getShipment(id) {
  try {
    const res = await fetch(`${BASE_URL}/shipment/${id}`);

    if (!res.ok) {
      throw new Error("Shipment not found");
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
}
// UPDATE SHIPMENT
