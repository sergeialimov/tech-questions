https://dev.to/studio_hungry/how-to-seed-a-postgres-database-with-node-384i

What do we mean by seed?
The process of seeding (in the context of databases) is to insert or populate the initial data into the database. This can be either a manual or automated step in the setup of an application. Seeding can be used when testing different branches, for example, if you have a dev branch where you want to test some new sorting query against the database, seeding would be a good way to test against data that won't affect a production build. Of course, there are many reason one might choose to seed a database. In some instances, an applications database requires some form of data present before it will work properly, such as an admin account. But more often than not seeding would take place pre-install and thus allow the user to begin using the app without any issues.


Create your table:

CREATE TABLE my_table 
(name varchar(50), price int, section varchar(50));
Copy data from your CSV file to the table:

COPY my_table FROM '/path/to/csv/my_table.txt' WITH (FORMAT csv);


https://dev.to/studio_hungry/how-to-seed-a-postgres-database-with-node-384i