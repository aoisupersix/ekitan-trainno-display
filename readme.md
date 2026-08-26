[![CI](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/ekitan-trainno-display/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/ekitan-trainno-display/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/ekitan-trainno-display?branch=master)

# Ekitan TrainNo Display

![](/images/scrn1280.png)

[駅探](https://ekitan.com/)の電車時刻表に列車番号の表示を追加するブラウザ拡張機能です。
Chrome / Firefox（デスクトップ・Android）に対応しています。

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
- 上越新幹線
  - とき
  - たにがわ
- 北陸新幹線
  - かがやき
  - はくたか
  - あさま
  - つるぎ
- 東海道・山陽・九州・西九州新幹線
  - のぞみ
  - ひかり
  - こだま
  - みずほ
  - さくら
  - つばめ
  - かもめ

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
  - 快速エアポート(区間快速・特別快速含む)
- JR 東日本
  - あずさ
  - かいじ
  - ひたち
  - ときわ
  - 湘南
  - 草津・四万
  - あかぎ
  - しおさい
  - さざなみ
  - わかしお
  - 新宿わかしお
  - 新宿さざなみ
  - 成田エクスプレス
  - 踊り子
  - サフィール踊り子
  - いなほ
  - しらゆき
  - つがる
  - スーパーつがる
- JR 東海
  - しなの
  - ひだ
  - 南紀
- JR 西日本
  - サンダーバード
  - しらさぎ
  - くろしお
  - こうのとり
  - きのさき
  - まいづる
  - はしだて
  - はまかぜ
  - はるか
  - やくも
  - スーパーはくと
  - スーパーおき
  - スーパーまつかぜ
  - スーパーいなば
- JR 四国
  - しおかぜ
  - いしづち
  - 宇和海
  - 南風
  - しまんと
  - あしずり
  - うずしお
  - 剣山
  - むろと
  - 快速マリンライナー
- JR 九州
  - ソニック
  - にちりん
  - にちりんシーガイア
  - ひゅうが
  - きりしま
  - リレーかもめ
  - みどり
  - ハウステンボス
  - かささぎ
  - きらめき
  - ゆふ
  - ゆふいんの森

## 私鉄

- 小田急ロマンスカー
  - はこね・スーパーはこね
  - さがみ
  - えのしま
  - ふじさん
  - ホームウェイ・モーニングウェイ
  - メトロはこね・メトロえのしま・メトロホームウェイ・メトロモーニングウェイ
- 東武
  - けごん・リバティけごん
  - きぬ・リバティきぬ
  - りょうもう・リバティりょうもう
  - リバティ会津
- 西武
  - ちちぶ
  - むさし

# Development

```sh
git clone https://github.com/aoisupersix/ekitan-trainno-display.git
npm i
npm start
```

コマンド実行後、以下の手順で拡張機能を有効にする

- Chrome: `chrome://extensions`から「パッケージ化されていない拡張機能を読み込む」→`dist/`ディレクトリを選択
- Firefox: `about:debugging#/runtime/this-firefox`から「一時的なアドオンを読み込む」→`dist/manifest.json`を選択

# Test

```sh
npm test
```

# License

The MIT License(MIT)

Copyright(c) 2019-2026 aoisupersix

[license.md](license.md)
