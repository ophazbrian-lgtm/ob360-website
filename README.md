# OB360 Website

Static site for OB360 — no backend, no build step, $0 hosting. Content (portfolio + services) is editable through a free admin dashboard (Decap CMS) without touching code.

## What's included

- Pages: Home, Services, Work (portfolio with category filters), About, Contact
- Brand: your logo, black/white/yellow (`#FCC90C`), honeycomb motif throughout
- Portfolio pre-loaded with 9 real projects pulled from your Behance
- Contact form wired to Netlify Forms (free, no backend code needed)
- `/admin` — content dashboard to edit portfolio + services yourself

## 1. Get it live on Netlify (free)

1. Go to [netlify.com](https://netlify.com) → sign up free.
2. Easiest path: create a free GitHub account if you don't have one, push this folder to a new GitHub repo, then on Netlify click **Add new site → Import from Git** and pick that repo. Netlify auto-deploys it (no build command needed — leave the build command blank, publish directory `.`).
   - Don't want to use GitHub? You can also just drag the whole project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant deploy — but then the CMS editing in step 2 won't work (it needs a Git repo to save changes to). GitHub + Netlify is the right setup if you want to self-edit later.
3. You'll get a free URL like `https://ob360.netlify.app`. You can rename the subdomain for free in **Site settings → Domain management**.

## 2. Turn on the content editor (Decap CMS)

This is what lets you log in and edit your portfolio/services without code.

1. In your Netlify site dashboard: **Site settings → Identity → Enable Identity**.
2. Under Identity settings, set **Registration** to "Invite only" (so randoms can't sign up).
3. Scroll to **Services → Git Gateway → Enable Git Gateway**.
4. Go to the **Identity** tab (top nav of your site dashboard) → **Invite users** → invite your own email.
5. Check your email, accept the invite, set a password.
6. Open `https://your-site.netlify.app/admin/` and log in.

Open `admin/config.yml` and update the `site_url` and `display_url` lines to your real Netlify URL before deploying — small detail but keeps the CMS preview links correct.

Once logged in, you can:
- Add/edit/remove portfolio projects (with image upload)
- Edit service titles, descriptions, and bullet points

Changes save as a commit to your GitHub repo and Netlify auto-redeploys — live in about a minute.

## 3. Get your contact form submissions

Once deployed, go to **Site settings → Forms** in Netlify — every submission from the Contact page shows up there automatically. You can also turn on email notifications for new submissions for free under **Forms → Form notifications**.

## 4. A domain, when you're ready

The free `.netlify.app` URL works fine to start. When you land your first client, buy a real domain (e.g. `ob360.studio` or `ob360.design`, roughly $10–15/year from Namecheap or Google Domains) and connect it in **Site settings → Domain management → Add a domain**. Netlify handles SSL for free automatically.

## Editing things the CMS doesn't cover

The CMS handles portfolio + services. For anything else — hero headline, about page text, contact info — just edit the HTML files directly (you already know HTML/CSS from WP work), or ask me to make the change and I'll hand you updated files.

## A few things to swap before sending this to real prospects

1. **Email address** — `contact.html` currently shows `hello@ob360.studio` as a placeholder. Update it to your real email/WhatsApp.
2. **Portfolio images** — currently hotlinked from Behance's CDN for speed. Once live, it's safer to download those images and re-upload them through the CMS (Behance could change/remove a URL down the line and break an image).
3. **Stats section** — "15+ years combined experience" etc. are from your business plan; double check these numbers are exactly how you want them framed publicly.

## Project structure

```
ob360/
├── index.html, services.html, work.html, about.html, contact.html
├── admin/
│   ├── index.html       # CMS login page
│   └── config.yml       # CMS field configuration
├── content/
│   ├── portfolio.json   # editable via CMS
│   └── services.json    # editable via CMS
├── css/styles.css
├── js/ (main.js, content.js)
├── partials/ (header.html, footer.html)
├── images/ob360-logo.png
└── netlify.toml
```
