DROP DATABASE IF EXISTS usda;

CREATE DATABASE usda;

\c usda;

CREATE TABLE cart (
  id BIGSERIAL,
  description VARCHAR,
  calories DECIMAL,
  protein DECIMAL,
  fat DECIMAL,
  carbohydrate DECIMAL,
  sugar DECIMAL,
  PRIMARY KEY (id)
);

-- Command for executing this file into your local psql
-- psql -h localhost -d postgres -U [your username] -f ./my-app/backend/schema.SQL