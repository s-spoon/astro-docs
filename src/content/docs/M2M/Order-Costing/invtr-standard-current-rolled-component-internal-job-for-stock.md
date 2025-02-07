---
title: "INVTR (Standard, current rolled, component or Internal job for stock)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings.

Back

| Source                 | Transaction/Accounts                                                                                                               | Debit | Credit |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Move to finished goods | Inventory from the part’s facility and product class at standard cost                                                              | DR    | --     |
|                        | WIP Material for the job’s facility and product class at the job estimate                                                          | --    | CR     |
|                        | WIP Labor for the job’s facility and product class at the job estimate                                                             | --    | CR     |
|                        | WIP Overhead for the job’s facility and product class at the job estimate                                                          | --    | CR     |
|                        | Cost Material Variance for the job’s facility and product class at the difference between the job estimates and the standard cost  | DR    | CR     |
|                        | Cost Labor Variance for the job's facility and product class at the difference between the job estimates and the standard cost     | DR    | CR     |
|                        | Cost Overhead Variance for the job's facility and product class at the difference between the job estimates and the standard costs | DR    | CR     |

When you move to finished goods, Made2Manage reduces the quantity in process for the parent part by the amount moved to inventory, increases the quantity on hand, increases month-to-date and year-to-date receipts, and updates the quantity available.

Made2Manage updates the unit average cost using this calculation:

(current unit average x quantity on hand) + (job actual cost x quantity moved to finished goods)  
new on-hand quantity

The job actual costs include subjobs. If the quantity on hand is negative, Made2Manage views on-hand as zero.

| Source                                          | Transaction/Accounts                                                                              | Debit | Credit |
|-------------------------------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Miscellaneous issue to a job buy-to-stock part  | WIP Material for the job’s facility and product class at standard cost                            | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |
| Miscellaneous issue to a job make-to-stock part | WIP Material for the job’s facility and product class at the item master’s standard material cost | DR    | --     |
|                                                 | WIP Labor for the job’s facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                 | WIP Overhead for the job’s facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on hand and increases month-to-date and year-to-date issues.

| Source                                                                                   | Transaction/Accounts                                                                              | Debit | Credit |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory   | WIP Material for the job's facility and product class at standard cost                            | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory) | WIP Material for the job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                          | WIP Labor for the job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                          | WIP Overhead for the job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                          | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                                      | Transaction/Accounts                                                                              | Debit | Credit |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory  | WIP Material for the job's facility and product class at standard cost                            | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory | WIP Material for the job's facility and product class at the item master’s standard material cost | DR    | --     |
|                                                                                             | WIP Labor for the job's facility and product class at the item master’s standard labor cost       | DR    | --     |
|                                                                                             | WIP Overhead for the job's facility and product class at the item master’s standard overhead cost | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at standard cost                        | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts

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
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s standard material cost      | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s standard material cost   | --    | CR     |