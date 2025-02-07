---

title: "MAST and ITEM"
draft: false
type: Article

---

| Table name | Table contents                                                                                                                                                                                                                                                                                                                   |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **xxMAST** | A master table - When a document has several line items, such as a sales order, a master table record has a one-to-many relationship with related item-table records. An SOMAST table record stores sales order information including number and customer, but not the individual items on the order. The SOITEM table contains the items. |
| **xxITEM** | An item table, which contains records for each line item of master table records. SOMAST contains general information about sales orders, but SOITEM contains the orders' items.                                                                                                                                                           |
|