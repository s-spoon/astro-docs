---

title: "Group and filter job analysis in Margin Analyzer"
draft: false


---

When you load a new job analysis in the **Margin Analyzer (MRGANLZ)** page, Made2Manage groups or organizes all job orders according to a grouping option. These options are:

-   Customer

-   Facility

-   Group code

-   Job number

-   Part number

-   Product class

-   Sales order number

-   Salesperson

-   Territory

-   Planner

-   Source


    By default, Made2Manage groups all job orders by customer. Expand a group’s row to show the parent or sub job orders. Click a job order to open its **Job Details - \<job number\>** page to see the job order’s details and its cost details.

    Filter out records from the grid on the **Margin Analyzer (MRGANLZ)** page to view specific job orders. You can filter records by using one or all the three criteria:

-   Data – filter using data categories.

-   Selected job order records – filter by selecting groups or selecting individual job orders.

-   Formatting applied to the job analysis – show the job order records which you’ve formatted conditionally.

> [!Note] For more information, see [Change the layout of the job analysis in the Margin Analyzer](change-the-layout-of-the-job-analysis-in-margin-analyzer.md)

Once you filter job records, Made2Manage automatically adjusts the sum for specific columns. You can filter using the following data categories:

-   Job number

-   Job status

-   Group code

-   Source

-   Job part number

-   Customer

-   Product class

-   Planner


> [!Note] You can also filter job records by applying a time period as a part of the data category. Select a type of date to indicate when the job was closed, due, released, or shipped, and then select a date range.

**To group job analysis**

1.  [Load a new job analysis]() or [load a saved job analysis]()

2.  On the toolbar, click the arrow beside **By Customer**, and select the required grouping option.

    Made2Manage groups job orders in the grid according to the option you select. A group’s roll-up row indicates the value of the selected grouping option. For example, if you select **By Sales Person** as the grouping option, each group’s roll-up row shows the name of a salesperson. Expand this row to see the job orders for this salesperson.

> [!Note] By default, Made2Manage selects the By Customer option, and groups all job orders by customer.

> [!Note] To see the job order’s details and its cost details, click the job order to open its Job Details - <job number> page.

**To filter job analysis in Margin Analyzer**

1.  [Load a new job analysis]() or [load a saved job analysis]()

2.  Perform one or all the following:

    » Apply a data filter:

    1. On the toolbar, go to **Data Filter**, and click **Filter**. 
    The **Job Analysis Filter** window appears.

    > [!Note] This window also appears when you load a new job analysis.


    2.  In the **Type** dropdown, select the type of date to indicate when the job was closed, due, released, or shipped.

    3.  In the **Date Range** dropdown, select a time period.

> [!Note] If you select Custom, Made2Manage shows the From and To fields. Enter the **From** and **To** date in the respective field. Or click the Calendar icon to display the calendar. Enter the required date.

    4.  In the **Data Filter** section, click the Lookup Reference of the required field. 
    
    The category’s window appears.

    5.  In the grid under the **Available Entries** section, select the required record, and use the right arrow to move the record into the grid under the **Selected Entries** section.

    Or press **Shift**+ mouse click to select multiple records, and then use the right arrow to move the records.

> [Tip] Double-click a record to move it from the grid under the Available Entries section to the grid under the **Selected Entries** section.

    6.  Click **OK**.

    7.  Repeat the steps **iv** to **vi** to apply filters for other required data categories.

> [!Note] To clear a filter, in the **Job Analysis Filter** window, select the **All** checkbox beside the corresponding field.

1.  Click **OK**.

» **Apply a row selection**:

    1.  Select the required group’s roll-up row to select all the job orders inside. Or expand the roll-up row and select the required job orders.

    2.  On the toolbar, go to **Data Filter**, and click **Filter by Checked Rows**.

    Only the selected rows appear in the grid.

> [!Note] To clear the filter, on the toolbar, go to **Data Filter** and click **Filter by Checked Rows** again.

» **Apply a formatting filter**:

    1.  Apply the required conditional formatting to the job analysis.

> [!Note] For more information, see [Change the layout of the job analysis in the Margin Analyzer]()

    2.  On the toolbar, go to **Data Filter**, and click **Filter by Formatting**.

    Only the conditionally formatted rows appear in the grid.

> [!Note] To clear the filter, on the toolbar, go to **Data Filter** and click **Filter by Formatting**
again.
