# Armin Rafiqin — Portfolio Site

Two parts:

- **`/portfolio`** — your static resume site (HTML/CSS/JS). Deploy as a Render **Static Site**.
- **`/backend`** — a tiny Node/Express API with one job: send you an email when someone submits the contact form. Deploy as a Render **Web Service**.

They're separate because Render's free Static Site plan can't run server code (PHP, Node, etc). Splitting them keeps your resume fast and free while still giving you a real working contact form.

---

## 1. Add your real content

- Replace `portfolio/images/profile.jpg` with your actual photo (same filename, or update the `src` in `index.html`).
- Put your actual CV PDF at `portfolio/Armin_Rafiqin_CV.pdf` (matches the "Download CV" button), or change the `href`.
- Double check the phone number / email / LinkedIn in `index.html` — I read these off your screenshot, so confirm they're correct.

## 2. Get a Gmail "App Password" (for the backend to send email)

Gmail blocks your normal password for this. Instead:
1. Turn on 2-Step Verification on your Google account (Google Account → Security).
2. Go to https://myaccount.google.com/apppasswords
3. Generate an app password for "Mail" — you'll get a 16-character code.
4. Use that code as `EMAIL_PASS` (not your real Gmail password).

## 3. Test locally (optional but recommended)

```bash
cd backend
npm install
cp .env.example .env
# edit .env with your real Gmail address + app password
npm start
```

In another terminal, just open `portfolio/index.html` in your browser (or run a simple static server like `npx serve portfolio`). Try submitting the contact form — you should get an email.

## 4. Push to GitHub

Put `portfolio/` and `backend/` in one repo (two folders), or two separate repos — either works with Render. Push to GitHub first; Render deploys from a repo.

## 5. Deploy the backend on Render

1. Render dashboard → **New +** → **Web Service**.
2. Connect your repo, set **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Under **Environment**, add:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your 16-character app password
   - `FRONTEND_URL` = the URL your static site will have (you can update this after step 6)
6. Deploy. Render gives you a URL like `https://your-backend.onrender.com`.

Note: Render's free web services "spin down" after 15 minutes of no traffic and take ~30–60 seconds to wake back up on the next request — the first form submission after idle time may feel slow. That's normal on the free tier.

## 6. Deploy the frontend on Render

1. Render dashboard → **New +** → **Static Site**.
2. Connect your repo, set **Root Directory** to `portfolio`.
3. Build Command: leave blank (no build step needed).
4. Publish Directory: `.`
5. Deploy. Render gives you a URL like `https://your-portfolio.onrender.com`.

## 7. Connect the two

- In `portfolio/js/script.js`, set `CONTACT_API_URL` to your real backend URL from step 5, e.g.:
  ```js
  const CONTACT_API_URL = "https://your-backend.onrender.com/api/contact";
  ```
- Go back to your backend's Render environment settings and set `FRONTEND_URL` to your real static site URL from step 6 (this keeps CORS locked down to just your site).
- Push the change / redeploy the frontend.

That's it — your resume site is live and free, and the contact form actually emails you.
