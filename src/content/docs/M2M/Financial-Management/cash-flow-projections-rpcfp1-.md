---

title: "Generate cash flow projections report"
draft: false


---

Use the **Cash Flow Projection Forecasts** report to generate a cash flow forecast to a Microsoft Excel spreadsheet. You can make changes to the format and information using Excel, and you can print the spreadsheet.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

**To generate cash flow projection forecasts report**

1.  Open the **Cash Flow Projection Forecasts (RPCRHE)** page.
    
    1.  Select **Financial Management** \> **Financial Reports** \> **Planning** \> **Cash Flow Projection Forecasts**.

    Or

    2.  Search for **RPCRHE** or **Cash Flow Projection Forecasts** in the **Navigation box** and then select **Cash Flow Projection Forecasts**.

       The **Cash Flow Projection Forecasts (RPCRHE)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort On** field is populated based on the order selected in the **Sort Order** list.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** list.

5.  In the **Sort Range** section, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    ≡ In the **From** field, enter the item reference.

    ≡ Click the Lookup Reference and from the **Lookup For From** window, select the required sort item, and click **Select**.

    » **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    ≡ In the **From** and **To** fields, enter the first and last values of the range.

    ≡ Click the Lookup Reference, if available, and from the **Lookup For** window, select the required sort item, and click **Select**.

    » **All**: Select this to include all available items.

6.  On the toolbar, click **Download**, and then click **Excel Data** to generate the report.

    The **RPCRHE** layout consists of two sheets.

    **Sheet 1** - The sheet is named as M2MData and it is a hidden sheet. This contains the data required for generating the **RPCRHE** report in required format.

    **Sheet 2** - The sheet is named as **RPCRHE** and it is a display sheet. This is a **PivotTable** sheet containing the information in the required format. The first row of the sheet displays the selected **CashFlow Forecast Name** and the second row of the sheet displays the **Display Type** as Daily, Weekly, Monthly.

    The table will display the cash flow projection in selected display type. The first row of the table displays the date /Week Range/ Month Name depending on the selection. The second row onwards will have the projected cash flow for the period.

> [!Note] All numeric values is rounded and formatted to two decimal places as per screen round- ing off. Template should be modified in case of different rounding and format at screen level.