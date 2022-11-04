const axios = require("axios");
require("dotenv").config();

const clientId = process.env.SPOTIFY_API_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const authToken = Buffer.from(`${clientId}:${clientSecret}`, "utf-8").toString(
  "base64"
);

const auth = () => {
  axios
    .post("https://accounts.spotify.com/api/token", {
      grant_type: "client_credentials",
    })
    .then((res) => res.json);
};

const getAuth = async () => {
  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = { grant_type: "client_credentials" };

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const getAudioFeatures_Track = async (track_id) => {
  const access_token = await getAuth();

  const api_url = `https://api.spotify.com/v1/audio-features/${track_id}`;
  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

console.log(getAudioFeatures_Track("07A0whlnYwfWfLQy4qh3Tq"));
