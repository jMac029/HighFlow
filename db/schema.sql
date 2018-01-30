### Schema

CREATE DATABASE highview_db;
USE highview_db;

CREATE TABLE growers
(
	id int NOT NULL AUTO_INCREMENT,
	grower_name varchar(255) NOT NULL,
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
