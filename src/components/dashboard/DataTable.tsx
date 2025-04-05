
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Edit2, Download, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableData } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

interface DataTableProps {
  data: TableData;
  onUpdate?: (id: string, rows: Record<string, any>[]) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [tableData, setTableData] = useState<Record<string, any>[]>(data.rows);
  const [newRow, setNewRow] = useState<Record<string, any>>({});
  const [showAddDialog, setShowAddDialog] = useState(false);

  const handleCellChange = (rowIndex: number, key: string, value: any) => {
    const newData = [...tableData];
    newData[rowIndex] = { ...newData[rowIndex], [key]: value };
    setTableData(newData);
  };

  const handleAddRow = () => {
    const rowWithId = { ...newRow, id: `new-${Date.now()}` };
    setTableData([...tableData, rowWithId]);
    setNewRow({});
    setShowAddDialog(false);
    toast.success("Row added successfully");
  };

  const handleDeleteRow = (index: number) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
    toast.success("Row deleted successfully");
  };

  const saveChanges = () => {
    if (onUpdate) {
      onUpdate(data.id, tableData);
    }
    setEditMode(false);
    toast.success("Table data updated successfully");
  };

  const downloadData = () => {
    // Create CSV content
    const headers = data.columns.map(col => col.header).join(',');
    const rows = tableData.map(row => 
      data.columns.map(col => row[col.key]).join(',')
    ).join('\n');
    const csvContent = `${headers}\n${rows}`;
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${data.title.replace(/\s+/g, '_')}.csv`);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Data downloaded successfully");
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">{data.title}</CardTitle>
          <CardDescription>Table data</CardDescription>
        </div>
        <div className="flex gap-1">
          {!editMode ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => setEditMode(true)}>
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={downloadData}>
                <Download className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setShowAddDialog(true)}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={saveChanges}>
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => {
                setEditMode(false);
                setTableData(data.rows);
              }}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                {data.columns.map((col) => (
                  <TableHead key={col.key}>{col.header}</TableHead>
                ))}
                {editMode && <TableHead className="w-[70px]">Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={row.id || rowIndex}>
                  {data.columns.map((col) => (
                    <TableCell key={col.key}>
                      {editMode ? (
                        <Input 
                          value={row[col.key] || ''} 
                          onChange={(e) => handleCellChange(rowIndex, col.key, e.target.value)}
                          className="h-8 w-full" 
                        />
                      ) : (
                        row[col.key]
                      )}
                    </TableCell>
                  ))}
                  {editMode && (
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteRow(rowIndex)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Row</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {data.columns.map((col) => (
              <div key={col.key} className="grid grid-cols-4 items-center gap-4">
                <label className="text-right">{col.header}</label>
                <Input
                  className="col-span-3"
                  value={newRow[col.key] || ''}
                  onChange={(e) => setNewRow({ ...newRow, [col.key]: e.target.value })}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddRow}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DataTable;
