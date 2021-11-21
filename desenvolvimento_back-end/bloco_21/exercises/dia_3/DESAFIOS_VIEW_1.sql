USE sakila;
CREATE VIEW film_with_categories AS
	SELECT F.title, C.category_id, C.name
    FROM film_category AS FC
    INNER JOIN film AS F
    ON FC.film_id = F.film_id
    INNER JOIN category AS C
    ON FC.category_id = C.category_id
    ORDER BY title;