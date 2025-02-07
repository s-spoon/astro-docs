---
title: "Assign vendors to items you purchase"
draft: false
type: Article
---

Made2Manage stores information about each standard part or assembly in an item master. When you receive a buy-to-order or buy-to-stock item, Made2Manage updates the vendor information on the item master. You can also manually record a vendor. When you first add an item master, it's a good idea to assign a primary vendor to the part.

>[!NOTE] Before you do this, you must record the part's basic, design, production, and cost information.  

[How?](add-a-part-or-a-part-revision.md)

## To assign vendors to items you purchase

1. Open the Item Master (INV) page.

    1. Select **Production Management** > **Master Data** > **Item Master**.

    Or

    2. Search for **INV** or **Item Master** in the **Navigation box** and then select **Item Master.**

    The **Item Master (INV)** page appears.

2. On the toolbar, click **Browse**.

    The **Browse For Item Master** window appears.

3. Select the row that contains the required item, and click **Select**.

    Or, double-click the row that contains the required item.

    Click **Cancel** to exit from the **Browse For Item Master** window.

4. Click the **Vendors** tab.

5. On the toolbar, click **More Actions**.

6. Select **More Actions** > **Actions** > **Manufacturer Parts**.

    The **Manufacturer Parts (MFRPRT)** window appears, and shows the manufacturers for this part. If you need to add, change, or remove a manufacturer part, see the **Related Information**.

7. On the child toolbar, click **New**.

    Or on the child toolbar, click **Copy** to base this vendor on the one the window shows.

8. Specify the vendor.

    To view manufacturer part information or vendor part information for this part, on the toolbar, click **More Actions**. Then, select **More Actions** > **Actions** > **Vendor/Manufacturer Information** to open the **Vendor/Manufacturer Information (VNDMFR)** window. If you need to add, change, or remove associations between vendors and manufacturers, see the **.

    1. In the **Priority** box, enter a number to indicate that the vendor is your first choice, second choice, or third choice, and so on.

        You can have only one vendor with a priority of 1. You can have multiple vendors with a priority of 2, 3, and so on.

    2. Click the **Vendor** lookup reference.

        The **Lookup For Vendor** window appears.

    3. Select the row that contains the required vendor and click **Select**.

        Or double-click the row that contains the required vendor.

        Click **Cancel** to exit from the **Lookup For Vendor** window.

    4. To record the part number and description the vendor uses:

        - In the **Vendor Part Number** box, enter the vendor's part number.

        - In the **Vendor Part Desc** box, enter the vendor's part description.

    5. In the **Comments** box, enter any comments about the vendor or the vendor's part.

        The comments appear only on the item master.

    6. In the  **Vendor U/M** list, select the vendor's [unit of measure]().

    7. In the **Conversion Factor** box, enter the quantity of vendor's cost units that equal one [inventory]() unit.

        Or, click the [Calculator]() icon to display the Calculator. Enter the required value.

        To calculate the value, divide a quantity of the vendor's unit of measure by the equivalent quantity of your inventory unit of measure. For instance, if 1 case is equal to 10 each, then the conversion factor is 1/10 or .10.

9. In the **Lead Time (Days)** box, enter the number of days lead time you need to order and receive the item.

    Or, click the Calculator icon to display the [Calculator](). Enter the required value.

    For information about adding landed costs for an item and vendor, see the **Related Information**.

10. If your company uses product-based taxes, if the vendor is taxable, and if you want to pay the taxes associated with the vendor's jurisdiction](), click the **Jurisdiction** lookup reference, and select a [jurisdiction]().

11. On the toolbar, click **Save** to keep the vendor.

    You can add bitmapped drawings to a part's item master.



​