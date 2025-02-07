---
title: "JOISS (Weighted average, weighted average, component or Internal job for stock)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                     | Transaction/Accounts                                                                                      | Debit | Credit |
|----------------------------|-----------------------------------------------------------------------------------------------------------|-------|--------|
| Issue a buy-to-stock part  | WIP Material for the job’s facility and product class at weighted-average cost                            | DR    | --     |
|                            | Inventory for the component’s facility and product class at weighted-average cost                         | --    | CR     |
| Issue a make-to-stock part | WIP Material for the job’s facility and product class at the item master’s weighted average material cost | DR    | --     |
|                            | WIP Labor for the job’s facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                            | WIP Overhead for the job’s facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                            | Inventory for the component’s product class                                                               | --    | CR     |

When you perform issues to job orders, Made2Manage reduces on-hand for the component, reduces quantity committed for the component, and increases month-to-date and year-to-date issues.