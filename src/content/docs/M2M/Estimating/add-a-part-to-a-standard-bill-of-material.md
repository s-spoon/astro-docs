---

title: "Add a part to a standard bill of material"
draft: false


---

A part's bill of material contains information about the part and each of its components. You can add component parts to a standard bill of material.

-   Add a part to a standard bill of material graphically.

-   [Add a standard bill of material from scratch](add-a-standard-bill-of-material-from-scratch.md)

## To add a part to a standard bill of material

### If this component part is NOT the first one you are adding

1.  Open the **Standard BOMs (BOM)** page.

    1.  *Select* **Production Management** > **Master Data** > **Standard BOMs**.

    Or

    2.  *Search for* **BOM** *or* **Standard BOMs** *in the* **Navigation box** *and then select **Standard BOMs**.

       The **Standard BOMs (BOM)** *page appears.*

2.  On the **Toolbar**, click **Browse**.

    The **Browse For Standard BOMs** window appears.

3.  Select the row that contains the required bill of material, and click **Select**. Or, double-click the row that contains the required bill of material.

    Click **Cancel** to exit from the **Browse For Standard BOMs** window.

4.  On the child toolbar, click **New**. Or

    On the child toolbar, click **Copy** > **Current** to base the new component on the component highlighted in the BOM component list.

5.  Click the **Component** lookup reference.

    The **Lookup For Component** window appears.

6.  Select the row that contains the required component, and click **Select**. Or, double-click the row that contains the required component.

    Click **Cancel** to exit from the **Lookup For Component** window.

7.  Click **Save** on **Toolbar**.

**To add a component based on a manufacturer part**

1.  On the **Standard BOMs (BOM)** page, on the child toolbar, click **Copy** > **From Manufacturer Part**.

    The **Copying From Manufacturer Part** window appears.

    1.  Select the row that contains the required manufactured part, and click **Select**. Or, double-click the row that contains the required manufactured part.
3.  Click the **Component** lookup reference.

    The **Lookup For Component** window appears.

4.  Select the row that contains the required part number, and click **Select**. Or, double-click the row that contains the required part number.

    Click **Cancel** to exit from the **Lookup For Component** window.

5.  In the **Unit Quantity** field, type the required quantity of the component part.

    Or, click the icon at the end of the **Unit Quantity** field to display the Calculator. Enter the required value.

6.  In the **Memo** field, type descriptive information about the component part. The memo that appears is the memo on the part's item master.

7.  Specify the part's details:

1.  Clear the **Extend** check box, if you do not want to multiply the component quantity by the parent quantity.

    1.  You may want to do this if you need less of the item to complete the operation. For instance, if the item is a tooling and the standard process quantity is 10, you may only want one tooling per standard process quantity instead of 10.

    2.  Click the **Used In Operation** lookup reference, to associate an operation number with this part.

        The **Lookup For Used In Operation** window appears.

        Select the row that contains the required operation number, and click **Select**.

        Or, double-click the row that contains the required operation num- ber.

        Click **Cancel** to exit from the **Lookup For Used In Operation** window.

        The operation number helps you determine when you need mater- ials and specifies in the routing exactly when each material is needed. For more information about how operation numbers work with bills of material, see "Working with bills of material" in the Related Information.

1.  In the **Item Number** field, type an item number.

    The item number identifies the part on the bill of material and draw- ings.

    1.  Select the **Tooling** check box, if the part is a tool that you use up during production and you want to record its cost separately from materials costs.
    2.  In the **Effective Start** field, type the date the part becomes effect- ive on the bill of material.

        Or, click the icon at the end of the **Effective Start** field to display a Calendar. Select the required date.

        Or, double-click in the **Effective Start** field to enter the current date.

    3.  In the **Effective End** field, type the date of the last day the part is effective.

        Or, click the icon at the end of the **Effective End** field to display a Calendar. Select the required date.

        Or, double-click in the **Effective End** field to enter the current date.

    4.  In the **Memo** field, type descriptive information about the com- ponent part.
2.  On the **Toolbar**, click **Save** to keep the component part.