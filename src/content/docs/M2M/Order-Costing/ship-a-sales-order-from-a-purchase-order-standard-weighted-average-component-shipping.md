---
title: "Ship a sales order from a purchase order (Standard, weighted average, component or Shipping)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source          | Transaction/Accounts                                                                           | Debit | Credit |
|-----------------|------------------------------------------------------------------------------------------------|-------|--------|
| At shipment     | COGS Material for the part's facility and product class at the purchase order cost             | DR    | --     |
|                 | The Buy/Resell account you select in the Production (CSPROD) window at the purchase order cost | --    | CR     |
| At invoice      | Accounts Receivable Trade account at the invoice price                                         | DR    | --     |
|                 | Sales revenue for the sales order's facility and product class at the invoice price            | --    | CR     |
| At cash receipt | Cash account                                                                                   | DR    | --     |
|                 | Accounts Receivable Trade account                                                              | --    | CR     |
|                 | If discounts are taken, Made2Manage debits the Discounts Taken account                         | DR    | --     |
|                 | If adjustments are taken, Made2Manage debits the Adjustments account                           | DR    | --     |