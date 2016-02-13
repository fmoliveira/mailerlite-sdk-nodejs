#!/bin/sh

set -e

REPOSITORY="https://$GITHUB_DEPLOY_CREDENTIALS@github.com/fmoliveira/mailerlite-sdk-nodejs.git"
CONFIG_NAME=`git config user.name`
CONFIG_EMAIL=`git config user.email`
AUTHOR_NAME=${GITHUB_DEPLOY_AUTHOR_NAME:-$CONFIG_NAME}
AUTHOR_EMAIL=${GITHUB_DEPLOY_AUTHOR_EMAIL:-$CONFIG_EMAIL}

# Remove output folder if already being used
rm -rf .docs .gh-pages

# Clone GitHub pages
git clone -b gh-pages --single-branch $REPOSITORY .gh-pages

# Build documentation
npm run make:docs

# Move documentation
cd .gh-pages
rm -rf *.*
mv ../.docs/*.* .

# Commit new content and push it
git add --all .
git commit -m "Deploy to GitHub pages." --author="$AUTHOR_NAME <$AUTHOR_EMAIL>"
git log -1
git push

