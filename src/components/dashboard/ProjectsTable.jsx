import React, { useState, useMemo } from 'react';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { ProjectDetailsModal } from '../ui/ProjectDetailsModal';

export function ProjectsTable({ projects, searchQuery, onSelectProject }) {
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortField, setSortField] = useState('date'); // 'name' | 'budget' | 'progress' | 'date'
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const pageSize = 5;

  const serviceDotColors = {
    'Cloud Solutions & DevOps': 'bg-blue-500',
    'AI / ML & Automation': 'bg-sky-500',
    'Cybersecurity & System Protection': 'bg-emerald-500',
    'Data Engineering & Analytics': 'bg-indigo-500',
    'Web & Mobile Development': 'bg-slate-500',
    'Product Engineering & Consulting': 'bg-purple-500',
  };

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'Active':
        return 'active';
      case 'Progress':
      case 'In Progress':
        return 'progress';
      case 'Completed':
        return 'completed';
      case 'Review':
        return 'review';
      case 'Planning':
        return 'planning';
      default:
        return 'neutral';
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedAndFilteredProjects = useMemo(() => {
    const filtered = projects.filter((p) => {
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.service.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      let comparison = 0;
      if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === 'budget') {
        const valA = a.rawBudget || a.budget || 0;
        const valB = b.rawBudget || b.budget || 0;
        comparison = valA - valB;
      } else if (sortField === 'progress') {
        comparison = a.progress - b.progress;
      } else if (sortField === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [projects, statusFilter, searchQuery, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedAndFilteredProjects.length / pageSize) || 1;
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedAndFilteredProjects.slice(start, start + pageSize);
  }, [sortedAndFilteredProjects, currentPage, pageSize]);

  const renderSortIcon = (field) => {
    if (sortField !== field) {
      return (
        <span className="material-symbols-outlined text-[14px] text-outline/50 group-hover:text-outline transition-colors">
          unfold_more
        </span>
      );
    }
    return (
      <span className="material-symbols-outlined text-[14px] text-primary">
        {sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'}
      </span>
    );
  };

  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
        {/* Table Controls Header */}
        <div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/40">
          <div>
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">
              Recent Projects
            </h2>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Delivery milestones, service categories, and commercial values
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Status Filter Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="py-1.5 px-3 bg-surface border border-outline-variant rounded-xl text-label-md font-label-md text-on-surface focus:ring-1 focus:ring-primary-container focus:outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>
              <option value="Planning">Planning</option>
            </select>

            <button
              onClick={() => {
                setStatusFilter('All');
                setSortField('date');
                setSortDirection('desc');
                setCurrentPage(1);
              }}
              className="p-2 border border-outline-variant rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
              title="Reset Filters & Sorting"
            >
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-surface border-b border-outline-variant/60 text-label-sm font-label-sm text-on-surface-variant">
                <th
                  onClick={() => handleSort('name')}
                  className="py-3 px-space-md font-semibold cursor-pointer hover:text-on-surface select-none"
                >
                  <div className="flex items-center gap-1 group">
                    <span>PROJECT &amp; CLIENT</span>
                    {renderSortIcon('name')}
                  </div>
                </th>
                <th className="py-3 px-space-md font-semibold">SERVICE</th>
                <th className="py-3 px-space-md font-semibold">STATUS</th>
                <th
                  onClick={() => handleSort('budget')}
                  className="py-3 px-space-md font-semibold cursor-pointer hover:text-on-surface select-none"
                >
                  <div className="flex items-center gap-1 group">
                    <span>VALUE</span>
                    {renderSortIcon('budget')}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('progress')}
                  className="py-3 px-space-md font-semibold cursor-pointer hover:text-on-surface select-none"
                >
                  <div className="flex items-center gap-1 group">
                    <span>DELIVERY</span>
                    {renderSortIcon('progress')}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('date')}
                  className="py-3 px-space-md font-semibold cursor-pointer hover:text-on-surface select-none"
                >
                  <div className="flex items-center gap-1 group">
                    <span>DATE</span>
                    {renderSortIcon('date')}
                  </div>
                </th>
                <th className="py-3 px-space-md font-semibold text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-body-sm font-body-sm">
              {paginatedProjects.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-on-surface-variant">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[36px] text-outline">
                        folder_off
                      </span>
                      <p className="font-semibold text-on-surface">No engagements found</p>
                      <p className="text-body-sm text-outline">
                        {searchQuery
                          ? `No results matching "${searchQuery}". Try adjusting search keywords.`
                          : 'No projects match the selected filter.'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedProjects.map((proj) => {
                  const dotColor = serviceDotColors[proj.service] || 'bg-blue-500';
                  const displayValue = proj.value || (proj.budget ? `₹${(proj.budget / 100000).toFixed(1)}L` : '₹8.0L');

                  return (
                    <tr
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer"
                    >
                      {/* Project & Client */}
                      <td className="py-3.5 px-space-md">
                        <div className="font-semibold text-on-surface group-hover:text-primary transition-colors">
                          {proj.name}
                        </div>
                        <div className="text-[11px] text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            apartment
                          </span>
                          {proj.client}
                        </div>
                      </td>

                      {/* Service Domain */}
                      <td className="py-3.5 px-space-md text-on-surface-variant">
                        <span className="inline-flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                          {proj.service}
                        </span>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 px-space-md">
                        <Badge variant={getBadgeVariant(proj.status)}>{proj.status}</Badge>
                      </td>

                      {/* Value (INR Lakhs) */}
                      <td className="py-3.5 px-space-md font-mono font-bold text-on-surface tabular-nums">
                        {displayValue}
                      </td>

                      {/* Delivery / Progress */}
                      <td className="py-3.5 px-space-md w-36">
                        <div className="flex items-center justify-between text-[11px] font-medium text-on-surface-variant mb-1">
                          <span className="tabular-nums">{proj.progress}%</span>
                          <span className="text-[10px] text-outline">{proj.phase}</span>
                        </div>
                        <ProgressBar
                          progress={proj.progress}
                          variant={
                            proj.progress === 100
                              ? 'emerald'
                              : proj.status === 'Active'
                              ? 'emerald'
                              : 'primary'
                          }
                          size="sm"
                        />
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-space-md font-mono text-[12px] text-outline tabular-nums whitespace-nowrap">
                        {proj.date}
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-space-md text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(proj);
                          }}
                          className="p-1 text-outline hover:text-on-surface hover:bg-surface-container rounded transition-colors"
                          title="View engagement details"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            chevron_right
                          </span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
        <div className="p-space-md bg-surface border-t border-outline-variant/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            Showing <span className="font-semibold text-on-surface">{paginatedProjects.length}</span> of{' '}
            <span className="font-semibold text-on-surface">{sortedAndFilteredProjects.length}</span> engagements
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`px-2.5 py-1 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded-lg ${
                currentPage === 1
                  ? 'text-outline opacity-50 cursor-not-allowed'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-2.5 py-1 text-label-sm font-label-sm rounded-lg font-medium transition-colors ${
                  currentPage === num
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`px-2.5 py-1 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded-lg ${
                currentPage === totalPages
                  ? 'text-outline opacity-50 cursor-not-allowed'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
