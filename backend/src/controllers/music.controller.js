const rapidapi = require('../services/rapidapi.service');

exports.getMusicData = async (req, res) => {
  try {
    const { category, action } = req.params;
    // req.query akan menampung 'q', 'spotify_track_id', 'isrc', dll
    const data = await rapidapi.fetchFromRapidAPI(category, action, req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data dari Songstats API' });
  }
};