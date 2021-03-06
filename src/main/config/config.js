const { constants } = require("../util/constants/constants");

const config = {
    logAsync: false,
    heartBeatTimeout: 5,
    logJsonPrettify: false,
    actuatorEnabled: true,
    statusMonitorEnabled: true,
    serverSelectionStrategy: constants.SSS.RR,
    logFormat: constants.LOG_FORMATS.PLAIN
}

Object.defineProperty(config, "profile", {
    value: constants.PROFILE,
    writable: false
});

module.exports = config;