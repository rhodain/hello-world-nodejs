const express = require('express');
const app = express();
const port = 8080;

const APP_VERSION = "1.0";
const GREETING_MESSAGE = process.env.GREETING_MESSAGE || `Hello World v${APP_VERSION}`;

app.get('/', (req, res) => {
  res.send(`${GREETING_MESSAGE} from host: ${process.env.HOSTNAME || 'unknown'}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});