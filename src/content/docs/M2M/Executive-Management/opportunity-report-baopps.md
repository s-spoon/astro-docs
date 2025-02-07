---

title: "Opportunity report"
draft: false
type: Article

---

Use the **Opportunity Report** to generate Business Analytics Report showing the information from your recorded Opportunities.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

The **Business Analytics sales opportunity report** is a pivot table. For more information on creating pivot tables, see [Creating a Business Analytics report layout]().

**To generate opportunity report**

1.  Open the **Oppurtunity Report (BAOPPS)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Sales Business Analytics** > **Opportunity Report**.

    Or

    2.  Search for **BAOPPS** in the **Navigation box** and then select **Oppurtunity Report.**

    The **Oppurtunity Report (BAOPPS)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report. The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** list, select the layout in which you want to view the report.

    The **Layout** list is populated based on the type of report selected in the **Selection** list.

5.  In the **Date Range** area, enter the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** list.

    The **Date On** field is populated based on the type of report selected in the **Selection** list.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** list, you can select from the predefined date ranges. They are:

    - **Custom**:

        Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - **Calendar Year**:

        Selecting this option displays the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

    - **GL Periods**:

        Selecting this option displays the **GL Periods** list. You can select any of the predefined GL period formats from the list.

6.  In the **Sort Range** list, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    When exporting the **BA Reports** to **Excel**, note that:

    - For **SQL Server** 2012 and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

    - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, enter the item reference. 


        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, enter the first and last values of the range.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

    The report data displays the following tabs as shown below:

| **Tab Name** | **Displays**                                                                        |
|--------------|------------------------------------------------------------------------------------|
| M2M Data     |    The raw data extracted from Made2Manage to create the sales opportunities reports. |

|               |                                                                                                                                                                                                                                                |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Salesperson Summary         | The Sales Opportunities spreadsheet on the **Salesperson Summary** tab showing total sales opportunities by sales person.                                                                                                                                  |
| Bar Chart by Sales Person | The **Bar Chart by Sales Person** showing a graphical representation of the source and stage of the opportunity, the probability that the opportunity becomes a sale, the quarter in which the opportunity exists, and what the next step is when necessary. |
|