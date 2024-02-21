const mysql = require('mysql2/promise');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: 'amano',
    database: 'test_db',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});


// pool.query('SELECT 1 + 1 AS solution').then(r => {
//     console.log("r is ", r);
// });

exports.pool = pool