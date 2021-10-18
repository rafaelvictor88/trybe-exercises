SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor; #R: 121;
SELECT * FROM actor ORDER BY last_name ASC, first_name DESC;