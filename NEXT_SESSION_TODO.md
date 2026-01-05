# Handover: Stripe Integration (Next Session)

**Current Status**:
- [x] Firebase Project Configured (`src/firebase.js` has live keys).
- [x] Authentication Working (`AuthContext` syncs user to Firestore `users` collection).
- [ ] Payments Pending (Switched back to **Stripe** from Lemon Squeezy).

## The Goal
Implement **Weekly ($1.99)**, **Monthly ($6.99)**, and **Yearly ($69.99)** subscriptions using the **"Run Payments with Stripe" Firebase Extension**.

## Architecture (Stripe Extension)
We are using the **Invertase Stripe Extension** to avoid writing backend code.
1.  **Frontend**: User clicks "Subscribe".
2.  **Logic**: We write a doc to `customers/{uid}/checkout_sessions` with the `price_id`.
3.  **Extension**: Detects this, talks to Stripe, and writes a `url` back to the doc.
4.  **Frontend**: Redirects user to that `url`.
5.  **Post-Payment**: Extension updates `customers/{uid}/subscriptions` with status `active`.

## Immediate Next Steps (For the Assistant)
1.  **Confirm Extension Installation**: Ask the user if they have installed the "Run Payments with Stripe" extension in the Firebase Console.
    -   *Note: They will need their Stripe Keys (Publishable/Secret) for this step.*
2.  **Get Price IDs**: Ask the user to create 3 products in Stripe Dashboard and provide the **Price IDs** (`price_...`):
    -   Weekly ($1.99)
    -   Monthly ($6.99)
    -   Yearly ($69.99)
3.  **Update `Pricing.jsx`**: Refactor the UI to show 3 columns and implement the "Write to Firestore" logic for headers.
4.  **Update `AuthContext.jsx`**: Add a listener to `customers/{uid}/subscriptions` to unlock features when status is `active` or `trialing`.

## Code References
-   **Auth Logic**: `src/context/AuthContext.jsx`
-   **UI to Modify**: `src/components/Pricing.jsx`
-   **Config**: `src/firebase.js`
