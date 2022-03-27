# bouyomichan-port-proxy

棒読みちゃんを１つのAPIエンドポイントから複数に分岐するローカルサーバー

読み上げテキストに含まれるプレフィックス（接頭辞）でポート振り分けを行う

## How to use

Node.js 14以上 - https://nodejs.org/ja/

1. コマンドプロンプトを起動
2. cd コマンドでこのフォルダまで移動
3. 初回だけ `npm i` コマンドを実行
4. `npm start` 実行でサーバー起動
5. 棒読みちゃんのHTTPサーバーを使うアプリに表示されたポート番号を設定

## Edit Config
config.jsを編集して設定を変更

```
export const ROUTING = [
  {
    prefix: 'A)', // 読み上げテキストの先頭に含まれる文字
    port: 50080   // 振り分け先ポート
  }
]
```
