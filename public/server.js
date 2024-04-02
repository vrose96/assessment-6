const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')

var rollbar = new Rollbar({
  accessToken: '569c4581b6f34c8b9aef2c12641e1dda',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
