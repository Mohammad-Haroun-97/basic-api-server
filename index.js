'use strict';

const app=require('./src/server')
const { db } = require('./src/models/index');

// we first connect to the DB, then we run our server
db.sync().then(() => {
    // kickstart the server
    app.start(); // will start our server
  }).catch(console.error);