const config = require('config');

const { url, api_key } = config.get('api');

module.exports = (method) => `${url}=${method}&api_key=${api_key}`;