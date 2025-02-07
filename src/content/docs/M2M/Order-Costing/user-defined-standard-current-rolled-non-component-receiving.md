---
title: "User defined (Standard, current rolled, non-component or Receiving)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source       | Transaction/Accounts                                                                                              | Debit | Credit | Notes                                                                                                         |
|--------------|-------------------------------------------------------------------------------------------------------------------|-------|--------|---------------------------------------------------------------------------------------------------------------|
| At receiving | Purchasing category account at the purchase order cost                                                            | DR    | --     | At receiving, Made2Manage does not update the itemmaster.                                                     |
|              | Received Goods at the purchase order cost                                                                         | --    | CR     |                                                                                                               |
| At invoice   | Received Goods at received cost                                                                                   | DR    | --     | Made2Manage updates the item master's last actual cost with the invoice cost, but does not include discounts. |
|              | Accounts Payable Trade account you select in the Accounts Payable (CSAP) window for the invoice amount            | --    | CR     |                                                                                                               |
|              | If invoice amount differs from the receiver, Made2Manage places the difference in the Purchasing Category account | DR    | CR     |                                                                                                               |
| At payment   | Accounts Payable Trade account for the total amount applied                                                       | DR    | --     |                                                                                                               |
|              | Cash for check amount                                                                                             | --    | CR     |                                                                                                               |
|              | Cash Discount account you select in the Accounts Payable (CSAP) window for any discount taken                     | --    | CR     |                                                                                                               |
|              | AP Adjustment account you select in the Accounts Payable (CSAP) window for any adjustment taken                   | --    | CR     |                                                                                                               |