---
title: "Transfer (Standard, weighted average, component or Inventory transactions)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                                                                   | Transaction/Accounts                                                                              | Debit | Credit |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory   | WIP Material for the job's facility and product class at standard cost                            | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory) | WIP Material for the job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                          | WIP Labor for the job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                          | WIP Overhead for the job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                                       | Transaction/Accounts                                                                              | Debit | Credit |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory   | WIP Material for the job's facility and product class at standard cost                            | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory) | WIP Material for the job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                              | WIP Labor for the job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                              | WIP Overhead for the job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                                        | Transaction/Accounts                                                                                     | Debit | Credit |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from one job to another job      | WIP Material for the "From" job's facility and product class at standard cost                            | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at standard cost                              | --    | CR     |
| Transfer the job's bill of material component (make to stock) from one job to another job     | WIP Material for the "From" job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                               | WIP Labor for the "From" job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                               | WIP Overhead for the "From" job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at the item master’s standard material cost   | --    | CR     |
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s standard labor cost         | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s standard overhead cost   | --    | CR     |
| Transfer the non-job's bill of material component (buy to stock) from one job to another job  | WIP Material for the "From" job's facility and product class at standard cost                            | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at standard cost                              | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from one job to another job | WIP Material for the "From" job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                               | WIP Labor for the "From" job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                               | WIP Overhead for the "From" job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at the item master’s standard material cost   | --    | CR     |
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s standard labor cost         | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s standard overhead cost   | --    | CR     |