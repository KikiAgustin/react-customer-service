function encodeUserid(userid) {
  return btoa(userid);
}

function decodeUserid(encodeUserid) {
  try {
    return atob(encodeUserid);
  } catch (error) {
    throw new Error("Decoding failed. Invalid encode user Id");
  }
}

export { encodeUserid, decodeUserid };
