FROM node:14-alpine AS base

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

FROM base AS production

RUN yarn build

CMD [ "yarn", "start" ]

FROM base AS development

CMD [ "yarn", "dev" ]
