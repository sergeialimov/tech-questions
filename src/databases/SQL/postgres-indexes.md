https://www.postgresqltutorial.com/postgresql-indexes/postgresql-list-indexes/

select * from pg_indexes where schemaname = 'public' order by tablename, indexname

https://www.geeksforgeeks.org/postgresql-index-types/

Postgreql has 6 primary index types

- B-tree indexes
- Hash indexes
- GIN indexes
- BRIN
- GiST indexes
- SP-Gist indexes
