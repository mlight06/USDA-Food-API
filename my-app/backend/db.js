const { Pool } = require('pg');

// Include password in config if needed

const config = {
  host: 'localhost',
  port: 5432,
  database: 'usda',
  user: 'michael',

  // user: process.env.DB_USER || 'michael',
  // password: process.env.DB_PASSWORD,
};

const pool = new Pool(config);

module.exports = pool;