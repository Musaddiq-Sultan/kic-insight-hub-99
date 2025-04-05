
import React from "react";
import { useParams } from "react-router-dom";
import SideNav from "@/components/layout/SideNav";
import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import ChartComponent from "@/components/dashboard/ChartComponent";
import DataTable from "@/components/dashboard/DataTable";
import { dashboardData } from "@/lib/data";
import { TeamType } from "@/lib/types";
import { toast } from "sonner";

const TeamDashboard = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const currentTeamId = teamId as TeamType || 'social-media';
  
  const data = dashboardData[currentTeamId];
  
  const updateStat = (id: string, value: string | number) => {
    // In a real app, this would call an API to update the data
    console.log(`Updating stat ${id} to ${value}`);
    toast.success("Stat updated successfully");
  };
  
  const updateChart = (id: string, chartData: any[]) => {
    // In a real app, this would call an API to update the chart data
    console.log(`Updating chart ${id}`);
    toast.success("Chart updated successfully");
  };
  
  const updateTable = (id: string, rows: Record<string, any>[]) => {
    // In a real app, this would call an API to update the table data
    console.log(`Updating table ${id} with ${rows.length} rows`);
    toast.success("Table updated successfully");
  };
  
  if (!data) {
    return (
      <div className="flex h-screen">
        <div className="hidden md:block md:w-64">
          <SideNav />
        </div>
        <div className="flex-1">
          <Header />
          <main className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-4">Team not found</h1>
          </main>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-64">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.stats.map((stat) => (
                  <StatCard key={stat.id} data={stat} onUpdate={updateStat} />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Analytics</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {data.charts.map((chart) => (
                  <ChartComponent key={chart.id} data={chart} onUpdate={updateChart} />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Data Tables</h2>
              <div className="grid gap-4">
                {data.tables.map((table) => (
                  <DataTable key={table.id} data={table} onUpdate={updateTable} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamDashboard;
