SELECT * FROM film;
SELECT * FROM film LIMIT 20;
SELECT title, release_year, length, rating, replacement_cost FROM film LIMIT 20;
SELECT title, release_year, length, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost ASC LIMIT 20;