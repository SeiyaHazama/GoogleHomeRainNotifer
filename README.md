# GoogleHomeRainNotifier

## はじめに
父「雨降るときに知らせてくれるものがあればいいのにな」

ということで作ったものです。

GitHubに上げたのは単なるバックアップみたいなものですのでReadmeはなぐり書きです。予めご了承ください。ですが使用はどうぞご自由に。

## なにするやつか

任意の場所で1時間以内に雨が降る可能性があるときにGoogle Homeが通知してくれるやつ

## どうやって使うか

RaspberryPi等を用意して、これをクローンしてwatchコマンドなどを使って定期的に気象APIを監視して通知を入れる

## いるもの

* PCとかRaspberryPi
* GoogleHome
* (ネット環境)

## 気象API

気象APIはYOLP(Yahoo! Open Local Platform)を使用しています。本プログラムを使用するにはアプリケーションIDが必要です。
