---
title: "Add detailed bill of material from existing bill of material"
draft: false
type: Article
---

The detailed bill of material lists the items and assemblies needed to produce a part. For parts that do not already have a standard bill of material, you can add a detailed bill of material to a job order from an existing job order bill of material or standard bill of material.

## To add detailed bill of material from existing bill of material

1. Open the **Job Orders (JO)** page.

    - Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

        Or

    - Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

    The **Job Orders (JO)** page appears.

2. On the toolbar, click **Browse**.

    The **Browse For Job Orders** window appears.

3. Select the required row and click **Select**. Or double-click the job order.

    Click **Cancel** to exit from the **Browse For Job Orders** window.

    On the toolbar, click **More Actions**.

4. Select **More Actions** > **Actions** > **BOM Detail**.

    The **Job Order Detailed BOM** page appears.

5. On the child toolbar, click **Copy**.

6. To set details about a part in the bill of material:

    - Select the component to change in the grid.

    -  Make the necessary changes.

    -  In the **Component Facility** list, select the source facility if this is a make part, and the component facility is not the same as the resident facility.

        >[!Note] Made2Manage creates an inter-facility supply order and an inter-facility demand order when the job order is released to production.

    -  Specify quantities:

        - In the **Unit Quantity** box, enter the quantity required to make one parent part.

            Or click the Calculator icon to display the Calculator. Select an appropriate value.

        - If the **unit of measure** is not correct, in the **U/M** dropdown, select the correct unit of measure.

        -  To multiply the unit quantity by the standard process quantity , select the **Extend** checkbox.

            If you do not want to multiply the component quantity by the job quantity, clear the **Extend** check box. The unit quantity of the component will be used as the extended quantity required.

            You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the job quantity is 10, you may only want to use one tooling for the job instead of 10.

        -  If the part is a tooling that you use up during production and you want to record its cost in a separate tooling category, select the **Tooling** checkbox.

        -  In the **Memo** box, enter any notes.

        - In the **Source** list, select a source for the item.

        - To associate an operation number with this item, click the **Used in Operation**Lookup Reference.

            The **Lookup For Used In Operation** window appears.

        - Select the required row and click **Select**. Or double-click the operation number you want to use.

            Click **Cancel** to exit from **Lookup For Used In Operation** window.

            The operation number helps you determine when you need materials and specifies in the routing. For more information, see *Working with bills of material* in the **Related Information**.

        -  In the **Unit Material** box, enter the cost per unit.

            Or click the Calendar icon to display the Calculator. Select an appropriate value.

7. On the toolbar, click **Save**.

    Or click **Cancel** to discard the changes.

8. Repeat this step for each component part you want to modify.

​