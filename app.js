const BASE_URL = "http://localhost:8080";

async function createShipment() {
  console.log("STEP 1: Button clicked");

  const name = document.getElementById("name").value;
  console.log("STEP 2: Input value =", name);

  try {
    const res = await fetch(`${BASE_URL}/shipment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    console.log("STEP 3: Response received", res);

    const data = await res.json();
    console.log("STEP 4: Parsed JSON", data);

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error("STEP ERROR:", err);
  }
}

async function getShipment() {
  const id = document.getElementById("shipmentId").value;

  const res = await fetch(`${BASE_URL}/shipment/${id}`);
  const data = await res.json();

  document.getElementById("result").innerText = JSON.stringify(data, null, 2);
}