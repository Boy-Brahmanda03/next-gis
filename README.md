This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

  /*
      <div className="grid grid-cols-4 mx-auto px-24 gap-5">
        {datas.map((data) => (
          <div key={data.id}>
            <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
              <Image src={bimc} height={200} alt="bimc" />
              <p className="mt-5 mb-3 text-xl font-semibold border border-black">{data.name}</p>
              <p>{data.alamat}</p>
              <p>{data.lat}</p>
              <p>{data.lng}</p>
            </div>
          </div>
        ))}
      </div>
      */

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
