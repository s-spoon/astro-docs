---

title: "Check inventory valuation"
draft: false
type: Article

---

You can print the business analytics inventory valuation report to view the extended value of inventory parts. Several options are available to group parts.

Business Analytics reports run in Microsoft Excel, so you must have Microsoft Excel 2000 or higher.

**To check inventory valuation**

1.  Open the **Inventory Valuation (BAIVAL)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Production Business Analytics** > **Inventory Valuation**.

    Or

    2.  Search for **BAIVAL** in the **Navigation box** and then select **Inventory Valuation.**

    The **Inventory Valuation (BAIVAL)** page appears.

2.  In the **Selection** dropdown, select the type of inventory values you want to show. You can select from **Part Number**, **Group Code**, **Product Class**, **Location**, and **Negative On Hand Locations**.

3.  In the **Sort Order** area, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** dropdown.

5.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, type the item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Highlight the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, enter the first and last values of the range.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

6.  Set the value for the **Other Variables**.

    By default, **Facility** and **Revision** are displayed. Enter a numeric value in these fields.

7.  On the **Toolbar**, click **Run Report**. The **Please Select** dialog box appears.

    Select **Open now** to open the report in a new tab or select **Notify when Com- plete** to get notification. You can open the downloaded report from **My Reports** page.

    Microsoft Excel loads, and the report data is displayed. For each type of analysis, there are two tabs.

    - The first tab displays information in a spreadsheet format.

    - The second tab shows the information in a chart.

| **Tab Name**                        | **Displays...**                                                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**                        | The raw data extracted from Made2Manage to create the inventory valuation reports.                                                     |
| **Summary**                         | The Summary of Standard Valuations spreadsheet showing the inventory value by Product Class, Group Code, and Facil- ity/Part/Revision. |
| **Valuation by ProductClass Chart** | The Valuation by Product Class chart showing a graphical representation of the inventory value of each Product Class.                |
| **Valuation by Group Code Chart**   | The Valuation by Group Code chart showing a graphical representation of the inventory value of each Group Code.                      |
|
