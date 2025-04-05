
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { teams } from "@/lib/data";
import { ChevronRight, LayoutDashboard, LogOut, Settings } from "lucide-react";

const SideNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-screen flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-md bg-sidebar-accent p-1">
            <div className="kic-logo-text text-xl tracking-tight">
              K<span className="i-dot">i</span>C
            </div>
          </div>
          <span className="font-semibold text-lg hidden md:block">KIC Insight Hub</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-4">
          <div className="py-2">
            <h4 className="mb-1 text-sm font-medium text-sidebar-foreground/60 pl-4">Overview</h4>
            <div className="space-y-1">
              <Link
                to="/"
                className={`group flex items-center rounded-md px-3 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                  currentPath === "/" ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                }`}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
              </Link>
            </div>
          </div>
          <div className="py-2">
            <h4 className="mb-1 text-sm font-medium text-sidebar-foreground/60 pl-4">Teams</h4>
            <div className="space-y-1">
              {teams.map((team) => {
                const isActive = currentPath === `/team/${team.id}`;
                const IconComponent = getIconByName(team.icon);
                
                return (
                  <Link
                    key={team.id}
                    to={`/team/${team.id}`}
                    className={`group flex items-center rounded-md px-3 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                    }`}
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    <span>{team.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-sidebar-accent h-8 w-8 flex items-center justify-center">
              <span className="font-medium text-sm">YK</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Yasir Khan</p>
              <p className="text-xs text-sidebar-foreground/60">Team Leader</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="h-8 w-8 rounded-md hover:bg-sidebar-accent flex items-center justify-center">
              <Settings className="h-4 w-4" />
            </button>
            <button className="h-8 w-8 rounded-md hover:bg-sidebar-accent flex items-center justify-center">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function getIconByName(name: string) {
  // Import icons dynamically based on name
  const { BarChart, Calendar, Share2, Rocket, Users } = require("lucide-react");
  
  const iconMap: Record<string, any> = {
    "bar-chart": BarChart,
    "calendar": Calendar,
    "share": Share2,
    "rocket": Rocket,
    "users": Users,
  };
  
  return iconMap[name] || Share2;
}

export default SideNav;
