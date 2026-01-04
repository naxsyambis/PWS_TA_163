const axios = require('axios');

exports.fetchFromRapidAPI = async (category, action, params = {}) => {
  const options = {
    method: 'GET',
    // Menggunakan Base URL Songstats sesuai file YAML
    url: `https://api.songstats.com/enterprise/v1/${category}/${action}`,
    params: params,
    headers: {
      // Pastikan API Key ini benar di file .env Anda
      'X-Songstats-Api-Key': process.env.RAPIDAPI_KEY, 
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(`API Error (${category}/${action}):`, error.response?.data || error.message);
    throw error;
  }
};