# Button

Triggers an action; one visually dominant primary button per screen or task area.

**Markup:** `<button class="body pdg-btn pdg-btn--primary">Start workout</button>` — the `body` type style sets the label size; the button adds weight 600. Variants: `--primary`, `--secondary`, `--ghost`, `--destructive`. Disable with `disabled` (or `aria-disabled="true"` on a link).

**You provide:** the label (a verb first: "Start workout", "Submit critique"), an optional leading icon with `aria-hidden="true"`, and the click handler.

- Primary: `primary` fill, `on-primary` label, `primary-hover` on hover. Never white text on `primary`.
- Secondary: transparent with a `text-muted` outline (11.3:1) — used for everything that is not the main action.
- Ghost: `primary-text` for low-emphasis actions inside cards and toolbars.
- Destructive: `error` fill with `on-error` label; name what is destroyed ("Delete workout").
- `radius-2`, 40px tall, `space-4` horizontal padding, `space-2` between icon and label.
- `border-width` outline (transparent unless secondary or disabled). Focus: `focus-ring-width` `focus-ring` ring, 2px offset.

Don't put two primary buttons side by side, and don't use `primary-hover` as a resting colour.
