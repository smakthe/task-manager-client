# Step 1: Build the React application
FROM node:16 AS build

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . ./

# Install the node modules
RUN npm install

# Expose the port that the app runs on
EXPOSE 3000

# Start Nginx server
CMD ["npm", "start"]
