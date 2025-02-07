---
title: "INVTR (Standard, current rolled, component or Internal job for internal use)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings.

Back

| Source                                           | Transaction/Accounts                                                       | Debit | Credit |
|--------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Move to finished goods                           | You can’t move an internal job for internal use to finished goods          | --    | --     |
| Miscellaneous issue to a  job buy-to-stock part  | Internal use job's account number at standard cost                         | DR    | --     |
|                                                  | Inventory from the component’s facility and product class at standard cost | --    | CR     |
| Miscellaneous issue to a  job make-to-stock part | Internal use job's account number at standard material cost                | DR    | --     |
|                                                  | Internal use job's account number at standard labor cost                   | DR    | --     |
|                                                  | Internal use job's account number at standard overhead cost                | DR    | --     |
|                                                  | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on hand and increases month-to-date and year-to-date issues.

| Source                                                                                   | Transaction/Accounts                                                       | Debit | Credit |
|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory   | Internal use job's account number at standard cost                         | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory) | Internal use job's account number at standard material cost                | DR    | --     |
|                                                                                          | Internal use job's account number at standard labor cost                   | DR    | --     |
|                                                                                          | Internal use job's account number at standard overhead cost                | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                                       | Transaction/Accounts                                                       | Debit | Credit |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory   | Internal use job's account number at standard cost                         | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at standard cost | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory) | Internal use job's account number at standard material cost                | DR    | --     |
|                                                                                              | Internal use job's account number at standard labor cost                   | DR    | --     |
|                                                                                              | Internal use job's account number at standard overhead cost                | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.