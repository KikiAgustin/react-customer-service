import { encodeUserid, decodeUserid } from "../utils";

const api = (() => {
  const BASE_URL = "https://www.dfunstation.com/api4/consultant/index.php/";

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function login({ username, password }) {
    const dataString = `username=${username}&password=${password}`;

    try {
      const response = await fetch(`${BASE_URL}member/login_cs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: dataString,
      });

      const responseJson = await response.json();

      if (responseJson.status !== "OK") {
        throw new Error("Login gagal dilakukan, silahkan coba kembali");
      }

      const token = encodeUserid(responseJson.userid);

      return token;
    } catch (error) {
      console.log("ada error nich");
    }
  }

  async function getOwnProfile() {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      const response = await fetch(
        `${BASE_URL}profile/profile/${userid}/userid/`
      );

      const responseJson = response.json();

      return responseJson;
    }

    return null;
  }

  return {
    putAccessToken,
    getAccessToken,
    login,
    getOwnProfile,
  };
})();

export default api;
