-- Practice Questions

-- Using the employees table above, try writing these queries yourself:

-- Show only the name and city of all employees.
 select name , city from employees;
-- Find employees whose salary is greater than 70000.
select * from employees where salary > 70000;
-- Find all employees from Hyderabad.
select * from employees where city = 'Hyderabad';
-- Show employees ordered by age from oldest to youngest.
select * from employees  age order by age desc;
-- Display the top 2 highest-paid employees.
select * from employees   order by salary DESC limit 2;
-- List all unique cities.
select DISTINCT city from employees;
-- Find Engineering employees ordered by salary in descending order.
select * from employees where department = 'Engineering' order by salary DESC;
-- Find employees from Delhi or Mumbai.
select * from employees where city = 'Delhi' or city = 'Mumbai';
-- Display only the names of employees with salary greater than 80000.
select name from employees where salary > 80000;
-- Find the youngest employee.
select * from employees   order by age ASC limit 1;

-- | id | name  | age | department  | salary | city      |
-- | -- | ----- | --- | ----------- | ------ | --------- |
-- | 1  | Arun  | 26  | Engineering | 80000  | Hyderabad |
-- | 2  | Rahul | 28  | HR          | 50000  | Delhi     |
-- | 3  | Priya | 25  | Engineering | 90000  | Bangalore |
-- | 4  | John  | 30  | Sales       | 65000  | Mumbai    |
-- | 5  | Neha  | 27  | Engineering | 85000  | Hyderabad |
-- | 6  | Amit  | 29  | Sales       | 70000  | Delhi     |

-- Show the 3 youngest employees.

-- Show the highest-paid employee from Hyderabad.
select * from employees where city = 'Hyderabad' order by salary desc limit 1;
-- Show the top 2 Engineering employees ordered by age.
select * from employees where department = 'Engineering' order by age desc limit 2;
-- Show only the name and salary of employees from Delhi, ordered by salary (highest first).
select name, salary from employees where city = 'Delhi' order by salary desc limit 1;
-- Find the second-highest-paid employee using only what you've learned so far.
select * from employees order by salary desc limit 2;

-- Show the three highest-paid employees from Hyderabad.
select * from employees where city = 'Hyderabad' order by salary desc limit 3;


-- 1. Show employees whose salary is between 70000 and 90000.
select * from employees where salary > 70000 And salary < 90000;
-- 2. Show employees whose city is Delhi or Hyderabad, ordered by name.
select * from employees where city = "Delhi" or city = 'Hyderabad' order by name ASC;
-- 3. Show only name and department for employees not in Sales.
select name , department from employees where department != "Sales";
-- 4. Show all employees whose name starts with A.
select * from employees where name Like = %A;

-- (We haven't formally learned LIKE yet, but give it a try if you've seen it before.)

-- 5. Show the oldest Engineering employee.
select * from employees order by age  desc limit 1;


1.

-- Show employees whose name contains "ar".

select * from employees where name LIKE '%ar%';

2.

-- Show employees whose city is not Hyderabad.
select * from employees where city != 'Hyderabad';

3.

-- Show the three youngest Sales employees.
select * from employees where department = 'sales' order by age ASC limit 3;

4.

-- Show employees whose salary is 70000 or 90000 (not a range—exactly one of those two values).
select * from employees where salary = 70000 and salary = 90000;

5.

-- Show employees whose name ends with "a".
select * from employees where name LIKE '%a%';


-- Phase 3 — Filtering
-- =
-- !=
-- >
-- <
-- >=
-- <=
-- BETWEEN
-- LIKE
-- IN
-- NOT IN
-- IS NULL


Aggregate function

1. How maany employees we have?
select count(*) from employees;

SELECT COUNT(*)
FROM employees;

it will return all the rows

but when we try to select count(col_name) that time it will skip the null values


2. add the numberics values

select SUM(salary) from employees;

3. AVG()
Average

select AVG(salary) from employees;

4. MAX();

select MAX(salary) from employees;

5. MIN()

select MIN(salary) from employees;

6. ROUND()

Round decimal numbers

ELECT ROUND(AVG(salary), 2)
FROM employees