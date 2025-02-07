---
title: "Order costing posting: Weighted average, weighted average, component or Order costing"
draft: false
type: Article
---

When you add miscellaneous costs to job orders or sales orders, they post to an account that depends on the kind of transaction you perform.

| Source                                   | Transaction/Accounts                                                                                                           | Debit | Credit |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Post material costs to sales orders      | COGS Material for the sales order’s facility and product class at the dollar amount entered (quantity x material cost entered) | DR    | --     |
|                                          | Account entered in the **Post to Order Costing (OCST)** page at the dollar amount entered                                      | --    | CR     |
| Post miscellaneous costs to sales orders | COGS other for the sales order's facility and product class at the dollar amount entered                                       | DR    | --     |
|                                          | Account entered in the **Post to Order Costing (OCST)** page at the dollar amount entered                                      | --    | CR     |
| Post material costs  to job orders       | WIP Material for the job order’s facility and product class at the dollar amount entered (quantity x material cost entered)    | DR    | --     |
|                                          | Account entered in the **Post to Order Costing (OCST)** page at the dollar amount entered                                      | --    | CR     |
| Post miscellaneous costs to job orders   | WIP other for the job order's facility and product class at the dollar amount entered                                          | DR    | --     |
|                                          | Account entered in the **Post to Order Costing (OCST)** page at the dollar amount entered                                      | --    | CR     |