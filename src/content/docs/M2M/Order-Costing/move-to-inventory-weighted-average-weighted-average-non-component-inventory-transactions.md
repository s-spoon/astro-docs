---
title: "Move to inventory (Weighted average, weighted average, non-component or Inventory transactions)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                 | Transaction/Accounts                                                         | Debit | Credit |
|------------------------|------------------------------------------------------------------------------|-------|--------|
| Move to finished goods | Inventory from the part’s facility and product class at the job estimate     | DR    | --     |
|                        | WIP Material for the job's facility and product class at the job estimate    | --    | CR     |
|                        | WIP Labor for the job's facility and product class at the job estimate       | --    | CR     |
|                        | WIP Overhead for the job's facility and product class at the job estimate    | --    | CR     |
|                        | WIP Material for the job's facility and product class at the subjob estimate | --    | CR     |
|                        | WIP Labor for the job's facility and product class at the subjob estimate    | --    | CR     |
|                        | WIP Overhead for the job's facility and product class at the subjob estimate | --    | CR     |

When you move to finished goods, Made2Manage reduces the quantity in process for the parent part by the amount moved to inventory, increases the quantity on hand, increases month-to-date and year-to-date receipts, and updates the quantity available.

Made2Manage updates the average cost using these calculations:

| Material:  | (current unit average x quantity on hand) + (job actual cost x quantity moved to finished goods) new on-hand quantity         |
|------------|-------------------------------------------------------------------------------------------------------------------------------|
| Labor:     | (current **labor** x quantity on hand) + (job actual labor cost x quantity moved to finished goods) new on-hand quantity      |
| Overhead:  | (current overhead x quantity on hand) + (job estimate overhead cost x quantity moved to finished goods)  new on-hand quantity |

Unit average cost = Material + Labor + Overhead

The job actual costs include subjobs. If the quantity on hand is negative, Made2Manage views on-hand as zero.