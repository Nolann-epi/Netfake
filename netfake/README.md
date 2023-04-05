This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## NextJS / Typescript / Tailwind

* run npm-next-app --typescript
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
* delete _document.tsx
* index.tsx =>
```
export default function Home() {
  return (
    <>
    <h1>Netfake</h1>
     </>
  )
}
```
* delete styles/Home.css
* tailwind.config.js => 
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
* globals.css => 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Prisma / MongoDB

npm install -D prisma
npx prisma init (add your db provider here MongoDB)
npm install @prisma/client

lib/prismadb.tsx =>
```
import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client
```

global.d.tsx => 
```
import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
```

Write your schema in prisma/schema.prisma

Then 

npx prisma db push

```
Error: MongoDB error
Server selection timeout: No available servers. Topology: { Type: ReplicaSetNoPrimary, Servers: [ { Address: ac-uocf4yo-shard-00-00.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, { Address: ac-uocf4yo-shard-00-01.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, { Address: ac-uocf4yo-shard-00-02.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, ] }
   0: migration_core::commands::schema_push::Calculate `from`
             at migration-engine/core/src/commands/schema_push.rs:46
   1: migration_core::state::SchemaPush
             at migration-engine/core/src/state.rs:433

```
(hi, to fix this, go into MognoDB Atlas => Network Access => Add IP address => 0.0.0.0/0 )

## Authentication

npm install bcrypt @types/bcrypt (credential authentication)
npm install next-auth
npm install @next-auth/prisma-adapter (Google/Github authentication)

Github -> Settings -> Developer Settings -> OauthApp
https://console.cloud.google.com/welcome?project=netfake-382807 -> Create A Project
Consent Oauth
Credentials -> Oauth ClientID -> URI = http://localhost:3000/api/auth/callback/google



## API

npm install axios


npm install swr