#!/bin/bash

# Get the version number from the first command line argument
VERSION=$1

# Run the gcloud command to submit the build
gcloud builds submit --config cloudbuild.yaml --substitutions _TAG="$VERSION" .

