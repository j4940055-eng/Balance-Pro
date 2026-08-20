# MoneyTalks

Personal finance app, currently transitioning from the original static GitHub Pages beta to a production cloud architecture.

## Current beta improvements
- Salary is modeled as a recurring income transaction instead of being added magically to the current month.
- Transaction amounts support integer minor units (agorot/cents) and currency formatting with up to two decimal places.
- Fake Gmail/Open Banking actions are no longer presented as working integrations.
- PWA service worker uses real versioned caching instead of deleting caches and unregistering itself.
- Manifest, app icon, description and social metadata are included.
- Shared `app-core.js` provides a migration-friendly common financial data layer for the legacy static pages.
- Obsolete documents v2/v3 pages were removed.

## Cloud rebuild
A Lovable Cloud/Supabase rebuild is being used for the production architecture. The database includes per-user tables for profiles, transactions, recurring transactions, categories, budgets, bills, goals, loans, documents and settings. Row Level Security is enabled for user isolation.

The legacy `moneytalks-live-v1` browser data must never be silently deleted. Production migration should offer an authenticated one-time import and convert legacy float amounts to integer minor units.

## Money model
All persisted monetary values in the production model are integer minor units, for example `12345` = `₪123.45` for ILS. This avoids floating-point drift in totals and historical reports.
