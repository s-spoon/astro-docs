---

title: "Sales order backlog"
draft: false
type: Article

---

There are three distinct reports in this selection:

**Order Backlog**

Order Backlog in Price and Units. The report shows units and dollars in time buckets of days, weeks, or months. The report always displays 12 buckets or columns. For more information on **Order Backlog**, see [Backlog by Days, Weeks, Months]().

**Back Order**

This report shows open sales order items which have a quantity shipped less than the quantity ordered. The date range available for selection is the Sales Order Release due date. For more information on **Back Order**, see [Check for Items on Back Order]().

**Backlog vs. Quotation Analysis**

This report gets the backlog by looking for open sales orders with items that have an order quantity greater than the shipped quantity. It then reviews open quotes and gets similar information.

The purpose of this report is to:

    -   Let you know how many items and dollars are booked for each of the next 12 days, or weeks, or months.

    -   Show which items have not been completely shipped on open orders.

    -   Assist in analysis of sales trends.

**To generate Sales Order Backlog Report**

1.  Open the **Sales Order Backlog (RPBKLG)** page.

    1. Select **Sales Management** > **Sales Reports** > **Sales Order Status** > **Sales Order Backlog**.

    Or

    2.  Search for **RPBKLG** in the **Navigation box** and then select **Sales Order Back-log**

        The **Sales Order Backlog (RPBKLG)** page appears.

2.  In the **Selection** box, select **Backlog vs Quotations by Customer** or **Back- log vs Quotes by Product Class**.

3.  In the **Sort Order** area, select from the options on how to sort the report. The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  Select the **Summary** checkbox to obtain a high-level data report.

6.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  Type the item reference in the **From** field.

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  Type the first and last values of the range in the **From** and **To** fields.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

6.  Specify the **Other Variables** value to filter the report generation based on **Standard Revision**, **Facility** or other variables.

    Only on selecting **Backlog vs Quotes by Product Class** in the **Selection** box, the **Other Variables** field is populated.

7.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

