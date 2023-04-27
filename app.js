const express = require('express');
const app = express();
const PORT = 7000;

app.get('/', (req, res) => {
  res.status(200).send('INDEX SAYFASI');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port..`);
});
