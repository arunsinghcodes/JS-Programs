-- Practice Questions

| id | name  | age | department  | salary | city      |
| -- | ----- | --- | ----------- | ------ | --------- |
| 1  | Arun  | 26  | Engineering | 80000  | Hyderabad |
| 2  | Rahul | 28  | HR          | 50000  | Delhi     |
| 3  | Priya | 25  | Engineering | 90000  | Bangalore |
| 4  | John  | 30  | Sales       | 65000  | Mumbai    |
| 5  | Neha  | 27  | Engineering | 85000  | Hyderabad |
| 6  | Amit  | 29  | Sales       | 70000  | Delhi     |


-- Using the employees table above, try writing these queries yourself:

-- Show only the name and city of all employees.
select name , city from employees;
-- Find employees whose salary is greater than 70000.
select salary from employees where salary > 70000;
-- Find all employees from Hyderabad.
select * from employees where city="Hyderabad";
-- Show employees ordered by age from oldest to youngest.
select * from employees ordered by age desc;
-- Display the top 2 highest-paid employees.
select * from employees  ordered by salary desc limit 2;
-- List all unique cities.
select distinct city form employees;
-- Find Engineering employees ordered by salary in descending order.
select * from employees where department = "Engineering" ordered by salary desc;
-- Find employees from Delhi or Mumbai.
select * from employees where city = "Delhi" or city="Mumbai";
-- Display only the names of employees with salary greater than 80000.
select name from employees where salary >= 80000;
-- Find the youngest employee.
select * from employees ordered by age asce limit 1;


-- Small Bonus Exercise

-- Without looking at the answers, write these three queries:

-- Find the highest-paid employee.
select * from employees ordered by salary desc limit 1;
-- Find the three youngest employees.
select * from employees ordered by age asc limit 3;
-- Find Engineering employees in Hyderabad, sorted by salary (highest first).
select * from employees where city = "Hyderabad" ordered by salary desc;
-- Second Highest Paid Employee
select * from employees ordered by desc limit 2 offset 1;
select * from employees where salary= (select MAX(salary) from employees where salary < (select MAX(salary) from employees));


-- Small Challenge (Slightly Harder)

-- Without using Google, write queries for these:

-- 1. Show employees whose salary is between 70000 and 90000.
select * from employees where salary > 70000 AND salary < 90000;
select * from employees where salary BETWEEN 70000 and 90000;
-- 2. Show employees whose city is Delhi or Hyderabad, ordered by name.
select * from employees where city = "Delhi" OR city ="Hyderabad" ordered by name asc;
select * from employees where city IN ('Delhi', 'Hyderabad') ordered by name;
-- 3. Show only name and department for employees not in Sales.
select name, department from employees  where department != "Sales";
-- 4. Show all employees whose name starts with A.
select * from employees where name like 'A%';

-- LIKE 'A%'
-- Arun
-- Amit
-- Ankit
-- Abhishek
-- Ashish

-- LIKE '%A';
-- Priya
-- Sneha

-- LIKE '%A%'
-- Arun
-- Rahul
-- Priya
-- Anand

-- (We haven't formally learned LIKE yet, but give it a try if you've seen it before.)

-- 5. Show the oldest Engineering employee.
select * from employees where department = "Engineering" ordered by age desc limit 1;


-- One Thing I Want You to Remember Forever

-- Every SQL query usually follows this pattern:

-- SELECT ...
-- FROM ...
-- WHERE ...
-- GROUP BY ...
-- HAVING ...
-- ORDER BY ...
-- LIMIT ...

-- Read it like a sentence:

-- Select these columns
-- From this table
-- Where these conditions are true
-- Group the rows (if needed)
-- Filter groups (if needed)
-- Order the results
-- Return only the first few rows

-- If you build your queries in this order, SQL becomes much easier to write.


-- Show employees whose name contains "ar".
select * from employees where name LIKE "%ar%";
-- Show employees whose city is not Hyderabad.
select * from employees where city != 'Hyderabad';
select * from employees where city <> 'Hyderabad';
-- Show the three youngest Sales employees.
select * from employees where department="sales" ordered by age asc limit 3; 
-- Show employees whose salary is 70000 or 90000 (not a range—exactly one of those two values).
select * from employees where salary =70000 or salary = 90000;
select * from employees where salary IN (70000, 90000);
-- Show employees whose name ends with "a".
select * from employees where name '%a';


| id | name  | age | department  | salary | city      |
| -: | ----- | --: | ----------- | -----: | --------- |
|  1 | Arun  |  26 | Engineering |  80000 | Hyderabad |
|  2 | Rahul |  28 | HR          |  50000 | Delhi     |
|  3 | Priya |  25 | Engineering |  90000 | Bangalore |
|  4 | John  |  30 | Sales       |  65000 | Mumbai    |
|  5 | Neha  |  27 | Engineering |  85000 | Hyderabad |
|  6 | Amit  |  29 | Sales       |  70000 | Delhi     |


-- GROUP BY

-- What's the average salary of everyone?

select AVG(salary) from employees;

-- What's the average salary for each department?

Select department, AVG(salary) from employees GROUP BY department;


-- GROUP BY + COUNT

-- How many employees are in each department?

select department, COUNT(*) from employees group by department;

-- 2. HAVING ⭐⭐⭐⭐

-- Here's a very important distinction:

-- WHERE filters rows.
-- HAVING filters groups.

-- Suppose we want:

-- Departments having more than 1 employee.

-- SELECT department, COUNT(*)
-- FROM employees
-- GROUP BY department
-- HAVING COUNT(*) > 1;

-- WHERE + GROUP BY + HAVING

-- This is extremely important.

-- Find departments with more than 1 employee, considering only employees earning more than 60000.

select department from where salary > 60000 GROUP By department having COUNT(*) > 1;

-- ⭐ WHERE vs HAVING

-- Memorize this:


| WHERE                | HAVING                  |
| -------------------- | ----------------------- |
| Filters rows         | Filters groups          |
| Before `GROUP BY`    | After `GROUP BY`        |
| Usually no aggregate | Commonly uses aggregate |
| `salary > 70000`     | `COUNT(*) > 2`          |


-- 3. JOINS ⭐⭐⭐⭐⭐

-- Now we're entering one of the most important SQL topics for backend interviews.

-- Real databases don't put everything into one table.

-- For example:

Users

| id | name  |
| -: | ----- |
|  1 | Arun  |
|  2 | Rahul |
|  3 | Priya |

Orders

|  id | user_id | amount |
| --: | ------: | -----: |
| 101 |       1 |    500 |
| 102 |       1 |    800 |
| 103 |       2 |    300 |


-- How do we get:

-- User name + order amount?

-- We need a JOIN.

select users.name , orders.amount from users Inner JOIN orders ON users.id = orders.user_id;


-- INNER JOIN means:

-- Give me rows where a matching record exists in both tables.

-- LEFT JOIN

-- Now:

-- SELECT users.name, orders.amount
-- FROM users
-- LEFT JOIN orders
-- ON users.id = orders.user_id;


-- This means:

-- Give me all users, even if they don't have an order.


-- Find all users who haven't placed an order.

-- SELECT users.name
-- FROM users
-- LEFT JOIN orders
-- ON users.id = orders.user_id
-- WHERE orders.id IS NULL;

-- Priya


-- RIGHT JOIN

-- Opposite direction:

-- SELECT users.name, orders.amount
-- FROM users
-- RIGHT JOIN orders
-- ON users.id = orders.user_id;


-- Challenge 1: Only customers with orders (INNER JOIN)
SELECT Customers.Name, Orders.Product 
FROM Customers 
INNER JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID;

-- Challenge 2: Every single customer (LEFT JOIN)
SELECT Customers.Name, Orders.Product 
FROM Customers 
LEFT JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID;

-- Challenge 3: Ghost Orders (RIGHT JOIN + NULL Filter)
SELECT Customers.Name, Orders.Product 
FROM Customers 
RIGHT JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.CustomerID IS NULL;


-- 4. SUBQUERIES ⭐⭐⭐⭐

-- You already predicted this earlier when we discussed the second-highest salary. 👏

-- A subquery is a query inside another query.

-- Example:

-- Find employees earning the maximum salary.

SELECT MAX(salary)
FROM employees;

SELECT *
FROM employees
WHERE salary = 90000;


SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);

-- Second Highest Salary

-- Now your earlier question.

SELECT MAX(salary)
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);


-- 5. WINDOW FUNCTIONS ⭐⭐⭐⭐⭐

-- This is one of the most important advanced SQL concepts for interviews.

-- The key difference:

-- GROUP BY

-- Combines rows.

-- Window function

-- Calculates something across rows without removing the individual rows.

-- For example: