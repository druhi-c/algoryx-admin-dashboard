export const ALGORYX_SERVICES = [
  "Web & Mobile Development",
  "Cloud Solutions & DevOps",
  "AI / ML & Automation",
  "Cybersecurity & System Protection",
  "Data Engineering & Analytics",
  "Product Engineering & Consulting",
];

export const mockStats = {
  activeProjects: {
    label: "Active Projects",
    value: "42 Active",
    subtitle: "+4 starting this sprint",
    trend: "+12%",
    isPositive: true,
    icon: "folder_open",
  },
  enterpriseClients: {
    label: "Total Enterprise Clients",
    value: "128 Partners",
    subtitle: "Tier-1 Telecom, FinTech & Healthcare",
    trend: "+8 new YTD",
    isPositive: true,
    icon: "business",
  },
  enterpriseRevenue: {
    label: "Enterprise Revenue / Run Rate",
    value: "₹74.8L ARR",
    subtitle: "₹18.4L billed this month",
    trend: "+18.4% YoY",
    isPositive: true,
    icon: "trending_up",
  },
  taskCompletion: {
    label: "Sprint Task Completion",
    value: "94.6%",
    subtitle: "1,420 of 1,501 delivered",
    trend: "+2.1% velocity",
    isPositive: true,
    icon: "task_alt",
  },
};

export const mockTimeframeData = {
  "This Quarter": {
    subtitle: "6-Month Enterprise Trajectory & Recurring Billing Momentum",
    yLabels: ["₹80L", "₹65L", "₹50L", "₹35L"],
    points: [
      { label: "May", value: "₹42.5L", x: 60, y: 175, variance: "+5.7%" },
      { label: "Jun", value: "₹49.0L", x: 180, y: 150, variance: "+6.1%" },
      { label: "Jul", value: "₹56.5L", x: 300, y: 130, variance: "+5.4%" },
      { label: "Aug", value: "₹63.2L", x: 420, y: 95, variance: "+6.3%" },
      { label: "Sep", value: "₹69.4L", x: 540, y: 60, variance: "+4.9%" },
      { label: "Oct (Current)", value: "₹74.8L ARR", x: 660, y: 35, variance: "+18.4% Target Exceeded", isCurrent: true },
    ],
  },
  "Last 30 Days": {
    subtitle: "30-Day Sprint Billing: ₹18.4L Contract Billings Delivered",
    yLabels: ["₹20L", "₹15L", "₹10L", "₹5L"],
    points: [
      { label: "Week 1", value: "₹3.8L", x: 80, y: 170, variance: "+4.2%" },
      { label: "Week 2", value: "₹4.6L", x: 260, y: 135, variance: "+7.5%" },
      { label: "Week 3", value: "₹5.2L", x: 440, y: 90, variance: "+8.1%" },
      { label: "Week 4 (Now)", value: "₹6.1L", x: 640, y: 40, variance: "+12.4% Sprint Goal Reached", isCurrent: true },
    ],
  },
  "YTD": {
    subtitle: "Full Fiscal Year Run-Rate: ₹28.0L to ₹74.8L ARR (+167% Expansion)",
    yLabels: ["₹80L", "₹60L", "₹40L", "₹20L"],
    points: [
      { label: "Q1 FY26", value: "₹28.0L", x: 80, y: 185, variance: "+12.0%" },
      { label: "Q2 FY26", value: "₹44.5L", x: 260, y: 130, variance: "+22.4%" },
      { label: "Q3 FY26", value: "₹61.8L", x: 440, y: 75, variance: "+19.0%" },
      { label: "Q4 Target", value: "₹74.8L", x: 640, y: 35, variance: "+24.8% Projected Outperform", isCurrent: true },
    ],
  },
};

export const mockServiceDistribution = [
  { name: "Cloud Solutions & DevOps", shortName: "Cloud & DevOps", percentage: 38, color: "#1d4ed8" },
  { name: "AI / ML & Automation", shortName: "AI/ML & Auto", percentage: 26, color: "#0284c7" },
  { name: "Cybersecurity & System Protection", shortName: "Cyber Security", percentage: 21, color: "#10b981" },
  { name: "Data Engineering & Analytics", shortName: "Data Eng.", percentage: 15, color: "#6366f1" },
];

export const mockProjectsInitial = [
  {
    id: "proj-1",
    name: "AI Vision Platform",
    client: "TechNova",
    service: "AI / ML & Automation",
    status: "Active",
    value: "₹8.4L",
    rawBudget: 840000,
    progress: 82,
    phase: "Phase 3 - Model Optimization",
    date: "2026-08-28",
  },
  {
    id: "proj-2",
    name: "Cloud Migration",
    client: "FinCore",
    service: "Cloud Solutions & DevOps",
    status: "Progress",
    value: "₹12.2L",
    rawBudget: 1220000,
    progress: 64,
    phase: "Phase 2 - Kubernetes Shift",
    date: "2026-08-14",
  },
  {
    id: "proj-3",
    name: "SecurePay",
    client: "PaySphere",
    service: "Cybersecurity & System Protection",
    status: "Active",
    value: "₹6.8L",
    rawBudget: 680000,
    progress: 90,
    phase: "Phase 4 - Zero-Trust Audit",
    date: "2026-08-02",
  },
  {
    id: "proj-4",
    name: "Analytics Hub",
    client: "DataCore",
    service: "Data Engineering & Analytics",
    status: "Completed",
    value: "₹9.5L",
    rawBudget: 950000,
    progress: 100,
    phase: "Production Sign-off",
    date: "2026-07-19",
  },
  {
    id: "proj-5",
    name: "Omnichannel Micro-frontend Suite",
    client: "Omnia Retail",
    service: "Web & Mobile Development",
    status: "Planning",
    value: "₹14.5L",
    rawBudget: 1450000,
    progress: 18,
    phase: "Architecture Discovery",
    date: "2026-09-01",
  },
  {
    id: "proj-6",
    name: "Autonomous Knowledge Graph",
    client: "Crestview Life Sciences",
    service: "Product Engineering & Consulting",
    status: "Active",
    value: "₹18.0L",
    rawBudget: 1800000,
    progress: 75,
    phase: "Sprint 6 Rollout",
    date: "2026-06-25",
  },
  {
    id: "proj-7",
    name: "Edge Gateway Telemetry Lakehouse",
    client: "Kinetix IoT Networks",
    service: "Data Engineering & Analytics",
    status: "Progress",
    value: "₹11.0L",
    rawBudget: 1100000,
    progress: 52,
    phase: "Validation Run",
    date: "2026-07-30",
  },
];

export const mockNotificationsInitial = [
  {
    id: "notif-1",
    title: "Kubernetes Cluster us-east-1 auto-scaled",
    time: "12m ago",
    category: "Infrastructure",
    read: false,
    icon: "cloud_sync",
    iconColor: "text-blue-700 bg-blue-100",
  },
  {
    id: "notif-2",
    title: "New SOW signed by TechNova (₹8.4L)",
    time: "1h ago",
    category: "Commercial",
    read: false,
    icon: "contract",
    iconColor: "text-emerald-700 bg-emerald-100",
  },
  {
    id: "notif-3",
    title: "Automated Pen-test completed: 0 high vulnerabilities",
    time: "3h ago",
    category: "SecOps Audit",
    read: true,
    icon: "security",
    iconColor: "text-indigo-700 bg-indigo-100",
  },
  {
    id: "notif-4",
    title: "Snowflake data warehouse sync completed (2.4TB)",
    time: "5h ago",
    category: "Data Eng.",
    read: true,
    icon: "database",
    iconColor: "text-slate-700 bg-slate-100",
  },
];

export const mockAlerts = [
  {
    id: "alert-1",
    title: "Kubernetes Cluster us-east-1 auto-scaled successfully",
    meta: "12m ago • Infra Health",
    icon: "cloud_sync",
    bgIcon: "bg-blue-100 text-blue-700",
  },
  {
    id: "alert-2",
    title: "New SOW signed by FinCore (₹12.2L)",
    meta: "1h ago • Commercial Ops",
    icon: "contract",
    bgIcon: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "alert-3",
    title: "Automated Pen-test completed: 0 high vulnerabilities",
    meta: "3h ago • SecOps Audit",
    icon: "security",
    bgIcon: "bg-indigo-100 text-indigo-700",
  },
];

export const mockTimeline = [
  {
    id: "timeline-1",
    user: "Marcus L.",
    action: "merged PR",
    highlight: "#142-auth-gateway",
    time: "24m ago • FinCore Squad",
    dotColor: "bg-primary-container",
  },
  {
    id: "timeline-2",
    user: "",
    action: "Production build",
    highlight: "v3.9.0-rc2 deployed to AWS ECS",
    time: "1h 10m ago • Pipeline Automation",
    dotColor: "bg-emerald-500",
  },
  {
    id: "timeline-3",
    user: "Elena R.",
    action: "submitted sprint milestone deliverable for PaySphere",
    highlight: "",
    time: "2h 45m ago • Cybersecurity Pod",
    dotColor: "bg-amber-500",
  },
  {
    id: "timeline-4",
    user: "",
    action: "Database migration dry-run completed on Snowflake",
    highlight: "",
    time: "4h ago • DataCore Lakehouse",
    dotColor: "bg-slate-400",
  },
  {
    id: "timeline-5",
    user: "Priya N.",
    action: "initiated CI/CD canary rollout for TechNova AI",
    highlight: "v2.1.0-canary",
    time: "6h ago • AI/ML Pod",
    dotColor: "bg-indigo-500",
  },
];

export const mockOperator = {
  name: "System Administrator",
  title: "Lead Infrastructure Administrator",
  badge: "Super Admin",
  shiftZone: "24/7 Operations • Global HQ",
  clearance: "Enterprise Root Access",
  directSquads: "All Engineering Pods (6 Squads)",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
};

export const mockClients = [
  { id: 'c1', name: 'TechNova', tier: 'Tier-1 Enterprise', activeEngagements: 3, arr: '₹24.5L', status: 'Active Partner', logoIcon: 'smart_toy' },
  { id: 'c2', name: 'FinCore', tier: 'Tier-1 FinTech', activeEngagements: 4, arr: '₹36.2L', status: 'Active Partner', logoIcon: 'account_balance' },
  { id: 'c3', name: 'PaySphere', tier: 'Tier-1 FinTech Payments', activeEngagements: 2, arr: '₹18.0L', status: 'Active Partner', logoIcon: 'security' },
  { id: 'c4', name: 'DataCore', tier: 'Tier-1 Cloud Analytics', activeEngagements: 3, arr: '₹28.4L', status: 'Active Partner', logoIcon: 'database' },
  { id: 'c5', name: 'Omnia Retail', tier: 'Tier-2 E-Commerce', activeEngagements: 2, arr: '₹14.5L', status: 'Active Partner', logoIcon: 'storefront' },
  { id: 'c6', name: 'Crestview Bio', tier: 'Tier-1 Pharma & Bio', activeEngagements: 2, arr: '₹22.0L', status: 'Active Partner', logoIcon: 'biotech' },
];

export const mockSquads = [
  { id: 's1', name: 'FinCore Cloud Pod', lead: 'Marcus L., Staff Architect', members: 8, focus: 'Kubernetes & Hybrid Multi-Cloud', status: 'Optimal' },
  { id: 's2', name: 'Cybersecurity & SecOps Pod', lead: 'Elena R., Principal SecOps', members: 6, focus: 'Zero-Trust, FedRAMP & Threat Detection', status: 'Active' },
  { id: 's3', name: 'DataCore Lakehouse Squad', lead: 'Chen W., Lead Data Eng.', members: 7, focus: 'Kafka, Snowflake & Real-Time Spark', status: 'Optimal' },
  { id: 's4', name: 'Web & Mobile Modernization', lead: 'Priya N., Senior Frontend Lead', members: 7, focus: 'React, TypeScript Microfrontends', status: 'Optimal' },
  { id: 's5', name: 'AI / ML & Vision Pod', lead: 'Aarav K., Lead ML Engineer', members: 6, focus: 'Computer Vision & LLM Orchestration', status: 'Optimal' },
];
