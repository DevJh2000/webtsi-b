/*******************************************************************************************************/
// Requerimos las dependencias //
/*******************************************************************************************************/
const dotenv = require("dotenv");

/*******************************************************************************************************/
// Habilitamos las variables de entorno //
/*******************************************************************************************************/
dotenv.config();

/*******************************************************************************************************/
// Variables de la Aplicación //
/*******************************************************************************************************/
exports.appHost = process.env.APP_QW_HOST || ""; // Host de la Aplicación
exports.appNombre = process.env.APP_QW_NAME || ""; // Nombre de la aplicación
exports.appAutor = process.env.APP_QW_AUTHOR || ""; // Autor de la aplicación
exports.appPort = process.env.PORT || process.env.APP_QW_PORT; // Puerto de la aplicación
exports.appSecret = process.env.APP_QW_SECRET_TEXT || ""; // Texto secreto de la aplicación

// /*******************************************************************************************************/
// // Variables de la Base de Datos //
// /*******************************************************************************************************/
exports.dbHost = process.env.APP_QW_DB_HOST || ""; // Host de la base de datos
exports.dbDriver = process.env.APP_QW_DB_DRIV || ""; // Driver de la base de datos
exports.dbPort = process.env.APP_QW_DB_PORT || 5432; // Puerto de la base de datos
exports.dbName = process.env.APP_QW_DB_NAME || ""; // Nombre de la base de datos
exports.dbUser = process.env.APP_QW_DB_USER || ""; // Usuario de la base de datos
exports.dbPwd = process.env.APP_QW_DB_PWD || ""; // Contraseña de la base de datos
// /*******************************************************************************************************/
// // otras variables //
// /*******************************************************************************************************/
exports.otGooglePws = process.env.APP_QW_GOOGLE_PWS || ""; // pass
exports.otGoogleUser = process.env.APP_QW_GOOGLE_USER || ""; // user
exports.otEmail = process.env.APP_QW_GOOGLE_EMAIL || ""; // email
