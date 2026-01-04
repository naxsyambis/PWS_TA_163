const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
  const {name,email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  await db.query(
    'INSERT INTO users (name,email,password) VALUES (?,?,?)',
    [name,email,hash]
  );
  res.json({message:'registered'});
};

exports.login = async (req,res)=>{
  const {email,password} = req.body;
  const [[user]] = await db.query(
    'SELECT * FROM users WHERE email=?',
    [email]
  );
  if(!user) return res.sendStatus(401);
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.sendStatus(401);
  const token = jwt.sign(
    {id:user.id,role:user.role},
    process.env.JWT_SECRET
  );
  res.json({token});
};
