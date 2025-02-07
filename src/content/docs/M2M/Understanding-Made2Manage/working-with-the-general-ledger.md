---

title: "Working with the general ledger"
draft: false
type: Article

---

In Made2Manage, posting to the general ledger includes posting transactions from four subledgers and making manual journal entries.

Each subledger is like a journal: it stores detailed information about business transactions.

| When you...                                         | Made2Manage...                                             |
|-----------------------------------------------------|------------------------------------------------------------|
| Receive an accounts payable invoice.                | Enters a transaction in the accounts payable subledger.    |
| Send an accounts receivable invoice.                | Enters a transaction in the accounts receivable subledger. |
| Receive a shipment from a vendor or ship an order.  | Enters a transaction in the order costing subledger.       |
| Copy payroll transactions from your payroll system. | Enters them in the payroll subledger.                      |
|

You must post each subledger to the general ledger to trigger the crediting and debiting of the appropriate accounts. Different methods exist in Made2Manage for posting subledgers to the general ledger. You can post accounts receivable and accounts payable manually, nightly, immediately, or never. You can post order costing and payroll manually, nightly, or never.

- If you post manually, you post the subledger's transactions yourself.

- If you post nightly, the Command Scheduler posts the subledger's transactions to the general ledger each night.


- If you post immediately, when Made2Manage enters a transaction in the subledger, it also posts the transaction to the general ledger. (Immediate posting is available only for accounts payable and accounts receivable.)

- If you select never to post to the general ledger, then to move the subledger information to the general ledger, you make a manual journal entry.

Certain types of events, however, such as filling the petty cash box and making end-of-period adjustments, do not occur elsewhere in Made2Manage and do not go to the subledgers. For each of these events, you must make a manual journal entry, which posts directly to the general ledger.

At the end of a period, after making adjusting journal entries and printing financial statements, you close the period. In Made2Manage you do not need to make individual closing journal entries. You can close a period with a few mouse clicks.

​