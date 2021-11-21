SHOW COLUMNS FROM hr.countries;

-- DESAFIO 1:
ALTER TABLE hr.locations CHANGE COLUMN street_address adress VARCHAR(40);

-- DESAFIO 2:
ALTER TABLE hr.regions CHANGE COLUMN region_name region VARCHAR(25);

-- DESAFIO 3:
ALTER TABLE hr.countries CHANGE COLUMN country_name country VARCHAR(40);