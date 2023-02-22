use holamundo;
CREATE TABLE user(
	id int not null auto_increment,
    name varchar(50),
    edad int not null,
    email varchar(100) not null,
    PRIMARY KEY(id)
);
INSERT INTO user (name, edad, email) values ('Oscar', 25, 'oscar@gmail.com');
INSERT INTO user (name, edad, email) values ('Layla', 15, 'layla@gmail.com');
INSERT INTO user (name, edad, email) values ('Nicolas', 36, 'nico@gmail.com');
INSERT INTO user (name, edad, email) values ('Chanchito', 7, 'chanchito@gmail.com');

SELECT * from user;
select * from user limit 1;
select * from user where edad > 15;
select * from user where edad >= 15;
select * from user where edad > 20 and email = 'nico@gmail.com';
select * from user where edad > 20 or  email = 'layla@gmail.com';
-- Negacion
select * from user where email != 'layla@gmail.com';
-- Ver datos entre unos parametros concretos(between and) dos´patrametros between firt_parameter and second_parameter.
select * from user where edad between 15 and 30;
select * from user where email like '%gmail%';
select * from user where email like '%gmail';
select * from user where email like 'oscar%';
select * from user order by edad asc;
select * from user order by edad desc;

select max(edad) as mayor from user;
select min(edad) as menor from user;
 select id, name from user;
 select id , name as nombre from user;