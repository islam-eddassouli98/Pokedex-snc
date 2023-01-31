
#Version base image
FROM node:18.10-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./

# RUN npm install
RUN yarn install

# Bundle app source
COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js

# COPY components ./components
COPY pages ./pages

COPY public ./public

COPY styles ./styles

#Run app
CMD [ "yarn", "dev" ]

