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
  TAG=${TAG:-dev} npm run build
}

# Function to serve the built site
function serve() {
  echo "Serving built site..."
  npm run serve
}

# Function to clean up
function clean() {
  echo "Cleaning build artifacts and cache..."
  npm run clear
  rm -rf node_modules/.cache .docusaurus
  echo "Cache cleared successfully"
}

# Function to run docker for production
function docker_prod() {
  echo "Building and starting Docker container..."
  docker compose up --build -d
}

# Function to run docker for development
function docker_dev() {
  echo "Building and starting Docker container for development..."
  # Remove existing container if it exists
  docker stop docs-dev 2>/dev/null || true
  docker rm docs-dev 2>/dev/null || true
  # Create a Dockerfile.dev if it doesn't exist
  if [ ! -f "Dockerfile.dev" ]; then
    cat > Dockerfile.dev << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies  
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 3001 for development
EXPOSE 3001

# Run the development server
CMD ["npm", "run", "start", "--", "--port", "3001", "--host", "0.0.0.0"]
EOF
  fi
  # Build and run the development container
  docker build -f Dockerfile.dev -t docs-dev .
  docker run -d -p 3001:3001 --name docs-dev -v "$(pwd)":/app -v /app/node_modules docs-dev
}

# Function to stop docker container
function docker_stop() {
  echo "Stopping Docker container..."
  docker compose down
  docker stop docs-dev 2>/dev/null || true
  docker rm docs-dev 2>/dev/null || true
}

# Function to create release build
function release() {
  echo "Creating release build..."
  
  # Get the root directory
  ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
  BIN_DIR="$ROOT_DIR/bin"
  
  # Clean up bin directory
  echo "Cleaning up bin directory..."
  rm -rf "$BIN_DIR"
  mkdir -p "$BIN_DIR"
  
  # Clear cache before build to avoid webpack issues
  echo "Clearing cache before build..."
  rm -rf node_modules/.cache .docusaurus
  
  # Build the documentation first
  if ! build; then
    echo "Build failed! Release aborted."
    exit 1
  fi
  
  # Get version from package.json
  VERSION=$(node -p "require('./package.json').version")
  
  # Copy built files
  echo "Copying build files to bin..."
  cp -r "$ROOT_DIR/build/"* "$BIN_DIR/"
  
  # Create version info file
  echo "{
  \"version\": \"${VERSION}\",
  \"buildDate\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",
  \"gitCommit\": \"$(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')\"
}" > "$BIN_DIR/version.json"
  
  echo ""
  echo "Release build created successfully!"
  echo "Version: ${VERSION}"
  echo "Files copied to: $BIN_DIR"
  
  # Copy to root bin/html for nginx serving (docs is now the main site)
  echo "Copying to root bin/html directory for nginx..."
  ROOT_BIN_HTML="$ROOT_DIR/../bin/html"
  
  # Save console directory if it exists (the actual React app)
  CONSOLE_BACKUP=""
  if [ -d "$ROOT_BIN_HTML/console" ] && [ -f "$ROOT_BIN_HTML/console/index.html" ]; then
    # Check if it's the React app (has specific JS files) not docs
    if ls "$ROOT_BIN_HTML/console/assets/"*.js >/dev/null 2>&1; then
      echo "Preserving existing console application..."
      CONSOLE_BACKUP="/tmp/console_backup_$$"
      cp -r "$ROOT_BIN_HTML/console" "$CONSOLE_BACKUP"
    fi
  fi
  
  # Clean up existing root files (but preserve console and other subdirectories)
  echo "Cleaning up existing root files..."
  find "$ROOT_BIN_HTML" -maxdepth 1 -type f -delete 2>/dev/null || true
  # Remove old docs assets directories but preserve console, offers, config, etc
  for dir in assets img; do
    [ -d "$ROOT_BIN_HTML/$dir" ] && rm -rf "$ROOT_BIN_HTML/$dir"
  done
  
  # Copy all docs files to root bin/html
  cp -r "$BIN_DIR/"* "$ROOT_BIN_HTML/"
  
  # Restore console app if we backed it up
  if [ -n "$CONSOLE_BACKUP" ] && [ -d "$CONSOLE_BACKUP" ]; then
    echo "Restoring console application..."
    rm -rf "$ROOT_BIN_HTML/console" 2>/dev/null || true
    mv "$CONSOLE_BACKUP" "$ROOT_BIN_HTML/console"
  fi
  
  echo "Docs files copied to root: $ROOT_BIN_HTML"
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
  echo "  release       Build and create release files in bin/"
  echo "  docker_prod   Build and start Docker container"
  echo "  docker_dev    Build and start Docker container (development)"
  echo "  docker_stop   Stop Docker container"
  echo "  help          Show this help message"
  echo ""
}

# Make sure dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Main function to handle commands
main() {
    case "$1" in
        dev)
            dev
            ;;
        build)
            build
            ;;
        serve)
            serve
            ;;
        clean)
            clean
            ;;
        docker_prod)
            docker_prod
            ;;
        docker_dev)
            docker_dev
            ;;
        docker_stop)
            docker_stop
            ;;
        release)
            release
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            show_help
            exit 1
            ;;
    esac
}

# Execute main function if run directly
[[ "${BASH_SOURCE[0]}" == "${0}" ]] && main "$@" 