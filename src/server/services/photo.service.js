const checkQueryParams = (req) => {
  const perPage = req.query.perPage ? req.query.perPage : '10';
  const page = req.query.page ? req.query.perPage : '1';
  return { perPage, page };
}

const buildPhotoQueryUrl = (url, tags, perPage, page) => {
  return `${url}&tags=${tags}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`
}

module.exports = { checkQueryParams, buildPhotoQueryUrl }