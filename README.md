# appointment_setter_bot

AI appointment setter for a study-abroad / visa consultancy in Pakistan — landing page, booking chatbot and admin dashboard in a single file (`index.html`, React + Tailwind via CDN). No backend or build step.

## Run

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5173
```

## Features

- **Chat bot** — replies in English, Urdu or Roman Urdu; qualifies leads one question at a time; answers FAQs and objections; validates Pakistani phone numbers; offers free 30-min slots (PKT, next 7 days, Sundays/booked/past skipped); confirms with booking ID, document list, `.ics` download and WhatsApp link; reschedule/cancel by booking ID + phone.
- **Admin** (`Admin` button or `#admin`) — stats, filters, status changes, Hot/Warm/Cold lead scores with reasons, week calendar, CSV export, reset demo data.
- **Storage** — browser `localStorage`, pre-seeded with 8 sample bookings.
- **AI (optional)** — uses `window.claude.complete()` if available or `CONFIG.ai.endpoint`; otherwise the rule-based bot handles everything.

## Rebrand

Edit the `CONFIG` object at the top of `index.html`: name, city, phone, WhatsApp, hours, colours, countries, FAQs, budget ranges and scoring rules.

## Compliance

The bot never promises visa approval, admission or success rates; it says counsellors will review the profile and confirm exact requirements.
