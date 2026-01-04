const axios = require('axios');

exports.getYoutubeGlobal = async (country, timeframe) => {
  const response = await axios.get(
    `https://${process.env.RAPIDAPI_HOST}/youtube/global/${country}/${timeframe}`,
    {
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.RAPIDAPI_HOST
      }
    }
  );

  return response.data;
};
