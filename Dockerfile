FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# Install production dependencies only
RUN npm install --production

COPY . .

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["node", "server.js"]