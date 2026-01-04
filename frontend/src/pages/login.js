import { useState } from 'react';
import { login } from '../api/auth.api';
import { saveToken } from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      const res = await login(email, password);
      saveToken(res.token);
      alert('Login berhasil');
    } catch {
      alert('Login gagal');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={submit}>Login</button>
    </div>
  );
}
