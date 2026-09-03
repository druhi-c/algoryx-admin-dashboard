# Algoryx Technologies — Enterprise Cloud Admin Dashboard

A modern, production-grade React Admin Dashboard engineered for **Algoryx Technologies** to monitor cloud deployments, enterprise client engagements, financial run rates, and engineering squad operations.

Built from the Google Stitch design blueprint and strictly adhering to the design specifications defined in [`DESIGN.md`](./DESIGN.md).

---

## Key Features

- **Dual-Mode Navigation Shell:**
  - Desktop persistent sidebar (`16rem` expanded ↔ `4.5rem` compact icon-only mode) with operational status telemetry (`US-East Node 04 | 99.98% Uptime`).
  - Mobile slide-out drawer with backdrop blur overlay and touch-friendly dismissal.
- **Header & Global Command Search:**
  - Global search bar with `⌘K` / `Ctrl+K` keyboard shortcut listener and live keyword filtering.
  - Interactive "Quick Actions" dropdown (*New Deployment*, *Command Shell*, *Export Report*, *Security Audit*).
  - Real-time Notifications panel with unread badge counter, individual dismissals, and mark-all-read action.
  - Operator Profile chip (Druhi S., Principal Solutions Architect, Level 4 FedRAMP).
- **Executive Summary & Bento Metrics:**
  - "Good morning, Druhi 👋" banner with live cluster health pills.
  - 4 High-density KPI cards tracking Active Projects, Enterprise Partners, ARR Run Rate, and Sprint Task Completion.
- **Contract & Trajectory Analytics:**
  - Interactive 6-month financial trajectory SVG chart with precision vertical crosshair and hover tooltips showing monthly ARR, target, and variance.
  - View toggle between *Quarterly MRR* and *Service Breakdown* with percentage allocation progress bars.
  - Dynamic timeframe selector (*This Quarter*, *Last 30 Days*, *YTD*).
- **Active Technology Engagements Data Grid:**
  - Includes all 7 core fields: *Project & Client*, *Service Domain*, *Status*, *Value (USD)*, *Delivery (Progress)*, *Date*, and *Action*.
  - Multi-column sorting on Project, Value, Delivery, and Date.
  - Status filter dropdown (*All*, *In Progress*, *Under Review*, *Completed*, *Planning*).
  - Interactive Project Details modal revealing cloud infrastructure, FedRAMP classification, and milestone progress.
  - Multi-page pagination controls with responsive fallback.
- **Algoryx Core Service Competencies:**
  - All mock data strictly reflects Algoryx's 6 official services:
    1. *Web & Mobile Development*
    2. *Cloud Solutions & DevOps*
    3. *AI / ML & Automation*
    4. *Cybersecurity & System Protection*
    5. *Data Engineering & Analytics*
    6. *Product Engineering & Consulting*
- **Engineering Command Shell:**
  - Simulated interactive diagnostic terminal supporting `status`, `clusters`, `deployments`, `help`, and `clear`.
- **Create Project Modal:**
  - Accessible dialog with Level 4 elevation and backdrop blur to dynamically provision new engagements and stream alerts into the notification feed.
- **Multi-Device Responsiveness:**
  - Verified across `1440px`, `1280px`, `1024px`, `768px`, `640px`, `480px`, and `375px` without horizontal body overflow.

---

## Tech Stack & Architecture

- **Framework:** React 18 / 19
- **Bundler:** Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Typography:** Inter (via Google Fonts)
- **Iconography:** Google Material Symbols Outlined
- **State Management:** Pure React functional components & hooks (no heavyweight external stores or backend servers required)

---

## Directory Structure

```
algoryx-dashboard/
├── index.html                   # HTML entrypoint with font & symbol links
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Exact design tokens from DESIGN.md
├── postcss.config.js            # PostCSS configuration
├── DESIGN.md                    # Algoryx Precision Enterprise Design System
├── src/
│   ├── main.jsx                 # React root render
│   ├── index.css                # Tailwind directives, custom scrollbar & micro-animations
│   ├── data/
│   │   └── mockData.js          # Centralized store for engagements, revenue & alerts
│   ├── hooks/
│   │   ├── useClickOutside.js   # Reusable click-outside handler for dropdowns
│   │   └── useKeyboardShortcut.js # Reusable shortcut listener (⌘K / Ctrl+K)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.jsx     # Master responsive layout container
│   │   │   ├── Sidebar.jsx      # Desktop collapsible & mobile drawer navigation
│   │   │   └── TopNav.jsx       # Top navigation header
│   │   ├── dashboard/
│   │   │   ├── ExecutiveBrief.jsx   # Welcome header & health pills
│   │   │   ├── OverviewCards.jsx    # Bento KPI metric cards
│   │   │   ├── StatCard.jsx         # Reusable individual KPI card
│   │   │   ├── AnalyticsSection.jsx # 6-month interactive SVG chart
│   │   │   ├── ProjectsTable.jsx    # Searchable & sortable data grid
│   │   │   ├── ProfileCard.jsx      # Operator credential overview
│   │   │   ├── AlertsFeed.jsx       # Real-time event alerts
│   │   │   └── ActivityTimeline.jsx # Squad engineering activity timeline
│   │   └── ui/
│   │       ├── Badge.jsx              # Status badges matching DESIGN.md
│   │       ├── ProgressBar.jsx        # Accessible progress bar
│   │       ├── CreateProjectModal.jsx # Engagement provisioning modal
│   │       ├── ProjectDetailsModal.jsx# Project inspection modal
│   │       ├── QuickActionsMenu.jsx   # Quick actions dropdown
│   │       ├── NotificationDropdown.jsx # Notification drawer
│   │       ├── ProfileMenu.jsx        # Profile dropdown menu
│   │       └── CommandShellModal.jsx  # Interactive diagnostic terminal
│   └── App.jsx                  # Main dashboard application
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build & Preview

```bash
npm run build
npm run preview
```

---

## Design System Compliance

This project complies strictly with [`DESIGN.md`](./DESIGN.md):
- **Primary Color:** `#1D4ED8` (Algoryx Royal Tech Blue)
- **Typography:** Inter across all headings, body, and labels with tabular figures (`font-variant-numeric: tabular-nums`).
- **Surface Elevation:** Level 0 base `#F8FAFC`, Level 1 white containers with micro-borders (`1px solid #E2E8F0`), and Level 4 modal overlays with backdrop blur.
- **Accessibility:** Meets WCAG 2.1 AA standards with visible focus rings (`:focus-visible`), native semantic buttons, accessible ARIA labels, and `@media (prefers-reduced-motion: reduce)` support.

