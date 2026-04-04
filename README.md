# ShriExchange UI

Frontend for **ShriExchange**, a sports prediction platform using points (no real money), built with Next.js App Router and TypeScript.

## Tech stack

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Axios
- TanStack React Query
- Zustand
- SignalR client

## Prerequisites

- Node.js 18+ (recommended: Node.js 20 LTS)
- npm 9+
- Running ASP.NET Core backend for ShriExchange

## 1) Run locally

1. Clone repository and open it:

   ```bash
   git clone <your-repo-url>
   cd ShriExchangeUI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variable (create `.env.local` in project root):

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```

   Update the URL if your backend runs on a different host/port.

4. Start development server:

   ```bash
   npm run dev
   ```

5. Open app:

   - `http://localhost:3000`

## 2) Production build locally

```bash
npm run build
npm run start
```

## 3) Useful scripts

- `npm run dev` — run Next.js in development mode
- `npm run build` — build optimized production bundle
- `npm run start` — serve production build
- `npm run lint` — run lint checks

## 4) Debugging guide

### A) API requests failing

- Verify backend is running and reachable.
- Confirm `NEXT_PUBLIC_API_BASE_URL` points to the correct backend URL.
- Open browser DevTools → Network tab and inspect request URL/status/body.
- Ensure JWT token exists in `localStorage` under key `token` after login/register.

### B) Auth/session issues

- If login succeeds but protected calls fail, clear stale token:

  ```js
  localStorage.removeItem('token')
  ```

- Login again and verify `Authorization: Bearer <token>` is attached in outgoing requests.

### C) Real-time odds not updating

- Confirm backend SignalR endpoint is available at:
  - `${NEXT_PUBLIC_API_BASE_URL}/hubs/odds`
- Check browser console for SignalR connection errors.
- Ensure event name emitted by backend is exactly `oddsUpdated`.

### D) UI doesn’t reflect latest server data

- React Query caches data; trigger a manual refresh (page reload).
- Confirm mutation succeeds (HTTP 2xx), then query invalidation runs.

### E) Build/lint issues

- Run:

  ```bash
  npm run lint
  npm run build
  ```

- If type errors occur, check service response shapes against backend contracts.

## 5) Project structure (high-level)

```text
src/
 ├── app/
 ├── components/
 ├── services/
 ├── hooks/
 ├── store/
 └── lib/
```

## 6) Notes

- This project is frontend-only.
- All betting is points-based (no real-money handling).
