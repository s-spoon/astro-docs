---

title: "Assign vendors to items you purchase"
draft: false
type: Article

---

Made2Manage stores information about each standard part or assembly in an item master. When you receive a buy-to-order or buy-to-stock item, Made2Manage updates the vendor information on the item master. You can also manually record a vendor. When you first add an item master, it's a good idea to assign a primary vendor to the part.

>[!NOTE] Before you do this, you must record the part's basic, design, production, and [cost information](add-a-part-or-a-part-revision.md). 

**To assign vendors to items you purchase**

1. Open the **Item Master (INV)** page.

    - Select **Production Management** > **Master Data** > **Item Master**.

    Or

    - Search for **INV** or **Item Master** in the **Navigation box** and then select **Item Master.**

        The **Item Master (INV)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Item Master** window appears.

3. Select the row that contains the required item, and click **Select**.

    Or double-click the row that contains the required item.

    Click **Cancel** to exit from the **Browse For Item Master** window.

4. Click the **Vendors** tab.

5. On the **Toolbar**, click **More Actions**.

6. Select **More Actions** > **Actions** > **Manufacturer Parts**.

    The **Manufacturer Parts (MFRPRT)** window opens, and shows the manufacturers for this part. If you need to add, change, or remove a manufacturer part, see the **.

7. On the grid toolbar, click **New**.

    Or on the grid toolbar, click **Copy** to base this vendor on the one the window shows.

8. Specify the vendor.

    To view manufacturer part information or vendor part information for this part, on the **Toolbar**, click **More Actions**. Then, select **More Actions** > **Actions** > **Vendor/Manufacturer Information** to open the **Vendor/Manufacturer Information (VNDMFR)** window. If you need to add, change, or remove associations between vendors and manufacturers, see the **RElated Information**.

    1. In the **Priority** box, type a number to indicate that the vendor is your first, second, or third, and so on, choice.

        You can have only one vendor with a priority of 1. You can have multiple vendors with a priority of 2, 3, etc.

    2. Click the **Vendor** lookup reference.

        The **Lookup For Vendor** window appears.

    3. Select the row that contains the required vendor, and click **Select**.

        Or double-click the row that contains the required vendor.

        Click **Cancel** to exit from the **Lookup For Vendor** window.

    4. To record the part number and description the vendor uses:

        - In the **Vendor Part Number** box, type the vendor's part number.

        - In the **Vendor Part Desc** box, type the vendor's part description.

    5. In the **Comments** box, type any comments about the vendor or the vendor's part.

        The comments appear only on the item master.

    6. In the  **Vendor U/M** list, select the vendor's unit of measure.

    7. In the **Conversion Factor** box, type the quantity of vendor's cost units that equal one inventory unit.

        Or click the icon at the end of the **Conversion Factor** box to display the Calculator. Enter the required value.

        To calculate the value, divide a quantity of the vendor's unit of measure by the equivalent quantity of your inventory unit of measure. For instance, if 1 case is equal to 10 each, then the conversion factor is 1/10 or .10.

9. In the **Lead Time (Days)** box, type the number of days lead time you need to order and receive the item.

    Or click the icon at the end of the **Lead Time (Days)** box to display the Calculator. Enter the required value.

10. If your company uses product-based taxes, if the vendor is taxable, and if you want to pay the taxes associated with the vendor's jurisdiction, click the **Jurisdiction** lookup reference, and select a jurisdiction.

11. On the **Toolbar**, click **Save** to keep the vendor.

    You can add bitmapped drawings to a part's item master.



​