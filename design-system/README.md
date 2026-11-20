A neon-lit system for Product Designer Gym: interfaces that feel like a training floor for design skills, in two themes. **Dark** is a dark canvas with one electric-blue action colour; **Light** is a warm off-white canvas with ink text and one lime action colour. Both use plain, confident DM Sans type.

## Brand

- Write the name as **Product Designer Gym** — three words, title case, never abbreviated in UI copy.
- The logo is a photographed neon sign: a flexed-arm icon inside a design-tool selection frame (corner handles), a sparkle and a cursor, over the stacked wordmark. Use `product-designer-gym-neon.png` from **Logos** as a hero or brand image; it carries its own brick-wall backdrop, so never crop the sign's glow tightly. In the Light theme, show it as a contained, rounded photo (`radius-5`) so its dark backdrop reads as a framed image, never cut out onto the off-white canvas.
- The sign's violet sparkle, pink frame and orange cursor belong to the logo image only. They are **not** UI colours: interfaces use the tokens below.
- No vector mark has been supplied, so there is no small-size logo or favicon yet. Do not redraw the sign; set the name in `h4` / `text` where a compact mark is needed.

## Colour

The system has two themes, **Dark** (default) and **Light**. They share the same token names, so components never change: switch with `data-theme="dark"` / `data-theme="light"` on `<html>` or on any container.

| Token | Dark | Light |
|---|---|---|
| primary | #00BFFF | #E4F222 |
| primary-hover | #33CCFF | #D3E10F |
| on-primary | #111318 | #1A1919 |
| primary-text | = primary | #5A6200 |
| primary-text-hover | = primary-hover | #1A1919 |
| focus-ring | = primary | #1A1919 |
| background | #111318 | #F4F2EE |
| surface | #1B1F2A | #FFFFFF |
| text | #F5F5F5 | #1A1919 |
| text-muted | #C4CAD4 | #5F5B55 |
| border | #515867 | #D9D5CE |
| success | #00E676 | #157A43 |
| warning | #FFD166 | #8F5A00 |
| error | #FF6B6B | #C62828 |
| on-error | #111318 | #FFFFFF |

The Light values come from the Product Designer Gym Light site. Its success (#1F9D55) and warning (#C27C0E) were darkened to #157A43 and #8F5A00 so they pass 4.5:1 as text, and an error red was added because the site has none.

- Paint the app canvas `background`; cards, modals and input fields `surface`.
- Set headings and body copy in `text`; secondary text, hints and descriptions in `text-muted`.
- Use `primary` as the fill for primary actions and active elements, and `primary-hover` only for its hover state — it is not a second brand colour.
- Use `primary-text` (and `primary-text-hover`) whenever the primary colour is text, an icon or an outline: links, ghost buttons, selected outlines. In Dark it equals `primary`; in Light it is olive, because lime is 1.1:1 on the canvas.
- Label any `primary` or `primary-hover` fill with `on-primary` (the dark canvas in Dark, ink in Light), and any `error` fill with `on-error`. White on `primary` fails in both themes.
- Use `success` for successful outcomes, `warning` for caution and `error` for errors or destructive actions. Never signal status through colour alone: pair it with an icon and a word (see **StatusBadge**).
- Use `border` for dividers, outlines and input borders. It is under the 3:1 recommended for control boundaries in both themes (Dark 2.6:1 / 2.3:1, Light 1.3:1 / 1.5:1) — rely on the field's label and fill as well as the outline, and use the `focus-ring` to mark the active field.
- Check contrast for each actual pairing; target WCAG AA — 4.5:1 for normal text, 3:1 for large text and for meaningful graphics and control boundaries.

## Typography

- Set everything in DM Sans (`--font-sans`). It is a hosted Google Font: load it in the project before applying these tokens, e.g. `https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&display=swap`.
- Headings: `h1` 40/48 bold for page titles (one per page; about 32px on small screens), `h2` 32/40 bold for sections, `h3` 24/32 semibold for subsections, `h4` 20/28 semibold for card and component titles. Keep them in descending order.
- Text: `body` 16/24 for primary content, `caption` 14/20 for supporting information, `small` 12/16 for secondary labels and timestamps.
- Reserve `tiny` (10/12, medium) for nonessential decorative metadata; keep anything essential at 12px or larger.
- Apply type through the type-style classes (`class="body"`, `caption`, `h4`, `small`…), never by hard-coding a font size. Components set only a weight on top of them (labels and badges at 600).

## Spacing and layout

- Use only the spacing scale `space-1` (4px) to `space-7` (48px) — no arbitrary numbers.
- Default gaps are `space-4` (16px), card padding is `space-5` (24px), and major sections sit `space-7` (48px) apart. Inputs pad at `space-3`.

## Radii

- Buttons and inputs `radius-2` (8px); cards and dropdowns `radius-3` (12px); larger panels `radius-4` (16px); badges and small controls `radius-1` (4px).
- Use `radius-none` (0) for full-bleed images and tables that run edge to edge, and `radius-full` (9999px) for pills and circles.
- Keep radii consistent between related components. Use `radius-5` and `radius-full` selectively, for hero, feature and pill shapes.

## Borders

- Draw every outline and divider at `border-width` (1px) and every focus outline at `focus-ring-width` (2px) — never a literal pixel width.

## Interaction

- One visually dominant primary button per screen or task area; everything else is secondary or ghost.
- Every interactive element shows a visible keyboard focus state: a solid `focus-ring-width` `focus-ring` ring with a 2px offset (Dark: electric blue, 8.8:1; Light: ink, 15.7:1).
- Destructive actions use an `error` fill with an `on-error` label and say what they destroy ("Delete workout").

## Iconography

No icon set has been supplied. The logo's motifs — the selection frame with corner handles, the sparkle and the cursor — are the brand's visual language; when an icon set is chosen, prefer a single-weight outline style that matches the neon tubing, and always pair status icons with a word.

## Components

The component styles live in `components/bundle.css` as plain CSS classes (prefix `pdg-`); there is no JavaScript bundle. The spec names actions, inputs, cards and status colours, so the system includes **Button**, **Input**, **Card** and **StatusBadge** built strictly from these tokens.
