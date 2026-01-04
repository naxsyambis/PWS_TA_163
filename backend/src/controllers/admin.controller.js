const db = require('../models/db');
const { getAllUsers, deleteUser } = require('../models/user.models');

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

exports.removeUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.json({ message: 'User berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus user' });
  }
};