# Synergy Digital Solutions — Comprehensive Design & Architecture Analysis
**Project:** SMB Digital Solutions Platform (Stitch ID: `12931032096992283611`)  
**Design System:** Neo Kinetic (Refined Neo-Brutalism)  
**Target Stack:** Next.js 16+, React 19, Tailwind CSS v4, TypeScript  

---

## 1. Executive Summary & Brand Identity

The Synergy Digital Solutions design represents a refined **Neo-Brutalist Kinetic ("Neo Kinetic")** visual aesthetic. It is engineered for forward-thinking B2B technology services, conveying technical precision, architectural sovereignty, transparency, and high craft.

### Visual Pillars
1. **Bold Structural Clarity:** Prominent solid structural borders (`2px` to `3px` solid `#191A23` / `#1a1b24`), deliberate geometric card boundaries, and zero fuzzy drop shadows.
2. **High-Contrast Tri-Tone Palette:** Stark interaction between an architectural dark charcoal (`#191A23`), high-energy electric neon lime (`#B9FF66` / `#b1f65f`), and a warm, low-glare neutral canvas (`#FAFBF8` / `#F9F9F9` / `#FFFFFF`).
3. **Sculpted Approachable Geometry:** Generous corner radii (`24px` to `36px`) counteract rigid brutalist frames to feel friendly and modern rather than industrial or retro.
4. **Mechanical Tactile Depth:** Push-button physical displacement with hard `0px 4px 0px #191A23` drop shadows that translate down to `0px 1px 0px` on active press, creating a satisfying tactile button feel.
5. **Editorial Typographic Precision:** 100% powered by **Space Grotesk**, utilizing tight tracking (`-0.01em` to `-0.03em`) on large scale displays and highlighter pill badges for section titles.

---

## 2. Design Tokens Catalog

### 2.1 Color Palette

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Primary / Deep Charcoal** | `#191A23` (`#1a1b24` / `#000000`) | Main brand text, structural 2-3px borders, dark hero cards, inverted buttons |
| **Secondary / Electric Lime** | `#B9FF66` (`#b1f65f`) | Focal highlighter badges, key action buttons, active accordion states, SVG accents |
| **Secondary Light / Dim** | `#AEF35C` / `#96D945` | Hover states, secondary accents, subtle glow highlights |
| **Canvas / Warm Background** | `#FAFAF7` (`#F9F9F9`) | Base page background canvas, preventing optical glare |
| **Surface Pure White** | `#FFFFFF` | Primary card backgrounds, form inputs, high-contrast badges |
| **Surface Container Low** | `#F3F3F3` | Inactive accordion rows, secondary step cards, footer background |
| **Surface Container High** | `#E8E8E8` / `#E2E2E2` | Pill badges, subtle container dividers, tag fills |
| **Muted Text / Body Variant** | `#47464B` | Secondary descriptions, subheadings, supporting copy |
| **Outline Variant / Border Muted**| `#C8C5CC` / `#77767C` | Inner card dividers, decorative dashed orbital rings |
| **Inverse Muted Text** | `#C6C5D0` / `#83838D` | Subtext on dark `#191A23` containers and dark cards |
| **Forest Green (Text on Lime)** | `#2E4F00` / `#102000` / `#3F6900` | High-contrast readable typography on top of neon lime badges |

---

### 2.2 Typography Scale (Space Grotesk)

All typography uses Google Font **Space Grotesk** (`400`, `500`, `600`, `700`).

| Style Role | Font Size | Line Height | Tracking | Weight | Target Context |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (Desktop)** | `60px` (`3.75rem`) | `72px` (`1.2`) | `-0.03em` | 600 (SemiBold/Bold) | Hero main headline |
| **Display (Mobile)** | `38px` (`2.375rem`) | `46px` (`1.21`) | `-0.02em` | 600 (SemiBold/Bold) | Hero headline on `<768px` |
| **Headline LG (Desktop)** | `40px` (`2.5rem`) | `52px` (`1.3`) | `-0.02em` | 500 / 700 | Section 2 Ownership title, Contact title |
| **Headline LG (Mobile)** | `28px` (`1.75rem`) | `36px` (`1.28`) | `-0.01em` | 500 / 700 | Section headings on `<768px` |
| **Headline MD** | `30px` (`1.875rem`) | `38px` (`1.26`) | `-0.01em` | 500 / 600 | 6 Non-Negotiables title, sub-headers |
| **Headline SM** | `22px` (`1.375rem`) | `28px` (`1.27`) | `normal` | 500 / 600 | Card titles, accordion questions, step titles |
| **Badge / Section Tag** | `20px` (`1.25rem`) | `26px` (`1.3`) | `normal` | 500 / 700 | Highlighter section markers |
| **Label LG** | `18px` (`1.125rem`) | `24px` (`1.33`) | `normal` | 500 / 600 | Large buttons, navigation links, commitments |
| **Body LG** | `18px` (`1.125rem`) | `28px` (`1.55`) | `normal` | 400 (Regular) | Hero lead paragraph, Section intros |
| **Body MD** | `16px` (`1.0rem`) | `24px` (`1.5`) | `normal` | 400 / 500 | General body copy, card descriptions, inputs |
| **Body SM** | `14px` (`0.875rem`) | `20px` (`1.42`) | `normal` | 400 / 500 | Checklist copy, footer text, trust badge text |
| **Label MD** | `14px` (`0.875rem`) | `18px` (`1.28`) | `0.02em` | 500 / 700 | Form labels, small badges, button links |

---

### 2.3 Neo-Brutalist Tactile Elevation & Shadows

The design relies entirely on **zero-blur hard shadow displacements** paired with **`2px` to `3px` solid `#191A23` borders**:

- **Standard Card Shadow:** `box-shadow: 5px 5px 0px #191A23` (`shadow-[0_5px_0_#1a1b24]`)
- **Large Container Shadow:** `box-shadow: 6px 6px 0px #191A23` (`shadow-[0_6px_0_#1a1b24]`)
- **Badge / Pill Shadow:** `box-shadow: 3px 3px 0px #191A23` (`shadow-[0_3px_0_#1a1b24]`)
- **Button Interactive Physics:**
  - *Rest state:* `box-shadow: 4px 4px 0px #191A23` (or `5px 5px 0px #191A23`)
  - *Hover state:* `box-shadow: 1px 1px 0px #191A23; transform: translate(3px, 3px)`
  - *Active state:* `box-shadow: 0px 0px 0px #191A23; transform: translate(4px, 4px)`
- **Card Interactive Physics:**
  - *Rest state:* `box-shadow: 5px 5px 0px #191A23; transform: translate(0, 0)`
  - *Hover state:* `box-shadow: 7px 7px 0px #191A23; transform: translate(-2px, -2px)`

---

### 2.4 Border Radii Scale

- **Oversized Containers (`rounded-[32px]` to `rounded-[36px]`):** Hero visual canvas, Section 2 Ownership container, Contact Section container, Testimonial container.
- **Content & Service Cards (`rounded-[28px]` to `rounded-[32px]`):** 6 Services cards, 3 Solutions scenario cards.
- **Process Steps & Accordion Items (`rounded-[20px]` to `rounded-[24px]`):** How It Works steps, FAQ accordion rows, 6 Non-negotiable cards.
- **Buttons, Inputs & Feature Badges (`rounded-[12px]` to `rounded-[16px]`):** CTA buttons, text inputs, select dropdowns, textarea.
- **Section Highlighter Tags (`rounded-[8px]` to `rounded-[10px]`):** Section titles ("Services", "Solutions", "FAQs").
- **Pills & Circles (`rounded-full` / `9999px`):** Target markets badge, arrow icon buttons, avatar wrapper.

---

### 2.5 Spacing Scale & Container Boundaries

- **Max Layout Boundary:** `max-w-7xl` (`1280px`) centered with `mx-auto`.
- **Canvas Margins:**
  - Desktop (`lg:px-margin`): `4rem` (`64px`)
  - Mobile (`px-margin-mobile`): `1.25rem` (`20px`)
- **Vertical Section Rhythm:**
  - Desktop: `my-16` to `my-24` (`4rem` to `6rem`)
  - Mobile: `my-10` to `my-12` (`2.5rem` to `3rem`)

---

## 3. Structural Sections Analysis

### 3.1 Header / Navbar
- **Placement:** Fixed at top (`fixed top-0 left-0 right-0 z-50 h-20`), with `bg-surface/90` and `backdrop-blur-md`, framed with bottom border `border-b-2 border-primary` / `border-surface-container-highest`.
- **Brand Identity:** Synergy logo image/icon (`h-8 w-auto`) + bold typography `Synergy` (`font-headline-sm tracking-tight font-bold`).
- **Desktop Navigation:** 6 Links:
  - `Home` (Active pill with `#B9FF66` background or underline indicator)
  - `Services` (`#services-catalog`)
  - `Solutions` (`#solutions-catalog`)
  - `Ownership` (`#ownership-section`)
  - `How It Works` (`#how-it-works-section`)
  - `FAQs` (`#faqs-section`)
- **Actions:**
  - "Discuss Your Project" tactile CTA button (`bg-primary text-on-primary hover:bg-secondary-fixed hover:text-primary`, shadow `0 4px 0 #1a1b24`)
  - User avatar circle icon (`w-8 h-8 rounded-full bg-primary text-secondary-fixed`)
  - Mobile hamburger trigger button (`lg:hidden`, `p-2 rounded-lg bg-surface-container border border-primary`)

---

### 3.2 Hero Section
- **Market Scope Pill:**
  - Full rounded pill: `bg-surface-container-high` (or `#ffffff`), `border border-primary/20`, shadow `3px 3px 0 #191A23`.
  - Pulsing neon dot: `w-2.5 h-2.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_#b1f65f]`.
  - Text: *"Serving SMBs across US • UK • Canada • EU • Australia • UAE"*.
- **Display Headline:**
  - *"Build a smarter, <span class="bg-[#B9FF66] border-2 border-primary px-2 rounded-[8px]">more connected</span> business."*
  - Optional kinetic stamp badge: *"100% IP SOVEREIGNTY"* rotated `6deg`.
- **Subheadline:**
  - Clear editorial copy explaining website, custom app, analytics, and AI development without internal overhead.
- **Dual CTA Action Pair:**
  - Primary Button: *"Let's Discuss Your Project ↗"* (`bg-primary text-white border-2 border-primary shadow-[0_5px_0_#1a1b24] hover:bg-secondary-fixed hover:text-primary`)
  - Secondary Button: *"Explore Our Services"* (`bg-transparent text-primary border-2 border-primary shadow-[0_5px_0_#1a1b24] hover:bg-surface-container`)
- **Hero Focal Visual — Neo-Brutalist Technical Illustration:**
  - Outer orbital dashed rings (`border-2 border-dashed border-outline-variant/60`)
  - 4 Floating Accent Spheres with Material Icons:
    - Top Right: `database` in neon lime circle
    - Bottom Left: `insights` in white circle
    - Top Left: `smart_toy` in dark charcoal circle
    - Bottom Right: `cloud_done` in neon lime circle
  - Central Transceiver Graphic: Dual-tone megaphone structure with broadcast aperture ring, mechanical pivot mount, structural pedestal, and radiating sparks.

---

### 3.3 Trust Strip / Client Logos
- **Divider:** `border-t-2 border-primary/10` or `border-t-[2.5px] border-primary`.
- **Label:** *"Technology Partners for Growing Businesses"*.
- **4 Trust Metric Cards:**
  1. `100% Client-Owned` (`verified` icon)
  2. `Dedicated Repositories` (`folder_special` icon)
  3. `Direct Cloud Deploy` (`cloud` icon)
  4. `Zero Vendor Lock-In` (`lock_open` icon)
- **Extended Logos Marquee (Recommended Component `components/Logos.tsx`):**
  - Continuous animated ticker of supported cloud & engineering frameworks: AWS, Google Cloud, Microsoft Azure, Supabase, GitHub, Vercel, Docker, PostgreSQL.

---

### 3.4 Core Differentiator — Ownership & IP Sovereignty
- **Container Styling:** Solid dark container (`bg-[#191A23] text-white rounded-[32px] sm:rounded-[36px] border-[2.5px] border-[#191A23] p-6 sm:p-12 shadow-[0_6px_0_#1a1b24]`).
- **Section Badges:** "CORE DIFFERENTIATOR" neon pill + "OFFICIAL SOVEREIGNTY PROTOCOL".
- **Headline:** *"You own the code. You own the data. No vendor lock-in."*
- **4 Tangible Certificate Cards:**
  - Card 1: **Client-Owned Code** (Icon: `code`, GitHub/GitLab direct repositories)
  - Card 2: **Your Cloud & Accounts** (Icon: `cloud_queue`, AWS/GCP/Azure direct billing)
  - Card 3: **Unrestricted Data Access** (Icon: `key`, full SQL exports & automated backups)
  - Card 4: **Comprehensive Handover** (Icon: `menu_book`, runbooks, schemas, blueprints)
- **Bottom Verification Strip:**
  - Statement: *"Your business. Your software. Your data. Your control."*
  - CTA Button: *"Verify Our IP Contract Guarantee ↗"* (`bg-secondary-fixed text-primary rounded-full px-6 py-2.5 font-bold hover:bg-white`)

---

### 3.5 Services Section (6 Asymmetrical Alternating Cards)
- **Section Header:** Highlighter badge *"Services"* + description.
- **Card Grid Layout:** Desktop 2-column or Asymmetric 7-col / 5-col split.
- **3 Color Alternations:**
  1. **Light Card (`bg-white`):** Web Applications & Custom Software (Browser SVG illustration)
  2. **Lime Accent Card (`bg-[#B9FF66]`):** Android & Mobile Applications (Mobile device SVG illustration)
  3. **Dark Charcoal Card (`bg-[#191A23]`):** Data Analytics & Business Intelligence (Bar chart SVG illustration)
  4. **Dark Charcoal Card (`bg-[#191A23]`):** AI & Machine Learning Solutions (Neural node SVG illustration)
  5. **Lime Accent Card (`bg-[#B9FF66]`):** DevOps & Cloud Infrastructure (Cloud server rack SVG illustration)
  6. **Light Card (`bg-white`):** Digital Transformation & Management (Gears SVG illustration)
- **Card Interaction Elements:**
  - Asymmetric top row: Title pill + description on left, inline SVG on right.
  - Bottom row: Circular arrow icon button (`arrow_outward`) + *"Learn more"* link text.

---

### 3.6 Practical Business Solutions / Case Studies (3 Scenarios)
- **Section Header:** Highlighter badge *"Solutions"* + description.
- **3 Scenario Cards (3-Column Desktop Grid):**
  - **Scenario 01 (B2B Distribution):** *"From Messy Spreadsheets to Centralized Operations"* (Light card, 100% elimination of lost orders, 4.5h saved daily, order tracking, link: *Portal Architecture → Read Story ↗*)
  - **Scenario 02 (Multi-Location Services):** *"24/7 Customer Self-Service & Booking Engine"* (Dark charcoal card, 70% fewer calls, instant deposit processing, zero double-bookings, link: *Booking App Engine → Read Story ↗*)
  - **Scenario 03 (Retail & Commerce):** *"Real-Time Executive Dashboards & Automation"* (Light card, live cross-platform revenue, low-stock alerts, single source of truth, link: *BI & Data Pipelines → Read Story ↗*)

---

### 3.7 Strategic CTA Banner (`components/CtaBanner.tsx`)
- **Container:** High-contrast full-width banner container with neon lime background `#B9FF66` or dark charcoal `#191A23`.
- **Content:** Compelling transition banner prompting SMB owners to book an architectural discovery session.
- **CTA:** "Book 30-Minute Scoping Call" + "NDA Signed Prior to Call".

---

### 3.8 How It Works (6-Stage Process Track)
- **Section Header:** Highlighter badge *"How It Works"* + description.
- **Process Steps:**
  - `01 Discovery` (Icon: `search`) — Identifying operational bottlenecks & toolchain.
  - `02 Planning` (Icon: `architecture`) — Architecture, milestones, fixed pricing.
  - `03 Design & Build` (Icon: `terminal`) — Agile sprints, regular video demos, git commits.
  - `04 Quality Assurance` (Icon: `verified`) — Functional, security, cross-device testing.
  - `05 Deployment & Handover` (Icon: `rocket_launch`) — Production launch in client cloud with runbooks.
  - `06 Ongoing Support` (Icon: `support_agent`) — Retainer for maintenance, SLA monitoring, updates.
- **Kinetic Styling:** Connected horizontal dashed conduit line on desktop; hover highlights card into neon lime `#B9FF66`.

---

### 3.9 Philosophy & The 6 Non-Negotiables Commitments
- **Layout:** 12-column grid (`5 cols` left manifesto card, `7 cols` right commitments checklist).
- **Left Column (Manifesto Card):**
  - Dark container `#191A23`, title *"Built for Business Leaders, Not Technologists"*.
  - 3 Core Pillars: Plain-English Communication (`translate`), Business Outcome Orientation (`trending_up`), Weekly Executive Recaps (`event_note`).
- **Right Column (The 6 Non-Negotiables):**
  - 2x3 Grid of white cards with `check_box` icons:
    1. *Transparent Scopes* (no surprise billing)
    2. *100% IP Assignment* (formal legal transfer)
    3. *Zero Lock-In Traps* (open React, Node, Python, SQL)
    4. *Production Handover Docs* (runbooks and schemas)
    5. *Direct Engineer Slack* (shared communication channels)
    6. *Fixed-Price Milestones* (milestone-based payments)

---

### 3.10 Testimonials Carousel (`components/Testimonials.tsx`)
- **Container:** `#191A23` dark container with `36px` radius and `2.5px` border.
- **Speech Bubble Cards:** Conversational bubble with `#B9FF66` borders, 5-star rating stars, direct SMB founder quotes, author photo, role, and company name.
- **Interactive Controls:** Left/Right arrow circle buttons with mechanical push states, slide counter / pagination dots.

---

### 3.11 FAQs (Interactive Accordion)
- **Section Header:** Highlighter badge *"FAQs"* + description.
- **8 Critical SMB Inquiries:**
  1. *What types of businesses do you work with?* (Expanded by default)
  2. *Can you build software specifically tailored to my business workflows?*
  3. *How is project pricing and scope determined?*
  4. *Will I truly own all source code and intellectual property?*
  5. *Where will my business data and customer information be stored?*
  6. *Can you manage and maintain the software after launch?*
  7. *Can you modernize an existing legacy business website or internal application?*
  8. *Do you work with international clients across different time zones?*
- **Accordion Micro-Interactions:**
  - Collapsed state: `#F3F3F3` or `#FFFFFF` background, circular badge with `add` icon.
  - Expanded state: Smooth height expansion, card background flips dynamically to `#B9FF66`, border intact, icon flips to `remove`, black separator line, high-contrast readable answer text.

---

### 3.12 Contact & Project Inquiry Form
- **Layout:** 12-column card container (`5 cols` intro & guarantees, `7 cols` form).
- **Left Column:**
  - Section marker "Let's Talk", Display title: *"Let's build something that moves your business forward."*
  - 3 Trust signals: `schedule` (24hr response guaranteed), `security` (Mutual NDA on request), `folder_zip` (Free architectural breakdown).
  - Quote pill: *"We talk to you as strategic business partners, not commission-driven software sales reps."*
- **Right Column (Form):**
  - Fields:
    1. `Full Name` (required text input)
    2. `Business Email` (required email input)
    3. `Company Name` (required text input)
    4. `Country / Region` (select: US, UK, CA, EU, AU, UAE, Other)
    5. `Primary Need` (select: Web Applications, Mobile Apps, Data Analytics & BI, AI & ML, Cloud Infrastructure, Full Legacy Modernization)
    6. `Project Overview` (required textarea)
  - Submit Button: *"Submit Project Inquiry ⚡"* (full width, tactile button with shadow `0 5px 0 #1a1b24`, hover `translate-y-[3px]`).
  - Success Feedback: Animated neon green banner upon successful submission.

---

### 3.13 Footer
- **Background:** `#191A23` or `#F3F3F3` with top border `border-t-2 border-primary`.
- **5 Column Distribution:**
  - Col 1 & 2 (Brand Block): Logo, mission summary, international coverage badge (`Serving US, UK, EU, Canada, Australia & UAE`).
  - Col 3 (Services): Web Apps, Mobile Apps, Data Analytics, AI Solutions, DevOps & Cloud, Digital Transformation.
  - Col 4 (Trust & Ownership): Client-Owned Code, Zero Lock-In, Data Privacy & Security, IP Protection Guarantee.
  - Col 5 (Company): Our Process, FAQ, Contact, Case Studies.
- **Bottom Bar:** Copyright © 2025 Synergy Digital Solutions, Privacy Policy, Terms of Service, IP Guarantee links.

---

## 4. SVG Illustrations & Iconography Catalog

The design includes 7 custom inline SVG illustrations designed specifically in neo-brutalist line-and-fill style:

### 4.1 Hero Transceiver / Megaphone SVG (`HeroGraphic.tsx`)
```xml
<svg class="w-full h-full max-w-[380px]" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Concentric broadcast waves -->
  <path d="M 280 120 A 100 100 0 0 1 320 220" stroke="#1a1b24" stroke-dasharray="6 6" stroke-linecap="round" stroke-width="2.5"></path>
  <path d="M 295 90 A 140 140 0 0 1 350 240" stroke="#1a1b24" stroke-linecap="round" stroke-width="2.5"></path>
  <path d="M 310 60 A 180 180 0 0 1 380 260" stroke="#1a1b24" stroke-dasharray="8 6" stroke-linecap="round" stroke-width="2.5"></path>
  <!-- Main Horn Body -->
  <polygon fill="#ffffff" points="120,240 260,150 275,250 145,260" stroke="#1a1b24" stroke-width="3"></polygon>
  <polygon fill="#b1f65f" points="120,240 260,150 240,110 110,210" stroke="#1a1b24" stroke-width="3"></polygon>
  <!-- Broadcast Aperture Ring -->
  <ellipse cx="268" cy="200" fill="#1a1b24" rx="20" ry="54" stroke="#1a1b24" stroke-width="3"></ellipse>
  <ellipse cx="266" cy="200" fill="#b1f65f" rx="14" ry="46"></ellipse>
  <ellipse cx="264" cy="200" fill="#1a1b24" rx="7" ry="32"></ellipse>
  <!-- Grip and Pivot Mount -->
  <rect fill="#1a1b24" height="60" rx="6" stroke="#1a1b24" stroke-width="2" transform="rotate(-15 130 255)" width="28" x="130" y="255"></rect>
  <circle cx="140" cy="250" fill="#b1f65f" r="16" stroke="#1a1b24" stroke-width="3"></circle>
  <!-- Base Pedestal -->
  <path d="M 80 340 L 220 340 L 200 320 L 100 320 Z" fill="#ffffff" stroke="#1a1b24" stroke-width="3"></path>
  <line stroke="#1a1b24" stroke-width="4" x1="140" x2="140" y1="310" y2="320"></line>
  <!-- Sparks -->
  <path d="M 90 120 L 98 100 L 118 92 L 98 84 L 90 64 L 82 84 L 62 92 L 82 100 Z" fill="#1a1b24"></path>
  <circle cx="190" cy="80" fill="#b1f65f" r="8" stroke="#1a1b24" stroke-width="2"></circle>
  <circle cx="70" cy="260" fill="#1a1b24" r="6"></circle>
</svg>
```

### 4.2 Web Applications Browser SVG (Service Card 1)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <rect fill="#f3f3f3" height="80" rx="10" stroke="#1a1b24" stroke-width="2.5" width="100" x="10" y="20"></rect>
  <line stroke="#1a1b24" stroke-width="2.5" x1="10" x2="110" y1="42" y2="42"></line>
  <circle cx="24" cy="31" fill="#1a1b24" r="3.5"></circle>
  <circle cx="36" cy="31" fill="#1a1b24" r="3.5"></circle>
  <circle cx="48" cy="31" fill="#b1f65f" r="3.5" stroke="#1a1b24" stroke-width="1.5"></circle>
  <rect fill="#ffffff" height="34" rx="4" stroke="#1a1b24" stroke-width="2" width="30" x="22" y="54"></rect>
  <line stroke="#1a1b24" stroke-width="2" x1="62" x2="98" y1="58" y2="58"></line>
  <line stroke="#1a1b24" stroke-width="2" x1="62" x2="92" y1="68" y2="68"></line>
  <rect fill="#b1f65f" height="10" rx="3" stroke="#1a1b24" stroke-width="1.5" width="24" x="62" y="78"></rect>
</svg>
```

### 4.3 Mobile App Device Wireframe SVG (Service Card 2)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <rect fill="#ffffff" height="96" rx="12" stroke="#1a1b24" stroke-width="2.5" width="50" x="35" y="12"></rect>
  <line stroke="#1a1b24" stroke-linecap="round" stroke-width="2" x1="50" x2="70" y1="20" y2="20"></line>
  <rect fill="#f3f3f3" height="58" rx="4" stroke="#1a1b24" stroke-width="1.5" width="36" x="42" y="28"></rect>
  <circle cx="60" cy="98" fill="#1a1b24" r="4"></circle>
  <circle cx="60" cy="55" r="9" stroke="#1a1b24" stroke-dasharray="3 3" stroke-width="1.5"></circle>
  <circle cx="60" cy="55" fill="#1a1b24" r="3"></circle>
</svg>
```

### 4.4 Data Analytics Chart SVG (Service Card 3)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <rect fill="#1a1b24" height="74" rx="8" stroke="#ffffff" stroke-width="2" width="92" x="14" y="24"></rect>
  <rect fill="#b1f65f" height="30" width="12" x="26" y="58"></rect>
  <rect fill="#ffffff" height="44" width="12" x="46" y="44"></rect>
  <rect fill="#b1f65f" height="52" width="12" x="66" y="36"></rect>
  <rect fill="#ffffff" height="38" width="12" x="86" y="50"></rect>
  <path d="M 28 48 L 52 36 L 72 26 L 92 38" stroke="#b1f65f" stroke-linecap="round" stroke-width="2.5"></path>
  <circle cx="72" cy="26" fill="#ffffff" r="3"></circle>
</svg>
```

### 4.5 AI & Machine Learning Neural Nodes SVG (Service Card 4)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <circle cx="60" cy="60" fill="#b1f65f" r="14" stroke="#ffffff" stroke-width="2"></circle>
  <circle cx="28" cy="40" fill="#ffffff" r="8" stroke="#b1f65f" stroke-width="2"></circle>
  <circle cx="92" cy="38" fill="#ffffff" r="8" stroke="#b1f65f" stroke-width="2"></circle>
  <circle cx="34" cy="86" fill="#ffffff" r="8" stroke="#b1f65f" stroke-width="2"></circle>
  <circle cx="86" cy="84" fill="#ffffff" r="8" stroke="#b1f65f" stroke-width="2"></circle>
  <line stroke="#ffffff" stroke-width="2" x1="36" x2="50" y1="44" y2="54"></line>
  <line stroke="#ffffff" stroke-width="2" x1="84" x2="70" y1="42" y2="54"></line>
  <line stroke="#ffffff" stroke-width="2" x1="40" x2="52" y1="80" y2="68"></line>
  <line stroke="#ffffff" stroke-width="2" x1="80" x2="68" y1="78" y2="68"></line>
  <circle cx="60" cy="60" fill="#1a1b24" r="4"></circle>
</svg>
```

### 4.6 DevOps Cloud Infrastructure SVG (Service Card 5)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <path d="M 30 52 C 22 52 16 58 16 66 C 16 74 22 80 30 80 L 90 80 C 98 80 104 74 104 66 C 104 59 99 53 92 52 C 90 38 78 30 64 30 C 52 30 42 38 38 48 C 35 48 32 50 30 52 Z" fill="#ffffff" stroke="#1a1b24" stroke-width="2.5"></path>
  <rect fill="#1a1b24" height="36" rx="4" stroke="#1a1b24" stroke-width="2" width="36" x="42" y="60"></rect>
  <circle cx="50" cy="72" fill="#b1f65f" r="2.5"></circle>
  <line stroke="#ffffff" stroke-width="2" x1="58" x2="72" y1="72" y2="72"></line>
  <circle cx="50" cy="84" fill="#b1f65f" r="2.5"></circle>
  <line stroke="#ffffff" stroke-width="2" x1="58" x2="72" y1="84" y2="84"></line>
</svg>
```

### 4.7 Digital Transformation Gears SVG (Service Card 6)
```xml
<svg class="w-full h-full" fill="none" viewBox="0 0 120 120">
  <circle cx="52" cy="52" fill="#f3f3f3" r="26" stroke="#1a1b24" stroke-width="2.5"></circle>
  <circle cx="52" cy="52" fill="#ffffff" r="10" stroke="#1a1b24" stroke-width="2"></circle>
  <circle cx="78" cy="78" fill="#b1f65f" r="18" stroke="#1a1b24" stroke-width="2"></circle>
  <circle cx="78" cy="78" fill="#1a1b24" r="6"></circle>
  <path d="M 30 20 L 40 26 M 64 20 L 56 28 M 20 54 L 28 54 M 76 50 L 84 50" stroke="#1a1b24" stroke-linecap="round" stroke-width="2.5"></path>
</svg>
```

### 4.8 Material Symbols Catalog
The layout utilizes the following icon names from Google Material Symbols:
- Hero & Navigation: `database`, `insights`, `smart_toy`, `cloud_done`, `person`, `menu`, `close`
- Trust Strip & Ownership: `verified`, `folder_special`, `cloud`, `lock_open`, `code`, `cloud_queue`, `key`, `menu_book`, `verified_user`
- Services & Actions: `arrow_outward`, `arrow_forward`, `check_circle`, `check_box`
- Process: `search`, `architecture`, `terminal`, `rocket_launch`, `support_agent`
- Philosophy: `translate`, `trending_up`, `event_note`
- Accordion: `add`, `remove`
- Contact: `schedule`, `security`, `folder_zip`
- Footer: `public`

---

## 5. Responsive Design Specifications

```
Breakpoints:
- Desktop:  >= 1024px (lg / xl)
- Tablet:   768px - 1023px (md)
- Mobile:   < 768px (sm / xs)
```

### 5.1 Responsive Behavior Matrix

| Section | Desktop (1024px+) | Tablet (768px - 1023px) | Mobile (< 768px) |
| :--- | :--- | :--- | :--- |
| **Navigation** | Full horizontal links + CTA button | Hamburger icon, CTA button in header | Hamburger icon, full-screen slide drawer overlay |
| **Hero Grid** | 12 cols: 7 cols text, 5 cols illustration | 1 col stack: text centered/left, illustration below | 1 col stack: display font drops to 38px, button full-width |
| **Hero Graphic** | Max `460px` width, full floating badges | Max `380px`, badges slightly scaled | Max `300px`, 2 badges hidden or repositioned |
| **Trust Strip** | 1 row: Title on left, 4 badges inline | 2 rows: Title on top, 4 badges in 4 cols | 2x2 grid of trust badges, title centered on top |
| **Ownership** | 4-column card grid, large padded box | 2x2 card grid, padding `2rem` | 1-column card stack, padding `1.25rem` |
| **Services Grid** | 2-column or 7/5 asymmetrical grid | 2-column uniform grid | 1-column stack, SVG illustration scales to `100px` |
| **Solutions** | 3-column equal grid | 2-col (third stretches full width) | 1-column stack with full padding |
| **How It Works** | 6-col inline with dashed pipeline | 3-col x 2-row grid | 1-column stack, bold step numbers `01`-`06` |
| **Philosophy** | 5 cols manifesto, 7 cols commitments (2x3) | Vertical stack: manifesto top, commitments 2 cols | Vertical stack: manifesto top, commitments 1 col |
| **Testimonials** | 3 visible cards with prev/next buttons | 2 visible cards with swipe | 1 card carousel with prev/next buttons |
| **FAQs** | Full width `max-w-4xl` or `7xl`, 8 rows | Full width with comfortable touch tap | Full width, min 48px tap targets, icon pill on right |
| **Contact Form** | 12 cols: 5 cols info, 7 cols form | Vertical stack: Info on top, Form below | 1-col inputs full width, 16px font (prevent iOS zoom) |
| **Footer** | 5-column grid with bottom legal row | 3-column grid (Brand, Services, Company) | 1-column accordion-friendly stack |

---

### 5.2 Mobile Navigation Drawer Specification
- State: `isOpen: boolean` managed in client component `Navbar.tsx`.
- Trigger: Hamburger button (`type="button"`, aria-label="Toggle menu").
- Animation: Smooth slide-in or fade-in transition (`transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
- Drawer Contents:
  - Header with Logo and Close (`close`) button.
  - Vertical list of navigation links with `font-headline-sm font-bold text-primary`.
  - Prominent full-width button: *"Discuss Your Project ⚡"*.
  - Direct email and phone quick-action links.

---

## 6. Component Architecture & Next.js Implementation

### 6.1 Component File Tree
```
app/
├── globals.css                <-- Tailwind v4 @theme, brutalist shadow utility classes
├── layout.tsx                 <-- Root layout, Space Grotesk Google Font configuration
└── page.tsx                   <-- Server component assembling all page sections
components/
├── Navbar.tsx                 <-- "use client" (Mobile drawer, active link state)
├── Hero.tsx                   <-- Server component (Hero typography, CTA pair, badges)
├── HeroGraphic.tsx            <-- Bespoke Transceiver SVG + floating neo-brutalist badges
├── Logos.tsx                  <-- Server/Client component (Partners & technology logos)
├── Ownership.tsx              <-- Server component (Section 2 Core Differentiator & 4 cards)
├── Services.tsx               <-- Server component (6 alternating service cards + SVGs)
├── Solutions.tsx              <-- Server component (Case studies & 3 business scenarios)
├── CtaBanner.tsx              <-- Server component (High-conversion call-to-action bar)
├── HowItWorks.tsx             <-- Server component (6-step development pipeline)
├── Philosophy.tsx             <-- Server component (Manifesto card + 6 Non-Negotiables)
├── Testimonials.tsx           <-- "use client" (Testimonial carousel with prev/next state)
├── ProcessAccordion.tsx       <-- "use client" (Interactive FAQ accordion with expand/collapse)
├── ContactSection.tsx         <-- "use client" (Interactive form state, validation, feedback)
└── Footer.tsx                 <-- Server component (5-column footer + legal navigation)
```

---

### 6.2 Client vs. Server Components Breakdown

| Component | Component Type | Reason for Choice |
| :--- | :--- | :--- |
| `Navbar.tsx` | `"use client"` | Mobile hamburger menu toggle, backdrop blur scroll state, mobile drawer |
| `Hero.tsx` | Server Component | Static display typography, SEO-critical H1, server-rendered buttons |
| `HeroGraphic.tsx` | Server Component | Pure SVG and CSS keyframe animations, zero JavaScript needed |
| `Logos.tsx` | Server Component | Static SVG logo markup or CSS-only marquee animation |
| `Ownership.tsx` | Server Component | Static high-impact marketing cards and IP guarantee |
| `Services.tsx` | Server Component | Static grid with pure SVGs and CSS hover states |
| `Solutions.tsx` | Server Component | Static case study scenarios and bullet points |
| `CtaBanner.tsx` | Server Component | Static banner with anchor link to `#contact-inquiry` |
| `HowItWorks.tsx` | Server Component | Static 6-step roadmap with CSS hover animations |
| `Philosophy.tsx` | Server Component | Static manifesto and non-negotiables checklist |
| `Testimonials.tsx` | `"use client"` | Dynamic carousel slide index `activeIndex`, Prev/Next controls, touch swipe |
| `ProcessAccordion.tsx` | `"use client"` | State management `openIndex: number | null`, smooth accordion transition |
| `ContactSection.tsx` | `"use client"` | Form state (`formData`), input validation, submission handler, success alert |
| `Footer.tsx` | Server Component | Static navigational links, copyright, compliance links |

---

### 6.3 State & Interaction Specifications

#### A. Interactive Accordion (`ProcessAccordion.tsx`)
```tsx
"use client";
import { useState } from "react";

// Initial state: first question (0) open by default
const [openIndex, setOpenIndex] = useState<number | null>(0);

const toggleAccordion = (index: number) => {
  setOpenIndex((prev) => (prev === index ? null : index));
};

// Styling Rules:
// When open: container classes `bg-[#B9FF66] border-[#191A23] shadow-[0_4px_0_#1a1b24]`
// When closed: container classes `bg-[#F3F3F3] border-[#191A23] shadow-[0_4px_0_#1a1b24]`
// Icon: `remove` when open, `add` when closed
```

#### B. Testimonials Carousel (`Testimonials.tsx`)
```tsx
"use client";
import { useState } from "react";

const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
```

#### C. Contact Inquiry Form (`ContactSection.tsx`)
```tsx
"use client";
import { useState } from "react";

const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  country: "US",
  service: "web",
  overview: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");
  // Simulate submission or call API route
  setTimeout(() => setStatus("success"), 600);
};
```

---

## 7. Tailwind CSS v4 & Next.js Setup Guide

### 7.1 Font Configuration (`app/layout.tsx`)
```tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Synergy Digital Solutions — Custom Software, Web & Cloud Engineering",
  description:
    "Empowering growing SMBs with client-owned custom web applications, mobile apps, analytics, and cloud engineering with zero vendor lock-in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#fafaf7] text-[#191A23] font-sans selection:bg-[#B9FF66] selection:text-[#191A23]">
        {children}
      </body>
    </html>
  );
}
```

### 7.2 Tailwind CSS v4 Styling (`app/globals.css`)
```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  --font-display: var(--font-space-grotesk), "Space Grotesk", sans-serif;

  /* Color Tokens */
  --color-primary: #191a23;
  --color-on-primary: #ffffff;
  --color-secondary-fixed: #b9ff66;
  --color-secondary: #3f6900;
  --color-surface: #fafaf7;
  --color-surface-container-low: #f3f3f3;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-on-surface: #191a23;
  --color-on-surface-variant: #47464b;
  --color-outline: #77767c;
  --color-outline-variant: #c8c5cc;
  --color-tertiary-fixed-dim: #c6c5d0;
}

/* Tactile Neo-Brutalist Utilities */
@layer utilities {
  .brutal-shadow {
    box-shadow: 4px 4px 0px #191a23;
  }
  .brutal-shadow-sm {
    box-shadow: 3px 3px 0px #191a23;
  }
  .brutal-shadow-lg {
    box-shadow: 6px 6px 0px #191a23;
  }
  .brutal-btn {
    box-shadow: 4px 4px 0px #191a23;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .brutal-btn:hover {
    box-shadow: 1px 1px 0px #191a23;
    transform: translate(3px, 3px);
  }
  .brutal-btn:active {
    box-shadow: 0px 0px 0px #191a23;
    transform: translate(4px, 4px);
  }
  .brutal-card {
    box-shadow: 5px 5px 0px #191a23;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .brutal-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px #191a23;
  }
}
```

---

## 8. Verification & Execution Checklist for Frontend Engineer

1. [ ] **Font & Icon Loading:** Ensure `Space_Grotesk` is configured in `layout.tsx` and Google Material Symbols stylesheet is loaded in `<head>`.
2. [ ] **Tailwind v4 Theme:** Add `@theme` variables and `.brutal-shadow` utility classes to `globals.css`.
3. [ ] **Fixed Header / Navigation:** Build `components/Navbar.tsx` with smooth mobile drawer overlay and active link markers.
4. [ ] **Hero Section:** Implement `components/Hero.tsx` and `components/HeroGraphic.tsx` with transceiver SVG, dashed orbital rings, and floating sticker badges.
5. [ ] **Trust Badges & Logos:** Build `components/Logos.tsx` with the 4 core trust pillars and partner technology badges.
6. [ ] **Ownership Section:** Implement `components/Ownership.tsx` featuring the dark container `#191A23` and 4 IP sovereignty certificate cards.
7. [ ] **Services 6-Card Grid:** Implement `components/Services.tsx` with alternating backgrounds (Light `#ffffff`, Neon `#B9FF66`, Dark `#191A23`) and all 6 inline SVGs.
8. [ ] **Solutions / Case Studies:** Build `components/Solutions.tsx` featuring the 3 operational business scenarios with metric bullet points.
9. [ ] **CTA Banner:** Implement `components/CtaBanner.tsx` for conversion push before the process section.
10. [ ] **How It Works:** Implement `components/HowItWorks.tsx` with 6 numbered milestone stages (`01` to `06`) and hover interactions.
11. [ ] **Philosophy & Non-Negotiables:** Build `components/Philosophy.tsx` with the left manifesto card and right 6-commitment checklist cards.
12. [ ] **Testimonials Showcase:** Build `components/Testimonials.tsx` with conversational bubble cards, star ratings, and prev/next controls.
13. [ ] **FAQ Accordion:** Build `components/ProcessAccordion.tsx` featuring expandable/collapsible toggle with the background color transition to `#B9FF66`.
14. [ ] **Project Inquiry Form:** Build `components/ContactSection.tsx` with all 6 input fields, guarantee signals, and instant feedback alert.
15. [ ] **Footer:** Build `components/Footer.tsx` with 5 columns and legal footer links.
16. [ ] **Cross-Device Testing:** Verify desktop (`1280px`), tablet (`820px`), and mobile (`390px`) rendering with zero horizontal overflow and flawless touch targets.
