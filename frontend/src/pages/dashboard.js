import { useState } from 'react';
import { getYoutubeGlobal } from '../api/music.api';

export default function Dashboard() {
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      const res = await getYoutubeGlobal(apiKey);
      setData(res);
    } catch {
      alert('API Key salah / limit tercapai');
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <input
        placeholder="Masukkan API Key"
        onChange={e => setApiKey(e.target.value)}
      />
      <button onClick={loadData}>Load Data</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
