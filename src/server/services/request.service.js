const config = require('config');
const { url, api_key } = config.get('api');

module.exports = {
  buildQueryURL
}

function buildQueryURL(method) {
  return `${url}=${method}&api_key=${api_key}`;
}