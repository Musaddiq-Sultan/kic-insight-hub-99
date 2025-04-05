
import React from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import { findTeam, teams } from "@/lib/data";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  
  let title = "Dashboard";
  let subtitle = "Analytics Overview";
  
  if (path.length > 2 && path[1] === "team") {
    const teamId = path[2] as any;
    const team = findTeam(teamId);
    title = team.name;
    subtitle = team.description;
  }
  
  return (
    <header className="bg-background border-b h-14 flex items-center px-4 md:px-6">
      <div className="flex-1">
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="md:w-[200px] lg:w-[300px] pl-8"
          />
        </div>
        <Button size="icon" variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-kic-orange rounded-full" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
