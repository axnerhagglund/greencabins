# Design

## Visual Theme

GreenCabins uses a light-first forest retreat system with atmospheric dark photo moments. The surface should feel tactile, quiet, and carefully edited: warm paper backgrounds, bark-tinted text, restrained ember accents, and large photographic interruptions where the forest carries the emotion.

The default scene is a couple browsing from a sofa in a softly lit apartment on a Thursday evening, looking for a weekend that feels quieter than their week. This favors a readable light interface with occasional dusk-toned sections for atmosphere.

## Color

The palette is restrained with one warm accent. Existing tokens should remain recognizable, but new work should prefer OKLCH values when practical.

- `--bg`: warm paper, used for the main page surface.
- `--bg-subtle`: moss-tinted sand, used for slower editorial sections.
- `--bg-card`: lightly tinted cabin surface, not pure white.
- `--text`: bark-black, never pure black.
- `--text-mid`: weathered bark, used for secondary headings.
- `--text-muted`: warm grey, used for notes and metadata.
- `--forest-void`, `--forest-deep`, `--forest-mid`: dark forest photo overlays and footer/hero moments.
- `--ember`: dry-fire accent for labels, primary emphasis, and restrained calls to action.
- `--sage`: secondary natural accent, used sparingly for calm supporting details.

Do not use decorative gradient text, green eco badges, or high-chroma leaf greens. Dark sections must stay readable and should be image-led rather than dark for its own sake.

## Typography

The current project uses `Cormorant Garamond` for display and `DM Sans` for body text. This combination gives the site a slow editorial tone and should be handled carefully so it does not drift into generic luxury magazine styling.

- Use `var(--font-display)` for major emotional headings, cabin names, and short italic phrases.
- Use `var(--font-body)` for navigation, labels, body copy, metadata, and controls.
- Keep body copy around 65 to 75 characters per line.
- Use fluid `clamp()` display sizes with clear contrast between heading levels.
- Reserve uppercase tracking for short labels only.

## Layout

Use generous editorial pacing with asymmetric two-column sections, sticky side labels where useful, and occasional full-width atmospheric bands. Avoid repeated identical card grids as the dominant experience.

The homepage should read as a guided story. The cabins page should read as a curated catalogue: enough structure for comparison, but still calm and personal. Most sections should use a `max-width` near `1280px` with `2rem` side padding, matching the current system.

## Components

- Header: transparent over hero imagery, warm paper once scrolled. Navigation should include `Cabins`, `About`, and `Contact`.
- Cabin preview: image-led, with price, capacity, amenities, availability, and a clear detail link.
- Cabin catalogue: should support curated comparison and not rely only on a uniform card grid.
- Footer: dark forest surface with real links, not placeholder anchors.
- FAQ: accordion pattern is acceptable, but motion should respect reduced-motion.
- Buttons and links: thin borders, small uppercase labels, and strong focus-visible states.

## Imagery

Imagery is core content for this travel brand. Cabin and forest images should be real project assets or stable remote sources, with useful alt text. Missing image paths must be fixed rather than hidden with abstract blocks. One decisive photo can carry a section better than a collage of weak images.

## Motion

Use slow, quiet reveal and hover effects with exponential easing. Do not animate layout properties casually. All nonessential animation should be disabled or softened under `prefers-reduced-motion: reduce`.

## Accessibility

Maintain WCAG AA contrast, visible focus states, semantic headings, keyboard-operable navigation, and touch targets that work on mobile. Avoid hover-only disclosure. Keep reduced-motion support in global CSS.
