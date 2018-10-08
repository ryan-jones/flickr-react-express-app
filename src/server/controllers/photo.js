const axios = require('axios');
const photoService = require('../services/photo.service');
const formatPhotoResponse = require('../formatters/photo.formatters');
const buildQueryURL = require('../services/request.service');

module.exports = (req, res, next) => {
  const tags = req.query.tags;
  const { perPage, page } = photoService.checkQueryParams(req);
  const url = buildQueryURL('flickr.photos.search');
  const query = photoService.buildPhotoQueryUrl(url, tags, perPage, page);
  return axios.get(query)
    .then(response => {
      const formattedResponse = formatPhotoResponse(response.data, tags);
      res.send(formattedResponse);
    })
    .catch(err => res.send({ err }))
}