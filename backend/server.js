const app = require('./src/app');

// Mengambil PORT dari file .env atau menggunakan 3000 sebagai default
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});