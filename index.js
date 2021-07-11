const express = require("express");
require("dotenv").config();
const { PORT } = process.env; //get sensitive info from .env file
const MongoDBSetup = require("./database/mongoose");
const RedisDBSetup = require("./database/redis");
const routes = require("./routes");
const middlewares = require("./middlewares");

const app = express();

<<<<<<< HEAD:index.js


=======
//initialise RedisDB database connection
const RedisDB = new RedisDBSetup();
const redisClient = RedisDB.connect();
//initialise MongoDB database connection
MongoDBSetup(app);
>>>>>>> eb3dc30232a7deab8170bbea191d0a6dc579c4ed:node_src/index.js
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// middlewares for app
middlewares(app);

// export app instance to be used in the routes file
routes(app);
<<<<<<< HEAD:index.js

//initialise database connection
dbSetup(app);
=======
module.exports = redisClient;
>>>>>>> eb3dc30232a7deab8170bbea191d0a6dc579c4ed:node_src/index.js
