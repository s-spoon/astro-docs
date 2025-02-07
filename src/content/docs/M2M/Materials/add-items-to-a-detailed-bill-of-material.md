---

title: "Add items to a detailed bill of material"
draft: false
type: Article

---

A detailed bill of material belongs to a job order. For the part to manufacture, the detailed bill of material lists the component parts and assemblies and their costs. You can add parts and assemblies to a detailed bill of material as necessary.

**To add items to a detailed bill of material**

1. Open the **Job Orders (JO)** page.

    - Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

    Or

    - Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

        The **Job Orders (JO)** page appears.

2. On the **Toolbar**, click Browse.

    The **Browse For Job Orders** window appears.

3. Select a row, and click **Select**. Or, double-click the job order.

    Click **Cancel** to exit from the **Browse For Job Orders** window.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **BOM Detail**.

    The **Job Order Detailed BOM** page appears.

6. On the grid toolbar, click **New**.

    Or click **Copy** to base an item on the selected item.

7. Specify the part:

    1. In the **Component Facility** list, select the component facility.

    2. Click the **Component** Lookup Reference.

        The **Lookup For Component** window appears.

    3. Select the row, and click **Select**. Or, double-click the part number and revision to use.

        Click **Cancel** to exit from the **Lookup For Component** window.

    4. To specify an item number, type it in the **Item No** field.

8. Specify quantities:

    1. In the **Unit Quantity** field, type the quantity required to make one parent part.

        Or

        Click the icon at the end of the **Unit Quantity** field to display the Calculator. Enter the required value.

        If you will use the **Unit Quantity** field to adjust for yielddifferences, you must check the "Adjust unit JODBOM quantities based on operation quantities" on the **Material/Costing** tab of the **Production (CSPROD)** page.

        If you anticipate a yield difference for this item based on historical data, work center efficiency, or some other analysis, enter the percent gain or loss anticipated in the **Unity Quantity** field as a decimal. For instance, if one of an item is required for each parent part and you anticipate a yield loss of 10% for the item in operation 10 of a job order to make 100 of the parent part, you would type **1.10** in the **Unit Qty** box. Your adjusted extended quantity will recalculate to 110, compensating for the 10% yield loss. This recalculated value is used system-wide, including material requirements planning and the purchasing queue.

    2. If the unit of measure is not correct, in the **U/M** list, select the correct unit of measure.

    3. If you do not want to multiply the component quantity by the job quantity, clear the **Extend** check box.

    You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the job quantity is 10, you may only want to use one tooling for the job instead of 10.

9. Specify other details:

    1. If the part is a tool that you use up during production and you want to record its cost separately from materials costs, select the **Tooling** check box.

    2. To associate an operation number with this part, click the **Used In Operation** Lookup Reference.

        The **Lookup For Used In Operation**  window appears.

    3. Select a row that contains the required operation, and click **Select**. Or double-click the row that contains the required operation.

        Click **Cancel** to exit from this screen.

        The operation number helps you determine when you need materials and specifies in the routing exactly when each material is needed. For more information on how operation numbers work with bills of material, see "Working with bills of material" in the **Related Information**.

    4. Type any notes in the **Memo** field.

    5. In the **Source** list, select any one from the list.

    6. In the **Unit Material** field, type the cost per unit.

        Or click the icon at the end of the **Unit Material** field to display the Calculator. Enter the required value.

10. On the **Toolbar**, click **Save**.

​