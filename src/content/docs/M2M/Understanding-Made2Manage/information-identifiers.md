---

title: "Information identifiers: Keys and indexes"
draft: false
type: Article

---

Made2Manage uses indexes to speed up searches or queries within tables. Most Made2Manage indexes are non-clustered, non-unique.
A key is a field or a combination of fields in a table that uniquely identifies records and establishes relationships between different tables or views. Made2Manage uses primary keys to ensure that each record is uniquely identifiable.


For example, The SOITEM table contains one record for each sales order data, uses the combination of fields **fsono + finumber** as its primary key.


The data dictionary lists each table's keys.


​