const { getAllUsers, deleteUser } = require('../models/user.models');

// Menampilkan semua user (Client)
exports.users = async (req, res) => {
  try {
    const data = await getAllUsers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data user' });
  }
};

// Menghapus user (CRUD Admin)
exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.json({ message: 'User berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus user' });
  }
};