const axios = require('axios');
const reqService = require('../services/request.service');
const photoService = require('../services/photo.service');
const { formatPhotoResponse } = require('../formatters/photo.formatters');

module.exports = {
  getPhotos
}

function getPhotos(req, res, next) {
  const tags = req.query.tags;
  const { perPage, page } = photoService.checkQueryParams(req);
  const url = reqService.buildQueryURL('flickr.photos.search');
  const query = photoService.buildPhotoQueryUrl(url, tags, perPage, page);
  return axios.get(query)
    .then(response => {
      const formattedResponse = formatPhotoResponse(response.data);
      console.log('formatted', formattedResponse);
      res.send(formattedResponse);
    })
    .catch(err => res.send({ err }))
}