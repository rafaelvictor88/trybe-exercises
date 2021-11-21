-- Operações Matemáticas Básicas
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate AS SOMA FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate AS SUBTRAÇÃO FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate AS DIVISÃO FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate AS MULTIPLICAÇÃO FROM sakila.film LIMIT 10;