//rutas
const bannerRoutes = require("./banner.routes");
const plansRoutes = require("./plans.routes");
const profitsRoutes = require("./profits.routes");
const planproRoutes = require("./planpro.routes");
const task = require("./task.routes");
const email = require("./sendEmail.routes");

const routes = (app) => {
  app.use("/", bannerRoutes);
  app.use("/", plansRoutes);
  app.use("/", profitsRoutes);
  app.use("/", planproRoutes);
  app.use("/", task);
  app.use("/", email);
};

module.exports = routes;
