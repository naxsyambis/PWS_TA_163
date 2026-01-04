import axios from 'axios';

const API = 'http://localhost:3000/api';

export const getYoutubeGlobal = async (apiKey) => {
  const res = await axios.get(
    `${API}/public/youtube/global/kr/daily`,
    {
      headers: {
        'x-api-key': apiKey
      }
    }
  );
  return res.data;
};
