---

title: "Generate AR aging status report"
draft: false


---

Use the **AR Aging Status** report to generate Accounts Receivable aging, forecasting, and status reports that help you monitor payments received from customers to:

-   Alert you to late payments.

-   Forecast cash.

You can enter an aging date prior to today's date, if desired. This will produce a report that ignores all activity after the date you input. The report excludes the following:

-   Invoices with invoice dates after the date entered.

-   Payments on invoices made after the date entered.

    By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. For more information about **Advanced Filters**, click here.

**To generate AR Aging Status Report**

1.  Open the **AR Aging Status (RPARAG)** page.

    1.  Select **Financial Management** \> **Financial Reports** \> **Accounts Receivable** \> **AR Aging Status**.

    Or

    2.  Search for **RPARAG** in the **Navigation box** and then select **AR Aging Status AR Aging Status (RPARAG)** page appears.

2.  In the **Selection** dropdown, select **Aging By Due Date** or **Aging By Invoice Date**.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** dropdown is populated based on the type of report selected in the **Selection** list.

5.  Select the **Summary** checkbox to show a high-level data report.

6.  In the **Sort Range** dropdown, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selec- tion** list.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        ≡ In the **From** box, enter the item reference.

        ≡ Click the Lookup Reference and from the **Lookup For From** window, select the required sort item, and click **Select**.

    » **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        ≡ In the **From** and **To** fields, enter the first and last values of the range.

        ≡ Click the Lookup Reference, if available, and from the **Lookup For** window, select the required sort item, and click **Select**.

    » **All**: Select this to include all available items.

7.  In the **Other Variables** section, specify the value in the **Due Date for Aging (default today)** or **Invoice Date for Aging (default today)** fields.

8.  On the toolbar, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.