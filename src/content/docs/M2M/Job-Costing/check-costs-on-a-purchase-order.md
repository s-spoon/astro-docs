---
title: "Check costs on a purchase order"
draft: false
type: Article
---

When you agree to purchase an item from a vendor, you complete a purchase order - a document that authorizes the purchase of specific products or services and promises to pay for them. Purchase orders contain costs that you agreed to pay. Made2Manage keeps purchase order information so you can view it at any time.

## To check costs on a purchase order

1. Open the **Purchase Orders (PO)** page.

   1. Select **Production Management** > **Production Transactions** > **Purchasing** > **Purchase Orders**.

        Or

   2. Search for **PO** or **Purchase Orders** in the **Navigation box** and then select **Purchase Orders**.

       The **Purchase Orders (PO)** page appears.

2. On the Toolbar, click **Browse**.

    The **Browse For Purchase Orders** window appears.

3. Select a row and click **Select**. Or, double-click the row to select.

    Click **Cancel** to exit this window.

4. Click the **Items** tab to view cost information for an item.

5. Open item by clicking the part number hyperlink from the grid.

​

### Postings for job closing ###

When you close a job, Made2Manage calculates whether the job costs more than expected (a negative work *in process A status of physical inventory tag ranges that means you have added the individual tag records, but you have not yet posted them.*) or less than expected (a positive work in process). This sample ledger shows how closing transactions post for standard or *weighted average costing* methods:
   1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items.
   2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete.

| Date     | Transaction/Accounts                  | Debit  | Credit |
|----------|---------------------------------------|--------|--------|
| March 17 | **Negative WIP, make to order item**  |        |        |
|          | Product class WIP Matl/Lbr/Ovhd       | 47     |        |
|          | Product class COGS Matl/Lbr/Ovhd COGS |        | 47     |
| March 19 | **Negative WIP, make to stock item**  |        |        |
|          | Product class WIP material.           | 68     |        |
|          | Variance or COGS                      |        | 68     |
| March 21 | **Positive WIP, Make to order item**  |        |        |
|          | Product class COGS Matl/Lbr/Ovhd      | 55     |        |
|          | Product class WIP Matl/Lbr/Ovhd       |        | 55     |
| March 29 | **Positive WIP, Make to stock item**  |        |        |
|          | Variance or COGS                      | 87     |        |
|          | PC WIP material                       |        | 87     |