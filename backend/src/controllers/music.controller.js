const rapidapi = require('../services/rapidapi.service');

exports.youtubeGlobal = async (req, res) => {
  try {
    const { country, timeframe } = req.params;
    const data = await rapidapi.getYoutubeGlobal(country, timeframe);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed fetch music data' });
  }
};
