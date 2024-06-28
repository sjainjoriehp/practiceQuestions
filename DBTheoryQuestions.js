(https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/)
DDL – Data Definition Language
DQL – Data Query Language
DML – Data Manipulation Language
DCL – Data Control Language
TCL – Transaction Control Language

DDL
---
Command	   Description	Syntax
CREATE	   Create database or its objects (table, index, function, views, store procedure, and triggers)	CREATE TABLE table_name (column1 data_type, column2 data_type, ...);
DROP	   Delete objects from the database	DROP TABLE table_name;
ALTER	   Alter the structure of the database	ALTER TABLE table_name ADD COLUMN column_name data_type;
TRUNCATE   Remove all records from a table, including all spaces allocated for the records are removed	TRUNCATE TABLE table_name;
COMMENT    Add comments to the data dictionary	COMMENT 'comment_text' ON TABLE table_name;
RENAME	  Rename an object existing in the database	RENAME TABLE old_table_name TO new_table_name;

DQL
--
SELECT   It is used to retrieve data from the database    SELECT column1, column2, ...FROM table_name<br>WHERE condition;

DML
---
Command	Description	Syntax
INSERT	 Insert data into a table	                  INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
UPDATE	 Update existing data within a table	      UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
DELETE	 Delete records from a database table	      DELETE FROM table_name WHERE condition;
LOCK	 Table control concurrency	                  LOCK TABLE table_name IN lock_mode;
CALL	 Call a PL/SQL or JAVA subprogram	                  CALL procedure_name(arguments);
EXPLAIN  PLAN	Describe the access path to data	                  EXPLAIN PLAN FOR SELECT * FROM table_name;


DCL
---
GRANT
REVOKE

TCL
---
BEGIN TRANSACTION	Starts a new transaction	BEGIN TRANSACTION [transaction_name];
COMMIT	Saves all changes made during the transaction	COMMIT;
ROLLBACK	Undoes all changes made during the transaction	ROLLBACK;
SAVEPOINT	Creates a savepoint within the current transaction	SAVEPOINT savepoint_name;




Normalization
indexing
Cluster indexing
difference in alter and delete
difference between delete and truncate

