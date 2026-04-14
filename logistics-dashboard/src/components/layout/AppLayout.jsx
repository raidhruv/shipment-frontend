import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="grid lg:grid-cols-[240px_1fr]">

        <Sidebar />

        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 p-8 lg:p-10">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}