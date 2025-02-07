---
title: "JOCS (Weighted average, weighted average, non-component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                            | Transaction/Accounts                                                                         | Debit | Credit |
|-----------------------------------|----------------------------------------------------------------------------------------------|-------|--------|
| Move excess WIP to finished goods | Inventory from the part's facility and product class at total job estimate                   | DR    | --     |
|                                   | WIP Material for the parent part's facility and product class at job estimate                | --    | CR     |
|                                   | WIP Labor for the parent part's facility and product class at job estimate                   | --    | CR     |
|                                   | WIP Overhead for the parent part's facility and product class at job estimate                | --    | CR     |
|                                   | WIP Material for the parent part's facility and product class at the subjob's job estimate   | --    | CR     |
|                                   | WIP Labor for the parent part's facility and product class at the subjob's job estimate      | --    | CR     |
|                                   | WIP Overhead for the parent part's facility and product class at the subjob's job estimate   | --    | CR     |
|                                   | Cost Material Variance for the job's facility and product class at the subjob's job estimate | DR    | --     |
|                                   | Cost Labor Variance for the job's facility and product class at the subjob's job estimate    | DR    | --     |
|                                   | Cost Overhead Variance for the job's facility and product class at the subjob's job estimate | DR    | --     |
| Zero out WIP                    | WIP Material for the job's facility and product class for remaining WIP                      | DR    | CR     |
|                                   | WIP Labor for the job's facility and product class for remaining WIP                         | DR    | CR     |
|                                   | WIP Overhead for the job's facility and product class for remaining WIP                      | DR    | CR     |
|                                   | COGS Material for the job's facility and product class for remaining WIP                     | DR    | CR     |
|                                   | COGS Labor for the job's facility and product class for remaining WIP                        | DR    | CR     |
|                                   | COGS Overhead for the job's facility and product class for remaining WIP                     | DR    | CR     |
|                                   | WIP Material for the job's facility and product class for remaining WIP in the subjob        | DR    | CR     |
|                                   | WIP Labor for the job's facility and product class for remaining WIP in the subjob           | DR    | CR     |
|                                   | WIP Overhead for the job's facility and product class for remaining WIP in the subjob        | DR    | CR     |
|                                   | COGS Material for the job's facility and product class for remaining WIP in the subjob       | DR    | CR     |
|                                   | COGS Material for the job's facility and product class for remaining WIP in the subjob       | DR    | CR     |
|                                   | COGS Overhead for the job's for remaining WIP in the subjob                                  | DR    | CR     |

 If you do not move anything to finished goods, this amount is actual costs minus estimates.

When you close jobs, Made2Manage updates the itemmaster's last actual cost by the job's actual cost. Also, if a subjob exists, Made2Manage updates the subjob parent part's last actual cost with the subjob's total actual cost

If you move excess parts to finished goods on a customer job, Made2Manage updates the \\ average cost using these calculations:

| Material:  | (current material x quantity on hand) + (job actual material cost x quantity moved to finished goods) new on-hand quantity  |
|------------|-----------------------------------------------------------------------------------------------------------------------------|
| Labor:     | (current labor x quantity on hand) + (job actual labor cost x quantity moved to finished goods) new on-hand quantity        |
| Overhead:  | (current overhead x quantity on hand) + (job actual overhead cost x quantity moved to finished goods)  new on-hand quantity |

Unit average cost = Material + Labor + Overhead

If quantity on hand is negative, Made2Manage shows zero on-hand.