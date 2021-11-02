'use strict';

//dependencies
const express=require('express');
require('dotenv').config();
const app=express();
const PORT =process.env.PORT ||3030

//modules
const errorHandler=require('./error-handlers/500.js');
const notFoundHandler=require('./error-handlers/404.js');
const logger=require('./middleware/ logger');
const foodRouter = require('./routes/food.route');
const clothesRouter = require('./routes/clothes.route')


//my app

app.use(logger);
app.use(express.json());
//routes






app.use(foodRouter);
app.use(clothesRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);




function start(){
  app.listen(PORT,()=>{
    console.log(`this is port ${PORT}`);
  });
}

module.exports={
  app:app,
  start:start,
};