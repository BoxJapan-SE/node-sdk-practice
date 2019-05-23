'use strict';

// Initialize packages
const app = require('express')();               //Webフレームワーク"Express"
const appConfig = require('/Users/hkusaka/conf/oauth_config.json');  //コンフィグファイルを読み込み
const boxSDK = require('box-node-sdk');          //Box Node SDK
const fs = require('fs');                       //ファイル操作のためfsを読み込み
const http = require('http');                  //HTTPサーバ
const querystring = require('querystring');      //クエリ文字列操作のためquerystring
const filePath = '/Users/hkusaka/Desktop/taxdoc.txt'; //テストアップロード用のファイルパス

const sdk = new boxSDK({
    clientID: appConfig.oauthClientId,
    clientSecret: appConfig.oauthClientSecret
});

app.get('/start', function(req, res) {
    // エンドポイント
    const authURI = 'https://account.box.com/api/oauth2/authorize';
    const returnURI = 'http://localhost:3000/return';

    const payload = {
        'response_type' : 'code',
        'client_id' : appConfig.oauthClientId,
        'redirect_uri' : returnURI
    };

    const qs = querystring.stringify(payload);
    const authEndpoint = `${authURI}?${qs}`;

    console.log(authEndpoint)

    // ユーザが/startにアクセスしたら、authEndpointのURIにリダイレクトする
    res.redirect(authEndpoint);
});

app.get('/return', function(req, res){
    // リクエストのクエリ文字列から、codeを抽出
    const code = req.query.code;

    // codeからトークンを取得
    // tokenInfoには、Access Token,Refresh Tokenが格納されている
    sdk.getTokensAuthorizationCodeGrant(code, null, function(err, tokenInfo) {
        // 取得したトークンを用いて、新しいクライアントオブジェクトを生成
        const client = sdk.getBasicClient(tokenInfo.accessToken);

        // ファイルを読み取るためのReadStreamを生成
        const stream = fs.createReadStream(filePath);
        // ファイルをアップロード
        // 第1引数:アップロード先フォルダID
        client.files.uploadFile('0', 'taxdoc.txt', stream, callback);
    })
});


function callback(err, res) {
    if(err) {
        console.error(err);
    }
    console.log(res)
}

// Expressサーバ
http.createServer(app).listen(3000, function (){
    console.log('Server started: Listening on port 3000');
});
