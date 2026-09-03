---
name: Algoryx Precision Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#004870'
  on-tertiary: '#ffffff'
  tertiary-container: '#006194'
  on-tertiary-container: '#b2d9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 2.5rem
  space-4xl: 3rem
  gutter-mobile: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  sidebar-width: 16rem
  sidebar-collapsed-width: 4.5rem
  header-height: 4rem
---

## Brand & Style

This design system embodies an authoritative, institutional, and meticulously engineered aesthetic tailored for enterprise-grade data management, infrastructure monitoring, and technology consulting operations. The interface must communicate unwavering reliability, speed, operational clarity, and precision.

The target audience includes enterprise administrators, IT operations directors, consultants, and executive stakeholders who manage mission-critical deployments and multi-layered client engagements. The UI must invoke absolute control, zero cognitive ambiguity, and high cognitive throughput.

### Design Movement
**Corporate / Modern with High-Density Precision.** The aesthetic avoids superficial ornamentation, decorative gradients, or playful skeuomorphism. It utilizes crisp white and slate foundation surfaces, micro-borders with pinpoint color balance, disciplined typographic cadence, and restrained status accents. Visual complexity is minimized to allow vast tabular data, operational metrics, and multi-tenant workflows to remain readable and actionable.

## Colors

The color palette is built on strict contrast ratios and structural utility, avoiding saturated eye fatigue while clearly distinguishing interactive elements, system states, and structured data tiers.

### Functional Roles

- **Primary (`#1D4ED8`):** Algoryx Royal Tech Blue. Reserved for authoritative actions, selected navigation states, primary buttons, and key interactive focal points.
- **Secondary (`#0F172A`):** Deep Navy. Applied to high-emphasis typographic content, dense headings, primary text, and top-tier administrative framing.
- **Tertiary (`#0284C7`):** Precision Sky. Utilized for data visualization highlights, focused secondary links, metrics callouts, and inline tooltips.
- **Neutral (`#64748B`):** Cool Slate. Serves as secondary copy, unselected iconography, and supportive contextual metadata.
- **Surface Foundations:**
  - Base canvas: `#F8FAFC` (Slate 50) creates a soft background contrast that reduces glare over extended monitoring sessions.
  - Card & Container Surface: `#FFFFFF` (Pure White) provides crisp elevated layers for analytical cards, tables, and modal drawers.
  - Structural Borders: `#E2E8F0` (Slate 200) for clean dividing lines, panel separations, and input perimeters.
- **Status & Metric Semantics:**
  - Active / Healthy / Completed: `#10B981` (Emerald), with a soft tint background `#ECFDF5` and stroke `#A7F3D0`.
  - In-Progress / Review / Warning: `#F59E0B` (Amber), paired with `#FFFBEB` and `#FDE68A`.
  - Backlog / Idle / Inactive: `#64748B` (Slate), paired with `#F1F5F9` and `#CBD5E1`.
  - Critical / Alert / Failed: `#EF4444` (Rose/Red), paired with `#FEF2F2` and `#FECACA`.

## Typography

The typography uses Inter across all levels to maintain a cohesive, clean, and engineered feel. Inter offers high legibility in small-size tabular metrics, data grids, and dense system forms.

### Hierarchy & Rules
- Headings (`headline-xl` through `headline-sm`) utilize semi-bold weights with negative tracking (`-0.01em` to `-0.025em`) to eliminate loose letter clusters and impart structural authority.
- The standard enterprise dashboard workhorse is `body-md` (14px / 20px line height), balanced to maximize information density without crowding table rows.
- Badges, table headers, and form field tags utilize `label-sm` with subtle uppercase styling and expanded tracking (`+0.04em`) to establish visual separation against variable data.
- Numbers, monetary values, timestamps, and system IDs should enforce tabular figures (`font-variant-numeric: tabular-nums`) to maintain column alignment across data grids.

## Layout & Spacing

The layout is engineered around a flexible 12-column grid system pinned to an absolute 8pt (0.5rem) baseline rhythm, with a 4pt (0.25rem) half-step for micro-spacings in form fields and data cells.

### Shell Architecture
- **Persistent Sidebar Navigation:** Fixed 16rem (256px) width desktop navigation, collapsible to 4.5rem (72px) icon-only mode for complex data sheets.
- **Top Utility Header:** Fixed 4rem (64px) height carrying global tenant pickers, audit search, contextual notifications, and operator profile actions.
- **Main Canvas:** Dynamic fluid content container adhering to max-width bounding (`1600px` ultra-wide cap) to prevent unbounded metrics distortion, nested over the `#F8FAFC` foundation.

### Responsive Breakpoints & Reflow
- **Desktop (>= 1280px):** Full 12-column grid layout with 1.5rem (24px) gutters. Complex dashboards display 3-to-4 metric summary cards across, with dual-pane master-detail table configurations.
- **Tablet / Laptop (768px - 1279px):** Sidebar switches to collapsed or drawer overlay mode. Grid drops to an 8-column model with 1.5rem gutters; metric cards reflow to a 2x2 matrix.
- **Mobile (< 768px):** 4-column single-stack layout with 1rem (16px) margins. Tables degrade gracefully to card-based record units, and primary navigation transitions to a sliding sheet drawer.

## Elevation & Depth

This design system avoids dramatic blur layers, high-spread dropshadows, or neomorphic bevels. Visual depth is established through a **dual-plane surface hierarchy** combining low-contrast slate outlines with crisp micro-shadows.

### Elevation Levels

- **Level 0 (Base Canvas):** Background tone `#F8FAFC`. Zero elevation, non-interactive foundation.
- **Level 1 (Card & Content Surface):** Pure White `#FFFFFF` backed by border stroke `1px solid #E2E8F0` and micro-shadow:
  - `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`
  Used for data panels, analytical charts, dashboard widgets, and standard table containers.
- **Level 2 (Hovered & Active Items):** Slightly elevated card interactions and dropdown trigger active states:
  - `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`
  - Border tone remains `#E2E8F0` or transitions to `#CBD5E1`.
- **Level 3 (Dropdowns & Popovers):** Context menus, date pickers, filter dropdowns, and flyout sheets:
  - `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`
  - Border stroke: `1px solid #E2E8F0`.
- **Level 4 (Modals & Overlays):** Blocking dialogs and system command palettes (`Cmd+K`):
  - `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.10), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`
  - Backdrop: `#0F172A` with 40% alpha blur (`backdrop-filter: blur(2px)`).

## Shapes

The design system adheres to a disciplined, low-curvature geometric profile (`roundedness: 1`). Soft, controlled corners provide modern elegance while preserving strict tabular rectilinearity.

### Geometry Hierarchy
- **Micro Form Controls (`0.25rem` / 4px):** Checkboxes, status badges, code chips, and indicator dots.
- **Standard Controls (`0.375rem` / 6px):** Buttons, text inputs, select dropdowns, breadcrumb pills, and action chips.
- **Structural Containers (`0.5rem` / 8px):** Metric summary cards, data grid enclosures, sliding drawers, and modal windows (`rounded-lg`).
- **Avatar & Status Circles (`9999px`):** Operator avatars and icon indicator nodes remain purely spherical.

## Components

### Buttons
- **Primary:** Background `#1D4ED8`, text `#FFFFFF`, 6px border-radius, font `label-lg` (500 weight). Hover: `#1E40AF`. Active: `#1E3A8A`. Focus ring: 2px offset with `#1D4ED8` at 30% opacity.
- **Secondary / Outline:** Background `#FFFFFF`, text `#0F172A`, border `1px solid #E2E8F0`. Hover: `#F8FAFC` and border `#CBD5E1`.
- **Destructive:** Background `#EF4444`, text `#FFFFFF`. Hover: `#DC2626`.
- **Ghost:** Background transparent, text `#64748B`. Hover: background `#F1F5F9`, text `#0F172A`.

### Status Badges & Chips
- **Geometry:** Height 22px, padding `2px 8px`, border radius 4px, font `label-sm` with semi-bold 11px text.
- **Active / Completed:** Background `#ECFDF5`, text `#065F46`, border `1px solid #A7F3D0`. Includes a 6px inline dot `#10B981`.
- **In-Progress / Pending:** Background `#FFFBEB`, text `#92400E`, border `1px solid #FDE68A`.
- **Backlog / Neutral:** Background `#F8FAFC`, text `#475569`, border `1px solid #E2E8F0`.
- **Critical Alert:** Background `#FEF2F2`, text `#991B1B`, border `1px solid #FECACA`.

### Form Fields & Inputs
- **Text Inputs & Selects:** Height 38px, padding `0 12px`, background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, placeholder `#94A3B8`.
- **Focus State:** Border transitions to `#1D4ED8` with a crisp `0 0 0 1px #1D4ED8` shadow ring.
- **Disabled State:** Background `#F1F5F9`, text `#94A3B8`, border `#E2E8F0`, cursor not-allowed.

### Checkboxes & Radio Buttons
- Checkbox dimensions: 16px x 16px, 3px border-radius, border `1px solid #CBD5E1`. Checked state: background `#1D4ED8`, border `#1D4ED8`, icon checkmark white.
- Radio dimensions: 16px x 16px, circular, with a 6px solid `#1D4ED8` inner dot on selected states.

### Data Tables
- Header row: height 40px, background `#F8FAFC`, border-bottom `1px solid #E2E8F0`, typography `label-sm` with `#64748B`.
- Body row: height 48px standard (or 40px compact toggle), background `#FFFFFF`, border-bottom `1px solid #F1F5F9`. Hover state: `#F8FAFC`.
- Selected row: `#EFF6FF` background with `#1D4ED8` 2px left border accent.

### Cards & Panels
- Background `#FFFFFF`, border `1px solid #E2E8F0`, border-radius 8px, Level 1 shadow (`0 1px 3px 0 rgba(15, 23, 42, 0.05)`).
- Padding: standardized 20px (`space-lg`) for card bodies, with header sections bordered off with `1px solid #F1F5F9`.

### KPI Metric Blocks
- Structured micro-containers: Top label `label-md` `#64748B`, primary metric `headline-xl` tabular `#0F172A`, and bottom comparison tag featuring a subtle inline status badge with delta trends (`+12.4% vs last month`).