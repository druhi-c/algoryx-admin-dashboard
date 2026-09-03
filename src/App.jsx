import React, { useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { ExecutiveBrief } from './components/dashboard/ExecutiveBrief';
import { OverviewCards } from './components/dashboard/OverviewCards';
import { AnalyticsSection } from './components/dashboard/AnalyticsSection';
import { ProjectsTable } from './components/dashboard/ProjectsTable';
import { ProfileCard } from './components/dashboard/ProfileCard';
import { AlertsFeed } from './components/dashboard/AlertsFeed';
import { ActivityTimeline } from './components/dashboard/ActivityTimeline';
import { CreateProjectModal } from './components/ui/CreateProjectModal';
import { CommandShellModal } from './components/ui/CommandShellModal';
import { Badge } from './components/ui/Badge';
import {
  mockProjectsInitial,
  mockNotificationsInitial,
  mockClients,
  mockSquads,
  ALGORYX_SERVICES,
} from './data/mockData';

export default function App() {
  const [projects, setProjects] = useState(mockProjectsInitial);
  const [notifications, setNotifications] = useState(mockNotificationsInitial);
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState('This Quarter');
  const [activeTab, setActiveTab] = useState('overview');

  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isShellOpen, setIsShellOpen] = useState(false);

  const handleCreateProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);

    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `Provisioned engagement: ${newProject.name}`,
        time: 'Just now',
        category: 'Squad Ops',
        read: false,
        icon: 'rocket_launch',
        iconColor: 'text-blue-700 bg-blue-100',
      },
      ...prev,
    ]);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleDismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleExportReport = () => {
    const reportData = {
      title: 'Algoryx Enterprise Engagements & Financial Trajectory Report',
      timestamp: new Date().toISOString(),
      timeframe,
      activeProjectsCount: projects.length,
      engagements: projects,
      serviceDomains: ALGORYX_SERVICES,
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `algoryx-enterprise-report-${timeframe.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <AppShell
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
        onDismissNotification={handleDismissNotification}
        projectsCount={projects.length}
        onOpenCreateProject={() => setIsCreateProjectOpen(true)}
        onOpenShell={() => setIsShellOpen(true)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onExportReport={handleExportReport}
      >
        {/* Navigation Breadcrumb Pill if not on overview */}
        {activeTab !== 'overview' && (
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className="text-label-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Overview
              </button>
              <span className="text-outline">/</span>
              <span className="text-label-sm font-bold uppercase tracking-wider text-on-surface">
                {activeTab}
              </span>
            </div>
            <span className="text-body-sm text-outline">
              Algoryx Precision Enterprise
            </span>
          </div>
        )}

        {/* Tab: Overview (Default) */}
        {activeTab === 'overview' && (
          <>
            <ExecutiveBrief
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
              onExportReport={handleExportReport}
            />

            <OverviewCards currentProjectsCount={34 + projects.length} />

            {/* Analytics & Profile Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-8 min-w-0">
                <AnalyticsSection timeframe={timeframe} />
              </div>
              <div className="lg:col-span-4 min-w-0">
                <ProfileCard onOpenShell={() => setIsShellOpen(true)} />
              </div>
            </div>

            {/* Activity / Alerts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
              <AlertsFeed />
              <ActivityTimeline />
            </div>

            {/* Recent Projects Table */}
            <ProjectsTable
              projects={projects}
              searchQuery={searchQuery}
              onSelectProject={(proj) => {
                alert(`Project: ${proj.name}\nClient: ${proj.client}\nService: ${proj.service}`);
              }}
            />
          </>
        )}

        {/* Tab: Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-space-xl">
            <OverviewCards currentProjectsCount={34 + projects.length} />
            <AnalyticsSection timeframe={timeframe} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
              <AlertsFeed />
              <ActivityTimeline />
            </div>
          </div>
        )}

        {/* Tab: Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-space-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-headline-lg font-bold text-on-surface">
                  Enterprise Client Engagements
                </h1>
                <p className="text-body-md text-on-surface-variant">
                  Delivery pipelines, budgets, and milestone tracking across all active accounts
                </p>
              </div>
              <button
                onClick={() => setIsCreateProjectOpen(true)}
                className="px-4 py-2 bg-primary-container hover:bg-primary text-on-primary rounded-xl text-label-md font-medium flex items-center gap-1.5 self-start sm:self-auto shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Create New Project</span>
              </button>
            </div>
            <ProjectsTable
              projects={projects}
              searchQuery={searchQuery}
              onSelectProject={(proj) => {
                alert(`Project: ${proj.name}\nClient: ${proj.client}\nService: ${proj.service}`);
              }}
            />
          </div>
        )}

        {/* Tab: Clients */}
        {activeTab === 'clients' && (
          <div className="space-y-space-lg">
            <div>
              <h1 className="text-headline-lg font-bold text-on-surface">
                Enterprise Client Partners
              </h1>
              <p className="text-body-md text-on-surface-variant">
                128 Tier-1 organizations engaging Algoryx engineering pods
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {mockClients.map((c) => (
                <div
                  key={c.id}
                  className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-sm hover:border-primary-container/60 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">{c.logoIcon}</span>
                    </div>
                    <Badge variant="active">{c.status}</Badge>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-3">{c.name}</h3>
                  <p className="text-[12px] text-on-surface-variant">{c.tier}</p>
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-body-sm">
                    <span className="text-outline">Active Projects:</span>
                    <span className="font-semibold text-on-surface">{c.activeEngagements}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-body-sm">
                    <span className="text-outline">Annual Run Rate:</span>
                    <span className="font-mono font-bold text-primary">{c.arr}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Team */}
        {activeTab === 'team' && (
          <div className="space-y-space-lg">
            <div>
              <h1 className="text-headline-lg font-bold text-on-surface">
                Engineering Squad Roster
              </h1>
              <p className="text-body-md text-on-surface-variant">
                5 Specialized pods comprising 34 full-time architecture and engineering specialists
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {mockSquads.map((s) => (
                <div
                  key={s.id}
                  className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-headline-sm font-bold text-on-surface">{s.name}</h3>
                    <Badge variant={s.status === 'Optimal' ? 'completed' : 'inProgress'}>
                      {s.status}
                    </Badge>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-1">Lead: {s.lead}</p>
                  <p className="text-[12px] text-outline mt-0.5">Focus: {s.focus}</p>
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant">Active Squad Engineers:</span>
                    <span className="font-bold text-primary">{s.members} members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Services */}
        {activeTab === 'services' && (
          <div className="space-y-space-lg">
            <div>
              <h1 className="text-headline-lg font-bold text-on-surface">
                Algoryx Core Service Capabilities
              </h1>
              <p className="text-body-md text-on-surface-variant">
                Institutional technology practices and specialized solution domains
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {ALGORYX_SERVICES.map((service, idx) => (
                <div
                  key={service}
                  className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-sm hover:border-primary-container/60 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">
                      {idx === 0
                        ? 'devices'
                        : idx === 1
                        ? 'cloud'
                        : idx === 2
                        ? 'smart_toy'
                        : idx === 3
                        ? 'shield'
                        : idx === 4
                        ? 'database'
                        : 'terminal'}
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-3">{service}</h3>
                  <p className="text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    Enterprise-grade solutions engineering, architectural governance, and continuous SLA delivery.
                  </p>
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-body-sm">
                    <span className="text-outline">Active Engagements:</span>
                    <span className="font-semibold text-on-surface">
                      {projects.filter((p) => p.service === service).length} Projects
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Settings */}
        {activeTab === 'settings' && (
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-space-lg max-w-3xl space-y-6">
            <div>
              <h1 className="text-headline-sm font-bold text-on-surface">
                Infrastructure &amp; Security Configuration
              </h1>
              <p className="text-body-sm text-on-surface-variant">
                Node settings for US-East cluster node 04 and FedRAMP Level 4 policies
              </p>
            </div>

            <div className="space-y-4 divide-y divide-outline-variant/40">
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-label-md font-semibold text-on-surface">AWS CloudWatch Live Telemetry Sync</p>
                  <p className="text-[12px] text-on-surface-variant">Stream metric alerts directly into operator notification drawer</p>
                </div>
                <span className="px-2.5 py-1 text-label-sm font-semibold rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Enabled</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-label-md font-semibold text-on-surface">FedRAMP Level 4 High-Assurance Enclave</p>
                  <p className="text-[12px] text-on-surface-variant">Enforce zero-trust mutual TLS across all pod VPC peering connections</p>
                </div>
                <span className="px-2.5 py-1 text-label-sm font-semibold rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-label-md font-semibold text-on-surface">Command Shell Diagnostic Audit Log</p>
                  <p className="text-[12px] text-on-surface-variant">Retain immutable CLI audit logs for compliance review</p>
                </div>
                <span className="px-2.5 py-1 text-label-sm font-semibold rounded bg-slate-100 text-slate-700 border border-slate-300">90 Days</span>
              </div>
            </div>
          </div>
        )}
      </AppShell>

      {/* Global Modals */}
      <CreateProjectModal
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
        onCreateProject={handleCreateProject}
      />

      <CommandShellModal
        isOpen={isShellOpen}
        onClose={() => setIsShellOpen(false)}
      />
    </>
  );
}
