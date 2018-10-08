module.exports = (result) => {
  const { realname, location, description, profileurl, username } = result.person;
  return {
      realName: realname._content,
      location: location._content,
      description: description._content,
      profileUrl: profileurl._content,
      userName: username._content
  }
}