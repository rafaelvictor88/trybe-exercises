SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT * FROM PiecesProviders.Provides  WHERE Provider = 'HAL' ORDER BY Price DESC;
SELECT COUNT(Provider) FROM PiecesProviders.Provides WHERE Piece = 1;