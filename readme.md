[![CI](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/ekitan-trainno-display/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/ekitan-trainno-display?branch=master)

# Ekitan TrainNo Display

[駅探](https://ekitan.com/)の電車時刻表に列車番号の表示を追加する Chrome extension です

# Features

- 列車時刻の表示ビューにクエリパラメータから取得した列車番号を追加します
- 一部列車の号数を列車番号から抽出して列車名の後に表示します（※あくまで列車番号を加工しているだけなので異なる号数が標示される可能性があります）

# Development

```
# リポジトリをクローン
$ git clone https://github.com/aoisupersix/ohitorisama.git

# 依存パッケージをインストール
$ npm i

# 開発用にパッケージング
$ npm run watch
```
