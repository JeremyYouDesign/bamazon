DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT,
    product_name VARCHAR(150),
    department_name VARCHAR(100),
    price DECIMAL(13, 2),
    stock_quantity INT
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(723001, "Dyson SuperSonic Leaf Blower", "Home", 1299, 8),
(723002, "Wisteria Peach Scented Bubbles", "Toys and Games", 19.99, 60),
(723003, "Batmobile", "Vehicles and Transportation", 17899999, 10),
(723004, "Louis Vuitton Disposable Trash Bags", "Home", 1750, 12),
(723005, "Tiffany & Co. Sterling Silver Cheese Knife", "Kitchen and Cooking", 499.99, 25),
(723006, "Organic Mini Peanut Butter Crackers", "Food and Groceries", 2.99, 200),
(723007, "Corgi Coffee Mug", "Kitchen and Cooking", 12.99, 75),
(723008, "Hand Painted Chocolate Truffles", "Food and Groceries", 49.99, 30),
(723009, "Lady Gaga Meat Dress", "Food and Groceries", 3200, 3),
(723010, "Tears-of-My-Enemies Bath Foam", "Beauty and Personal Care", 29.99, 45),
(723011, "32:1 Death Star Replica", "Miscellaneous", 169.99, 80),
(723012, "Britney Spears Singing Fembot", "Miscellaneous", 23000, 1);
