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

  async function changeOnlineStatus() {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      const response = await fetch(`${BASE_URL}konsultasi/cs-status/${userid}`);

      const responseJson = response.json();

      if (responseJson.online < 1) {
        return "offilne";
      } else {
        return "online";
      }
    }
  }

  async function getChatCustomer() {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      const response = await fetch(
        `${BASE_URL}konsultasi/chat-konsultan/${userid}/0/5/0/cs/`
      );

      const responseJson = await response.json();

      return responseJson.datalist;
    }

    return null;
  }

  async function getChatConsultan() {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      const response = await fetch(
        `${BASE_URL}konsultasi/chat-konsultan/${userid}/0/10/0/cscon/`
      );

      const responseJson = await response.json();

      return responseJson.datalist;
    }

    return null;
  }
  async function getDetailChatProfile(chatId) {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      if (chatId !== null) {
        try {
          const response = await fetch(
            `${BASE_URL}konsultasi/chat-start/${chatId}/${userid}/`,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const responseJson = await response.json();

          return responseJson;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    return null;
  }

  async function getDetailChat(chatId) {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      if (chatId !== null) {
        try {
          const formData = new URLSearchParams();
          formData.append("function", "update");
          formData.append("state", "");

          const response = await fetch(
            `${BASE_URL}member/chatkonsultan/${chatId}/${userid}/0/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: formData.toString(),
            }
          );

          const responseJson = await response.json();

          const messages = responseJson.text;

          const hasil = messages.map((item) => {
            const timeMatch = item.pesan.match(
              /<span class='time'>(.*?)<\/span>/
            );
            const time = timeMatch ? timeMatch[1] : null;

            const checkImage = item.pesan.match(
              /<img.*?src="(https:\/\/www\.dfunstation\.com\/images\/check(?:4)?\.svg)".*?>/
            );
            let checkValue = null;

            if (checkImage) {
              checkValue =
                checkImage[1] ===
                "https://www.dfunstation.com/images/check.svg";
            }

            const pesanMatch = item.pesan.match(/<p.*?>(.*?)<\/p>/s); // Gunakan 's' untuk menangkap newline
            let pesan = pesanMatch ? pesanMatch[1] : "";

            pesan = pesan.replace(/\n/g, "").trim();

            return {
              id: item.id,
              pesan: pesan,
              jam: time,
              check: checkValue,
            };
          });

          return hasil;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    return null;
  }

  async function getStatusType(chatId) {
    const token = getAccessToken();
    if (token !== null) {
      const userid = decodeUserid(token);
      if (chatId !== null) {
        try {
          const formData = new URLSearchParams();
          formData.append("function", "update");
          formData.append("state", "");

          const response = await fetch(
            `${BASE_URL}member/chatkonsultan/${chatId}/${userid}/0/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: formData.toString(),
            }
          );

          const responseJson = await response.json();

          const typeStatus = responseJson.is_ketik;

          return typeStatus;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    return null;
  }

  return {
    putAccessToken,
    getAccessToken,
    login,
    getOwnProfile,
    changeOnlineStatus,
    getChatCustomer,
    getChatConsultan,
    getDetailChatProfile,
    getDetailChat,
    getStatusType,
  };
})();

export default api;
