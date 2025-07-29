const express = require('express');
const app = express();

// Use PORT environment variable if set, otherwise default to 3000
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from Express app!');
});

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
