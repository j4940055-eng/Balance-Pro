# Balance Pro, Documents + Gmail

New features:
- Upload image, PDF, CSV, TXT or JSON
- OCR for image receipts through Tesseract.js
- PDF text extraction through PDF.js
- heuristic amount/date/category extraction
- user confirmation before adding any transaction
- document history
- Gmail OAuth read-only connection
- scan recent invoice/receipt emails
- proposed transaction extraction from email content

## Gmail setup
To use Gmail, create a Google Cloud OAuth 2.0 Web Client ID and add your GitHub Pages URL as an authorized JavaScript origin.
Then paste the Client ID in Balance Pro -> More -> Email connection.

No Gmail password is stored in the app.
