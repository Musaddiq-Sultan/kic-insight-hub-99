
export type TeamType = 'social-media' | 'hr' | 'events' | 'data-analytics' | 'startup';

export interface Team {
  id: TeamType;
  name: string;
  description: string;
  icon: string;
}

export interface StatData {
  id: string;
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
}

export interface ChartData {
  id: string;
  title: string;
  type: 'bar' | 'line' | 'pie' | 'area';
  data: any[];
}

export interface TableData {
  id: string;
  title: string;
  columns: {
    key: string;
    header: string;
  }[];
  rows: Record<string, any>[];
}

export interface DashboardData {
  teamId: TeamType;
  stats: StatData[];
  charts: ChartData[];
  tables: TableData[];
}
