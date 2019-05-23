# OAuth 3legged認証 サンプル

Node.jsとBox SDKを使った、OAuth 3legged認証のサンプルスクリプト。  

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

