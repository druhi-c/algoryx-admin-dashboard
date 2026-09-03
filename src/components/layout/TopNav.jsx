import React, { useState, useRef } from 'react';
import { QuickActionsMenu } from '../ui/QuickActionsMenu';
import { NotificationDropdown } from '../ui/NotificationDropdown';
import { ProfileMenu } from '../ui/ProfileMenu';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';
import { mockOperator } from '../../data/mockData';

export function TopNav({
  onToggleMobileSidebar,
  searchQuery,
  onSearchChange,
  notifications,
  onMarkAllRead,
  onDismissNotification,
  onOpenCreateProject,
  onOpenShell,
  onExportReport,
}) {
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const searchInputRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Listen for Cmd+K or Ctrl+K to auto-focus search
  useKeyboardShortcut('k', () => searchInputRef.current?.focus(), { ctrlOrMeta: true });

  return (
    <header className="sticky top-0 right-0 z-30 flex items-center justify-between px-space-md md:px-margin-desktop h-header-height w-full bg-surface-container-lowest border-b border-outline-variant shadow-none">
      {/* Left Section: Mobile Toggle & Global Search */}
      <div className="flex items-center gap-space-md flex-1 max-w-xl">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={onToggleMobileSidebar}
          className="md:hidden p-2 text-on-surface-variant hover:text-on-surface rounded-lg transition-colors"
          aria-label="Open navigation drawer"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        {/* Search Input Bar with Command Key Hint */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">search</span>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, enterprise clients, audit logs..."
            className="w-full pl-9 pr-14 py-2 bg-surface border border-outline-variant rounded-xl text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
          />
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
            {searchQuery ? (
              <button
                type="button"
                onClick={() => {
                  onSearchChange('');
                  searchInputRef.current?.focus();
                }}
                className="p-0.5 text-outline hover:text-on-surface rounded-md transition-colors"
                title="Clear search"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            ) : (
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-outline bg-surface-container border border-outline-variant/60 rounded pointer-events-none">
                ⌘K
              </kbd>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Trailing Actions, Icon Actions, and Operator Profile */}
      <div className="flex items-center gap-space-sm md:gap-space-md ml-4">
        {/* Secondary Action: Quick Actions Dropdown */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => {
              setIsQuickActionsOpen((v) => !v);
              setIsNotifOpen(false);
              setIsProfileOpen(false);
            }}
            className="px-space-md py-1.5 border border-outline-variant hover:border-outline bg-surface-container-lowest text-on-surface rounded-xl text-label-md font-label-md flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>Quick Actions</span>
            <span className="material-symbols-outlined text-[16px] text-outline">
              {isQuickActionsOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
            </span>
          </button>
          <QuickActionsMenu
            isOpen={isQuickActionsOpen}
            onClose={() => setIsQuickActionsOpen(false)}
            onOpenCreateProject={onOpenCreateProject}
            onOpenShell={onOpenShell}
            onExportReport={onExportReport}
          />
        </div>

        {/* Primary Action: Create Project */}
        <button
          onClick={onOpenCreateProject}
          className="hidden sm:flex items-center gap-1.5 px-space-md py-1.5 bg-primary-container hover:bg-primary text-on-primary rounded-xl text-label-md font-label-md font-medium transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Create Project</span>
        </button>

        <div className="h-5 w-px bg-outline-variant/60 hidden sm:block mx-1" />

        {/* Trailing Icon Action: Help Outline */}
        <button
          onClick={() =>
            alert(
              'Algoryx Enterprise Support — 24/7 Priority SLA active for Tier-1 Architecture.'
            )
          }
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
          title="Help & Documentation"
          aria-label="Help and Documentation"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>

        {/* Trailing Icon Action: Notifications Bell with Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotifOpen((v) => !v);
              setIsQuickActionsOpen(false);
              setIsProfileOpen(false);
            }}
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors relative"
            title="Notifications"
            aria-label={`Notifications (${unreadCount} unread)`}
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-container rounded-full ring-2 ring-surface-container-lowest" />
            )}
          </button>

          <NotificationDropdown
            isOpen={isNotifOpen}
            onClose={() => setIsNotifOpen(false)}
            notifications={notifications}
            onMarkAllRead={onMarkAllRead}
            onDismissNotification={onDismissNotification}
          />
        </div>

        {/* Operator Profile Avatar Chip with Menu */}
        <div className="relative">
          <div
            onClick={() => {
              setIsProfileOpen((v) => !v);
              setIsQuickActionsOpen(false);
              setIsNotifOpen(false);
            }}
            className="flex items-center gap-2 pl-2 cursor-pointer hover:opacity-90 transition-opacity"
            role="button"
            tabIndex={0}
            aria-label="Open user profile menu"
          >
            <div className="relative">
              <img
                className="w-8 h-8 rounded-full object-cover border border-outline-variant shadow-xs"
                alt="Druhi S., Principal Architect"
                src={mockOperator.avatarUrl}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-label-md font-label-md font-semibold text-on-surface leading-none">
                {mockOperator.name}
              </span>
              <span className="text-[10px] text-on-surface-variant font-medium mt-0.5 leading-none">
                {mockOperator.title}
              </span>
            </div>
            <span className="material-symbols-outlined text-outline text-[16px] hidden xl:inline-block">
              {isProfileOpen ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          <ProfileMenu
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            onOpenShell={onOpenShell}
          />
        </div>
      </div>
    </header>
  );
}
