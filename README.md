# Shri Exchange UI

Frontend application for the Shri Exchange platform, built with Next.js 14, React 18, TypeScript, Tailwind CSS, Axios, React Query, Zustand, and SignalR.

## Prerequisites

- Node.js 20.x (recommended)
- npm 10.x (or compatible npm version)
- A running backend API (default expected at `http://localhost:5000`)

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables by creating a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```

   If this variable is not set, the app falls back to `http://localhost:5000`.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   - http://localhost:3000

## Build and run in production mode

```bash
npm run build
npm run start
```

By default, `npm run start` serves on port `3000`.

## Linting

Run lint checks with:

```bash
npm run lint
```

## Debugging

### Quick debugging with browser + terminal

- Start the dev server with `npm run dev`.
- Open browser dev tools (Console + Network tab) to inspect API calls and runtime errors.
- Watch terminal output for compile/runtime stack traces.

### VS Code debugging (recommended)

Create `.vscode/launch.json` with the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

Then:

1. Run `Next.js: debug server-side` to debug server rendering / API route behavior.
2. Run `Next.js: debug client-side` to debug React components in Chrome.

### Useful debug checks

- Verify `NEXT_PUBLIC_API_BASE_URL` is correct for your backend environment.
- If authentication fails, clear `localStorage` token and re-login.
- If live odds updates are not received, verify backend SignalR hub is reachable at:

  - `${NEXT_PUBLIC_API_BASE_URL}/hubs/odds`

## Project scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
