const db = require('../models/db');

exports.users = async (req,res)=>{
  if(req.user.role!=='admin') return res.sendStatus(403);
  const [rows] = await db.query('SELECT id,name,email FROM users WHERE role="client"');
  res.json(rows);
};

exports.deleteUser = async (req,res)=>{
  if(req.user.role!=='admin') return res.sendStatus(403);
  await db.query('DELETE FROM users WHERE id=?',[req.params.id]);
  res.json({message:'deleted'});
};
