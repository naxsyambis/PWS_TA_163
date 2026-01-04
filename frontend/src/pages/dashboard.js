import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [category, setCategory] = useState('tracks'); // Default tracks
  const [action, setAction] = useState('info');      // Default info

  const handleSearch = async () => {
    try {
      const token = getToken();
      // Menyusun parameter query (misal: spotify_track_id=xxx)
      const params = { spotify_track_id: searchId }; 
      
      const res = await axios.get(`http://localhost:3000/api/public/${category}/${action}`, {
        params: params,
        headers: { Authorization: `Bearer ${token}` }
      });
      setResult(res.data);
    } catch (err) {
      alert('Pencarian gagal: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Songstats Search</h2>
      
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="tracks">Tracks</option>
        <option value="artists">Artists</option>
        <option value="labels">Labels</option>
      </select>

      <select onChange={(e) => setAction(e.target.value)}>
        <option value="info">Get Info</option>
        <option value="stats">Current Stats</option>
        <option value="search">Search</option>
      </select>

      <input 
        placeholder="Masukkan Spotify ID..." 
        onChange={(e) => setSearchId(e.target.value)} 
      />
      
      <button onClick={handleSearch}>Cari Data</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}