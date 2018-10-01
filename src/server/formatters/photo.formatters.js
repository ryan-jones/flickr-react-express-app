
module.exports = {
  formatPhotoResponse
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
  const { owner, secret, server, farm, title, ispublic, isfamily, isfriend } = photo;
  return {
    owner,
    secret,
    server,
    farm,
    title,
    isPublic: ispublic,
    isFamily: isfamily,
    isFriend: isfriend
  }
}