---

title: "Generate purchase order variances report"
draft: false


---

Use the **Purchase Order Variances** report to generate details for:

-   PO items that have been invoiced with a resulting price variance.

-   PO items that have been received before or after their requested date.

    By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. For more information about **Advanced Filters**, click here.

**To generate Purchase Order Variances report**:

1.  Open the **Purchase Order Variances (RPPOV)** page.

    1.  Select **Production Management** \> **Production Reports** \> **Purchasing** \> **Purchase Order Variances**.

    Or

    2.  Search for **RPPOV** in the **Navigation box** and then select **Purchase Order Variances.**

       the **Purchase Order Variances (RPPOV)** page appears.

2.  In the **Selection** dropdown, select **Purchase Cost Variance**.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort Order** dropdown is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** list is populated based on the type of report selected in the **Selection** list.

5.  Select the **Summary** checkbox to show a high-level data report.

6.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date from the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** list.

    The **Date On** field is populated based on the type of report selected in the **Selection** list.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** list, you can select from the predefined date ranges. They are:

    » **Custom**:

    Select this option to enable the **From** and **To** fields in the **Date Range** area.

    » **Calendar Year**:

    Select this option to display the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

    » **GL Periods**:

    Select this option to display the **GL Periods** list. You can select any of the predefined GL period formats from the list.

7.  In the **Sort Range** dropdown, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        ≡ In the **From** field, enter the item reference.

        ≡ Click the Lookup Reference and from the **Lookup For From** window, select the required sort item, and click **Select**.

    » **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        ≡ In the **From** and **To** fields, enter the first and last values of the range.

        ≡ Click the Lookup Reference, if available, and from the **Lookup For** window, select the required sort item, and click **Select**.

» **All**: Select this to include all available items.

8.  In the **Other Variables** section, filter the report generation based on **Standard Revision**, **Facility** or other variables.

    Only on selecting **Part Number** and **Cost Vendor Name** options in the **Sort Order** list, the **Other Variables** section becomes available.

9.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.