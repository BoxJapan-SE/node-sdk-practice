'use strict';

// Initialize packages
const app = require('express')();               //Webフレームワーク"Express"
const appConfig = require('/Users/hkusaka/keys/oauth_config.json');  //コンフィグファイルを読み込み
const boxSDK = require('box-node-sdk');          //Box Node SDK
const fs = require('fs');                       //ファイル操作のためfsを読み込み
const http = require('https');                  //HTTPサーバ
const querystring = require('querystring')      //クエリ文字列操作のためquerystring

console.log(appConfig.oauthClientId)

console.log(appConfig.oauthClientSecret)


const sdk = new boxSDK({
    clientID: appConfig.oauthClientId,
    clientSecret: appConfig.oauthClientSecret
});

