# Overview

Art vault clone, allows users to upload pictures to a publicly curated art gallery.

## Preview of the App

Visit the Vercel hosted app here: https://art-vault-clone.vercel.app/

## Technologies Used

1. TypeScript
2. ReactJS
3. NextJS
4. TailWindCSS
5. Vercel PostgreSQL
6. Vercel Blob
7. PrismaDB

## Running the App

1. Download or fork starting files to your local machine
2. Run ```npm install``` (assuming you have already installed ```npm``` locally)
3. Run ```npm run dev``` to launch app locally on ```http://localhost:3000/```

## File Structure

```
└─ .
   ├─ .env
   ├─ .eslintrc.json
   ├─ LICENSE
   ├─ next-env.d.ts
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.mjs
   ├─ prisma
   │  ├─ migrations
   │  │  ├─ 20240423174459_dev
   │  │  │  └─ migration.sql
   │  │  └─ migration_lock.toml
   │  └─ schema.prisma
   ├─ public
   │  └─ hero-section.png
   ├─ README.md
   ├─ src
   │  ├─ app
   │  │  ├─ admin-data
   │  │  │  └─ page.tsx
   │  │  ├─ api
   │  │  │  ├─ add-user
   │  │  │  │  └─ route.ts
   │  │  │  ├─ get-all-pictures
   │  │  │  │  └─ route.ts
   │  │  │  ├─ get-all-users
   │  │  │  │  └─ route.ts
   │  │  │  └─ image-upload
   │  │  │     └─ route.ts
   │  │  ├─ globals.css
   │  │  ├─ image-upload
   │  │  │  └─ page.tsx
   │  │  ├─ layout.tsx
   │  │  ├─ not-found.tsx
   │  │  ├─ page.tsx
   │  │  ├─ public-gallery
   │  │  │  └─ page.tsx
   │  │  └─ sign-in-or-up
   │  │     └─ page.tsx
   │  ├─ components
   │  │  ├─ Container.tsx
   │  │  └─ Navbar.tsx
   │  └─ scripts
   │     └─ hashing.ts
   ├─ tailwind.config.ts
   └─ tsconfig.json
```

## Contributors

- Joshua Dierickse <jpcdieri@uwaterloo.ca>

## License & Copyright

© Joshua Dierickse, University of Waterloo
