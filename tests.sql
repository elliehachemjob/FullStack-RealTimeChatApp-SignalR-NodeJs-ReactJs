--INSERT INTO relatedData VALUES
--(4,'m')

INSERT INTO Users (Email, Auth, isAdmin)
VALUES ( 'hasan', 'hasan', 0); 


--CREATE TABLE RelatedData
--( 
--ClientId int IDENTITY(1, 1),
--Age varchar(50),
--Gender varchar(50),
--)


--SELECT * 
--FROM Users

--SELECT Auth 
--FROM Users


--SELECT Email,Auth 
--FROM Users

--SELECT Top 1 *  
--FROM Users


--SELECT DISTINCT(Email)
--FROM Users


--SELECT COUNT(Email)
--FROM Users



--SELECT COUNT(Email) AS EmailCount
--FROM Users


--SELECT MAX(Age)
--FROM relatedData

--SELECT MIN(Age) 
--FROM relatedData


--SELECT AVG(Age)
--FROM relatedData


--SELECT * 
--FROM ellieBASIC.dbo.relatedData


--SELECT * 
--FROM Users
--WHERE Email = 'ali'


--SELECT * 
--FROM Users
--WHERE Email <> 'ahmad'

--SELECT * 
--FROM relatedData
--WHERE Age > 3


--SELECT * 
--FROM relatedData
--WHERE Age >= 4


--SELECT * 
--FROM relatedData
--WHERE Age >= 4 AND Gender ='m'



--SELECT * 
--FROM relatedData
--WHERE Age >= 4 OR Gender ='m'



--SELECT * 
--FROM relatedData
--WHERE Gender LIKE 'm%'

--SELECT * 
--FROM Users
--WHERE Email LIKE '%a%'


--SELECT * 
--FROM Users
--WHERE Email LIKE 'a%i%'


--SELECT * 
--FROM Users
--WHERE Email LIKE 'a%li%'

--SELECT * 
--FROM Users
--WHERE Email LIKE 'a%l%i%

--SELECT * 
--FROM Users
--WHERE Email LIKE 'a%l%i'

--SELECT * 
--FROM Users
--WHERE Email is Null


--SELECT * 
--FROM Users
--WHERE Email is NOT Null


--SELECT * 
--FROM Users
--WHERE Email IN ('ali','hasan')


--SELECT DISTINCT(Email)
-- FROM Users
 
 --SELECT Email
 --FROM Users
 --GROUP BY Email


 --SELECT Email,Auth,Count(Email)
 --FROM Users
 --GROUP BY Email,Auth


 --SELECT Email,Auth,Count(Email)
 --FROM Users
 --WHERE Auth='ali'
 --GROUP BY Email,Auth


 -- SELECT Email,Auth,Count(Email) As EmailCount
 --FROM Users
 --WHERE Auth='ali'
 --GROUP BY Email,Auth
 --ORDER BY EmailCount DESC


  --SELECT  *
  --FROM Users
  --ORDER BY Auth


  --SELECT  *
  --FROM Users
  --ORDER BY Email,Auth

  --SELECT  *
  --FROM Users
  --ORDER BY 1 DESC

--  INSERT INTO table_name (column1, column2, column3, ...)
--VALUES (value1, value2, value3, ...); 
