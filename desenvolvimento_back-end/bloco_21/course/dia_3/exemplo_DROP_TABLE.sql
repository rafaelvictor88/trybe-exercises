-- Para excluir uma tabela existente, você pode utilizar o comando DROP TABLE
DROP TABLE nome_da_tabela;

-- Você não conseguirá dropar (excluir) uma tabela que é referenciada por uma restrição de chave estrangeira
-- Por exemplo, tente dropar a tabela sakila.language com o comando abaixo:
DROP TABLE sakila.language;

-- Integridade referencial : Propriedade que afirma que todas as referências de chaves estrangeiras devem ser válidas.