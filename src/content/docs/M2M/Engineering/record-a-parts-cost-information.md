---
title: "Record a part's cost information"
draft: false

---

Made2Manage stores information about each standard part or assembly in an item master. Quotations, sales orders, job orders, and financial reports use the Item master's cost information. The fourth step in adding an item master is to record cost information.

**Note:** Before you do this, you must record the part's basic information, design and revision information, and production information.
<br>How?
## To record a part's cost information

*Open the Costs Tab and Update Basic Information*

1.  Open the **Item Master (INV)** page.
    1.  *Select* **Production Management** > **Master Data** > **Item Master**.

        Or

    2.  *Search for* **INV** *or* **Item Master** *in the* **Navigation box** *and then select* **Item Master.**

        *The* **Item Master (INV)** *page appears.*

2.  Click **Browse** on the **Toolbar**.

    The **Browse For Item Master** window appears.

3.  Select a row and click **Select**. Or, double-click the item.
4.  Click the **Costs** tab.

    **Note:**

    The **Costs** tab has two sections.

-   Section 1: Standard
-   Section 2: Has one of the following labels based on the inventory costing reference you use and the selection made in **Production** > **Master Costing** > **Costing** > **Inventory Costing Reference.**

    » Average Cost

    » Last Actual Cost

    » Current Rolled Cost

-   For more information on choosing a costing reference, see **.

5.  Make the necessary changes:
    1.  In the **Material** field in the **Standard** column, specify the standard material cost per unit of measure.
    1.  If the second column label is **Current Rolled Cost**, in the **Material** field of that column, specify the standard material cost.

    **Note:**

-   As the standard material cost changes over time, Made2Manage calculates the average standard material cost and updates the **Material** field in the **Average Cost** column.
-   The **Vendor Pur Price** field appears if the item is a buy item. It shows your cost in terms of the vendor's unit of measure.

*Enter Information About Items That You Do Not Buy*

If you do not buy the item:

1.  Type the standard labor cost in the **Labor** field of the **Standard**

    column.

2.  If the second column label is **Average Cost**, type the standard labor cost in the **Labor** field.
1.  Type the standard overhead cost in the **Overhead** field of the **Standard** column.
2.  If the second column label is **Average Cost**, type the standard overhead cost in the **Overhead** field.

    As the standard labor and overhead costs change over time, Made2Manage calculates the average standard labor and overhead costs and updates the **Average Cost** column.

*Allow Cost Roll Up*

1.  To allow the standard costs to roll up, select the **Allow Cost Roll Up** check box in the **Standard** column. For more information, see **.

    **Note:**

-   After you roll up costs in the **Inventory Cost Roll Up (CRUP)** page, the costs in the **Item Master (INV)** page are calculated based on the Yields in **RTG** page.
-   If the unit of measure is Each (EA) or Piece (PC), the Operation quantity will be rounded up to the next integer after the calculation with yield and used for computing the labor and overhead costs.
-   If the unit of measure is other than EA or PC, the Operation quantity will remain as it is (decimal/integer) after the calculation and the same is used for computing the labor and overhead costs.
2.  To allow the costs in the second column to roll up, select the **Allow Cost Roll Up** check box in the second column.

*Enter other details*

1.  Click the **Planning** tab:
    1.  In the **Safety Stock** field, specify the minimum quantity to keep in stock.
    2.  In the **Re-Order Qty** field, specify the minimum quantity to re-order.
2.  Click the **Quantity** tab:

    » To cycle count the item, in the **Cycle Counts/Year** field, specify the number of times per year to cycle count the item.

*Save*

-   Click **Save** on the **Toolbar** to save the information.

    **Note:** If the item is a buy item, you can record the item's vendors.



    **Note:** For information on to view a multidimensional part information's, see [Viewing Multidimensional part information.](assign-vendors-to-items-you-purchase.md)