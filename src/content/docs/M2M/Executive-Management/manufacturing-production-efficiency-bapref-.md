---

title: "Manufacturing production efficiency"
draft: false
type: Article

---

Use the **Manufacturing Production Efficiency** page to generate Business Analytics Manufacturing Production Efficiency by:

-   Part Number and Product Class comparing estimated and actual Cost and Time.

-   Employee, Work Center, and Department comparing estimated and actual Time.

    By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

    This report does not include **Advanced Filters** feature.

**To generate manufacturing production efficiency report**

1.  Open the **Manufacturing Production Efficiency (BAPREF)** page.

    1. Select **Executive Information System** > **Business Analytics** > **Production Business Analytics** > **Manufacturing Production Efficiency**.

    Or

    2.  Search for **BAPREF** in the **Navigation box** and then select **Manufacturing Production Efficiency**.

    The **Manufacturing Production Efficiency (BAPREF)** page appears.

2.  In the **Selection** dropdown, select the information you want to view.

3.  In the **Sort Order** dropdown, select from the options on how to sort the report. The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** dropdown, you can select from the predefined date ranges. They are:

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

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        2.  In the **From** and **To** fields, enter the first and last values of the range.

        3.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

7.  Specify the **Other Variables** value to filter the report generation based on **Standard Revision**, **Facility** or other variables.

    On selecting **Dept, Work Center, & Empl (Time)** from the **Selection** list, the **Other Variables** field is not populated.

8.  On the toolbar, click **Run Report**. The **Please select** dialog box appears.

    Select **Open now** to open the report in a new tab or select **Notify when Com- plete** to get notification. You can open the downloaded report from **My Reports** page.

9.  When exporting the **BA Reports** to **Excel**, note that:

    - For **SQL Server** 2012 and later versions, the reports are exported to the **Excel 2007 (.xlsx)** format limiting to a maximum of 1048575 records.

    - For **SQL Server** versions earlier than 2012, the reports are exported to the **Excel 2003 (.xls)** format limiting to a maximum of 65535 records.

    For each type of analysis, there are two tabs:

    - The first tab displays information in a spreadsheet format.

    - The second tab shows the information in a chart.

If you selected the **Dept, Work Center, & Empl (Time)** option, the following tabs are available:

| **Tab Name**                   | **Displays**                                                                                                                              |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**                   | The raw data extracted from Made2Manage to create the manufacturing production efficiency reports.                                      |
| **Summary**                    | The **Production Efficiency** spreadsheet showing the efficiency percentage by employee number and name, department, and work center. |
| **By Employee Number Chart**   | The **Efficiency by Employee chart** showing a graphical representation of employee efficiency by employee number.                      |
| **By Employee Name Chart**     | The **Efficiency by Employee chart** showing a graphical representation of employee efficiency by employee name.                        |
| **By Department Worked Chart** | The **Efficiency by Department Worked chart** showing a graphical representation of efficiency by department.                             |
| **By Work Center Chart**       | The **Efficiency by Work Center chart** showing a graphical representation of efficiency by work center.                                |
|

If you selected one of the **Part No & Prod Class** options, the following tabs display:

| **Tab Name**                                                                                 | **Displays**                                                                                                                                                                                                                                                        |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **M2M Data**                                                                                 | The raw data extracted from Made2Manage to create the manufacturing production efficiency reports.                                                                                                                                                                |
| **Production Efficiency Prod Eff 10 Least Part No Chart** **Prod Eff 10 Most Part No Chart** | The **Production Efficiency spreadsheet** showing the 10 least efficient and 10 most efficient parts by part number, and the average production efficiency by Product Class. A separate chart provides a graphical representation for each type of information. |
|

| **Tab Name**                                                                                                                | **Displays**                                                                                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Prod Eff by Prod Class Chart**                                                                                            |                                                                                                                                                                                                                                                                     |
| **Cost Efficiency** **Cost Eff 10 Least Part No Chart** **Cost Eff 10 Most Part No Chart** **Cost Eff by Prod Class Chart** | The **Cost Efficiency spreadsheet** showing the cost efficiency for the 10 least efficient and 10 most efficient parts by part number, and the cost efficiency by Product Class. A separate chart provides a graphical representation for each type of information. |
|


