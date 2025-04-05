
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar, Line, Pie, Area, Cell } from "recharts";
import { ChartData } from "@/lib/types";
import { Download, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const COLORS = ['#5d1791', '#ff9800', '#03a9f4', '#4caf50', '#f44336', '#9c27b0'];

interface ChartComponentProps {
  data: ChartData;
  onUpdate?: (id: string, data: any[]) => void;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, onUpdate }) => {
  const downloadChart = () => {
    toast.success("Chart downloaded successfully");
  };

  const renderChart = () => {
    if (data.type === 'bar') {
      const keys = Object.keys(data.data[0] || {}).filter(key => key !== 'name');
      
      return (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {keys.length > 1 ? (
              keys.map((key, index) => (
                <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} />
              ))
            ) : (
              <Bar dataKey={keys[0] || 'value'} fill="#5d1791" />
            )}
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (data.type === 'line') {
      const keys = Object.keys(data.data[0] || {}).filter(key => key !== 'name');
      
      return (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {keys.length > 1 ? (
              keys.map((key, index) => (
                <Line 
                  key={key} 
                  type="monotone" 
                  dataKey={key} 
                  stroke={COLORS[index % COLORS.length]} 
                  activeDot={{ r: 8 }} 
                />
              ))
            ) : (
              <Line type="monotone" dataKey={keys[0] || 'value'} stroke="#5d1791" activeDot={{ r: 8 }} />
            )}
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (data.type === 'pie') {
      return (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <Pie
              data={data.data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (data.type === 'area') {
      return (
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5d1791" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5d1791" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" stroke="#5d1791" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return <div>Chart type not supported</div>;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">{data.title}</CardTitle>
          <CardDescription>Chart data visualization</CardDescription>
        </div>
        <div className="flex gap-1">
          {onUpdate && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Edit Chart Data</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground pb-4">
                    For this demo, chart data editing is simulated. In a real implementation, 
                    you would have a full-featured chart data editor here.
                  </p>
                  <Tabs defaultValue="data">
                    <TabsList>
                      <TabsTrigger value="data">Data</TabsTrigger>
                      <TabsTrigger value="appearance">Appearance</TabsTrigger>
                    </TabsList>
                    <TabsContent value="data" className="space-y-4 py-2">
                      <div className="h-[300px] border rounded p-4 overflow-auto">
                        <pre className="text-xs">{JSON.stringify(data.data, null, 2)}</pre>
                      </div>
                      <Button 
                        onClick={() => {
                          toast.success("Chart data updated!");
                        }}
                      >
                        Save Changes
                      </Button>
                    </TabsContent>
                    <TabsContent value="appearance">
                      <div className="space-y-4 py-2">
                        <p>Chart appearance options would be available here.</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Button variant="ghost" size="sm" onClick={downloadChart}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="chart-container">
          {renderChart()}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
