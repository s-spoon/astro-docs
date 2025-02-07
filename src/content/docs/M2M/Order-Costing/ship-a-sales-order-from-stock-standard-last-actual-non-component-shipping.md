---
title: "Ship a sales order from stock (Standard, last actual, non-component or Shipping)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                | Transaction/Accounts                                                                                                       | Debit | Credit |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Shipment of purchase-to-stock part    | COGS Material for the part's facility and product class at standard cost                                                   | DR    | --     |
|                                       | Inventory account for the part's facility and product class at standard cost                                               | --    | CR     |
| Shipment of manufacture-to-stock part | COGS Material for the part's facility and product class at standard cost                                                   | DR    | --     |
|                                       | COGS Labor for the part's facility and product class at standard cost                                                      | DR    | --     |
|                                       | COGS Overhead for the part's facility and product class at standard cost                                                   | DR    | --     |
|                                       | Inventory account for the part's facility and product class at total standard cost                                         | --    | CR     |
| At invoice                            | Accounts Receivable Trade account you select in the Accounts Receivable (CSAR) window at the invoice price                 | DR    | --     |
|                                       | Sales revenue for the sales order's facility and product class at the invoice price                                        | --    | CR     |
| Cash receipt                          | Cash account                                                                                                               | DR    | --     |
|                                       | Accounts Receivable Trade account                                                                                          | --    | CR     |
|                                       | If discounts are taken, Made2Manage debits the Discounts Taken account you select in the Accounts Receivable (CSAR) window | DR    | --     |
|                                       | If adjustments are taken, Made2Manage debits the Adjustments account you select in the Accounts Receivable (CSAR) window   | DR    | --     |