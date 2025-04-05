
import { DashboardData, Team, TeamType } from "./types";

export const teams: Team[] = [
  {
    id: 'social-media',
    name: 'Social Media Team',
    description: 'Manages all social media platforms and content',
    icon: 'share',
  },
  {
    id: 'hr',
    name: 'HR Team',
    description: 'Handles recruitment, training, and team management',
    icon: 'users',
  },
  {
    id: 'events',
    name: 'Events & Community Team',
    description: 'Organizes workshops, networking events, and community building',
    icon: 'calendar',
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics Team',
    description: 'Analyzes data and provides insights for decision making',
    icon: 'bar-chart',
  },
  {
    id: 'startup',
    name: 'Startup Support Team',
    description: 'Provides mentorship and resources to incubated startups',
    icon: 'rocket',
  },
];

export const findTeam = (id: TeamType): Team => {
  return teams.find(team => team.id === id) || teams[0];
};

export const dashboardData: Record<TeamType, DashboardData> = {
  'social-media': {
    teamId: 'social-media',
    stats: [
      { id: '1', label: 'Followers', value: '12,845', change: 12.4, changeLabel: 'from last month' },
      { id: '2', label: 'Engagement Rate', value: '4.2%', change: 0.8, changeLabel: 'from last month' },
      { id: '3', label: 'Total Posts', value: 342, change: 24, changeLabel: 'new this month' },
      { id: '4', label: 'Avg. Reach', value: '8,925', change: -2.1, changeLabel: 'from last month' },
    ],
    charts: [
      {
        id: 'follower-growth',
        title: 'Follower Growth',
        type: 'line',
        data: [
          { name: 'Jan', Instagram: 5200, Facebook: 3400, LinkedIn: 2100, Twitter: 1800 },
          { name: 'Feb', Instagram: 5600, Facebook: 3450, LinkedIn: 2300, Twitter: 1900 },
          { name: 'Mar', Instagram: 6100, Facebook: 3500, LinkedIn: 2400, Twitter: 2000 },
          { name: 'Apr', Instagram: 6700, Facebook: 3600, LinkedIn: 2600, Twitter: 2050 },
          { name: 'May', Instagram: 7200, Facebook: 3650, LinkedIn: 2800, Twitter: 2100 },
          { name: 'Jun', Instagram: 7800, Facebook: 3700, LinkedIn: 3000, Twitter: 2200 },
        ]
      },
      {
        id: 'engagement-by-platform',
        title: 'Engagement by Platform',
        type: 'bar',
        data: [
          { name: 'Instagram', value: 4200 },
          { name: 'Facebook', value: 2800 },
          { name: 'LinkedIn', value: 1900 },
          { name: 'Twitter', value: 1200 },
        ]
      }
    ],
    tables: [
      {
        id: 'top-posts',
        title: 'Best Performing Posts',
        columns: [
          { key: 'date', header: 'Date' },
          { key: 'platform', header: 'Platform' },
          { key: 'content', header: 'Content' },
          { key: 'engagement', header: 'Engagement' },
          { key: 'reach', header: 'Reach' },
        ],
        rows: [
          { id: '1', date: '2023-03-15', platform: 'Instagram', content: 'Workshop Announcement', engagement: 1245, reach: 7890 },
          { id: '2', date: '2023-03-10', platform: 'LinkedIn', content: 'Success Story', engagement: 872, reach: 5400 },
          { id: '3', date: '2023-03-05', platform: 'Facebook', content: 'Team Introduction', engagement: 785, reach: 4320 },
          { id: '4', date: '2023-02-28', platform: 'Twitter', content: 'Industry News', engagement: 456, reach: 2800 },
        ]
      }
    ]
  },
  'hr': {
    teamId: 'hr',
    stats: [
      { id: '1', label: 'Team Members', value: 42, change: 3, changeLabel: 'new this month' },
      { id: '2', label: 'Open Positions', value: 5, change: -2, changeLabel: 'from last month' },
      { id: '3', label: 'Retention Rate', value: '94%', change: 2, changeLabel: 'from last month' },
      { id: '4', label: 'Training Hours', value: 156, change: 24, changeLabel: 'from last month' },
    ],
    charts: [
      {
        id: 'team-growth',
        title: 'Team Growth',
        type: 'line',
        data: [
          { name: 'Jan', value: 32 },
          { name: 'Feb', value: 35 },
          { name: 'Mar', value: 37 },
          { name: 'Apr', value: 39 },
          { name: 'May', value: 40 },
          { name: 'Jun', value: 42 },
        ]
      },
      {
        id: 'team-composition',
        title: 'Team Composition',
        type: 'pie',
        data: [
          { name: 'Full-time', value: 18 },
          { name: 'Part-time', value: 12 },
          { name: 'Volunteers', value: 24 },
        ]
      }
    ],
    tables: [
      {
        id: 'recruitment',
        title: 'Recruitment Status',
        columns: [
          { key: 'position', header: 'Position' },
          { key: 'department', header: 'Department' },
          { key: 'applicants', header: 'Applicants' },
          { key: 'status', header: 'Status' },
          { key: 'deadline', header: 'Deadline' },
        ],
        rows: [
          { id: '1', position: 'Developer', department: 'IT', applicants: 15, status: 'Open', deadline: '2023-04-30' },
          { id: '2', position: 'Designer', department: 'Design', applicants: 8, status: 'Interview', deadline: '2023-04-15' },
          { id: '3', position: 'Marketing Specialist', department: 'Marketing', applicants: 12, status: 'Open', deadline: '2023-04-30' },
          { id: '4', position: 'Project Manager', department: 'Operations', applicants: 6, status: 'Review', deadline: '2023-04-10' },
        ]
      }
    ]
  },
  'events': {
    teamId: 'events',
    stats: [
      { id: '1', label: 'Events YTD', value: 24, change: 4, changeLabel: 'from last quarter' },
      { id: '2', label: 'Avg. Attendance', value: 76, change: 12, changeLabel: 'from last year' },
      { id: '3', label: 'Satisfaction Rate', value: '4.8/5', change: 0.3, changeLabel: 'from last event' },
      { id: '4', label: 'Total Sponsors', value: 15, change: 3, changeLabel: 'new this year' },
    ],
    charts: [
      {
        id: 'event-attendance',
        title: 'Event Attendance',
        type: 'bar',
        data: [
          { name: 'Workshop A', value: 65 },
          { name: 'Networking', value: 85 },
          { name: 'Hackathon', value: 120 },
          { name: 'Panel', value: 55 },
          { name: 'Workshop B', value: 70 },
        ]
      },
      {
        id: 'satisfaction-ratings',
        title: 'Event Satisfaction Ratings',
        type: 'line',
        data: [
          { name: 'Workshop A', value: 4.5 },
          { name: 'Networking', value: 4.7 },
          { name: 'Hackathon', value: 4.8 },
          { name: 'Panel', value: 4.2 },
          { name: 'Workshop B', value: 4.6 },
        ]
      }
    ],
    tables: [
      {
        id: 'upcoming-events',
        title: 'Upcoming Events',
        columns: [
          { key: 'date', header: 'Date' },
          { key: 'event', header: 'Event' },
          { key: 'registrations', header: 'Registrations' },
          { key: 'capacity', header: 'Capacity' },
          { key: 'status', header: 'Status' },
        ],
        rows: [
          { id: '1', date: '2023-04-15', event: 'Developer Workshop', registrations: 45, capacity: 60, status: 'Open' },
          { id: '2', date: '2023-04-22', event: 'Networking Mixer', registrations: 65, capacity: 80, status: 'Open' },
          { id: '3', date: '2023-05-05', event: 'Startup Pitch', registrations: 30, capacity: 50, status: 'Open' },
          { id: '4', date: '2023-05-12', event: 'Panel Discussion', registrations: 55, capacity: 60, status: 'Almost Full' },
        ]
      }
    ]
  },
  'data-analytics': {
    teamId: 'data-analytics',
    stats: [
      { id: '1', label: 'Website Traffic', value: '34.5K', change: 18.2, changeLabel: 'from last month' },
      { id: '2', label: 'Conversion Rate', value: '3.2%', change: 0.5, changeLabel: 'from last month' },
      { id: '3', label: 'Avg. Session', value: '3:45', change: 0.2, changeLabel: 'from last month' },
      { id: '4', label: 'New Users', value: '1.8K', change: 12.4, changeLabel: 'from last month' },
    ],
    charts: [
      {
        id: 'traffic-sources',
        title: 'Traffic Sources',
        type: 'pie',
        data: [
          { name: 'Direct', value: 35 },
          { name: 'Social', value: 25 },
          { name: 'Referral', value: 20 },
          { name: 'Organic', value: 15 },
          { name: 'Email', value: 5 },
        ]
      },
      {
        id: 'monthly-website-traffic',
        title: 'Monthly Website Traffic',
        type: 'area',
        data: [
          { name: 'Jan', value: 28000 },
          { name: 'Feb', value: 29200 },
          { name: 'Mar', value: 31500 },
          { name: 'Apr', value: 32800 },
          { name: 'May', value: 33900 },
          { name: 'Jun', value: 34500 },
        ]
      }
    ],
    tables: [
      {
        id: 'top-pages',
        title: 'Top Performing Pages',
        columns: [
          { key: 'page', header: 'Page' },
          { key: 'views', header: 'Views' },
          { key: 'unique', header: 'Unique Views' },
          { key: 'bounce', header: 'Bounce Rate' },
          { key: 'time', header: 'Avg. Time' },
        ],
        rows: [
          { id: '1', page: '/home', views: 12500, unique: 9800, bounce: '35%', time: '2:30' },
          { id: '2', page: '/events', views: 8700, unique: 7200, bounce: '28%', time: '3:15' },
          { id: '3', page: '/startups', views: 7500, unique: 6400, bounce: '32%', time: '2:45' },
          { id: '4', page: '/about', views: 6800, unique: 5900, bounce: '40%', time: '1:50' },
        ]
      }
    ]
  },
  'startup': {
    teamId: 'startup',
    stats: [
      { id: '1', label: 'Startups Incubated', value: 28, change: 5, changeLabel: 'new this year' },
      { id: '2', label: 'Funding Raised', value: '$1.8M', change: 0.4, changeLabel: 'million from last year' },
      { id: '3', label: 'Mentorship Hours', value: 456, change: 72, changeLabel: 'from last quarter' },
      { id: '4', label: 'Success Rate', value: '65%', change: 5, changeLabel: 'from last batch' },
    ],
    charts: [
      {
        id: 'startup-funding',
        title: 'Startup Funding (in thousands $)',
        type: 'bar',
        data: [
          { name: 'Pre-seed', value: 520 },
          { name: 'Seed', value: 780 },
          { name: 'Series A', value: 500 },
        ]
      },
      {
        id: 'startup-growth',
        title: 'Startup Growth Over Time',
        type: 'line',
        data: [
          { name: '2018', value: 5 },
          { name: '2019', value: 8 },
          { name: '2020', value: 12 },
          { name: '2021', value: 18 },
          { name: '2022', value: 23 },
          { name: '2023', value: 28 },
        ]
      }
    ],
    tables: [
      {
        id: 'incubated-startups',
        title: 'Incubated Startups',
        columns: [
          { key: 'name', header: 'Startup' },
          { key: 'industry', header: 'Industry' },
          { key: 'stage', header: 'Stage' },
          { key: 'funding', header: 'Funding' },
          { key: 'status', header: 'Status' },
        ],
        rows: [
          { id: '1', name: 'TechSolutions', industry: 'SaaS', stage: 'Seed', funding: '$250K', status: 'Active' },
          { id: '2', name: 'GreenEnergy', industry: 'CleanTech', stage: 'Pre-seed', funding: '$120K', status: 'Active' },
          { id: '3', name: 'HealthAI', industry: 'HealthTech', stage: 'Series A', funding: '$500K', status: 'Graduated' },
          { id: '4', name: 'EduLearn', industry: 'EdTech', stage: 'Seed', funding: '$280K', status: 'Active' },
        ]
      }
    ]
  }
};
