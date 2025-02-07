---

title: "Add a detailed bill of material to a job order"
draft: false
type: Article

---

The detailed bill of material lists the items and assemblies needed to produce a part. For parts that do not already have a standard bill of material, you can add a detailed bill of material to your job orders.

You can also add a detailed bill of material from a standard bill of material or another job order detailed bill of material.

**To add a detailed bill of material to a job order**

1. Open the **Job Orders (JO)** page.

    - Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

    Or

    - Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

        The **Job Orders (JO)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Job Orders** window appears.

3. Select a row, and click **Select**. Or, double-click the job order to use.

    Click **Cancel** to exit from the **Browse For Job Orders** window.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **BOM Detail**.

    The **Job Order Detailed BOM** page appears.

6. On the grid toolbar, click **New** to add a new item. Or, click **Copy**to base the item on the one selected in the grid.

7. Specify the component part details:

    1. From the **Component Facility** list, select the source facility if the part is a **Make** part, and the component facility is not the same as the resident facility. Made2Manage will create an inter-facility supply order and an inter-facility demand order when the job order is released to production.

    2. To add a standard part:

        1. Click the **Component** lookup reference.

            The **Lookup For Component** window appears.

        2. Select a row, and click **Select**. Or, double-click the part number.

    3. To add a non-standard part:

        1. In the **Component** field, type the component number.

        2. Tab out of the field.

        3. If the starting characters of the component number entered match the starting characters of an already existing part number in the **Item Master (INV)**, a browse window opens; if you click **Cancel** in the browse window or press **Esc**, the value entered in the **Component** field is retained, the **Rev** value is set to **NS** and the **Non Standard Item** check box is automatically selected.   
        If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Rev** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

        4. In the **Description** field, type the description.

    5. To specify an item number, type it in the **Item No** field.

    6. In the **Unit Quantity** field, type the quantity required to make one parent part.

    7. If the **unit of measure** is not correct, from the **Unit of Measure** list, select the correct unit of measure.

    8. To multiply the unit quantity by the standard process quantity, select the **Extend** check box.

        If you do not want to multiply the component quantity by the job quantity, clear the **Extend** check box. The unit quantity of the component will be used as the extended quantity required.

        You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the job quantity is 10, you may only want to use one tooling for the job instead of 10.

        >[!NOTE] If the **Adjust Unit JODBOM Quantities Based on Operation Quantities** check box is selected in **CSPROD** \> **Material/Costing** tab, then the Extended Quantity and Total BOM Cost in the **JODBOM** are calculated based on the Yields in **RTG**.

    8. If the part is a tool that you use it during production and you want to record its cost in a separate tooling category, select the **Tooling** check box.

    9. Type any notes in the **Memo** field.

    10. In the **Source** list, select a source for the item.

    11. To associate an operation number with this item:

        1. Click the **Used In Operation** lookup reference.

            The **Lookup For Used In Operation** window appears.

        2. Select the required row, and click **Select**. Or, double-click the operation number that you want to use.

            The operation number helps you determine when you need materials and specifies in the routing exactly when each material is needed.

    12. In the **Unit Material** field, type the cost per unit.

8. On the **Toolbar**, click **Save**.

9. Repeat steps 2 through 6 for each component part to add.

​