CREATE TABLE `app_development`.`posts` ( `id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `content` VARCHAR(5000) NOT NULL , `date` DATETIME NOT NULL , `author` VARCHAR(255) NOT NULL , `category` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;