---

title: "Change or remove references to parts in a bill of material"
draft: false
type: Article

---

You can change or remove references for bills of material that use a component part number in more than one location on an assembly drawing.

As you change component references in a bill of material, add the new active reference and change the **Effective To** date on the inactive reference.

For existing bills of material, reference quantities you enter in the **BOMREF** window override component quantities in the BOM window.

**To change or remove references to parts in a bill of material**

1. Open the **Standard BOMs (BOM)** page.

    - Select **Production Management** > **Master Data** > **Standard BOMs**.

    Or

    - Search for **BOM** or **Standard BOMs** in the **Navigation box** and then select **Standard BOMs**.

   The **Standard BOMs (BOM)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Standard BOMs** window appears.

3. Select a row, and click **Select**. Or, double-click the bill of material to view.

    Click **Cancel** to exit from the **Browse For Standard BOMs** window.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **BOM Reference**.

    The **BOM Reference** window appears.

    To show both active and inactive references to components in this bill of material, select **Display Inactive References**. To show only active references, select **Show Only Active References**. Active references are those references with **Effective To** dates that are prior to today’s system date, and with **Effective From** dates that are after today's system date.

6. To change a reference:

    1. Highlight the reference in the list box.

    2. Make your changes.

    3. If you make a change that requires an engineering change order:

        1. In the **Effective From** box, type the first date that the change to this reference is valid.

            Or, click the icon at the end of **Effective From** field. This displays the calendar. Select the desired date.

        2. Click the **ECO From** lookup reference.

            **Lookup For ECO From** window appears.

        3. Highlight a row and click **Select** to select the engineering change order approving this change.

            Click **Cancel** to exit from **Lookup For ECO From** window.

        4. In the **Effective To** box, type the last date the change to this reference is valid.

            Or, click the icon at the end of **Effective To** field. This displays the calendar. Select the desired date.

        5. Click the **ECO To** lookup reference.

            **Lookup For ECO To** window appears.

        6. Highlight a row and click **Select** to select the engineering change order approving this change.

            Click **Cancel** to exit from **Lookup For Engineering Change Order To** window.

        7. In the **Revision Level** box, optionally type an identifier for the version of this reference revision.

        8. Click **Save** on the **Toolbar**.

7. To remove a reference:

    1. Highlight the reference in the list box.

    2. Click **Delete** icon under the **Action** column.

        A message, '*Are you sure you would like to delete this record?* appears.

    3. Click **OK** to confirm.

        Click **Cancel** to exit.

​