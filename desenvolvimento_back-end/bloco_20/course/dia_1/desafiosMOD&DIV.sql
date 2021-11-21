-- Desafios com MOD  e DIV
-- 1:
SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- 2:
SELECT CONCAT('Podemos levar ao cinema, ', 220 DIV 12, ' grupos de 12 pessoas, sem niguém ficar de fora.') AS resposta;

-- 3:
SELECT 
    IF(220 MOD 12 != 0,
        CONCAT('Não teremos lugares sobrando, porém ',
                220 MOD 12,
                ' pessoas das 220 iniciais, ficarão de fora.'),
        'Não teremos lugares sobrando, todas as 220 pessoas conseguiram entrar.') AS resposta;