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
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Settings, BarChart3 } from "lucide-react";

const items = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard },
  { title: "Analytics", url: "#", icon: BarChart3 },
  { title: "Users", url: "#", icon: Users },
  { title: "Settings", url: "#", icon: Settings },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200 bg-[#edf4f8] text-slate-700 shadow-lg shadow-slate-300/40">
      <SidebarHeader className="border-b border-slate-200/80 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 ">
            <img src="https://lifesurge.com/wp-content/uploads/charlie-kirk-memorial-tribute.webp" className="rounded-4xl" />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Mongkol.Arun&co</div>
            <div className="text-base font-semibold text-slate-800">Blackboard</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-3">
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === 0;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={[
                          "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-sm shadow-sky-300/70"
                            : "text-slate-600 hover:bg-slate-200/80 hover:text-slate-900",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-slate-200 text-slate-500 group-hover:bg-slate-300 group-hover:text-slate-800",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.title}</span>
                      </a>
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