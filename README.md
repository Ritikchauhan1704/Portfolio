# Ritik Chauhan — Portfolio

A modern, animated developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

It features sections for hero, experience, projects, skills, and contact, with a smooth scroll progress indicator and responsive layout.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**:
  - React 19
  - Tailwind CSS v4
  - shadcn-inspired UI components (`@/components/ui`)
  - Framer Motion (animations)
  - Embla Carousel (projects slider)
- **Icons**:
  - `lucide-react`
  - Custom SVG icons (`src/components/icons.tsx`)
- **APIs**:
  - GitHub REST API via `@octokit/rest` (optional, for dynamic projects)

---

## Getting Started

### Prerequisites

- Node.js **>= 18** (recommended)
- pnpm / npm / yarn (examples use `npm`)

### Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### Local development

```bash
npm run dev
```

Then open:

- http://localhost:3000

Hot reloading is enabled, so changes in `src/` will reflect immediately.

### Production build

```bash
npm run build
npm start
```

---

## Project Structure

Key files and folders:

```text
.
├─ public/
│  └─ dp.png                 # Hero profile image
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # Root layout, fonts, metadata
│  │  ├─ page.tsx            # Home page (sections composed here)
│  │  └─ globals.css         # Tailwind + theme tokens + global styles
│  ├─ components/
│  │  ├─ Hero.tsx            # Hero section (intro, CTAs, avatar)
│  │  ├─ Experience.tsx      # Work experience timeline
│  │  ├─ ProjectCarousel.tsx # Featured projects carousel
│  │  ├─ Skills.tsx          # Skills & tech stack
│  │  ├─ Contact.tsx         # Contact + resume CTA
│  │  ├─ icons.tsx           # Custom Github & Linkedin SVG icons
│  │  └─ ui/                 # Reusable UI primitives (Card, Button, Badge, ...)
│  └─ lib/
│     └─ github.ts           # GitHub API helper (getPinnedRepos)
├─ package.json              # Scripts & dependencies
├─ next.config.ts
├─ tsconfig.json
└─ eslint.config.mjs
```

---

## Projects Section (Static vs GitHub)

The **Projects** carousel (`src/components/ProjectCarousel.tsx`) currently uses a curated `staticProjects` array that highlights specific repos and descriptions.

There is also an optional integration with the GitHub API:

- `src/lib/github.ts` exports `getPinnedRepos(username: string)`.
- It:
  - Fetches repositories for a given user.
  - Filters out forks.
  - Sorts by `stargazers_count`.
  - Returns the **top 6** with topics, language, stars, and forks.

In `ProjectCarousel.tsx` you’ll see a **commented-out** `useEffect` that previously fetched repos:

```ts
// this doesnt look good right now, using static projects for now
// useEffect(() => {
//   const fetchProjects = async () => {
//     try {
//       const githubUsername = "Ritikchauhan1704";
//       const repos = await getPinnedRepos(githubUsername);
//       if (repos && repos.length > 0) {
//         setProjects(repos);
//       }
//     } catch (error) {
//       console.error("Using fallback projects:", error);
//       setProjects(staticProjects);
//     }
//   };
//
//   fetchProjects();
// }, []);
```

You can re-enable this logic if you want the portfolio to show **live GitHub data** instead of static projects.

---

## GitHub API Configuration (Optional)

If you want to use the dynamic GitHub projects:

1. Create a **personal access token** on GitHub with minimal scopes for public repo access.
2. Add it to your environment (e.g. `.env.local`):

   ```bash
   GITHUB_TOKEN=ghp_your_token_here
   ```

3. Ensure Next.js loads the env file (Next does this automatically for `.env.local`).
4. Re-enable the `useEffect` in `ProjectCarousel.tsx` and wire `useState`/`getPinnedRepos` as needed.

The token is used in `src/lib/github.ts`:

```ts
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
```

**Never commit** your actual token to Git.

---

## Custom Icons

Custom SVG icons live in `src/components/icons.tsx`:

- `GithubIcon`
- `LinkedinIcon`

They are used in:

- `Hero.tsx` (for social links)
- `ProjectCarousel.tsx` (GitHub “Source” button)

You can add more icons here and import them where needed.

---

## Scripts

From `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm start` — run built app
- `npm run lint` — run ESLint

---

## Deployment

You can deploy this app to any platform that supports Next.js, such as:

- **Vercel**
- **Netlify**
- **Render**, etc.

Typical steps for Vercel:

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Set environment variables (e.g. `GITHUB_TOKEN` if using GitHub API).
4. Deploy.

---

## Customization

Where to update content:

- **Hero** text, title, and CTAs: `src/components/Hero.tsx`
- **Experience timeline**: `experience` array in `src/components/Experience.tsx`
- **Projects**: `staticProjects` array in `src/components/ProjectCarousel.tsx`
- **Skills** section: `src/components/Skills.tsx`
- **Contact email / resume link**: `src/components/Contact.tsx`
- **SEO metadata**: `metadata` in `src/app/layout.tsx`

---

## License

Add a license here (e.g. MIT) if you plan to open source the portfolio template.
