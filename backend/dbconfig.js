const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Dede999",
    host: "localhost",
    port: 5432,
    database: "mahasiswadb"
});

module.exports = pool;