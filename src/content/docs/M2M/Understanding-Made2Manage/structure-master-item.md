---

title: "Structure of Master of Item"
draft: false
type: Article

---

| Table name | Table contents   |
|-------|-|
| **xxMAST** | A master table that establishes a one-to-many relationship with its associated item-table records. It stores overarching sales order information such as  order number and customer details, without including individual line items. |
| **xxITEM** | An item table, that holds records for each line item associated with  the master table. While xxMAST contains general sales order information, xxITEM includes the specific ordered.  |