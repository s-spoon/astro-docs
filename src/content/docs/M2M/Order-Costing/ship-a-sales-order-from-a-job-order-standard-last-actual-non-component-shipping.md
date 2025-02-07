---
title: "Ship a sales order from a job order (Standard, last actual, non-component or Shipping)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source          | Transaction/Accounts                                                                      | Debit | Credit |
|-----------------|-------------------------------------------------------------------------------------------|-------|--------|
| At shipment     | COGS Material for the job's facility and product class at parent material estimates       | DR    | --     |
|                 | WIP Material for facility and product class of the Job at parent material estimates       | --    | CR     |
|                 | COGS Material for the job's facility and product class at parent material estimates       | DR    | --     |
|                 | WIP Material for the job's facility and product class at parent material estimates        | --    | CR     |
|                 | COGS Labor for the job's facility and product class at parent labor estimates             | DR    | --     |
|                 | WIP Labor for the job's facility and product class at parent labor estimates              | --    | CR     |
|                 | COGS Overhead for the job's facility and product class at parent overhead estimates       | DR    | --     |
|                 | WIP Overhead for the job's facility and product class at parent overhead estimates        | --    | CR     |
|                 | COGS Material for the subjob's facility and product class at parent material estimates    | DR    | --     |
|                 | WIP Material for the subjob's facility and product class at parent material estimates     | --    | CR     |
|                 | COGS Material for the subjob's facility and product class at parent subcontract estimates | DR    | --     |
|                 | WIP Material for the subjob's facility and product class at parent subcontract estimates  | --    | CR     |
|                 | COGS Labor for the subjob's facility and product class at parent labor estimates          | DR    | --     |
|                 | WIP Labor for the subjob's facility and product class at parent labor estimates           | --    | CR     |
|                 | COGS Overhead for the subjob's facility and product class at parent overhead estimates    | DR    | --     |
|                 | WIP Overhead for the subjob's facility and product class at parent overhead estimates     | --    | CR     |
| At invoice      | Accounts Receivable Trade account at the invoice price                                    | DR    | --     |
|                 | Sales revenue for the sales order's facility and product class the invoice price          | --    | CR     |
| At cash receipt | Cash account                                                                              | DR    | --     |
|                 | Accounts Receivable Trade account                                                         | --    | CR     |
|                 | If discounts are taken, Made2Manage debits the Discounts Taken account                    | DR    | --     |
|                 | If adjustments are taken, Made2Manage debits the Adjustments account                      | DR    | --     |