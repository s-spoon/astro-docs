---
title: "Record the quantity of goods you receive"
draft: false
type: Article
---

You can record the number of items you receive against a purchase order or sales order.

## To record the quantity of goods you receive

1. Open the **Receiving (RECV)** page.

   1. Select **Production Management** > **Production Transactions** > **Inventory** > **Receiving** > **Receiving**.

        Or

   2. Search for **RECV** or **Receiving** in the **Navigation box** and then select **Receiving**.

        **Receiving (RECV)** page appears.

2. Click **Browse** on the **Toolbar**.

    The **Browse For Receiving** window appears.

3. Select a row and click **Select**. Or, double-click the receiver to use.

    Click **Cancel** to exit from the **Browse For Receiving** window.

4. Highlight the item number to receive.

5. Make the necessary changes.

6. Type the quantity in the **Qty Recd** box. Or, click the icon at the end of **Qty Recd** box to display the calculator. Select an appropriate value.

7. Click **Save** on the **Toolbar** to keep your changes.

    Click **Cancel** on the **Toolbar** to discard your changes.

​

Postings for receiving

When you *record* A complete unit of related data items stored in named fields in a database table. A record contains all the information for a single item, such as a single sales order. *receipt* (Also called cash receipt) A record of payment for goods sold. of an *item* A manufactured or purchased part, material, subassembly, or product., that *transaction* 1. A debit or credit posted to a particular general ledger account. 2. As a result of accounting events in accounts receivable, accounts payable, or payroll, at least one debit and at least one credit, where total debits equal total credits. posts to a different *account* (Also called general ledger account) 1. An accounting record that classifies and summarizes the increases and decreases of each asset, liability, and shareholder equity item. 2. The means for tracking users and keeping their actions separate in Made2Manage. Auser logs into an account using his or her username and password. depending on the type of item. This sample ledger shows how receiving transactions post when you use *standard costing* A type of cost accounting that bases financial numbers on the information stored in the item master.:

| Date   | Transaction/Accounts                 | Debit  | Credit |
|--------|--------------------------------------|--------|--------|
| June 1 | **Stock item received**              |        |        |
|        | Product class inventory account      | 80     |        |
|        | Received goods account               |        | 80     |
| June 2 | **Buy to sales order item received** |        |        |
|        | Buy/resell account                   | 100    |        |
|        | Received goods account               |        | 100    |
| June 3 | **Buy to job order item received**   |        |        |
|        | Product class WIP account            | 75     |        |
|        | Received goods account               |        | 75     |

This sample ledger shows how receiving transactions post when you use *weighted average costing*

   1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items.
   2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete.:

| Date   | Transaction/Accounts            | Debit  | Credit |
|--------|---------------------------------|--------|--------|
| June 1 | **Item received to inventory**  |        |        |
|        | Product class inventory account | 67     |        |
|        | Received goods account          |        | 67     |