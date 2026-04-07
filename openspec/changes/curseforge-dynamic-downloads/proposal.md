## Why

The LucidNav WoW addon download count shown on the portfolio is hardcoded at 280, while CurseForge already shows 358+ and continues to grow. Keeping it accurate requires manual code changes — dynamic fetching eliminates that toil and keeps the portfolio honest.

## Important: Two CurseForge APIs

There are **two different CurseForge APIs** — do not confuse them:

1. **Upload API** (for mod authors): https://support.curseforge.com/support/solutions/articles/9000197321-curseforge-upload-api
   - Used to upload and manage mods programmatically
   - For developers publishing content to CurseForge

2. **Core API** (for third-party tools): https://console.curseforge.com/#/api-keys
   - Used to fetch metadata, download counts, and mod information
   - For external tools, mod managers, and analytics
   - **This is what we use** to fetch live download counts
   - Requires application approval from CurseForge/Overwolf before the API key works (initially returns 403 Forbidden until approved)
   - **Important**: Requires `User-Agent` header in requests (returns 403 Forbidden without it)
   - **API Key Format**: CurseForge provides bcrypt-format keys (e.g., `$2a$10$...`) that contain `$` characters which must be escaped in `.env` files

## Environment Variable Setup

### Critical: Escaping the API Key

CurseForge API keys are bcrypt hashes containing `$` characters (e.g., `$2a$10$5FCOf...`). Next.js's dotenv parser interprets `$` as variable expansion, so the key **must be escaped** in `.env` files:

**❌ Wrong (key will be truncated):**
```bash
CURSEFORGE_API_KEY=$2a$10$EXAMPLE1234567890abcdefghijklmnopqrstuvwxyz.ABCDEFGH.
CURSEFORGE_API_KEY="$2a$10$EXAMPLE1234567890abcdefghijklmnopqrstuvwxyz.ABCDEFGH."
CURSEFORGE_API_KEY='$2a$10$EXAMPLE1234567890abcdefghijklmnopqrstuvwxyz.ABCDEFGH.'
```

**✅ Correct (escape each `$` with backslash):**
```bash
CURSEFORGE_API_KEY=\$2a\$10\$EXAMPLE1234567890abcdefghijklmnopqrstuvwxyz.ABCDEFGH.
```

**Alternative for production:** Set the environment variable directly in Vercel's dashboard (no escaping needed there).

## What Changes

- Add a new server-side CurseForge API client (`lib/curseforge.ts`) that fetches live download counts
- Update the GameDev projects page (`/app/[locale]/projects/gamedev/page.tsx`) to fetch and inject the live count at render time with ISR
- Update the home page (`/app/[locale]/page.tsx`) to pass enriched project data down to `SinglePageLayout`
- Update `SinglePageLayout` to accept an optional `enrichedGameDevProjects` prop and use it when provided
- Document the required `CURSEFORGE_API_KEY` environment variable in `.env.example`

## Capabilities

### New Capabilities

- `curseforge-api-client`: Typed API client that fetches mod download counts from the CurseForge Core API with graceful fallback on failure
- `dynamic-download-count`: Server-side ISR-backed injection of the live CurseForge download count into portfolio project cards on both the home page and the GameDev projects page

### Modified Capabilities

<!-- No existing specs are changing requirements -->

## Impact

- **New file**: `lib/curseforge.ts`
- **Modified pages**: `app/[locale]/page.tsx`, `app/[locale]/projects/gamedev/page.tsx`
- **Modified component**: `components/SinglePageLayout.tsx`
- **Modified config**: `.env.example`
- **New env var**: `CURSEFORGE_API_KEY` (server-side only, never exposed to the client)
- **Deployment**: Must be set in Vercel environment variables; gracefully falls back to static value if absent or invalid
- **API Approval**: The Core API key requires application approval from CurseForge/Overwolf before requests will succeed (returns 403 Forbidden until approved)
