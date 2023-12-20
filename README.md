# [https://model.roadpeoples.com/](https://model.roadpeoples.com/)

Attempts to identify a cat who we call Katja from an uploaded image using a
fastai deep learning model.

#### Gugger, S., & Howard, J. (2020). Deep
#### Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD.
#### O’Reilly Media.

There are four classification categories:

`(Maine Coon, cat, isKatja, random thing)`

Please refer to `src/public/python/isKatja.ipynb` for more information regaring
how the model was trained and what data it used to train with.

Specifically, this model is biased in classifying pictures that I have taken of
cats as images of Katja. The images for the other categories are scraped from
google image search, which tend to include head-on, professional portraits of
cats as opposed to the blurry photos of Katja sleeping curled up on a blanket.
Time has not been spent on finding the right opposing data set.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
