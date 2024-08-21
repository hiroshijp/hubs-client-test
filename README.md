# hubs-client-test

## about
公式の**ghcr.io/puppeteer/puppeteer:latest**イメージを使用している。本来/home/puptuserディレクトリへスクリプトを追加して使用するが、独立したプロジェクトとして管理したいため/appディレクトを使用。

## how to use 

### コードの編集
/app/script/main.jsがエントリーポイント。ESM形式でファイルをインポートする。

### 負荷試験
```
$ docker compose up --scale pupperterr={{ コンテナ数 }}
```
でスケールアウトできる。docker-compose.yamlでresourceのlimitを指定している。cpus: "1"は動作しない。cpus: "1.5"は動作を確認済み

