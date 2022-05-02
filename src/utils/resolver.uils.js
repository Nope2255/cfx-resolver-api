var fetch = require("node-fetch");

var config = {
    fivemFrontendApi: "https://servers-frontend.fivem.net/api"
}

var resolveEndPoint = function(endPoint) {
    return new Promise(async function(resolve, reject) {
        var url = `${config.fivemFrontendApi}/servers/single/${endPoint}`,
            headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0" };
        
        var response = await fetch(url, { headers: headers }),
            data = await response.json();

        resolve(data);
    });
}

module.exports = {
    resolveEndPoint
};
