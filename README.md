# Bitblock Backend: PuppedToy's fork

## Requirements

1. [NodeJS](https://nodejs.org/en/download/) + [npm](https://www.npmjs.com/get-npm)
2. [MongoDB](https://www.mongodb.com/download-center)
3. [nvm](https://davidwalsh.name/nvm)

## Installation

1. Ensure you are on node v6 using `nvm install 6`. Otherwise it won't work.
2. Execute `npm install` in base folder. 
3. Create `config` folder in `app/res` and create `app/res/config/config.json` with these lines:

```
{
    "env": "local",
    "gcloud": {
        "projectId": "",
        "keyFilename": ""
    },

    "cloudStorageBucket": "",
    "client_domain": "http://localhost:9000",
    "secrets": {
        "session": ""
    },
    "port": 8000,
    "ip": "0.0.0.0",
    "mongo": {
        "uri": "mongodb://localhost/bitbloq",
        "options": {
            "db": {
                "safe": true
            },
            "user": "",
            "pass": ""
        }
    },

    "seedDB": false,
    "mailer": {
        "auth": {
            "user": "",
            "pass": ""
        },
        "defaultFromAddress": "algo@algo.com"
    },
    "supportEmail": "algo@algo.com",
    "userRoles": [
        "guest",
        "user",
        "admin"
    ]
}
```

## How to run

1. Run `nvm use 6` to ensure you are using NodeJS v6
2. Run MongoDB on [Windows](https://docs.mongodb.com/tutorials/install-mongodb-on-windows/#run-mongodb-community-edition) or Ubuntu: `sudo service mongod start`. You can also just execute `sudo mongod`, but remember not to run Mongo as root on production enviroment.
3. Execute `node index.js` in base path.

## I have successfully ran backend. What now?

You should run [front-end](https://github.com/PuppedToy/bitbloq-frontend). To do so, you should follow its own `Readme.md`. However, when creating front-end `config.json`, notice that `serverUrl_` field is wrong, it should be `serverUrl`. To make this simpler, you can use instead this other config **front-end** file:

```
{
    "env": "local",
    "defaultLang": "es-ES",
    "supportedLanguages": [
        "es-ES",
        "en-GB",
        "nl-NL",
        "ru-RU",
        "it-IT",
        "eu-ES",
        "ca-ES",
        "fr-FR",
        "de-DE",
        "pt-PT",
        "gl",
        "zh-CN"
    ],
    "saveTime": 2000,
    "serverUrl": "http://localhost:8000/bitbloq/v1/",
    "gCloudUrl": "",
    "compilerUrl": "http://localhost:3000/",
    "bucket": "",
    "chromeAppId": "nlndpbeidnfnjpfkmlcakphlbilpokho",
    "web2boardLinkWindows": "https://github.com/bq/web2board/releases/download/Latest/windows_web2board_installer.exe",
    "web2boardLinkMac": "https://github.com/bq/web2board/releases/download/Latest/mac_web2board_installer.pkg",
    "web2boardLinkLinux": "https://github.com/bq/web2board/releases/download/Latest/linux_64_web2board_installer.zip",
    "web2boardLinkLinux32": "https://github.com/bq/web2board/releases/download/Latest/linux_32_web2board_installer.zip",
    "version": "v3.3.6"
}
```