const axios = require('axios');

exports.searchMusic = async (q)=>{
  const res = await axios.get(
    `https://musicdata-api.p.rapidapi.com/search?q=${q}`,
    {
      headers:{
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host':'musicdata-api.p.rapidapi.com'
      }
    }
  );
  return res.data;
};
