import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/Components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Building2, BarChart3 } from "lucide-react";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "About", url: "/about", icon: Building2 },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-lg shadow-slate-300/40 dark:shadow-black/20">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 ">
            <img src="https://lifesurge.com/wp-content/uploads/charlie-kirk-memorial-tribute.webp" className="rounded-4xl" />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-sidebar-foreground/60">Mongkol.Arun&co</div>
            <div className="text-base font-semibold text-sidebar-foreground">Blackboard</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sidebar-foreground/60">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-3">
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) => [
                          "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-linear-to-r from-sky-500 to-cyan-400 text-white shadow-sm shadow-sky-300/70"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        ].join(" ")}
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={[
                                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                                isActive
                                  ? "bg-white/15 text-white"
                                  : "bg-sidebar-accent text-sidebar-foreground group-hover:bg-sidebar-accent group-hover:text-sidebar-accent-foreground",
                              ].join(" ")}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>{item.title}</span>
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}