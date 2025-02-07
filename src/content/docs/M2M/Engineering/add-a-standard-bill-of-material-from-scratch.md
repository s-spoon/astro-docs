---

title: "Add a standard bill of material from scratch"
draft: false

 
---

A bill of material is a list of all the parts and assemblies needed to produce an item. Quotations, sales orders, and job orders use the information on bills of materials. A standard bill of material consists of standard parts only.

[To build a standard bill of material](add-a-standard-bill-of-material-from-scratch.md#to-build-a-standard-bill-of-material) 

You can also add a standard bill of material from an existing one or from a job order.

## To add a standard bill of material from scratch

1.  Open the **Standard BOMs (BOM)** page.
1.  *Select* **Production Management** > **Master Data** > **Standard BOMs**.

    Or

1.  *Search for* **BOM** *or* **Standard BOMs** *in the* **Navigation box** *and then select* Standard BOMs.

    The **Standard BOMs (BOM)** *page appears.*

1.  Specify the facility and the parent part:
1.  On the **Toolbar**, click **New**.
    1.  In the **Facility** list, select the facility.
    2.  Click the **Part Number** lookup reference.

        The **Lookup For Part Number** window appears.

    3.  Select the row that contains the required part, and click **Select**. Or, double-click the row that contains the required part.

        Click **Cancel** to exit from the **Lookup For Part Number** window.

    4.  On the **Toolbar**, click **Save**.
2.  Designate the component parts using the **BOM** window.


    Or

    to add component parts using the **BOM Reference** window, click **Cancel**, and add the parts according to "Reference parts in a bill of material" topic in the **.

## To build a standard bill of material

1.  Open the **BOM Builder (BOMBLD)** page.
1.  *Select* **Production Management** > **Master Data** > **BOM Builder**.

    Or

    *Search for* **BOMBLD** *or* **BOM Builder** *in the* **Navigation box** *and then select* BOM Builder.

    The **BOM Builder (BOMBLD)** *page appears.*

1.  Add the bill:
1.  In the parts list, click the part for which to create the bill of material.
1.  Click **New**.
2.  For each component part to add to the bill:
1.  In the parts list, click the component part and drag it onto its parent part in the BOM explosion table.

    Or highlight the part number in the **Item Master** table. Select the parent part and click on the ellipsis on the **Action** column and select **Add**.

    The part appears under the parent part.

    You can add a component part to any part in the bill, even another component part. For example, if component part **ST18GA** needs component parts **AF123** and **CP0500**, just drag them onto **ST18GA**.

    1.  Click the ellipsis under the **Action** column in the BOM Explosion table and select **Standard BOM**. The Standard BOMs page appears.
    2.  In the **Item Number** field, type the item number.

        The item number identifies the part on the bill of material and drawings.

    3.  Set quantity information:
        1.  In the **Unit Quantity** field, type the required quantity of the component part.

            Or, click the icon at the end of the **Quantity** field to display the Calculator. Enter the required value.

        2.  Clear the **Extend** check box, if you do not want to multiply the component quantity by the parent quantity.

            You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the standard process quantity is 10, you may only want one tooling per standard process quantity instead of 10.

1.  Select the **Tooling** check box, if the part is a tool that you use up during production and you want to record its cost separately from materials costs.
    1.  In the **Effectivity** fields, type the date the part becomes effective on the bill of material and then the date of the last day the part is effective in **Effectivity Start** and **Effectivity End** fields.

        Or, double-click the **Effectivity Start** and **Effectivity End** fields to enter the current date.

        Or, click the icon at the end of the **Effectivity Start** and **Effectivity End** fields to display the Calendar. Select the required dates.

    2.  In the **Memo** field, type descriptive information about the component part.
    3.  Click **Save** on **Toolbar**.