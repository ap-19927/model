FROM node:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install -y python3-full && \
    apt-get install -y python3-pip && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g typescript

RUN python3 -m venv .venv && . .venv/bin/activate && python3 -m pip install fastbook

COPY ./package.json ./tsconfig.json ./yarn.lock ./nuxt.config.ts .

RUN yarn install

COPY ./src ./src

RUN yarn build

CMD python3 -m venv .venv && . .venv/bin/activate && node .output/server/index.mjs
