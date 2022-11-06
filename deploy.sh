#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

# ビルド出力ディレクトリに移動
cd dist

# カスタムドメインにデプロイする場合
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# https://kazuhi-ra.github.io/human-power にデプロイする場合
git push -f git@github.com:kazuhi-ra/human-power.git main:gh-pages

cd -
