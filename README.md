# Reference

- [GitHub - Box Node SDK](https://github.com/box/box-node-sdk)
- [Box Developer site](https://ja.developer.box.com/docs/install-the-sdk)  
- [Box Developer Training video](https://community.box.com/t5/%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8BBox-API/Box-Developer%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-%E3%83%AC%E3%83%99%E3%83%AB2-%E8%AA%8D%E8%A8%BC%E3%81%A8%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E5%AD%A6%E3%81%B6/ta-p/58111)  
  

# Box Node SDKのインストール

Nodeアプリケーションのディレクトリに移動して、npmコマンドでインストールする  

```
cd (Nodeアプリのディレクトリパス)
npm install --save box-node-sdk
```

実行例  

```
$ npm install --save box-node-sdk
(省略)

+ box-node-sdk@1.22.0
added 67 packages from 75 contributors and audited 86 packages in 4.975s
found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```


## Node SDKの呼び出し

```
var BoxSDK = require('box-node-sdk');
```

呼び出しに失敗したときは、以下のエラーが表示されます。  
```
node auth.js
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module 'box-node-sdk'
```
