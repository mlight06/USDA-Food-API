DROP DATABASE IF EXISTS usda;

CREATE DATABASE usda;

\c usda;

CREATE TABLE cart (
  id BIGSERIAL PRIMARY KEY,
  description VARCHAR,
  calories INTEGER,
  protein INTEGER,
  fat INTEGER,
  carbohydrate INTEGER,
  sugar INTEGER
);

-- Command for executing this file into your local psql
-- psql -h localhost -d postgres -U [your username] -f ./my-app/backend/schema.SQL