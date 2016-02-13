#!/bin/sh

set -e

OUTPUT_FOLDER=".docs"
REPOSITORY="https://$GITHUB_DEPLOY_CREDENTIALS@github.com/fmoliveira/mailerlite-sdk-nodejs.git"
CONFIG_NAME=`git config user.name`
CONFIG_EMAIL=`git config user.email`
AUTHOR_NAME=${GITHUB_DEPLOY_AUTHOR_NAME:-$CONFIG_NAME}
AUTHOR_EMAIL=${GITHUB_DEPLOY_AUTHOR_EMAIL:-$CONFIG_EMAIL}

# Remove output folder if already being used
alias rimraf="rm -rf $OUTPUT_FOLDER"
rimraf

# Clone GitHub pages
git clone -b gh-pages --single-branch $REPOSITORY $OUTPUT_FOLDER

# Alias to change Git working dir
alias git="git -C $OUTPUT_FOLDER"

# Remove old content
git rm -rf .

# Build documentation
npm run make:docs

# Commit new content and push it
git add --all .
git commit -m "Deploy to GitHub pages." --author="$AUTHOR_NAME <$AUTHOR_EMAIL>"
git log -1
git push

# Remove temporary folder
rimraf
