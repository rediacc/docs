#!/bin/bash

# Exit on error
set -e

# Function to run the development server
function dev() {
  echo "Starting development server on port 3001..."
  # Kill any process running on port 3001
  lsof -ti:3001 | xargs kill -9 2>/dev/null || true
  npm run start -- --port 3001 --no-open
}

# Function to build the production site
function build() {
  echo "Building production site..."
  npm run build
}

# Function to serve the built site
function serve() {
  echo "Serving built site..."
  npm run serve
}

# Function to clean up
function clean() {
  echo "Cleaning build artifacts..."
  npm run clear
}

# Function to run docker for production
function docker_prod() {
  echo "Building and starting Docker container..."
  docker-compose up --build -d
}

# Function to stop docker container
function docker_stop() {
  echo "Stopping Docker container..."
  docker-compose down
}

# Help message
function show_help() {
  echo "Usage: ./go [COMMAND]"
  echo ""
  echo "Commands:"
  echo "  dev           Start the development server"
  echo "  build         Build the production site"
  echo "  serve         Serve the built site"
  echo "  clean         Clean build artifacts"
  echo "  docker_prod   Build and start Docker container"
  echo "  docker_stop   Stop Docker container"
  echo "  help          Show this help message"
  echo ""
}

# Make sure dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Check command line argument
if [ "$1" == "dev" ]; then
  dev
elif [ "$1" == "build" ]; then
  build
elif [ "$1" == "serve" ]; then
  serve
elif [ "$1" == "clean" ]; then
  clean
elif [ "$1" == "docker_prod" ]; then
  docker_prod
elif [ "$1" == "docker_stop" ]; then
  docker_stop
else
  show_help
fi 