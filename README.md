## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

NextNews is a sports news app built with NextJS, Mongodb which fetches latest news articles using a popular API.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The App Supports subdomains (currently [http://cats.localhost:3000](http://cats.localhost:3000), [http://jp.localhost:3000](http://jp.localhost:3000) and the default one)

API routes are implemented for user Authentication which then store login credentials hashed using bcrypt on Mongodb Atlas.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.