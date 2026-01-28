const { http } = require('../plugins/http-client.plugin');
// buildLogger sin {} exportacion por defecto
const buildLogger = require('../plugins/logger.plugin');
const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');

module.exports = { buildLogger, http, getUUID, getAge };
// archivo de barril para centralizar las exportaciones de los plugins