create DATABASE holamundo;
show databases;
use holamundo;
CREATE TABLE animales (
	id int ,
    tipo varchar(255),
    estado varchar(255),
    PRIMARY KEY(id)
);
-- INSERT INTO animales (tipo, estado) VALUES ('chanchito','Feliz');
ALTER TABLE animales MODIFY COLUMN id int auto_increment;

SHOW CREATE TABLE animales;
CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
TRUNCATE animales; 
INSERT INTO animales (tipo, estado) VALUES ('chanchito','Feliz');
INSERT INTO animales (tipo, estado) VALUES ('dragon','Feliz');
INSERT INTO animales (tipo, estado) VALUES ('felipe','triste');

SELECT * FROM animales;
SELECT * FROM animales WHERE id = 1;
SELECT * FROM animales WHERE estado = 'feliz';
SELECT * FROM animales WHERE estado = 'feliz' AND tipo = "chanchito";
SELECT * FROM animales WHERE estado = 'feliz' AND tipo = "felipe";


UPDATE animales SET estado = 'Feliz' WHERE id = 3;
SELECT * FROM animales;

DELETE FROM animales WHERE estado = 'feliz';

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
DELETE FROM animales WHERE id = 3;
UPDATE animales set estado = 'triste' where tipo = 'dragon' ; 

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

