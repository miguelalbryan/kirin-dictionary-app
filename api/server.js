'use strict';

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path')

// 1. Create main express intance
const router = express();

// 2. Require routes
const { router: wordRoutes } = require('./routes/words/wordRoutes');

// 3. Require constants
const { URL, PORT } = require('./utils/constants');

// 4. Ensure that the router is using body parser to appropriately format incoming requests
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// 5. Utilise routes
const publicPath = path.resolve(__dirname, '..','build')
router.use('/',express.static(publicPath))
router.use('/api/words', wordRoutes);


// 6. Create a server from express instance
const server = http.createServer(router);

// 7. Start server
mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(async () => {
    console.log(`Connected to database at ${URL}`);
    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  })
