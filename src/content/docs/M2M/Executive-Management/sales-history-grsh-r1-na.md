---

title: "Sales history"
draft: false
type: Article

---

The sales history graph gives an overview of the dollars sold each month by customer, salesperson, part number, or product class for a range of dates you select.

**To generate Sales History Graph**

1.  Open the **Sales History (GRSH)** page.

    1. Select **Executive Information System** > **EIS Graphs** > **Sales History**.

    Or

    2.  Search for **GRSH** in the **Navigation box** and then select **Sales History**.
    
        The **Sales History (GRSH)** page appears.

2.  In the **Data** section of the **Selection Criteria** tab, select the value for **By** field based on whether to show the dollars sold by customer, part number, product class, or salesperson.

3.  In the **Filter** field, select the status sales orders to show.

4.  In the **Date Information** section, select from the range of dates the **Start Date** and **End Date**.

5.  In the **Date Range** area, select from the options the date from which you want to generate the graph.

6.  Click the **Graph** tab to view the graph. For more information on the options available in Graph tab, see [to generate graph for reports]() .

    
**Check your sales history over the past 12 months**

You can see a summary of orders, shipments, material, labor, overhead, and gross profit over the past 12 calendar months. You can break the report down by customer, product, or part number. The report also shows best, worst, and average sales for the period, and the sales trend over the past six months.

If you want to use this report, your system administrator must set up the **Command Scheduler** to regenerate the SO **Analysis report** at least nightly. Otherwise, this report gives you old information.

**To check sales history in the last 12 months**

1.  Open the **12 Months Sales History (RPSL12)** page.

    1. Select **Executive Information System** > **EIS Reports** > **12 Months Sales History**.

    Or

    2. Search for **RPSL12** or **12 Months Sales History** in the **Navigation box** and then select **12 Months Sales History (RPSL12)**.

        The **12 Months Sales History (RPSL12)** page appears.

2.  In the **Selection** box, select how to view the history: for all customers, for an individual customer, for a product class, or for a part number.

3.  In the **Sort Order** area, select from the options on how to sort the report. The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** area, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, enter the item reference.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  Type the first and last values of the range in the **From** and **To** fields.

        2.  Click the lookup reference,if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

3.  Specify the **Other Variables** value to filter the report generation based on

    **Standard Revision**, **Facility** or other variables.


    Only on selecting **For a Product Class** and **Of A Part Number** in the **Selection** box, the **Other Variables** field is populated.


4.  On the toolbar, click **Run Report** to generate the report. Or click **Print** to send the report to the printer.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

   