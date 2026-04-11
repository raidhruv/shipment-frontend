const BASE_URL = "http://localhost:8080";

async function createShipment() {
  // STEP 1 — clear stale output
  document.getElementById("result").innerText = "Loading...";

  const name = document.getElementById("name").value;
  

  try {
    const res = await fetch(`${BASE_URL}/shipment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    console.log("CREATE RESPONSE:", data);

    // STEP 3 — auto-fill ID
    document.getElementById("shipmentId").value = data.id;
    console.log("Auto-filled ID:", document.getElementById("shipmentId").value);

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    document.getElementById("result").innerText =
      "Error creating shipment";
  }
}

async function getShipment() {
  const id = document.getElementById("shipmentId").value;

  // STEP 1 — clear stale output
  document.getElementById("result").innerText = "Loading...";

  // STEP 4 — logging (truth)
  console.log("GET ID:", id);

  try {
    const res = await fetch(`${BASE_URL}/shipment/${id}`);

    // STEP 4 — log status
    console.log("STATUS:", res.status);

    // STEP 2 — handle errors
    if (!res.ok) {
      document.getElementById("result").innerText =
        "Shipment not found";
      return;
    }

    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    document.getElementById("result").innerText =
      "Network error";
  }
}