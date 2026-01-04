const rapid = require('../services/rapidapi.service');

exports.search = async (req,res)=>{
  const data = await rapid.searchMusic(req.query.q);
  res.json(data);
};
