# Rehoboth S — Portfolio

React + Vite portfolio, ready to run locally and deploy to Vercel.

## Run locally

```
cd portfolio
npm install
npm run dev
```

Opens at http://localhost:5173

## Add your resume

Drop your resume PDF into `public/resume.pdf` (exact filename). The
"Download Resume" button on the Home section already links to `/resume.pdf`.

## Add your photo

Drop your photo into `public/photo.jpg` (exact filename). The circular
frame in the hero section already links to `/photo.jpg`. Using a PNG
instead? Change `src="/photo.jpg"` to `src="/photo.png"` in `src/App.jsx`.

## Edit content

Everything — name, skills, experience, projects, contact links — lives in
`src/App.jsx` as plain data at the top of the file (`skills`, `projects`,
`sections`), so you can update text without touching the layout. Styling is
in `src/App.css`.

## Deploy to Vercel

1. Push this folder to a GitHub repo:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.
4. You'll get a live URL like `https://rehoboth-portfolio.vercel.app`.

Add that link to your resume header as `Portfolio: <your-vercel-url>`.
