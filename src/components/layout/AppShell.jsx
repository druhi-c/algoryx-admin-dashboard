import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export function AppShell({
  children,
  searchQuery,
  onSearchChange,
  notifications,
  onMarkAllRead,
  onDismissNotification,
  projectsCount,
  onOpenCreateProject,
  onOpenShell,
  activeTab,
  onSelectTab,
  onExportReport,
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((v) => !v)}
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        projectsCount={projectsCount}
        onOpenCreateProject={onOpenCreateProject}
      />

      {/* Content Workspace Wrapper */}
      <div
        className={`flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-200 ease-in-out ${
          isCollapsed ? 'md:ml-[4.5rem]' : 'md:ml-64'
        }`}
      >
        {/* Top Navigation */}
        <TopNav
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          notifications={notifications}
          onMarkAllRead={onMarkAllRead}
          onDismissNotification={onDismissNotification}
          onOpenCreateProject={onOpenCreateProject}
          onOpenShell={onOpenShell}
          onExportReport={onExportReport}
        />

        {/* Main Dynamic Canvas (Scrollable) */}
        <main className="flex-1 overflow-y-auto bg-surface p-space-md md:p-space-xl">
          <div className="max-w-[1600px] mx-auto space-y-space-xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

