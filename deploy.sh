#!/bin/bash

#set -e

REPOSITORY_NAME="fmoliveira/mailerlite-sdk-nodejs"

if [ "$GITHUB_DEPLOY_CREDENTIALS" == "" ]; then
  REPOSITORY_URL="git@github.com:$REPOSITORY_NAME.git"
else
  REPOSITORY_URL="https://$GITHUB_DEPLOY_CREDENTIALS@github.com/$REPOSITORY_NAME.git"
fi

OUTPUT_FOLDER=".docs"
CONFIG_NAME=`git config user.name`
CONFIG_EMAIL=`git config user.email`
AUTHOR_NAME="${GITHUB_DEPLOY_AUTHOR_NAME:-$CONFIG_NAME}"
AUTHOR_EMAIL="${GITHUB_DEPLOY_AUTHOR_EMAIL:-$CONFIG_EMAIL}"

if [ "$TRAVIS_BUILD_NUMBER" == "" ]; then
  COMMIT_MSG="Deployment to GitHub Pages."
else
  COMMIT_MSG="Automatic deployment to GitHub Pages via Travis CI build number #$TRAVIS_BUILD_NUMBER."
fi

echo "Preparing to write commit in GitHub Pages..."
echo $COMMIT_MSG

# Remove output folder if already being used
rm -rf $OUTPUT_FOLDER

# Clone GitHub pages
git clone -b gh-pages --single-branch $REPOSITORY_URL $OUTPUT_FOLDER

# Remove old content
git -C $OUTPUT_FOLDER rm -rf .

# Build documentation
npm run make:docs

# Commit new content and push it
git -C $OUTPUT_FOLDER add --all .
git -C $OUTPUT_FOLDER config user.name "$AUTHOR_NAME"
git -C $OUTPUT_FOLDER config user.email "$AUTHOR_EMAIL"
git -C $OUTPUT_FOLDER commit -m "$COMMIT_MSG"
git -C $OUTPUT_FOLDER log -1
git -C $OUTPUT_FOLDER push

# Remove temporary folder
rm -rf $OUTPUT_FOLDER
