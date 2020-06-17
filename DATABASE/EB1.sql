-- NAVE.RS API DATABASE
-- DROP TABLE `posts`
-- DROP TABLE `comments`
-- DELETE FROM `posts`
-- DELETE FROM `comments`

-- USA O BANCO DE DADOS
USE navers;

-- CRIA A TABELA POST
SELECT * FROM `posts`;
CREATE TABLE IF NOT EXISTS `posts` (`
id` INTEGER NOT NULL auto_increment , 
`title` VARCHAR(255),
 `body` VARCHAR(255),
 `createdAt` DATETIME NOT NULL,
 `updatedAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
 );
 
-- CRIA A TABELA COMMENT
SELECT * FROM `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
`id` INTEGER NOT NULL auto_increment, 
`message` VARCHAR(255), 
`post_id` INTEGER,
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 PRIMARY KEY (`id`)
 );

-- ADICIONA AS CONSTRAINTS NA TABELA COMMENT
ALTER TABLE `comments` ADD CONSTRAINT `fk_post_id` FOREIGN KEY (post_id) REFERENCES `posts` (id);
