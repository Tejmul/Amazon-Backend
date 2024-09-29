const express = require('express');
const authRoutes = require('../routes/authRoutes');
const songRoutes = require('../routes/songRoutes');
const homeRoutes = require('../routes/homeRoutes');
const app = require('./app');
const {connectDB} = require('../config/db')

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', songRoutes);
app.use('/api', homeRoutes);

const PORT = process.env.PORT || 5002;
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
