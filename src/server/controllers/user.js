const axios = require("axios");
const buildQueryURL = require("../services/request.service");
const formatUser = require("../formatters/user.formatters");

module.exports = (req, res, next) => {
  const userId = req.query.userId;
  queryUrl = buildQueryURL("flickr.people.getInfo");
  return axios
    .get(`${queryUrl}&user_id=${userId}&format=json&nojsoncallback=1`)
    .then(result => {
      const formattedResult = formatUser(result.data);
      res.json(formattedResult);
    })
    .catch(next);
};
