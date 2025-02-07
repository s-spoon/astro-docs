---
title: "SHIP (Standard, weighted average, component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                       | Transaction/Accounts                                                                    | Debit | Credit |
|------------------------------|-----------------------------------------------------------------------------------------|-------|--------|
| Ship sales order\*           | COGS Material for the job's facility and product class at parent material estimates     | DR    | --     |
|                              | WIP Material for the job's facility and product class at parent material estimates      | --    | CR     |
|                              | COGS Material for the job's facility and product class at parent subcontract estimates  | DR    | --     |
|                              | WIP Material for the job's facility and product class at parent subcontract estimates   | --    | CR     |
|                              | COGS Labor for the job's facility and product class at parent labor estimates           | DR    | --     |
|                              | WIP Labor for the job's facility and product class at parent labor estimates            | --    | CR     |
|                              | COGS Overhead for the job's facility and product class at parent overhead estimates     | DR    | --     |
|                              | WIP Overhead for the job's facility and product class at parent overhead estimates      | --    | CR     |
|                              | COGS Material for the job's facility and product class at subjob material estimates     | DR    | --     |
|                              | WIP Material for the job's facility and product class at subjob material estimates      | --    | CR     |
|                              | COGS Material for the job's facility and product class at subjob, subcontract estimates | DR    | --     |
|                              | WIP Material for the job's facility and product class at subjob, subcontract estimates  | --    | CR     |
|                              | COGS Labor for the job's facility and product class subjob labor estimates              | DR    | --     |
|                              | WIP Labor for the job's facility and product class at subjob labor estimates            | --    | CR     |
|                              | COGS Overhead for the job's facility and product class at subjob overhead estimates     | DR    | --     |
|                              | WIP Overhead for the job's facility and product class at subjob overhead estimates      | --    | CR     |
| Ship subcontract sales order | Shipments of subcontract operations do not make postings.                               |       |        |

 \*If you ship the entire sales order quantity, Made2Manage closes the sales order.