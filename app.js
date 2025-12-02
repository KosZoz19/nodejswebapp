const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API for summary (placeholder)
app.get('/api/summary', (req, res) => {
  res.json({ summary: 'Sample summary data' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});