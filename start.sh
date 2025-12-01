#!/bin/bash
echo "Building frontend..."
npx vite build
echo "Starting server..."
NODE_ENV=production tsx server/index.ts
