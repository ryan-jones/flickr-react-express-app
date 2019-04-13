module.exports = result => {
  if (!result.person) return {};
  const {
    realname,
    location,
    description,
    profileurl,
    username
  } = result.person;
  return {
    realName: realname ? realname._content : "",
    location: location ? location._content : "",
    description: description ? description._content : "",
    profileUrl: profileurl ? profileurl._content : "",
    userName: username ? username._content : ""
  };
};
