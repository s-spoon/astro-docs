---
title: "Add part to standard bill of material"
draft: false
type: Article
---

A part's bill of material contains information about the part and each of its components. You can add component parts to a standard bill of material.

- [Add a part to a standard bill of material graphically]()

- [Add a standard bill of material from scratch](add-a-standard-bill-of-material-from-scratch.md)

## To add part to standard bill of material

>[!Note] Follow this procedure only if the component part is *not* the first one you are adding to the bill of material.

1. Open the **Standard BOMs (BOM)** page.

    1. Select **Production Management** > **Master Data** > **Standard BOMs**.

    Or

    2. Search for **BOM** or **Standard BOMs** in the **Navigation box** and then select **Standard BOMs**.

    The **Standard BOMs (BOM)** page appears.

2. On the toolbar, click **Browse**.

    The **Browse For Standard BOMs** window appears.

3. Select the row that contains the required bill of material, and click **Select**.

    Or double-click the row that contains the required bill of material.

    Click **Cancel** to exit from the **Browse For Standard BOMs** window.

4. On the child toolbar, click **New**.

    Or

    On the child toolbar, click **Copy** > **Current** to base the new component on the component highlighted in the BOM component list.

5. Click the **Component** lookup reference.

    The **Lookup For Component** window appears.

6. Select the row that contains the required component, and click **Select**.

    Or double-click the row that contains the required component.

    Click **Cancel** to exit from the **Lookup For Component** window.

7. Click **Save**. The part details are added to the standard bill of material.

## To add component based on manufacturer part

1. On the **Standard BOMs (BOM)** page, on the child toolbar, click **Copy** > **From Manufacturer Part**.

    The **Copying From Manufacturer Part** window appears.

2. Select the row that contains the required manufactured part, and click **Select**.

    Or, double-click the row that contains the required manufactured part.

3. Click the **Component** lookup reference.

    The **Lookup For Component** window appears.

4. Select the row that contains the required part number, and click **Select**.

    Or, double-click the row that contains the required part number.

    Click **Cancel** to exit from the **Lookup For Component** window.

5. In the **Unit Quantity** box, enter the required quantity of the component part.

    Or, click the Calculator icon to display the Calculator. Enter the required value.

6. In the **Memo** box, enter descriptive information about the component part.

    The memo that appears is the memo on the part's item master.

7. Specify the part's details:

    1. Clear the **Extend** checkbox, if you do not want to multiply the component quantity by the parent quantity.

    2. You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the standard process quantity is 10, you may only want one tooling per standard process quantity instead of 10.

    3. Click the **Used In Operation** lookup reference, to associate an operation number with this part.

        The **Lookup For Used In Operation** window appears.

        Select the row that contains the required operation number, and click **Select**.

        Or, double-click the row that contains the required operation number.

        Click **Cancel** to exit from the **Lookup For Used In Operation** window.

        <[!Note] The operation number helps you determine when you need materials and specifies in the routing exactly when each material is needed. For more information about how operation numbers work with bills of material, see "Working with bills of material" in the Related Information.

    4. In the **Item Number** box, enter an item number.

        The item number identifies the part on the bill of material and drawings.

    5. Select the **Tooling** checkbox, if the part is a tool that you use up during production and you want to record its cost separately from materials costs.

    6. In the **Effective Start** box, enter the date the part becomes effective on the bill of material.

        Or click the Calendar icon to display a Calendar. Select the required date.

        Or double-click in the **Effective Start** field to enter the current date.

    7. In the **Effective End** box, enter the date of the last day the part is effective.

        Or click the Calendar icon to display a Calendar. Select the required date.

        Or double-click in the **Effective End** field to enter the current date.

    8. In the **Memo** box, enter descriptive information about the component part.

8. Click **Save**. The component part is added.

​