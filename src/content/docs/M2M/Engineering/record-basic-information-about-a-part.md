---
title: "Record basic information about a part"
draft: false

---

Made2Manage stores information about each standard part and assembly in an item master. The first step in adding or revising an item master is to record the part number and other basic information.

## To Record Basic Information About a Part

*Create an Item and Identify the Part in the* **Item Master (INV)** *page*

1.  Open the **Item Master (INV)** page.
    -  *Select* **Production Management** > **Master Data** > **Item Master**.

        Or

    -  *Search for* **INV** *or* **Item Master** *in the* **Navigation box** *and then select* **Item Master.**

        *The* **Item Master (INV)** *page appears.*

2.  Click **New** on the **Toolbar** to create a new part.

    Or click **Copy** on the **Toolbar** to add a new part based on the part the screen shows.

    1.  In the **Copying Item Master** window, *Create New Part Number or Create New Revision Of Selected Part?* message appears.
    1.  Click **Part** or **Revision**.
3.  Identify the part:
    1. Click the **Facility** drop-down arrow and select the resident facility.
    2. If the **Part No** box is not gray, type the part number in it.
    3. If you want to assign your own revision number to the item:
        1.  Select the **Use User Defined Rev** check box.

            **Note:** The user-defined revision number feature must be turned ON. See the **.

        2.  If you are revising the item, type the revision number in the **User Defined Rev** box.
    1.  Type a description of the part in the **Description** box.

*Enter Essential Information in the Master Tab of the Item Master Page and Save*

1.  Enter the **Product Class**.

    *A product class represents a group of similar* *inventory* *items on* *financial statements* *and reports. Product classes help track* *revenues**, costs, and profits.*

    1.  *Click the* **Product Class** *lookup reference.* *The* **Lookup For Product Class** *window appears.*

    1.  *Highlight the row and click* **Select**. Or, double click the row to select the product class.

        *Click* **Cancel** *to exit from the* **Lookup For Product Class** *window*.

1.  Enter the Group Code:

    Group codes exist within product classes. They do not appear on financial statements. They do appear on several inventory reports.

    1.  Click the **Group Code** lookup reference. The **Lookup For Group Code** window appears.

    2.  Highlight the row and click **Select**. Or, double click the row to select the group code.

        Click **Cancel** to exit from the **Lookup For Group Code** window.

1.  Specify units of measure:
    1.  If the item is an item you purchase, click the **Vendor U/M** drop-down arrow and select the unit of measure your primary vendor uses.

        Or, if you do not purchase the item, click the **Vendor U/M** drop-down arrow and select the unit of measure in which you maintain the part in your inventory.

    1.  Click the **Inventory U/M** arrow and select the unit of measure in which you maintain the part in your inventory.
    2.  If the item is a buy item, in the **Conversion Factor** box, type the quantity of vendor's cost units that equal one inventory unit. Or, click the drop-down arrow to select an appropriate value.

        To start the calculator, click the **Qty of Vendor Cost Units/Inv Unit** arrow. To calculate the value, divide a quantity of the vendor's unit of measure by the equivalent quantity of your inventory unit of measure. For instance, if 1 case equals 10 each, then the conversion factor is 1/10 or.10.

        **Note:** If you do not purchase the item, the unit of measure you select in the **Vendor U/M** should be the same as the unit of measure in the **Inventory U/M** box and **Conversion Factor** box must have **1**.

        **Note:** If the part is stored in your inventory in a different unit of measure than you purchased, then select a different unit of measure for **Vendor U/M** and **Inventory U/M**, as applicable. For example, if you received a box of tools containing 12 spanners from your vendor and you want to store them individually in your inventory, then select the **Vendor U/M** as **Box** and **Inventory U/M** as **Ea**. Enter the **Conversion Factor** as **0.083** (1/12).

4.  If the item is taxable, select the **Taxable** check box.

5.  If your company uses product-based taxes and if the item is taxable, click the **Jurisdiction** lookup reference and select a jurisdiction.

6.  Next, you must [record the part's design information.](record-a-parts-design-and-revision-information.md)