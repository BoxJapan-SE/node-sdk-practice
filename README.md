# Reference

- GitHub  
  https://github.com/box/box-node-sdk
- Developer site  
  https://ja.developer.box.com/docs/install-the-sdk


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
