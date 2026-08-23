# Novaris — company platform

Standalone corporate site for **Novaris** (parent company). Interview Room is a separate product app.

## Commands

```bash
npm install
npm run dev    # http://localhost:3001
npm run build
npm start
```

## Environment

Copy `.env.example` → `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | This Novaris site (canonical URL) |
| `NEXT_PUBLIC_INTERVIEW_ROOM_URL` | Interview Room product app |

## Routes

| Path | Page |
|------|------|
| `/` | Company homepage |
| `/products` | Product portfolio (Interview Room featured) |
| `/about` | Company story |
| `/contact` | Contact / mailto |

## Deploy on Vercel (separate project)

1. Create a **new** Vercel project (suggested name: `kiaracaesar5627-novaris`)
2. Root directory: `submissions/kiaracaesar5627-novaris`
3. Set env vars:
   - `NEXT_PUBLIC_SITE_URL` → production Novaris URL (e.g. `https://novaris-kiaracaesar5627.vercel.app`)
   - `NEXT_PUBLIC_INTERVIEW_ROOM_URL` → `https://kiaracaesar5627-project-4.vercel.app`
4. Deploy: `npx vercel deploy --prod --yes`

Then set `NEXT_PUBLIC_NOVARIS_URL` on the **Interview Room** app to this Novaris URL.

## Related

- **Interview Room** (product): `../kiaracaesar5627-project-5`
