USE Scientists;
-- 1:
SELECT * FROM Scientists WHERE name LIKE '%E%';
-- 2:
SELECT * FROM Projects WHERE code LIKE 'A%' ORDER BY Name;
-- 3:
SELECT Code, Name FROM Projects WHERE code LIKE '%3%' ORDER BY Name;
-- 4:
SELECT * FROM AssignedTo WHERE Project IN('AeH3', 'Ast3', 'Che1');
-- 5:
SELECT * FROM Projects WHERE Hours > 500;
-- 6:
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
-- 7:
SELECT Name, Code FROM Projects WHERE Name NOT LIKE 'A%';
-- 8:
SELECT Name FROM Projects WHERE Code LIKE '%H%';