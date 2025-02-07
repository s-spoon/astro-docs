---
title: "INVTR (Weighted average, weighted average, component or Internal job for internal use)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                          | Transaction/Accounts                                                               | Debit | Credit |
|-------------------------------------------------|------------------------------------------------------------------------------------|-------|--------|
| Move to finished goods                          | You cannot move an internal job for internal use to finished goods                 | --    | --     |
| Miscellaneous issue to a job buy-to-stock part  | Internal use job's account number at weighted-average cost                         | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |
| Miscellaneous issue to a job make-to-stock part | Internal use job's account number at weighted average material cost                | DR    | --     |
|                                                 | Internal use job's account number at weighted average labor cost                   | DR    | --     |
|                                                 | Internal use job's account number at weighted average overhead cost                | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on hand and increases month-to-date and year-to-date issues.

| Source                                                                                       | Transaction/Accounts                                                               | Debit | Credit |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory       | Internal use job's account number at weighted-average cost                         | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory)     | Internal use job's account number at weighted average material cost                | DR    | --     |
|                                                                                              | Internal use job's account number at weighted average labor cost                   | DR    | --     |
|                                                                                              | Internal use job's account number at weighted average overhead cost                | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory   | Internal use job's account number at weighted-average cost                         | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory) | Internal use job's account number at weighted average material cost                | DR    | --     |
|                                                                                              | Internal use job's account number at weighted average labor cost                   | DR    | --     |
|                                                                                              | Internal use job's account number at weighted average overhead cost                | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.