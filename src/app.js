const express = require("express");
const { json, urlencoded } = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const { platform } = require("os");
const { textSync } = require("figlet");
require("moment/locale/es");
require("colors");
const routes = require("./routes/routes");
const { con } = require("./db/connect");
const { appPort, appAutor, appHost, appNombre } = require("./config/settings");

const app = express();

app.use(json()); // Realiza un parse de los formatos aplication/json
app.use(urlencoded({ extended: false })); // Decodifica los datos enviados desde un formulario
app.use(cookieParser()); // Realiza un parse de la cookies en las peticiones http al servidor
app.use("*", cors()); // Permite acceder a recursos del servidor desde otros dominios
app.use(compression()); // Habilita compresión en todas las responses del servidor
app.use(logger("combined")); // Logger para ver las peticiones http al servidor

//Rutas de la app
routes(app);

//Conexion a db
const dbconnection = async () => {
  try {
    await con.authenticate();
    console.log(`💽 Conexión exitosa a PostgresSql`.green.bold);
    console.log(
      "********************************************************************************"
        .rainbow
    );
  } catch (error) {
    console.log("Error en la conexión: ".white.bold);
    console.log(error);
    console.log(
      "********************************************************************************"
        .rainbow
    );
  }
};

dbconnection();

//Servidor
app.listen(appPort, () => {
  console.log(
    "********************************************************************************"
      .rainbow
  );
  console.log(textSync(appAutor).blue.bold);
  console.log(
    "********************************************************************************"
      .rainbow
  );
  console.log(appNombre.red.bold);
  console.log(
    `🚀 ${platform().toUpperCase()} Servidor, listo en : `.yellow.bold +
      `${appHost}:${appPort}`.white.bold
  );
  console.log(
    "********************************************************************************"
      .rainbow
  );
});
