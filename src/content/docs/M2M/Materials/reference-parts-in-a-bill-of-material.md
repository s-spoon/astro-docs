---

title: "Reference parts in a bill of material"
draft: false
type: Article

---

Some bills of material may use a component part number in more than one location on an assembly drawing. You can reference each instance of the part on the assembly's bill of material. If you have multiple references to a component, the component quantity will be the sum of the reference quantities.

As you change component references in a bill of material, add the new active reference and change the **Effective To** date on the inactive reference.

You can reference component parts in new and existing bills of material. For new bills of material, reference quantities you enter in the **BOMREF** window appear as component quantities in the **BOM** page. For existing bills of material, reference quantities you enter in the **BOM Reference** window **override** component quantities in the **BOM** page.

**To reference parts in a bill of material**

1. Open the Standard BOMs (BOM) page.

    - Select **Production Management** > **Master Data** > **Standard BOMs**.

    Or

    - Search for **BOM** or **Standard BOMs** in the **Navigation box** and then select **Standard BOMs**.

   The **Standard BOMs (BOM)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Standard BOMs** window appears.

3. Select a row, and click **Select**. Or, double-click the bill of material to view.

    Click **Cancel** to exit from **Browse For Standard BOMs** window.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **BOM Reference**.

    The **BOM Reference** window appears.

    To show both active and inactive references to components in this bill of material, click **Display Inactive References**. To show only active references, click **Show Only Active References**. Active references are those references with **Effective From** dates prior to the current system date and with **Effective To** dates after the current system date.

6. Add a component reference:

    1. On the grid toolbar, click **New**.

        Or, on the grid toolbar, click **Copy** to add a component reference based on the current component reference.

    2. Click the **Component**  Lookup Reference.

        **Lookup For Component** window appears.

    3. Highlight a row and click **Select**.

        Click **Cancel** to exit from the window.

    4. In the **Revision Level** box, type the revision number that identifies this component.

    5. In the **Reference** box, type the reference number that identifies this component.

        References to active parts must be unique to the parent part, unless you deliberately specify otherwise.

    6. Click the **Operation Where Used** Lookup Reference and select the operation that uses this component reference.

    7. In the **Quantity Per** box, type the quantity of this component used in this operation.

    8. Add any notes about this reference in the **Notes** box.

    9. If adding this component reference requires an engineering change order:

        1. In the **Effective From** box, type the first date that this component reference is valid.

            Or, click the icon at the end of the **Effective From**  field. This displays a calendar. Select the desired date.

        2. Click the **ECO From** Lookup Reference and select the engineering change order approving this reference.

        3. In the **Effective To** box, type the last date that this component reference is valid.

            Or, click the icon at the end of the **Effective To** field. This displays a Calendar. Select the desired date.

        4. Click the **ECO To** Lookup Reference and select the engineering change order approving this reference.

7. On the **Toolbar**, click **Save**.

​