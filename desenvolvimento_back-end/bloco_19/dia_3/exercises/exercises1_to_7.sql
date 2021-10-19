USE PecasFornecedores;
-- 1:
SELECT * FROM Pecas WHERE Name LIKE 'Gr%';
-- 2:
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
-- 3:
SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%N%';
-- 4:
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;
-- 5:
SELECT COUNT(*) FROM Fornecedores WHERE code LIKE '%F%';
-- 6:
SELECT * FROM Fornecimentos WHERE Preco BETWEEN 15 AND 41 ORDER BY Preco ASC;
-- 7:
SELECT COUNT(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';