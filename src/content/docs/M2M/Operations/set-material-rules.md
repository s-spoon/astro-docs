---
title: "Set material rules"
draft: false
type: Article
---

You can set the standards for how your company uses material.

## To set material rules

1. Open the **Production (CSPROD)** page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **Production**.

    Or

    2. Search for **CSPROD** or **Production** in the **Navigation box** and then select **Production**.

    **Production (CSPROD)** page appears.

2. Click the **Material/Costing** tab.

3. Set backflush information:

    1. Click the **At** dropdown and select when to backflush materials from inventory.

    2. Click the **Quantity** dropdown and select the quantity to backflush from inventory.

    3. To backflush any amount of scrap from inventory when you close a job, select the **Scrap Quantity At Job Close** check box.

        You must still select the **Backflush** check box in the item master for every item you want to backflush from inventory.

4. To add six-character alphanumeric item numbers to all bills of material, select the **User Defined BOM Item Numbers** check box.

5. To allow more quantity to be moved to inventory than is completed on a job, select the **Allow More Quantity to Be Moved to Inventory Than Completed On Job** check box.

    You may want to do this if you ever move completed items to inventory before you post labor for the job order.

6. Click the **Default Issue Quantity** dropdown and select the quantity to issue by default.

7. To enable lot control, select the **Enable Lot Control** check box.

    Once you enable lot control for your company, you cannot disable it again. See the **related information**.

8. In the **Sub-Contract Purchase Order Part Description** area, select which part descriptions to use when you enter sub-contract purchase orders:

    - To use the part description from the item master memo field, click **Item Master**.

    - To use the part description from the job order's operation description field, click **JO Operation**.

9. Select the **Enable Multi-Site** check box to have multiple facilities within a company.

    Once you enable the **Enable Multi-Site** checkbox for a company, you cannot disable it.

10. If you measure some or all of your inventory in dimensions, enable multi-dimensional inventory:

    - Select the **Enable MDI**check box.

        Once you enable MDI, do not disable it.

    - To set minimum and maximum inventory quantities, select the **Do Not Allow Transaction Outside of Min-Max Quantity Range** check box.

    - If you want to recalculate the job order detailed bill of material's extended quantity for a particular operation, select the **Adjust Unit JODBOM Quantities Based On Operation Quantities** check box.


    - If you want the BOM quantity to reflect the amount of material required to supply the demand, select the **Use True BOM Quantities** check box.

        For example, you stock metal rods in 8-foot lengths and you need a 4-foot section. With this box empty, the bill of material quantity is 1. With this box checked, it is 0.5.

11. On the **Toolbar**,click **Save** .

​