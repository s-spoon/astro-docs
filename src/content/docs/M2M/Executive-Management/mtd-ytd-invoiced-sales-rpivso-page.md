---

title: "MTD/YTD invoiced sales"
draft: false
type: Article

---

Use the **MTD/YTD Invoiced Sales** report to generate information from the A/R distribution file. Looks up revenue account numbers in the General Ledger, and determines the current fiscal year and period from the GLRULE table. It does not include unapplied credits. Only customers with invoiced sales are shown. Customers with open sales orders and no invoices will not show on this report.

The purpose of this report is to show invoiceable and invoiced sales for month and year-to-date time buckets.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

**To generate MTD/YTD invoiced sales report**

1.  Open the **MTD/YTD Invoiced Sales (RPIVSO)** page.

    1. Select **Executive Information System** > **EIS Report** > **Financial Performance** > **MTD/YTD Invoiced Sales**.

    Or

    2.  Search for **RPIVSO** or **MTD/YTD Invoiced Sales** in the **Navigation box** and then select **MTD/YTD Invoiced Sales**.

   The **MTD/YTD Invoiced Sales (RPIVSO)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Date Range** area, select the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

- **Custom**:

    Selecting this option enables the **From** and **To** fields in the **Date Range** area.

- **Calendar Year**:

    Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the dropdown list.

- **GL Periods**:

    Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the dropdown list.

6.  In the **Sort Range** area, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, type item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, type the first and last values of the range.

        2.  Click the lookup reference, if available and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.