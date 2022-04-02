# API Documentation - cfx-resolver.kidu.wtf
### About
> This `"cfx-resolver"` will get you all informations of a fivem server via `GET requests` and the given `query`.

# As Example i will use `jbdl6k` as my endpoint!

## How to get an Endpoint?
1. Visit https://servers.fivem.net/
2. Pick a Server
3. Copy the Endpoint
### Endpoint looks this:
![https://cdn.discordapp.com/attachments/959480411543703622/959833334668755044/unknown.png](https://cdn.discordapp.com/attachments/959480411543703622/959833334668755044/unknown.png)

## Request Example
### Request
`GET /resolve?endpoint=YOUR-ENDPOINT`
```
https://cfx-resolver.kidu.wtf/v1/resolve?endpoint=jbdl6k
```

### Response
```json
{
   "endpoint":"jbdl6k",
   "upvotes":{
      "power":0,
      "burst":0
   },
   "server":{
      "ip":"5.253.246.92:30121",
      "game":"gta5",
      "server":"FXServer-master SERVER v1.0.0.5181 win32",
      "lastSeen":"2022-04-02T14:49:49.5717381Z",
      "hostname":"Bloodline V2 | ❌Keine Allowlist❌ | 🎤******Chat🎤 | 🔧High-Performance🔧 | 💸Realistische Wirtschaft💸",
      "projectTags":"^1Bloodline V2",
      "projectName":"^1Bloodline V2",
      "playerCount":0,
      "maxPlayers":18,
      "resourcesCount": 83,
      "resources":[...],
      "players":[...],
      "locale":"de-DE",
      "build":"2189"
   },
   "owner":{
      "name":"kiduu",
      "profile":"https://forum.cfx.re/u/kiduu",
      "avatar":"https://forum.cfx.re/user_avatar/forum.cfx.re/kiduu/128/2015680_2.png"
   },
   "images":{
      "connectingBanner":"https://cdn.upload.systems/uploads/Hbqfq1KS.png",
      "detailBanner":"https://cdn.upload.systems/uploads/DlFHY1dV.png"
   }
}
```

## Request Example NodeJS:
### Requirements:
```
npm i node-fetch@2
```

### Code
```js
var fetch = require("node-fetch");

var config = {
    api: "https://cfx-resolver.kidu.wtf/v1/"
}

var getEndpointData = function(endPoint) {
    return new Promise(async function(resolve, reject) {
        var url = `${config.api}/resolve?endpoint=${endPoint}`;
        
        var response = await fetch(url, {}),
            data = await response.json();

        resolve(data);
    });
}

// Example Function to get servers hostname
getEndpointData('jbdl6k').then(data => {
    console.log(data.server.hostname);
});
```

### Output
```
Bloodline V2 | ❌Keine Allowlist❌ | 🎤******Chat🎤 | 🔧High-Performance🔧 | 💸Realistische Wirtschaft💸
```
