import axios from 'axios';

const API = 'http://localhost:3000/api';

export const generateApiKey = async (userId, token) => {
  const res = await axios.post(
    `${API}/admin/apikey/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
};
