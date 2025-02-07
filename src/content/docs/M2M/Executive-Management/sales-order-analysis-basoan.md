---

title: "Sales order analysis"
draft: false
type: Article

---

Use the **Sales Order Analysis** page to generate Business Analytics Sales Order Analysis By Customer, Part Number, State, Country, Product Class, Group Code, Territory, and Sales Code.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

**To generate Sales Order Analysis Report**

1.  Open the **Sales Order Analysis (BASOAN)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Sales Business Analytics** > **Sales Order Analysis**.

    Or

    2.  Search for **BASOAN** in the **Navigation box** and then select **Sales Order Analysis.**

        The **Sales Order Analysis (BASOAN)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** area, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

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

6.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, enter the item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, enter the first and last values of the range.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

4.  On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

5.  For each type of analysis, there are two tabs.

    - The first tab displays information in a spreadsheet format.

    - The second tab shows the information in a chart.

    When exporting the **BA Reports** to **Excel**, note that:

    - For **SQL Server** 2012 and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

    - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

    The following tabs are displayed:

| **Tab Name**                                        | **Displays**                                                                                                               |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**                                        | The raw data extracted from Made2Manage to create the sales analysis.                                                    |
| **Summary by Customer** **By Customer Chart**       | The Sales Analysis by Customer shows your top 10 customers in descending order.                                            |
| **Summary by Part Number** **By Part Number Chart** | The Sales Analysis by Part Number shows amounts for each part, in order by facility, part number, and revision number.   |
| **Summary by Product Class By Product Class Chart** | The Sales Analysis by Product Class shows amounts for each part, in order by facility, part number, and revision number. |
| **Summary by Group Code By Group Code Chart**       | The Sales Analysis by Group Code shows amounts for each group code in alphabetical order.                                  |
| **Summary by Sales Code By Sales Code Chart**       | The Sales Analysis by Sales Code shows amounts for each sales code in alphabetical order.                                  |
| **Summary by State By State Chart**                 | The Sales Analysis by State shows amounts for each state in alphabetical order.                                            |
| **Summary by Territory By Territory Chart**         | The Sales Analysis by Territory shows amounts for each territory in alphabetical order.                                    |
| **Summary by Country By Country Chart**             | The Sales Analysis by Country shows amounts for each country in alphabetical order.                                        |
|
