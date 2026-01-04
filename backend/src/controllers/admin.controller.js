// src/controllers/admin.controller.js
const { getAllUsers, deleteUser } = require('../models/user.models');

exports.users = async (req, res) => {
  res.json(await getAllUsers()); //
};

exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.json({ message: 'User berhasil dihapus oleh Admin' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus user' });
  }
};