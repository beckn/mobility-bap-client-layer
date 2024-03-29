FROM node:19.9.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .


# Install dependencies
RUN npm install

ENV PORT=$PORT
# Expose the port the app runs on
EXPOSE $PORT

# Use pm2-runtime to start the application
CMD ["npm", "start"]
