var fs = require('fs');
var BoxSDK = require('box-node-sdk');
 
var sdk = new BoxSDK({
  clientID: 'アプリのクライアントID',
  clientSecret: 'アプリのSecret',
  appAuth: {
    algorithm: 'RS256',
    keyID: '鍵ペアのID値',
    privateKey: fs.readFileSync('/Users/yourname/鍵ファイルへのパス .pem'),
    passphrase: '秘密鍵のパスフレーズ'
  }
});


// AppUserの作成
var client = sdk.getAppAuthClient('enterprise', 'エンタープライズID');
var requestParams = {
  body: {
    name: '作成したいユーザー名',
    is_platform_access_only: true
  }
};
client.post('/users', requestParams, client.defaultResponseHandler(function (err, data) {
  if (err) throw err;
  console.log(data);
}));
