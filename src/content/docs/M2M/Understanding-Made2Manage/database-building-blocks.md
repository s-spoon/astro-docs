---

title: "Database Structure: Tables, fields, and records"
draft: false
type: Article

---

Made2Manage stores data in an SQL database, organized s in a hierarchal structure. This structure consists of three main components:

-	Table: A table collects related data such as sales orders table and a general ledger accounts. EAch table is made of rows and columns.
-	Fields: A fields contains specific information within a table. For example, a sales order table contains a filed for sales order number. Fields are organized into columns within the table.
-	Records:  A record consists of a row of fields that describe a single item in a table. For example, a record in the sales order table includes all the fields that describe a particular sales order, such as the sales order number, customer information, and order details.
-	Within each table, a field can be of several types, such as text, number, or date, depending on the kind of data it holds.Explain field types.


**Field type**


| Type              | Can Contain                         |
|-------------------|-------------------------------------|
| **Character (C)** | Any alphanumeric character.         |
| **Number (N)**    | Real number.                        |
| **Date (D)**      | Dates in several formats.           |
| **Logical (L)**   |  T (true), or F (false).            |
| **Memo (M)**      | Holds free-form text data.          |
| **Date/Time (T)** | Dates and times in several formats. |
| **Currency (Y)**  | Currency.                           |
| **Integer (I)**   | Whole numbers.                      |
|