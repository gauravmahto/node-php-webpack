/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import './globals';

import express from 'express';

// Import ends.

const log = console.log;

const app = express();

app.use(express.static(global.clientSrc));

app.listen(80, () => {
  log('Server started on port 80');
});
