-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

-- Exemplos práticos

-- INDEX
CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

DROP INDEX index_first_name ON sakila.actor;

-- FULLTEXT INDEX
CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- UNIQUE INDEX
-- Sintax:
CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);
DROP INDEX nome_do_indice ON nome_tabela;

-- Mostrando detalhes sobre índice em uma tabela:
SHOW INDEX FROM sakila.actor;

-- Verificando Performance com o UNIQUE INDEX (Query cost 1.00/Single Row):
CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

-- Verificando Performance sem o UNIQUE INDEX (Query cost 1.00/Single Row):
DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';
