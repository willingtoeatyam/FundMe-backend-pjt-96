<<<<<<< HEAD:routes/index.js
// const fundme = require("./webapp/fundme");
const mobilefundme = require("./mobile/fundme");

module.exports = (app) => {
  // app.use("/api/v1/webapp/fundme", fundme);
=======
//const fundme = require("./webapp/fundme");
const mobilefundme = require("./mobile/fundme");

module.exports = (app) => {
  //app.use("/api/v1/webapp/fundme", fundme);
>>>>>>> 7de4e8188860784ce4db77990e069bec7f5cc377:routes/index.js
  app.use("/api/v1/mobileapp/fundme", mobilefundme);
  // app.use("/api/v2/fund") for a newer version of api;
};
