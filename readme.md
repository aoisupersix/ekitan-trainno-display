[![CI](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/ekitan-trainno-display/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/ekitan-trainno-display?branch=master)

# Ekitan TrainNo Display

[駅探](https://ekitan.com/)の電車時刻表に列車番号の表示を追加する Chrome extension です

# Features

- 列車時刻の表示ビューにクエリパラメータから取得した列車番号を追加します
- 一部列車の号数を列車番号から抽出して列車名の後に表示します（※あくまで列車番号を加工しているだけなので異なる号数が表示される可能性があります）

※1 本前、1 本後ボタン押下後の列車情報には非対応です

号数の表示は以下の列車に対応しています

## 新幹線

- 東北・北海道新幹線
  - はやぶさ
  - はやて
  - やまびこ
  - なすの
  - こまち
  - つばさ

## 在来線

- JR 北海道
  - 北斗
  - とかち
  - おおぞら
  - サロベツ
  - オホーツク
  - 大雪
  - すずらん
  - カムイ
  - ライラック

# Development

```
# リポジトリをクローン
$ git clone https://github.com/aoisupersix/ekitan-trainno-display.git

# 依存パッケージをインストール
$ npm i

# 開発用にパッケージング
$ npm run watch
```

# License

The MIT License(MIT)

Copyright(c) 2019-2021 aoisupersix

[license.md](license.md)
