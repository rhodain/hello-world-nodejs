const express = require('express');
const app = express();
const port = 8080;
const GREETING_MESSAGE = "Hello World v1.0";
app.get('/', (req, res) => { res.send(GREETING_MESSAGE); });
app.listen(port, () => { console.log(`App listening on port ${port}`); });
