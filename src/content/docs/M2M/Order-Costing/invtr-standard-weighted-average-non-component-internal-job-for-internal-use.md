---
title: "INVTR (Standard, weighted average, non-component or Internal job for internal use)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                             | Transaction/Accounts                                              | Debit | Credit |
|------------------------------------|-------------------------------------------------------------------|-------|--------|
| Move to finished goods             | You can’t move an internal job for internal use to finished goods | --    | --     |
| Issue miscellaneous costs to a job | Account number on internal use job at standard cost               | DR    | --     |
|                                    | Inventory for the component’s PC at standard cost                 | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on hand and increases month-to-date and year-to-date issues.

| Source                                                                  | Transaction/Accounts                                                       | Debit | Credit |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component from the job to inventory | Internal use job's account number at standard cost                         | DR    | --     |
|                                                                         | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                      | Transaction/Accounts                                                       | Debit | Credit |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the non-job's bill of material component from the job to inventory | Internal use job's account number at standard cost                         | DR    | --     |
|                                                                             | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.