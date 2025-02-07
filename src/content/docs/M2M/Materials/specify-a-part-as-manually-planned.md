---

title: "Specify a part as manually planned (TBD-Dev page doesn't exist)"
draft: false
type: Article

---

If your company uses the **Advanced Scheduling** modules, you can specify that parts be planned manually in the **Interactive Planning** screen or the **Sales Order** pages in ERP. Choosing this setting tells **Infinite Planning** to ignore this part where job creation is concerned. You can also filter within the **Interactive Planning** screens based on whether the parts are **Auto planned** or **Manually planned**.

**To specify a part as manually planned**

1. Open the **Item Master Extension (INX)** page.

    - Select **Production Management** > **Master Data** > **Item Master Extension**.

    Or

    - Search for **INX** or **Item Master Extension** in the **Navigation box** and then select **Item Master Extension.**

    The **Item Master Extension (INX)** page appears.

2. Find the part's information:

    1. Click the **Planning** tab.

    2. Click **Browse** on the **Toolbar**.

        The **Browse For Item Master** window appears.

    3. Select a row and click **Select**. Or double-click the part.

        Click **Cancel** to exit from this window.

3. Make the necessary changes.

4. Select the **Manually Planned** check box to indicate to **Infinite Planning** and **Advanced Planning** that user interaction is required to manually create jobs, versus having Planning automatically create jobs.

    This box only displays for **Make** parts, and only if you have activated the Planning and modules.

5. To apply the settings on the **Material Requirements Plan** tab to other parts:

    1. Select **At a Glance** > **Actions** > **Set Global**.

    2. The **Set Global** window appears.

6. In the **Set Global** window:

    For all the settings, the value selected in the **To** field must be greater than or equal to the value selected in the **From** field.

    1. Click the **Facility From** and **To** arrows to select the range of facilities to filter the items to be updated.

    2. Click the **Part Number From** and **To** lookup reference buttons to select the range of parts to filter the items to be updated.

        >[!NOTE] The part number range will include the item records selected in the **From** and **To** fields. If the same part number is selected in both the **Part Number From** and **To** fields, then the revision number of the corresponding **To** field must be greater than or equal to the revision number of the corresponding **Part Number From** field.

    3. The **Description From** and **To** fields are read-only and are automatically updated with the corresponding description of the parts selected in the **Part Number From** and **To** fields.

    4. Click the **Planner From** and **To** lookup reference buttons to select the range of planners to filter the items to be updated.

    5. Click the **ABC Code From** and **To** lookup reference buttons to select the range of ABC Codes to filter the items to be updated.

    6. Click the **Production Class From** and **To** lookup reference buttons to select the range of production class to filter the items to be updated.

    7. Click the **Group Code From** and **To** lookup reference buttons to select the range of group codes to filter the items to be updated.

    8. Click the **Source From** and **To** arrows to select the range of source to filter the items to be updated.

    9. Click the **Vendor From** and **To** lookup reference buttons to select the range of vendors to filter the items to be updated.

    10. The **Vendor Priority From** and **To** fields are enabled only after entering the vendor number. The user can select the range of priority for the vendors to be updated.

        The filter criteria for the Vendor fields will be **Vendor + Priority**.

    11. Click **Save** on the **Toolbar** to keep the changes.

        Or click **Cancel** on the toolbar to discard the changes.

    12. Click **X** available at the right side of the window to close the **Set Global** window.