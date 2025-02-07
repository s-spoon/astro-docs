---
title: "Order costing posting: Standard, last actual, non-component or Internal job for internal use"
draft: false
type: Article
---

When you process an internal job for internal use, each transaction posts to an account that depends on the activity you perform.

| Activity                                                                                                  | Page                           |                                                                                                   |
|-----------------------------------------------------------------------------------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------|
| Issue stock parts to the job                                                                              | JOISS – Issues to Job Orders   | [See debit/credit transactions](joiss-standard-current-rolled-non-component-internal-job-for-stock.md) |
| Post **labor** to the job                                                                                 | LABR – Daily Labor             | [See debit/credit transactions](labr-standard-current-rolled-non-component-internal-job-for-stock.md)  |
| Receive **material** to the job                                                                           | RECV – Receiving               | [See debit/credit transactions](recv-standard-current-rolled-non-component-internal-job-for-stock.md)  |
| Ship subcontract parts from the job                                                                       | SHIP – Shipping                | [See debit/credit transactions](ship-standard-current-rolled-non-component-internal-job-for-stock.md)  |
| Transfer parts to and from the job, issue miscellaneous material to the job, move parts to finished goods | INVTR – Inventory Transactions | [See debit/credit transactions](invtr-standard-current-rolled-non-component-internal-job-for-stock.md) |
| Close the job                                                                                             | JO – Job Order                 | [See debit/credit transactions](jocs-standard-current-rolled-non-component-internal-job-for-stock.md)  |
| Post miscellaneous material or  other costs to the job                                                    | OCST – Post to Order Costing   | [See debit/credit transactions](ocst-standard-current-rolled-non-component-internal-job-for-stock.md)  |