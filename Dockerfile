FROM node:14.0.0
WORKDIR /app
COPY package.json ./
RUN npm install
COPY app.js ./
ENV DB_PASSWORD=Sup3rS3cret!2024
EXPOSE 3000
CMD ["node", "app.js"]
