# OAuth 3legged認証 サンプル

Node.jsとBox SDKを使った、OAuth 3legged認証のサンプルスクリプト。  

コードの内容は以下のトレーニング資料内「レッスン6: JWT Application - Node」を参考としています。

![Box Developerトレーニング: レベル2 - 認証とアカウントの種類について学ぶ](https://community.box.com/t5/ゼロから始めるBox-API/Box-Developerトレーニング-レベル2-認証とアカウントの種類について学ぶ/ta-p/58111)

## 参考
[working-with-oauth-node_JA](https://cloud.app.box.com/s/sq9xbtkw5bjmd9e7jr615poqc5nujgh8)

# 1. リポジトリをクローン

```
git clone git@github.com:BoxJapan-SE/node-sdk-practice.git
```

# 2. パッケージのインストール
```
cd node-sdk-practice.git/3legged-OAuth

npm install --save box-node-sdk
npm install --save express
npm install --save querystring
```

# 3. コンフィグファイルの作成

認証情報(Client ID, Client Secret)を記載したコンフィグファイルを用意

- ファイル形式はJson
- ファイル名は「oauth_config.json」で固定
- 誤ってコミットに認証情報を含めないよう、リポジトリの外のディレクトリに保存すること  
  例. /Users/ユーザ名/keys/oauth_config.json

**oauth_config.json**
```
{
    "oauthClientId" : "クライアントID",
    "oauthClientSecret" : "クライアントSecret"
}
```

# 4. コード中のファイルのパスを自環境に書き換え

oauth.js 5行目のコンフィグファイルのパスを自環境のものに書き換える。

5行目 コンフィグファイルのパス
```
const appConfig = require('絶対パスで保存先を指定/oauth_config.json');  
```

10行目 テストアップロード用ファイルのパス
```
const filePath = '/Users/hkusaka/Desktop/taxdoc.txt'; //テストアップロード用のファイルパス
```

# 5. アプリケーションの実行

## 5-1. Nodeアプリを起動

```
$ node oauth.js
Server started: Listening on port 3000
```

## 5-2. ブラウザでNodeアプリにアクセス

ブラウザのシークレットウインドウを開き、  
`http://localhost:3000/start` にアクセスする。  

![ブラウザにアクセス](https://cloud.box.com/shared/static/arvuggjev2pryr6dw43iftt5tnp5fclp.png)

## 5-3. Boxにログイン

`account.box.com`にリダイレクトされるので、ユーザ名、パスワードを入力してログインする。  

![Boxにログイン](https://cloud.box.com/shared/static/8ozh87bxjiws1ilp3hbp8y3w1r5hiwhq.png)

## 5-4. アプリケーションの認可

このアプリケーションに許される権限の一覧が表示される。  
`Boxへのアクセスを許可`ボタンをクリックする。  

![アプリケーションの認可](https://cloud.box.com/shared/static/f164qsy3m9xzq4rl7uytr9drq79pnyjk.png)

手順5-1.でNodeアプリを起動したコンソールに戻り、ファイルアップロードのPOSTリクエストが発行されたことを確認する。  


## 5-5. Box WebUIで確認

Boxのトップページにファイルがアップロードされたことを確認する。  

![ファイルのアップロード確認](https://cloud.box.com/shared/static/ai35f00hp46n7kuombiw1vbqxcyfno8l.png)
