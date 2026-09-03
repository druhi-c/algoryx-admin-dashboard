import React, { useState, useEffect, useRef } from 'react';

export function CommandShellModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Algoryx Cloud CLI v4.18.2 [US-East Node 04]' },
    { type: 'system', text: 'Authenticated as Druhi S. (Principal Architect, Level 4 FedRAMP)' },
    { type: 'system', text: 'Type "help" for a list of available diagnostic commands.' },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    const lower = cmd.toLowerCase();
    if (lower === 'help') {
      newHistory.push({
        type: 'response',
        text: 'Commands:\n  status       - Check overall cluster health & latency\n  clusters     - List active Kubernetes clusters\n  deployments  - Check pending and active ECS pipelines\n  clear        - Clear terminal output\n  exit         - Close command shell',
      });
    } else if (lower === 'status') {
      newHistory.push({
        type: 'response',
        text: 'System Health: 99.98% uptime\nActive Nodes: 9 clusters across us-east-1 and eu-central-1\nAvg Latency: 14ms\nCritical Incidents: 0\nActive Engagements: 42 running pipelines',
      });
    } else if (lower === 'clusters') {
      newHistory.push({
        type: 'response',
        text: 'CLUSTER ID          REGION         STATUS     PODS   CPU UTIL\nalgoryx-prod-east   us-east-1      ONLINE     148    42.1%\nalgoryx-prod-eu     eu-central-1   ONLINE     96     38.5%\nalgoryx-dev-canary  us-west-2      STANDBY    24     12.0%',
      });
    } else if (lower === 'deployments') {
      newHistory.push({
        type: 'response',
        text: 'DEPLOYMENT                       ENV     SQUAD           STATUS\nv3.9.0-rc2 (auth-gateway)       PROD    Vanguard Pod    SUCCESS (1h ago)\nv4.2.0-canary (telemetry)       STAGE   Kinetix Pod     IN_PROGRESS\nv2.1.0-hotfix (omnia-ui)        DEV     Web Squad       QUEUED',
      });
    } else if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (lower === 'exit') {
      onClose();
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `algoryx-cli: command not found: ${cmd}. Type "help" for options.`,
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl bg-[#0B1C30] text-[#EAF1FF] rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-xs animate-modal">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#071322] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 text-slate-400 font-sans text-xs font-medium">
              Algoryx Engineering Command Shell — us-east-node-04
            </span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Output */}
        <div className="p-4 h-80 overflow-y-auto space-y-2 select-text">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'error'
                  ? 'text-rose-400'
                  : item.type === 'user'
                  ? 'text-emerald-400 font-semibold'
                  : item.type === 'response'
                  ? 'text-cyan-300'
                  : 'text-slate-400'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#071322] border-t border-slate-800">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'status'..."
            className="flex-1 bg-transparent border-none outline-none text-[#EAF1FF] placeholder:text-slate-600 font-mono text-xs"
          />
          <button
            type="submit"
            className="px-2.5 py-1 bg-primary-container text-white text-[11px] rounded hover:bg-primary transition-colors"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
}

