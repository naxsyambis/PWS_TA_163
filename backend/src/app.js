require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/music', musicRoutes);
app.use('/admin', adminRoutes);

module.exports = app;
