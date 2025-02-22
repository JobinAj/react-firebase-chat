FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port that Vite runs on
EXPOSE 5173

# Command to start the application with host exposure
CMD ["npm", "run", "dev", "--", "--host"]
