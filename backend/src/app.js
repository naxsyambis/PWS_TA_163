require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes'); // Ubah dari public.routes ke music.routes
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/public', musicRoutes); // Endpoint tetap /api/public tapi menggunakan musicRoutes
app.use('/api/admin', adminRoutes);

module.exports = app;