---
title: "RECV (Weighted average, weighted average, component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                                                | Transaction/Accounts                                                  | Debit | Credit |
|-------------------------------------------------------|-----------------------------------------------------------------------|-------|--------|
| Receive subcontract purchase order                  | WIP Material at the purchase order cost                               | DR    | --     |
|                                                       | Received Goods at the purchase order cost                             | --    | CR     |
| Receive purchase order for job bill of materials part | WIP Material at the purchase order cost                               | DR    | --     |
|                                                       | Received Goods at the purchase order cost                             | --    | CR     |
| Receive customer-supplied part                        | WIP Material for the job’s facility and product class at 0.00 dollars | DR    | --     |
|                                                       | Received Goods at 0.00 dollars                                        | --    | CR     |

If the invoice amount differs from the purchase order amount, at invoicing time Made2Manage adjusts WIP Material.

 Although the fixed lot cost appears on the purchase order, Made2Manage does not use it in any postings.