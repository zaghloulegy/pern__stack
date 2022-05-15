const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zag",
  password: "1581992",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
