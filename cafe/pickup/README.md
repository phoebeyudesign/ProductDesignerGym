# Pickup-order prototype

Local implementation using the existing café menu, café image, DM Sans, design tokens, and Button/Input/StatusBadge classes. The café homepage displays both ordering flows with a Take away / Order to table toggle. Takeaway uses the dark theme; table ordering uses the light theme. Switching preserves each flow’s in-session bag and progress. Standalone `pickup/` and `order/` routes remain available. No dependencies or build step are needed.

From the repository root, run `python3 -m http.server 4173` and visit http://localhost:4173/cafe/.

## Flow

Browse and filter → customise → edit bag → choose pickup → guest details and order review → demo confirmation → preparing → ready to collect. Users can cancel before preparation. The bag survives refreshes; contact details are neither stored nor transmitted.

“Explore prototype scenarios” switches between normal, busy, pastry sold out, and closed. Closed offers tomorrow's windows; busy increases the ASAP estimate; sold-out items already in the bag block checkout until removed. Time windows are illustrative, based on the labelled sample Monday at 10:20, rather than live inventory or device time.

## Verification

Browser-checked customisation ($4.50 + $0.80 size + $0.60 oat = $5.90), guest checkout and confirmation, preparing/ready states, closed scheduling, sold-out blocking and recovery, and the 390px mobile layout. JavaScript syntax checked with `node --check cafe/pickup/pickup.js`.

## Before production

Confirm address, café timezone, currency, tax treatment, menu options, dietary information, payment policy, capacity, stock, cancellation and late-collection rules. Connect server-backed availability, order creation, payment if needed, receipts and status updates. Revalidate price, availability and pickup window on the server when placing an order; preserve the bag on a failure and prevent duplicate submissions. Add payment declined/retry, network failure, slot expiry and delayed-order states against those actual services.

No real order, charge, receipt or notification is created by this prototype. The pickup flow is integrated alongside the existing order-to-table feature.
