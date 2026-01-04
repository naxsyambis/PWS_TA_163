import { generateApiKey } from '../api/admin.api';
import { getToken } from '../utils/auth';

export default function Admin() {
  const createKey = async () => {
    try {
      const token = getToken();
      const res = await generateApiKey(2, token); // user_id = 2
      alert('API Key: ' + res.apiKey);
    } catch {
      alert('Gagal generate API key');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={createKey}>Generate API Key User</button>
    </div>
  );
}
