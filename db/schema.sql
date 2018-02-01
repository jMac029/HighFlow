### Schema

CREATE DATABASE highview_db;
USE highview_db;

CREATE TABLE growers
(
	id int NOT NULL AUTO_INCREMENT,
	grower_name varchar(255) NOT NULL,
	location NOT NULL,
	email VARCHAR(255) NOT NULL,
	bio VARCHAR(280) NOT NULL,
	grow_method(280) NOT NULL,
	indoor BOOLEAN,
	strains VARCHAR(280),
	cycle VARCHAR(280) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE buyers
(
	id int NOT NULL AUTO_INCREMENT,
	buyer_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
