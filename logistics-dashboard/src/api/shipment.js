const BASE_URL = import.meta.env.VITE_API_URL;
console.log("API BASE:", BASE_URL);
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
export async function updateShipment(id, data) {
  const res = await fetch(`${BASE_URL}/shipment/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update shipment");
  }

  return await res.json();
}

// DELETE SHIPMENT
export async function deleteShipment(id) {
  const res = await fetch(`${BASE_URL}/shipment/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete shipment");
  }

  return true;
}