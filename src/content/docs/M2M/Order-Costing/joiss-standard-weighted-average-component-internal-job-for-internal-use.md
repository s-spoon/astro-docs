---
title: "JOISS (Standard, weighted average, component or Internal job for internal use)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                     | Transaction/Accounts                                                      | Debit | Credit |
|----------------------------|---------------------------------------------------------------------------|-------|--------|
| Issue a buy-to-stock part  | Internal use job's account number at standard cost                        | DR    | --     |
|                            | Inventory for the component’s facility and product class at standard cost | --    | CR     |
| Issue a make-to-stock part | Internal use job's account number at standard material cost               | DR    | --     |
|                            | Internal use job's account number at standard labor cost                  | DR    | --     |
|                            | Internal use job's account number at standard overhead cost               | DR    | --     |
|                            | Inventory for the component’s facility and product class at standard cost | --    | CR     |

When you perform issues to job orders, Made2Manage reduces on-hand for the component, reduces the quantity committed for the component, and updates month-to-date and year-to-date issues.