# Use the Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]