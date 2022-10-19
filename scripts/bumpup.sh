#!/bin/sh

jq ".version=\"$1\"" public/manifest.json > tmp
mv tmp public/manifest.json

jq ".version=\"$1\"" package.json > tmp
mv tmp package.json

git add public/manifest.json package.json
git commit -m "Bump up $1"

echo "Bump up v$1"
