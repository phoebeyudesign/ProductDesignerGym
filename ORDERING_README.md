# Cafe table ordering prototype

## Where it lives

- `order.html` is a standalone, responsive ordering experience.
- `index.html` links to it from the existing cafe homepage.
- The repository landing page links to the feature directly.
- Styling uses `../design-system/tokens.css` and `../design-system/components/bundle.css`.

## Main flows

1. Select the table you're already sitting at using the floor plan.
2. A table-specific QR URL can skip table selection: `cafe/order.html?table=T12` (use a valid table ID: T01, T02, T03, T04, T12, T13, T14 or T15).
3. Browse categories and add items directly, or customise drink size, milk, extra shot and item notes.
4. Review your own unsubmitted items, add an optional order-level note, and disclose an allergy or dietary requirement through a separate, higher-attention flow.
5. Choose whether the bill preference should cover only your items or the whole table, then place the order.
6. See a confirmation and a prototype order reference.

## Prototype limits

This is a front-end prototype. Cart and order state live in memory for the current page load (refreshing resets the preview); there is no database, live multi-device table synchronisation, POS/kitchen integration, authenticated QR token, payment processor or real-time order status. Table 12 includes seeded example orders from other guests to demonstrate shared-table handling. All sample prices use USD to match the existing cafe homepage. Connect live menu, allergen, tax, currency, table-session and payment data before production use.

## Safety and UX notes

- Allergy notes are separate from ordinary kitchen notes. A warning asks the customer to speak to a team member, and the disclosure must include details and acknowledgement before the order can be placed in this prototype.
- Menu allergen strings are illustrative only and must be verified against the cafe's actual recipes, supplier data and cross-contact procedures.
- The order-wide note and item-level note are optional and length-limited.
- A payment preference is recorded for the prototype, but no payment is taken.
