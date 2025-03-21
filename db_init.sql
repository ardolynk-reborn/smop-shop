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
('PLN', 'Polish Złoty'),
('SEK', 'Swedish Krona'),
('NOK', 'Norwegian Krone'),
('DKK', 'Danish Krone');

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

insert into currency_rates (id, from_currency_id, to_currency_id, rate, since) values

-- USD-based conversions
(1, 'USD', 'EUR', 0.91, '2024-01-01 10:00:00'),
(2, 'USD', 'JPY', 151.23, '2024-01-02 09:30:00'),
(3, 'USD', 'GBP', 0.78, '2024-01-03 08:45:00'),
(4, 'USD', 'CNY', 7.12, '2024-01-04 07:50:00'),
(5, 'USD', 'INR', 82.34, '2024-01-05 12:15:00'),
(6, 'USD', 'AUD', 1.52, '2024-01-06 14:20:00'),
(7, 'USD', 'CAD', 1.34, '2024-01-07 16:05:00'),
(8, 'USD', 'CHF', 0.88, '2024-01-08 17:30:00'),
(9, 'USD', 'MXN', 17.45, '2024-01-09 18:40:00'),
(10, 'USD', 'UAH', 38.50, '2024-01-10 19:00:00'),
(11, 'USD', 'BRL', 5.10, '2024-01-11 20:10:00'),
(12, 'USD', 'ZAR', 18.20, '2024-01-12 21:15:00'),
(13, 'USD', 'PLN', 4.12, '2024-01-13 22:25:00'),
(14, 'USD', 'SEK', 10.45, '2024-01-14 23:30:00'),
(15, 'USD', 'NOK', 10.80, '2024-01-15 08:00:00'),
(16, 'USD', 'DKK', 6.75, '2024-01-16 09:10:00'),

-- EUR-based conversions
(17, 'EUR', 'USD', 1.10, '2024-01-01 10:05:00'),
(18, 'EUR', 'JPY', 166.50, '2024-01-02 09:40:00'),
(19, 'EUR', 'GBP', 0.86, '2024-01-03 08:55:00'),
(20, 'EUR', 'CNY', 7.80, '2024-01-04 07:55:00'),
(21, 'EUR', 'INR', 90.10, '2024-01-05 12:20:00'),
(22, 'EUR', 'AUD', 1.65, '2024-01-06 14:25:00'),
(23, 'EUR', 'CAD', 1.45, '2024-01-07 16:10:00'),
(24, 'EUR', 'CHF', 0.98, '2024-01-08 17:35:00'),
(25, 'EUR', 'MXN', 18.90, '2024-01-09 18:45:00'),
(26, 'EUR', 'UAH', 41.20, '2024-01-10 19:05:00'),
(27, 'EUR', 'BRL', 5.55, '2024-01-11 20:15:00'),
(28, 'EUR', 'ZAR', 19.30, '2024-01-12 21:20:00'),
(29, 'EUR', 'PLN', 4.40, '2024-01-13 22:30:00'),
(30, 'EUR', 'SEK', 11.20, '2024-01-14 23:35:00'),
(31, 'EUR', 'NOK', 11.50, '2024-01-15 08:10:00'),
(32, 'EUR', 'DKK', 7.45, '2024-01-16 09:15:00'),

-- Additional rates with different "since" dates for non-unique pairs
(33, 'USD', 'EUR', 0.92, '2024-02-01 10:00:00'),
(34, 'USD', 'JPY', 152.00, '2024-02-02 09:30:00'),
(35, 'EUR', 'USD', 1.09, '2024-02-01 10:05:00'),
(36, 'EUR', 'GBP', 0.87, '2024-02-03 08:55:00'),
(37, 'USD', 'GBP', 0.79, '2024-02-04 07:50:00'),
(38, 'USD', 'CAD', 1.36, '2024-02-07 16:05:00'),
(39, 'EUR', 'CHF', 0.99, '2024-02-08 17:35:00'),
(40, 'USD', 'INR', 83.00, '2024-02-05 12:15:00');

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
