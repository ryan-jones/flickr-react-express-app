
const axios = require('axios');
const buildQueryURL = require('../services/request.service');
const formatUser = require('../formatters/user.formatters');

module.exports = (req, res, next) => {
  const userId = req.query.userId;
  return axios.get(`${buildQueryURL('flickr.people.getInfo')}&user_id=${userId}&format=json&nojsoncallback=1`)
    .then(result => {
      const formattedResult = formatUser(result.data);
      res.json(formattedResult);
    })
    .catch(next);
}