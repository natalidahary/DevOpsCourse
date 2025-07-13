#!/bin/bash

# Build and push backend
echo "Building backend..."
docker build -t natalidahary/backend:latest ./backend
echo "Pushing backend to Docker Hub..."
docker push natalidahary/backend:latest

# Build and push frontend
echo "Building frontend..."
docker build -t natalidahary/frontend:latest ./frontend
echo "Pushing frontend to Docker Hub..."
docker push natalidahary/frontend:latest

echo "All done!"
