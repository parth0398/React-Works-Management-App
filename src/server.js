const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/save-description', (req, res) => {
  const { description } = req.body;
  console.log('Description received:', description);
  res.json({ message: 'Description saved successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:3000`);
});
