// Central registry of every swappable image in the site.
// Each entry: { id, label, section, description, currentPath, targetFilename }
// targetFilename = the filename written to public/assets/ on upload.

export const IMAGE_SLOTS = [
  // ── Branding ────────────────────────────────────────────────────
  {
    id: 'brand-logo',
    section: 'Branding',
    label: 'Anyam Logo (hornbill)',
    description: 'Used in Nav, Tala section, Features, Destinations CTA, Hero mark, Footer mark.',
    currentPath: '/assets/anyam-logo.png',
    targetFilename: 'anyam-logo.png',
  },
  {
    id: 'brand-wordtype',
    section: 'Branding',
    label: 'Anyam Wordtype',
    description: 'Text logo — reserved, currently unused in nav (logo icon used instead).',
    currentPath: '/assets/anyam-wordtype.png',
    targetFilename: 'anyam-wordtype.png',
  },

  // ── Hero phones ─────────────────────────────────────────────────
  {
    id: 'hero-screen-welcome',
    section: 'Hero — Phone Screens',
    label: 'Phone Screen: Welcome',
    description: 'Left phone mockup — welcome / login screen. Upload a real app screenshot (PNG, ~430×932).',
    currentPath: '/assets/screen-welcome.png',
    targetFilename: 'screen-welcome.png',
  },
  {
    id: 'hero-screen-onboard',
    section: 'Hero — Phone Screens',
    label: 'Phone Screen: Onboarding',
    description: 'Center phone mockup — "Travel Without Limits" onboarding screen.',
    currentPath: '/assets/screen-onboard.png',
    targetFilename: 'screen-onboard.png',
  },
  {
    id: 'hero-screen-trip',
    section: 'Hero — Phone Screens',
    label: 'Phone Screen: Trip Detail',
    description: 'Right phone mockup — trip detail / destination screen.',
    currentPath: '/assets/screen-trip.png',
    targetFilename: 'screen-trip.png',
  },

  // ── Values ──────────────────────────────────────────────────────
  {
    id: 'values-kapwa',
    section: 'Values Section',
    label: 'Values Card 1 — Kapwa (icon)',
    description: 'Decorative icon on the Kapwa value card (bottom-right corner).',
    currentPath: '/assets/asset-1.png',
    targetFilename: 'asset-1.png',
  },
  {
    id: 'values-kwento',
    section: 'Values Section',
    label: 'Values Card 2 — Kwento (icon)',
    description: 'Decorative icon on the Kwento value card.',
    currentPath: '/assets/asset-3.png',
    targetFilename: 'asset-3.png',
  },
  {
    id: 'values-bayanihan',
    section: 'Values Section',
    label: 'Values Card 3 — Bayanihan (icon)',
    description: 'Decorative icon on the Bayanihan value card.',
    currentPath: '/assets/asset-7.png',
    targetFilename: 'asset-7.png',
  },

  // ── Destinations ────────────────────────────────────────────────
  {
    id: 'dest-cta-icon',
    section: 'Destinations Section',
    label: 'Destinations CTA — Badge Icon',
    description: 'Small icon in the "7,641 islands" call-to-action row. Uses anyam-logo.png.',
    currentPath: '/assets/anyam-logo.png',
    targetFilename: 'anyam-logo.png',
  },

  // ── Features — Social Feed ───────────────────────────────────────
  {
    id: 'feat-social-bg',
    section: 'Features — Social Feed',
    label: 'Feature 01 Background Asset',
    description: 'Large transparent icon behind the Social Feed feature section (right side).',
    currentPath: '/assets/asset-2.png',
    targetFilename: 'asset-2.png',
  },
  {
    id: 'feat-social-card-img',
    section: 'Features — Social Feed',
    label: 'Feature 01 Post Card Image',
    description: 'Icon inside the kwento post card preview (Maria Santos post).',
    currentPath: '/assets/asset-6.png',
    targetFilename: 'asset-6.png',
  },
  {
    id: 'feat-social-trending',
    section: 'Features — Social Feed',
    label: 'Feature 01 Trending Item Icon',
    description: 'Icon in the "Salt walk, Pangasinan" trending item row.',
    currentPath: '/assets/asset-9.png',
    targetFilename: 'asset-9.png',
  },

  // ── Features — Tala AI ──────────────────────────────────────────
  {
    id: 'feat-tala-bg',
    section: 'Features — Tala AI',
    label: 'Feature 02 Background Asset',
    description: 'Large transparent hornbill logo behind the Tala AI feature section (left side).',
    currentPath: '/assets/anyam-logo.png',
    targetFilename: 'anyam-logo.png',
  },
  {
    id: 'feat-tala-avatar',
    section: 'Features — Tala AI',
    label: 'Feature 02 Tala Chat Avatar',
    description: 'Small avatar icon inside the Tala chat UI.',
    currentPath: '/assets/anyam-logo.png',
    targetFilename: 'anyam-logo.png',
  },

  // ── Features — Marketplace ──────────────────────────────────────
  {
    id: 'feat-market-bg',
    section: 'Features — Marketplace',
    label: 'Feature 03 Background Asset',
    description: 'Large transparent icon behind the Marketplace feature section (right side).',
    currentPath: '/assets/asset-8.png',
    targetFilename: 'asset-8.png',
  },
  {
    id: 'feat-market-stay',
    section: 'Features — Marketplace',
    label: "Feature 03 Listing — Lola Cita's Nipa Hut",
    description: 'Icon in the first marketplace listing card.',
    currentPath: '/assets/asset-3.png',
    targetFilename: 'asset-3.png',
  },
  {
    id: 'feat-market-food',
    section: 'Features — Marketplace',
    label: 'Feature 03 Listing — Sutukil Night Feast',
    description: 'Icon in the second marketplace listing card.',
    currentPath: '/assets/asset-9.png',
    targetFilename: 'asset-9.png',
  },
  {
    id: 'feat-market-craft',
    section: 'Features — Marketplace',
    label: 'Feature 03 Listing — Banig Weaving Workshop',
    description: 'Icon in the third marketplace listing card.',
    currentPath: '/assets/asset-5.png',
    targetFilename: 'asset-5.png',
  },

  // ── Features — Itinerary ────────────────────────────────────────
  {
    id: 'feat-itinerary-bg',
    section: 'Features — Itinerary Planner',
    label: 'Feature 04 Background Asset',
    description: 'Large transparent icon behind the Itinerary Planner feature section (left side).',
    currentPath: '/assets/asset-1.png',
    targetFilename: 'asset-1.png',
  },

  // ── Tala AI Section ─────────────────────────────────────────────
  {
    id: 'tala-mascot',
    section: 'Tala AI Section',
    label: 'Tala Mascot (hornbill)',
    description: 'The large hornbill illustration in the Tala AI section.',
    currentPath: '/assets/anyam-logo.png',
    targetFilename: 'anyam-logo.png',
  },

  // ── App Preview carousel ─────────────────────────────────────────
  {
    id: 'app-screen-0',
    section: 'App Preview Carousel',
    label: 'App Screen 0 — Community Feed',
    description: 'Phone screen for Community · Feed in the carousel.',
    currentPath: '/assets/asset-6.png',
    targetFilename: 'asset-6.png',
  },
  {
    id: 'app-screen-1',
    section: 'App Preview Carousel',
    label: 'App Screen 1 — Kwento / Story',
    description: 'Phone screen for Kwento · Story in the carousel.',
    currentPath: '/assets/asset-7.png',
    targetFilename: 'asset-7.png',
  },
  {
    id: 'app-screen-4',
    section: 'App Preview Carousel',
    label: 'App Screen 4 — Booking Confirm',
    description: 'Phone screen for Booking · Confirm in the carousel.',
    currentPath: '/assets/asset-3.png',
    targetFilename: 'asset-3.png',
  },

  // ── Team ────────────────────────────────────────────────────────
  {
    id: 'team-gabrielle',
    section: 'Team Section',
    label: 'Team — Gabrielle Tatel',
    description: 'Portrait glyph / photo for Gabrielle Tatel (Project Lead).',
    currentPath: '/assets/asset-1.png',
    targetFilename: 'asset-1.png',
  },
  {
    id: 'team-adrian',
    section: 'Team Section',
    label: 'Team — Adrian Rainier Fabian',
    description: 'Portrait glyph / photo for Adrian Rainier Fabian (Dev).',
    currentPath: '/assets/asset-3.png',
    targetFilename: 'asset-3.png',
  },
  {
    id: 'team-donald',
    section: 'Team Section',
    label: 'Team — Donald Lee Novo',
    description: 'Portrait glyph / photo for Donald Lee Novo (Frontend).',
    currentPath: '/assets/asset-7.png',
    targetFilename: 'asset-7.png',
  },
  {
    id: 'team-john',
    section: 'Team Section',
    label: 'Team — John Marco Antonio Yu',
    description: 'Portrait glyph / photo for John Marco Antonio Yu (AI).',
    currentPath: '/assets/asset-5.png',
    targetFilename: 'asset-5.png',
  },
  {
    id: 'team-jon',
    section: 'Team Section',
    label: 'Team — Jon Orillineda',
    description: 'Portrait glyph / photo for Jon Orillineda (Marketplace).',
    currentPath: '/assets/asset-9.png',
    targetFilename: 'asset-9.png',
  },
  {
    id: 'team-resham',
    section: 'Team Section',
    label: 'Team — Resham Qhaleed Kadiri',
    description: 'Portrait glyph / photo for Resham Qhaleed Kadiri (Design).',
    currentPath: '/assets/asset-6.png',
    targetFilename: 'asset-6.png',
  },
]

// Group by section for the admin UI
export function getSlotsBySection() {
  const map = {}
  for (const slot of IMAGE_SLOTS) {
    if (!map[slot.section]) map[slot.section] = []
    map[slot.section].push(slot)
  }
  return map
}
