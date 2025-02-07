---

title: "Update the selling price of a group of parts"
draft: false
type: Article

---

Use the **Item Master Update Selling Price (INVUPSP)** window to update the selling price for multiple parts. In this window, you can specify the filter criteria for selecting the parts for which you want to update the selling price. You can also specify the percentage or amount by which you want to increase the selling price of the selected parts. To decrease the selling price, specify the amount by which you want to decrease the selling price of the parts.

**To update the selling price of a group of parts**

1. Open the **Item Master Update Selling Price (INVUPSP)** page.

    - Select **Utilities** > **Company Setup** > **Sales** > **Item Master Update Selling Price**.

    Or

    - Search for **INVUPSP** in the **Navigation box** and then select **Item Master Update Selling Price.**

        The **Item Master Update Selling Price (INVUPSP)** page appears.

2. In the **With** area of the **Filter** tab, specify the value by which you want to update the selling price.

    1. Specify the percentage increase for the selling price.

        1. In the **With** area of the **Filter** tab, select **Update Price By Percentage**.

        2. In the **Update Price By Percentage** field, specify the percentage by which you want to increase the selling price.

            You cannot specify a negative percentage value.

    2. Specify the amount by which you want to modify the selling price.

        1. In the **With** area of the **Filter** tab, select **Update Price By Amount**.

        2. In the **Update Price By Amount** field, specify the amount by which you want to modify the selling price.

            Specify a negative value to decrease the selling price.

3. In the **For** area of the **Filter** tab, specify the required filter criteria.

    1. To filter by the facility, from the **FacilityFrom** and **Thru** lists, select the first and the last facilities for which you want to modify the selling price.

        Select the same facility in the **From** and **Thru** lists to modify for one facility only.

    2. To select only specific parts, in the **Part NumberFrom** and **Thru** fields, select the first and the last parts of the range of parts for which you want to modify the selling price.

        >[!NOTE] As the part number is associated with a facility, you can select a part in the From and Thru fields only after selecting a facility.

    3. Click the lookup reference button and select the part from the **Lookup For Part Number From** window.

    4. Specify the same part in the **From** and **Thru** fields to modify the selling price for only one part.

    5. To specify the part revisions, perform one of the following actions:

        - In the **RevisionFrom** and **Thru** fields, type the first and the last revision for the part for which you want to modify the selling price.

        - Click **Current Revision Only** to modify the selling price for only the latest revision of the selected parts.

        - Click **All Revisions** to modify the selling price for all revisions of the selected parts.

    6. To modify the selling price only for parts having specific ABC codes, from the **ABC CodeFrom** and **Thru** lists, select the first and the last ABC codes for which you want to modify the selling price.

        Specify the same ABC code in the **From** and **Thru** lists to modify the selling price of the selected parts having that ABC code only.

    7. To modify the selling price only for parts belonging to a specific product class, in the **Product ClassFrom** and **Thru** fields, select the first and the last product class for which you want to modify the selling price.

        As the product class is associated with a facility, you can select a product class in the **From** and **Thru** fields only after selecting a facility.

        Specify the same product class in the **From** and **Thru** fields to modify the selling price of the selected parts belonging to that product class only.

    8. To modify the selling price only for parts having a specific group code, in the **Group CodeFrom** and **Thru** fields, select the first and the last group codes for which you want to modify the selling price.

        Specify the same group code in the **From** and **Thru** fields to modify the selling price of the selected parts belonging to that group code only.

    9. To modify the selling price only for parts having specific **Source** values, from the **SourceFrom** and **Thru** lists, select the first and the last **Source** values for which you want to modify the selling price.

        Specify the same **Source** value in the **From** and **Thru** lists to modify the selling price of the selected parts having that **Source** value only.

4. Apply the filter criteria set.

    1. To apply the filter criteria set, on the toolbar, click **Build Filter**.

    2. To clear all the filter criteria, on the toolbar, click **Clear Filter**.

        The parts that match the set filter criteria are listed in a grid in the **Items** tab with their existing selling price.

5. To update the new selling price in the Item Master, on the grid toolbar, click **Update Item Master**.

6. If required, update the selling price for items currently having a selling price of zero.

    If the current selling price of one or more parts is zero, the message *"Do you want to update selling price for parts where current selling price is Zero?"* is displayed. Click **Yes** if you want to update the selling price for items currently having a selling price of zero. Click **No** to retain the selling price as zero.

    - This is applicable only when you specify the amount by which you want to modify the selling price and not the percentage.

    - The selling price is updated in the Item Master. The message *"Selling Price has been updated. Do you want to view the report?"* is displayed.

    - If the selling price is decreased by setting a negative **Update Price By Amount** value and if the new selling price value is less than zero, then the selling price of the corresponding parts is updated as zero.

7. Click **Yes** to view the report. Click **No** if you do not want to view the report.

8. If you had clicked **Yes**, the **Made2Manage Report Viewer** renders the **Selling Price Update Report** in a new tab of the browser.

9. Click the **Print** icon to print the report.

    Or click the **Save** icon to save the report.