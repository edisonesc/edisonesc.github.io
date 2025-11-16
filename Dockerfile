# Use Node.js LTS
FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy full project and build Angular
COPY . .
RUN npm run build

# Install Express to serve Angular
RUN npm install express

# Create a minimal server.js to serve dist/
RUN echo "const express = require('express'); \
const path = require('path'); \
const app = express(); \
app.use(express.static(path.join(__dirname, 'dist'))); \
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html'))); \
app.listen(80, () => console.log('Angular app running on port 80'));" > server.js

EXPOSE 80
CMD ["node", "server.js"]
