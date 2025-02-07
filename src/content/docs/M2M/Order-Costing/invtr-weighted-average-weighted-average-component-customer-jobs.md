---
title: "INVTR (Weighted average, weighted average, component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                          | Transaction/Accounts                                                                                      | Debit | Credit |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------|--------|
| Move to finished goods                          | You cannot move a customer job to finished goods                                                          | --    | --     |
| Miscellaneous issue to a job buy-to-stock part  | WIP Material for the job’s facility and product class at weighted-average cost                            | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Miscellaneous issue to a job make-to-stock part | WIP Material for the job’s facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                 | WIP Labor for the job’s facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                 | WIP Overhead for the job’s facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on hand and increases month-to-date and year-to-date issues.

| Source                                                                                       | Transaction/Accounts                                                                                      | Debit | Credit |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory       | WIP Material for the job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory      | WIP Material for the job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                              | WIP Labor for the job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                              | WIP Overhead for the job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory   | WIP Material for the job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory) | WIP Material for the job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                              | WIP Labor for the job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                              | WIP Overhead for the job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                              | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |

When you transfer goods from job orders to inventory, Made2Manage increases the quantity on hand and decreases month-to-date and year-to-date receipts.

| Source                                                                                        | Transaction/Accounts                                                                                             | Debit | Credit |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from one job to another job      | WIP Material for the "From" job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at weighted-average cost                              | --    | CR     |
| Transfer the job's bill of material component (make to stock) from one job to another job     | WIP Material for the "From" job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                               | WIP Labor for the "From" job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                               | WIP Overhead for the "From" job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at the item master’s weighted average material cost   | --    | CR     |
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s weighted average labor cost         | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s weighted average overhead cost   | --    | CR     |
| Transfer the non-job's bill of material component (buy to stock) from one job to another job  | WIP Material for the "From" job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at weighted-average cost                              | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from one job to another job | WIP Material for the "From" job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                               | WIP Labor for the "From" job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                               | WIP Overhead for the "From" job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                               | WIP Material for the "To" job's facility and product class at the item master’s weighted average material cost   | --    | CR     |
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s weighted average labor cost         | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s weighted average overhead cost   | --    | CR     |