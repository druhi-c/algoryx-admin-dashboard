import React from 'react';

export function Sidebar({
  isMobileOpen,
  onCloseMobile,
  isCollapsed,
  onToggleCollapse,
  activeTab,
  onSelectTab,
  projectsCount,
  onOpenCreateProject,
}) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'analytics', label: 'Analytics', icon: 'monitoring' },
    { id: 'projects', label: 'Projects', icon: 'folder_open', badge: projectsCount || 42 },
    { id: 'clients', label: 'Clients', icon: 'business' },
    { id: 'team', label: 'Team', icon: 'group' },
    { id: 'services', label: 'Services', icon: 'layers' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-xs md:hidden transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen flex flex-col justify-between p-space-md z-40 bg-surface-container-lowest border-r border-outline-variant shadow-none transition-all duration-200 ease-in-out ${
          /* Mobile open/close */
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${
          /* Desktop collapsed/expanded */
          isCollapsed ? 'md:w-sidebar-collapsed' : 'md:w-sidebar'
        } w-64 shrink-0`}
        id="sidebar"
      >
        {/* Upper Segment */}
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between px-space-xs mb-space-lg">
            <div className="flex items-center gap-space-sm overflow-hidden">
              <div className="w-9 h-9 min-w-[36px] rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              {!isCollapsed && (
                <div className="flex flex-col truncate">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface tracking-tight leading-none">
                    Algoryx
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant mt-1 leading-none">
                    Technologies
                  </span>
                </div>
              )}
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onCloseMobile}
              className="md:hidden p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg"
              aria-label="Close sidebar"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* New Deployment CTA */}
          <div className="mb-space-lg px-space-2xs">
            <button
              onClick={() => {
                onOpenCreateProject();
                if (isMobileOpen) onCloseMobile();
              }}
              className={`w-full py-2.5 bg-primary-container hover:bg-primary text-on-primary rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg transition-colors shadow-sm ${
                isCollapsed ? 'px-0' : 'px-space-md'
              }`}
              title="New Deployment"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              {!isCollapsed && <span>New Deployment</span>}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    if (isMobileOpen) onCloseMobile();
                  }}
                  title={item.label}
                  className={`w-full flex items-center gap-space-sm py-space-sm rounded-lg transition-all duration-150 cursor-pointer ${
                    isCollapsed ? 'justify-center px-0' : 'px-space-md'
                  } ${
                    isActive
                      ? 'bg-surface-container-low text-primary font-semibold border-l-2 border-primary rounded-r-lg'
                      : 'text-on-surface-variant hover:text-on-surface font-normal hover:bg-surface-container-low'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  {!isCollapsed && (
                    <>
                      <span className="text-label-md font-label-md flex-1 text-left">
                        {item.label}
                      </span>
                      {item.badge !== undefined && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                          {item.badge}
                        </span>
                      )}
                      {isActive && !item.badge && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Lower Segment / Operational Health */}
        <div className="pt-space-md border-t border-outline-variant/60 space-y-2">
          {/* Desktop Collapse Toggle */}
          <button
            onClick={onToggleCollapse}
            className={`hidden md:flex w-full items-center gap-space-sm py-1.5 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors text-label-sm ${
              isCollapsed ? 'justify-center px-0' : 'px-space-md'
            }`}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isCollapsed ? 'last_page' : 'first_page'}
            </span>
            {!isCollapsed && <span>Collapse Sidebar</span>}
          </button>

          {/* Documentation */}
          <a
            href="#docs"
            onClick={(e) => {
              e.preventDefault();
              alert('Algoryx Engineering Documentation & Architecture Runbooks');
            }}
            className={`flex items-center gap-space-sm py-space-xs text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors ${
              isCollapsed ? 'justify-center px-0' : 'px-space-md'
            }`}
            title="Documentation"
          >
            <span className="material-symbols-outlined text-[18px]">description</span>
            {!isCollapsed && <span className="text-label-md font-label-md">Documentation</span>}
          </a>

          {/* System Status */}
          <div
            className={`flex items-center gap-space-sm py-space-xs text-on-surface-variant ${
              isCollapsed ? 'justify-center px-0' : 'px-space-md'
            }`}
            title="System Status: 99.98% Uptime"
          >
            <span
              className="material-symbols-outlined text-[18px] text-emerald-600"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            {!isCollapsed && (
              <>
                <span className="text-label-md font-label-md flex-1">System Status</span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  99.98%
                </span>
              </>
            )}
          </div>

          {/* Quick Organization Info Widget */}
          {!isCollapsed && (
            <div className="mt-space-md p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-on-surface">US-East Node 04</span>
              </div>
              <span className="text-[10px] text-outline font-mono">v4.18.2</span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

