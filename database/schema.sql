DROP DATABASE ReviewDB;
-- DROP DATABASE IF EXISTS ReviewDB;

CREATE DATABASE ReviewDB;

USE ReviewDB;

CREATE TABLE Food (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  price int not null,
  rating int not null
);

