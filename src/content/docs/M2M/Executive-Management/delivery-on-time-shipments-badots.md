---

title: "Delivery on-time shipments"
draft: false
type: Article

---

Use the **Delivery On-Time Shipments** page to generate Business Analytics giving Delivery On-Time Shipments by Product Class, Company, and Part Number.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

**To generate Delivery On-Time Shipments Report**

1.  Open the **Delivery On-Time Shipments (BADOTS)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Production Business Analytics** > **Delivery On-Time Shipments**.

    Or

    2.  Search for **BADOTS** in the **Navigation box** and then select **Delivery On-Time Shipments.**

    The **Delivery On-Time Shipments (BADOTS)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report. The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

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

        1.  In the **From** field, enter the item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. 
    
        Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, enter the first and last values of the range.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7.  On the **Toolbar**, click **Run Report**. The Please Select dialog box appears.

    Select **Open now** to open the report in a new tab or select **Notify when Com- plete** to get notification. You can open the downloaded report from **My Reports** page.

8.  When exporting the **BA Reports** to **Excel**, note that:

    - For **SQL Server** 2012 and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

    - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

    For each type of analysis, there are two tabs.

    - The first tab displays information in a spreadsheet format.

    - The second tab shows the information in a chart.

    The following tabs are displayed.

| **Tab Name**               | **Displays**                                                                                                                                                         |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**               | The raw data extracted from Made2Manage to create the delivery on-time shipments reports.                                                                           |
| **Summary**                | The **Summary of Delivery On-Time Shipments** spreadsheet showing the average early or late shipments by Product Class, Company, and Facility/Part/Revision.       |
| **By Product Class Chart** | The **Delivery On-Time Shipments by Product Class** chart showing a graphical representation of the average variance from the expected ship date by product class. |
| **By Company Chart**       | The **Delivery On-Time Shipments by Company Name** chart showing a graphical representation of the average variance from the expected ship date by customer.       |
| **By Part Number Chart**   | The **Delivery On-Time Shipments by Part Number** chart showing a graphical representation of the average variance from the expected ship date by part number.       |
|
