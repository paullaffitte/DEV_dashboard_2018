FROM node:8.12.0 as builder

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN yarn

COPY . /app
RUN yarn run build

# ---------------------------
FROM nginx:1.15-alpine
RUN rm -rf /etc/nginx/conf.d/*
COPY ./docker/conf.d/* /etc/nginx/conf.d/
COPY ./docker/tls/** /etc/nginx/tls/
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
