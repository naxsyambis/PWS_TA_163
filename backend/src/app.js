require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const publicRoutes = require('./routes/public.routes');

app.use(cors());
app.use(express.json());

// Daftarkan API rute
app.use('/api/auth', authRoutes);     // Untuk Login & Regis
app.use('/api/admin', adminRoutes);   // Untuk CRUD Admin
app.use('/api/public', publicRoutes); // Untuk Search Music (Client)

module.exports = app;
