# Hackathon Hub And Happen

build a website for our hackathon event take the information from posture create clean creative website ,  clean

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/77d6d7c6-7ba3-4a51-aa6b-5d82eb24fd08).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

```sh
git clone https://github.com/Akash4075/inventron-hackathon.git
cd inventron-hackathon
npm install
npm run dev
```

## Cloudflare Deployment

This project uses **TanStack Start** with **Nitro** configured with the Cloudflare module preset (`nitro (build-only using cloudflare as a default target)`).

### Option 1: Automatic Deploy via Cloudflare Dashboard (Recommended)

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** (or **Workers** with Git).
3. Connect your GitHub account and select the repository: `Akash4075/inventron-hackathon`.
4. Configure Build Settings:
   - **Framework preset:** `None` / `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `.output/public`
   - **Node.js Compatibility Flag:** In project settings, add the environment variable `NODE_VERSION=20` (or set compatibility flag `nodejs_compat`).
5. Click **Save and Deploy**. Every subsequent push to `main` will automatically build and deploy.

### Option 2: Deploy using Wrangler CLI

1. Authenticate with Cloudflare:
   ```sh
   npx wrangler login
   ```
2. Build and deploy:
   ```sh
   npm run deploy
   ```
   This automatically runs `npm run build` followed by `wrangler deploy` using the included [`wrangler.json`](./wrangler.json).
