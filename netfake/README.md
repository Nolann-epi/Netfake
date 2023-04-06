Netfake

Netfake is a Netflix clone made with Next.JS. Once you are connected, you can watch trailers or add trailers to your watchlist and watch them later.
Functionalities

Netfake offers the following functionalities:

    Authentication with credential, Google or Github account
    Watch trailers
    Add trailers to your watchlist and watch them later
    Access trailers via genre



## Steps

To set up a NextJS repository, follow the steps below:

  * Run npm-next-app --typescript
  * Run npm install -D tailwindcss postcss autoprefixer
  * Run npx tailwindcss init -p
  * Delete _document.tsx
  * Modify index.tsx to:
  
```
export default function Home() {
  return (
    <>
    <h1>Netfake</h1>
     </>
  )
}
```
  * Delete styles/Home.css
  * Modify tailwind.config.js to:
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
  * Modify globals.css to : 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Database

npm install -D prisma
npx prisma init
Modify schema.prisma to mongoDB
npm install @prisma/client

## Prisma / MongoDB

  * Run npm install -D prisma
  * Run npx prisma init and select MongoDB as the database provider
  * Modify schema.prisma to mongoDB
  * Modify lib/prismadb.tsx to:
```
import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client
```

  * Modify global.d.tsx => 
```
import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
```

  * Write your schema in prisma/schema.prisma
  * Run npx prisma db push
  * Install the dependencies for authentication: npm install bcrypt @types/bcrypt next-auth @next-auth/prisma-adapter
  * Create an OAuth App for Github under Github Settings
  * Create a Google Cloud Project and enable Oauth
  * Modify the OAuth ClientID URI for both Github and Google to http://localhost:3000/api/auth/callback/{service}
  * Install the following dependencies for the API: npm install axios swr zustand lodash


## Error found :
```
Error: MongoDB error
Server selection timeout: No available servers. Topology: { Type: ReplicaSetNoPrimary, Servers: [ { Address: ac-uocf4yo-shard-00-00.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, { Address: ac-uocf4yo-shard-00-01.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, { Address: ac-uocf4yo-shard-00-02.eefdlfl.mongodb.net:27017, Type: Unknown, Error: unexpected end of file }, ] }
   0: migration_core::commands::schema_push::Calculate `from`
             at migration-engine/core/src/commands/schema_push.rs:46
   1: migration_core::state::SchemaPush
             at migration-engine/core/src/state.rs:433

```
* To fix this, go into MognoDB Atlas => Network Access => Add IP address

