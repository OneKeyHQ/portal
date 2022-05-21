FROM node:16 AS next-deps
WORKDIR /app
RUN curl -LJO https://codeload.github.com/OneKeyHQ/portal-legacy/zip/refs/heads/master
RUN unzip portal-legacy-master.zip -d .
WORKDIR /app/portal-legacy-master
RUN yarn install --frozen-lockfile

FROM node:16 AS next-builder
WORKDIR /app
COPY --from=next-deps /app/portal-legacy-master/node_modules ./node_modules
COPY --from=next-deps /app/portal-legacy-master .
ENV NODE_ENV production
RUN yarn export

FROM node:16 AS gatsby-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16 AS gatsby-builder
WORKDIR /app
COPY --from=gatsby-deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV production
RUN yarn build

FROM nginx:1.21.6
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=next-builder /app/out .
COPY --from=gatsby-builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
