---
title: "Job order (Weighted average, weighted average, non-component or Receiving)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source       | Transaction/Accounts                                                                                                                             | Debit | Credit | Notes                                                                                                         |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|---------------------------------------------------------------------------------------------------------------|
| At receiving | WIP Material for the job's facility and product class at the purchase order cost                                                                 | DR    | --     | At receiving, Made2Manage does not update the itemmaster.                                                     |
|              | Received Goods at the purchase order cost                                                                                                        | --    | CR     |                                                                                                               |
| At invoice   | Received Goods at received cost                                                                                                                  | DR    | --     | Made2Manage updates the item master's last actual cost with the invoice cost, but does not include discounts. |
|              | Accounts Payable Trade account for invoice amount                                                                                                | --    | CR     |                                                                                                               |
|              | If the invoice amount differs from the receiver, Made2Manage places the difference in the WIP Material account for the job order's product class | DR    | CR     |                                                                                                               |
| At payment   | Accounts Payable Trade account for the total applied amount                                                                                      | DR    | --     |                                                                                                               |
|              | Cash for the check amount                                                                                                                        | --    | CR     |                                                                                                               |
|              | Cash Discount account for any discount taken                                                                                                     | --    | CR     |                                                                                                               |
|              | AP Adjustment account for any adjustment taken                                                                                                   | --    | CR     |                                                                                                               |