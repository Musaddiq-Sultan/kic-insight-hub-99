
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { teams } from "@/lib/data";
import SideNav from "@/components/layout/SideNav";
import Header from "@/components/layout/Header";
import KICLogo from "@/components/layout/KICLogo";

const Index = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-64">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight">Welcome to KIC Insight Hub</h1>
                <p className="text-muted-foreground">
                  Your comprehensive analytics platform for monitoring team performance
                </p>
              </div>
              <div className="flex items-center justify-center">
                <KICLogo size={120} />
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Dashboards Overview</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {teams.map((team) => (
                  <Card key={team.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/team/${team.id}`}>
                        <Button className="w-full">
                          View Dashboard
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Team Members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">42</p>
                    <p className="text-xs text-muted-foreground">Across all departments</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Startups Incubated</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-xs text-muted-foreground">Total since inception</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Events Organized</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-xs text-muted-foreground">In the current year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Social Media Followers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">12.8k</p>
                    <p className="text-xs text-muted-foreground">Across all platforms</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>About KIC Insight Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    KIC Insight Hub is your comprehensive data analytics dashboard for monitoring 
                    and managing all KIC teams. This platform provides real-time analytics, 
                    visualizations, and data management tools to help drive informed decisions and 
                    improve team performance.
                  </p>
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Real-time team performance tracking</li>
                      <li>Interactive data visualizations</li>
                      <li>Editable data tables for quick updates</li>
                      <li>Export functionality for reports</li>
                      <li>Consolidated view of all KIC activities</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
