---

title: "Activity report"
draft: false
type: Article

---

Use the **Activity Report** page to generate the business analytics activity report.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

**To generate an activity report**

1.  Open the **Activity Report (BAACTV)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Sales Business Analytics** > **Activity Report**.

    Or

    2. Search for **BAACTV** in the **Navigation box** and then select **Activity Report**.

        The **Activity Report (BAACTV)** page appears.

2.  From the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report.

        The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** area, select the layout in which you want to view the report.

        The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

        The **Date On** field is populated based on the type of report selected in the **Selection** field.

        To include the entire time frame, leave the date fields blank.

        In the **Fill Dates** area, you can select from the predefined date ranges. 
        
        They are:

    - **Custom**:

        Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - **Calendar Year**:

        Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the dropdown list.

    - **GL Periods**:

        Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the dropdown list.

6.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1. In the **From** field, type the item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1. In the **From** and **To** fields, enter the first and last values of the range.

        2. Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7. On the toolbar, click **Run Report**. The **Please select** dialog appears.

8. Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page
    
    When exporting the **BA Reports** to **Excel**, note that:

        - For **SQL Server 2012** and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

        - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

