---
title: "INVTR (Weighted average, weighted average, component or Internal job for stock)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                 | Transaction/Accounts                                                         | Debit | Credit |
|------------------------|------------------------------------------------------------------------------|-------|--------|
| Move to finished goods | Inventory from the part’s facility and product class at the job estimate     | DR    | --     |
|                        | WIP Material for the job’s facility and product class at the job estimate    | --    | CR     |
|                        | WIP Labor for the job’s facility and product class at the job estimate       | --    | CR     |
|                        | WIP Overhead for the job’s facility and product class at the job estimate    | --    | CR     |
|                        | WIP Material for the job’s facility and product class at the subjob estimate | --    | CR     |
|                        | WIP Labor for the job’s facility and product class at the subjob estimate    | --    | CR     |
|                        | WIP Overhead for the job’s facility and product class at the subjob estimate | --    | CR     |

When you move to finished goods, Made2Manage reduces the quantity in process for the parent part by the amount moved to inventory, increases the quantity on hand, increases month-to-date and year-to-date receipts, and updates the quantity available.

Made2Manage updates the weighted-average cost using these calculations:

Unit average cost = Material + Labor + Overhead

The job actual costs include subjobs. If the quantity on hand is negative, Made2Manage views on-hand as zero.

| Material:  | (current unit average x quantity on hand) + (job estimate material cost x quantity moved to finished goods) new on-hand quantity |
|------------|----------------------------------------------------------------------------------------------------------------------------------|
| Labor:     | (current labor x quantity on hand) + (job estimate labor cost x quantity moved to finished goods) new on-hand quantity           |
| Overhead:  | (current overhead x quantity on hand) + (job estimate overhead cost x quantity moved to finished goods)  new on-hand quantity    |

| Source                                          | Transaction/Accounts                                                                                      | Debit | Credit |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------|--------|
| Miscellaneous issue to a job buy-to-stock part  | WIP Material for the job’s facility and product class at weighted-average cost                            | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Miscellaneous issue to a job make-to-stock part | WIP Material for the job’s facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                 | WIP Labor for the job’s facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                 | WIP Overhead for the job’s facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                 | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |

When you perform miscellaneous issues to job orders, Made2Manage decreases the quantity on h

and and increases month-to-date and year-to-date issues.

| Source                                                                                      | Transaction/Accounts                                                                                      | Debit | Credit |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------|--------|
| Transfer the job's bill of material component (buy to stock) from the job to inventory      | WIP Material for the job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the job's bill of material component (make to stock) from the job to inventory     | WIP Material for the job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                             | WIP Labor for the job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                             | WIP Overhead for the job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the non-job's bill of material (buy to stock) component from the job to inventory  | WIP Material for the job's facility and product class at weighted-average cost                            | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |
| Transfer the non-job's bill of material component (make to stock) from the job to inventory | WIP Material for the job's facility and product class at the item master’s weighted average material cost | DR    | --     |
|                                                                                             | WIP Labor for the job's facility and product class at the item master’s weighted average labor cost       | DR    | --     |
|                                                                                             | WIP Overhead for the job's facility and product class at the item master’s weighted average overhead cost | DR    | --     |
|                                                                                             | Inventory from the component’s facility and product class at weighted-average cost                        | --    | CR     |

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
|                                                                                               | WIP Labor for the "To" job's facility and product class at the item master’s weighted average material cost      | --    | CR     |
|                                                                                               | WIP Overhead for the "To" job's facility and product class at the item master’s weighted average material cost   | --    | CR     |