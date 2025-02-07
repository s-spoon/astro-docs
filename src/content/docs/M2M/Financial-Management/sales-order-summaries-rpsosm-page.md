---

title: "Generate sales order summaries report"
draft: false


---

Use the **Sales Order Summaries** report to generate a separate line for each sales order. It shows the estimated hours for make items, total selling price, and earliest due date. The purpose is to give a summary and status of each sales order that fits the filter criteria.

The status shown is based on the following criteria:

1.  If the order is closed, the status will be *COST* +/- the percent difference between the estimated and actual costs.

2.  If the order is Cancelled, that status is shown.

3.  If all items on the order are *Buy* items, and any are not received, the status is *Back Order* otherwise the status is *In Process*.

    You can use **Advanced Filters** to customize or expand your filter criteria. For more information about **Advanced Filters**, [click here]()

**To generate sales order summaries report**

1.  Open the **Sales Order Summaries (RPSOSM)** page.

    1.  Select Sales Management \> Sales Reports \> Sales Order Status \> Sales Order Summaries.

    Or

    2.  Search for **RPSOSM** or **Sales Order Summaries** in the **Navigation box** and then select **Sales Order Summaries**.

        The **Sales Order Summaries (RPSOSM)** page appears.

2.  In the **Selection** list, select the information you want to view.

3.  In the **Sort Order** list, select how to sort the report.

    The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** list, select the layout in which you want to view the report.

    The **Layout** list is populated based on the type of report selected in the **Selec- tion** list.

5.  In the **Date Range** area, type or select the date range for the report to be generated. You can select the date from the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** list.

    The **Date On** field is populated based on the type of report selected in the **Selection** list.

To include the entire time frame, leave the date fields blank.

In the **Fill Dates** list, you can select from the predefined date ranges. They are:

» **Custom**: Select this option to enable the **From** and **To** fields in the **Date Range** area.

» **Calendar Year**: Select this option to display the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

» **GL Periods**: Select this option to display the **GL Periods** list. You can select any of the predefined GL period formats from the list.

6.  In the **Sort Range** list, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        ≡ In the **From** field, enter the item reference.

        ≡ Click the Lookup Reference and from the **Lookup For From** window, select the required sort item, and click **Select**.

    » **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        ≡ Type the first and last values of the range in the **From** and **To** fields.

        ≡ Click the Lookup Reference, if available, and from the **Lookup For** window, select the required sort item, and click **Select**.

» **All**: Select this to include all available items.

7.  In the **Other Variables** section, in the **For cost overruns greater than** box, enter the required value.

    Only on selecting **Orders With Cost Over Estimated** in the **Selection** list, the **Other Variables** section becomes available.

2.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.