module.exports = (response, tags) => {
  const { page, pages, total, perpage, photo } = response.photos;
  console.log('RESPONSE*********', response.photos);
  const result = {
    tags,
    page,
    pages,
    total,
    perPage: perpage,
    photos: photo.map(pho => formatPhoto(pho))
  }
  return result;
}

const formatPhoto = (photo) => {
  const { owner, secret, server, farm, title, id } = photo;
  const result = {
    owner,
    title,
    url: `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`
  };
  return result;
}