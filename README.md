# appointment_setter_bot

AI appointment setter for a study-abroad / visa consultancy in Pakistan. It is **not a website**. It's a booking assistant you add to the client's **existing** website, plus a shareable booking link and an admin dashboard. No backend or build step.

| File | What it is |
| --- | --- |
| `embed.js` | One-line install for the client's existing site — adds a gold chat button bottom-right |
| `index.html` | The assistant as a full-page booking link (for Instagram/Facebook bio, WhatsApp, ads) + admin dashboard (`#admin`) |
| `embed-demo.html` | Sample "existing website" showing the widget installed |

## Install on an existing website

Host these files (e.g. GitHub Pages), then paste one line before `</body>` on the client's site:

```html
<script src="https://YOUR-HOST/embed.js" defer></script>
```

The admin dashboard's **Add to website** tab shows the exact line and the booking link for wherever the files are hosted.

## Run locally

```bash
python -m http.server 5173
```

Then open `http://localhost:5173/` (booking link), `/embed-demo.html` (widget on a site) or `/#admin` (dashboard).

## Features

- **Chat bot**: replies in English, Urdu or Roman Urdu; qualifies leads one question at a time; answers FAQs and objections; validates Pakistani phone numbers; offers free 30-min slots (PKT, next 7 days, skipping Sundays, booked and past slots); confirms with booking ID, document list, `.ics` download and WhatsApp link; reschedule/cancel by booking ID + phone.
- **Admin** (`#admin`): stats, filters, status changes, Hot/Warm/Cold lead scores with reasons, week calendar, CSV export, install code, reset demo data.
- **Storage**: browser `localStorage`, pre-seeded with 8 sample bookings. The widget and dashboard share it when served from the same host, but bookings stay in each visitor's browser. For live use, connect a shared database.
- **AI (optional)**: uses `window.claude.complete()` if available or `CONFIG.ai.endpoint`; otherwise the rule-based bot handles everything.

## Rebrand

Edit the `CONFIG` object at the top of `index.html`: name, city, phone, WhatsApp, hours, colours, countries, FAQs, budget ranges and scoring rules.

## Compliance

The bot never promises visa approval, admission or success rates; it says counsellors will review the profile and confirm exact requirements.
