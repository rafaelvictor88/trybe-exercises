CREATE INDEX postal_code_adress_index ON sakila.address(postal_code);

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost: 0.95 (Non-Unique Key Lookup)

DROP INDEX postal_code_adress_index ON sakila.address;

-- Mensure o custo com a seguinte query após dropar o INDEX:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost: 65.40 (Full Table Search)