# appointment_setter_bot

AI appointment setter for a study-abroad / visa consultancy in Pakistan. It has three parts that share one booking store, with no backend or build step:

| Part | Where | What it does |
| --- | --- | --- |
| **WhatsApp setter** | `index.html#setter` | Messages every new lead on WhatsApp within seconds, qualifies them, books the free call, follows up when they go quiet, sends reminders, re-books no-shows and re-engages old lead lists |
| **Booking assistant** | `index.html` · `embed.js` | The same AI as a booking link (Instagram/Facebook bio, ads) and a chat button for the client's existing website |
| **Admin dashboard** | `index.html#admin` | Every booking with Hot/Warm/Cold lead scores, calendar, CSV export, install code |

## WhatsApp setter (demo)

Open `/#setter` and click **▶ Run demo**. Eight simulated students arrive from a Facebook lead ad, Instagram, a missed call and a website form. The AI replies to each in about 3 seconds in English, Roman Urdu or Urdu, and handles:

- **Qualifying:** country, education, grades, English test, intake and budget, plus FAQs mid-conversation
- **Booking:** free 15-min call slots offered as WhatsApp buttons, with bookings landing in the admin dashboard
- **Follow-ups:** after 1 hour, 1 day and 3 days of silence, then the lead is marked cold
- **"Later":** a check-in the next day
- **Reminders:** 24 h before (confirm or change) and 2 h before
- **No-shows:** the AI offers new times
- **"Call me":** hands the lead to a counsellor and pauses the AI, which the counsellor can resume
- **Re-engage old leads:** paste or upload a CSV (`Name, Phone, Country`)
- **Pipeline:** New → Qualifying → Qualified → Booked → Showed / No-show / Needs counsellor / Cold, with a copyable counsellor summary for each lead

Use **+1 hour**, **+1 day** or **⏭ Next event** to fast-forward the demo clock and watch follow-ups and reminders go out. Untick **Students auto-reply** to type as the student yourself.

### Going live
The demo simulates the WhatsApp side. A live deployment needs:
- the consultancy's number on the **WhatsApp Business API** (Meta), with templates approved for follow-ups, reminders and re-engagement
- a small backend (n8n or Node) for the webhook, scheduler and a shared database
- Facebook Lead Ads, a missed-call service and website-form webhooks
- an AI API key kept on the server

## Install the booking assistant on an existing website

Host these files (e.g. GitHub Pages), then paste one line before `</body>` on the client's site:

```html
<script src="https://YOUR-HOST/embed.js" defer></script>
```

The admin dashboard's **Add to website** tab shows the exact line and the booking link for wherever the files are hosted. `embed-demo.html` shows the widget on a sample site.

## Run locally

```bash
python -m http.server 5173
```

Then open these addresses:
- `http://localhost:5173/#setter`: WhatsApp setter
- `/`: booking link
- `/embed-demo.html`: widget on a site
- `/#admin`: dashboard

## Storage
Data is kept in browser `localStorage`, pre-seeded with 8 sample bookings. Everything stays in the browser it was made in. For live use, connect a shared database.

## Rebrand
Edit the `CONFIG` object at the top of `index.html`: name, city, phone, WhatsApp, hours, colours, countries, FAQs, budget ranges and scoring rules. The setter's message wording is in the `w_*` entries of `STR`.

## Compliance
The AI never promises visa approval, admission or success rates; it says counsellors will review the profile and confirm exact requirements. The setter stops messaging anyone who says they're not interested.
