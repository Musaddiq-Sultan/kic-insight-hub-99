
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Edit2 } from "lucide-react";
import { StatData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface StatCardProps {
  data: StatData;
  onUpdate?: (id: string, value: string | number) => void;
}

const StatCard: React.FC<StatCardProps> = ({ data, onUpdate }) => {
  const [value, setValue] = React.useState<string | number>(data.value);

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(data.id, value);
      toast.success("Stat updated successfully");
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{data.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.value}</div>
        {data.change !== undefined && (
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            {data.change > 0 ? (
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
            ) : (
              <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
            )}
            <span className={data.change > 0 ? "text-green-500" : "text-red-500"}>
              {Math.abs(data.change)}%
            </span>{" "}
            {data.changeLabel}
          </p>
        )}
      </CardContent>
      {onUpdate && (
        <CardFooter className="pt-0 justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Edit2 className="h-3 w-3 mr-1" /> Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update {data.label}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="value">Value</Label>
                  <Input 
                    id="value" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <Button onClick={handleUpdate}>Update</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      )}
    </Card>
  );
};

export default StatCard;
