const BASE_URL = "http://localhost:8080";

async function createShipment() {
  const name = document.getElementById("name").value;

  const res = await fetch(`${BASE_URL}/shipment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  const data = await res.json();
  document.getElementById("result").innerText = JSON.stringify(data, null, 2);
}

async function getShipment() {
  const id = document.getElementById("shipmentId").value;

  const res = await fetch(`${BASE_URL}/shipment/${id}`);
  const data = await res.json();

  document.getElementById("result").innerText = JSON.stringify(data, null, 2);
}