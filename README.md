# Astro Portfolio: Personal Website

![showcase](https://github.com/user-attachments/assets/782dd9e5-7f90-4091-8fa4-2c078111a93c)

Features:

- ✅ SEO-friendly
- ✅ Sitemap
- ✅ RSS Feed
- ✅ Markdown & MDX
- ✅ TailwindCSS
- ✅ Fontsource

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── Dockerfile
├── README.md
├── astro.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

The layout of directories and content should match Astro's own recommendations with components being found in `src/components/` for example.

Project and post articles are contained within MDX documents located in `src/content/`. This has been done to allow for videos to be embedded when they are also kept in the corresponding content directory.

## 🚧 Building

Docker is used to deploy the site to a VPS. Container images are built using a [GitHub Action](.github/workflows/docker.yml) from the included [Dockerfile](Dockerfile).

## 🧞 Commands

All commands are run from the root of the project, from a terminal.

| Command                   | Action                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Install dependencies                                    |
| `npm run dev`             | Start local dev server at `localhost:4321`              |
| `npm run build`           | Build production site to `./dist/`                      |
| `npm run preview`         | Preview build locally, before deploying                 |
| `npm run format:check`    | Check files with Prettier                               |
| `npm run format:write`    | Run Prettier on all files, rewriting all files in place |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`        |
| `npm run astro -- --help` | Get help using the Astro CLI                            |

All available commands can be found by running `npm run` from a terminal.

## 📜 Licence

This project is under the [MIT LICENSE](LICENSE). However, this applies to the **ONLY** to the website itself and does not extend to the artwork included within.
