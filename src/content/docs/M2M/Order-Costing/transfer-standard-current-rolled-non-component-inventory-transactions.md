---
title: "Transfer (Standard, current rolled, non-component or Inventory transactions)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                                                  | Transaction/Accounts                                                       | Debit | Credit |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component from the job to inventory | WIP Material for the job's facility and product class at standard cost     | DR    | --     |
|                                                                         | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                      | Transaction/Accounts                                                       | Debit | Credit |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------|-------|--------|
| Transfer the non-job's bill of material component from the job to inventory | WIP Material for the job's facility and product class at standard cost     | DR    | --     |
|                                                                             | Inventory from the component’s facility and product class at standard cost | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                        | Transaction/Accounts                                                          | Debit | Credit |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component from one job to another job     | WIP Material for the "From" job's facility and product class at standard cost | DR    | --     |
|                                                                               | WIP Material for the "To" job's facility and product class at standard cost   | --    | CR     |
| Transfer the non-job's bill of material component from one job to another job | WIP Material for the "From" job's facility and product class at standard cost | DR    | --     |
|                                                                               | WIP Material for the "To" job's facility and product class at standard cost   | --    | CR     |