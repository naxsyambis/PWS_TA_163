// src/pages/admin.js
import { useEffect, useState } from 'react';
import { getUsers, deleteUser, generateApiKey } from '../api/admin.api';
import { getToken } from '../utils/auth';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const token = getToken();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers(token);
    setUsers(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Hapus user ini?')) {
      await deleteUser(id, token);
      loadUsers(); // Refresh list
    }
  };

  return (
    <div>
      <h2>Admin Panel - Kelola Client</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>Hapus</button>
                <button onClick={async () => {
                  const res = await generateApiKey(u.id, token);
                  alert('Key baru: ' + res.apiKey);
                }}>Buat API Key</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}