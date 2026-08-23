#!/bin/sh
set -eu

VERSION="${1:-}"

if ! echo "$VERSION" | grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+$'; then
    echo "Usage: npm run bumpup -- <major.minor.patch>" >&2
    exit 1
fi

# jqを利用すると未インストール環境でJSONを空ファイルで上書きしてしまうためnodeで書き換える
for FILE in public/manifest.json package.json; do
    node -e "
        const fs = require('fs')
        const file = process.argv[1]
        const json = JSON.parse(fs.readFileSync(file, 'utf8'))
        json.version = process.argv[2]
        fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n')
    " "$FILE" "$VERSION"
done

git add public/manifest.json package.json
git commit -m "Bump up $VERSION"

echo "Bump up v$VERSION"
