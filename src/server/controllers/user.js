
const axios = require('axios');
const reqService = require('../services/request.service');
module.exports = {
  getUser
}

function getUser(req, res, next) {
  const userId = req.query.userId;
  return axios.get(`${reqService.buildQueryURL('flickr.people.getInfo')}&user_id=${userId}&format=json&nojsoncallback=1`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      res.send({ err })
    });
}