---
title: "JOISS (Standard, current rolled, component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                     | Transaction/Accounts                                                                              | Debit | Credit |
|----------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Issue a buy-to-stock part  | WIP Material for the job's facility and product class at standard cost                            | DR    | --     |
|                            | Inventory for the component’s facility and product class at standard cost                         | --    | CR     |
| Issue a make-to-stock part | WIP Material for the job's facility and product class at the itemmaster's standard material cost  | DR    | --     |
|                            | WIP Labor for the job's facility and product class at the item master's standard labor cost       | DR    | --     |
|                            | WIP Overhead for the job's facility and product class at the item master's standard overhead cost | DR    | --     |
|                            | Inventory for the component’s facility and product class at standard cost                         | --    | CR     |

When you perform issues to job orders, Made2Manage reduces on-hand for the component, reduces the quantity committed for the component, and increases month-to-date and year-to-date issues.