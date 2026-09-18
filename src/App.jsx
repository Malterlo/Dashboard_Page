import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import "./index.css";
import Linechart from "./Components/ui/charts/linechart";
import Pichart from "./Components/ui/charts/pichart";
import KpiCard from "./Components/ui/charts/kpicard.jsx";
import AppSidebar from "./Components/ui/charts/appsidebar.jsx";
import { DollarSign, Users, Activity, CreditCard } from "lucide-react";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen flex-1 bg-[#e5e9f0] p-4 text-[#2e3440] sm:p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#5e81ac]">Overview</p>
              <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            </div>
            <SidebarTrigger className="text-[#4c566a]" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard title="Total Revenue" value="$45,231" change="+20.1%" icon={DollarSign} />
            <KpiCard title="Active Users" value="2,350" change="+15.3%" icon={Users} />
            <KpiCard title="Sales" value="1,234" change="-3.2%" icon={CreditCard} />
            <KpiCard title="Active Now" value="573" change="+2.1%" icon={Activity} />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(340px,1fr)]">
            <Linechart />
            <Pichart />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;