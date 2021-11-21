CREATE FULLTEXT INDEX category_name_index ON sakila.category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- Query cost: 0.35 (Fulltext Index Search)

DROP INDEX category_name_index ON sakila.category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- Query cost: 1.85 (Full Table Search)
