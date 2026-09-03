import React from 'react';
import { StatCard } from './StatCard';
import { mockStats } from '../../data/mockData';

export function OverviewCards({ currentProjectsCount }) {
  const cards = [
    {
      ...mockStats.activeProjects,
      value: `${currentProjectsCount} Active`,
    },
    mockStats.enterpriseClients,
    mockStats.enterpriseRevenue,
    mockStats.taskCompletion,
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {cards.map((card, idx) => (
        <StatCard
          key={idx}
          label={card.label}
          value={card.value}
          subtitle={card.subtitle}
          trend={card.trend}
          isPositive={card.isPositive}
          icon={card.icon}
        />
      ))}
    </section>
  );
}
