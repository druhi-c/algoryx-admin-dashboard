import React from 'react';
import { Badge } from './Badge';
import { ProgressBar } from './ProgressBar';

export function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'In Progress':
        return 'inProgress';
      case 'Review':
        return 'review';
      case 'Completed':
        return 'completed';
      case 'Planning':
        return 'planning';
      default:
        return 'neutral';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/50 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-2xl overflow-hidden animate-modal">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-outline-variant/40 bg-surface">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={getBadgeVariant(project.status)}>
                {project.status}
              </Badge>
              <span className="text-[11px] text-outline font-mono">{project.id}</span>
            </div>
            <h3 className="text-headline-sm font-bold text-on-surface leading-snug">
              {project.name}
            </h3>
            <p className="text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px] text-outline">apartment</span>
              Client: <span className="font-semibold text-on-surface">{project.client}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg transition-colors"
            title="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface border border-outline-variant/50 text-body-sm">
            <div>
              <span className="text-[11px] text-outline font-medium uppercase tracking-wider block">
                Contract Value
              </span>
              <span className="text-headline-sm font-bold font-mono text-on-surface tabular-nums">
                {project.value || (project.budget ? `₹${(project.budget / 100000).toFixed(1)}L` : '₹8.0L')}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-outline font-medium uppercase tracking-wider block">
                Initiated Date
              </span>
              <span className="text-headline-sm font-bold font-mono text-on-surface">
                {project.date}
              </span>
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between text-body-sm font-medium mb-1.5">
              <span className="text-on-surface">Milestone Progress: {project.phase}</span>
              <span className="font-bold text-primary font-mono">{project.progress}%</span>
            </div>
            <ProgressBar
              progress={project.progress}
              variant={
                project.progress === 100
                  ? 'emerald'
                  : project.status === 'Review'
                  ? 'amber'
                  : 'primary'
              }
              size="md"
            />
          </div>

          {/* Service Domain & Architecture */}
          <div className="space-y-2 pt-2 border-t border-outline-variant/40 text-body-sm">
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant">Service Domain:</span>
              <span className="font-semibold text-primary">{project.service}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant">Cloud Infrastructure:</span>
              <span className="font-mono text-on-surface text-[12px]">AWS us-east-1 VPC (ECS Fargate)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant">Security Classification:</span>
              <span className="text-emerald-700 font-semibold text-[12px]">FedRAMP Level 4 Enclave</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-surface border-t border-outline-variant/40">
          <button
            onClick={() => {
              alert(`Navigating to AWS CloudWatch logs for ${project.name}`);
            }}
            className="px-3.5 py-1.5 border border-outline-variant hover:bg-surface-container-low text-on-surface text-label-md font-medium rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">monitoring</span>
            <span>CloudWatch Logs</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary-container hover:bg-primary text-on-primary text-label-md font-medium rounded-lg shadow-sm transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

