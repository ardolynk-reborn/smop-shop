drop table if exists currencies;
create table currencies (
  id char(3) primary key,
  name varchar(255)
);

insert into currencies (id, name)
values
('USD', 'United States Dollar'),
('EUR', 'Euro'),
('JPY', 'Japanese Yen'),
('GBP', 'British Pound'),
('CNY', 'Chinese Renminbi'),
('INR', 'Indian Rupee'),
('AUD', 'Australian Dollar'),
('CAD', 'Canadian Dollar'),
('CHF', 'Swiss Franc'),
('MXN', 'Mexican Peso'),
('UAH', 'Ukrainian Hryvnia'),
('BRL', 'Brazilian Real'),
('ZAR', 'South African Rand'),
('PLN', 'Polish Złoty');

drop table if exists currency_rates;
create table currency_rates (
  id int primary key,
  from_currency_id varchar(3) not null,
  to_currency_id varchar(3) not null,
  rate decimal(10, 4) not null,
  since datetime not null,
  foreign key (from_currency_id) references currencies(id),
  foreign key (to_currency_id) references currencies(id)
);

create index idx_currency_rates_since on currency_rates (since);

insert into currency_rates (id, from_currency_id, to_currency_id, rate, since)
values
(1, 'USD', 'EUR', 0.8800, '2022-09-01 00:00:00'),
(2, 'USD', 'JPY', 114.5000, '2022-09-01 00:00:00'),
(3, 'USD', 'GBP', 0.7600, '2022-09-01 00:00:00'),
(4, 'EUR', 'USD', 1.1360, '2022-09-01 00:00:00'),
(5, 'EUR', 'JPY', 130.2000, '2022-09-01 00:00:00'),
(6, 'EUR', 'GBP', 0.8600, '2022-09-01 00:00:00'),
(7, 'JPY', 'USD', 0.0087, '2022-09-01 00:00:00'),
(8, 'JPY', 'EUR', 0.0077, '2022-09-01 00:00:00'),
(9, 'JPY', 'GBP', 0.0066, '2022-09-01 00:00:00'),
(10, 'GBP', 'USD', 1.3160, '2022-09-01 00:00:00'),
(11, 'GBP', 'EUR', 1.1600, '2022-09-01 00:00:00'),
(12, 'GBP', 'JPY', 150.5000, '2022-09-01 00:00:00'),
(13, 'USD', 'PLN', 4.3500, '2022-09-15 00:00:00'),
(14, 'EUR', 'PLN', 4.9000, '2022-09-15 00:00:00'),
(15, 'PLN', 'USD', 0.2300, '2022-09-15 00:00:00'),
(16, 'PLN', 'EUR', 0.2000, '2022-09-15 00:00:00'),
(17, 'USD', 'EUR', 0.8850, '2022-10-01 00:00:00'),
(18, 'USD', 'JPY', 116.0000, '2022-10-01 00:00:00'),
(19, 'USD', 'GBP', 0.7700, '2022-10-01 00:00:00'),
(20, 'EUR', 'USD', 1.1300, '2022-10-01 00:00:00');

create table products (
  id int primary key,
  name varchar(255) not null,
  description text,
  amount int,
  price decimal(10, 2) not null,
  currency varchar(3) not null default 'usd'
);

insert into products (id, name, description, amount, price, currency)
values
(1, 'T-Shirt', 'White T-Shirt', 25, 9.99, 'USD'),
(2, 'Jeans', 'Blue Jeans', 15, 29.99, 'USD'),
(3, 'Dress Shirt', 'Arnaud Rousseau Dress Shirt', 10, 19.99, 'USD'),
(4, 'Sweater', 'Gray Sweater', 18, 39.99, 'USD'),
(5, 'Jacket', 'Leather Jacket', 8, 99.99, 'USD'),
(6, 'Boots', 'Black Boots', 14, 69.99, 'USD'),
(7, 'Sneakers', 'White Sneakers', 3, 49.99, 'USD'),
(8, 'Dress Shoes', 'Black Dress Shoes', 5, 79.99, 'USD'),
(9, 'Sandals', 'Brown Sandals', 30, 29.99, 'USD'),
(10, 'Hoodie', 'Gray Hoodie', 24, 39.99, 'USD'),
(11, 'Scarf', 'Red Scarf with brass buttons', 17, 9.99, 'USD'),
(12, 'Gloves', 'Black Gloves', 20, 14.99, 'USD'),
(13, 'Hat', 'Baseball Cap', 16, 19.99, 'USD'),
(14, 'Socks', 'Sensoria Fitness Socks', 28, 4.99, 'USD'),
(15, 'Belt', 'Leather Belt', 12, 29.99, 'USD'),
(16, 'Trousers', 'Black Wool Trousers', 24, 39.99, 'USD'),
(17, 'Skirt', 'Red Skirt', 4, 29.99, 'USD'),
(18, 'Dress', 'Black Dress', 5, 49.99, 'USD'),
(19, 'Jumpsuit', 'Bonnie Cashin jumpsuit, red leather with mohair knitted hood and sleeves', 1, 59.99, 'USD'),
(20, 'Coat', 'Polo Ralph Lauren winter coat jacket', 1, 99.99, 'USD'),
(21, 'Blazer', 'Navy Blazer', 3, 79.99, 'USD'),
(22, 'Cardigan Dress', 'Mary Quant ''Rex Harrison'' cardigan dress chosen as Dress of the Year', 1, 39.99, 'USD'),
(23, 'Leggings', 'Black Leggings', 27, 19.99, 'USD'),
(24, 'Tights', 'Opaque Tights with visually separated panty section in limoges blue', 4, 9.99, 'USD'),
(25, 'Shorts', 'Alpenflage Shorts', 8, 24.99, 'USD'),
(26, 'Sunglasses', 'American Optical Original Pilot Aviator sunglasses', 6, 49.99, 'USD'),
(27, 'Watch', 'TJ Collaboration Watch on French leather', 5, 99.99, 'USD'),
(28, 'Wallet', 'Aarong leather wallet', 12, 29.99, 'USD'),
(29, 'Bag', 'Tote Bag', 15, 0.99, 'USD'),
(30, 'Backpack', 'Gray Backpack', 12, 59.99, 'USD'),
(31, 'Shawl', 'Wool Shawl', 2, 29.99, 'USD'),
(32, 'Gloves', 'Woolean Gloves', 24, 19.99, 'USD'),
(33, 'Hats', 'Beanies', 10, 14.99, 'USD'),
(34, 'Scarves', 'Silk Scarves', 30, 24.99, 'USD'),
(35, 'Belts', 'Leather Belts', 14, 29.99, 'USD'),
(36, 'Suspenders', 'Clip-on Suspenders', 30, 19.99, 'USD'),
(37, 'Cufflinks', 'Silver Cufflinks', 3, 49.99, 'USD'),
(38, 'Tie', 'Silk Tie', 15, 29.99, 'USD'),
(39, 'Jacket', 'Striped Jacket', 8, 74.99, 'USD'),
(40, 'Shoes', 'Brown Loafers', 4, 79.99, 'USD'),
(41, 'Boots', 'Black RM Williams comfort craftsman boots', 2, 99.99, 'USD'),
(42, 'Sandals', 'Flip Flops', 35, 19.99, 'USD'),
(43, 'Sneakers', 'Running Shoes', 5, 69.99, 'USD'),
(44, 'Dress Shoes', 'Brown Dress Shoes', 8, 99.99, 'USD'),
(45, 'Jacket', 'Denim Jacket', 4, 59.99, 'EUR'),
(46, 'Coat', 'Trench Coat', 1, 129.99, 'USD'),
(47, 'Pants', 'Khaki Cargo Pants', 6, 39.99, 'USD'),
(48, 'Shorts', 'Denim Shorts', 19, 29.99, 'EUR'),
(49, 'Skirt', 'Pleated Skirt', 6, 49.99, 'USD'),
(50, 'Dress', 'Marni cocktail dress with large paillettes', 2, 129.99, 'USD'),
(51, 'Jumpsuit', 'Sequin Mohair Jumpsuit, Fables by Barrie', 1, 199.99, 'EUR'),
(52, 'Top', 'Blouse', 20, 29.99, 'EUR'),
(53, 'Bottom', 'Men''s Leggings', 15, 19.99, 'USD'),
(54, 'Dress', 'Maxi Dress', 4, 59.99, 'USD'),
(55, 'Jacket', 'Pelle Pelle Mens American Rebel Black Leather Jacket', 2, 149.99, 'EUR'),
(56, 'Coat', 'Dusty Roy Parka', 1, 199.99, 'USD'),
(57, 'Pants', 'Tracksuit Bottoms', 14, 29.99, 'EUR'),
(58, 'Sweater', 'CBS The Green (Crew Neck Jumper)', 8, 49.99, 'EUR'),
(59, 'Shirt', 'Bias Yoke Flannel Shirt', 10, 39.99, 'USD'),
(60, 'Vest', 'Adidas Helionic Down vest', 5, 69.99, 'EUR');
