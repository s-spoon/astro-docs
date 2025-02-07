---

title: "Understanding the Made2Manage database"
draft: false
type: Article

---

To maintain your Made2Manage database effectively, you should first understand its structure.

Made2Manage uses the following SQL databases:

|                  | Database   | Contents                                                                                                                                                                                                        |
|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Company-specific | M2MDataXX  | SQL tables, views, functions, and stored procedures specific to individual companies. All data resides on a SQL Server with a database name, by default, in the form M2MDataXX, where XX is the company number. |
| Global to system | M2MSystem  | System data such as users, companies, security, and data dictionary (which lists the tables and fields in the M2MData database).                                                                                |
|

​