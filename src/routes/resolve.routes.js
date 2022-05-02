var express = require('express'),
    resolver = require('../utils/resolver.uils');

var router = express.Router();

router.get("/", async function(req, res) {
    if (req.query.endpoint) {
        var response = await resolver.resolveEndPoint(req.query.endpoint);

        return res.send({
            endpoint: response.EndPoint,
            upvotes: {
                power: response.Data.upvotePower,
                burst: response.Data.burstPower,
            },
            server: {
                ip: response.Data.connectEndPoints[0],
                game: response.Data.vars.gamename,
                server: response.Data.server,
                lastSeen: response.Data.lastSeen,
                hostname: response.Data.hostname,
                projectTags: response.Data.vars.sv_projectName,
                projectName: response.Data.vars.sv_projectName,
                playerCount: response.Data.clients,
                maxPlayers: response.Data.sv_maxclients,
                resourcesCount: response.Data.resources.length,
                resources: response.Data.resources,
                players: response.Data.players,
                locale: response.Data.vars.locale,
                build: response.Data.vars.sv_enforceGameBuild,
            },
            owner: {
                name: response.Data.ownerName,
                profile: response.Data.ownerProfile,
                avatar: response.Data.ownerAvatar,
            },
            images: {
                connectingBanner: response.Data.vars.banner_connecting,
                detailBanner: response.Data.vars.banner_detail,
            }
        });
    } else {
        return res.status(404);
    }
});

router.get("/raw", async function(req, res) {
    if (req.query.endpoint) {
        var response = await resolver.resolveEndPoint(req.query.endpoint);
        return res.send(response);
    } else {
        return res.status(404);
    }
});

module.exports = router;