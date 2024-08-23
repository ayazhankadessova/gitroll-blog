### About

This `NextJS` project is an attempt to clone [`GitRoll-blog`](https://gitroll.io/blog), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using `TailwindCSS`, `MDX`, `Contentlayer`, and `shadcn/ui` + `lucide-react` components.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code notes

1. burger btn not working
2. clean up code
3. headers const in smth else
4. start making posts
5. make 1 blog page
6. blog > [...slug] => we can read anything after /blog/...
7. add custom comps

fix:

1. [x] theme, search in navbar
2. [x] search
3. [x] Sort By
4. [x] theme
5. [x] button theme too big
6. [x] picture in post-item should be at the end
7. [x] add icons

bugs:

- [x] sometimes can't see mobilnav or texts
- [x] 404 page is white
- [x] line numbers not working in rehype
- [x] pagination height
- [ ] tags not grouped
- [x] light/dark mode
- [x] pagination logic
- [x] small screen, blog photo goes to up
- [ ] cache
- [ ] add new pics
- [ ] add more posts
