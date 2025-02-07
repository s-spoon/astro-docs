---
title: "Ship a sales order from stock (Weighted average, weighted average, non-component or Shipping)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                | Transaction/Accounts                                                                                                       | Debit | Credit |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Shipment of purchase-to-stock part    | COGS Material for the part's facility and product class at weighted-average cost                                           | DR    | --     |
|                                       | Inventory account for the part's facility and product class at weighted-average cost                                       | --    | CR     |
| Shipment of manufacture-to-stock part | COGS Material for the part's facility and product class at weighted-average cost                                           | DR    | --     |
|                                       | COGS Labor for the part's facility and product class at weighted-average cost                                              | DR    | --     |
|                                       | COGS Overhead for the part's facility and product class at weighted-average cost                                           | DR    | --     |
|                                       | Inventory account for the part's facility and product class at total weighted-average cost                                 | --    | CR     |
| At invoice                            | Accounts ReceivableTrade account you select in the Accounts Receivable (CSAR)window at the invoice price.                  | DR    | --     |
|                                       | Sales revenue for the sales order's facility and product class at the invoice price                                        | --    | DR     |
| Cash receipt                          | Cash account                                                                                                               | DR    | --     |
|                                       | Accounts Receivable Trade account                                                                                          | --    | CR     |
|                                       | If discounts are taken, Made2Manage debits the Discounts Taken account you select in the Accounts Receivable (CSAR) window | CR    | --     |
|                                       | If adjustments are taken, Made2Manage debits the Adjustments account you select in the Accounts Receivable (CSAR) window   | CR    | --     |