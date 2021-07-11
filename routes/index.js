var path = require("path");
// const fundme = require("./webapp/fundme");
const mobilefundme = require("./mobile/fundme");

module.exports = (app) => {
  var Router = app.Router();
  var router = new Router(path.join(__dirname,'routes'));
  // app.use("/api/v1/webapp/fundme", fundme);
  router.use("/api/v1/mobileapp/fundme", mobilefundme);
  // app.use("/api/v2/fund") for a newer version of api;
};
