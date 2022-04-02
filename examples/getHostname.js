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
