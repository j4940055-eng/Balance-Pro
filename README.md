# Balance Pro Global WOW

This build is a global-first PWA prototype.

Included:
- WOW-style colorful dashboard
- Light / dark / system themes
- first-run onboarding
- dynamic greeting by local time
- automatic country heuristic from browser locale/timezone
- Hebrew, English, Spanish, French, German UI dictionaries
- country presets, base currency, locale and week start
- multi-account and multi-currency model
- manual FX rates and net worth conversion
- month-over-month analytics
- safe-to-spend today
- month-end forecast
- 6-month trend
- anomaly detection
- recurring payment / subscription detection
- installment / loan / subscription reminders
- savings goals
- regional and custom categories
- document upload / OCR / PDF extraction
- Gmail OAuth read-only scaffold
- bank CSV import
- Open Banking architecture placeholder per market
- JSON backup

Important for production:
- live FX needs a market-data provider
- real Open Banking requires regulated providers and a secure backend per market
- Gmail production parsing should move sensitive logic to a backend
- add more translations before launch
