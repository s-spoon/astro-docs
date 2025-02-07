---
title: "JOCS (Standard, last actual, non-component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                            | Transaction/Accounts                                                                                                 | Debit | Credit |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------|-------|--------|
| Move excess WIP to finished goods | Inventory from the part's facility and product class at standard cost                                                | DR    | --     |
|                                   | WIP Material for the parent part's facility and product class at standard cost                                       | --    | CR     |
|                                   | WIP Labor for the parent part's facility and product class at standard cost                                          | --    | CR     |
|                                   | WIP Overhead for the parent part's facility and product class at standard cost                                       | --    | CR     |
|                                   | WIP Material for the parent part's facility and product class at the subjob's standard cost                          | --    | CR     |
|                                   | WIP Labor for the parent part's facility and product class at the subjob's standard cost                             | --    | CR     |
|                                   | WIP Overhead for the parent part's facility and product class at the subjob's standard cost                          | --    | CR     |
|                                   | Cost Material Variance for the job's facility and product class at the subjob's standard cost                        | DR    | --     |
|                                   | Cost Labor Variance for the job's facility and product class at the subjob's standard cost                           | DR    | --     |
|                                   | Cost Overhead Variance for the job's facility and product class at the subjob's standard cost                        | DR    | --     |
| Zero out WIP                    | Cost Material Variance for the job's facility and product class at the difference between job estimates and standard | DR    | CR     |
|                                   | Cost Labor Variance for the job's facility and product class at the difference between job estimates and standard    | DR    | CR     |
|                                   | Cost Overhead Variance for the job's facility and product class at the difference between job estimates and standard | DR    | CR     |
|                                   | WIP Overhead for the job's product class                                                                             | DR    | CR     |
|                                   | Cost Material Variance for the job's facility and product class                                                      | DR    | CR     |
|                                   | Cost Labor Variance for the job's facility and product class                                                         | DR    | CR     |
|                                   | Cost Overhead Variance for the job's product class                                                                   | DR    | CR     |

 If you don't move anything to finished goods, this amount is actual costs minus estimates.

When you close jobs, Made2Manage updates the itemmaster's last actual cost by the job's actual cost and updates the last actual column with material, labor, and overhead. Also, if a subjob exists, Made2Manage updates the subjob parent part's last actual cost with the subjob's total actual cost

If you move excess parts to finished goods on a customer job, Made2Manage updates the unit average cost using this calculation:

(current unit average x quantity on hand) + (job actual cost x quantity moved to finished goods)  
new on-hand quantity.

The job actual costs include subjobs.