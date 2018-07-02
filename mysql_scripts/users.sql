use test;
CREATE TABLE `test`.`users` (
  `emailID` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NULL,
  `city` VARCHAR(100) NULL,
  PRIMARY KEY (`emailID`));

CREATE TABLE `test`.`todo` (
  `id` INT NOT NULL,
  `todotext` VARCHAR(100) NOT NULL,
  `completed` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
);

# SELECT * FROM `test`.`todo`;
# SELECT count(*) as `id` FROM `test`.`todo`;
#
# SELECT completed FROM `test`.`todo` WHERE id = 3
# UPDATE `test`.`todo` SET completed = !completed WHERE id = 3 ;
#
# DELETE FROM `test`.`todo`;
#
#
# INSERT INTO `test`.`todo` (id, todotext, completed) VALUES(0, 'abcd', false);

