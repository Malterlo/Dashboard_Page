import { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { Button } from "@/Components/ui/button";
import "./index.css";
import AppSidebar from "./pages/dashboard/appsidebar.jsx";
import Linechart from "./pages/dashboard/linechart";
import Pichart from "./pages/dashboard/pichart";
import KpiCard from "./pages/dashboard/kpicard.jsx";
import AnalyticsPage from "./pages/Analytics/Analytics.jsx";
import EmployeesPage from "./pages/Employees/Employees.jsx";
import AboutPage from "./pages/about/about.jsx";
import { DollarSign, Users, Activity, CreditCard, Moon, Sun } from "lucide-react";

function HomePage() {
  return (
    <>
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
    </>
  );
}

function PageLayout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const pageTitle = {
    "/": "Dashboard",
    "/analytics": "Analytics",
    "/employees": "Employees",
    "/about": "About",
    "/settings": "Settings",
  }[pathname] ?? "Dashboard";

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen flex-1 bg-background p-4 text-foreground sm:p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#5e81ac] dark:text-[#88c0d0]">Overview</p>
              <h1 className="text-2xl font-semibold tracking-tight">{pageTitle}</h1>
            </div>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                onClick={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
              </Button>
              <SidebarTrigger className="text-muted-foreground" />
            </div>
          </div>

          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;