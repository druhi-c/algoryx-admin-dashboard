import React, { useState, useEffect } from 'react';
import { ALGORYX_SERVICES } from '../../data/mockData';

export function CreateProjectModal({ isOpen, onClose, onCreateProject }) {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [service, setService] = useState(ALGORYX_SERVICES[0]);
  const [budget, setBudget] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [phase, setPhase] = useState('Sprint 1');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !client.trim()) return;

    const cleaned = budget.replace(/[^0-9.]/g, '');
    let displayVal = '₹8.0L';
    let numericBudget = 800000;
    if (cleaned) {
      const num = parseFloat(cleaned);
      if (num < 100) {
        displayVal = `₹${num}L`;
        numericBudget = Math.round(num * 100000);
      } else {
        displayVal = `₹${(num / 100000).toFixed(1)}L`;
        numericBudget = Math.round(num);
      }
    }

    onCreateProject({
      id: `proj-${Date.now()}`,
      name: name.trim(),
      client: client.trim(),
      service,
      status,
      value: displayVal,
      rawBudget: numericBudget,
      budget: numericBudget,
      progress: status === 'Completed' ? 100 : status === 'Active' ? 80 : status === 'Planning' ? 15 : 55,
      phase: phase.trim() || 'Phase 1 - Kickoff',
      date: new Date().toISOString().split('T')[0],
    });

    setName('');
    setClient('');
    setBudget('');
    setPhase('Phase 1 - Kickoff');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-2xl overflow-hidden animate-modal">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/60 bg-surface">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-[18px]">add_task</span>
            </div>
            <div>
              <h3 id="modal-title" className="text-headline-sm font-headline-sm font-bold text-on-surface">
                New Enterprise Engagement
              </h3>
              <p className="text-[12px] text-on-surface-variant">
                Initialize squad provisioning and cloud architecture scope
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1">
              Project Initiative Title <span className="text-error">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Next-Gen Cloud Lakehouse Engine"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label-md font-label-md text-on-surface mb-1">
                Client Partner <span className="text-error">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Global FinTech Corp"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>

            <div>
              <label className="block text-label-md font-label-md text-on-surface mb-1">
                Contract Value (e.g. ₹8.4L)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹8.4L or 8.4"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1">
              Service Domain (Algoryx Core Competency)
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            >
              {ALGORYX_SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label-md font-label-md text-on-surface mb-1">
                Initial Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              >
                <option value="Active">Active</option>
                <option value="Progress">Progress</option>
                <option value="Completed">Completed</option>
                <option value="Planning">Planning</option>
              </select>
            </div>

            <div>
              <label className="block text-label-md font-label-md text-on-surface mb-1">
                Milestone / Phase
              </label>
              <input
                type="text"
                placeholder="e.g. Architecture Sprint 1"
                value={phase}
                onChange={(e) => setPhase(e.target.value)}
                className="w-full h-[38px] px-3 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-variant/60">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-surface rounded-lg text-label-md font-label-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-primary-container hover:bg-primary text-on-primary rounded-lg text-label-md font-label-md font-medium shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              <span>Launch Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
