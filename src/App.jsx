import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./index.css";
import Linechart from "./Components/ui/charts/linechart";
import KpiCard from "./Components/ui/charts/kpicard.jsx";
import AppSidebar from "./Components/ui/charts/appsidebar.jsx";
import { DollarSign, Users, Activity, CreditCard } from "lucide-react";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-6 space-y-6">
        <SidebarTrigger />

        <div className="grid grid-cols-4 gap-4">
          <KpiCard
            title="Total Revenue"
            value="$45,231"
            change="+20.1%"
            icon={DollarSign}
          />
          <KpiCard
            title="Active Users"
            value="2,350"
            change="+15.3%"
            icon={Users}
          />
          <KpiCard
            title="Sales"
            value="1,234"
            change="-3.2%"
            icon={CreditCard}
          />
          <KpiCard
            title="Active Now"
            value="573"
            change="+2.1%"
            icon={Activity}
          />
        </div>

        <Linechart />
      </main>
    </SidebarProvider>
  );
}

export default App;