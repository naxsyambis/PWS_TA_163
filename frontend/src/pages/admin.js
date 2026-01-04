import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/admin.api';
import { getToken } from '../utils/auth';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const token = getToken();

  useEffect(() => {
    if (token) {
      loadUsers();
    }
  }, [token]);

  const loadUsers = async () => {
    try {
      const data = await getUsers(token);
      setUsers(data);
    } catch (err) {
      alert('Gagal mengambil daftar user');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus user ini?')) {
      try {
        await deleteUser(id, token);
        alert('User berhasil dihapus');
        loadUsers(); // Refresh daftar setelah menghapus
      } catch (err) {
        alert('Gagal menghapus user');
      }
    }
  };

  return (
    <div>
      <h2>Admin Panel - Kelola Client</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user.id)} style={{ color: 'red' }}>
                  Hapus Client
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}