---
title: "Add standard bill of material from scratch"
draft: false
type: Article
---

A bill of material is a list of all the parts and assemblies needed to produce an item. Quotations, sales orders, and job orders use the information on bills of materials. A standard bill of material consists of standard parts only.

[To build a standard bill of material](#to-build-a-standard-bill-of-material)

You can also add a standard bill of material from an existing one or from a job order. See the **Related Information**.

## To add standard bill of material from scratch

1. Open the Standard BOMs (BOM) page.

    1. Select **Production Management** > **Master Data** > **Standard BOMs**.

    Or

    2. Search for **BOM** or **Standard BOMs** in the **Navigation box** and then select **Standard BOMs**.

    The **Standard BOMs (BOM)** page appears.

2. Specify the facility and the parent part:

    1. On the toolbar, click **New**.

    2. In the **Facility** list, select the facility.

    3. Click the **Part Number** lookup reference.

        The **Lookup For Part Number** window appears.

    4. Select the row that contains the required part and click **Select**.

        Or, double-click the row that contains the required part.

        Click **Cancel** to exit from the **Lookup For Part Number** window.

    5. On the toolbar, click **Save**.

3. Designate the component parts using the **BOM** window.

    - Or, to add component parts using the **BOM Reference** window, click **Cancel**, and add the parts according to "Reference parts in a bill of material" topic in the **.

## To build standard bill of material

1. Open the BOM Builder (BOMBLD) page.

    1. Select **Production Management** > **Master Data** > **BOM Builder**.

    Or

    2. Search for **BOMBLD** or **BOM Builder** in the **Navigation box** and then select **BOM Builder**.

    The **BOM Builder (BOMBLD)** page appears.

2. Add the bill:

    1. In the parts list, click the part for which to create the bill of material.

    2. Click **New**.

3. For each component part to add to the bill:

    1. In the parts list, click the component part and drag it onto its parent part in the BOM explosion table.

        Or select the part number in the **Item Master** table. Select the parent part and click on the ellipsis on the **Action** column and select **Add**.

        The part appears under the parent part.

        You can add a component part to any part in the bill, even another component part. For example, if component part **ST18GA** needs component parts **AF123** and **CP0500**, just drag them onto **ST18GA**.

    2. Click the ellipsis under the **Action** column in the BOM Explosion table and select **Standard BOM**. The Standard BOMs page appears.

    3. In the **Item Number** box, enter the item number.

        The item number identifies the part on the bill of material and drawings.

    4. Set quantity information:

        1. In the **Unit Quantity** box, enter the required quantity of the component part.

            Or, click the Calendar icon to display the Calculator. Enter the required value.

        2. Clear the **Extend**checkbox, if you do not want to multiply the component quantity by the parent quantity.

            You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the standard process quantity is 10, you may only want one tooling per standard process quantity instead of 10.

    5. Select the **Tooling** checkbox, if the part is a tool that you use up during production and you want to record its cost separately from materials costs.

    6. In the **Effectivity** box, enter the date the part becomes effective on the bill of material and then the date of the last day the part is effective in **Effectivity Start** and **Effectivity End** fields.

        Or, double-click the **Effectivity Start** and **Effectivity End** fields to enter the current date.

        Or, click the icon at the end of the **Effectivity Start** and **Effectivity End** fields to display the Calendar. Select the required dates.

    7. In the **Memo** box, enter descriptive information about the component part.

    8. On the toolbar, click **Save**.

