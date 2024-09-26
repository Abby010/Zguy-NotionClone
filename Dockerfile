# Step 1: Specify a base image
FROM node:18-alpine

# Step 2: Install Python and build dependencies for node-gyp
RUN apk add --no-cache python3 make g++ 

# Step 3: Set the working directory inside the container
WORKDIR /app

# Step 4: Copy package.json and package-lock.json
COPY package*.json ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Copy the rest of your application code to the container
COPY . .

# Step 7: Build the project
RUN npm run build

# Step 8: Expose the port Vite runs on (default 5173)
EXPOSE 5173

# Step 9: Define the command to run your app
CMD ["npm", "run", "dev"]
