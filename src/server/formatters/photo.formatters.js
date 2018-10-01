
module.exports = {
  formatPhotoResponse,
  formatPhoto
}

function formatPhotoResponse(response) {
  const { page, pages, total, perpage, photo } = response.photos;
  const result = {
    page,
    pages,
    total,
    perPage: perpage,
    photos: photo.map(pho => formatPhoto(pho))
  }
  return result;
}

function formatPhoto(photo) {
  const { owner, secret, server, farm, title, id } = photo;  
  const result = {
    owner,
    title,
    url: `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`
  };
  return result;
}