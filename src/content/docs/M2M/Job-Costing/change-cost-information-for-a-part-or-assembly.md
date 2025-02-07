---
title: "Change cost information for a part or assembly"
draft: false
type: Article
---

When the cost of a part or assembly changes, record the change in the item master.

>[!NOTE]
> If the costs for many items change, roll up the costs instead of changing them one by one.

When you change the cost of a part or assembly in the item master, you create postings to the general ledger. If you reduce the cost of an item, you debit the **Product Class Material Variance** account and credit the **Product Class Inventory** account. If you increase the cost of an item, you debit the **Product Class Inventory** account and credit the **Product Class Material Variance** account.

To view costs transferred to the general ledger, print the **Order Cost Data Trans to GL** report before and after you change costs for a part or assembly.

## To change the cost information for a part or an assembly

1. Open the **Item Master (INV)** page.

    1. Select **Production Management** > **Master Data** > **Item Master**.

        Or

    2. Search for **INV** or **Item Master** in the **Navigation box** and then select **Item Master**.

       The **Item Master (INV)** page appears.

2. Click **Browse** on the **Toolbar**.

    The **Browse For Item Master** window appears.

3. Select a row and click **Select**. Or, double-click the item.

4. Click the **Costs tab**.

5. Change the cost information you need to change.

    The second column's label depends on the inventory costing reference you use. For more information about costing references, see Record a part's cost information.

    >[!NOTE]
    > The **Vendor Pur Price** field appears if the item is a buy item. It shows your cost in terms of the vendor's unit of measurement.

6. Click **Save** to keep the information.

​