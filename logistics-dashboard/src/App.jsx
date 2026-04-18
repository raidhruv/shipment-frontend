import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/layout/AppLayout";
import CreateShipment from "./components/CreateShipment";
import TrackShipment from "./components/TrackShipment";
import UpdateShipment from "./components/UpdateShipment";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateShipment />} />
        <Route path="/track" element={<TrackShipment />} />
        <Route path="/update" element={<UpdateShipment />} />
      </Routes>
    </AppLayout>
  );
}

export default App;