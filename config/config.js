// ========================================== //
//         Configuraciones Globales           //
// ========================================== //

// Puerto habilitado
port = process.env.PORT || 3000;


// Base de datos
var mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'huerto010',
    database: 'sisgeorem'
});