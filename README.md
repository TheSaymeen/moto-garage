# Moto Garage — Landing Page

Static landing page for Moto Garage Casablanca. No build step, no dependencies, no framework.

## Files

```
moto-garage/
├── index.html   ← the full page
├── style.css    ← brand tokens + all styles
├── script.js    ← nav scroll + fade-in (minimal)
└── README.md    ← this file
```

---

## Before going live — 3 things to update

Open `index.html` and search for these placeholders:

| Placeholder | Replace with |
|---|---|
| `https://cal.com` | Your actual Cal.com booking page URL |
| `https://wa.me/212600000000` | Your WhatsApp number (format: 212XXXXXXXXX) |
| `https://instagram.com/motogarage.ma` | Your actual Instagram handle |

---

## Deploy to Cloudflare Pages (free)

1. Push this folder to a GitHub repository
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Set **Build command** → leave blank
6. Set **Build output directory** → `/` (just a slash)
7. Click **Save and Deploy**

Your site is live at `https://your-repo-name.pages.dev`

Every `git push` to main auto-deploys in ~30 seconds.

---

## Add a domain later (optional)

1. Buy a domain (Cloudflare Registrar, or any registrar)
2. In Cloudflare Pages → your project → **Custom domains**
3. Add your domain → DNS configures automatically
4. SSL is automatic

---

## Brand tokens (in style.css)

```css
--noir:        #1A1714   /* primary background */
--orange:      #C85E2A   /* accent — use sparingly */
--orange-dark: #7A3A18   /* hover state */
--argent:      #A8A9A8   /* secondary text */
--beton:       #F2EFE9   /* light surfaces */
--noir-mid:    #3D3B38   /* cards */
```

---

## After first client session

Replace the placeholder testimonial card in `index.html` (search for `social-card--placeholder`) with real feedback. Remove the `social-card--placeholder` class and the dashed border will disappear.
