import { Button } from "@/components/ui/button";
import { Package, Truck, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex h-screen flex-col border-r bg-background p-4">

      <div className="mb-6 text-lg font-semibold">
        Logistics
      </div>

      <nav className="flex flex-col gap-2">
        <Button variant="ghost" className="justify-start gap-2">
          <Package size={16} /> Dashboard
        </Button>

        <Button variant="ghost" className="justify-start gap-2">
          <Truck size={16} /> Create Shipment
        </Button>

        <Button variant="ghost" className="justify-start gap-2">
          <Search size={16} /> Track Shipment
        </Button>
      </nav>

    </aside>
  );
}
