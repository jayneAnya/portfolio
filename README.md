# Jane Anyanwu – Portfolio

My personal site: [portfolio-flax-rho-55.vercel.app](https://portfolio-flax-rho-55.vercel.app)

Backend engineer (C# / .NET) in banking and fintech, with hands-on DevOps. The site tells my story, shows my flagship project (SovereignOps), my public DevOps projects and my work experience.

## Tech

- Next.js 16 (App Router) and TypeScript
- Tailwind CSS 4
- Self-hosted fonts (Bricolage Grotesque, IBM Plex Sans) via Fontsource, so the build needs no network calls for fonts
- Hosted on Vercel; built and checked by Jenkins

All page copy lives in `app/content.ts`. Edit that file to update text without touching the layout.

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run build
```

## CI/CD with Jenkins

The `Jenkinsfile` runs on every new commit (Poll SCM, every 5 minutes):

1. **Build**: `npm ci` and `npm run build` with Node.js 22 (configured as the `Node22` tool in Jenkins).
2. **Test**: `npm run lint`.
3. **Docker build and push**: builds the multi-stage `Dockerfile` (standalone Next.js output, runs as a non-root user) and pushes `portfolio:<build number>` to Docker Hub using the `dockerhub-portfolio` Jenkins credential.
4. **Archive**: packages `.next/standalone`, `.next/static` and `public` as a fingerprinted build artifact.
5. **Deploy**: placeholder stage; production hosting is on Vercel.

### Lesson learned

An early build failed because Jenkins used Node.js 18, which Next.js 16 does not support. Installing the NodeJS plugin and pinning the `Node22` tool in the pipeline fixed it.

Screenshots of the pipeline setup and runs are in [`screenshots/`](screenshots).

## Run the container

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```
