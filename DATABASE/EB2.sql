-- USA O BANCO DE DADOS
USE sql10348720;

-- INSERE TRÊS VALORES NA TABELA DE POSTAGENS
INSERT INTO `posts` (title, body, createdAt, updatedAt) VALUES ('Estágio Nave.rs', 'A Nave.rs precisa de um estagiário.',  NOW(), NOW());
INSERT INTO `posts` (title, body, createdAt, updatedAt) VALUES ('Oportunidades', 'A Nave.rs precisa de um funcionário.',  NOW(), NOW());
INSERT INTO `posts` (title, body, createdAt, updatedAt) VALUES ('Congratulations', 'A Nave.rs está se destacando!',  NOW(), NOW());
SELECT * FROM `posts`;

-- INSERE TRÊS VALORES NA TABELA DE COMENTÁRIOS
INSERT INTO `comments` (post_id, message, createdAt, updatedAt) VALUES (1, 'Eu sou capacitado para esta vaga!', NOW(), NOW());
INSERT INTO `comments` (post_id, message, createdAt, updatedAt) VALUES (2, 'Vou enviar um curriculum...', NOW(), NOW());
INSERT INTO `comments` (post_id, message, createdAt, updatedAt) VALUES (3, 'Parabéns aos envolvidos!', NOW(), NOW());
SELECT * FROM `comments`;