
const axios = require('axios');
const reqService = require('../services/request.service');
const userFormatter= require('../formatters/user.formatters');

module.exports = {
  getUser
}

function getUser(req, res, next) {
  const userId = req.query.userId;
  return axios.get(`${reqService.buildQueryURL('flickr.people.getInfo')}&user_id=${userId}&format=json&nojsoncallback=1`)
    .then(result => {
      const formattedResult = userFormatter.formatUser(result.data);
      res.send(formattedResult);
    })
    .catch(err => {
      res.send({ err })
    });
}