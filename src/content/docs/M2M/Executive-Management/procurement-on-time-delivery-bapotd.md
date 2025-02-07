---

title: "Procurement on-time delivery"
draft: false
type: Article

---

Use the **Procurement On-Time Delivery** page to generate business analytics giving procurement on-time delivery by vendor and part number.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

**To generate Procurement on-time delivery report**

1.  Open the **Procurement On-Time Delivery (BAPOTD)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Production Business Analytics** > **Procurement On-Time Delivery**.

    Or

    2.  Search for **BAPOTD** in the **Navigation box** and then select **Procurement On-Time Delivery**.

    The **Procurement On-Time Delivery (BAPOTD)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report. The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** area, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

- **Custom**:

    Selecting this option enables the **From** and **To** fields in the **Date Range** area.

- **Calendar Year**:

    Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the drop-down list.

- **GL Periods**:

    Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the drop-down list.

6.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, enter the item reference.

        2.  Click the lookup reference and select the sort item from the **Lookup for From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  Type the first and last values of the range in the **From** and **To** fields.

        2.  Click the lookup reference (if available) and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7.  On the **Toolbar**, click **Run Report**. The **Please Select** dialog box appears.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

8.  When exporting the **BA Reports** to **Excel**, note that:

     For **SQL Server** 2012 and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

    - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

    For each type of analysis, there are two tabs.

    - The first tab displays information in a spreadsheet format.

    - The second tab shows the information in a chart.

The following tabs are displayed:

| **Tab Name**               | **Displays**                                                                                                                                                                                                          |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**               | The raw data extracted from Made2Manage to create the procurement on-time delivery reports.                                                                                                                         |
| **Summary**                | The **Procurement On-Time Delivery spreadsheet** showing the average early or late delivery times by vendor name and number, as well as the fifteen parts that have the latest average delivery times by part number. |
| **By Vendor Name Chart**   | The **Procurement On-Time Delivery Averages by Vendor Name** chart showing a graphical representation of the average variance from the expected delivery date by vendor name.                                         |
| **By Part Number Chart**   | The **Procurement On-Time Delivery Averages by Part Number** chart showing a graphical representation of the average variance from the expected delivery date by part number.                                         |
| **By Vendor Number Chart** | The **Procurement On-Time Delivery Averages by Vendor Num- ber** chart showing a graphical representation of the average variance from the expected delivery date by vendor number.                                   |
|
