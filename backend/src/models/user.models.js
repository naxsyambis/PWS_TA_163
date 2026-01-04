// src/models/user.models.js
const db = require('./db'); // Menggunakan koneksi yang sudah ada

// Fungsi yang sudah Anda miliki:
exports.createUser = async (name, email, password) => {
  const [result] = await db.query(
    'INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)',
    [name, email, password, 'user']
  );
  return result.insertId;
};

exports.findByEmail = async (email) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

exports.getAllUsers = async () => {
  const [rows] = await db.query('SELECT id,name,email,role FROM users');
  return rows;
};

// --- TAMBAHKAN KODE DI BAWAH INI ---

// Fungsi untuk menghapus user (Admin CRUD)
exports.deleteUser = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result;
};

// Fungsi untuk memperbarui data user (Admin CRUD)
exports.updateUser = async (id, name, email, role) => {
  const [result] = await db.query(
    'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
    [name, email, role, id]
  );
  return result;
};