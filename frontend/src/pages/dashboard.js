// src/pages/dashboard.js
import { useState } from 'react';
import { getYoutubeGlobal } from '../api/music.api';

export default function Dashboard() {
  const [apiKey, setApiKey] = useState('');
  const [country, setCountry] = useState('ID'); // Default Indonesia
  const [timeframe, setTimeframe] = useState('day');
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      // getYoutubeGlobal sekarang menerima parameter pencarian
      const res = await getYoutubeGlobal(country, timeframe, apiKey);
      setData(res);
    } catch {
      alert('Pencarian gagal: API Key salah atau limit habis');
    }
  };

  return (
    <div>
      <h2>Pencarian Musik Global (Client)</h2>
      <input placeholder="API Key" onChange={e => setApiKey(e.target.value)} />
      <input placeholder="Kode Negara (contoh: ID, US)" onChange={e => setCountry(e.target.value)} />
      <select onChange={e => setTimeframe(e.target.value)}>
        <option value="day">Harian</option>
        <option value="week">Mingguan</option>
      </select>
      <button onClick={handleSearch}>Cari Data</button>

      {data && (
        <div style={{ marginTop: '20px' }}>
          <h3>Hasil Pencarian:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}