---

title: "Check for items on back order"
draft: false
type: Article

---

Use the **Sales Order Backlog** report to generate open sales order items which have a quantity shipped less than the quantity ordered. The date range available for selection is the Sales Order Release due date.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. 

**To generate Back Order Report**

1.  Open the **Sales Order Backlog (RPBKLG)** page.

    1. Select **Sales Management** > **Sales Reports** > **Sales Order Status** > **Sales Order Backlog**.

    Or

    2. Search for **RPBKLG** in the **Navigation box** and then select **Sales Order Backlog**.

    The **Sales Order Backlog (RPBKLG)** page appears.

2.  In the **Selection** box, select the information you want to view.

3.  In the **Sort Order** area, select from the options on how to sort the report. The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  Select the **Summary** checkbox to obtain a high-level data report.

6.  In the **Sort Range** area, specify the sort range.

The **Sort On** field is populated based on the type of report selected in the **Selection** field.

The available sort ranges are:

- **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    1.  In the **From** field, enter the item reference.

    2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

- **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    1.  Type the first and last values of the range in the **From** and **To** fields.

    2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

- **All**: Select this to include all available items.

7.  Specify the **Other Variables** value to filter the report generation based on **Beginning Date**.

> [!Note] Only on selecting **Back Order by Part Number** in the Selection box the Other Variables field is populated.

8.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.