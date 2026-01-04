const db = require('./db');

exports.createUser = async (name, email, password) => {
  const [result] = await db.query(
    'INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)',
    [name, email, password, 'user']
  );
  return result.insertId;
};

exports.findByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

exports.getAllUsers = async () => {
  const [rows] = await db.query('SELECT id,name,email,role FROM users');
  return rows;
};

// TAMBAHKAN INI: Fungsi untuk menghapus user dari tabel users
exports.deleteUser = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result;
};