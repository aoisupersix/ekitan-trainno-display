[![CI](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/ekitan-trainno-display/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/ekitan-trainno-display?branch=master)

# Ekitan TrainNo Display

![](/images/scrn1280.png)

[駅探](https://ekitan.com/)の電車時刻表に列車番号の表示を追加するChrome extensionです

# Features

- 列車時刻の表示ビューにクエリパラメータから取得した列車番号を追加します
  - 1本前/1本後ボタンをクリックした際には更新後の列車番号に表示を更新します
- 一部列車の号数を列車番号から抽出して列車名の後に表示します（※あくまで列車番号を加工しているだけなので異なる号数が表示される可能性があります）

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

```sh
git clone https://github.com/aoisupersix/ekitan-trainno-display.git
npm i
npm start
```

コマンド実行後、`chrome://extensions`から、「パッケージ化されていない拡張機能を読み込む」→`dist/`ディレクトリを選択して拡張機能を有効にする

# Test

```sh
npm test
```

# License

The MIT License(MIT)

Copyright(c) 2019-2021 aoisupersix

[license.md](license.md)
