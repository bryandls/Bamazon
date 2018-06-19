CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,

  product_name VARCHAR(100),

  department_name VARCHAR(100),

  price INTEGER(10),

  stock_quantity INTEGER(10),

  PRIMARY KEY (item_id)
  );
  

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Samsung S7", "Electronics", 300, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone 6S", "Electronics", 200, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Alienware17", "Electronics", 1700, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MacBook Pro", "Electronics", 1500, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Nintendo Switch", "Electronics", 360, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Super Mario", "Video Games", 50, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone 6S Case", "Phone Accessories", 8, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone Car Charger", "Phone Accessories", 15, 53);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone Dock", "Phone Accessories", 9, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Gran Turismo", "Video Games", 40, 3);


SELECT * FROM products;





