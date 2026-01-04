import axios from 'axios';

const API_URL = 'http://localhost:3000/api/admin';

export const getUsers = async (token) => {
  const res = await axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const deleteUser = async (id, token) => {
  const res = await axios.delete(`${API_URL}/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

// Fungsi ini tetap ada jika Anda masih membutuhkannya
export const generateApiKey = async (userId, token) => {
  const res = await axios.post(`${API_URL}/apikey/${userId}`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};