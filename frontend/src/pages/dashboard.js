// src/pages/dashboard.js
import { useState } from 'react';
import { getYoutubeGlobal } from '../api/music.api';
import { getToken } from '../utils/auth'; // Ambil token login

export default function Dashboard() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      const token = getToken(); // Token otomatis dari hasil login
      const res = await getYoutubeGlobal('ID', 'day', token); 
      setData(res);
    } catch {
      alert('Gagal memuat data. Pastikan Anda sudah login.');
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={loadData}>Cari Musik Terpopuler</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}